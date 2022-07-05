import { Menu } from './../menu';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-menu-details',
    templateUrl: './menu-details.component.html',
    styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit, OnDestroy {
    id!: number;
    menu?: Menu;

    private basePrice: number = 0;
    private dialogRef?: MatDialogRef<ConfirmComponent>;

    private subscriptions?: Subscription;

    constructor(private menuService: MenuService, private dialog: MatDialog, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.id = Number.parseInt(this.route.snapshot.params['id']);

        const detailsSub = this.menuService.getMenuDetails(this.id).subscribe((data: Menu) => {
            this.menu = data;
            this.basePrice = this.menu.cost;
        })

        this.subscriptions?.add(detailsSub);
    }

    ngOnDestroy(): void {
        this.subscriptions?.unsubscribe();
    }

    selectSize(size: any) {
        this.menu!.cost = this.basePrice * size.ratio;
    }

    confirmDelete() {
        this.dialogRef = this.dialog.open(ConfirmComponent);

        const dialogSub = this.subscriptions?.add(this.dialogRef.afterClosed().subscribe((result) => {
            if (result === 'yes')
                this.deleteMenuItem();
        }))

        this.subscriptions?.add(dialogSub);
    }

    private deleteMenuItem() {
        this.menuService.deleteMenu(this.id).subscribe(() => {
            this.router.navigateByUrl('/menu')
        })
    }
}
