import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/user';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css'],
   providers: [UserService]
})
export class LoginComponent implements OnInit {
   isLoggingIn: boolean = true;
   user = new User("Kenneth", "ken@email.com", "lamepass");

   constructor(
      private userService: UserService,
      private router: Router
      ) { }

   ngOnInit() {
   }

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
      .subscribe((result) => {
         if (result.isLoggedIn == "true") this.router.navigate(['/chatlist']);
      }, (err) => {
         console.log(err);
      });
   }

   private login(user: User) {
      this.userService.login(user)
      .subscribe((result) => {
         if (result.isLoggedIn == "true") this.router.navigate(['/chatlist']);
      }, (err) => {
         console.log(err);
      });
   }

}
