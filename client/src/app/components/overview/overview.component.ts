import {Component,OnInit} from '@angular/core';
import {Route,Router} from '@angular/router';
import {AvailableDevice} from '../../models/device.available';
import {ControlType} from '../../models';
import {DiagramService} from '../../services';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html'
})
export class OverviewComponent implements OnInit {
  devices: AvailableDevice[] = [];
  constructor(
    private router: Router,
    private diagramService: DiagramService,
    private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get("http://localhost:8081/overview")
      .subscribe(data => {
        this.devices=(data['devices']);
        console.log(this.devices);
      });
  }

  logout() {
    console.log("logout")
    this.router.navigate(["login"]);
  }

}
