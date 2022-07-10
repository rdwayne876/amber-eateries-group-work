import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatPaginator } from '@angular/material/paginator';


import { Product } from '../product';
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
    products: Product[] = [];
    currentPage = 0;
    pageLimit = 9;
    
    cart: any[] = [];
    tabChangeEvent?: MatTabChangeEvent;

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
        console.log(event);
        this.currentPage = event.pageIndex;
        this.pageLimit = event.pageSize;
    }


    tabChangeEventHandler(event: MatTabChangeEvent): void {
        this.tabChangeEvent = event;
    }

    addProduct(id: number): void {
        this.snackBar.open('Product added to cart', undefined, {
            duration: 2000,
        });

        this.cartService.addCartItem(id);

        // DO NOT DELETE - Roshane
        // TODO Create feature to limit sides modal popup on selected tabs
        const event = this.tabChangeEvent;

        if (
            event &&
            event.tab.isActive &&
            // If starters is the original tab this check is valid
            event.tab.origin == -1 &&
            // Hard coded to match the starter tab
            event.tab.textLabel.match(/starters/i)
        ) {
            this.dialog.open(SideOrderModalComponent);
        }

        if (!event) {
            this.dialog.open(SideOrderModalComponent);
        }
    }
}
