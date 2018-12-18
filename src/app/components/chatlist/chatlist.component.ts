import { Component, OnInit } from '@angular/core';

class Friend {
   name: string
   email: string
   latestMessage: string
}


@Component({
   selector: 'app-chatlist',
   templateUrl: './chatlist.component.html',
   styleUrls: ['./chatlist.component.css']
})
export class ChatlistComponent implements OnInit {
   friends: Friend[] = [
      {
         name: 'Dad',
         email: 'dad@email.com',
         latestMessage: 'no messages'
      },
      {
         name: 'Mom',
         email: 'mom@email.com',
         latestMessage: 'no messages'
      },
      {
         name: 'Myron',
         email: 'myron@email.com',
         latestMessage: 'no messages'
      }
   ]

   constructor() { }

   ngOnInit() {
   }

}
