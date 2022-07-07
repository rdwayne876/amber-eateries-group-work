import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
    selector: 'app-shopping-cart',
    templateUrl: './shopping-cart.component.html',
    styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit, AfterViewInit {
    constructor(private cartService: CartService) {}
    cart!: any[];
    grandTotal: number = 0;

    ngOnInit(): void {
        this.cart = this.cartService.getCart();
    }

    ngAfterViewInit(): void {
        this.calculateCartTotals(this.cart);
    }

    amountChanged(event: any, cItemID: number): void {
        this.cart.find((item) => item.id == cItemID).amount = parseInt(
            event.target.value
        );

        this.calculateCartTotals(this.cart);
    }

    deleteProduct(product_id: number) {
        this.cartService.updateCart(
            this.cartService.removeCartItem(product_id)
        );
        this.cart = this.cartService.getCart() ?? [];

        this.calculateCartTotals(this.cart);
    }

    calculateCartTotals(cart: any[]) {
        // Patch the NG0100 detection change error
        setTimeout(() => {
            let subTotals = 0;

            // Calculates subtotal for each item in cart
            cart.forEach((product) => {
                subTotals += parseInt(product.price) * parseInt(product.amount);
            });

            // Sets the cart total to the calculated value
            this.grandTotal = subTotals;
        }, 0);
    }
}
