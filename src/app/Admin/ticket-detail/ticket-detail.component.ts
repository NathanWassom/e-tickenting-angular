import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from 'src/app/service/ticket.service';
import { Tickets } from '../list-tickect/ticket';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css'],
})
export class TicketDetailComponent implements OnInit {
  ticket!: Tickets;

  constructor(private ticketService: TicketService, private route: ActivatedRoute) {}


  ngOnInit(): void {
    // get id in param url
    const id:number = +this.route.snapshot.paramMap.get('id')!;

    this.ticketService.getOneTicket(id).subscribe({
      next: (ticket) => {
        console.log(ticket)
        this.ticket = ticket;
      }
    });
  }
}
