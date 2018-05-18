import {
  Component,
  OnInit
} from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../services';
import {AuthenticationRequest} from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  authRequest: AuthenticationRequest={
    username:'',
    password:''
  };
  returnUrl: string;

  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserService) {}

  ngOnInit() {
    this.userService.logout();
  }

  login() {
    this.userService.login(this.authRequest)
      .subscribe(
        data => {
          this.router.navigate(["/overview"]);
        },
      error =>{
        window.alert(error.error);
      });
  }

}
