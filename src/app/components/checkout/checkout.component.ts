import { Component, OnInit } from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators,
    AbstractControl,
    ValidationErrors,
} from '@angular/forms';
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
    Map = { latitude: 0, longitude: 0 };
    Cart = []; //Placeholder
    paymentAmount = 0; //Placeholder
    user_id!: number;

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
    });
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

    ngOnInit(): void {
        this.addressForm.addValidators([mapValidator(this.Map)]);
    }

    dataCollect() {
        this.userService
            .getUser(this.accountTypeForm.controls['email'].value)
            .subscribe((data) => {
                if (!data) {
                    this.userService.createUser({
                        id: 0,
                        email: this.accountTypeForm.controls['email'].value,
                        delivery_address: {
                            street_address:
                                this.addressForm.controls['street_address']
                                    .value,
                            street_address2:
                                this.addressForm.controls['street_address2']
                                    .value,
                            city_town:
                                this.addressForm.controls['city_town'].value,
                            parish: this.addressForm.controls['parish'].value,
                        },
                        card: {
                            _no: this.cardForm.controls['card_no'].value,
                            cardholder:
                                this.cardForm.controls['cardholder'].value,
                            expiry_date:
                                this.cardForm.controls['expiry_date'].value,
                            address: {
                                street_address:
                                    this.cardForm.controls['street_address']
                                        .value,
                                street_address2:
                                    this.cardForm.controls['street_address2']
                                        .value,
                                city_town:
                                    this.cardForm.controls['city_town'].value,
                                parish: this.cardForm.controls['parish'].value,
                            },
                        },
                    }).subscribe((data) => {
                        if (data) {
                            this.dataTransact(this.userService.last_user_created);
                        } else {
                            //Error Handling
                        }
                    });
                } else {
                    this.dataTransact(data.id);
                }
            });
    }

    dataTransact(user_id: number) {
        this.checkoutService.executeOrder(this.Cart, this.paymentTypeForm.controls["payment_method"].value, this.paymentAmount, {
            street_address:
                this.addressForm.controls['street_address']
                    .value,
            street_address2:
                this.addressForm.controls['street_address2']
                    .value,
            city_town:
                this.addressForm.controls['city_town'].value,
            parish: this.addressForm.controls['parish'].value,
        }, user_id).subscribe((data) => {
            if (data) {
                //Successful trnsaction logic
            } else {
                //Error handling
            }
        });
    }
}

function mapValidator(map: {
    latitude: number;
    longitude: number;
}): AsyncValidatorFn {
    return (control: AbstractControl) => {
        let obs = new Observable<ValidationErrors | null>((observer) => {});
        return obs;
    };
}
