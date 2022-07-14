import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { Router } from '@angular/router';
import { Category } from '../product';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
	selector: 'app-addproduct',
	templateUrl: './addproduct.component.html',
	styleUrls: ['./addproduct.component.css'],
})
export class AddproductComponent implements OnInit {
	constructor(private dataService: DataService, private router: Router, private snackBar: MatSnackBar) {}

	arrlen: number = 0;
	categories?: string[] = [];

	ngOnInit(): void {
		this.categories = Object.keys(Category);
	}

	getProductForm(data: any) {
		this.getUpdatedId();
		this.dataService.addproduct(data).subscribe((_) => {
			this.snackBar.open('Product added', 'Okay', {
				duration: 2000,
				panelClass: 'hazel-snackbar',
			});
			this.router.navigate(['home']);
		});
	}

	getUpdatedId() {
		this.dataService.sendGetRequest().subscribe((data: any[]) => {
			this.arrlen = data.length;
		});
	}
}
