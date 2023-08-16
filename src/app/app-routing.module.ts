import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category/category-list/category-list.component';

const routes: Routes = [
  {path:'categories',component:CategoryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
