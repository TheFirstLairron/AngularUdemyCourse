import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    public shouldDisplay = true;
    public timesToggles = 0;
    public toggles = new Array<Date>();

    public toggleDisplay(): void 
    {
        this.shouldDisplay = !this.shouldDisplay;
        this.toggles.push(new Date());
    }
}
