import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

   // slider images array start
   images = [
    {
        imageSrc:
            'https://images.squarespace-cdn.com/content/v1/54fb1c14e4b0a61cf908cda9/1493775538464-UCMRJAN9PWH18BZAPKFV/sepia-1-16-1517172.jpg?format=1500w',
        imageAlt: 'nature1',
    },
    {
        imageSrc:
            'https://images.squarespace-cdn.com/content/v1/54fb1c14e4b0a61cf908cda9/1539982459141-GPHTLT9E75AHHE68LS43/sepia-dessert9973rtcr.JPG?format=1500w',
        imageAlt: 'nature2',
    },
    {
        imageSrc: 'https://images.squarespace-cdn.com/content/v1/54fb1c14e4b0a61cf908cda9/1493775537081-5H84Y9JHD5JOP4IACOUH/pappardalle-%232.jpg?format=1500w',
        imageAlt: 'person1',
    },
    {
        imageSrc:
            'https://images.squarespace-cdn.com/content/v1/54fb1c14e4b0a61cf908cda9/1493775536169-NHL7W2XEILCX32552IFJ/charcuterie-lite.jpg?format=1500w',
        imageAlt: 'person2',
    },
];
// slider images array end

  constructor() { }

  ngOnInit(): void {
  }

}
