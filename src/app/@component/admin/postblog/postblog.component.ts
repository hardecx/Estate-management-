import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/@shared/api.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { APIENUM } from 'src/app/@shared/enum';
import { ToastService, IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-postblog',
  templateUrl: './postblog.component.html',
  styleUrls: ['./postblog.component.scss']
})
export class PostblogComponent implements OnInit {
blog:FormGroup;
error: any;
success: any;

  constructor(
    private Api:ApiService,
    private toastrService: ToastService,
    private _fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.blog = this._fb.group({
      title: ['', [Validators.required]],
      image: ['', [Validators.required]],
      first: ['', [Validators.required]],
      second: ['', [Validators.required]],
      quote: ['', [Validators.required]],
      third: ['', [Validators.required]],
      fourth: ['', [Validators.required]],
      posteduser: ['', [Validators.required]],
      status: ['Active'],
    });
  }
  createBlog() {
    this.blog.disable();
    let value = { status:'active',...this.blog.value };

    this.Api.Create(APIENUM.BLOG, value).subscribe((res: any) => {
      this.success = res.message
      this.toastrService.success(res.message)
    }, err => {
      this.error = err.error.message;
      this.blog.enable();
      this.toastrService.error(err.error.message)

    }, () => {
      setTimeout(() => {
        this.success = '';
        this.error = '';
        this.blog.reset();
        this.toastrService.clear();
        this.blog.enable();
      }, 500)
    })
  }
  image(event){
    let files = event.target.files[0];
    this.Api.FileUpload(files)
      .subscribe((event: any) => {
        let result = event.data.path;
      this.blog.patchValue({
        image:result
      
      })
      this.toastrService.success(event.message)
    }, err => {
      this.error = err.error.message;
      this.toastrService.error(err.error.message)

    })
  }
    
}
