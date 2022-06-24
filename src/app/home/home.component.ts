import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any = [];

  constructor(private dataService: DataService) {}


  ngOnInit() {
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      this.products = data;
    });
  }
}
