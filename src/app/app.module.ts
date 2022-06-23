import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { PublicComponent } from './public/public.component';
import { LoginComponent } from './public/login/login.component';
import { AdminLoginComponent } from './public/login/admin-login/admin-login.component';
import { StudentLoginComponent } from './public/login/student-login/student-login.component';
import { HomeComponent } from './public/home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { RegisterComponent } from './public/register/register.component';
import { AdminRegComponent } from './public/register/admin-reg/admin-reg.component';
import { StudentRegComponent } from './public/register/student-reg/student-reg.component';
import { PrivateComponent } from './private/private.component';
import { AdminDashbComponent } from './private/admin-dashb/admin-dashb.component';
import { StudDashbComponent } from './private/stud-dashb/stud-dashb.component';
import { StudProfileComponent } from './private/stud-dashb/stud-profile/stud-profile.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    LoginComponent,
    AdminLoginComponent,
    StudentLoginComponent,
    HomeComponent,
    RegisterComponent,
    AdminRegComponent,
    StudentRegComponent,
    PrivateComponent,
    AdminDashbComponent,
    StudDashbComponent,
    StudProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
