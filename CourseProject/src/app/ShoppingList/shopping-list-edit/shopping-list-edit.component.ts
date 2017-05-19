import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'app/Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

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

    constructor(private shopServ: ShoppingListService) { }

    ngOnInit() {
    }

    public ingredientSubmitted(): void
    {
        this.shopServ.AddIngredient(new Ingredient(this.nameInput.nativeElement.value, this.amountInput.nativeElement.value));
    }

}
