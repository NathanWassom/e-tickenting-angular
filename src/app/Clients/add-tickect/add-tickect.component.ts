import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tickets } from 'src/app/Admin/list-tickect/ticket';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-add-tickect',
  templateUrl: '../add-tickect/add-tickect.component.html',
  styleUrls: ['../add-tickect/add-tickect.component.css']
})
export class AddTickectComponent implements OnInit {

  ticket = new Tickets();
checkPass: boolean = false;
  isInsert: boolean = false;
  isNotInsert: boolean = false;
  responseText!: string;
  labelColor!: string;


  public newTicket: Tickets = new Tickets();



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
  

