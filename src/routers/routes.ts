import { Routes } from '@angular/router';
import { PageNotfoundComponent } from 'src/app/components/page-not-found/page-not-found.component';
import { RegisterEditViewComponent } from 'src/app/components/register-edit-view/register-edit-view.component';
import { DashboardPage } from 'src/app/page/dashboard/page-dashboard';
import { PageLogin } from 'src/app/page/login/page-login';

export const routes: Routes= [
  {path: 'login', component: PageLogin},
  {path:'dasboard', component:DashboardPage},
  {path: 'register-edit', component: RegisterEditViewComponent},
  {path:'error', component: PageNotfoundComponent}
];
