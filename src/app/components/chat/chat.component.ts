import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  friendId: string;

  constructor(route: ActivatedRoute) {
    this.friendId = route.params['_value'].friendId;
   }

  ngOnInit() {
  }

}
