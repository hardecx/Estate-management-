import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ApiService } from 'src/app/@shared/api.service';
declare var $: any;
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { APIENUM } from 'src/app/@shared/enum';
import { ToastService, IMyOptions } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
Contact:FormGroup;
error: any;
success: any;

  constructor(
    private Api:ApiService,
    private toastrService: ToastService,
    private _fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.Contact = this._fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
      status: ['Active'],


    });
		$('.nav-switch').on('click', function(event) {
      $('.main-menu').slideToggle(400);
      event.preventDefault();
    });
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
      get name() {
        return this.Contact.get('name');
      }
      get message() {
        return this.Contact.get('message');
      }
      get email() {
        return this.Contact.get('message');
      }

      createContact() {
        this.Contact.disable();
        let value = { status:'active',...this.Contact.value };
    
        this.Api.Create(APIENUM.User, value).subscribe((res: any) => {
          this.success = res.message
          this.toastrService.success(res.message)
        }, err => {
          this.error = err.error.message;
          this.Contact.enable();
          this.toastrService.error(err.error.message)
    
        }, () => {
          setTimeout(() => {
            this.success = '';
            this.error = '';
            this.Contact.reset();
            this.toastrService.clear();
            this.Contact.enable();
          }, 500)
        })
      }
    
}