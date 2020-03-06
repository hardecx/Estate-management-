import { ApiService } from './../@shared/api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorServices } from '../@shared/intercept';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from '../@component/home/home.component';
import { DashboardComponent } from '../@component/dashboard/dashboard.component';
import { SharedModule } from '../@shared/shared/shared.module';
import { EmployeeComponent } from '../@component/employee/employee.component';
import { OwlModule } from "ngx-owl-carousel";
import { NgxMasonryModule } from 'ngx-masonry';
import { ToastService } from 'ng-uikit-pro-standard';
import { AboutComponent } from '../@component/about/about.component';
import { PagesComponent } from '../@component/pages/pages.component';
import { BlogComponent } from '../@component/blog/blog.component';
import { ContactComponent } from '../@component/contact/contact.component';
import { SharedService } from '../@shared/shared/shared.service';
import { SingleblogComponent } from '../@component/singleblog/singleblog.component';
import { DisqusModule } from 'angular2-disqus';
import { ViewComponent } from '../@component/view/view.component';
import { InnerviewComponent } from '../@component/innerview/innerview.component';
import { ViewblogComponent } from '../@component/viewblog/viewblog.component';
@NgModule({
  declarations: [HomeComponent, DashboardComponent, EmployeeComponent, AboutComponent, PagesComponent, BlogComponent, ContactComponent, SingleblogComponent, ViewComponent, InnerviewComponent, ViewblogComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    DisqusModule,
    SharedModule,
    OwlModule,
    NgxMasonryModule
  ],  
  providers:[ApiService,ToastService,SharedService,{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorServices,
    multi: true
  }]
})
export class MainModule { }
