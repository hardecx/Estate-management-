
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, ToastModule, ToastService } from 'ng-uikit-pro-standard';
import { SharedModule } from './@shared/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
   SharedModule
  ],
  providers: [MDBSpinningPreloader,ToastService],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
