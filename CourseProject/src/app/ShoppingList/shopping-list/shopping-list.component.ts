import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: ['./shopping-list.component.css'],
    providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {

    ingredients: Ingredient[] = [];

    constructor(private shopServ: ShoppingListService) { }

    ngOnInit() {
        this.ingredients = this.shopServ.getIngredients();
    }

    public addIngredient(ing: Ingredient)
    {
        this.shopServ.AddIngredient(ing);
    }

}
