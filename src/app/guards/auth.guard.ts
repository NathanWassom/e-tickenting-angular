// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// // import { AuthenticationService } from '../service/authentication/authentication.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   router: any;

//   constructor(private authenticationService: AuthenticationService){

//   }
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     if(this.authenticationService.isAuthenticated){
//       return true;
//     }
//       this.router.navigate(['']);
//       return true;
//   }

// }
