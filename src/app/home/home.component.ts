import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../service/authentication/auth.service';
import { TicketService } from '../service/ticket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isAuth!: boolean;
  lstorage = JSON.parse(localStorage.getItem(environment.localStorageKey)!);
  username!: string;
  total!: number;
  totalNouveau!:number;
  totalResolus!:number;
  totalNonResolus!:number;
  totalEncours!:number;

  constructor(
    private router: Router,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.username = this.lstorage['nom'];

    // count new ticket
    this.ticketService
      .getAllTickets()
      .pipe(
        map((t) => {
          const Ticket = t.filter((x) => x.statut === 0 && x.online !== -1);
          return Ticket;
        })
      )
      .subscribe({
        next: (t) => (this.total = t.length),
      });
    
  
// Filtering tickets nouveau
this.ticketService
.getAllTickets()
.pipe(
  map((t) => {
    const Ticket = t.filter(
      (x) => (x.statut === 1) && x.online !== -1
    );
    return Ticket;
  })
)
.subscribe({
  next: (t) => (this.totalEncours = t.length),
});

    // Filtering tickets resolus
    this.ticketService
      .getAllTickets()
      .pipe(
        map((t) => {
          const Ticket = t.filter(
            (x) => (x.statut === 2) && x.online !== -1
          );
          return Ticket;
        })
      )
      .subscribe({
        next: (t) => (this.totalResolus= t.length),
      });

    // Filtering tickets non resolus
      this.ticketService
      .getAllTickets()
      .pipe(
        map((t) => {
          const Ticket = t.filter(
            (x) => (x.statut === -1) && x.online !== -1
          );
          return Ticket;
        })
      )
      .subscribe({
        next: (t) => (this.totalNonResolus= t.length),
      });
  }

}
