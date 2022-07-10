import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { Order, Transaction } from 'src/app/interfaces/checkout';

@Component({
    selector: 'app-reciept',
    templateUrl: './reciept.component.html',
    styleUrls: ['./reciept.component.css'],
})
export class RecieptComponent implements OnInit {
    transaction: Transaction;
    order: Order;

    constructor(private router: Router) {
      let data = this.router.getCurrentNavigation()!.extras.state!['reciept'];
      this.transaction = {...data.transaction};
      this.order = {...data.order};
    }

    ngOnInit(): void {}
}
