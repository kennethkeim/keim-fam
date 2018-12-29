import { Injectable } from '@angular/core';

import * as moment from 'moment';


@Injectable()
export class UtilsService {

   // these methods can be used to check if the user is logged in or not
   public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
   }

   private getExpiration() {
      const expiration = localStorage.getItem('expiration');
      return moment(JSON.parse(expiration));
   }

}
