import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/service/ticket.service';
import { Tickets } from './ticket';

@Component({
  selector: 'app-list-tickect',
  templateUrl: '../list-tickect/list-tickect.component.html',
  styleUrls: ['../list-tickect/list-tickect.component.css']

})
export class ListTickectComponent implements OnInit {

  tickets: any[] | undefined;

  constructor(private ticketService: TicketService,
              private router: Router ) {


   }


  ngOnInit(): void {
  
  this.ticketService.getAllTickets().subscribe({
    next:(ticket) =>(
      this.tickets = ticket
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
