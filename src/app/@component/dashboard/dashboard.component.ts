import { Component, OnInit, ViewChild, HostListener, Input } from '@angular/core';
import * as $ from 'jquery';
declare var $: any;
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/@shared/api.service';
import { APIENUM } from 'src/app/@shared/enum';
import { ToastService, MdbTableDirective } from 'ng-uikit-pro-standard';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/@shared/shared/shared.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  property:[]
  searchText: string = '';
  previous: string;
  blog:[]
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  constructor(
    private Api:ApiService,
    private toastrService: ToastService, 
    private Route : Router,
    private shared: SharedService,
    private _sanitizer: DomSanitizer
	) { }
  public sanitizeImage(image: string) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${image})`);
  }
  ngOnInit() {
    this.Api.Read(APIENUM.property).subscribe((res:any)=>{
      this.property = res.data;
      var mostRecentDate = new Date(Math.max.apply(null, this.property.map( (e:any) => {
        return new Date(e.registered);
     })));
     var mostRecentObject = this.property.filter( (e:any) => { 
         var d = new Date(e.registered); 
         return d.getTime() == mostRecentDate.getTime();
     })[0];

     console.log(mostRecentObject)
      this.mdbTable.setDataSource(this.property);
      this.property = this.mdbTable.getDataSource();
      this.previous = this.mdbTable.getDataSource();
  },(err:any)=>{
    
    this.toastrService.error(err.error.message)
  })

  this.Api.Read(APIENUM.BLOG).subscribe((res:any)=>{
    this.blog = res.data;
},(err:any)=>{
  
  this.toastrService.error(err.error.message)
})
		
    var window_w = $(window).innerWidth();
    
    
    $(window).on('load', function() {
      /*------------------
        Preloder
      --------------------*/
      $(".loader").fadeOut(); 
      $("#preloder").delay(400).fadeOut("slow");
    
    });
    $('.set-bg').each(function() {
      var bg = $(this).data('setbg');
      $(this).css('background-image', 'url(' + bg + ')');
    });
    $('.clients-slider').owlCarousel({
      loop:true,
      autoplay:true,
      margin:30,
      nav:false,
      dots: true,
      responsive:{
        0:{
          items:2,
          margin:10
        },
        600:{
          items:3
        },
        800:{
          items:3
        },
        1000:{
          items:5
        }
      }
    });
    
    $('.gallery').find('.gallery-item').each(function() {
      var pi_height1 = $(this).outerWidth(true),
      pi_height2 = pi_height1/2;
      
      if($(this).hasClass('grid-long') && window_w > 991){
        $(this).css('height', pi_height2);
      }else{
        $(this).css('height', Math.abs(pi_height1));
      }
    });
    $('.review-slider').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      items: 1,
      dots: true,
      autoplay: true,
  });
      // $('.gallery').masonry({
      //   itemSelector: '.gallery-item',
      //     columnWidth: '.grid-sizer',
      //   gutter: 20
      // });
      
      /*------------------
        Review Slider
      --------------------*/

    
    
      /*------------------
        Review Slider
      --------------------*/
      var sync1 = $("#sl-slider");
      var sync2 = $("#sl-slider-thumb");
      var slidesPerPage = 4; //globaly define number of elements per page
      var syncedSecondary = true;
    
      sync1.owlCarousel({
        items : 1,
        slideSpeed : 2000,
        nav: false,
        autoplay: true,
        dots: true,
        loop: true,
        responsiveRefreshRate : 200,
      }).on('changed.owl.carousel', syncPosition);
    
      sync2.on('initialized.owl.carousel', function () {
        sync2.find(".owl-item").eq(0).addClass("current");
      }).owlCarousel({
        items : slidesPerPage,
        dots: true,
        nav: true,
        margin: 10,
        smartSpeed: 200,
        slideSpeed : 500,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
        responsiveRefreshRate : 100
      }).on('changed.owl.carousel', syncPosition2);
    
      function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;
        //if you disable loop you have to comment this block
        var count = el.item.count-1;
        var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
        if(current < 0) {
          current = count;
        }
        if(current > count) {
          current = 0;
        }
    
        //end block
        sync2.find(".owl-item").removeClass("current").eq(current).addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();
    
        if (current > end) {
          sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
          sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
      }
    
      function syncPosition2(el) {
        if(syncedSecondary) {
          var number = el.item.index;
          sync1.data('owl.carousel').to(number, 100, true);
        }
      }
    
      sync2.on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
      });
    
    
    
    
      /*------------------
        Accordions
      --------------------*/
      $('.panel-link').on('click', function (e) {
        $('.panel-link').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
          $this.addClass('active');
        }
        e.preventDefault();
      });
    
    
    
      // $('.video-link').magnificPopup({
      //       disableOn: 700,
      //       type: 'iframe',
      //       mainClass: 'mfp-fade',
      //       removalDelay: 160,
      //       preloader: false,
      //   });
    

      }
      blogy(el){
        this.Route.navigate(['/main/single-blog'])
        this.shared.AddInfo(el)
      }
}
