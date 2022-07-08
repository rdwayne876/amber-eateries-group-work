import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { OrderComponent } from './order/order.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditComponent } from './edit/edit.component';
import { HeaderComponent } from './partials/header.component';
import { FooterComponent } from './partials/footer.component';
import { MenuComponent } from './menu/menu.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { HeroComponent } from './hero/hero.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import {MatBadgeModule} from '@angular/material/badge';

import { SafePipe } from './safe.pipe';
import { MapComponent } from './map/map.component';
import { RecieptComponent } from './components/reciept/reciept.component';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        DetailsComponent,
        OrderComponent,
        SafePipe,
        AddproductComponent,
        EditComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        AddmenuComponent,
        MenuDetailsComponent,
        ConfirmComponent,
        MenuEditComponent,
        ShoppingCartComponent,
        CheckoutComponent,
        HeroComponent,
        MapComponent,
        RecieptComponent,
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatGridListModule,
        FormsModule,
        ReactiveFormsModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDialogModule,
        MatStepperModule,
        MatRadioModule,
        MatBadgeModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
