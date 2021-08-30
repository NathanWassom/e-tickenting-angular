import { AProposComponent } from './Admin/a-propos/a-propos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './Admin/login/login.component';
import { ListTickectComponent } from './Admin/list-tickect/list-tickect.component';
import { FaqComponent } from './Clients/faq/faq.component';
import { GesUsersComponent } from './Admin/ges-users/ges-users.component';
import { AddUserComponent } from './Admin/add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppShellComponent } from './Admin/app-shell/app-shell.component';
import { AddTickectComponent } from './Clients/add-tickect/add-tickect.component';
import { AddTicketPanelComponent } from './Admin/add-ticket-panel/add-ticket-panel.component';
import { TicketDetailComponent } from './Admin/ticket-detail/ticket-detail.component';
import { EditUserComponent } from './Admin/edit-user/edit-user.component';
import { EditTicketComponent } from './Admin/edit-ticket/edit-ticket.component';
import { HomeClientComponent } from './Clients/home-client/home-client.component';
import { VerifiedTokenGuard } from './guards/verified-token.guard';
import { EditInterventionComponent } from './Admin/intervention/edit-intervention/edit-intervention.component';
import { DetailInterventionComponent } from './Admin/intervention/detail-intervention/detail-intervention.component';
// import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeClientComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'cpanel',
    canActivate: [VerifiedTokenGuard],
    component: AppShellComponent,
    children: [
      { path: 'dashboard', component: HomeComponent },
      { path: 'add-user', component: AddUserComponent },
      { path: 'ges-users', component: GesUsersComponent },
      { path: 'list-ticket', component: ListTickectComponent },
      { path: 'add-ticket-panel', component: AddTicketPanelComponent },

      {
        path: 'add-user',
        component: AddUserComponent,
      },
      {
        path: 'ges-users',
        component: GesUsersComponent,
      },
      {
        path: 'edit-user/:id',
        component: EditUserComponent
      },
      {
        path: 'list-ticket',
        component: ListTickectComponent,
      },
      {
        path: 'ticket-detail/:id',
        component: TicketDetailComponent,
      },
      {
        path: 'edit-ticket/:id',
        component: EditTicketComponent,
      },
      {
        path:'edit-intervention',
        component:EditInterventionComponent,
      },
      {
        path:'detail-intervention',
        component:DetailInterventionComponent,
      },


    ],
  },
  { path: 'faq', component: FaqComponent },
  { path: 'add-ticket', component: AddTickectComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'sign-in', component: LoginComponent },
  { path: 'error404', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'error404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
