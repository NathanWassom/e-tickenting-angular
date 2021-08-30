import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { TicketService } from 'src/app/service/ticket.service';
import { Tickets } from './ticket';

@Component({
  selector: 'app-list-tickect',
  templateUrl: '../list-tickect/list-tickect.component.html',
  styleUrls: ['../list-tickect/list-tickect.component.css'],
})
export class ListTickectComponent implements OnInit {
  tickets: any[] | undefined;
  newTickets: any[] | undefined;
  ticketEnCours: any[] | undefined;
  endedTicket: any[] | undefined;

  constructor(private ticketService: TicketService, private router: Router) {}

  ngOnInit(): void {
    // No filter status
    this.ticketService
      .getAllTickets()
      .pipe(
        map((t) => {
          const Ticket = t.filter((x) => x.online !== -1);
          return Ticket;
        })
      )
      .subscribe({
        next: (ticket) => (this.tickets = ticket),
      });

    // filtering new tickets
    this.ticketService
      .getAllTickets()
      .pipe(
        map((t) => {
          const Ticket = t.filter((x) => x.statut === 0 && x.online !== -1);
          return Ticket;
        })
      )
      .subscribe({
        next: (ticket) => (this.newTickets = ticket),
      });

    // filtering tickets en cours
    this.ticketService
      .getAllTickets()
      .pipe(
        map((t) => {
          const Ticket = t.filter((x) => x.statut === 1 && x.online !== -1);
          return Ticket;
        })
      )
      .subscribe({
        next: (ticket) => (this.ticketEnCours = ticket),
      });

    // Filtering tickets clôturés
    this.ticketService
      .getAllTickets()
      .pipe(
        map((t) => {
          const Ticket = t.filter(
            (x) => (x.statut === -1 || x.statut === 2) && x.online !== -1
          );
          return Ticket;
        })
      )
      .subscribe({
        next: (ticket) => (this.endedTicket = ticket),
      });
  }

  delete(id: number | undefined) {
    return this.ticketService.delete(id).subscribe({
      next: () => {
        console.log('OK');
        this.router.navigate(['/cpanel/list-ticket']);
      },
    });
  }
}
