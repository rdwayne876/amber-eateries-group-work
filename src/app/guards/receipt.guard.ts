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
        // Prevents navigation to the receipt page unless through checkout
        let data =
            this.router.getCurrentNavigation()?.extras.state?.['receipt'];

        if (
            this.router.getCurrentNavigation()?.trigger !== 'imperative' ||
            !data
        )
            return this.router.parseUrl('/home');
        return true;
    }
}
