import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { Order, PaymentMethod, Transaction } from 'src/app/interfaces/checkout';

@Component({
    selector: 'app-Receipt',
    templateUrl: './receipt.component.html',
    styleUrls: ['./receipt.component.css'],
})
export class ReceiptComponent implements OnInit {
    transaction: Transaction = {
        id: 0,
        user_id: 0,
        order_id: 0,
        payment_method: PaymentMethod.CASH,
        payment_amount: 0,
        date: '',
        delivery: false,
        address: {
            street_address: '',
            street_address2: '',
            city_town: '',
            parish: '',
        },
    };
    order: Order = { id: 0, orders: [] };

    constructor(private router: Router) {
        let data = this.router.getCurrentNavigation()?.extras.state!['receipt'];
        this.transaction = { ...data.transaction };
        this.order = { ...data.order };
    }

    ngOnInit(): void {}
}
