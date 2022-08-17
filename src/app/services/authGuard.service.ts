import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, RouterStateSnapshot, UrlTree } from '@angular/router';
import {Router} from '@angular/router'; 
import { Observable } from 'rxjs';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private userService: UserService, private route: Router) {}
  
    canActivate() {
        if (this.userService.getLoggedIn()) {
            return true;
        } else {
            this.route.navigate(['/']);
            return false;
        }
    }
}