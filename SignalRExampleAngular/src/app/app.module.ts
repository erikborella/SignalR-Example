import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatComponentComponent } from './chat-component/chat-component.component';
import { SignalrService } from './chat-component/shared/signalr.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    SignalrService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
