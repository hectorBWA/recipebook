import { EventEmitter } from "@angular/core";
import { Ingredient } from "./ingredient.model";


export class ShoppingListService {

    private ingredients: Ingredient[] = [
        {
          name: 'Apple',
          amount: 5
        },
        new Ingredient('Tomatoes', 10)
      ];

      ingredientChanged = new EventEmitter<Ingredient[]>();

      getIngredients(): Ingredient[] {
        return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.ingredients.slice());
      }

}