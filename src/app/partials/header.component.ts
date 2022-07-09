import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
        <header>
            <div
                class="header transition-all shadow-2xl bg-gradient-to-r from-[#2b2a2a38] via-[#00000044] to-[#00000048]"
                id="main-nav"
            >
                <div class="secondary-header p-2 ">
                    <div class="main-container">
                        <div class="s-h-inner">
                            <div class="header-location">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    version="1.1"
                                    id="Capa_1"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 297 297"
                                    style="enable-background:new 0 0 297 297;"
                                    xml:space="preserve"
                                >
                                    <g>
                                        <path
                                            d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645   c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645   C259.253,49.703,209.57,0,148.5,0z M148.5,272.689c-22.049-21.366-90.243-93.029-90.243-161.892   c0-49.784,40.483-90.287,90.243-90.287s90.243,40.503,90.243,90.287C238.743,179.659,170.549,251.322,148.5,272.689z"
                                        />
                                        <path
                                            d="M148.5,59.183c-28.273,0-51.274,23.154-51.274,51.614c0,28.461,23.001,51.614,51.274,51.614   c28.273,0,51.274-23.153,51.274-51.614C199.774,82.337,176.773,59.183,148.5,59.183z M148.5,141.901   c-16.964,0-30.765-13.953-30.765-31.104c0-17.15,13.801-31.104,30.765-31.104c16.964,0,30.765,13.953,30.765,31.104   C179.265,127.948,165.464,141.901,148.5,141.901z"
                                        />
                                    </g>
                                </svg>
                                <span class="text-2xl"
                                    >Kingston & St. Andrew</span
                                >
                            </div>
                        </div>
                    </div>
                </div>
                <mat-toolbar>
                    <div class="main-container">
                        <div class="m-h-inner flex flex-wrap ">
                            <div class="logo">
                                <a href="/"><span>Amber Eateries</span></a>
                            </div>
                            <div class="navigation  ">
                                <button mat-button routerLink="/">Home</button>
                                <button mat-button routerLink="/menu">
                                    Menus
                                </button>
                                <button mat-button routerLink="/cart">
                                    Cart
                                </button>
                                <button mat-button routerLink="/about">
                                    About
                                </button>
                                <button mat-button routerLink="/gallery">
                                    Gallery
                                </button>
                                <button mat-button routerLink="/addproduct">
                                    <i class="fa-solid fa-cart-shopping"></i>
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
                z-index: 1;
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
        `,
    ],
})
export class HeaderComponent implements OnInit {
    constructor() {}

    ngOnInit() {
        window.onscroll = () => {
            let navMenu = document.querySelector('.header');
            let body = document.querySelector('body') as HTMLBodyElement;
            if (window.pageYOffset > 100) {
                navMenu?.classList.add('sticky-nav');
            } else {
                navMenu?.classList.remove('sticky-nav');
                body.style.margin = '0';
            }
        };
    }
}
