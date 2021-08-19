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
checkPass: boolean = false;
  isInsert: boolean = false;
  isNotInsert: boolean = false;
  responseText!: string;
  labelColor!: string;


  constructor(private ticketService : TicketService, 
              private router:Router) { }

  ngOnInit(): void {
  }

  public addTicket(data :NgForm){
    if (data.value.confirmEmail === data.value.email) {
      if (data.valid) {
     this.ticketService
     .ajouterTicket(
       data.value.nom, 
       data.value.entreprise,
       data.value.email,
       data.value.categorie_id,
       data.value.contenu,
       data.value.titre,
       data.value.tel,
       )
    .subscribe({
      
      next: () => {
        this.isInsert = true;
        this.responseText = 'Ticket crée avec success!';
        this.labelColor = 'success';
        data.reset({
          nom: '',
          email: '',
          contenu: '',
          tel: '',
      
    });
  }, error: () => {
    this.isNotInsert = true;
    this.responseText = 'Une erreur est survenue lors de la création du ticket!';
    this.labelColor = 'danger';
  },
});
}
} else {
  this.checkPass = true;
}
}

closeLabel() {
this.isInsert = false;
}
    
    // console.log("valeurs: ", JSON.stringify(data.value));

  }
