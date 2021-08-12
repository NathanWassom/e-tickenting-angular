import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTickectComponent } from './Clients/add-tickect/add-tickect.component';
import { ListTickectComponent } from './Admin/list-tickect/list-tickect.component';
import { GesUsersComponent } from './Admin/ges-users/ges-users.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './Admin/add-user/add-user.component';
import { FaqComponent } from './faq/faq.component';
import { AProposComponent } from './Admin/a-propos/a-propos.component';
import { LoginComponent } from './Admin/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AppShellComponent } from './Admin/app-shell/app-shell.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTicketPanelComponent } from './Admin/add-ticket-panel/add-ticket-panel.component';
import { TicketService } from './service/ticket.service';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    TicketService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
