import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  users = new User();
  checkPass: boolean = false;
  user!: User;
  isInsert: boolean = false;
  isNotInsert: boolean = false;
  responseText!: string;
  labelColor!: string;

  id: number = +this.route.snapshot.paramMap.get('id')!;

  constructor(private route: ActivatedRoute, private _userSrv: UserService, private router: Router) {}

  ngOnInit(): void {
    this._userSrv.getOneUser(this.id).subscribe({
      next: (user) => (this.user = user),
    });
  }

  onUpdate(updateUserForm: NgForm) {
    if (updateUserForm.valid) {
      this._userSrv
        .updateUser(
          this.id,
          updateUserForm.value.nom,
          updateUserForm.value.email,
          updateUserForm.value.tel,
          updateUserForm.value.role
        )
        .subscribe({
          next: () => {
            this.isInsert = true;
            this.responseText = 'Informations modifiées avec success!';
            this.labelColor = 'success';
            this.router.navigate(['/cpanel/edit-user/', this.id])
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
}
