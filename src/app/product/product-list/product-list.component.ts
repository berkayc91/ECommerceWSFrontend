import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BaseListComponent } from 'src/app/base/base-list/base-list.component';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends BaseListComponent implements OnInit {

  currentFileIndex: number = 0;
  
  pageData: any;
  pageSize: number = 4;
  currentPage: any;
  pageArray: any[] = [];

  constructor(private productService: ProductService, private route: Router) {
    super();
  }

  override ngOnInit(): void {
    this.List(1);
  }

  List(page: number)
  {
    this.productService.List_Product(page, this.pageSize).subscribe(result=>{
      this.currentPage = page;
      console.log(result.data);
      this.list_data = result.data.data;
      this.pageData = result.data;
      this.pageArray = Array.from({length: this.pageData.totalPages}, (_, i) => i + 1)
    })
  }

  Update(e:any)
  {
    this.route.navigate([`${this.route.url}/${e}`])
  }

  Delete(e:any)
  {
    this.productService.Delete_Product(e).subscribe(result=>{
      this.List(1);
    })
  }

  Add()
  {
    this.route.navigate([`${this.route.url}/0`])
  }

}
