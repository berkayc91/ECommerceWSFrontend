import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BaseEditComponent } from 'src/app/base/base-edit/base-edit.component';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent extends BaseEditComponent implements OnInit {

  ProductName : FormControl = new FormControl('',[Validators.required])
  ProductDescription : FormControl = new FormControl('',[Validators.required])
  ProductStock : FormControl = new FormControl('',[Validators.required])
  ProductPrice : FormControl = new FormControl('',[Validators.required])
  ProductCategoryId : FormControl = new FormControl('',[Validators.required])
  ProductCampaignId : FormControl = new FormControl('',[Validators.required])
  ProductStatus : FormControl = new FormControl('',[Validators.required])
  File : FormControl = new FormControl('',[Validators.required])

  fileToUpload: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
    super();

    this.mainForm.addControl("ProductName",this.ProductName);
    this.mainForm.addControl("ProductDescription",this.ProductDescription);
    this.mainForm.addControl("ProductStock",this.ProductStock);
    this.mainForm.addControl("ProductPrice",this.ProductPrice);
    this.mainForm.addControl("ProductCategoryId",this.ProductCategoryId);
    this.mainForm.addControl("ProductCampaignId",this.ProductCampaignId);
    this.mainForm.addControl("ProductStatus",this.ProductStatus);
    this.mainForm.addControl("File",this.File);
    this.mainForm.reset();
  }


  override ngOnInit(): void {
    var id = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataId = (id) ? Number(id) : 0;
    this.LoadData();

  }

  handleFileInput(e: any)
  {
    let files = e?.target?.files;

    if(files)
    {

      for(let file of files)
      {
        this.fileToUpload.push(file)

      }

    }

  }

  LoadData()
  {
    if(this.dataId && this.dataId != 0)
    {
      this.productService.Find_Product(this.dataId).subscribe(result=>{
        if(result.status == 1)
        {
          this.formData = result.data;
          this.ProductName.setValue(this.formData?.productName);
          this.ProductDescription.setValue(this.formData?.productDescription);
          this.ProductStock.setValue(this.formData?.productStock);
          this.ProductPrice.setValue(this.formData?.productPrice);
          this.ProductCategoryId.setValue(this.formData?.category.categoryId);
          this.ProductCampaignId.setValue(this.formData?.campaign.campaignId);
          this.ProductStatus.setValue(this.formData?.productStatus);
          this.File.setValue(this.formData?.files);
        }
        else
        {
          this.mainForm.reset();
        }
      })
    }

  }

  SaveOrUpdate(){
    let postData = this.mainForm.value;

    const form_data = new FormData();

    for(let index = 0; index< this.fileToUpload.length; index++)
    {
      form_data.append("files", this.fileToUpload[index]);
    }

    form_data.append("productName", postData.ProductName);
    form_data.append("productDescription", postData.ProductDescription);
    form_data.append("productStock",postData.ProductStock);
    form_data.append("productPrice", postData.ProductPrice);
    form_data.append("productCategoryId", postData.ProductCategoryId);
    form_data.append("productCampaignId", postData.ProductCampaignId);
    form_data.append("productStatus", postData.ProductStatus);

    if(this.dataId == 0)
    {
      this.productService.Save_Product(form_data).subscribe(response=>{
        console.log(response);
      })
    }

    else
    {
      this.productService.Update_Product(this.dataId, form_data).subscribe(response=>{
        console.log(response);
      })
    }

  }


}
