import { NgForm } from '@angular/forms';
import { Ticket } from './ticket';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tickets } from 'src/app/Admin/list-tickect/ticket';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-add-tickect',
  templateUrl: '../add-tickect/add-tickect.component.html',
  styleUrls: ['../add-tickect/add-tickect.component.css']
})
export class AddTickectComponent implements OnInit {


  public newTicket: Tickets = new Tickets();



  constructor(private TicketService : TicketService, 
              private router:Router) { }

  ngOnInit(): void {
  }

  public addTicket(){
    // this.TicketService.ajouterTicket(this.newTicket)
    // .subscribe(tick => {
      console.log(this.newTicket);
    // });
    // this.router.navigate(['/cpanel/tickets-panel']).then(() => {
    //   window.location.reload();
    //   });
  }
}
