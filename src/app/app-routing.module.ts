import { AProposComponent } from './Admin/a-propos/a-propos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './Admin/login/login.component';
import { ListTickectComponent } from './Admin/list-tickect/list-tickect.component';
import { FaqComponent } from './faq/faq.component';
import { GesUsersComponent } from './Admin/ges-users/ges-users.component';
import { AddUserComponent } from './Admin/add-user/add-user.component';
import { AddTickectComponent } from './Admin/add-tickect/add-tickect.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppShellComponent } from './Admin/app-shell/app-shell.component';
// import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'cpanel',
    component: AppShellComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'add-user', component: AddUserComponent },
      { path: 'ges-users', component: GesUsersComponent },
      { path: 'list-ticket', component: ListTickectComponent },
    ],
  },
  { path: 'add-ticket', component: AddTickectComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'error404', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'error404', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

