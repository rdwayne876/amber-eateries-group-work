import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../menu';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    menus: Menu[] = [];

    constructor(private menuService: MenuService) { }

    ngOnInit() {
        this.menuService.getAllMenus().subscribe((data: Menu[]) => {
            this.menus = data;
        })


    }

}
