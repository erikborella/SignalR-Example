import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SignalrService } from './shared/signalr.service';
import { ChatMessage } from './shared/chat-message';

@Component({
  selector: 'app-chat-component',
  templateUrl: './chat-component.component.html',
  styleUrls: ['./chat-component.component.css']
})
export class ChatComponentComponent implements OnInit {

  @Input() name: string;
  @ViewChild('messageInput') messageInput: ElementRef;

  public messages: ChatMessage[] = [];

  constructor(
    private signalRService: SignalrService,
  ) { }

  public ngOnInit(): void {
    this.signalRService.startConnection();
    this.signalRService.addOnReceiveMessageListener((message: ChatMessage) => {
      
      this.messages.push(message);

    });
  }

  public onSendMessageButtonClick() {
    const message = new ChatMessage();

    message.date = new Date();
    message.message = this.messageInput.nativeElement.value;
    message.user = this.name;

    this.signalRService.sendMessage(message);

    this.messageInput.nativeElement.value = "";
  }

}
