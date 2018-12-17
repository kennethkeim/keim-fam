import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChatlistComponent } from './chatlist/chatlist.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [ // components
    AppComponent,
    LoginComponent,
    ChatlistComponent,
    ChatComponent
  ],
  imports: [ // modules
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
