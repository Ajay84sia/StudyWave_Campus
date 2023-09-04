import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoggedIn = false;

  constructor(private auth: AuthService, private router : Router) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isLoggedIn = isAuthenticated;
      localStorage.setItem("isLoggedIn", "true");
      if(isAuthenticated){
        this.router.navigate(['/dashboard']);
      }else{
        this.router.navigate(['/']);
      }
    });
  }

  login() {
    this.auth.loginWithRedirect();
  }

}
