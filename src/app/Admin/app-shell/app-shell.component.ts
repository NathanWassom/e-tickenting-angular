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
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.username = this.lstorage['nom'];
  }

  onSignOut() {
    this.authService.signOut();
    this.isAuth = this.authService.isAuth;
    this.router.navigate(['/sign-in']);
  }
}
