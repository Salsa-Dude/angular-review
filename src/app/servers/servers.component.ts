import { Component, OnInit } from '@angular/core';

// template has to be present in the Component
@Component({
  selector: 'app-servers',
  
  // selecting the element by attribute
  // selector: '[app-servers]',

  // selecting the element by class
  // selector: '.app-servers',

  // either has to be a link to an external or inner template
  templateUrl: './servers.component.html',
  
  // template: - (allows us to define html code in the same file) - inline template
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer =  false;
  serverCreationStatus = 'No server was created';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was create'
  }

}
