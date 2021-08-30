import { map } from 'rxjs/operators';
import { TicketService } from './../../service/ticket.service';
import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/authentication/auth.service';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.css'],
})
export class AppShellComponent implements OnInit {
  isAuth!: boolean;
  lstorage = JSON.parse(localStorage.getItem(environment.localStorageKey)!);
  username!: string;
  total!: number;

  constructor(
    private authService: AuthService,
    private router: Router,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.username = this.lstorage['nom'];

    // count new ticket
    this.ticketService
      .getAllTickets()
      .pipe(
        map((t) => {
          const Ticket = t.filter((x) => x.statut === 0 && x.online !== -1);
          return Ticket;
        })
      )
      .subscribe({
        next: (t) => (this.total = t.length),
      });
  }

  onSignOut() {
    this.authService.signOut();
    this.isAuth = this.authService.isAuth;
    this.router.navigate(['/sign-in']);
  }
}
