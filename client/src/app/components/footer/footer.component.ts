import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  ngOnInit
  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

}