import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { MatPaginator } from '@angular/material/paginator';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  currentPage = 0;
  pageLimit = 9;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
changePage(event:any){
  console.log(event)
  this.currentPage = event.pageIndex;
  this.pageLimit = event.pageSize;
}
}
