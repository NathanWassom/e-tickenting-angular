import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTickectComponent } from './Clients/add-tickect/add-tickect.component';
import { ListTickectComponent } from './Admin/list-tickect/list-tickect.component';
import { GesUsersComponent } from './Admin/ges-users/ges-users.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './Admin/add-user/add-user.component';
import { FaqComponent } from './Clients/faq/faq.component';
import { AProposComponent } from './Admin/a-propos/a-propos.component';
import { LoginComponent } from './Admin/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AppShellComponent } from './Admin/app-shell/app-shell.component';
import { AddTicketPanelComponent } from './Admin/add-ticket-panel/add-ticket-panel.component';
import { TicketService } from './service/ticket.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './service/authentication/auth.interceptor';
import { TicketDetailComponent } from './Admin/ticket-detail/ticket-detail.component';
import { EditUserComponent } from './Admin/edit-user/edit-user.component';
import { EditTicketComponent } from './Admin/edit-ticket/edit-ticket.component';
import { HomeClientComponent } from './Clients/home-client/home-client.component';
import { EditInterventionComponent } from './Admin/intervention/edit-intervention/edit-intervention.component';
import { DetailInterventionComponent } from './Admin/intervention/detail-intervention/detail-intervention.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTickectComponent,
    ListTickectComponent,
    GesUsersComponent,
    HomeComponent,
    AddUserComponent,
    FaqComponent,
    AProposComponent,
    LoginComponent,
    PageNotFoundComponent,
    AcceuilComponent,
    AppShellComponent,
    AddTicketPanelComponent,
    TicketDetailComponent,
    EditUserComponent,
    EditTicketComponent,
    HomeClientComponent,
    EditInterventionComponent,
    DetailInterventionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, TicketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
