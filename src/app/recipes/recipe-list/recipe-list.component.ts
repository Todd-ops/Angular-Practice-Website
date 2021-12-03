import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://static.parade.com/wp-content/uploads/2016/02/Spinach-Lentil-Fritters1-e1456346004216.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://static.parade.com/wp-content/uploads/2016/02/Spinach-Lentil-Fritters1-e1456346004216.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
