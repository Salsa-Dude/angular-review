import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  // inline style
  styles: [`
    h3 {
      color: yellow;
    }
  `]
})
export class AppComponent {
  name = 'joseph';
}
