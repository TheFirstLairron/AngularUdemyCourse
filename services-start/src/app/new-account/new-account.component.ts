import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
    selector: 'app-new-account',
    templateUrl: './new-account.component.html',
    styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
    public constructor(private accServ: AccountsService) {
        this.accServ.statusUpdated.subscribe((status: string) =>{
            alert(`New Status: ${status}`);
        });
    }

    onCreateAccount(accountName: string, accountStatus: string) {
        this.accServ.addAccount(accountName, accountStatus);
    }
}
