import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signUpActive = false;
  constructor() { }

  ngOnInit() {
  }

  signUpClicked() {
    this.signUpActive = true;
  }

  signInClicked() {
    this.signUpActive = false;
  }

}
