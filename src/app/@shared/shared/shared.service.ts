import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private  _Info:BehaviorSubject<any> = new BehaviorSubject(null); 
  constructor() { }



  AddInfo(info){
   
    this._Info.next(info);
      
  }

  getInfo(){

      return  this._Info;
    
      
  }
}