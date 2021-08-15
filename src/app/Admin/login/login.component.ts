import { Router } from '@angular/router';
import { SignInData } from 'src/app/model/signinData';
// import { AuthenticationService } from '../service/authentication/authentication.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/authentication/auth.service';
import { User } from 'src/assets/services/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = new User();

  isFormInvalid = false;
  areCredentialsInvalid = false;

  public isAuth: boolean = false;

  checkLog: boolean = false;

  constructor(
    // private authenticationService: AuthenticationService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAuth = this.authService.isAuth;
  }

  onSignIn(signInForm: NgForm) {
    if (signInForm.valid) {
      this.authService
        .singnIn(signInForm.value.email, signInForm.value.password)
        .subscribe({
          next: (res) => {
            if (!res) {
              this.router.navigate(['/auth/sign-in']);
            }
            this.isAuth = this.authService.isAuth;
            this.router.navigate(['/cpanel/dashboard']);
          },
          error: () => this.checkLog = true
        });
    }
  }

  closeLabel() {
    this.checkLog = false;
  }
}
//   onSubmit(signInForm: NgForm){
//     if(!signInForm.valid){
//       this.isFormInvalid = true;
//       this.areCredentialsInvalid = false;
//       return;

//     }
//     this.checkCredentials(signInForm);
//   }

//   private checkCredentials(signInForm: NgForm){
//     const signInData = new SignInData(signInForm.value.email, signInForm.value.password);
//     if(!this.authenticationService.authenticate(signInData)){
//       this.isFormInvalid = false;
//       this.areCredentialsInvalid = true;
//     }
//   }

//   onLoggedin() {
//     console.log(this.user);
//   }
// }
