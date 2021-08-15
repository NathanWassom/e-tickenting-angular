import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-ges-users',
  templateUrl: './ges-users.component.html',
  styleUrls: ['./ges-users.component.css'],
})
export class GesUsersComponent implements OnInit {
  users: User[] = [];

  constructor(private _userSrv: UserService, private router: Router) {}

  ngOnInit(): void {
    this._userSrv.getUsers().subscribe({
      next: (user) => (this.users = user),
    });
  }

  delete(id: number | undefined) {
    return this._userSrv.delete(id).subscribe({
      next: () => {
        console.log('OK');
        this.router.navigate(['/ges-users']);
      },
    });
  }
}
