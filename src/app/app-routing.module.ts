import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ChatlistComponent } from './components/chatlist/chatlist.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'chatlist', pathMatch: 'full', component: ChatlistComponent},
  {path: 'chat/:friendId', pathMatch: 'full', component: ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
