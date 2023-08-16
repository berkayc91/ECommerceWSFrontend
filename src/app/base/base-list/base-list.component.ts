import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-list',
  template: ``
  
})
export class BaseListComponent implements OnInit {

  //LIST MEMBERS
  public list_data: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
