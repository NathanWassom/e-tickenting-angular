import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-ges-users',
  templateUrl: './ges-users.component.html',
  styleUrls: ['./ges-users.component.css'],
})
export class GesUsersComponent implements OnInit {
  users: User[] = [];

  constructor(private _userSrv: UserService) {}

  ngOnInit(): void {
    this._userSrv.getUsers().subscribe({
      next: (user) => (this.users = user),
    });
  }
}
