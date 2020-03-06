import { SingleblogComponent } from './../@component/singleblog/singleblog.component';
import { BlogComponent } from './../@component/blog/blog.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../@component/home/home.component';
import { DashboardComponent } from '../@component/dashboard/dashboard.component';
import { EmployeeComponent } from '../@component/employee/employee.component';
import { AboutComponent } from '../@component/about/about.component';
import { PagesComponent } from '../@component/pages/pages.component';
import { ContactComponent } from '../@component/contact/contact.component';
import { ViewComponent } from '../@component/view/view.component';
import { InnerviewComponent } from '../@component/innerview/innerview.component';



const routes: Routes = [
  {
    path: '', 
    component:HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'pages', component: PagesComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'single-blog', component: SingleblogComponent },
      { path: 'view', component: ViewComponent },
      { path: 'innerview', component: InnerviewComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
