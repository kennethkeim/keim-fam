import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserService {
   
   public login (user: User) {
      return `I'm totally loggin you in ${user.name}.`;
   }

   public register(user: User) {
      return `Imma registering you ${user.name}`;
   }
}

