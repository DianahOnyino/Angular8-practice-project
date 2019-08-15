import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'Githeri Recipe',
            'Make sweet githeri',
            'http://3.bp.blogspot.com/-gJ3x22_tPKY/VYkUAAA5CcI/AAAAAAAAAI0/bKVm0vTLqD8/s1600/githeri.jpg',
            [
                new Ingredient('Beans', 10),
                new Ingredient('Maize', 20),
            ]),
        new Recipe(
            'Pilau Recipe',
            'Sweet for classy visitors',
            'https://img-global.cpcdn.com/001_recipes/b83d1b7fcea35412/640x640sq70/photo.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Rice', 2),
            ]
        )
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}