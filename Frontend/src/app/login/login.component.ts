import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(public auth: AuthService) {}


  login(){
    this.auth.loginWithRedirect();
  }

}
