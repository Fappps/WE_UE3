import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { AuthenticationRequest, PasswordChangeRequest } from '../models';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  login(user: AuthenticationRequest) {
    return this.http.post<any>("http://localhost:8081/login", {user})
    .map(response => {
        // login successful if there's a jwt token in the response
        if (response && response.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(response));
          console.log("eingeloggt" + localStorage);
        }else{
          console.log(response);
        }

        return response;
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    console.log("ausgeloggt" + localStorage)
  }

  
  changePassword(change: PasswordChangeRequest){
    return this.http.post<any>("http://localhost:8081/options", {change})
    .map(response => {
        return response;
      });
  }
}
