import { Component } from '@angular/core';
import chat from '../chats/chat';

@Component({
  selector: 'app-chats-menu',
  templateUrl: './chats-menu.component.html',
  styleUrls: ['./chats-menu.component.scss']
})
export class ChatsMenuComponent {
  chats: chat[] = [];

  addChat($event: any){
    if(typeof($event) == typeof(new chat('', '', 0))){
      this.chats.push($event);
    }
  }

}
