import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
    FormGroup,
    FormControl,
    Validators,
    AbstractControl,
    ValidationErrors,
} from '@angular/forms';
import { CheckoutService } from 'src/app/services/checkout.service';
import { UserService } from 'src/app/services/user.service';
import { CartService } from 'src/app/cart.service';
import { AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { Address } from 'src/app/interfaces/checkout';
import { MatRadioChange, MatRadioGroup } from '@angular/material/radio';
import { Router } from '@angular/router';
import { MapService } from 'src/app/map.service';
import { MapComponent } from '../map/map.component';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
    Cart!: any[]; //Placeholder
    paymentAmount = 0; //Placeholder
    user_id!: number;
    orderTotal = 5000;
    rateLimitRetry: any;

    //Form Groups
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
        city_town: new FormControl('', [Validators.required]),
        parish: new FormControl('', [Validators.required]),

        saveAddressInfo: new FormControl(false),
    });
    paymentTypeForm = new FormGroup({
        type: new FormControl('', [
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
        street_address: new FormControl('', [Validators.required]),
        street_address2: new FormControl(''),
        city_town: new FormControl('', [Validators.required]),
        parish: new FormControl('', [Validators.required]),
        saveCardInfo: new FormControl(false),
    });

    confirmForm = new FormGroup({
        confirmed: new FormControl(false),
    });

    //Event Handlers
    enableAccountForm(ev: MatRadioChange) {
        if (ev.value === 'account') this.accountTypeForm.enable();
        else this.accountTypeForm.disable();
    }
    enableAddressForm(ev: MatRadioChange) {
        if (ev.value === 'delivery') this.addressForm.enable();
        else this.addressForm.disable();
    }
    enableCardForm(ev: MatRadioChange) {
        if (ev.value === 'card') this.cardForm.enable();
        else this.cardForm.disable();
    }

    constructor(
        private checkoutService: CheckoutService,
        private userService: UserService,
        private cartService: CartService,
        private mapService: MapService,
        private router: Router
    ) {}

    ngOnInit(): void {
        // Get cart info
        this.Cart = this.cartService.getCart();
        this.paymentAmount = this.cartService.getCartTotal(this.Cart);

        // Disable forms initially
        this.accountTypeForm.disable();
        this.addressForm.disable();
        this.cardForm.disable();
    }

    @ViewChild('map') map!: MapComponent;
    @ViewChild('paymentType') paymentTypeElement!: ElementRef<HTMLInputElement>;
    @ViewChild('deliveryType')
    deliveryTypeElement!: ElementRef<HTMLInputElement>;

    dataCollect() {
        if (!this.accountTypeForm.controls['email'].value) {
            this.dataTransact(0);
        } else {
            this.userService
                .getUser(this.accountTypeForm.controls['email'].value)
                .subscribe((data) => {
                    if (!data) {
                        this.userService
                            .createUser({
                                id: 1,
                                email:
                                    this.accountTypeForm.controls['email']
                                        ?.value ?? '',
                                delivery_address: this.addressForm.controls[
                                    'saveAddressInfo'
                                ].value
                                    ? {
                                          street_address:
                                              this.addressForm.controls[
                                                  'street_address'
                                              ]?.value ?? '',
                                          street_address2:
                                              this.addressForm.controls[
                                                  'street_address2'
                                              ]?.value ?? '',
                                          city_town:
                                              this.addressForm.controls[
                                                  'city_town'
                                              ]?.value ?? '',
                                          parish:
                                              this.addressForm.controls[
                                                  'parish'
                                              ]?.value ?? '',
                                      }
                                    : {
                                          street_address: '',
                                          street_address2: '',
                                          city_town: '',
                                          parish: '',
                                      },
                                card: this.cardForm.controls['saveCardInfo']
                                    .value
                                    ? {
                                          _no:
                                              this.cardForm.controls['card_no']
                                                  ?.value ?? '',
                                          cardholder:
                                              this.cardForm.controls[
                                                  'cardholder'
                                              ]?.value ?? '',
                                          expiry_date:
                                              this.cardForm.controls[
                                                  'expiry_date'
                                              ]?.value ?? '',
                                          address: {
                                              street_address:
                                                  this.cardForm.controls[
                                                      'street_address'
                                                  ]?.value ?? '',
                                              street_address2:
                                                  this.cardForm.controls[
                                                      'street_address2'
                                                  ]?.value ?? '',
                                              city_town:
                                                  this.cardForm.controls[
                                                      'city_town'
                                                  ]?.value ?? '',
                                              parish:
                                                  this.cardForm.controls[
                                                      'parish'
                                                  ]?.value ?? '',
                                          },
                                      }
                                    : {
                                          _no: '',
                                          cardholder: '',
                                          expiry_date: '',
                                          address: {
                                              street_address: '',
                                              street_address2: '',
                                              city_town: '',
                                              parish: '',
                                          },
                                      },
                            })
                            .subscribe((data) => {
                                if (data) {
                                    this.dataTransact(
                                        this.userService.last_user_created
                                    );
                                } else {
                                    // Error Handling
                                }
                            });
                    } else {
                        this.dataTransact(data.id);
                    }
                });
        }
    }

    private dataTransact(user_id: number) {
        this.checkoutService
            .executeOrder(
                this.Cart,
                this.paymentTypeForm.controls['type']?.value,
                this.paymentAmount,
                {
                    street_address:
                        this.addressForm.controls['street_address']?.value ??
                        '',
                    street_address2:
                        this.addressForm.controls['street_address2']?.value ??
                        '',
                    city_town:
                        this.addressForm.controls['city_town']?.value ?? '',
                    parish: this.addressForm.controls['parish']?.value ?? '',
                },
                user_id
            )
            .subscribe((data) => {
                if (data) {
                    // Successful transaction logic
                    this.cartService.clearCart();

                    this.router.navigateByUrl('/receipt', {
                        state: {
                            reciept: {
                                transaction: this.checkoutService.reciept,
                                order: this.Cart,
                            },
                        },
                    });
                } else {
                    // Error handling
                }
            });
    }

    onMinus(id: number) {
        this.Cart.find((item) => item.id == id).amount--;
        if (this.Cart.find((item) => item.id == id).amount <= 0) {
            this.Cart.find((item) => item.id == id).amount++;
            return;
        } else {
            this.cartService.updateCart(this.Cart);
        }
        this.paymentAmount = this.cartService.getCartTotal(this.Cart);
    }

    onAdd(id: number) {
        this.Cart.find((item) => item.id == id).amount++;
        if (this.Cart.find((item) => item.id == id).amount > 10) {
            this.Cart.find((item) => item.id == id).amount--;
            return;
        } else {
            this.cartService.updateCart(this.Cart);
        }
        this.paymentAmount = this.cartService.getCartTotal(this.Cart);
    }

    setFill(event: Event) {
        let email = (event.target as HTMLInputElement).value;
        this.userService.getUser(email).subscribe((data) => {
            if (data) {
                this.deliveryFill = (event: MatRadioChange) => {
                    if (event.value === 'delivery') {
                        this.addressForm.controls['street_address'].setValue(
                            data.delivery_address.street_address
                        );
                        this.addressForm.controls['street_address2'].setValue(
                            data.delivery_address.street_address2
                        );
                        this.addressForm.controls['city_town'].setValue(
                            data.delivery_address.city_town
                        );
                        this.addressForm.controls['parish'].setValue(
                            data.delivery_address.parish
                        );

                        this.updateMap(this.addressForm);
                    } else {
                        this.addressForm.reset();
                    }
                };
                this.paymentFill = (event: MatRadioChange) => {
                    if (event.value === 'card') {
                        this.cardForm.controls['card_no'].setValue(
                            data.card._no
                        );
                        this.cardForm.controls['cardholder'].setValue(
                            data.card.cardholder
                        );
                        this.cardForm.controls['expiry_date'].setValue(
                            data.card.expiry_date
                        );
                        this.cardForm.controls['street_address'].setValue(
                            data.card.address.street_address
                        );
                        this.cardForm.controls['street_address2'].setValue(
                            data.card.address.street_address2
                        );
                        this.cardForm.controls['city_town'].setValue(
                            data.card.address.city_town
                        );
                        this.cardForm.controls['parish'].setValue(
                            data.card.address.parish
                        );
                    } else {
                        this.cardForm.reset();
                    }
                };
            }
        });
    }

    updateMap(form: FormGroup) { 
        clearTimeout(this.rateLimitRetry);          
        this.mapService.address = {
            street_address:
                form.controls['street_address'].value,
            street_address2:
                form.controls['street_address2'].value,
            city_town: form.controls['city_town'].value,
            parish: form.controls['parish'].value,
        };
        if (!this.map.setMapLocation()) {
            //Rate limit response logic
            console.log("Rate limited. Try again");
            this.rateLimitRetry = setTimeout(() => {
                this.map.setMapLocation();
            }, 1000);
        }
    }

    deliveryFill = (event: MatRadioChange) => {};
    paymentFill = (event: MatRadioChange) => {};
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
