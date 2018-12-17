import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   isLoggingIn: boolean = true;

   constructor() { }

   ngOnInit() {
   }

   public toggleDisplay() {
      this.isLoggingIn = !this.isLoggingIn;
   }

}
