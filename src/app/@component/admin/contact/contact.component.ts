import { Component, OnInit, ElementRef, HostListener, AfterViewInit, ViewChild, } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { APIENUM } from 'src/app/@shared/enum';
import { ApiService } from 'src/app/@shared/api.service';
import { MDBModalRef, MDBModalService, MdbTableDirective } from 'ng-uikit-pro-standard';
import { ToastService, IMyOptions } from 'ng-uikit-pro-standard';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild('basicModal', { static: true }) public contentModal;
  error: any;
  success: any;
  elements = [];
  searchText: string = '';
  previous: string;
  message: Boolean = false;
  loading: Boolean = true;
  messages: string;

  constructor(private _fb: FormBuilder, private api: ApiService, private toastrService: ToastService,private modalService: MDBModalService) {

  }


  ngOnInit() {

    this.load();


  }

  load() {

    this.api.Read(APIENUM.User)
      .subscribe((res: any) => {
        this.loading = false;
        this.elements = res.data;
      }, (err: any) => {
        this.loading = false;
        this.message = true;
        this.messages = err.error.message;
        ;
      })
  }

}