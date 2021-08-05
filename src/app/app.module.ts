import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTickectComponent } from './panel/add-tickect/add-tickect.component';
import { ListTickectComponent } from './panel/list-tickect/list-tickect.component';
import { GesUsersComponent } from './ges-users/ges-users.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './panel/add-user/add-user.component';
import { FaqComponent } from './faq/faq.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { LoginComponent } from './panel/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { PanelComponent } from './panel/panel.component';
import { ClientComponent } from './client/client.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

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
    PanelComponent,
    ClientComponent,
    AcceuilComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

