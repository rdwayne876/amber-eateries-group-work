import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
})
export class AddproductComponent implements OnInit {
  arrlen: number = 0;
  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {}

  getProductForm(data: any) {
    this.getupdatedid();
    this.dataService.addproduct(data).subscribe((result) => {
      this.router.navigate(['home']);
    });
  }

  getupdatedid() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      this.arrlen = data.length;
      console.log(this.arrlen);
    });
  }
}
