import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        {
          name: 'A new recipe',
          description: 'test recipe',
          imagePath: 'https://www.ndtv.com/cooks/images/chicken-chettinad_620.jpg'
        },
        new Recipe('A Test Recipe',
          'This is a simple test.',
          'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/IMG_1105.jpg')
      ];

      getRecipes(): Recipe[] {
          return this.recipes.slice(); // returns exact copy of original array
      }

}