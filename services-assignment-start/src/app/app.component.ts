import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    activeUsers: string[] = [];
    inactiveUsers: string[] = [];

    public constructor(private users: UsersService) { }

    onSetToInactive(id: number) {
        this.users.setToActive(id);
    }

    onSetToActive(id: number) {
        this.users.setToActive(id);
    }

    public ngOnInit()
    {
        this.activeUsers = this.users.activeUsers;
        this.inactiveUsers = this.users.inactiveUsers;
    }
}
