import { Component } from '@angular/core';
import { ServerElement } from './shared/server-element.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    ServerElements = [];

    public onServerAdded(server: ServerElement)
    {
        this.ServerElements.push(server);
    }
}
