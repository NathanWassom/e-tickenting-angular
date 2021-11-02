import { Category } from './../../model/category';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Tickets } from 'src/app/Admin/list-tickect/ticket';
import { TicketService } from 'src/app/service/ticket.service';
import { CategoryService } from 'src/app/service/category.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-tickect',
  templateUrl: '../add-tickect/add-tickect.component.html',
  styleUrls: ['../add-tickect/add-tickect.component.css'],
})
export class AddTickectComponent implements OnInit {
  ticket = new Tickets();
  checkPass: boolean = false;
  isInsert: boolean = false;
  isNotInsert: boolean = false;
  responseText!: string;
  labelColor!: string;

  categories!: Category[];

  managers!: any;

  public newTicket: Tickets = new Tickets();

  constructor(
    private _catService: CategoryService,

    private _userService: UserService,

    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this._userService.getManagers().subscribe({
      next: (manager) => {
        this.managers = manager;
        console.log(this.managers);
      },
    });

    this._catService.getCategories().subscribe({
      next: (cat) => {
        this.categories = cat;
        console.log(this.categories);
      },
    });
  }

  upload(event: HTMLInputElement | any) {
    const file = event.target.files[0];
    this.ticket.piece_jointe = file;
  }

  public addTicket(data: NgForm) {
    if (data.valid) {
      var formData: any = new FormData();
      formData.append('piece_jointe', this.ticket.piece_jointe);
      formData.append('nom', data.value.nom);
      formData.append('entreprise', data.value.entreprise);
      formData.append('email', data.value.email);
      formData.append('categorie_id', data.value.categorie_id);
      formData.append('contenu', data.value.contenu);
      formData.append('titre', data.value.titre);
      formData.append('tel', data.value.tel);
      formData.append('manager_id', data.value.manager_id);

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
    }
  }

  closeLabel() {
    this.isInsert = false;
  }

  // console.log("valeurs: ", JSON.stringify(data.value));
}
