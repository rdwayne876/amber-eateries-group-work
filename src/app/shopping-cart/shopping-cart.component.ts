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
        this.grandTotal = this.cartService.getCartTotal(this.cart);
    }

    amountChanged(event: any, cItemID: number): void {
        this.cart.find((item) => item.id == cItemID).amount = parseInt(
            event.target.value
        );

        this.cartService.updateCart(this.cart);
        this.grandTotal = this.cartService.getCartTotal(this.cart);
    }

    deleteProduct(product_id: number) {
        this.cartService.updateCart(
            this.cartService.removeCartItem(product_id)
        );

        this.cart = this.cartService.getCart() ?? [];
        this.grandTotal = this.cartService.getCartTotal(this.cart);
    }
}
