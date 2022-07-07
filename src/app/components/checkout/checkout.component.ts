import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CheckoutService } from 'src/app/services/checkout.service';
import { UserService } from 'src/app/services/user.service';
import { AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { Address } from 'src/app/interfaces/checkout';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
    Map = {latitude: 0, longitude: 0};
    
    userTypeForm = new FormGroup({
        type: new FormControl('', [Validators.required]),
    });
    accountTypeForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
    });

    deliveryTypeForm = new FormGroup({
        type: new FormControl('', [Validators.required]),
    });
    addressForm = new FormGroup({
        street_address: new FormControl('', [Validators.required]),
        street_address2: new FormControl(''),
        city: new FormControl('', [Validators.required]),
        parish: new FormControl('', [Validators.required]),
    }).addValidators([mapValidator(this.Map)]);
    paymentTypeForm = new FormGroup({
        payment_method: new FormControl('', [
            Validators.required,
            Validators.pattern(/^(cash)|(card)$/),
        ]),
    });
    cardForm = new FormGroup({
        card_no: new FormControl('', [
            Validators.required,
            Validators.minLength(16),
            Validators.maxLength(16),
        ]),
        cardholder: new FormControl('', [Validators.required]),
        expiry_date: new FormControl('', [Validators.required]),
        cvv: new FormControl('', [Validators.required]),
        street1: new FormControl('', [Validators.required]),
        street2: new FormControl(''),
        city_town: new FormControl('', [Validators.required]),
        parish: new FormControl('', [Validators.required]),
    });

    constructor(
        private checkoutService: CheckoutService,
        private userService: UserService
    ) {}

    ngOnInit(): void {}
}

function mapValidator(map: {latitude: number, longitude: number}): AsyncValidatorFn {
    return (control: AbstractControl) => {
        let obs = new Observable<ValidationErrors | null>((observer) => {});
        return obs;
    }
}