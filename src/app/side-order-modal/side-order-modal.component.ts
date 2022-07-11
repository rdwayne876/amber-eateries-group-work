import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from '../cart.service';
import { DataService } from '../data.service';
import { Category, Product } from '../product';

@Component({
    selector: 'app-side-order-modal',
    templateUrl: './side-order-modal.component.html',
    styleUrls: ['./side-order-modal.component.css'],
})
export class SideOrderModalComponent implements OnInit {
    constructor(
        private cartService: CartService,
        private dataService: DataService,
        @Inject(MAT_DIALOG_DATA) public category: Category
    ) {}

    products: Product[] = [];

    ngOnInit(): void {
        this.dataService.sendGetRequest().subscribe((resp: Product[]) => {
            let _products: Product[] = resp;
            _products = _products.filter(
                (product: Product) => product.category == this.category
            );
            this.products = _products;
        });
    }

    addSide(id: number) {
        this.cartService.addCartItem(id);
    }
}
