import { Injectable } from '@angular/core';

import { APIENUM } from './enum';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

/*
@params apiUrl endpoint url  http://66.70.202.147/BusinessLoanServer/
 @params operation CRUD
 @params APIENUM api path
*/

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = environment.url;

  constructor(private _http: HttpClient, ) { }

  //create

  Create(type: APIENUM, data: any) {


    return this._http.post(`${this.apiUrl}${type.toString()}/create`, data);

  }
  //update
  Update(type: APIENUM, data: any) {

    return this._http.post(`${this.apiUrl}${type.toString()}/update`, data);

  }
//readAll

  Read(type: APIENUM) {


    return this._http.post(`${this.apiUrl}${type.toString()}/read`, {});

  }

  //readOne
  ReadOne(type: APIENUM, data: any, ) {


    return this._http.post(`${this.apiUrl}${type.toString()}/read_one`, data);

  }
  Login(type: APIENUM, data: any) {


    return this._http.post(`${this.apiUrl}${type.toString()}/login`, data);

  }

  FileUpload(f){

    const formData = new FormData();
    formData.append('files', f);

    return this._http.post(this.apiUrl + APIENUM.FILE, formData);
  }

}