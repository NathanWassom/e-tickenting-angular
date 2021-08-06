import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/assets/services/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  singnIn(email: string, password: string){
    return new Promise(
      (resolve, reject) => {
        this.isAuth = true;
        resolve(true);
      }
      )
  }

  signOut() {
    this.isAuth = false;
  }


}
