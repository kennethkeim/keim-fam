import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



// yes this is temporary
interface User {
   name: string;
   email: string;
}

interface Message {
   from: string;
   to: string;
   content: any;
}






import * as socketIo from 'socket.io-client';

const SERVER_URL = 'http://0.0.0.0:8080';

@Injectable()
export class SocketService {
   private socket;

   public initSocket() {
      this.socket = socketIo(SERVER_URL);

      this.socket.on('connected', () => {
         this.authenticate();
      });
   }

   public send(message){
      this.socket.emit('message', message);
   }

   public onMessage(): Observable<Message> {
      return new Observable<Message>((observer) => {
         this.socket.on('message', (data: Message) => {
            observer.next(data);
         });
      });
   }


   private authenticate() {
      const token = localStorage.getItem('JWT');
      if (token) this.socket.emit('authentication', token);
   }


   public onSetuser(): Observable<any> {
      return new Observable<any>((observer) => {
         this.socket.on('setuser', (userId: any) => {
            observer.next(userId);
         });
      });
   }

}