import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseListComponent } from 'src/app/base/base-list/base-list.component';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent extends BaseListComponent implements OnInit {

  constructor( private categoryService: CategoryService, protected router : Router) {
    super();
  }

  override ngOnInit(): void {
    this.List();
  }

  List(){
    this.categoryService.List_Category().subscribe(result=>{     
      this.list_data = result.data; 
    })
  }

  Delete(id:number){
    this.categoryService.Delete_Category(id).subscribe(result=>{
      this.List();
    });
  }
  Add(){
    this.router.navigate([`${this.router.url}/0`])
  }
  Update(id:number){
    this.router.navigate([`${this.router.url}/${id}`])
  }

}
