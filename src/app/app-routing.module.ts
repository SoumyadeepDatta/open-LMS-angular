import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthAdminGuard } from './auth/auth-admin.guard';
import { AuthStudentGuard } from './auth/auth-student.guard';
import { AdminDashbComponent } from './private/admin-dashb/admin-dashb.component';
import { StudDashbComponent } from './private/stud-dashb/stud-dashb.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'register',
    component:RegisterComponent,
    pathMatch:'full'
  },
  {
    path:'student',
    canActivate:[AuthStudentGuard],
    component:StudDashbComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    canActivate:[AuthAdminGuard],
    component:AdminDashbComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
