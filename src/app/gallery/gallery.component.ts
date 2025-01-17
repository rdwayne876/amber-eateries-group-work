import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  picsArray: any[] = [
    {imgSrc: 'https://images.squarespace-cdn.com/content/v1/54fb1c14e4b0a61cf908cda9/1493775538832-5GGUPQRB895D1P4MM40H/sepia-1-16-1517182cr.jpg?format=300w'},
    {imgSrc: 'https://images.squarespace-cdn.com/content/v1/54fb1c14e4b0a61cf908cda9/1493775538421-R3KA1SDF42IU36SFSGAK/sepia-1-16-1517150.jpg?format=1000w'},
    {imgSrc: 'https://images.squarespace-cdn.com/content/v1/54fb1c14e4b0a61cf908cda9/1493775537512-QT4K3LWFJZ62GKVI0OSZ/scallops-lite.jpg?format=1000w'},
    {imgSrc: 'https://images.squarespace-cdn.com/content/v1/54fb1c14e4b0a61cf908cda9/1493775538812-CK2DDASYS2NGE8N0ULGM/skate-with-cauliflower-and-brown-butter.jpg?format=1000w'},
    {imgSrc: 'https://images.squarespace-cdn.com/content/v1/54fb1c14e4b0a61cf908cda9/1493775538010-S8WL6X6S6C4X8X4UGW4F/sepia-1-16-1517043.jpg?format=1000w'},
    {imgSrc: 'https://images.squarespace-cdn.com/content/v1/54fb1c14e4b0a61cf908cda9/1493775538464-UCMRJAN9PWH18BZAPKFV/sepia-1-16-1517172.jpg?format=1000w'},
    {imgSrc: 'https://images.squarespace-cdn.com/content/v1/54fb1c14e4b0a61cf908cda9/1493775537141-Z7OZ3FVNF08SWQ67M401/porchetta-lite.jpg?format=1000w'},
    {imgSrc: 'https://images.squarespace-cdn.com/content/v1/54fb1c14e4b0a61cf908cda9/1493775536292-AAR84QKH6PKGRWG0KN5Y/close-up-sandwhich-lite.jpg?format=1000w'},
    {imgSrc: 'https://images.squarespace-cdn.com/content/v1/54fb1c14e4b0a61cf908cda9/1493775539183-HPJSVVCJTCCJXWG08WO6/steak-lite.jpg?format=1000w'},
    {imgSrc: 'https://images.squarespace-cdn.com/content/v1/54fb1c14e4b0a61cf908cda9/1493775538141-BLDK7ZNSG5KNXEQLQJPY/sepia-1-16-1517116rt.jpg?format=1000w'},
    {imgSrc: 'https://images.squarespace-cdn.com/content/v1/54fb1c14e4b0a61cf908cda9/1539982459141-GPHTLT9E75AHHE68LS43/sepia-dessert9973rtcr.JPG?format=1000w'},
    {imgSrc: 'https://images.squarespace-cdn.com/content/v1/54fb1c14e4b0a61cf908cda9/1583509920034-0XR6GQ9B6PJ9PATPPN6T/sepia_crw2020_chocmousse1.jpg?format=1000w'}
  ];

  public get height() : number {
		return window.innerHeight;
	}
	public get width() : number {
		return window.innerWidth;
	}

  constructor() { }

  ngOnInit(): void {
  }

}
