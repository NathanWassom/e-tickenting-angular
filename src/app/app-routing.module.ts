import { AProposComponent } from './a-propos/a-propos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './panel/login/login.component';
import { ListTickectComponent } from './panel/list-tickect/list-tickect.component';
import { FaqComponent } from './faq/faq.component';
import { GesUsersComponent } from './ges-users/ges-users.component';
import { AddUserComponent } from './panel/add-user/add-user.component';
import { AddTickectComponent } from './panel/add-tickect/add-tickect.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-ticket', component: AddTickectComponent},
  { path: 'add-user', component: AddUserComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'ges-users', component: GesUsersComponent },
  { path: 'list-ticket', component: ListTickectComponent},
  { path: 'a-propos', component: AProposComponent},
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'error404', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'error404', pathMatch: 'full' },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

