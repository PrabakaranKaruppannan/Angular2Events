import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Events';
  clickedMessage;
  keyUpMessage;
  templateReferenceKeyUpMessage;
  enterKeyUpMessage;

  clickMe() {
    this.clickedMessage = 'Button was clicked';
  }

  keyUp(event: any) {
    this.keyUpMessage = event.target.value;
  }

  onKeyUp(value) {
    this.templateReferenceKeyUpMessage = value;
  }

  onEnterKeyUp(value) {
    this.enterKeyUpMessage = value;
  }
}
