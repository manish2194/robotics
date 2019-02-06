import { Component, OnInit,NgModule } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{
  model: any = {};
  loading = false;

  constructor(
    private router: Router,

  ) { }

  register() {
    this.loading = true;

  }

}
