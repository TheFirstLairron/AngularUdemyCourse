import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: 'server.component.html',
    styleUrls: ['server.component.css']
})
export class ServerComponent
{
    serverId = 10;
    serverStatus = 'offline';

    constructor()
    {
        if(Math.random() > 0.5)
        {
            this.serverStatus = 'online';
        }
        else
        {
            this.serverStatus = 'offline';
        }
    }

    public getColor(): string
    {
        let color = '';

        if(this.serverStatus === 'online')
        {
            color = 'green';
        }
        else
        {
            color = 'red';
        }

        return color;
    }
}
