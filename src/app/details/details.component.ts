import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  product?: Product;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getItem();
  }
  getItem() {
    const id = this.route.snapshot.params['id'];
    this.dataService.fetchItem(id).subscribe((data: Product) => {
      this.product = data;
    });
  }
}
