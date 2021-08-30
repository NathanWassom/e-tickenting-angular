import { Intervention } from './../../model/intervention';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from 'src/app/service/ticket.service';
import { Tickets } from '../list-tickect/ticket';
import { InterventionService } from 'src/app/service/intervention.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css'],
})
export class TicketDetailComponent implements OnInit {
  ticket!: Tickets;
  interventions!: any[];

  constructor(private ticketService: TicketService, private route: ActivatedRoute, private interventionSrv: InterventionService) {}


  ngOnInit(): void {
    // get id in param url
    const id:number = +this.route.snapshot.paramMap.get('id')!;

    this.ticketService.getOneTicket(id).subscribe({
      next: (ticket) => {
        console.log(ticket)
        this.ticket = ticket;
      }
    });

    this.interventionSrv.getInterventionsByTcket(1).subscribe({
      next: (t) => {
        console.log(t);
        this.interventions = t;
      }
    })
  }
}

