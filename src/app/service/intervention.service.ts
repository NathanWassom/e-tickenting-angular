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

  getInterventionsByTcket(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiDomain}/interventions/${id}`);
  }
}
