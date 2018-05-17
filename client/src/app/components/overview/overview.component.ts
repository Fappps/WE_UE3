import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AvailableDevice } from '../../models/device.available';
import { ControlType } from '../../models';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {
  devices: AvailableDevice[]=[];
  constructor(private router: Router) { }

  ngOnInit() {
    this.devices.push({
      "title": "3D-Drucker",
      "type": "item-generator",
      "image": "images/item_generator.svg",
      "control": {
        "title": "Produktfortschritt einstellen",
        "type": ControlType.ENUM,
        "current": "Teilweise fertig",
        "log":[]
      }
    });
  }

  logout(){
    console.log("logout")
    this.router.navigate(["login"]);
  }

}
