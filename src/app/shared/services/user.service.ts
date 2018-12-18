import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
   
   public login () {
      return "I'm totally loggin you in bro.";
   }

   public register() {
      return "Imma registering you.";
   }
}

