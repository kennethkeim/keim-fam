import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ChatlistComponent } from './components/chatlist/chatlist.component';
import { ChatComponent } from './components/chat/chat.component';

@NgModule({
  declarations: [ // components
    AppComponent,
    LoginComponent,
    ChatlistComponent,
    ChatComponent
  ],
  imports: [ // modules
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [], // services
  bootstrap: [AppComponent]
})
export class AppModule { }
