import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  user 

  constructor(private http: HttpClient) { }
  correctLogin(cb){
      this.http.post("http://localhost:8081/login",{}).subscribe(data => {
        if(data==200){
          cb(null, true);
          return;
        }
        cb(null, false);
      });
  }
}
