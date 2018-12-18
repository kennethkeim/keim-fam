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
      let msg = this.userService.register(user);
      console.log(msg);
      this.router.navigate(['/chatlist']);
   }

   private login(user: User) {
      let msg = this.userService.login(user);
      console.log(msg);
      this.router.navigate(['/chatlist']);
   }

}
