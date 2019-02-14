import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test', 'https://hips.hearstapps.com/vidthumb/images/delish-marry-me-chicken-1523047305.png'),
    new Recipe('A Test Recipe 2', 'This is simply a test', 'https://www.incredibleegg.org/wp-content/uploads/RecipeDetail_Deviled-930x550.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }

}
