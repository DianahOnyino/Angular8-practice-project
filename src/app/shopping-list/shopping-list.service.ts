import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    // recipeSelected = new EventEmitter<Recipe>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }
}