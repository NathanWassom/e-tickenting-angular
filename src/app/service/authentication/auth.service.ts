import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from 'src/assets/services/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // isAuth = false;
  private apiDomain = environment.apiDomain;
  storageKey = environment.localStorageKey;

  constructor(private http: HttpClient) { }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  singnIn(email: string, password: string): Observable<User | undefined> {
    return this.http
      .post<User>(this.apiDomain + '/auth/login', { email, password })
      .pipe(map(this.saveUser.bind(this)));
  }

  signOut() {
    // this.isAuth = false;
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem(environment.tokenStorageKey);
  }

  saveUser(user: any): User | undefined {
    if (user) {
      let { token, ...userData } = user;
      localStorage.setItem(this.storageKey, JSON.stringify(userData));
      localStorage.setItem(environment.tokenStorageKey, token);
      return user;
    }
    return;
  }
}
