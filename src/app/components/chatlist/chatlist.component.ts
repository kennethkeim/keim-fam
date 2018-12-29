import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ChatService } from '../../shared/services/chat.service';
import { Check } from '../../shared/models/check';
import { Friend } from '../../shared/models/friend';




@Component({
   selector: 'app-chatlist',
   templateUrl: './chatlist.component.html',
   styleUrls: ['./chatlist.component.css'],
   providers: [ChatService]
})
export class ChatlistComponent implements OnInit {
   friends: Friend[];

   constructor(
      private chatService: ChatService,
      private router: Router
      ) {}

   ngOnInit() {
      this.getFriends();
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

}
