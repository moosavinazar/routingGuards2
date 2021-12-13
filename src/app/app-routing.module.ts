import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {AdminComponent} from "./admin/admin.component";
import {NotAuthorizedComponent} from "./not-authorized/not-authorized.component";
import {ManageUsersComponent} from "./manage-users/manage-users.component";
import {ManagePagesComponent} from "./manage-pages/manage-pages.component";
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent,canActivateChild: [ AuthGuard ], children: [
      { path: 'manageusers', component: ManageUsersComponent },
      { path: 'managepages', component: ManagePagesComponent }
    ] },
  { path: 'not-authorized', component: NotAuthorizedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
