import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

    public allowNewServer = false;
    public serverCreationStatus = 'No server was created';
    public serverName = 'TestServer';
    public serverCreated = false;
    public servers = ['Testserver', 'Testserver2'];

    constructor()
    {
        this.allowNewServer = true;
    }

    ngOnInit()
    {

    }

    public onCreateServer(): void
    {
        this.serverCreated = true;
        this.servers.push(this.serverName);
    }
}
