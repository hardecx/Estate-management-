import { PostblogComponent } from './../@component/admin/postblog/postblog.component';

import { BlogComponent } from './../@component/blog/blog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../@component/admin/home/home.component';
import { LoginComponent } from '../@component/login/login.component';
import { ContactComponent } from '../@component/admin/contact/contact.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', 
    component:HomeComponent,
    children: [
      { path: 'postblog', component: PostblogComponent },
      { path: 'contact', component: ContactComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
