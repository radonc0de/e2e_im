import { Component, EventEmitter, Output } from '@angular/core';
import chat from '../../chats/chat';

@Component({
  selector: 'app-add-chat',
  templateUrl: './add-chat.component.html',
  styleUrls: ['./add-chat.component.scss']
})
export class AddChatComponent {
  chatSecret: string = '';
  chatGroup: string = '';
  chatName: string = '';
  @Output() emitter = new EventEmitter<chat>();

  submit(){
    this.emitter.emit(new chat(this.chatName, this.chatSecret, parseInt(this.chatGroup)));
  }
}
