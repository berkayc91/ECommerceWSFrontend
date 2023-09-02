import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl:string = 'https://localhost:7189/api/v1'

  constructor(private http:HttpClient) { }


  List_Product(page: number, pageSize:number)
  {
    let queryParams = new HttpParams();
    console.log(page)
    queryParams = queryParams.append("page", page); //?
    queryParams = queryParams.append("pageSize", pageSize);
    console.log(queryParams);
    let listApiUrl = `${this.apiUrl}/product/List_Product`;
    return this.http.get<any>(listApiUrl, {params:queryParams} );
  }

  List_Product_By_Category(id:number){

    let listApiUrl = `${this.apiUrl}/product/List_Product_By_Category`;
    return this.http.get<any>(listApiUrl + '/' + id);
  }

  Save_Product(postData:any)
  {
    let saveapiUrl = `${this.apiUrl}/product/Save_Product`;
    return this.http.post<any>(saveapiUrl, postData)
  }

  Find_Product(id:number){
    let findApiUrl = `${this.apiUrl}/product/Find_Product`;
    return this.http.get<any>(findApiUrl + '/' + id);
  }

  Update_Product(id:number, postData:any)
  {
    let updateapiUrl = `${this.apiUrl}/product/Update_Product`;
    return this.http.put<any>(updateapiUrl + '/' + id, postData)
  }

  Delete_Product(id:number)
  {
    let deleteApiUrl = `${this.apiUrl}/product/Delete_Product`;
    return this.http.delete<any>(deleteApiUrl + '/' + id)
  }

}
