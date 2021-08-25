import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/service/ticket.service';
import { environment } from 'src/environments/environment';
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
              private router:Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  upload(event: HTMLInputElement | any) {
    const file = event.target.files[0];
    this.ticket.piece_jointe = file;
  }

  public addTicket(data: NgForm) {

    if (data.value.confirmEmail === data.value.email) {
      if (data.valid) {

        const localData = JSON.parse(
          localStorage.getItem(environment.localStorageKey)!
        );
        const user_id = localData['id'];

        var formData: any = new FormData();
        formData.append('piece_jointe', this.ticket.piece_jointe);
        formData.append('nom', data.value.nom);
        formData.append('entreprise', data.value.entreprise);
        formData.append('email', data.value.email);
        formData.append('categorie_id', data.value.categorie_id);
        formData.append('contenu', data.value.contenu);
        formData.append('titre', data.value.titre);
        formData.append('tel', data.value.tel);
        formData.append('user_id', user_id);

        this.http.post(environment.apiDomain + '/tickets', formData).subscribe({
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
          },
          error: () => {
            this.isNotInsert = true;
            this.responseText =
              'Une erreur est survenue lors de la création du ticket!';
            this.labelColor = 'danger';
          },
        });

        // this.ticketService
        // .ajouterTicket(
        //   data.value.nom,
        //   data.value.entreprise,
        //   data.value.email,
        //   data.value.categorie_id,
        //   data.value.contenu,
        //   data.value.titre,
        //   data.value.tel,
        //   )
        // .subscribe({

        //   next: () => {
        //     this.isInsert = true;
        //     this.responseText = 'Ticket crée avec success!';
        //     this.labelColor = 'success';
        //     data.reset({
        //       nom: '',
        //       email: '',
        //       contenu: '',
        //       tel: '',

        //     });
        //   },
        //   error: () => {
        //     this.isNotInsert = true;
        //     this.responseText = 'Une erreur est survenue lors de la création du ticket!';
        //     this.labelColor = 'danger';
        //   },
        // });
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
