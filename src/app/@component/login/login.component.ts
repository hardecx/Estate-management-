import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
ApiService
import { APIENUM } from 'src/app/@shared/enum';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/@shared/api.service';
import { ToastService } from 'ng-uikit-pro-standard';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
Login: FormGroup;
  error:any;
  success:any;
  constructor(  private _fb:FormBuilder,    private Api:ApiService,private router:Router, private toastrService: ToastService ) { }

  ngOnInit() {

    this.Login= this._fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]],
    
    });
  }
  get email(){
    return this.Login.get('email');
  }

  get password(){
    return this.Login.get('password');
  }

   SignIn(){
    this.Login.disable();
   
    this.Api.Login(APIENUM.LOGIN,this.Login.value).subscribe((res:any)=>{
      this.success=res.message;
      sessionStorage.setItem('Firstname',res.data[0]['firstname']);
      sessionStorage.setItem('Lastname',res.data[0]['lastname']);
      sessionStorage.setItem('isadmin',res.data[0]['isadmin']);
      this.router.navigateByUrl('admin');

   },(err: any) => {
    this.Login.enable();
this.handleError(err);
  })

 
}
  SHandle(r) {
    setTimeout(
      () =>   this.toastrService.success(r.message,'',{
        opacity:9
              }),5000
      );
    // this.toast.error(error.error.message, error.status, {
    //   opacity: 9
    // });

    this.toastrService.clear();
  }

  handleError(error) {
    setTimeout(
      () => this.toastrService.error( error.error.error, error.status, {
        opacity: 9
      }),5000
      );
    // this.toast.error(error.error.message, error.status, {
    //   opacity: 9
    // });

    this.toastrService.clear();
  }


}