import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ServerElement } from '../shared/server-element.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {

    @Input()
    public element: ServerElement;

    public constructor() 
    {
        console.log('Constructor Called');
    }

    public ngOnChanges(changes: SimpleChanges)
    {
        console.log('ngOnChanges Called');
        console.log(changes);
    }

    public ngOnInit() 
    {
        console.log('ngOnInit Called');
    }
}
