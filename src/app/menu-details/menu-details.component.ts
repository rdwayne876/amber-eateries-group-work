import { Menu } from './../menu';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmComponent } from '../confirm/confirm.component';

@Component({
    selector: 'app-menu-details',
    templateUrl: './menu-details.component.html',
    styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {
    id!: number;
    menu?: Menu;

    private basePrice: number = 0;
    private dialogRef?: MatDialogRef<ConfirmComponent>;

    constructor(private menuService: MenuService, private dialog: MatDialog, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.id = Number.parseInt(this.route.snapshot.params['id']);

        this.menuService.getMenuDetails(this.id).subscribe((data: Menu) => {
            this.menu = data;
            this.basePrice = this.menu.cost;
        })

        this.dialogRef?.afterClosed().subscribe((result) => {
            console.log(result)
        })

    }

    selectSize(size: any) {
        this.menu!.cost = this.basePrice * size.ratio;
    }

    confirmDelete() {
        this.dialogRef = this.dialog.open(ConfirmComponent);
    }

    private deleteMenuItem() {
        this.menuService.deleteMenu(this.id).subscribe(() => {
            this.router.navigateByUrl('/menu')
        })
    }
}
