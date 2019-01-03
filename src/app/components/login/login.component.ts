import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';

import * as moment from 'moment';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css'],
   providers: [UserService]
})
export class LoginComponent implements OnInit {
   isLoggingIn: boolean = true;
   user: User = {email: '', password: ''};

   constructor(
      private userService: UserService,
      private router: Router
      ) { }

   ngOnInit() { }

   public toggleDisplay() {
      this.isLoggingIn = !this.isLoggingIn;
   }

   public submit() {
      if (this.isLoggingIn) {
         this.login(this.user);
      } else {
         this.register(this.user);
      }
   }

   private register(user: User) {
      this.userService.register(user)
      .subscribe((res) => {
         console.log(res);
         // this.router.navigate(['/chatlist']);
      }, (err) => {
         console.log(`${err.status} ${err.statusText}: ${err.error}`);
      });
   }

   private login(user: User) {
      this.userService.login(user)
      .subscribe((res) => {
         console.log("you should be logged in now");
         this.setSession(res);
         this.router.navigate(['/chatlist']);
      }, (err) => {
         console.log(`${err.status} ${err.statusText}: ${err.error}`);
      });
   }

   private setSession(authResult) {
      const expiresAt = moment().add(Number(authResult.expiresIn), 'seconds');

      localStorage.setItem('JWT', authResult.token);
      localStorage.setItem('expiration', JSON.stringify(expiresAt.valueOf()) );
   }

}
