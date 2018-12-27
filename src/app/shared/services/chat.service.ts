import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class ChatService {
   // private serverUrl = 'https://keim-fam-server.appspot.com';
   private serverUrl = 'http://0.0.0.0:8080';

   constructor(private http: HttpClient) { }

   public getFriends() {
      return this.http.get(this.serverUrl, {withCredentials: true});
   }

}