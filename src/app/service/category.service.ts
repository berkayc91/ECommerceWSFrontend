import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl:string = 'https://localhost:7189/api/v1'

  constructor(private http: HttpClient) { }

  List_Category(){
    let listApiUrl = `${this.apiUrl}/category/List_Category`;
    return this.http.get<any>(listApiUrl);
  }

  Delete_Category(id:number){
    let deleteApiUrl = `${this.apiUrl}/category/Delete_Category`;
    return this.http.delete<any>(deleteApiUrl + '/' + id)
  }
}
