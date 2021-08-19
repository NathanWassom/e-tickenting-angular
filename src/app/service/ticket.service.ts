import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Tickets } from '../Admin/list-tickect/ticket';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private http: HttpClient) {}


  tickets: Tickets[] | undefined;


  public getAllTickets(): Observable<any[]> {
    return this.http.get<any[]>(environment.apiDomain+'/tickets');
  }

  public getOneTicket(id:number): Observable<Tickets> {
    return this.http.get<Tickets>(`${environment.apiDomain}/tickets/${id}`)
    .pipe(
      tap((t) => console.log(t))
      );

  }


  public ajouterTicket(
      nom: string,
      entreprise :string,
      email:string ,
      categorie_id: number,
      contenu :string,
      titre :string,
      tel: string,
  ): Observable<any>{
    const data = JSON.parse(localStorage.getItem(environment.localStorageKey)!);
    const user_id = data['id'];
    return this.http.post<Tickets>(environment.apiDomain+'/tickets',{
      nom,
      entreprise,
      email,
      categorie_id,
      contenu,
      titre,
      tel,
      user_id,
    } ).pipe(tap(t => console.log(t))  )
  }

  updateTicket(
      id:number,
      nom: string,
      entreprise :string,
      email:string ,
      contenu :string,
      titre :string,
      tel: string,
      categorie_id:string
  ): Observable<any> {
    return this.http
      .put(`${environment.apiDomain}/tickets/${id}`, {
      nom,
      entreprise,
      email,
      contenu,
      titre,
      tel,
      categorie_id
      });
  }
  delete(id: number| undefined): Observable<any> {
    return this.http.put(`${environment.apiDomain}/tickets/${id}/delete`, {id});
  }
}
