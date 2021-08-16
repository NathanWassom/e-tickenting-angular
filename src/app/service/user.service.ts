import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(environment.apiDomain + '/users')
      .pipe(tap((t) => console.log(t)));
  }

  delete(id: number | undefined): Observable<any> {
    return this.http.delete(environment.apiDomain + `/users/${id}`);
  }

  addUser(
    nom: string,
    email: string,
    password: string,
    tel: string,
    role: string
  ): Observable<any> {
    return this.http
      .post<User>(environment.apiDomain + '/users', {
        nom,
        email,
        password,
        tel,
        role,
      })
      .pipe(tap((t) => console.log(t)));
  }

  getOneUser(id: number): Observable<User> {
    return this.http
      .get<User>(`${environment.apiDomain}/users/${id}`)
      .pipe(tap((t) => console.log(t)));
  }

  updateUser(
    id: number,
    nom: string,
    email: string,
    tel: string,
    role: string
  ): Observable<any> {
    return this.http
      .put(`${environment.apiDomain}/users/${id}`, {
        nom,
        email,
        tel,
        role,
      });
  }
}
