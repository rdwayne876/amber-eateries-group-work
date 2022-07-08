import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="site-footer">
<!------ CONTAINER-1 ------>
      <div class="container-1">

<!------ CONTAINER-1 / LEFT ------>
        <div class="left-col">
          <div class="col">
              <h1 class="footer-links-header">Quick Links</h1>
              <ul class="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/gallery">Gallary</a></li>
                <li><a href="/addproduct">Add New Product</a></li>
              </ul>
          </div>

          <div class="col">
            <h4 class="footer-links-header">For You</h4>
            <ul class="footer-links">
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Fequently Asked Questions</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div class="col">
            <h5 class="footer-links-header">Find Us</h5>
            <ul class="footer-links">
              <li>123 Nowhere Street<br>Somewhere City<br>Jamaica W.I.</li>
              <li>Email: ambereats@domain.com<br>Telephone: ambereats@domain.com</li>
              <li></li>
            </ul>
          </div>
        </div>

<!------ CONTAINER-1 /RIGHT ------>
        <div class="right-col">
          <div class="card-opts">
            <h1 class="card-opts-header">Accepted Cards</h1>
            <div class="img-bx">
              <img alt="Visa" src="https://www.7krave.com/img/cards/visa.png" width="60px">
              <img alt="Mastercard" src="https://www.7krave.com/img/cards/mastercard.png" data-src="/img/cards/mastercard.png" width="60px">
              <img alt="Mastercard" src="https://www.7krave.com/img/cards/keycard.png" width="60px">
            </div>
          </div>
        </div>
      </div>

<!------ CONTAINER-2 ------>
      <div class="container-2">
        <p class="copyright-text">
          Copyright &copy; 2022 All Rights Reserved by 
          <a href="#">Amber Eateries</a>.
        </p>

        <div class="social-icons-contain">
          <a class="facebook" href="#"><i class="fa-brands fa-facebook"></i></a>
          <a class="twitter" href="#"><i class="fa fa-twitter"></i></a> 
          <a class="insta" href="#"><i class="fa-brands fa-instagram"></i></a> 
        </div>
      </div>
    </footer>
  `,
  styles: [`

    @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600&display=swap');
    
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      text-decoration: none;
      list-style: none;
    }

    .site-footer{
      width: 100%;
      background-color: #5F462B;
      color: white;
    }

    .site-footer .container-1{
      width: 90%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      padding: 2vw 5vw 6vw 5vw;
      border-bottom: 3px solid white;
    }

    .container-1 .left-col{
      width: 60%;
      display: flex;
      justify-content: space-between;
    }

    .left-col .footer-links-header{
      font-size: 1.3vw;
      font-weight: 500;
      margin-bottom: 0.7vw
    }

    .left-col .col ul li{
      margin-bottom: 0.8vw;
      font-size: 1vw;
    }

    .container-1 .right-col{
      width: 40%;
    }

    .container-1 .right-col .card-opts{
      width: 60%;
      float: right;
      margin-top: 5vw;
      font-size: 1.5vw;
    }

    .card-opts .img-bx img{
      width: 5vw;
      /* height: 3vw */
    }
    
   .card-opts .card-opts-header{
      text-align: center;
      font-size: 2vw;
      line-height: 2;
    }
    
   .card-opts .img-bx{
      width: 100%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid white
    }

    .site-footer .container-2{
      width: 90%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5vw 2vw;
    }

    .container-2 .copyright-text{
      font-size: 1vw;
    }

    .container-2 .social-icons-contain a{
      font-size: 2vw;
      margin-right: 2vw;
    }
    
  `]
})
export class FooterComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}