import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public accounts: { name: string, status: string }[] = [];

    public constructor(private accServ: AccountsService) { }

    public ngOnInit() {
        this.accounts = this.accServ.accounts;
    }
}
