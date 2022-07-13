import { Category, Product } from './../../product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentMethod, Transaction } from 'src/app/interfaces/checkout';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

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
    order: Product[] = [
        {
            id: 0,
            name: 'Product',
            description: 'This is a thing',
            category: Category.ENTREE,
            imageUrl: '',
            price: 100,
            quantity: 4,
            ratings: [],
        },
    ];

    constructor(private router: Router) {
        let data = this.router.getCurrentNavigation()?.extras.state!['receipt'];
        this.transaction = data.transaction;
        this.order = data.order;     
    }

    ngOnInit(): void {}
}
