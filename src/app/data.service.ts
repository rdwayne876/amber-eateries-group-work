import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private REST_API_SERVER = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) {}

  public sendGetRequest() {
    return this.httpClient.get<any[]>(this.REST_API_SERVER);
  }
  public fetchItem(id: number) {
    return this.httpClient.get<Product>(`${this.REST_API_SERVER}/${id}`);
  }

  public addproduct(data: any) {
    return this.httpClient.post(this.REST_API_SERVER, data);
  }

  public editproduct(id: number, data: Product): Observable<void> {
    return this.httpClient.put<void>(`${this.REST_API_SERVER}/${id}`, data);
  }
}
