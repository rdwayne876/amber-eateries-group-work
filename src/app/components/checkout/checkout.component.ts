import { Component, OnInit } from '@angular/core';
import { CheckoutService } from 'src/app/services/checkout.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  firstFormGroup = new FormGroup (
    
  )

fries  
x3               450

fries  
x3               450

fries  
x3               450

fries  
x3               450

fries  
x3               450

fries  
x3               450

=========================
TOTAL            222

  constructor(
    private checkoutService: CheckoutService,
    private userService: UserService
  ) {}

  ngOnInit(): void {}
}
