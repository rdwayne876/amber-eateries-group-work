import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { OrderComponent } from './order/order.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditComponent } from './edit/edit.component';
import { MenuComponent } from './menu/menu.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cart', component: ShoppingCartComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'addmenu', component: AddmenuComponent },
    { path: 'details/menu/:id', component: MenuDetailsComponent },
    { path: 'edit/menu/:id', component: MenuEditComponent },
    { path: 'about', component: AboutComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: 'order', component: OrderComponent },
    { path: 'addproduct', component: AddproductComponent },
    { path: 'edit/:id', component: EditComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
