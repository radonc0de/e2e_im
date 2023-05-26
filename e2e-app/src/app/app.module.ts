import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddChatComponent } from './chats-menu/add-chat/add-chat.component';
import { ChatsMenuComponent } from './chats-menu/chats-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    AddChatComponent,
    ChatsMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
