import { Component } from "@angular/core";

// Component decorator
@Component({
  selector: 'app-warning-alert',
  template: `
    <p>This is a warning, you are in danger!</p>
  `,
  // incline styling
  styles: [ `
    p {
      padding: 20px;
      background-color: mistyrose;
      border: solid 1px red;
    }
  `]
})
export class WarningAlertComponent {

}