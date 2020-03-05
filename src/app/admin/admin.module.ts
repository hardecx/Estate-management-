import { ApiService } from './../@shared/api.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorServices } from '../@shared/intercept';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../@shared/shared/shared.module';
import { OwlModule } from "ngx-owl-carousel";
import { NgxMasonryModule } from 'ngx-masonry';
import { ToastService } from 'ng-uikit-pro-standard';
import { SharedService } from '../@shared/shared/shared.service';
import { PostblogComponent } from '../@component/admin/postblog/postblog.component';
import { HomeComponent } from '../@component/admin/home/home.component';
import { LoginComponent } from '../@component/login/login.component';
import { ContactComponent } from '../@component/admin/contact/contact.component';
import { PropertyComponent } from '../@component/admin/property/property.component';


@NgModule({
  declarations: [PostblogComponent, LoginComponent, HomeComponent, ContactComponent, PropertyComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
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
export class AdminModule { }
