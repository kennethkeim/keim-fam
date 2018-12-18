import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/services/user.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css'],
   providers: [UserService]
})
export class LoginComponent implements OnInit {
   isLoggingIn: boolean = true;

   constructor(private userService: UserService) { }

   ngOnInit() {
   }

   public toggleDisplay() {
      this.isLoggingIn = !this.isLoggingIn;
   }

   public submit() {
      if (this.isLoggingIn) {
         this.login();
      } else {
         this.register();
      }
   }

   private register() {
      let msg = this.userService.register();
      console.log(msg);
   }

   private login() {
      let msg = this.userService.login();
      console.log(msg);
   }
}
