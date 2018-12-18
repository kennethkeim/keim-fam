import { Component, OnInit } from '@angular/core';
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

   constructor(private userService: UserService) { }

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
   }

   private login(user: User) {
      let msg = this.userService.login(user);
      console.log(msg);
   }

}
