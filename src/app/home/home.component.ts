import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { Category, Product } from '../product';
import { CartService } from '../cart.service';
import { MatDialog } from '@angular/material/dialog';
import { SideOrderModalComponent } from '../side-order-modal/side-order-modal.component';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    tabChangeEvent?: MatTabChangeEvent;
    products: Product[] = [];
    cart: any[] = [];
    currentPage = 0;
    pageLimit = 9;

    constructor(
        private dataService: DataService,
        private cartService: CartService,
        private snackBar: MatSnackBar,
        public dialog: MatDialog
    ) {}

    ngOnInit() {
        this.dataService.sendGetRequest().subscribe((data: Product[]) => {
            this.products = data;
        });
    }
    changePage(event: any) {
        this.currentPage = event.pageIndex;
        this.pageLimit = event.pageSize;
    }

    tabChangeEventHandler(event: MatTabChangeEvent): void {
        this.tabChangeEvent = event;
    }

    addProduct(id: number): void {
        this.cartService.addCartItem(id);

        this.snackBar.open('Added to cart', undefined, {
            duration: 2000,
        });

        if (
            this.tabChangeEvent == undefined ||
            this.tabChangeEvent.tab.origin == -1
        ) {
            // Use here to select the products category to upsell for the first tab
            this.dialog.open(SideOrderModalComponent, {
                data: Category.SIDE,
            });
        }

        if (this.tabChangeEvent) {
            switch (this.tabChangeEvent.tab.textLabel.toLowerCase()) {
                // Use above where `this.tabChangeEvent.tab.origin == -1` is for the first tab.
                case 'sides':
                case 'beverage':
                case 'apptezier':
                    this.dialog.open(SideOrderModalComponent, {
                        data: Category.ENTREE,
                    });
                    break;
                case 'desert':
                    this.dialog.open(SideOrderModalComponent, {
                        data: Category.BEVERAGE,
                    });
                    break;
                default:
                    break;
            }
        }
    }
}
