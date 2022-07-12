import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
    constructor(private cartService: CartService) {}
    cart!: any[];
    grandTotal: number = 0;

    ngOnInit(): void {
        this.cart = this.cartService.getCart();
        this.grandTotal = this.cartService.getCartTotal();
    }

    deleteProduct(product_id: number) {
        this.cartService.updateCart(
            this.cartService.removeCartItem(product_id)
        );

        this.cart = this.cartService.getCart() ?? [];
        this.grandTotal = this.cartService.getCartTotal();
    }

    emptyCart() {
        this.cartService.clearCart();
    }

    onQuantity(id: number, value: number) {
        let item = this.cart.find((item) => item.id == id);
        item.amount += value;
        if (item.amount <= 0) {
            item.amount -= value;
            return;
        } else if (item.amount > 10) {
            item.amount -= value;
            return;
        } else {
            this.cartService.updateCart(this.cart);
        }
        this.grandTotal = this.cartService.getCartTotal();
    }
}
