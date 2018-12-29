import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChatService } from '../../shared/services/chat.service';
import { SocketService } from '../../shared/services/socket.service';



// yes this is temporary
interface User {
  name: string;
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
  providers: [ChatService, SocketService]
})
export class ChatComponent implements OnInit {
  friendId: string;

  // eventually this needs to be the currently logged in user
  // which we'd prolly get from the jwt
  user: User = {
    name: "Kenneth",
    email: "kenneth@email.com"
  };

  // this might a two way data bound object that stores the message that's currently being typed
  messageContent: string;
  ioConnection: any;
  messages: Message[] = [];


  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService,
    private socketService: SocketService
    ) { }



  // this is probs where we want to init the socket connection
  ngOnInit() {
    this.friendId = this.route.params['_value'].friendId;

    this.startServerSocket();
  }



  private startServerSocket() {
    this.chatService.startServerSocket()
      .subscribe((res) => {
        console.log(res);
        this.initSocketConnection();
      },
      (err) => {
        console.error(err);
      });
  }




  private initSocketConnection() {
    this.socketService.initSocket();

    this.ioConnection = this.socketService.onMessage()
    .subscribe((message: Message) => {
      console.log(message);
      this.messages.push(message);
    });

    setTimeout(() => {
      this.sendMessage("I SENT MESSAGE. I AM BEST!");
    }, 3000);

  }



  public sendMessage(message: string) {
    if (!message) return;

    this.socketService.send({
      from: this.user.name,
      content: message
    });
    this.messageContent = null;
  }



}
