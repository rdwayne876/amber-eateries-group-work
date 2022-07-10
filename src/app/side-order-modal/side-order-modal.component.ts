import { Component, OnInit } from '@angular/core';
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
        private dataService: DataService
    ) {}

    products: Product[] = [];

    ngOnInit(): void {
        this.dataService.sendGetRequest().subscribe((resp: Product[]) => {
            let _products: Product[] = resp;
            _products = _products.filter(
                (product: Product) => product.category == Category.SIDE
            );
            this.products = _products;
        });
    }

    addSide(id: number) {
        this.cartService.addCartItem(id);
    }
}
