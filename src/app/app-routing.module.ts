import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperAdminComponent } from './container/super-admin/super-admin.component';
import { LoginComponent } from './container/login/login.component';
import { RoleComponent } from './container/role/role.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { LogoutComponent } from './container/logout/logout.component';
import { PermissionsComponent } from './container/permissions/permissions.component';
import { AdminComponent } from './container/admin/admin.component';
import { UserComponent } from './container/user/user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/dashboard',
    pathMatch: 'full'
  },
  {
   path:'dashboard',
   component:DashboardComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'superadmin',
    component: SuperAdminComponent,
    children:[
      {},
      {}
    ]
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'permission',
    component: PermissionsComponent
  },
  {
    path: 'role',
    component: RoleComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'user', component: UserComponent },
      { path: 'dashboard', component: DashboardComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
