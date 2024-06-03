import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './container/adminlogin/adminlogin.component';
import { SuperAdminComponent } from './container/super-admin/super-admin.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { LoginComponent } from './container/login/login.component';
import { LogoutComponent } from './container/logout/logout.component';
import { PermissionsComponent } from './container/permissions/permissions.component';
import { RoleComponent } from './container/role/role.component';
import { UserComponent } from './container/user/user.component';
import { AdminComponent } from './container/admin/admin.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    SuperAdminComponent,
    DashboardComponent,
    LoginComponent,
    LogoutComponent,
    PermissionsComponent,
    RoleComponent,
    UserComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
