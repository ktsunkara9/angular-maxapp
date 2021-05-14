import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Chicken Biryani", "Simply The Best Biryanin in Town", 
    "https://www.searchhyderabad.com/wp-content/uploads/listing-uploads/gallery/2020/04/Paradise-Hyderabadi-Biryani.jpg"),
    new Recipe("Ice Cream", "Yummy ICE Cream Dessert", 
    "https://www.teahub.io/photos/full/308-3083772_ice-cream-hd-wallpaper-free-download.jpg"),
    new Recipe("Fish Fry", "Crispy Fish Fry", 
    "https://steemitimages.com/DQmesTgw59D5GFSD8Nnwn5NboqBVGi3osDSB948ANq62Egw/fish%20fry.jpg"),
    new Recipe("Prawns Masala", "Spicy Prawns Masala Curry", 
    "https://thumbs.dreamstime.com/b/prawn-curry-indian-tomato-gravy-39065975.jpg"),
  ];

  constructor() { }

  ngOnInit(): void { }

}
