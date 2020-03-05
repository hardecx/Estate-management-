import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  WHOI =  sessionStorage.getItem('isadmin').toString().trim().toUpperCase()
  UNAME = sessionStorage.getItem('Firstname').toString().trim().toUpperCase() + ' ' + sessionStorage.getItem('Lastname').toString().trim().toUpperCase();


  view: any = [];
  constructor(private router: Router, ) {
    this.loadFile();
  }

  ngOnInit() {



  }

  loadFile() {

    console.log(this.WHOI);


    let views = ''
    if (this.WHOI) {
      this.view = [
        { name: 'Blog', router: 'postblog' },
        { name: 'Contact List', router: 'contact' },
        { name: 'Property', router: 'property' },
//trackloan

      ];
      views = 'admin/' + this.view[0].router
    } 
    else {
      this.logout();
    }


    this.router.navigateByUrl(views);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('');
  }

}