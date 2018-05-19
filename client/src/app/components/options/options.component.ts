import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordChangeRequest } from '../../models';
import { UserService } from '../../services';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html'
})
export class OptionsComponent implements OnInit {
  changeRequest:PasswordChangeRequest={
    newPassword:'',
    oldPassword:''
  }

  constructor(
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    
  }

  logout(){
    console.log("logout")
    this.router.navigate(["login"]);
  }

  changePassword(){
    this.userService.changePassword(this.changeRequest)
    .subscribe(
      data => {
        console.log(data);
        window.alert("Passwort geandert!");
      },
    error =>{
      console.log(error);
      window.alert(error.error);
    });
  }

}
