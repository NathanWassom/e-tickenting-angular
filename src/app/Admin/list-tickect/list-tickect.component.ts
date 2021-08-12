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

  tickets: Tickets[] | undefined;

  constructor(private ticketService: TicketService,
              private router: Router ) {


   }


  ngOnInit(): void {
  
  this.ticketService.getAllTickets().subscribe(list =>{
    console.log(list);
    this.tickets = list;
  });
}

// supprimerTicket(t : Tickets) {


//   let conf = confirm("Etes-vous sûr?");
//   if(conf)
//     this.ticketService.supprimerTicket(t.id).subscribe(() =>{
//       console.log("Ticket supprimé");
//     });
//     // this.router.navigate(['/cpanel/list-ticket']).then(() => {
//     //   window.location.reload();
//     //   });
  
 
//   }

}
