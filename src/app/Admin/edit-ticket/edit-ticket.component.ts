import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from 'src/app/service/ticket.service';
import { Tickets } from '../list-tickect/ticket';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css'],
})
export class EditTicketComponent implements OnInit {
  tickets = new Tickets();
  ticket!: Tickets;
  checkPass: boolean = false;
  isInsert: boolean = false;
  isNotInsert: boolean = false;
  responseText!: string;
  labelColor!: string;
  id: number = +this.route.snapshot.paramMap.get('id')!;

  constructor(
    private route: ActivatedRoute,
    private ticketService: TicketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ticketService.getOneTicket(this.id).subscribe({
      next: (ticket) => (this.ticket = ticket),
    });
  }
  
  getStatut(data:NgForm){
    if(data.value){
      this.ticketService
        
    }
  }

  public onUpdate(data: NgForm) {
      if (data.valid) {
        this.ticketService
          .updateTicket(
            this.id,
            data.value.nom,
            data.value.entreprise,
            data.value.email,
            data.value.contenu,
            data.value.titre,
            data.value.tel,
            data.value.categorie_id,
            

          )
          .subscribe({
            next: () => {
              this.isInsert = true;
              this.responseText = 'Informations modifier avec success!';
              this.labelColor = 'success';
              this.router.navigate(['/cpanel/edit-ticket/', this.id]);
            },

            error: () => {
              this.isNotInsert = true;
              this.responseText =
                'Une erreur est survenue lors de la modification!';
              this.labelColor = 'danger';
            },
          });
      }
    
  }

  closeLabel() {
    this.isInsert = false;
  }

  // console.log("valeurs: ", JSON.stringify(data.value));
}
