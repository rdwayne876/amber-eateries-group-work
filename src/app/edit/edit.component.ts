import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DataService } from './../data.service';
import { Product } from '../product';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private alert: MatSnackBar
  ) {}

  public product?: Product;
  public randomProducts: Product[] = [];
  private id!: number;

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dataService.fetchItem(this.id).subscribe((data: Product) => {
      this.product = data;
    });

    this.dataService
      .getRandomProducts(this.id)
      .subscribe((products: Product[]) => {
        this.randomProducts = products;
      });
  }

  goToProduct(id: number) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/edit', id]);
  }

  editProductForm() {
    console.log(this.product);

    if (this.product)
      this.dataService.editproduct(this.id, this.product).subscribe(() => {
        this.alert.open('Product update successful!', 'Okay', {
          duration: 1000 * 3,
        });
      });
  }
}
