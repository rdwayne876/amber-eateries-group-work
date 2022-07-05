import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
    selector: 'app-menu-edit',
    templateUrl: './menu-edit.component.html',
    styleUrls: ['./menu-edit.component.css']
})
export class MenuEditComponent implements OnInit, OnDestroy {
    id!: number;
    data?: Menu;

    private subscriptions?: Subscription;

    constructor(private menuService: MenuService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.id = Number.parseInt(this.route.snapshot.params['id']);

        const detailsSub = this.menuService.getMenuDetails(this.id).subscribe((data: Menu) => {
            this.data = data;
        })

        this.subscriptions?.add(detailsSub);
    }

    ngOnDestroy(): void {
        this.subscriptions?.unsubscribe();
    }

    updateMenuItem() {
        if (this.data) {
            const updateSub = this.menuService.updateMenu(this.id, this.data).subscribe(() => {
                this.router.navigate(['details', 'menu', this.id]);
            })

            this.subscriptions?.add(updateSub);
        }
    }
}
