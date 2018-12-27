import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';
import { Check } from '../../shared/models/check';



@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css'],
   providers: [UserService]
})
export class LoginComponent implements OnInit {
   isLoggingIn: boolean = true;
   user: User = { email: "", password: "" };

   constructor(
      private userService: UserService,
      private router: Router
      ) { }

   ngOnInit() { }

   public toggleDisplay() {
      this.isLoggingIn = !this.isLoggingIn;
      console.log(this.user);
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
      .subscribe((result: Check) => {
         if (result.isLoggedIn == "true") {
            console.log('You are registered!');
            this.router.navigate(['/chatlist']);
         } else console.log("couldn't register you");
      }, (err) => {
         console.log(err);
      });
   }

   private login(user: User) {
      this.userService.login(user)
      .subscribe((result: Check) => {
         if (result.isLoggedIn == "true") {
            console.log('You are logged in!');
            this.router.navigate(['/chatlist']);
         } else console.log("couldn't log you in");
      }, (err) => {
         console.log(err);
      });
   }

}
