import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BaseListComponent } from './base/base-list/base-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BaseEditComponent } from './base/base-edit/base-edit.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BaseListComponent,
    CategoryListComponent,
    BaseEditComponent,
    CategoryEditComponent,
    ProductListComponent,
    ProductEditComponent,
    LoginComponent,
    RegisterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
