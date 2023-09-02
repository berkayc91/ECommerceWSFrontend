import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl:string = 'https://localhost:7189/api/v1'

  constructor(private http: HttpClient) { }


  Login(postData:any)
  {
    let loginUrl = `${this.apiUrl}/auth/Login`;
    return this.http.post<any>(loginUrl, postData);
  }

  Register(postData:any)
  {
    let registerUrl = `${this.apiUrl}/auth/Register`;
     return this.http.post<any>(registerUrl, postData);
  }
}
