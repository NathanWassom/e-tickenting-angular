import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { TicketService } from 'src/app/service/ticket.service';
import { Tickets } from './ticket';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-list-tickect',
  templateUrl: '../list-tickect/list-tickect.component.html',
  styleUrls: ['../list-tickect/list-tickect.component.css'],
})
export class ListTickectComponent implements OnInit {
  tickets!: any[];
  newTickets!: any[];
  pendingTickets!: any[];
  closedTicket!: any[];
  totalLength: any;
  page: number = 1;
  totalLengthNewTicket: any;
  totalLengthPendingTicket: any;
  totalLengthClosedTicket: any;
  pageNewTicket: number = 1;
  pagePendingTicket: number = 1;
  pageClosedTicket: number = 1;
  manager!: string;

  constructor(private _ticketService: TicketService, private router: Router) {}

  ngOnInit(): void {
    // No filter status
    this._ticketService
      .getAllTickets()
      .pipe(
        map((t) => {
          const Ticket = t.filter((x) => x.online !== -1);
          return Ticket;
        })
      )
      .subscribe({
        next: (ticket) => {
          this.tickets = ticket;
          this.totalLength = ticket.length;
        },
      });

    // filtering new tickets
    this._ticketService.newTickets().subscribe({
      next: (ticket) => {
        this.newTickets = ticket;
        this.totalLengthNewTicket = ticket.length;
      },
    });

    // filtering pending tickets
    this._ticketService.pendingTickets().subscribe({
      next: (ticket) => {
        this.pendingTickets = ticket;
        this.totalLengthPendingTicket = ticket.length;
      },
    });

    // Filtering tickets clôturés
    this._ticketService.closedTickets().subscribe({
      next: (ticket) => {
        this.closedTicket = ticket;
        this.totalLengthClosedTicket = ticket.length;
      },
    });
  }

  delete(id: number | undefined) {
    return this._ticketService.delete(id).subscribe({
      next: () => {
        console.log('OK');
        this.router.navigate(['/cpanel/list-ticket']);
      },
    });
  }

  search() {
    if (this.manager == '') {
      this.ngOnInit();
    } else {
      this.tickets ==
        this.tickets.filter((res) => {
          return res.manager
            .toLocaleLowerCase()
            .match(this.manager.toLocaleLowerCase());
        });
    }
  }
}
