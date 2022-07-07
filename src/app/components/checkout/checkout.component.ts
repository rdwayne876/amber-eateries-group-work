import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CheckoutService } from 'src/app/services/checkout.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  userTypeForm = new FormGroup({});

  deliveryTypeForm = new FormGroup({});

  paymentTypeForm = new FormGroup({});

  constructor(
    private checkoutService: CheckoutService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}
}
