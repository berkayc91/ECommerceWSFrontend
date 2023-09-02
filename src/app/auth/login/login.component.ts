import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseEditComponent } from 'src/app/base/base-edit/base-edit.component';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent extends BaseEditComponent implements OnInit {

  Email : FormControl = new FormControl('', [Validators.required, Validators.email])
  Password : FormControl = new FormControl('', [Validators.required])

  constructor(private authService : AuthService, private router:Router) {
    super();
    this.mainForm.addControl("UserEmail", this.Email)
    this.mainForm.addControl("UserPassword", this.Password)
    this.mainForm.reset()
  }

  override ngOnInit(): void {
  }


  Login()
  {
    let postData = this.mainForm.value;
    this.authService.Login(postData).subscribe(result=>{
      console.log(result);
      this.router.navigate(["/products"])
    })

  }
}
