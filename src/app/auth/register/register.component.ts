import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseEditComponent } from 'src/app/base/base-edit/base-edit.component';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent extends BaseEditComponent implements OnInit {

  UserEmail : FormControl = new FormControl('',[Validators.required, Validators.email])
  UserPassword : FormControl = new FormControl('',[Validators.required])
  UserName : FormControl = new FormControl('',[Validators.required])
  UserFirstName : FormControl = new FormControl('',[Validators.required])
  UserLastName : FormControl = new FormControl('',[Validators.required])
  UserAddress : FormControl = new FormControl('',[Validators.required])

  constructor(private authService: AuthService, private router: Router) {
    super();
    this.mainForm.addControl("UserName", this.UserName);
    this.mainForm.addControl("UserEmail", this.UserEmail);
    this.mainForm.addControl("UserPassword", this.UserPassword);
    this.mainForm.addControl("UserFirstName", this.UserFirstName);
    this.mainForm.addControl("UserLastName", this.UserLastName);
    this.mainForm.addControl("UserAddress", this.UserAddress);
    this.mainForm.reset();
  }

  override ngOnInit(): void {
  }

  Register()
  {
    let postData = this.mainForm.value;
    this.authService.Register(postData).subscribe(result=>{
      if(result.status == 1)
      {
        this.router.navigate(["/products"])
      }
      else{
        alert("Register Failed");
      }
    })
  }

}
