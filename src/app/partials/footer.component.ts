import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
    <footer class="site-footer">
    <div class="container c-1">
      <div class="row">
        <div class="col-lg">
        <h6>Find Us</h6>
        <span>
            51 Hope Road, Kingston
        </span>
        <br>
        <span>
        Email: ambereats@domain.com
        Telephone: (876) 438 - 3478
        </span>

        </div>
        <div class="col-sml">
        <h6>For You</h6>
        <ul class="footer-links">
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Fequently Asked Questions</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        </div>
        <div class="col-sml">
          <h6>Quick Links</h6>
          <ul class="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/addproduct">Add New Product</a></li>
          </ul>
        </div>

        <div class="col-sml">
          <h6>Accepted Cards</h6>
          <ul class="footer-links">
          <img alt="Visa" src="https://www.7krave.com/img/cards/visa.png" width="60px">
          <img alt="Mastercard" src="https://www.7krave.com/img/cards/mastercard.png" data-src="/img/cards/mastercard.png" width="60px">
          <img alt="Mastercard" src="https://www.7krave.com/img/cards/keycard.png" width="60px">
          </ul>
        </div>
      </div>
      <hr>
    </div>
    <div class="container c-2">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by
       <a href="#">Amber Eateries</a>.
          </p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="social-icons">
            <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
</footer>
    `,
    styles: [`

    @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto+Flex:opsz,wght@8..144,100;8..144,200;8..144,300;8..144,400;8..144,500;8..144,600&display=swap');
    .logo a {
    text-decoration: none;
    }

    .logo span {
    font-family: 'Permanent Marker', cursive;
    font-size: 28px;
    color: #212529;
    }

    .container{
      width: 78%;
      margin: 0 auto;
    }

    .c-1 .row, .c-2 .row {
      display: flex;
    }

    .c-2 .row {
      justify-content: space-between;
      align-items: center;
    }

    .col-lg {
      flex: 1;
    }
    .col-sml {
      width: 220px;
    }

    .col-2 img {
      margin: 0.5rem;
    }
    .col-3 {
      width: 200px;
    }
    .site-footer
{
  width: 100%;
  background-color:#FFF;
  border-top: 1px solid #e4e7eb;
  padding:45px 0 20px;
  font-size:15px;
  line-height:24px;
  color: rgb(105, 105, 105);;
}
.site-footer hr
{
  border-top-color: #e4e7eb;
}
.site-footer hr.small
{
  margin:20px 0
}
.site-footer h6
{
  color:#212529;
  font-size:16px;
  text-transform:uppercase;
  margin-top:5px;
  letter-spacing:2px
}
.site-footer a
{
  color:#737373;
}
.site-footer a:hover
{
  color:#00b5ad;
  text-decoration:none;
}
.footer-links
{
  padding-left:0;
  list-style:none
}
.footer-links li
{
  display:block
}
.footer-links a
{
  color:#737373
}
.footer-links a:active,.footer-links a:focus,.footer-links a:hover
{
  color:#00b5ad;
  text-decoration:none;
}
.footer-links.inline li
{
  display:inline-block
}

.social-icons {
  margin-right: 100px;
}
.site-footer .social-icons
{
  text-align:right
}
.site-footer .social-icons a
{
  width:40px;
  height:40px;
  line-height:40px;
  margin-left:6px;
  margin-right:0;
  border-radius:100%;
  background-color:#FFF;
}
.copyright-text
{
  margin:0
}
@media (max-width:991px)
{
  .site-footer [class^=col-]
  {
    margin-bottom:30px
  }
}
@media (max-width:767px)
{
  .site-footer
  {
    padding-bottom:0
  }
  .site-footer .copyright-text,.site-footer .social-icons
  {
    text-align:center
  }
}
.social-icons
{
  padding-left:0;
  margin-bottom:0;
  list-style:none
}
.social-icons li
{
  display:inline-block;
  margin-bottom:4px
}
.social-icons li.title
{
  margin-right:15px;
  text-transform:uppercase;
  color:#96a2b2;
  font-weight:700;
  font-size:13px
}
.social-icons a{
  background-color:#FFF;
  color: #212529;
  font-size:16px;
  display:inline-block;
  line-height:44px;
  width:44px;
  height:44px;
  text-align:center;
  margin-right:8px;
  border-radius:100%;
  border: 1px solid #e4e7eb;
  -webkit-transition:all .2s linear;
  -o-transition:all .2s linear;
  transition:all .2s linear
}
.social-icons a:active,.social-icons a:focus,.social-icons a:hover
{
  color:#fff;
  background-color:#FFF;
}
.social-icons.size-sm a
{
  line-height:34px;
  height:34px;
  width:34px;
  font-size:14px
}
.social-icons a.facebook:hover
{
  background-color:#3b5998
}
.social-icons a.twitter:hover
{
  background-color:#00aced
}
.social-icons a.linkedin:hover
{
  background-color:#007bb6
}
.social-icons a.dribbble:hover
{
  background-color:#ea4c89
}
@media (max-width:767px)
{
  .social-icons li.title
  {
    display:block;
    margin-right:0;
    font-weight:600
  }
}

    `]
})
export class FooterComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
