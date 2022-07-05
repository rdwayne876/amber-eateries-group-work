import { MenuService } from './../menu.service';
import { Component, OnInit } from '@angular/core';
import { Menu, Size } from '../menu';
import { Router } from '@angular/router';



@Component({
    selector: 'app-addmenu',
    templateUrl: './addmenu.component.html',
    styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {
    public menu = {
        menu_name: '',
        menu_description: '',
        menu_size: { lg: false, md: false, sm: false } as { [index: string]: boolean },
        cost: '',
        imageUrl: '',
    }

    constructor(private menuService: MenuService, private router: Router) { }

    ngOnInit(): void {
    }

    addNewMenu() {
        let sizes = Object.keys(this.menu.menu_size).filter((key: string) => (this.menu.menu_size[key] as any)).map((size: string) => ({ type: size, ratio: Size[(size as keyof (typeof Size))] }))

        const data: unknown = {
            ...this.menu,
            cost: Number.parseInt(this.menu.cost),
            menu_size: sizes
        }

        this.menuService.addMenu(data as Menu).subscribe(() => {
            this.router.navigateByUrl('/menu')
        })
    }

}
