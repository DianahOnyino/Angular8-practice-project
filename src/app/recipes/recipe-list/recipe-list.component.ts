import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
  
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Githeri Recipe',
      'Make sweet githeri',
      'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjH5tPpjvDjAhXq2eAKHTYYDkwQjRx6BAgBEAQ&url=http%3A%2F%2Fkenyanrecipesgalore.blogspot.com%2F2015%2F06%2Ffried-githeri-with-idah-chege.html&psig=AOvVaw3q_sKQZ1_kkzSgl69n3pgu&ust=1565245161131957')
  ];

  constructor() { }

  ngOnInit() {
  }

}
