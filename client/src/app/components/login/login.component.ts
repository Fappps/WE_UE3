import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
    this.router.navigate(["overview"]);
  }

}
