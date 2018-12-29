import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ChatService } from '../../shared/services/chat.service';
import { UtilsService } from '../../shared/services/utils.service';
import { Friend } from '../../shared/models/friend';




@Component({
   selector: 'app-chatlist',
   templateUrl: './chatlist.component.html',
   styleUrls: ['./chatlist.component.css'],
   providers: [ChatService, UtilsService]
})
export class ChatlistComponent implements OnInit {
   friends: Friend[];

   constructor(
      private chatService: ChatService,
      private utilsService: UtilsService,
      private router: Router
      ) {}

   ngOnInit() {

      if (this.isLoggedIn()) {
         this.getFriends();
      } else {
         // redirect to login
         this.router.navigate(['/']);
      }
   }

   public logout() {
      localStorage.removeItem('JWT');
      localStorage.removeItem('expiration');
      this.router.navigate(['/']);
   }

   private getFriends() {
      this.chatService.getFriends()
      .subscribe((result: Friend[]) => {
         this.friends = result;
      }, (err) => {
         console.log(`${err.status} ${err.statusText}: ${err.error}`);
      });
   }

   private isLoggedIn() {
      return this.utilsService.isLoggedIn();
   }

}
