import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  users = new User();
  checkPass: boolean = false;
  isInsert: boolean = false;
  isNotInsert: boolean = false;
  responseText!: string;
  labelColor!: string;

  constructor(private _userSrv: UserService) {}

  ngOnInit(): void {}

  onCreate(addUserForm: NgForm) {
    if (addUserForm.value.confirmPassword === addUserForm.value.password) {
      if (addUserForm.valid) {
        this._userSrv
          .addUser(
            addUserForm.value.nom,
            addUserForm.value.email,
            addUserForm.value.password,
            addUserForm.value.tel,
            addUserForm.value.role
          )
          .subscribe({
            next: () => {
              this.isInsert = true;
              this.responseText = 'Utilisateur crée avec success!';
              this.labelColor = 'success';
              addUserForm.reset({
                nom: '',
                email: '',
                password: '',
                tel: '',
              });
            },
            error: () => {
              this.isNotInsert = true;
              this.responseText = 'Une erreur est survenue lors de la création du nouvel utilisateur!';
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

  // closeLabelDanger() {
  //   this.isNotInsert = false;
  // }
}
