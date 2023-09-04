import { Component, OnInit  } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit{
  constructor(public auth: AuthService) {}


  // login(){
  //   this.auth.loginWithRedirect();
  // }

  ngOnInit(): void {
    this.auth.handleRedirectCallback().subscribe((result) => {
      if (result) {
        // User has been successfully authenticated
        alert('Login successful!');
      }
    });
  }

  login() {
    // Initiate the login process
    this.auth.loginWithRedirect();
  }

}
