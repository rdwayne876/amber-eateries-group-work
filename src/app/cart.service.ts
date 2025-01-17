import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Product } from './product';

@Injectable({
	providedIn: 'root',
})
export class CartService {
	constructor(private api: DataService) {}

	public SALES_TAX = 1.5;

	/**
	 * Converts the cart in `localStorage` to an array
	 * @returns The `cart` item from local storage as an array
	 */
	getCart(): Product[] {
		return JSON.parse(localStorage.getItem('cart') as string);
	}

	/**
	 * Removes all items from the cart
	 */
	clearCart(): void {
		localStorage.setItem('cart', JSON.stringify([]));
	}

	/**
	 * Calculates the amount of items in the cart
	 * @returns The amount of products in the cart
	 */
	getCartCount(): number {
		return this.getCart().length ?? 0;
	}

	/**
	 * Calculates the grand total of all items in the cart
	 * @returns The sum of all products subtotal in the cart
	 */
	getCartTotal(): number {
		let subTotals = 0;
		const cart = this.getCart();

		// Calculates subtotal for each item in cart
		cart.forEach((product: Product) => {
			subTotals += product.price * (product.amount as number);
		});

		// Sets the cart total to the calculated value
		return subTotals;
	}

	/**
	 * Inserts and item to the cart array
	 * @param itemId An object that represents a product/cart item
	 */

	addCartItem(itemId: number): void {
		// Get all the products
		this.api.sendGetRequest().subscribe((resp: any[]) => {
			let products = resp;

			let currentCart: any[] = [];

			// If `cart` is found in localStorage we store it in `currentCart`
			if (!!localStorage.getItem('cart')) {
				currentCart = this.getCart();
			}

			// Search for duplicate cart item
			let duplicateCartItem: any = currentCart.find((cartItem: any) => cartItem.id == itemId);

			// If duplicate cart item is found we increment the amount instead of inserting a new product to the cart
			if (duplicateCartItem) {
				let amt = parseInt(duplicateCartItem.amount);
				duplicateCartItem.amount = amt += 1;
			} else {
				// Finding the product being added to the cart
				let product: any = products.find((product: any) => product.id == itemId);

				// Add the product found to the cart with `amount` set to `1` if duplicate not found
				// This needs to be updated to accomodate the side orders
				currentCart.push({
					id: parseInt(product.id),

					name: product.name,
					description: product.description,
					category: product.category,
					imageUrl: product.imageUrl,
					price: parseFloat(product.price),
					quantity: parseInt(product.quantity) - 1,
					ratings: [],

					amount: 1,
				});
			}

			// Updating the cart in localStorage with the new information
			this.updateCart(currentCart);

			// Cart Notification function goes here
		});
	}

	/**
	 * Removes and item from the cart using it's id
	 * @param itemId The id of the product/cart item to be removed
	 * @returns The modified array of `cart` items with the specified product removed.
	 */
	removeCartItem(itemId: number): any[] {
		let cart = this.getCart();
		const productId = cart.findIndex((product: any) => product.id == itemId);

		cart.splice(productId, 1);
		this.updateCart(cart);

		return cart;
	}

	/**
	 * Updates the cart in the `localStorage`
	 * @param cart The array of objects you would like to be the new cartin storage
	 */
	updateCart(cart: any[]): void {
		localStorage.setItem('cart', JSON.stringify(cart));
	}
}
