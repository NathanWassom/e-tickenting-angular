import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/authentication/auth.service';
// import { AuthenticationService } from '../service/authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    // private authenticationService: AuthenticationService,
    private authService: AuthService,
    private router: Router
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   if(this.authenticationService.isAuthenticated){
    //     return true;
    //   }
    //     this.router.navigate(['']);
    //     return true;
    // }
    if (this.authService.isAuth) {
      return true;
    }

      this.router.navigate(['/sign-in']);
      return false;

  }
}
