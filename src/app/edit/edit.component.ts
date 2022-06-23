import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from './../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public product?: Product;
  private id!: number;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dataService.fetchItem(this.id).subscribe((data: Product) => {
      this.product = data;
    });
  }
  editProductForm() {
    if (this.product)
      this.dataService.editproduct(this.id, this.product).subscribe(() => {
        this.router.navigateByUrl('/home');
      });
  }
}
