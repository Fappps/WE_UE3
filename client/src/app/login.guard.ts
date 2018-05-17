import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './services/user.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private user:UserService){}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return true;
      /*
      if(this.user.correctLogin()){
        return true;
      }else{
        window.alert("Falscher Benutzername oder Passwort!")
      }
      */
  }
  
  
}
