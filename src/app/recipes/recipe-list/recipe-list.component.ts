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
      'http://3.bp.blogspot.com/-gJ3x22_tPKY/VYkUAAA5CcI/AAAAAAAAAI0/bKVm0vTLqD8/s1600/githeri.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
