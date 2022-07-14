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
								<a class="hover:text-[#e0a04f] focus:text-[#e0a04f]" routerLink="/">Home</a>
							</li>
							<li class="py-2 my-2 text-[1vw]">
								<a class="hover:text-[#e0a04f] focus:text-[#e0a04f]" routerLink="/menu">Menu</a>
							</li>
							<li class="py-2 my-2 text-[1vw]">
								<a class="hover:text-[#e0a04f] focus:text-[#e0a04f]" routerLink="/about">About Us</a>
							</li>
							<li class="py-2 my-2 text-[1vw]">
								<a class="hover:text-[#e0a04f] focus:text-[#e0a04f]" routerLink="/gallery">Gallery</a>
							</li>
							<li class="py-2 my-2 text-[1vw]">
								<a class="hover:text-[#e0a04f] focus:text-[#e0a04f]" routerLink="/addproduct">Add</a>
							</li>
						</ul>
					</div>

					<div class="w-full">
						<h4 class="text-[1.5vw] font-bold">For You</h4>
						<ul class="footer-links">
							<li class="py-2 my-2 text-[1vw]">
								<a class="hover:text-[#e0a04f] focus:text-[#e0a04f]" routerLink="#">Terms of Use</a>
							</li>
							<li class="py-2 my-2 text-[1vw]">
								<a class="hover:text-[#e0a04f] focus:text-[#e0a04f]" routerLink="#">Fequently Asked Questions</a>
							</li>
							<li class="py-2 my-2 text-[1vw]">
								<a class="hover:text-[#e0a04f] focus:text-[#e0a04f]" routerLink="#">Contact Us</a>
							</li>
						</ul>
					</div>

					<div class="w-full">
						<h5 class="text-[1.5vw] font-bold">Find Us</h5>
						<ul class="footer-links">
							<li class="py-2 my-2 text-[1vw]">123 Nowhere Street<br />Somewhere City<br />Jamaica W.I.</li>
							<li class="py-2 my-2 text-[1vw]">Email: ambereats@domain.com</li>
							<li class="py-2 my-2 text-[1vw]">Telephone: (876) 478 - 9423</li>
						</ul>
					</div>
				</div>

				<!------ CONTAINER-1 /RIGHT ------>
				<div class="w-full flex justify-center items-center">
					<div class="w-[50%]">
						<h1 class="text-center text-[1.2vw] py-2 border-b-2 border-b-white">Accepted Cards</h1>
						<div class="justify-between flex items-center px-20">
							<div>
								<img class="w-[4.4vw]" src="https://www.7krave.com/img/cards/visa.png" alt="" />
							</div>
							<div>
								<img class="w-[4.4vw]" src="https://www.7krave.com/img/cards/mastercard.png" alt="" />
							</div>
							<div>
								<img class="w-[4vw]" src="https://www.7krave.com/img/cards/keycard.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>

			<!------ CONTAINER-2 ------>
			<div class="flex justify-between mt-10 pt-10 px-20 border-t-2 border-t-white">
				<p class="copyright-text text-[1vw]">Copyright &copy; {{ currentYear }} All Rights Reserved by <a routerLink="#">Amber Eats</a>.</p>

				<div class="flex gap-20 text-[1.5vw]">
					<a class="facebook hover:text-[#e0a04f] focus:text-[#e0a04f]" routerLink="#"><i class="fa-brands fa-facebook"></i></a>
					<a class="twitter hover:text-[#e0a04f] focus:text-[#e0a04f]" routerLink="#"><i class="fa fa-twitter"></i></a>
					<a class="insta hover:text-[#e0a04f] focus:text-[#e0a04f]" routerLink="#"><i class="fa-brands fa-instagram"></i></a>
				</div>
			</div>
		</footer>
	`,
})
export class FooterComponent implements OnInit {
	constructor() {}

	currentYear: number = new Date().getFullYear();

	ngOnInit(): void {}
}
