import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from './product';

@Injectable({
	providedIn: 'root',
})
export class DataService {
	private REST_API_SERVER = 'http://localhost:3000/products';

	constructor(private httpClient: HttpClient) {}

	public sendGetRequest() {
		return this.httpClient.get<Product[]>(this.REST_API_SERVER);
	}

	public getRandomProducts(excludeID: number, limit: number = 5): Observable<Product[]> {
		return this.sendGetRequest().pipe(
			map((products: Product[]) => {
				let filteredProducts = products.filter((p) => p.id !== excludeID);

				filteredProducts.sort(() => Math.random() - 0.5);

				return filteredProducts.slice(0, limit);
			})
		);
	}

	public fetchItem(id: number) {
		return this.httpClient.get<Product>(`${this.REST_API_SERVER}/${id}`);
	}

	public addproduct(data: any) {
		return this.httpClient.post(this.REST_API_SERVER, data);
	}

	public rate(val: number, id: number) {
		let obs = new Observable((observer) => {
			this.httpClient.get<Product>(`${this.REST_API_SERVER}/${id}`).subscribe({
				next: (data) => {
					data.ratings.push(val);
					this.httpClient.patch(`${this.REST_API_SERVER}/${id}`, { ratings: data.ratings }).subscribe({
						next: () => {
                            observer.next(true);
                        },
						error: (err) => {
							console.log(err);
							observer.next(false);
						},
					});
				},
				error: (err) => {
					console.log(err);
					observer.next(false);
				},
			});
		});
		return obs;
	}

	public editproduct(id: number, data: any): Observable<void> {
		return this.httpClient.patch<void>(`${this.REST_API_SERVER}/${id}`, data);
	}
}
