import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ServerElement } from '../shared/server-element.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    @Output()
    serverCreated = new EventEmitter<ServerElement>();

    @Output()
    blueprintCreated = new EventEmitter<ServerElement>();

    constructor() { }

    ngOnInit() {
    }

    public onAddServer(name: string, content: string)
    {
        this.serverCreated.emit(new ServerElement(name, 'server', content));
    }

    public onAddBlueprint(name: string, content: string) 
    {
        this.blueprintCreated.emit(new ServerElement(name, 'blueprint', content));
    }

}
