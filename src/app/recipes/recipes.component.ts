import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html', //external template
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }


  displayRecipe(recipe: Recipe){
    this.selectedRecipe = recipe;
  }

}