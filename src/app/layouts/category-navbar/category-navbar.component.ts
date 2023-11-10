import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../services/categories.service";

@Component({
  selector: 'app-category-navbar',
  templateUrl: './category-navbar.component.html',
  styleUrls: ['./category-navbar.component.css']
})
export class CategoryNavbarComponent implements OnInit{
  categoriesArray: Array<any> = [];
  constructor(private categoriesService: CategoriesService) {
  }
  ngOnInit(): void {
    this.loadAllCategories();
  }

  loadAllCategories() {
    this.categoriesService.getAll().subscribe(value => {
      console.log(value);
      this.categoriesArray = value;
    });
  }



}
