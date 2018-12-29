import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



// yes this is temporary
interface User {
   name: string;
   email: string;
}

interface Message {
   from: User;
   content: any;
}






import * as socketIo from 'socket.io-client';

const SERVER_URL = 'http://0.0.0.0:8080';

@Injectable()
export class SocketService {
   private socket;

   public initSocket() {
      this.socket = socketIo(SERVER_URL);
   }

   public send(message){
      this.socket.emit('message', message);
   }

   public onMessage(): Observable<Message> {
      return new Observable<Message>(observer => {
         this.socket.on('message', (data: Message) => observer.next(data));
      });
   }

}