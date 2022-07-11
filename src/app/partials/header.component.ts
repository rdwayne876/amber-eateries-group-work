import {
    AfterViewInit,
    Component,
    Input,
    OnChanges,
    OnInit,
    ViewChild,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
    selector: 'app-header',
    template: `
        <header>
            <div
                class="header transition-all shadow-2xl bg-gradient-to-r from-[#2b2a2a38] via-[#00000044] to-[#00000048]"
                id="main-nav"
            >
                <mat-toolbar>
                    <div class="main-container p-10">
                        <div class="m-h-inner flex flex-wrap ">
                            <div class="logo">
                                <a href="/"><span>Amber Eateries</span></a>
                            </div>
                            <div class="navigation  ">
                                <button mat-button routerLink="/">Home</button>
                                <button mat-button routerLink="/menu">
                                    Menus
                                </button>

                                <button mat-button routerLink="/gallery">
                                    Gallery
                                </button>
                                <button mat-button routerLink="/about">
                                    About
                                </button>

                                <button mat-button routerLink="/cart">
                                    <i class="fa-solid fa-cart-shopping "></i>
                                    <span
                                        *ngIf="cartService.getCartCount() > 0"
                                        class="badge bg-danger"
                                    >
                                        {{ cartService.getCartCount() }}
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </mat-toolbar>
            </div>
        </header>
    `,
    styles: [
        `
            @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600&display=swap');

            .header {
                width: 100%;
                position: fixed;
                z-index: 999;
                top: 0;
            }
            .main-container {
                width: 78%;
                margin: 0 auto;
            }

            .secondary-header {
                width: 100%;
                height: auto;
                background-color: #231942;
                font-size: 14px;
                color: #fff;
            }

            .s-h-inner {
                width: 100%;
                height: auto;
                padding: 0.5rem;
                display: flex;
                justify-content: flex-end;
                align-items: center;
            }

            .m-h-inner {
                width: 100%;
                height: auto;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .header-location {
                display: flex;
                align-items: center;
            }

            .header-location svg {
                width: 15px;
                fill: #fff;
                margin-right: 0.5rem;
            }

            ::ng-deep .mat-toolbar-row,
            .mat-toolbar-single-row {
                height: 88px;
                justify-content: space-between;
                padding: 0 !important;
                background-color: transparent;
            }

            ::ng-deep .mat-button:last-child {
                padding-right: 8px !important;
            }

            .logo a {
                text-decoration: none;
            }

            .logo span {
                font-family: 'Permanent Marker', cursive;
                font-size: 28px;
                color: white;
            }

            .navigation ::ng-deep .mat-button {
                color: white;
            }

            .navigation ::ng-deep .mat-button:hover {
                color: #00b5ad;
                background-color: transparent !important;
            }

            ::ng-deep .mat-button-ripple.mat-ripple {
                display: none !important;
            }

            .sticky-nav {
                background: white !important;
                color: black !important;
            }

            .sticky-nav .logo span,
            .sticky-nav .navigation ::ng-deep .mat-button {
                color: black;
            }
            .header-change {
                background: #231942;
            }
        `,
    ],
})
export class HeaderComponent implements OnInit {
    constructor(public cartService: CartService, private router: Router) { }

    ngOnInit() {
        this.routerCheck();
    }

    routerCheck() {
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe(() => {
                if (this.router.url == '/home') {
                    let navMenu = document.querySelector('.header');
                    navMenu?.classList.remove('header-change');
                    window.onscroll = () => {
                        let body = document.querySelector(
                            'body'
                        ) as HTMLBodyElement;
                        if (window.pageYOffset > 600 && true) {
                            navMenu?.classList.add('sticky-nav');
                        } else {
                            navMenu?.classList.remove('sticky-nav');
                            body.style.margin = '0';
                        }
                    };
                } else {
                    let navMenu = document.querySelector('.header');
                    navMenu?.classList.add('header-change');
                }
            });
    }
}
