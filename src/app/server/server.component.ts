import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
  serverId: number = 10;
  //serverStatus: string = 'offline';
  serverStatus: string = 'active Now';
  username: string = 'testttt';

  @Input() isVisible: boolean;

  ngOnInit() {
    this.getServerStatus();
  }

  reset() {
    this.username = '';
  }

  getServerStatus() {
    this.serverStatus = 'offline';
    return this.serverStatus;
  }
}
