import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/service/ticket.service';
import { Tickets } from '../list-tickect/ticket';

@Component({
  selector: 'app-add-ticket-panel',
  templateUrl: './add-ticket-panel.component.html',
  styleUrls: ['./add-ticket-panel.component.css']
})
export class AddTicketPanelComponent implements OnInit {

ticket = new Tickets();



  constructor(private ticketService : TicketService, 
              private router:Router) { }

  ngOnInit(): void {
  }

  public addTicket(data :NgForm){
     this.ticketService.ajouterTicket(
       data.value.nom, 
       data.value.entreprise,
       data.value.email,
       data.value.categorie_id,
       data.value.contenu,
       data.value.titre,
       data.value.tel,
       )
    .subscribe({
      next: () => console.log(this.ticket)
    });
    // console.log("valeurs: ", JSON.stringify(data.value));

  }
}
