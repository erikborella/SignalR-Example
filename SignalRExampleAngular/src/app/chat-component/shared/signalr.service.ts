import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { ChatMessage } from './chat-message';

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  private CHAT_URL: string = "https://localhost:3000/chat";
  private hubConnection: HubConnection;

  public startConnection() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.CHAT_URL)
      .withAutomaticReconnect()
      .build();

    this.hubConnection.start();
  }

  public addOnReceiveMessageListener(callback: (message: ChatMessage) => void) {

    this.hubConnection.on('ReceiveMessage', (chatMessage: ChatMessage) => {
      callback(chatMessage);
    });

  }

  public sendMessage(chatMessage: ChatMessage): void {
    this.hubConnection.send("SendMessage", chatMessage);
  }
  
}
