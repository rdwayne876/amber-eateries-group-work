import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
    User,
    Order,
    Transaction,
    Address,
    PaymentMethod,
} from '../interfaces/checkout';
import { Product } from '../product';
import { DataService } from '../data.service';

@Injectable({
    providedIn: 'root',
})
export class CheckoutService {
    private API = 'http://localhost:3000/';
    reciept!: Transaction;

    //Create
    private executeTransaction(
        payment_method: PaymentMethod,
        payment_amount: number,
        order_id: number,
        address?: Address,
        user_id?: number
    ) {
        let obs = new Observable<boolean>((observer) => {
            this.http
                .post<Transaction>(`${this.API}transactions`, {
                    address,
                    date: new Date().toISOString(),
                    delivery: !!address,
                    user_id,
                    payment_method,
                    payment_amount,
                    order_id,
                })
                .subscribe({
                    next: (data) => {
                        this.reciept = data;
                        observer.next(true);
                    },
                    error: (err) => {
                        console.log(err);
                        observer.next(false);
                    },
                });
        });
        return obs;
    }

    executeOrder(
        orders: Product[],
        payment_method: PaymentMethod,
        payment_amount: number,
        address?: Address,
        user_id?: number
    ) {
        let obs = new Observable<boolean>((observer) => {
            this.http.post<User>(`${this.API}orders`, {orders: orders}).subscribe({
                next: (data) => {
                    this.executeTransaction(
                        payment_method,
                        payment_amount,
                        data.id,
                        address,
                        user_id
                    ).subscribe((data) => {
                        if (data) {
                            orders.forEach((e) => {
                              --e.quantity;
                              this.products.editproduct(e.id, e).subscribe(() => {});
                            });
                            observer.next(data)
                        } else {
                            observer.next(data);
                        }
                    });
                },
                error: (err) => {
                    console.log(err);
                    observer.next(false);
                },
            });
        });
        return obs;
    }

    //Read
    getOrder(order_id: number) {
        let obs = new Observable((observer) => {
            this.http.get<Order>(`${this.API}orders/${order_id}`).subscribe({
                next: (data) => {
                    observer.next(data);
                },
                error: (err) => {
                    console.log(err);
                    observer.next(null);
                },
            });
        });
        return obs;
    }

    getTransaction(transaction_id: number) {
        let obs = new Observable((observer) => {
            this.http
                .get<Transaction>(`${this.API}transactions/${transaction_id}`)
                .subscribe({
                    next: (data) => {
                        observer.next(data);
                    },
                    error: (err) => {
                        console.log(err);
                        observer.next(null);
                    },
                });
        });
        return obs;
    }

    //Update
    //Delete

    constructor(private http: HttpClient, private products: DataService) {}
}
