import { HeroComponent } from './hero/hero.component';
import { Input, NgModule, OnChanges, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DetailsComponent } from './details/details.component';
import { OrderComponent } from './order/order.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditComponent } from './edit/edit.component';
import { MenuComponent } from './menu/menu.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ReceiptComponent } from './components/receipt/receipt.component';
import { CheckoutGuard } from './guards/checkout.guard';
import { ReceiptGuard } from './guards/receipt.guard';
import { AboutusComponent } from './aboutus/aboutus.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HeroComponent },
    { path: 'menu', component: HomeComponent },
    { path: 'cart', component: ShoppingCartComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'addmenu', component: AddmenuComponent },
    { path: 'details/menu/:id', component: MenuDetailsComponent },
    { path: 'edit/menu/:id', component: MenuEditComponent },
    { path: 'about', component: AboutComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: 'order', component: OrderComponent },
    { path: 'addproduct', component: AddproductComponent },
    { path: 'edit/:id', component: EditComponent },
    {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [CheckoutGuard],
    },
    {
        path: 'receipt',
        component: ReceiptComponent,
        canActivate: [ReceiptGuard],
    },
    { path: 'hero', component: HeroComponent },
    { path: 'aboutus', component: AboutusComponent },

    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {

    constructor(router: Router) {
        router.events
            .subscribe(() => {
                window.scrollTo(0, 0);
            });
    }
}
