import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'app/Shared/ingredient.model';

@Component({
    selector: 'app-shopping-list-edit',
    templateUrl: './shopping-list-edit.component.html',
    styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

    @ViewChild('nameInput')
    nameInput: ElementRef;

    @ViewChild('amountInput')
    amountInput: ElementRef;

    @Output()
    public ingredientAdded = new EventEmitter<Ingredient>();

    constructor() { }

    ngOnInit() {
    }

    public ingredientSubmitted(): void
    {
        this.ingredientAdded.emit(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
    }

}
