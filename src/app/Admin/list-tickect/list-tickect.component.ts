import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { TicketService } from 'src/app/service/ticket.service';
import { Tickets } from './ticket';

@Component({
  selector: 'app-list-tickect',
  templateUrl: '../list-tickect/list-tickect.component.html',
  styleUrls: ['../list-tickect/list-tickect.component.css']

})
export class ListTickectComponent implements OnInit {

  tickets: any[] | undefined;
  newTickets: any[] | undefined;
  resolveTicket: any[] | undefined;
  NotResolve: any[] | undefined;

  constructor(private ticketService: TicketService,
              private router: Router ) {


   }


  ngOnInit(): void {
  
  this.ticketService.getAllTickets()
  .subscribe({
    next:(ticket) =>(
      this.tickets = ticket
      ), 
      
      
  });  

this.ticketService.getAllTickets()
.pipe(
  map((t) => {
    const Ticket = t.filter((x) => x.statut === 2);
    return Ticket;
  }),
  tap((t) => console.log(t))
)
.subscribe({
  next:(ticket) =>(
    this.newTickets = ticket
    ), 
    
    
});  

this.ticketService.getAllTickets()
.pipe(
  map((t) => {
    const Ticket = t.filter((x) => x.statut === 1);
    return Ticket;
  }),
  tap((t) => console.log(t))
)
.subscribe({
  next:(ticket) =>(
    this.resolveTicket = ticket
    ), 
    
    
});  

this.ticketService.getAllTickets()
.pipe(
  map((t) => {
    const Ticket = t.filter((x) => x.statut === -1);
    return Ticket;
  }),
  tap((t) => console.log(t))
)
.subscribe({
  next:(ticket) =>(
    this.NotResolve = ticket
    ), 
    
    
});  
}




delete(id: number | undefined) {
  return this.ticketService.delete(id).subscribe({
    next: () => {
      console.log('OK');
      this.router.navigate(['/list-tickect']);
    },
  });
}


}
