import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

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
