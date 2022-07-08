import { Injectable } from '@angular/core';
import { User } from '../interfaces/checkout';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private API = 'http://localhost:3000/';
  last_user_created!: number;

  //Create
  createUser(user: User) {
    let obs = new Observable<boolean>((observer) => {
      this.http.post<User>(`${this.API}users`, user).subscribe({
        next: (data) => {
          this.last_user_created = data.id;
          observer.next(true);
        },
        error: (err) => {
          console.log(err);
          observer.next(false);
        },
      });
    });
    return obs;
  }
  //Read
  getUser(email: string) {
    let obs = new Observable<User | null>((observer) => {
      this.http.get<User>(`${this.API}users?users.email=${email}`).subscribe({
        next: (data) => {
          observer.next(data);
        },
        error: (err) => {
          console.log(err);
          observer.next(null);
        },
      });
    });
    return obs;
  }
  //Update
  updateUser(user: User, id: number) {
    let obs = new Observable<boolean>((observer) => {
      this.http.put(`${this.API}users/${id}`, user).subscribe({
        next: () => {
          observer.next(true);
        },
        error: (err) => {
          console.log(err);
          observer.next(false);
        },
      });
    });
    return obs;
  }
  //Delete
  deleteUser(user: User, id: number) {
    let obs = new Observable<boolean>((observer) => {
      this.http.delete(`${this.API}users/${id}`).subscribe({
        next: () => {
          observer.next(true);
        },
        error: (err) => {
          console.log(err);
          observer.next(false);
        },
      });
    });
    return obs;
  }

  constructor(private http: HttpClient) {}
}
