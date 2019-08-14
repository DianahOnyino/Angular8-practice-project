import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Githeri Recipe',
            'Make sweet githeri',
            'http://3.bp.blogspot.com/-gJ3x22_tPKY/VYkUAAA5CcI/AAAAAAAAAI0/bKVm0vTLqD8/s1600/githeri.jpg'),
        new Recipe(
            'Pilau Recipe',
            'Sweet for classy visitors',
            'https://img-global.cpcdn.com/001_recipes/b83d1b7fcea35412/640x640sq70/photo.jpg'
        )
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}