import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
        @Inject(MAT_DIALOG_DATA)
        public matData: { category: Category; product: Product }
    ) {}

    products: Product[] = [];
    product!: Product;

    ngOnInit(): void {
        console.log(this.matData);
        this.dataService.sendGetRequest().subscribe((resp: Product[]) => {
            let _products: Product[] = resp;
            _products = _products.filter(
                (product: Product) => product.category == this.matData.category
            );
            this.products = _products;
        });

        this.product = this.matData.product;
    }

    addSide(id: number) {
        this.cartService.addCartItem(id);
    }
}
