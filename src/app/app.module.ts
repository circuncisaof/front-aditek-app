import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginUserViewComponent } from './components/login-user/login-user.component';
import { PageLogin } from './page/login/page-login';
import { MenuComponent } from './components/menu/menu.component';
import { MenuUserViewComponent } from './components/menu-user-view/menu-user-view.component';
import { ViewUserComponent } from './components/view-user/view-user.components';
import { RegisterEditViewComponent } from './components/register-edit-view/register-edit-view.component';
import {  PageNotFound } from './page/page-error/page-error';
import { PageNotfoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardPage } from './page/dashboard/page-dashboard';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuUserViewComponent,
    ViewUserComponent,
    RegisterEditViewComponent,
    LoginUserViewComponent,
    PageNotfoundComponent,
    PageLogin,
    PageNotFound,
    DashboardPage


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
