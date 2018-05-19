import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {

  constructor(
    private router: Router){}

  ngOnInit() {
  }
  logout() {
    console.log("logout")
    this.router.navigate(["login"]);
  }

}
