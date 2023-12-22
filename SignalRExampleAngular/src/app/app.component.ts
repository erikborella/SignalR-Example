import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('nameInput') nameInput: ElementRef;

  public isNameInformed: boolean = false;
  public name: string;

  constructor() { }

  public onNameButtonPress() {
    this.isNameInformed = true;
    this.name = this.nameInput.nativeElement.value;
  }
}
