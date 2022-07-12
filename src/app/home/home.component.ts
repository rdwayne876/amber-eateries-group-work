import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { Category, Product } from '../product';
import { CartService } from '../cart.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
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
    appetizers: Product[] = [];
    appetizers_currentPage = 0;
    appetizers_pageLimit = 8;
    entrees: Product[] = [];
    entrees_currentPage = 0;
    entrees_pageLimit = 8;
    sides: Product[] = [];
    sides_currentPage = 0;
    sides_pageLimit = 8;
    beverages: Product[] = [];
    beverages_currentPage = 0;
    beverages_pageLimit = 8;
    desserts: Product[] = [];
    desserts_currentPage = 0;
    desserts_pageLimit = 8;
    cart: any[] = [];

    constructor(
        private dataService: DataService,
        private cartService: CartService,
        private succcessPopup: MatSnackBar,
        public dialog: MatDialog
    ) {}

    ngOnInit() {
        this.dataService.sendGetRequest().subscribe((data: Product[]) => {
            this.appetizers = data.filter((value) => {
                return value.category == Category.APPETIZER;
            });
            this.entrees = data.filter((value) => {
                return value.category == Category.ENTREE;
            });
            this.sides = data.filter((value) => {
                return value.category == Category.SIDE;
            });
            this.desserts = data.filter((value) => {
                return value.category == Category.DESSERT;
            });
            this.beverages = data.filter((value) => {
                return value.category == Category.BEVERAGE;
            });
        });
    }
    changePage(event: any, property: string) {
        this[(property + '_currentPage') as keyof this] = event.pageIndex;
        this[(property + '_pageLimit') as keyof this] = event.pageSize;
    }

    tabChangeEventHandler(event: MatTabChangeEvent): void {
        this.tabChangeEvent = event;
    }

    addProduct(id: number): void {
        this.cartService.addCartItem(id);
        this.succcessPopup.open('Added to cart', 'ok', {
            panelClass: ['hazel-snackbar'],
            duration: 2000,
        });

        this.dataService.fetchItem(id).subscribe((product: Product) => {
            let dialogConfig: MatDialogConfig = {
                panelClass: 'modal',
                height: 'max-content',
                width: '70%',
            };

            if (this.tabChangeEvent == undefined) {
                // Use here to select the products category to upsell for the first tab
                this.dialog.open(SideOrderModalComponent, {
                    data: { category: Category.SIDE, product },
                    ...dialogConfig,
                });
            }

            if (this.tabChangeEvent) {
                console.log(this.tabChangeEvent.tab.textLabel);
                switch (this.tabChangeEvent.tab.textLabel.toLowerCase()) {
                    // Use above where `this.tabChangeEvent == undefined` is for the first tab.
                    case 'sides':
                    case 'beverages':
                    case 'appetizers':
                        this.dialog.open(SideOrderModalComponent, {
                            data: { category: Category.ENTREE, product },
                            ...dialogConfig,
                        });
                        break;
                    case 'entrees':
                        this.dialog.open(SideOrderModalComponent, {
                            data: { category: Category.SIDE, product },
                            ...dialogConfig,
                        });
                        break;
                    case 'desserts':
                        this.dialog.open(SideOrderModalComponent, {
                            data: { category: Category.BEVERAGE, product },
                            ...dialogConfig,
                        });
                        break;
                    default:
                        this.dialog.open(SideOrderModalComponent, {
                            data: { category: Category.SIDE, product },
                            ...dialogConfig,
                        });
                        break;
                }
            }
        });
    }
}
