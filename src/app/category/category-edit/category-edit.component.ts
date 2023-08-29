import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseEditComponent } from 'src/app/base/base-edit/base-edit.component';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent extends BaseEditComponent implements OnInit {

  // FORM CONTROLS 
  cCategoryName : FormControl = new FormControl('',[Validators.required])
  cCategoryDescription : FormControl = new FormControl('',[Validators.required])

  constructor(protected activatedRoute: ActivatedRoute,private categoryService : CategoryService)
   {
    super();
    this.mainForm.addControl("CategoryName",this.cCategoryName);
    this.mainForm.addControl("CategoryDescription",this.cCategoryDescription);
    this.mainForm.reset();
  }

  override ngOnInit(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataId = (id) ? Number(id) : 0;
    this.LoadData();
  }

  LoadData(){

    if(this.dataId && this.dataId != 0){
      this.categoryService.Find_Category(this.dataId).subscribe(result => {
        if(result.status == 1){
          this.formData = result.data;
          this.cCategoryName.setValue(this.formData?.categoryName);
          this.cCategoryDescription.setValue(this.formData?.categoryDescription);
        }
        else{

        }
      })
    }
    else{
      this.mainForm.reset();
    }
    
  }
  SaveOrUpdate(){
    let postData = this.mainForm.value;
    if(this.dataId == 0){
      this.categoryService.Save_Category(postData).subscribe(response=> {
        console.log(response.data);
      })
    }
    else{
      this.categoryService.Update_Category(this.dataId,postData).subscribe(response =>{
        console.log(response.data);
      })
    }

  }

}
