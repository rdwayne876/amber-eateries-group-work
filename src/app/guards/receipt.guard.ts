import { Injectable } from '@angular/core';
import {
    Router,
    ActivatedRouteSnapshot,
    CanActivate,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ReceiptGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        console.log(this.router.getCurrentNavigation()?.extras.state?.['receipt']);
        
        // Prevents navigation to the receipt page unless through checkout
        if (!this.router.getCurrentNavigation()?.extras.state?.['receipt'])
            return this.router.parseUrl('/home');
        else return true;
    }
}
