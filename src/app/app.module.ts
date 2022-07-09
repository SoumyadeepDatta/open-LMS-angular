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
import { EditStudentProfile, StudProfileComponent } from './private/stud-dashb/stud-profile/stud-profile.component';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatListModule} from '@angular/material/list';
import { AdminProfileComponent, EditAdminProfile } from './private/admin-dashb/admin-profile/admin-profile.component';
import { AddBook, EditBook, MBookComponent } from './private/admin-dashb/m-book/m-book.component';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import { MStudComponent, ViewStudent } from './private/admin-dashb/m-stud/m-stud.component';
import { LibraryComponent } from './private/stud-dashb/library/library.component';
import { LibAllComponent } from './private/stud-dashb/library/lib-all/lib-all.component';
import { LibIssuedComponent } from './private/stud-dashb/library/lib-issued/lib-issued.component';
import { MLibComponent } from './private/admin-dashb/m-lib/m-lib.component';

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
    StudProfileComponent,
    AdminProfileComponent,
    MBookComponent,
    EditBook,
    AddBook,
    MStudComponent,
    LibraryComponent,
    LibAllComponent,
    LibIssuedComponent,
    MLibComponent,
    ViewStudent,
    EditStudentProfile,
    EditAdminProfile
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
    MatCardModule,
    HttpClientModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
