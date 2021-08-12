import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Tickets } from '../Admin/list-tickect/ticket';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private apiURL: string = 'http://localhost:8000/api';

  
  tickets: Tickets[] | undefined;

  constructor(private http: HttpClient) {

  }

  public getAllTickets(): Observable<any[]> {
    return this.http.get<any[]>(this.apiURL+'/tickets');
  }

  public ajouterTicket(
      nom: string, 
      entreprise :string,
      email:string ,
      categorie_id: number,
      contenu :string,
      titre :string,
      tel: string
  ): Observable<Tickets>{
    
    return this.http.post<Tickets>(this.apiURL+'/tickets',{
      nom, 
      entreprise,
      email,
      categorie_id,
      contenu,
      titre,
      tel,
    } ).pipe(tap(t => console.log(t))  )
  } 

  supprimerTicket(id : number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.delete(url, httpOptions);
      }
}
