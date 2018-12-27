import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user';

const options = {
   headers: new HttpHeaders({
      'Content-Type': 'application/json'
   })
};

@Injectable()
export class UserService {
   // private serverUrl = 'https://keim-fam-server.appspot.com';
   private serverUrl = 'http://0.0.0.0:8080';


   constructor(private http: HttpClient) { }
   
   public login (user: User) {
      return this.http.post(this.serverUrl + '/login', user, options);
   }

   public register(user: User) {
      return this.http.post(this.serverUrl + '/register', user, options);
   }

   public logout() {
      return this.http.post(this.serverUrl + '/logout', undefined, options);
   }
}

