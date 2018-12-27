import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../shared/services/user.service';
import { ChatService } from '../../shared/services/chat.service';
import { Check } from '../../shared/models/check';
import { Friend } from '../../shared/models/friend';




@Component({
   selector: 'app-chatlist',
   templateUrl: './chatlist.component.html',
   styleUrls: ['./chatlist.component.css'],
   providers: [UserService, ChatService]
})
export class ChatlistComponent implements OnInit {
   friends: Friend[];

   constructor(
      private userService: UserService,
      private chatService: ChatService,
      private router: Router
      ) {}

   ngOnInit() {
      this.getFriends();
   }

   public logout() {
      this.userService.logout()
      .subscribe((result: Check) => {
         if (result.isLoggedIn == 'false') {
            console.log('logged you out');
            this.router.navigate(['/']);
         } else console.log('could not log you out.');
      }, (err) => {
         console.log(err);
      });
   }

   private getFriends() {
      this.chatService.getFriends()
      .subscribe((result: Friend[]) => {
         this.friends = result;
      }, (err) => {
         console.log('there was an error retrieving your data.');
         console.log(err);
      });
   }

}
