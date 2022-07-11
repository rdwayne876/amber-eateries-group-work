import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <footer class="bg-[#5F462B] text-white p-20 ">
            <!------ CONTAINER-1 ------>
            <div class="flex justify-between">
                <!------ CONTAINER-1 / LEFT ------>
                <div class="flex gap-20 w-full">
                    <div class="w-full">
                        <h1 class="text-4xl font-bold">Quick Links</h1>
                        <ul class="w-full">
                            <li class="py-2 my-2 text-2xl">
                                <a
                                    class="hover:border-b-2 hover:border-b-white hover:text-white"
                                    routerLink="/"
                                    >Home</a
                                >
                            </li>
                            <li class="py-2 my-2 text-2xl">
                                <a
                                    class="hover:border-b-2 hover:border-b-white hover:text-white"
                                    routerLink="/menu"
                                    >Menu</a
                                >
                            </li>
                            <li class="py-2 my-2 text-2xl">
                                <a
                                    class="hover:border-b-2 hover:border-b-white hover:text-white"
                                    routerLink="/about"
                                    >About Us and more</a
                                >
                            </li>
                            <li class="py-2 my-2 text-2xl">
                                <a
                                    class="hover:border-b-2 hover:border-b-white hover:text-white"
                                    routerLink="/gallery"
                                    >Gallary</a
                                >
                            </li>
                            <li class="py-2 my-2 text-2xl">
                                <a
                                    class="hover:border-b-2 hover:border-b-white hover:text-white"
                                    routerLink="/addproduct"
                                    >Add New Product</a
                                >
                            </li>
                        </ul>
                    </div>

                    <div class="w-full">
                        <h4 class="text-4xl font-bold">For You</h4>
                        <ul class="footer-links">
                            <li class="py-2 my-2 text-2xl">
                                <a
                                    class="hover:border-b-2 hover:border-b-white hover:text-white"
                                    routerLink="#"
                                    >Terms of Use</a
                                >
                            </li>
                            <li class="py-2 my-2 text-2xl">
                                <a
                                    class="hover:border-b-2 hover:border-b-white hover:text-white"
                                    routerLink="#"
                                    >Fequently Asked Questions</a
                                >
                            </li>
                            <li class="py-2 my-2 text-2xl">
                                <a
                                    class="hover:border-b-2 hover:border-b-white hover:text-white"
                                    routerLink="#"
                                    >Contact</a
                                >
                            </li>
                        </ul>
                    </div>

                    <div class="w-full">
                        <h5 class="text-4xl font-bold">Find Us</h5>
                        <ul class="footer-links">
                            <li class="py-2 my-2 text-2xl">
                                123 Nowhere Street<br />Somewhere City<br />Jamaica
                                W.I.
                            </li>
                            <li class="py-2 my-2 text-2xl">
                                Email: ambereats@domain.com
                            </li>
                            <li class="py-2 my-2 text-2xl">
                                Telephone: (876) 478 - 9423
                            </li>
                        </ul>
                    </div>
                </div>

                <!------ CONTAINER-1 /RIGHT ------>
                <div class="w-full flex justify-center items-center">
                    <div class="w-[30%]">
                        <h1
                            class="text-center text-3xl py-2 border-b-2 border-b-white"
                        >
                            Accepted Cards
                        </h1>
                        <div class="flex gap-5 justify-center">
                            <img
                                alt="Visa"
                                src="https://www.7krave.com/img/cards/visa.png"
                                width="60px"
                            />
                            <img
                                alt="Mastercard"
                                src="https://www.7krave.com/img/cards/mastercard.png"
                                data-src="/img/cards/mastercard.png"
                                width="60px"
                            />
                            <img
                                alt="Mastercard"
                                src="https://www.7krave.com/img/cards/keycard.png"
                                class="px-2 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <!------ CONTAINER-2 ------>
            <div
                class="flex justify-between mt-10 pt-10 px-20 border-t-2 border-t-white"
            >
                <p class="copyright-text">
                    Copyright &copy; 2022 All Rights Reserved by
                    <a routerLink="#">Amber Eateries</a>.
                </p>

                <div class="flex gap-20 text-5xl">
                    <a class="facebook" routerLink="#"
                        ><i class="fa-brands fa-facebook"></i
                    ></a>
                    <a class="twitter" routerLink="#"
                        ><i class="fa fa-twitter"></i
                    ></a>
                    <a class="insta" routerLink="#"
                        ><i class="fa-brands fa-instagram"></i
                    ></a>
                </div>
            </div>
        </footer>
    `,
    // styles: [`

    //   @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600&display=swap');

    //   *{
    //     padding: 0;
    //     margin: 0;
    //     box-sizing: border-box;
    //     text-decoration: none;
    //     list-style: none;
    //   }

    //   .site-footer{
    //     width: 100%;
    //     background-color: #5F462B;
    //     color: white;
    //   }

    //   .site-footer .container-1{
    //     width: 90%;
    //     margin: auto;
    //     display: flex;
    //     justify-content: space-between;
    //     padding: 2vw 5vw 6vw 5vw;
    //     border-bottom: 3px solid white;
    //   }

    //   .container-1 .left-col{
    //     width: 60%;
    //     display: flex;
    //     justify-content: space-between;
    //   }

    //   .left-col .footer-links-header{
    //     font-size: 1.3vw;
    //     font-weight: 500;
    //     margin-bottom: 0.7vw
    //   }

    //   .left-col .col ul li{
    //     margin-bottom: 0.8vw;
    //     font-size: 1vw;
    //   }

    //   .container-1 .right-col{
    //     width: 40%;
    //   }

    //   .container-1 .right-col .card-opts{
    //     width: 60%;
    //     float: right;
    //     margin-top: 5vw;
    //     font-size: 1.5vw;
    //   }

    //   .card-opts .img-bx img{
    //     width: 5vw;
    //     /* height: 3vw */
    //   }

    //  .card-opts .card-opts-header{
    //     text-align: center;
    //     font-size: 2vw;
    //     line-height: 2;
    //   }

    //  .card-opts .img-bx{
    //     width: 100%;
    //     margin: auto;
    //     display: flex;
    //     justify-content: space-between;
    //     align-items: center;
    //     border-top: 1px solid white
    //   }

    //   .site-footer .container-2{
    //     width: 90%;
    //     margin: auto;
    //     display: flex;
    //     justify-content: space-between;
    //     align-items: center;
    //     padding: 0.5vw 2vw;
    //   }

    //   .container-2 .copyright-text{
    //     font-size: 1vw;
    //   }

    //   .container-2 .social-icons-contain a{
    //     font-size: 2vw;
    //     margin-right: 2vw;
    //   }

    // `]
})
export class FooterComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
