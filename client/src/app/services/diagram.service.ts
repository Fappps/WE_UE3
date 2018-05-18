import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import '../models/arrow.model';
import '../models/device.model';
import { Router } from '@angular/router';

@Injectable()
export class DiagramService {
  devices: Device<any>[]=[];
  arrows: Arrow[]=[];
  
  constructor(private router:Router) {
  }

  initDevices(func: (device: Device<any>) => void): void {
    // TODO execute func for each of the already existing devices
    this.devices.forEach(device => {
      func(device);
    });
  }

  initArrows(func: (arrow: Arrow) => void): void {
    // TODO execute func for each of the already existing arrows
    this.arrows.forEach(arrow => {
      func(arrow);
    })
  }

  afterDeviceAdd(device: Device<any>): void {
    // TODO add the device to some list
    this.devices.push(device);
  }

  afterDeviceDelete(device: Device<any>): void {
    // TODO remove the device from that list
    this.devices.splice(this.devices.indexOf(device),1);
  }

  onDeviceDetails(device: Device<any>): void {
    // TODO navigate to the details view for the given device
    this.router.navigate(["/details/"+device.index]);
    
  }

  afterArrowAdd(arrow: Arrow): void {
    // TODO add the arrow to some list
    this.arrows.push(arrow);
  }

  afterArrowDelete(arrow: Arrow): void {
    // TODO remove the arrow from that list
    this.arrows.splice(this.arrows.indexOf(arrow),1);
  }
}
