import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
        new Recipe('Testing Recipe', 'Testing Recipe Description', 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg'),
        new Recipe('Testing Recipe', 'Testing Recipe Description', 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fast_food_meal.jpg')
    ];

    constructor() { }

    ngOnInit() {
    }

}
