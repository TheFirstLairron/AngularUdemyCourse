import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    public recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Testing Recipe', 'Testing Recipe Description', 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg'),
        new Recipe('A Different Recipe', 'Testing Recipe Description', 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg')
    ];

    constructor() { }


    public getRecipes()
    {
        // Returns a copy of the array, not a reference to it.
        return this.recipes.slice();
    }
}
