import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@shared/api.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { APIENUM } from 'src/app/@shared/enum';
import { ToastService, IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss']
})
export class PropertyComponent implements OnInit {
  property:FormGroup;
  error: any;
  success: any;
  
    constructor(
      private Api:ApiService,
      private toastrService: ToastService,
      private _fb: FormBuilder,
    ) { }
  
    ngOnInit() {
      this.property = this._fb.group({
        name: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        firstimage: ['', [Validators.required]],
        secondimage: ['', [Validators.required]],
        thirdimage: ['', [Validators.required]],
        fourthimage: ['', [Validators.required]],
        video: ['', [Validators.required]],
        description: ['', [Validators.required]],
        type: ['', [Validators.required]],
        feature: ['', [Validators.required]],
        amount: ['', [Validators.required]],
        bedrooms: [[Validators.required]],
        age: [[Validators.required]],
        bathrooms: [[Validators.required]],
        size: [[Validators.required]],
        carpark: [[Validators.required]],
        posteduser: ['', [Validators.required]],
        status: ['Active'],
      });
    }
    createProperty() {
      this.property.disable();
      let value = { status:'active',...this.property.value };
  
      this.Api.Create(APIENUM.property, value).subscribe((res: any) => {
        this.success = res.message
        this.toastrService.success(res.message)
      }, err => {
        this.error = err.error.message;
        this.property.enable();
        this.toastrService.error(err.error.message)
  
      }, () => {
        setTimeout(() => {
          this.success = '';
          this.error = '';
          this.property.reset();
          this.toastrService.clear();
          this.property.enable();
        }, 500)
      })
    }
    image(event){
      let files = event.target.files[0];
      this.Api.FileUpload(files)
        .subscribe((event: any) => {
          let result = event.data.path;
        this.property.patchValue({
          firstimage:result
        
        })
        this.toastrService.success(event.message)
      }, err => {
        this.error = err.error.message;
        this.toastrService.error(err.error.message)
  
      })
    }
    secondimage(event){
      let files = event.target.files[0];
      this.Api.FileUpload(files)
        .subscribe((event: any) => {
          let result = event.data.path;
        this.property.patchValue({
          secondimage:result
        
        })
        this.toastrService.success(event.message)
      }, err => {
        this.error = err.error.message;
        this.toastrService.error(err.error.message)
  
      })
    }
    thirdimage(event){
      let files = event.target.files[0];
      this.Api.FileUpload(files)
        .subscribe((event: any) => {
          let result = event.data.path;
        this.property.patchValue({
          thirdimage:result
        
        })
        this.toastrService.success(event.message)
      }, err => {
        this.error = err.error.message;
        this.toastrService.error(err.error.message)
  
      })
    }
    fourthimage(event){
      let files = event.target.files[0];
      this.Api.FileUpload(files)
        .subscribe((event: any) => {
          let result = event.data.path;
        this.property.patchValue({
          fourthimage:result
        
        })
        this.toastrService.success(event.message)
      }, err => {
        this.error = err.error.message;
        this.toastrService.error(err.error.message)
  
      })
    }
    video(event){
      let files = event.target.files[0];
      this.Api.FileUpload(files)
        .subscribe((event: any) => {
          let result = event.data.path;
        this.property.patchValue({
          video:result
        
        })
        this.toastrService.success(event.message)
      }, err => {
        this.error = err.error.message;
        this.toastrService.error(err.error.message)
  
      })
    }
  }
  