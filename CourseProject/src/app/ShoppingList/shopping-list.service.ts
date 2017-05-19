import { Injectable } from '@angular/core';
import { Ingredient } from 'app/Shared/ingredient.model';

@Injectable()
export class ShoppingListService {

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];

    constructor() { }

    public AddIngredient(ing: Ingredient)
    {
        this.ingredients.push(ing);
    }

    public getIngredients(): Ingredient[]
    {
        // Slice to return a copy, not a reference
        return this.ingredients.slice();
    }
}
