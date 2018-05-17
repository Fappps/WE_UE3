import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  logout(){
    console.log("logout")
    this.router.navigate(["login"]);
  }

}
