import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
        <footer class="bg-[#463420] text-white p-20 ">
            <!------ CONTAINER-1 ------>
            <div class="flex justify-between">
                <!------ CONTAINER-1 / LEFT ------>
                <div class="flex gap-20 w-full">
                    <div class="w-full">
                        <h1 class="text-[1.5vw] font-bold">Quick Links</h1>
                        <ul class="w-full">
                            <li class="py-2 my-2 text-[1vw]">
                                <a
                                    class="hover:border-b-2 hover:border-b-white hover:text-white"
                                    routerLink="/"
                                    >Home</a
                                >
                            </li>
                            <li class="py-2 my-2 text-[1vw]">
                                <a
                                    class="hover:border-b-2 hover:border-b-white hover:text-white"
                                    routerLink="/menu"
                                    >Menu</a
                                >
                            </li>
                            <li class="py-2 my-2 text-[1vw]">
                                <a
                                    class="hover:border-b-2 hover:border-b-white hover:text-white"
                                    routerLink="/about"
                                    >About Us</a
                                >
                            </li>
                            <li class="py-2 my-2 text-[1vw]">
                                <a
                                    class="hover:border-b-2 hover:border-b-white hover:text-white"
                                    routerLink="/gallery"
                                    >Gallery</a
                                >
                            </li>
                        </ul>
                    </div>

                    <div class="w-full">
                        <h4 class="text-[1.5vw] font-bold">For You</h4>
                        <ul class="footer-links">
                            <li class="py-2 my-2 text-[1vw]">
                                <a
                                    class="hover:border-b-2 hover:border-b-white hover:text-white"
                                    routerLink="#"
                                    >Terms of Use</a
                                >
                            </li>
                            <li class="py-2 my-2 text-[1vw]">
                                <a
                                    class="hover:border-b-2 hover:border-b-white hover:text-white"
                                    routerLink="#"
                                    >Fequently Asked Questions</a
                                >
                            </li>
                            <li class="py-2 my-2 text-[1vw]">
                                <a
                                    class="hover:border-b-2 hover:border-b-white hover:text-white"
                                    routerLink="#"
                                    >Contact Us</a
                                >
                            </li>
                        </ul>
                    </div>

                    <div class="w-full">
                        <h5 class="text-[1.5vw] font-bold">Find Us</h5>
                        <ul class="footer-links">
                            <li class="py-2 my-2 text-[1vw]">
                                123 Nowhere Street<br />Somewhere City<br />Jamaica
                                W.I.
                            </li>
                            <li class="py-2 my-2 text-[1vw]">
                                Email: ambereats@domain.com
                            </li>
                            <li class="py-2 my-2 text-[1vw]">
                                Telephone: (876) 478 - 9423
                            </li>
                        </ul>
                    </div>
                </div>

                <!------ CONTAINER-1 /RIGHT ------>
                <div class="w-full flex justify-center items-center">
                    <div class="w-[50%]">
                        <h1
                            class="text-center text-[1.2vw] py-2 border-b-2 border-b-white"
                        >
                            Accepted Cards
                        </h1>
                        <div class="justify-between flex items-center px-20">
                        <div>
                            <img
                                class="w-[4.4vw]"
                                src="https://www.7krave.com/img/cards/visa.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="w-[4.4vw]"
                                src="https://www.7krave.com/img/cards/mastercard.png"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="w-[4vw]"
                                src="https://www.7krave.com/img/cards/keycard.png"
                                alt=""
                            />
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <!------ CONTAINER-2 ------>
            <div
                class="flex justify-between mt-10 pt-10 px-20 border-t-2 border-t-white"
            >
                <p class="copyright-text text-[1vw]">
                    Copyright &copy; 2022 All Rights Reserved by
                    <a routerLink="#">Amber Eateries</a>.
                </p>

                <div class="flex gap-20 text-[1.5vw]">
                    <a class="facebook hover:text-[#e0a04f]" routerLink="#"
                        ><i class="fa-brands fa-facebook"></i
                    ></a>
                    <a class="twitter hover:text-[#e0a04f]" routerLink="#"
                        ><i class="fa fa-twitter"></i
                    ></a>
                    <a class="insta hover:text-[#e0a04f]" routerLink="#"
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
