import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-base-edit',
  template: ``,
 
})
export class BaseEditComponent implements OnInit {

  public mainForm : FormGroup = new FormGroup({});
  public dataId: any;
  public formData : any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
