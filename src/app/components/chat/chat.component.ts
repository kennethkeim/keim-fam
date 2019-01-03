import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { ChatService } from '../../shared/services/chat.service';
import { SocketService } from '../../shared/services/socket.service';
import { UtilsService } from '../../shared/services/utils.service';

import { Me } from '../../shared/models/me';
import { Message } from '../../shared/models/message';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService, SocketService, UtilsService]
})
export class ChatComponent implements OnInit {
  friendId: string;
  me: Me = { email: '' };
  messageContent: string;
  ioConnection: any;
  messages: Message[] = [];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chatService: ChatService,
    private socketService: SocketService,
    private utilsService: UtilsService
    ) { }



  // this is probs where we want to init the socket connection
  ngOnInit() {
    if (this.utilsService.isLoggedIn()) {
      this.friendId = this.route.params['_value'].friendId;

      this.initSocketConnection();
    } else {
      this.router.navigate(['/']);
    }
  }


  private initSocketConnection() {
    this.socketService.initSocket();

    this.ioConnection = this.socketService.onSetuser()
    .subscribe((userId: any) => {
      this.me.email = userId;
    });

    this.ioConnection = this.socketService.onMessage()
    .subscribe((message: Message) => {
      if (message.from == this.friendId || message.to == this.friendId) this.messages.push(message);
    });

  }



  public sendMessage(message: string = this.messageContent) {
    if (!message) return;

    const m = {
      from: this.me.email,
      to: this.friendId,
      content: message
    };

    this.socketService.send(m);
    this.messages.push(m);
    this.messageContent = null;
  }


}
