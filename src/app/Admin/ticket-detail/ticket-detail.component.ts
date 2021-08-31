import { Intervention } from './../../model/intervention';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from 'src/app/service/ticket.service';
import { Tickets } from '../list-tickect/ticket';
import { InterventionService } from 'src/app/service/intervention.service';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css'],
})
export class TicketDetailComponent implements OnInit {
  ticket!: Tickets;
  interventions!: any[];
  intervention = new Intervention();
  user_id!: number;
  userName!: string;
  // get id in param url
  id: number = +this.route.snapshot.paramMap.get('id')!;

  resolu: string = '';
  resolveBtnRadio: boolean = false;

  constructor(
    private ticketService: TicketService,
    private route: ActivatedRoute,
    private interventionSrv: InterventionService
  ) {}

  ngOnInit(): void {
    const localData = JSON.parse(
      localStorage.getItem(environment.localStorageKey)!
    );
    this.user_id = localData['id'];
    this.userName = localData['nom'];

    this.ticketService.getOneTicket(this.id).subscribe({
      next: (ticket) => {
        console.log(ticket);
        this.ticket = ticket;
      },
    });

    this.interventionSrv.getInterventionsByTcket(this.id).subscribe({
      next: (t) => {
        console.log(t);
        this.interventions = t;
      },
    });
  }

  radioChange(event: any) {
    this.intervention.termine = event.target.value;
    if (this.intervention.termine == '1') {
      this.resolveBtnRadio = true;
    }
  }

  resolveRadioChange(event: any) {
    this.resolu = event.target.value;
  }

  addIntervention(data: NgForm) {

    if (data.valid) {
      this.interventionSrv
        .addIntervention(
          this.id,
          this.user_id,
          data.value.duree,
          data.value.note,
          Boolean(data.value.termine),
          this.resolu
        )
        .subscribe({ next: () => (data.value.note = '') });
    }
  }
}
