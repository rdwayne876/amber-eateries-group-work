import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reciept',
  templateUrl: './reciept.component.html',
  styleUrls: ['./reciept.component.css']
})
export class RecieptComponent implements OnInit {
  orderNum = 123;
  orderDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
