import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from './menu';

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    private REST_API_SERVER = 'http://localhost:3000/menus';

    constructor(private http: HttpClient) { }

    getAllMenus(): Observable<Menu[]> {
        return this.http.get<Menu[]>(this.REST_API_SERVER);
    }

    getMenuDetails(id: number): Observable<Menu> {
        return this.http.get<Menu>(`${this.REST_API_SERVER}/${id}`);
    }

    addMenu(data: Menu): Observable<void> {
        return this.http.post<void>(this.REST_API_SERVER, data);
    }

    updateMenu(id: number, data: Menu): Observable<void> {
        return this.http.put<void>(`${this.REST_API_SERVER}/${id}`, data);
    }

    deleteMenu(id: number): Observable<void> {
        return this.http.delete<void>(`${this.REST_API_SERVER}/${id}`);
    }
}
