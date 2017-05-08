import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Testing Recipe', 'Testing Recipe Description', 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg'),
        new Recipe('A Different Recipe', 'Testing Recipe Description', 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg')
    ];

    @Output()
    recipeSelected = new EventEmitter<Recipe>();

    constructor() { }

    ngOnInit() {
    }

    public onRecipeSelected(recipe: Recipe): void
    {
        this.recipeSelected.emit(recipe);
         console.log(recipe);
    }

}
