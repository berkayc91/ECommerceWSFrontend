import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  categories : any ; 
  constructor(private categoryService : CategoryService ) { }

  ngOnInit(): void {
    this.categoryService.List_Category().subscribe(result=>{
      this.categories = result.data;
    })
  }

}
