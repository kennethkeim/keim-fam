import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { ChatService } from '../../shared/services/chat.service';
import { SocketService } from '../../shared/services/socket.service';
import { UtilsService } from '../../shared/services/utils.service';



// yes this is temporary
interface User {
  email: string;
}

interface Message {
  from: User;
  content: any;
}






// TODO: lock this chat down to a private chat between two people
// I'm not sure what this means as far as socket connections


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService, SocketService, UtilsService]
})
export class ChatComponent implements OnInit {
  friendId: string;

  // eventually this needs to be the currently logged in user
  // which we'd prolly get from the jwt
  user: User = { email: '' };

  // this might a two way data bound object that stores the message that's currently being typed
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

    this.ioConnection = this.socketService.onMessage()
    .subscribe((message: Message) => {
      this.messages.push(message);
    });

    this.ioConnection = this.socketService.onSetuser()
      .subscribe((userId: any) => {
        this.user.email = userId;
      });

  }



  public sendMessage(message: string = this.messageContent) {
    if (!message) return;

    this.socketService.send({
      from: this.user.email,
      content: message
    });
    this.messageContent = null;
  }



}
