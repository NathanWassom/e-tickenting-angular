import { SignInData } from 'src/app/model/signinData';
// import { AuthenticationService } from '../service/authentication/authentication.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../assets/services/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();

  isFormInvalid = false;
  areCredentialsInvalid = false;

  // constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
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
