import { Intervention } from './../model/intervention';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterventionService {


  constructor(private http: HttpClient) { }

  getInterventionsByTcket(ticketId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${environment.apiDomain}/ticket/${ticketId}/interventions`
    );
  }

  addIntervention(ticket_id: number, user_id: number, duree: string, note: string, termine: number, resolu: string): Observable<Intervention> {
    var resolve: any = 1;

    if (resolu !== '') {
      resolve = +resolu;
    }
    return this.http.post<Intervention>(
      `${environment.apiDomain}/interventions`,
      {
        ticket_id,
        user_id,
        duree,
        note,
        termine,
        resolve,
      }
    );
  }

  getOneIntervention(id: number) { }

  update() {}
}
