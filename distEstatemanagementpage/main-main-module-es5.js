(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./node_modules/angular2-disqus/lib/disqus-thread.component.js":
/*!*********************************************************************!*\
  !*** ./node_modules/angular2-disqus/lib/disqus-thread.component.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var DisqusThreadComponent = (function () {
    function DisqusThreadComponent() {
    }
    DisqusThreadComponent.prototype.ngOnChanges = function (changes) {
        var pageIdentifier = (changes['pageIdentifier'] && changes['pageIdentifier'].currentValue) ? changes['pageIdentifier'].currentValue : this.pageIdentifier;
        var pageUrl = (changes['pageUrl'] && changes['pageUrl'].currentValue) ? changes['pageUrl'].currentValue : this.pageUrl;
        var pageTitle = (changes['pageTitle'] && changes['pageTitle'].currentValue) ? changes['pageTitle'].currentValue : this.pageTitle;
        var pageCategoryId = (changes['pageCategoryId'] && changes['pageCategoryId'].currentValue) ? changes['pageCategoryId'].currentValue : this.pageCategoryId;
        var pageLanguage = (changes['pageLanguage'] && changes['pageLanguage'].currentValue) ? changes['pageLanguage'].currentValue : this.pageLanguage;
        if (pageIdentifier && pageUrl) {
            DISQUS.reset({
                reload: true,
                config: function () {
                    this.page.identifier = pageIdentifier;
                    this.page.url = pageUrl;
                    this.page.title = pageTitle;
                    this.page.category_id = pageCategoryId;
                    this.language = pageLanguage;
                }
            });
        }
    };
    return DisqusThreadComponent;
}());
DisqusThreadComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'disqus-thread',
                template: '<div id="disqus_thread"><a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a></div>'
            },] },
];
/** @nocollapse */
DisqusThreadComponent.ctorParameters = function () { return []; };
DisqusThreadComponent.propDecorators = {
    'pageIdentifier': [{ type: core_1.Input, args: ['page-identifier',] },],
    'pageUrl': [{ type: core_1.Input, args: ['page-url',] },],
    'pageTitle': [{ type: core_1.Input, args: ['page-title',] },],
    'pageCategoryId': [{ type: core_1.Input, args: ['page-category-id',] },],
    'pageLanguage': [{ type: core_1.Input, args: ['page-language',] },],
};
exports.DisqusThreadComponent = DisqusThreadComponent;
//# sourceMappingURL=disqus-thread.component.js.map

/***/ }),

/***/ "./node_modules/angular2-disqus/lib/disqus.module.js":
/*!***********************************************************!*\
  !*** ./node_modules/angular2-disqus/lib/disqus.module.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var disqus_thread_component_1 = __webpack_require__(/*! ./disqus-thread.component */ "./node_modules/angular2-disqus/lib/disqus-thread.component.js");
var DisqusModule = (function () {
    function DisqusModule() {
    }
    return DisqusModule;
}());
DisqusModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [],
                providers: [],
                declarations: [
                    disqus_thread_component_1.DisqusThreadComponent
                ],
                exports: [
                    disqus_thread_component_1.DisqusThreadComponent
                ]
            },] },
];
/** @nocollapse */
DisqusModule.ctorParameters = function () { return []; };
exports.DisqusModule = DisqusModule;
//# sourceMappingURL=disqus.module.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@component/about/about.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@component/about/about.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!-- Page Preloder -->\r\n\r\n\t<!-- Header section -->\r\n\r\n\t<header class=\"header-section\">\r\n\t\t<div class=\"header-top\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-6 header-top-left\">\r\n\t\t\t\t\t\t<div class=\"top-info\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-phone\"></i>\r\n\t\t\t\t\t\t\t+234-01- 873-0204\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"top-info\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-envelope\"></i>\r\n\t\t\t\t\t\t\tkunledavids@yahoo.com\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-6 text-lg-right header-top-right\">\r\n\t\t\t\t\t\t<div class=\"top-social\">\r\n\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/pages/category/Local-Business/Resourceful-Properties-296818430474894/\"><i class=\"fab fa-facebook-f\"></i></a>\r\n\t\t\t\t\t\t\t<!-- <a href=\"\"><i class=\"fab fa-twitter\"></i></a> -->\r\n\t\t\t\t\t\t\t<a href=\"https://www.instagram.com/resourceful_properties/\"><i class=\"fab fa-instagram\"></i></a>\r\n\t\t\t\t\t\t\t<a href=\"https://www.linkedin.com/company/resourceful-properties/about/\"><i class=\"fab fa-linkedin\"></i></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- <div class=\"user-panel\">\r\n\t\t\t\t\t\t\t<a href=\"\"><i class=\"fas fa-user-circle\"></i> Register</a>\r\n\t\t\t\t\t\t\t<a href=\"\"><i class=\"fas fa-sign-in-alt\"></i> Login</a>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t<div class=\"rowers\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"site-logo\"><img src=\"assets/logop.png\" alt=\"\"></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-8\">\r\n\t\t\t\t\t<div class=\"site-navbar\">\r\n\t\t\t\t\t\t<div class=\"nav-switch\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-bars\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ul class=\"main-menu\">\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../dashboard']\">HOME</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../employee']\">FEATURED LISTING</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../about']\">ABOUT US</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../pages']\">PAGES</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../blog']\">BLOG</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../contact']\">CONTACT</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</header>\r\n\t<!-- Header section end -->\r\n\r\n\r\n\t<!-- Page top section -->\r\n\t<section class=\"page-top-section set-bg\" data-setbg=\"assets/img/page-top-bg.jpg\">\r\n\t\t<div class=\"container text-white\">\r\n\t\t\t<h2>About us</h2>\r\n\t\t</div>\r\n\t</section>\r\n\t<!--  Page top end -->\r\n\r\n\t<!-- Breadcrumb -->\r\n\t<div class=\"site-breadcrumb\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<a href=\"\"><i class=\"fa fa-home\"></i>Home</a>\r\n\t\t\t<span><i class=\"fa fa-angle-right\"></i>About us</span>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- page -->\r\n\t<section class=\"page-section\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<img class=\"mb-5\" src=\"assets/img/about.jpg\" alt=\"\">\r\n\t\t\t<div class=\"row about-text\">\r\n\t\t\t\t<div class=\"col-xl-6 about-text-left\">\r\n\t\t\t\t\t<h5>ABOUT US</h5>\r\n\t\t\t\t\t<p>Resourceful Properties is the Real Estate Consultants firm and resulted from the need to adequately service our client’s interests in property related matters which have arisen. The firm is founded in 2001 and is managed by a team of highly motivated and qualified Estate Surveyors, Legal Practitioners and support personnel with experience from different background and areas of specialization backed with modern telecommunications facilities and resources.</p>\r\n\t\t\t\t\t<p>The firm keeps abreast of changing trends in the real estate sector both locally and internationally and ensures that the expansion of our client base and size of our professional staff is balanced with the maintenance of a high standard of service for a clientele that expects nothing less than the highest level of integrity and professional competence.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-xl-6 about-text-right\">\r\n\t\t\t\t\t<h5>MISSION</h5>\r\n          <p>Our mission is: “To provide prompt and efficient services to our clients using a well motivated and professional work force, ensuring in the process that client receive optimal value always. The client remains our focus, hence our services arm tailored to meet their peculiar needs in a professional manner”</p>\r\n          <h5>CORE VALUES</h5>\r\n\t\t\t\t\t<ul class=\"about-list\">\r\n\t\t\t\t\t\t<li><i class=\"fas fa-check-circle\"></i>Professionalism</li>\r\n\t\t\t\t\t\t<li><i class=\"fas fa-check-circle\"></i>Innovation </li>\r\n\t\t\t\t\t\t<li><i class=\"fas fa-check-circle\"></i>Integrity</li>\r\n            <li><i class=\"fas fa-check-circle\"></i>Passion</li>\r\n            <li><i class=\"fas fa-check-circle\"></i>Leadership</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t\r\n\t\t<!-- Review section -->\r\n\t\t<section class=\"review-section set-bg\" data-setbg=\"assets/img/review-bg.jpg\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"review-slider owl-carousel\">\r\n\t\t\t\t\t<div class=\"review-item text-white\">\r\n\t\t\t\t\t\t<div class=\"rating\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p>“Resourceful Properties was quick to understand my needs and steer me in the right direction. Their professionalism and warmth made the process of finding a suitable home a lot less stressful than it could have been. Thanks, agent Tony Holland.”</p>\r\n\t\t\t\t\t\t<h5>Adeogo Adejana</h5>\r\n\t\t\t\t\t\t<span>CEP’s Director</span>\r\n\t\t\t\t\t\t<div class=\"clint-pic set-bg\" data-setbg=\"assets/img/review/1.jpg\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"review-item text-white\">\r\n\t\t\t\t\t\t<div class=\"rating\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p>“Resourceful Properties was quick to understand my needs and steer me in the right direction. Their professionalism and warmth made the process of finding a suitable home a lot less stressful than it could have been. Thanks, agent Tony Holland.”</p>\r\n\t\t\t\t\t\t<h5>Kayode Mustapha</h5>\r\n\t\t\t\t\t\t<span>CEP’s Director</span>\r\n\t\t\t\t\t\t<div class=\"clint-pic set-bg\" data-setbg=\"assets/img/review/1.jpg\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"review-item text-white\">\r\n\t\t\t\t\t\t<div class=\"rating\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<p>“Resourceful Properties was quick to understand my needs and steer me in the right direction. Their professionalism and warmth made the process of finding a suitable home a lot less stressful than it could have been. Thanks, agent Tony Holland.”</p>\r\n\t\t\t\t\t\t<h5>Akeem Yusuf</h5>\r\n\t\t\t\t\t\t<span>CEP’s Director</span>\r\n\t\t\t\t\t\t<div class=\"clint-pic set-bg\" data-setbg=\"assets/img/review/1.jpg\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</section>\r\n\t\t<!-- Review section end-->\r\n\r\n\r\n\t\t<!-- Team section -->\r\n\t\t<!-- <section class=\"team-section spad pb-0\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"section-title text-center\">\r\n\t\t\t\t\t<h3>OUR AGENTS</h3>\r\n\t\t\t\t\t<p>Our directory of real estate agents who can help you</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-3 col-md-6\">\r\n\t\t\t\t\t\t<div class=\"team-member\">\r\n\t\t\t\t\t\t\t<div class=\"member-pic\">\r\n\t\t\t\t\t\t\t\t<img src=\"assets/img/team/1.jpg\" alt=\"#\">\r\n\t\t\t\t\t\t\t\t<div class=\"member-social\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"\"><i class=\"fa fa-facebook\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"\"><i class=\"fa fa-instagram\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"\"><i class=\"fa fa-twitter\"></i></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"member-info\">\r\n\t\t\t\t\t\t\t\t<h5>Tony Holland</h5>\r\n\t\t\t\t\t\t\t\t<span>Real Estate  Agent</span>\r\n\t\t\t\t\t\t\t\t<div class=\"member-contact\">\r\n\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-phone\"></i>(567) 666 121 2288</p>\r\n\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-envelope\"></i>tonyholland@gmail.com</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-3 col-md-6\">\r\n\t\t\t\t\t\t<div class=\"team-member\">\r\n\t\t\t\t\t\t\t<div class=\"member-pic\">\r\n\t\t\t\t\t\t\t\t<img src=\"assets/img/team/2.jpg\" alt=\"#\">\r\n\t\t\t\t\t\t\t\t<div class=\"member-social\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"\"><i class=\"fa fa-facebook\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"\"><i class=\"fa fa-instagram\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"\"><i class=\"fa fa-twitter\"></i></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"member-info\">\r\n\t\t\t\t\t\t\t\t<h5>Sasha Gordon</h5>\r\n\t\t\t\t\t\t\t\t<span>Researcher</span>\r\n\t\t\t\t\t\t\t\t<div class=\"member-contact\">\r\n\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-phone\"></i>(567) 666 121 2243</p>\r\n\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-envelope\"></i>sashagordon@gmail.com</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-3 col-md-6\">\r\n\t\t\t\t\t\t<div class=\"team-member\">\r\n\t\t\t\t\t\t\t<div class=\"member-pic\">\r\n\t\t\t\t\t\t\t\t<img src=\"assets/img/team/3.jpg\" alt=\"#\">\r\n\t\t\t\t\t\t\t\t<div class=\"member-social\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"\"><i class=\"fa fa-facebook\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"\"><i class=\"fa fa-instagram\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"\"><i class=\"fa fa-twitter\"></i></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"member-info\">\r\n\t\t\t\t\t\t\t\t<h5>Nicky Butt</h5>\r\n\t\t\t\t\t\t\t\t<span>Nicky Butt</span>\r\n\t\t\t\t\t\t\t\t<div class=\"member-contact\">\r\n\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-phone\"></i>(567) 666 121 2255</p>\r\n\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-envelope\"></i>nickybutt79@gmail.com</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-3 col-md-6\">\r\n\t\t\t\t\t\t<div class=\"team-member\">\r\n\t\t\t\t\t\t\t<div class=\"member-pic\">\r\n\t\t\t\t\t\t\t\t<img src=\"assets/img/team/4.jpg\" alt=\"#\">\r\n\t\t\t\t\t\t\t\t<div class=\"member-social\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"\"><i class=\"fa fa-facebook\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"\"><i class=\"fa fa-instagram\"></i></a>\r\n\t\t\t\t\t\t\t\t\t<a href=\"\"><i class=\"fa fa-twitter\"></i></a>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"member-info\">\r\n\t\t\t\t\t\t\t\t<h5>Gina Wesley</h5>\r\n\t\t\t\t\t\t\t\t<span>Real Estate Agent</span>\r\n\t\t\t\t\t\t\t\t<div class=\"member-contact\">\r\n\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-phone\"></i>(567) 666 121 2288</p>\r\n\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-envelope\"></i>ginawesley@gmail.com</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</section> -->\r\n\t\t<!-- Team section end-->\r\n\t</section>\r\n\t<!-- page end -->\r\n\r\n\r\n\t<!-- Clients section -->\r\n\t<div class=\"clients-section\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"clients-slider owl-carousel\">\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"https://images.africanfinancials.com/ng-wemaba-logo.png\" height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"https://www.ibm.com/innovate/branding/logoartwork/logoartwork.nsf/IBM_logoRR_pos_RGB.gif\" height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"assets/img/partner/3.png\"  height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"assets/img/partner/4.png\"  height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"assets/img/partner/5.png\"  height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- Clients section end -->\r\n\r\n\r\n\t<!-- Footer section -->\r\n\t<footer class=\"footer-section set-bg\" data-setbg=\"assets/img/footer-bg.jpg\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6 footer-widget\">\r\n\t\t\t\t\t<img src=\"assets/logop.png\" alt=\"\">\r\n\t\t\t\t\t<p>Resourceful Properties is the Real Estate Consultants firm and resulted from the need to adequately service our client’s interests in property related matters which have arisen</p>\r\n\t\t\t\t\t<div class=\"social\">\r\n            <a href=\"https://www.facebook.com/pages/category/Local-Business/Resourceful-Properties-296818430474894/\"><i class=\"fab fa-facebook-f\"></i></a>\r\n            <!-- <a href=\"\"><i class=\"fab fa-twitter\"></i></a> -->\r\n            <a href=\"https://www.instagram.com/resourceful_properties/\"><i class=\"fab fa-instagram\"></i></a>\r\n            <a href=\"https://www.linkedin.com/company/resourceful-properties/about/\"><i class=\"fab fa-linkedin\"></i></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6 footer-widget\">\r\n\t\t\t\t\t<div class=\"contact-widget\">\r\n\t\t\t\t\t\t<h5 class=\"fw-title\">CONTACT US</h5>\r\n\t\t\t\t\t\t<p><i class=\"fa fa-map-marker\"></i>64, AWOLOWO ROAD\tSOUTH WEST IKOYI LAGOS\r\n\t\t\t\t\t\t\t </p>\r\n\t\t\t\t\t\t<p><i class=\"fa fa-phone\"></i>+234-(0)803-473- 8744</p>\r\n\t\t\t\t\t\t<p><i class=\"fa fa-envelope\"></i>kunledavids@yahoo.com</p>\r\n\t\t\t\t\t\t<p><i class=\"fas fa-clock\"></i>Mon - Sat, 08 AM - 06 PM</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6 footer-widget\">\r\n\t\t\t\t\t<div class=\"double-menu-widget\">\r\n\t\t\t\t\t\t<h5 class=\"fw-title\">POPULAR PLACES</h5>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Lagos</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Ibadan</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Abuja</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Calabar</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Kano</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Lekki</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Victoria Island</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Yaba</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">SUrulere</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Lagos Island</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6  footer-widget\">\r\n\t\t\t\t\t<div class=\"newslatter-widget\">\r\n\t\t\t\t\t\t<h5 class=\"fw-title\">NEWSLETTER</h5>\r\n\t\t\t\t\t\t<p>Subscribe your email to get the latest news and new offer also discount</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"footer-bottom\">\r\n\t\t\t\t<div class=\"footer-nav\">\r\n\t\t\t\t\t<ul>\r\n            <li><a [routerLink]=\"['../dashboard']\">HOME</a></li>\r\n            <li><a [routerLink]=\"['../employee']\">FEATURED LISTING</a></li>\r\n            <li><a [routerLink]=\"['../about']\">ABOUT US</a></li>\r\n            <li><a [routerLink]=\"['../pages']\">PAGES</a></li>\r\n            <li><a [routerLink]=\"['../blog']\">BLOG</a></li>\r\n            <li><a [routerLink]=\"['../contact']\">CONTACT</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"copyright\">\r\n\t\t\t\t\t<p>\r\nCopyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved\r\n</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>\r\n\t<!-- Footer section end -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@component/blog/blog.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@component/blog/blog.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\r\n\t<!-- Header section -->\r\n\r\n\t<header class=\"header-section\">\r\n\t\t<div class=\"header-top\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-6 header-top-left\">\r\n\t\t\t\t\t\t<div class=\"top-info\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-phone\"></i>\r\n\t\t\t\t\t\t\t+234-01- 873-0204\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"top-info\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-envelope\"></i>\r\n\t\t\t\t\t\t\tkunledavids@yahoo.com\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-6 text-lg-right header-top-right\">\r\n\t\t\t\t\t\t<div class=\"top-social\">\r\n\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/pages/category/Local-Business/Resourceful-Properties-296818430474894/\"><i class=\"fab fa-facebook-f\"></i></a>\r\n\t\t\t\t\t\t\t<!-- <a href=\"\"><i class=\"fab fa-twitter\"></i></a> -->\r\n\t\t\t\t\t\t\t<a href=\"https://www.instagram.com/resourceful_properties/\"><i class=\"fab fa-instagram\"></i></a>\r\n\t\t\t\t\t\t\t<a href=\"https://www.linkedin.com/company/resourceful-properties/about/\"><i class=\"fab fa-linkedin\"></i></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- <div class=\"user-panel\">\r\n\t\t\t\t\t\t\t<a href=\"\"><i class=\"fas fa-user-circle\"></i> Register</a>\r\n\t\t\t\t\t\t\t<a href=\"\"><i class=\"fas fa-sign-in-alt\"></i> Login</a>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t<div class=\"rowers\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"site-logo\"><img src=\"assets/logop.png\" alt=\"\"></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-8\">\r\n\t\t\t\t\t<div class=\"site-navbar\">\r\n\t\t\t\t\t\t<div class=\"nav-switch\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-bars\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ul class=\"main-menu\">\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../dashboard']\">HOME</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../employee']\">FEATURED LISTING</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../about']\">ABOUT US</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../pages']\">PAGES</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../blog']\">BLOG</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../contact']\">CONTACT</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</header>\r\n\t<!-- Header section end -->\r\n\r\n\r\n\t<!-- Page top section -->\r\n\t<section class=\"page-top-section set-bg\" data-setbg=\"assets/img/page-top-bg.jpg\">\r\n\t\t<div class=\"container text-white\">\r\n\t\t\t<h2>Blog grid</h2>\r\n\t\t</div>\r\n\t</section>\r\n\t<!--  Page top end -->\r\n\r\n\t<!-- Breadcrumb -->\r\n\t<div class=\"site-breadcrumb\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<a href=\"\"><i class=\"fa fa-home\"></i>Home</a>\r\n\t\t\t<span><i class=\"fa fa-angle-right\"></i>Blog Grid</span>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- page -->\r\n\t<section class=\"page-section blog-page\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<!-- blog post -->\r\n\t\t\t\t<div class=\"col-lg-4 col-md-6 blog-item\" *ngFor=\"let item of blog; let index =i;\">\r\n\t\t\t\t\t<img (click)=\"blogy(item)\" src=\"{{item.image}}\" alt=\"\">\r\n\t\t\t\t\t<h5><a (click)=\"blogy(item)\">{{item.title}}</a></h5>\r\n\t\t\t\t\t<div class=\"blog-meta\">\r\n\t\t\t\t\t\t<span><i class=\"fa fa-user\"></i>{{item.posteduser}}</span>\r\n\t\t\t\t\t\t<span><i class=\"fas fa-clock\"></i>{{item.registered | date}}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"site-pagination\">\r\n\t\t\t\t<span>1</span>\r\n\t\t\t\t<a href=\"#\">2</a>\r\n\t\t\t\t<a href=\"#\">3</a>\r\n\t\t\t\t<a href=\"#\"><i class=\"fa fa-angle-right\"></i></a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\t<!-- page end -->\r\n\r\n\r\n\t<!-- Clients section -->\r\n\t<div class=\"clients-section\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"clients-slider owl-carousel\">\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"https://images.africanfinancials.com/ng-wemaba-logo.png\" height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"https://www.ibm.com/innovate/branding/logoartwork/logoartwork.nsf/IBM_logoRR_pos_RGB.gif\" height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"assets/img/partner/3.png\"  height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"assets/img/partner/4.png\"  height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"assets/img/partner/5.png\"  height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- Clients section end -->\r\n\r\n\r\n\t<footer class=\"footer-section set-bg\" data-setbg=\"assets/img/footer-bg.jpg\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6 footer-widget\">\r\n\t\t\t\t\t<img src=\"assets/logop.png\" alt=\"\">\r\n\t\t\t\t\t<p>Resourceful Properties is the Real Estate Consultants firm and resulted from the need to adequately service our client’s interests in property related matters which have arisen</p>\r\n\t\t\t\t\t<div class=\"social\">\r\n            <a href=\"https://www.facebook.com/pages/category/Local-Business/Resourceful-Properties-296818430474894/\"><i class=\"fab fa-facebook-f\"></i></a>\r\n            <!-- <a href=\"\"><i class=\"fab fa-twitter\"></i></a> -->\r\n            <a href=\"https://www.instagram.com/resourceful_properties/\"><i class=\"fab fa-instagram\"></i></a>\r\n            <a href=\"https://www.linkedin.com/company/resourceful-properties/about/\"><i class=\"fab fa-linkedin\"></i></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6 footer-widget\">\r\n\t\t\t\t\t<div class=\"contact-widget\">\r\n\t\t\t\t\t\t<h5 class=\"fw-title\">CONTACT US</h5>\r\n\t\t\t\t\t\t<p><i class=\"fa fa-map-marker\"></i>64, AWOLOWO ROAD\tSOUTH WEST IKOYI LAGOS\r\n\t\t\t\t\t\t\t </p>\r\n\t\t\t\t\t\t<p><i class=\"fa fa-phone\"></i>+234-(0)803-473- 8744</p>\r\n\t\t\t\t\t\t<p><i class=\"fa fa-envelope\"></i>kunledavids@yahoo.com</p>\r\n\t\t\t\t\t\t<p><i class=\"fas fa-clock\"></i>Mon - Sat, 08 AM - 06 PM</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6 footer-widget\">\r\n\t\t\t\t\t<div class=\"double-menu-widget\">\r\n\t\t\t\t\t\t<h5 class=\"fw-title\">POPULAR PLACES</h5>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Lagos</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Ibadan</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Abuja</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Calabar</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Kano</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Lekki</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Victoria Island</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Yaba</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">SUrulere</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Lagos Island</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6  footer-widget\">\r\n\t\t\t\t\t<div class=\"newslatter-widget\">\r\n\t\t\t\t\t\t<h5 class=\"fw-title\">NEWSLETTER</h5>\r\n\t\t\t\t\t\t<p>Subscribe your email to get the latest news and new offer also discount</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"footer-bottom\">\r\n\t\t\t\t<div class=\"footer-nav\">\r\n\t\t\t\t\t<ul>\r\n            <li><a [routerLink]=\"['../dashboard']\">HOME</a></li>\r\n            <li><a [routerLink]=\"['../employee']\">FEATURED LISTING</a></li>\r\n            <li><a [routerLink]=\"['../about']\">ABOUT US</a></li>\r\n            <li><a [routerLink]=\"['../pages']\">PAGES</a></li>\r\n            <li><a [routerLink]=\"['../blog']\">BLOG</a></li>\r\n            <li><a [routerLink]=\"['../contact']\">CONTACT</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"copyright\">\r\n\t\t\t\t\t<p>\r\nCopyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved\r\n</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@component/contact/contact.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@component/contact/contact.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t\r\n\t<!-- Header section -->\r\n\r\n\t<header class=\"header-section\">\r\n\t\t<div class=\"header-top\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-6 header-top-left\">\r\n\t\t\t\t\t\t<div class=\"top-info\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-phone\"></i>\r\n\t\t\t\t\t\t\t+234-01- 873-0204\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"top-info\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-envelope\"></i>\r\n\t\t\t\t\t\t\tkunledavids@yahoo.com\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-6 text-lg-right header-top-right\">\r\n\t\t\t\t\t\t<div class=\"top-social\">\r\n\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/pages/category/Local-Business/Resourceful-Properties-296818430474894/\"><i class=\"fab fa-facebook-f\"></i></a>\r\n\t\t\t\t\t\t\t<!-- <a href=\"\"><i class=\"fab fa-twitter\"></i></a> -->\r\n\t\t\t\t\t\t\t<a href=\"https://www.instagram.com/resourceful_properties/\"><i class=\"fab fa-instagram\"></i></a>\r\n\t\t\t\t\t\t\t<a href=\"https://www.linkedin.com/company/resourceful-properties/about/\"><i class=\"fab fa-linkedin\"></i></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- <div class=\"user-panel\">\r\n\t\t\t\t\t\t\t<a href=\"\"><i class=\"fas fa-user-circle\"></i> Register</a>\r\n\t\t\t\t\t\t\t<a href=\"\"><i class=\"fas fa-sign-in-alt\"></i> Login</a>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t<div class=\"rowers\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"site-logo\"><img src=\"assets/logop.png\" alt=\"\"></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-8\">\r\n\t\t\t\t\t<div class=\"site-navbar\">\r\n\t\t\t\t\t\t<div class=\"nav-switch\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-bars\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ul class=\"main-menu\">\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../dashboard']\">HOME</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../employee']\">FEATURED LISTING</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../about']\">ABOUT US</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../pages']\">PAGES</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../blog']\">BLOG</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../contact']\">CONTACT</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</header>\r\n\t<!-- Header section end -->\r\n\r\n\r\n\t<!-- Page top section -->\r\n\t<section class=\"page-top-section set-bg\" data-setbg=\"assets/img/page-top-bg.jpg\">\r\n\t\t<div class=\"container text-white\">\r\n\t\t\t<h2>Contact grid</h2>\r\n\t\t</div>\r\n\t</section>\r\n\t<!--  Page top end -->\r\n\r\n\t<!-- Breadcrumb -->\r\n\t<div class=\"site-breadcrumb\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<a href=\"\"><i class=\"fa fa-home\"></i>Home</a>\r\n\t\t\t<span><i class=\"fa fa-angle-right\"></i>Contact Grid</span>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- page -->\r\n\t<section class=\"page-section blog-page\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<!-- <div id=\"map-canvas\"></div> -->\r\n\t\t\t<div class=\"contact-info-warp\">\r\n\t\t\t\t<p><i class=\"fa fa-map-marker\"></i>64, AWOLOWO ROAD\r\n\t\t\t\t\tSOUTH WEST\r\n\t\t\t\t\tIKOYI \r\n\t\t\t\t\tLAGOS.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t<p><i class=\"fa fa-envelope\"></i>kunledavids@yahoo.com</p>\r\n\t\t\t\t<p><i class=\"fa fa-phone\"></i>+234-01- 873-0204</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t<img src=\"assets/img/contact.jpg\" alt=\"\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t<div class=\"contact-right\">\r\n\t\t\t\t\t\t<div class=\"section-title\">\r\n\t\t\t\t\t\t\t<h3>Get in touch</h3>\r\n\t\t\t\t\t\t\t<p>Browse houses and flats for sale and to rent in your area</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<form class=\"contact-form\">\r\n\t\t\t\t\t\t\t<div class=\"row\" [formGroup]=\"Contact\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<input formControlName=\"name\" type=\"text\" placeholder=\"Your name\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<input formControlName=\"email\" type=\"text\" placeholder=\"Your email\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t<textarea formControlName=\"message\" placeholder=\"Your message\"></textarea>\r\n\t\t\t\t\t\t\t\t\t<button class=\"site-btn\" (click)=\"createContact()\">SUBMIT NOW</button>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\t<!-- page end -->\r\n\r\n\r\n\t<!-- Clients section -->\r\n\t<div class=\"clients-section\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"clients-slider owl-carousel\">\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"https://images.africanfinancials.com/ng-wemaba-logo.png\" height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"https://www.ibm.com/innovate/branding/logoartwork/logoartwork.nsf/IBM_logoRR_pos_RGB.gif\" height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"assets/img/partner/3.png\"  height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"assets/img/partner/4.png\"  height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"assets/img/partner/5.png\"  height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- Clients section end -->\r\n\r\n\r\n\t<footer class=\"footer-section set-bg\" data-setbg=\"assets/img/footer-bg.jpg\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6 footer-widget\">\r\n\t\t\t\t\t<img src=\"assets/logop.png\" alt=\"\">\r\n\t\t\t\t\t<p>Resourceful Properties is the Real Estate Consultants firm and resulted from the need to adequately service our client’s interests in property related matters which have arisen</p>\r\n\t\t\t\t\t<div class=\"social\">\r\n            <a href=\"https://www.facebook.com/pages/category/Local-Business/Resourceful-Properties-296818430474894/\"><i class=\"fab fa-facebook-f\"></i></a>\r\n            <!-- <a href=\"\"><i class=\"fab fa-twitter\"></i></a> -->\r\n            <a href=\"https://www.instagram.com/resourceful_properties/\"><i class=\"fab fa-instagram\"></i></a>\r\n            <a href=\"https://www.linkedin.com/company/resourceful-properties/about/\"><i class=\"fab fa-linkedin\"></i></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6 footer-widget\">\r\n\t\t\t\t\t<div class=\"contact-widget\">\r\n\t\t\t\t\t\t<h5 class=\"fw-title\">CONTACT US</h5>\r\n\t\t\t\t\t\t<p><i class=\"fa fa-map-marker\"></i>64, AWOLOWO ROAD\tSOUTH WEST IKOYI LAGOS\r\n\t\t\t\t\t\t\t </p>\r\n\t\t\t\t\t\t<p><i class=\"fa fa-phone\"></i>+234-(0)803-473- 8744</p>\r\n\t\t\t\t\t\t<p><i class=\"fa fa-envelope\"></i>kunledavids@yahoo.com</p>\r\n\t\t\t\t\t\t<p><i class=\"fas fa-clock\"></i>Mon - Sat, 08 AM - 06 PM</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6 footer-widget\">\r\n\t\t\t\t\t<div class=\"double-menu-widget\">\r\n\t\t\t\t\t\t<h5 class=\"fw-title\">POPULAR PLACES</h5>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Lagos</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Ibadan</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Abuja</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Calabar</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Kano</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Lekki</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Victoria Island</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Yaba</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">SUrulere</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Lagos Island</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6  footer-widget\">\r\n\t\t\t\t\t<div class=\"newslatter-widget\">\r\n\t\t\t\t\t\t<h5 class=\"fw-title\">NEWSLETTER</h5>\r\n\t\t\t\t\t\t<p>Subscribe your email to get the latest news and new offer also discount</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"footer-bottom\">\r\n\t\t\t\t<div class=\"footer-nav\">\r\n\t\t\t\t\t<ul>\r\n            <li><a [routerLink]=\"['../dashboard']\">HOME</a></li>\r\n            <li><a [routerLink]=\"['../employee']\">FEATURED LISTING</a></li>\r\n            <li><a [routerLink]=\"['../about']\">ABOUT US</a></li>\r\n            <li><a [routerLink]=\"['../pages']\">PAGES</a></li>\r\n            <li><a [routerLink]=\"['../blog']\">BLOG</a></li>\r\n            <li><a [routerLink]=\"['../contact']\">CONTACT</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"copyright\">\r\n\t\t\t\t\t<p>\r\nCopyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved\r\n</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@component/dashboard/dashboard.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@component/dashboard/dashboard.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"preloder\">\r\n  <div class=\"loader\"></div>\r\n</div> -->\r\n\r\n<header class=\"header-section\">\r\n  <div class=\"header-top\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 header-top-left\">\r\n          <div class=\"top-info\">\r\n            <i class=\"fa fa-phone\"></i>\r\n            +234-01- 873-0204\r\n          </div>\r\n          <div class=\"top-info\">\r\n            <i class=\"fa fa-envelope\"></i>\r\n            kunledavids@yahoo.com\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 text-lg-right header-top-right\">\r\n          <div class=\"top-social\">\r\n            <a href=\"https://www.facebook.com/pages/category/Local-Business/Resourceful-Properties-296818430474894/\"><i class=\"fab fa-facebook-f\"></i></a>\r\n            <!-- <a href=\"\"><i class=\"fab fa-twitter\"></i></a> -->\r\n            <a href=\"https://www.instagram.com/resourceful_properties/\"><i class=\"fab fa-instagram\"></i></a>\r\n            <a href=\"https://www.linkedin.com/company/resourceful-properties/about/\"><i class=\"fab fa-linkedin\"></i></a>\r\n          </div>\r\n          <!-- <div class=\"user-panel\">\r\n            <a href=\"\"><i class=\"fas fa-user-circle\"></i> Register</a>\r\n            <a href=\"\"><i class=\"fas fa-sign-in-alt\"></i> Login</a>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-4\">\r\n        <div class=\"rowers\">\r\n          <a href=\"#\" class=\"site-logo\"><img src=\"assets/logop.png\" alt=\"\"></a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <div class=\"site-navbar\">\r\n          <div class=\"nav-switch\">\r\n            <i class=\"fa fa-bars\"></i>\r\n          </div>\r\n          <ul class=\"main-menu\">\r\n            <li><a [routerLink]=\"['../dashboard']\">HOME</a></li>\r\n            <li><a [routerLink]=\"['../employee']\">FEATURED LISTING</a></li>\r\n            <li><a [routerLink]=\"['../about']\">ABOUT US</a></li>\r\n            <li><a [routerLink]=\"['../pages']\">PAGES</a></li>\r\n            <li><a [routerLink]=\"['../blog']\">BLOG</a></li>\r\n            <li><a [routerLink]=\"['../contact']\">CONTACT</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n  <mdb-carousel class=\"hero-section set-bg\"  [isControls]=\"false\" [animation]=\"'slide'\">\r\n    <mdb-carousel-item>\r\n      <div class=\"view w-100\">\r\n        <img src=\"assets/img/bg.jpg\" alt=\"First slide\">\r\n      </div>\r\n      <div class=\"carousel-caption\">\r\n        <h2 class=\"h3-responsive\" style=\"color: white; font-weight: bolder;\">Find your place with our local life style</h2>\r\n        <p style=\"color: white;\">Search real estate property records, houses, condos, land and more on resourcefulproperties.com®.<br>Find property info from the most comprehensive source data.</p>\r\n        <a [routerLink]=\"['../employee']\"  style=\"cursor: pointer;\" class=\"site-btn\">VIEW DETAIL</a>\r\n      </div>\r\n    </mdb-carousel-item>\r\n    <mdb-carousel-item>\r\n      <div class=\"view w-100\">\r\n        <img class=\"d-block w-100\" src=\"assets/home3.jpg\"alt=\"Second slide\">\r\n      </div>\r\n      <div class=\"carousel-caption\">\r\n        <h2 class=\"h3-responsive\"style=\"color: white; font-weight: bolder;\">Find your place with our local life style</h2>\r\n        <p style=\"color: white;\">Search real estate property records, houses, condos, land and more on resourcefulproperties.com®.<br>Find property info from the most comprehensive source data.</p>\r\n        <a [routerLink]=\"['../employee']\"  style=\"cursor: pointer;\" class=\"site-btn\">VIEW DETAIL</a>\r\n      </div>\r\n    </mdb-carousel-item>\r\n    <mdb-carousel-item>\r\n      <div class=\"view w-100\">\r\n        <img class=\"d-block w-100\" src=\"assets/home21.jpg\" alt=\"Third slide\">\r\n      </div>\r\n      <div class=\"carousel-caption\">\r\n        <h2 class=\"h3-responsive\" style=\"color: white; font-weight: bolder;\">Find your place with our local life style</h2>\r\n        <p style=\"color: white;\">Search real estate property records, houses, condos, land and more on resourcefulproperties.com®.<br>Find property info from the most comprehensive source data.</p>\r\n        <a [routerLink]=\"['../employee']\" class=\"site-btn\">VIEW DETAIL</a>\r\n      </div>\r\n    </mdb-carousel-item>\r\n  </mdb-carousel>\r\n\r\n<!-- <div class=\"filter-search\">\r\n  <div class=\"container\">\r\n    <form class=\"filter-form\">\r\n      <input type=\"text\" placeholder=\"Enter a street name, address number or keyword\">\r\n      <select>\r\n        <option value=\"City\">City</option>\r\n      </select>\r\n      <select>\r\n        <option value=\"City\">State</option>\r\n      </select>\r\n      <button class=\"site-btn fs-submit\">SEARCH</button>\r\n    </form>\r\n  </div>\r\n</div> -->\r\n\r\n <section class=\"properties-section spad\">\r\n  <div class=\"container\">\r\n    <div class=\"section-title text-center\">\r\n      <h3>RECENT PROPERTIES</h3>\r\n      <p>Discover how much the latest properties have been sold for</p>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\" *ngFor=\"let item of property | slice:0:4;\">\r\n        <div class=\"propertie-item set-bg\" [style.background-image]=\"sanitizeImage(item.firstimage)\">\r\n          <div class=\"sale-notic\">For {{item.feature}}</div>\r\n          <div class=\"propertie-info text-white\">\r\n            <div class=\"info-warp\">\r\n              <h5>{{item.name}}</h5>\r\n              <p><i class=\"fa fa-map-marker\"></i> {{item.city}},     {{item.state}}</p>\r\n            </div>\r\n            <div (click)=\"view(item)\" style=\"cursor: pointer;\" class=\"price\">{{item.amount | currency: \"₦\"}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\t <section class=\"services-section spad set-bg\" data-setbg=\"assets/service-bg.jpg\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t<img src=\"assets/service.jpg\" alt=\"\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-5 offset-lg-1 pl-lg-0\">\r\n\t\t\t\t\t<div class=\"section-title text-white\">\r\n\t\t\t\t\t\t<h3>OUR SERVICES</h3>\r\n\t\t\t\t\t\t<p>We provide the perfect service for </p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"services\">\r\n\t\t\t\t\t\t<div class=\"service-item\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-comments\"></i>\r\n\t\t\t\t\t\t\t<div class=\"service-text\">\r\n\t\t\t\t\t\t\t\t<h5>LEASE/LETTINGS</h5>\r\n                <p>We assist clients in seeking for responsible tenants for their house/properties, while on the other hand we assist prospective tenants in sourcing properties which suit their request/demand, working within the client’s budget.</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"service-item\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-home\"></i>\r\n\t\t\t\t\t\t\t<div class=\"service-text\">\r\n\t\t\t\t\t\t\t\t<h5>SALES</h5>\r\n\t\t\t\t\t\t\t\t<p>In this area, we act on behalf of vendors or purchasers as the case maybe, while ensuring that our client get a fair deal at all times. Where however we act for both parties, we are minded to maintain an equitable balance between the contending interests.</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"service-item\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-briefcase\"></i>\r\n\t\t\t\t\t\t\t<div class=\"service-text\">\r\n\t\t\t\t\t\t\t\t<h5>FEASIBILITY / VIABILITY STUDIES ADVICE</h5>\r\n\t\t\t\t\t\t\t\t<p>We carry out feasibility and viability studies for projects and developments ranging from private residential buildings and commercial buildings to large industrial estates. The firm is able to carry out project appraisals and consequently offer advice as to options open to Project initiators and Developers alike.</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n  </section>\r\n<!--   \r\n  \t<section class=\"feature-section spad\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"section-title text-center\">\r\n\t\t\t\t<h3>Featured Listings</h3>\r\n\t\t\t\t<p>Browse houses and flats for sale and to rent in your area</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-4 col-md-6\">\r\n\t\t\t\t\t<div class=\"feature-item\">\r\n\t\t\t\t\t\t<div class=\"feature-pic set-bg\" data-setbg=\"assets/img/feature/1.jpg\">\r\n\t\t\t\t\t\t\t<div class=\"sale-notic\">FOR SALE</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"feature-text\">\r\n\t\t\t\t\t\t\t<div class=\"text-center feature-title\">\r\n\t\t\t\t\t\t\t\t<h5>1963 S Crescent Heights Blvd</h5>\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-map-marker\"></i> Los Angeles, CA 90034</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"room-info-warp\">\r\n\t\t\t\t\t\t\t\t<div class=\"room-info\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-left\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-th-large\"></i> 800 Square foot</p>\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-bed\"></i> 10 Bedrooms</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-right\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-car\"></i> 2 Garages</p>\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-bath\"></i> 6 Bathrooms</p>\r\n\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"room-info\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-left\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-user\"></i> Tony Holland</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-right\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-clock\"></i> 1 days ago</p>\r\n\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"room-price\">$1,200,000</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 col-md-6\">\r\n\t\t\t\t\t<div class=\"feature-item\">\r\n\t\t\t\t\t\t<div class=\"feature-pic set-bg\" data-setbg=\"assets/img/feature/2.jpg\">\r\n\t\t\t\t\t\t\t<div class=\"sale-notic\">FOR SALE</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"feature-text\">\r\n\t\t\t\t\t\t\t<div class=\"text-center feature-title\">\r\n\t\t\t\t\t\t\t\t<h5>305 North Palm Drive</h5>\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-map-marker\"></i> Beverly Hills, CA 90210</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"room-info-warp\">\r\n\t\t\t\t\t\t\t\t<div class=\"room-info\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-left\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-th-large\"></i> 1500 Square foot</p>\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-bed\"></i> 16 Bedrooms</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-right\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-car\"></i> 2 Garages</p>\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-bath\"></i> 8 Bathrooms</p>\r\n\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"room-info\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-left\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-user\"></i> Gina Wesley</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-right\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-clock\"></i> 1 days ago</p>\r\n\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"room-price\">$4,500,000</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 col-md-6\">\r\n\t\t\t\t\r\n\t\t\t\t\t<div class=\"feature-item\">\r\n\t\t\t\t\t\t<div class=\"feature-pic set-bg\" data-setbg=\"assets/img/feature/3.jpg\">\r\n\t\t\t\t\t\t\t<div class=\"rent-notic\">FOR Rent</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"feature-text\">\r\n\t\t\t\t\t\t\t<div class=\"text-center feature-title\">\r\n\t\t\t\t\t\t\t\t<h5>305 North Palm Drive</h5>\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-map-marker\"></i> Beverly Hills, CA 90210</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"room-info-warp\">\r\n\t\t\t\t\t\t\t\t<div class=\"room-info\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-left\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-th-large\"></i> 1500 Square foot</p>\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-bed\"></i> 16 Bedrooms</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-right\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-car\"></i> 2 Garages</p>\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-bath\"></i> 8 Bathrooms</p>\r\n\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"room-info\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-left\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-user\"></i> Gina Wesley</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-right\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-clock\"></i> 1 days ago</p>\r\n\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"room-price\">$2,500/month</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 col-md-6\">\r\n\t\t\r\n\t\t\t\t\t<div class=\"feature-item\">\r\n\t\t\t\t\t\t<div class=\"feature-pic set-bg\" data-setbg=\"assets/img/feature/4.jpg\">\r\n\t\t\t\t\t\t\t<div class=\"sale-notic\">FOR SALE</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"feature-text\">\r\n\t\t\t\t\t\t\t<div class=\"text-center feature-title\">\r\n\t\t\t\t\t\t\t\t<h5>28 Quaker Ridge Road, Manhasset</h5>\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-map-marker\"></i> 28 Quaker Ridge Road, Manhasset</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"room-info-warp\">\r\n\t\t\t\t\t\t\t\t<div class=\"room-info\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-left\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-th-large\"></i> 1200 Square foot</p>\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-bed\"></i> 12 Bedrooms</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-right\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-car\"></i> 3 Garages</p>\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-bath\"></i> 8 Bathrooms</p>\r\n\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"room-info\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-left\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-user\"></i> Sasha Gordon </p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-right\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-clock\"></i> 8 days ago</p>\r\n\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"room-price\">$5,600,000</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 col-md-6\">\r\n\t\t\t\r\n\t\t\t\t\t<div class=\"feature-item\">\r\n\t\t\t\t\t\t<div class=\"feature-pic set-bg\" data-setbg=\"assets/img/feature/5.jpg\">\r\n\t\t\t\t\t\t\t<div class=\"rent-notic\">FOR Rent</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"feature-text\">\r\n\t\t\t\t\t\t\t<div class=\"text-center feature-title\">\r\n\t\t\t\t\t\t\t\t<h5>Sofi Berryessa 750 N King Road</h5>\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-map-marker\"></i> San Jose, CA 95133</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"room-info-warp\">\r\n\t\t\t\t\t\t\t\t<div class=\"room-info\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-left\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-th-large\"></i> 500 Square foot</p>\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-bed\"></i> 4 Bedrooms</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-right\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-car\"></i> 1 Garages</p>\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-bath\"></i> 2 Bathrooms</p>\r\n\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"room-info\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-left\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-user\"></i> Gina Wesley</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-right\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-clock\"></i> 8 days ago</p>\r\n\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"room-price\">$1,600/month</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-4 col-md-6\">\r\n\t\t\t\t\r\n\t\t\t\t\t<div class=\"feature-item\">\r\n\t\t\t\t\t\t<div class=\"feature-pic set-bg\" data-setbg=\"assets/img/feature/6.jpg\">\r\n\t\t\t\t\t\t\t<div class=\"sale-notic\">FOR SALE</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"feature-text\">\r\n\t\t\t\t\t\t\t<div class=\"text-center feature-title\">\r\n\t\t\t\t\t\t\t\t<h5>1203 Orren Street, Northeast</h5>\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-map-marker\"></i> Washington, DC 20002</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"room-info-warp\">\r\n\t\t\t\t\t\t\t\t<div class=\"room-info\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-left\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-th-large\"></i> 700 Square foot</p>\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-bed\"></i> 7 Bedrooms</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-right\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-car\"></i> 1 Garages</p>\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-bath\"></i> 7 Bathrooms</p>\r\n\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"room-info\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-left\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fa fa-user\"></i> Sasha Gordon </p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"rf-right\">\r\n\t\t\t\t\t\t\t\t\t\t<p><i class=\"fas fa-clock\"></i> 8 days ago</p>\r\n\t\t\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a href=\"#\" class=\"room-price\">$1,600,000</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n  </section> -->\r\n  \r\n  <section class=\"feature-category-section spad\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"section-title text-center\">\r\n\t\t\t\t<h3>LOOKING PROPERTY</h3>\r\n\t\t\t\t<p>What kind of property are you looking for? We will help you</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6 f-cata\">\r\n\t\t\t\t\t<img src=\"assets/img/feature-cate/1.jpg\" alt=\"\">\r\n\t\t\t\t\t<h5>Apartment for rent</h5>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6 f-cata\">\r\n\t\t\t\t\t<img src=\"assets/img/feature-cate/2.jpg\" alt=\"\">\r\n\t\t\t\t\t<h5>Family Home</h5>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6 f-cata\">\r\n\t\t\t\t\t<img src=\"assets/img/feature-cate/3.jpg\" alt=\"\">\r\n\t\t\t\t\t<h5>Resort Villas</h5>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6 f-cata\">\r\n\t\t\t\t\t<img src=\"assets/img/feature-cate/4.jpg\" alt=\"\">\r\n\t\t\t\t\t<h5>Office Building</h5>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n  </section>\r\n\r\n\t<!-- Review section -->\r\n\t<section class=\"review-section set-bg\" data-setbg=\"assets/img/review-bg.jpg\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"review-slider owl-carousel\">\r\n\t\t\t\t<div class=\"review-item text-white\">\r\n\t\t\t\t\t<div class=\"rating\">\r\n\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p>“Resourceful Properties was quick to understand my needs and steer me in the right direction. Their professionalism and warmth made the process of finding a suitable home a lot less stressful than it could have been. Thanks, agent Tony Holland.”</p>\r\n\t\t\t\t\t<h5>Adeogo Adejana</h5>\r\n\t\t\t\t\t<span>CEP’s Director</span>\r\n\t\t\t\t\t<div class=\"clint-pic set-bg\" data-setbg=\"assets/img/review/1.jpg\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"review-item text-white\">\r\n\t\t\t\t\t<div class=\"rating\">\r\n\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p>“Resourceful Properties was quick to understand my needs and steer me in the right direction. Their professionalism and warmth made the process of finding a suitable home a lot less stressful than it could have been. Thanks, agent Tony Holland.”</p>\r\n\t\t\t\t\t<h5>Kayode Mustapha</h5>\r\n\t\t\t\t\t<span>CEP’s Director</span>\r\n\t\t\t\t\t<div class=\"clint-pic set-bg\" data-setbg=\"assets/img/review/1.jpg\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"review-item text-white\">\r\n\t\t\t\t\t<div class=\"rating\">\r\n\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<p>“Resourceful Properties was quick to understand my needs and steer me in the right direction. Their professionalism and warmth made the process of finding a suitable home a lot less stressful than it could have been. Thanks, agent Tony Holland.”</p>\r\n\t\t\t\t\t<h5>Akeem Yusuf</h5>\r\n\t\t\t\t\t<span>CEP’s Director</span>\r\n\t\t\t\t\t<div class=\"clint-pic set-bg\" data-setbg=\"assets/img/review/1.jpg\"></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\t<!-- Review section end-->\r\n\r\n\r\n\t<!-- Blog section -->\r\n\t<section class=\"blog-section spad\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"section-title text-center\">\r\n\t\t\t\t<h3>LATEST NEWS</h3>\r\n\t\t\t\t<p>Real estate news headlines around the world.</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<!-- blog post -->\r\n\t\t\t\t<div class=\"col-lg-4 col-md-6 blog-item\" *ngFor=\"let item of blog | slice:0:3; let index =i;\">\r\n\t\t\t\t\t<img  (click)=\"blogy(item)\"  style=\"cursor: pointer;\" src=\"{{item.image}}\" alt=\"\">\r\n\t\t\t\t\t<h5><a (click)=\"blogy(item)\"  style=\"cursor: pointer;\">{{item.title}}</a></h5>\r\n\t\t\t\t\t<div class=\"blog-meta\">\r\n\t\t\t\t\t\t<span><i class=\"fa fa-user\"></i>{{item.posteduser}}</span>\r\n\t\t\t\t\t\t<span><i class=\"fas fa-clock\"></i>{{item.registered | date}}</span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\t<!-- Blog section end -->\r\n\t<div class=\"clients-section\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"clients-slider owl-carousel\">\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"https://images.africanfinancials.com/ng-wemaba-logo.png\" height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"https://www.ibm.com/innovate/branding/logoartwork/logoartwork.nsf/IBM_logoRR_pos_RGB.gif\" height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"assets/img/partner/3.png\"  height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"assets/img/partner/4.png\"  height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"assets/img/partner/5.png\"  height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- Footer section -->\r\n\t<footer class=\"footer-section set-bg\" data-setbg=\"assets/img/footer-bg.jpg\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6 footer-widget\">\r\n\t\t\t\t\t<img src=\"assets/logop.png\" alt=\"\">\r\n\t\t\t\t\t<p>Resourceful Properties is the Real Estate Consultants firm and resulted from the need to adequately service our client’s interests in property related matters which have arisen</p>\r\n\t\t\t\t\t<div class=\"social\">\r\n            <a href=\"https://www.facebook.com/pages/category/Local-Business/Resourceful-Properties-296818430474894/\"><i class=\"fab fa-facebook-f\"></i></a>\r\n            <!-- <a href=\"\"><i class=\"fab fa-twitter\"></i></a> -->\r\n            <a href=\"https://www.instagram.com/resourceful_properties/\"><i class=\"fab fa-instagram\"></i></a>\r\n            <a href=\"https://www.linkedin.com/company/resourceful-properties/about/\"><i class=\"fab fa-linkedin\"></i></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6 footer-widget\">\r\n\t\t\t\t\t<div class=\"contact-widget\">\r\n\t\t\t\t\t\t<h5 class=\"fw-title\">CONTACT US</h5>\r\n\t\t\t\t\t\t<p><i class=\"fa fa-map-marker\"></i>64, AWOLOWO ROAD\tSOUTH WEST IKOYI LAGOS\r\n\t\t\t\t\t\t\t </p>\r\n\t\t\t\t\t\t<p><i class=\"fa fa-phone\"></i>+234-(0)803-473- 8744</p>\r\n\t\t\t\t\t\t<p><i class=\"fa fa-envelope\"></i>kunledavids@yahoo.com</p>\r\n\t\t\t\t\t\t<p><i class=\"fas fa-clock\"></i>Mon - Sat, 08 AM - 06 PM</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6 footer-widget\">\r\n\t\t\t\t\t<div class=\"double-menu-widget\">\r\n\t\t\t\t\t\t<h5 class=\"fw-title\">POPULAR PLACES</h5>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Lagos</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Ibadan</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Abuja</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Calabar</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Kano</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Lekki</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Victoria Island</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Yaba</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">SUrulere</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Lagos Island</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6  footer-widget\">\r\n\t\t\t\t\t<div class=\"newslatter-widget\">\r\n\t\t\t\t\t\t<h5 class=\"fw-title\">NEWSLETTER</h5>\r\n\t\t\t\t\t\t<p>Subscribe your email to get the latest news and new offer also discount</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"footer-bottom\">\r\n\t\t\t\t<div class=\"footer-nav\">\r\n\t\t\t\t\t<ul>\r\n            <li><a [routerLink]=\"['../dashboard']\">HOME</a></li>\r\n            <li><a [routerLink]=\"['../employee']\">FEATURED LISTING</a></li>\r\n            <li><a [routerLink]=\"['../about']\">ABOUT US</a></li>\r\n            <li><a [routerLink]=\"['../pages']\">PAGES</a></li>\r\n            <li><a [routerLink]=\"['../blog']\">BLOG</a></li>\r\n            <li><a [routerLink]=\"['../contact']\">CONTACT</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"copyright\">\r\n\t\t\t\t\t<p>\r\nCopyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved\r\n</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>\r\n\t<!-- Footer section end -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@component/employee/employee.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@component/employee/employee.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"preloder\">\r\n  <div class=\"loader\"></div>\r\n</div> -->\r\n\r\n<header class=\"header-section\">\r\n  <div class=\"header-top\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 header-top-left\">\r\n          <div class=\"top-info\">\r\n            <i class=\"fa fa-phone\"></i>\r\n            +234-01- 873-0204\r\n          </div>\r\n          <div class=\"top-info\">\r\n            <i class=\"fa fa-envelope\"></i>\r\n            kunledavids@yahoo.com\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 text-lg-right header-top-right\">\r\n          <div class=\"top-social\">\r\n            <a href=\"https://www.facebook.com/pages/category/Local-Business/Resourceful-Properties-296818430474894/\"><i class=\"fab fa-facebook-f\"></i></a>\r\n            <!-- <a href=\"\"><i class=\"fab fa-twitter\"></i></a> -->\r\n            <a href=\"https://www.instagram.com/resourceful_properties/\"><i class=\"fab fa-instagram\"></i></a>\r\n            <a href=\"https://www.linkedin.com/company/resourceful-properties/about/\"><i class=\"fab fa-linkedin\"></i></a>\r\n          </div>\r\n          <!-- <div class=\"user-panel\">\r\n            <a href=\"\"><i class=\"fas fa-user-circle\"></i> Register</a>\r\n            <a href=\"\"><i class=\"fas fa-sign-in-alt\"></i> Login</a>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-4\">\r\n        <div class=\"rowers\">\r\n          <a href=\"#\" class=\"site-logo\"><img src=\"assets/logop.png\" alt=\"\"></a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <div class=\"site-navbar\">\r\n          <div class=\"nav-switch\">\r\n            <i class=\"fa fa-bars\"></i>\r\n          </div>\r\n          <ul class=\"main-menu\">\r\n            <li><a [routerLink]=\"['../dashboard']\">HOME</a></li>\r\n            <li><a [routerLink]=\"['../employee']\">FEATURED LISTING</a></li>\r\n            <li><a [routerLink]=\"['../about']\">ABOUT US</a></li>\r\n            <li><a [routerLink]=\"['../pages']\">PAGES</a></li>\r\n            <li><a [routerLink]=\"['../blog']\">BLOG</a></li>\r\n            <li><a [routerLink]=\"['../contact']\">CONTACT</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n<!-- Header section end -->\r\n\r\n\r\n<!-- Page top section -->\r\n<section class=\"page-top-section set-bg\" data-setbg=\"assets/img/page-top-bg.jpg\">\r\n  <div class=\"container text-white\">\r\n    <h2>Featured Listings</h2>\r\n  </div>\r\n</section>\r\n<!--  Page top end -->\r\n\r\n\t<!-- Breadcrumb -->\r\n\t<div class=\"site-breadcrumb\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<a href=\"\"><i class=\"fa fa-home\"></i>Home</a>\r\n\t\t\t<span><i class=\"fa fa-angle-right\"></i>Featured Listings</span>\r\n\t\t</div>\r\n\t</div>\r\n\r\n<!-- \t\r\n\t<section class=\"page-section categories-page\">\r\n    <div class=\"filter-search\">\r\n      <div class=\"container\">\r\n        <form class=\"filter-form\">\r\n          <input type=\"text\" placeholder=\"Enter a street name, address number or keyword\" >\r\n          <select>\r\n            <option value=\"City\">City</option>\r\n          </select>\r\n          <select>\r\n            <option value=\"City\">State</option>\r\n          </select>\r\n          <button class=\"site-btn fs-submit\">SEARCH</button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n    </section> -->\r\n\r\n<!-- page end -->\r\n<!-- page -->\r\n<section class=\"page-section categories-page\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-6\" *ngFor=\"let item of property\">\r\n        <!-- feature -->\r\n        <div class=\"feature-item\">\r\n          <div class=\"feature-pic set-bg\" [style.background-image]=\"sanitizeImage(item.firstimage)\">\r\n            <div class=\"sale-notic\">For {{item.feature}}</div>\r\n          </div>\r\n          <div class=\"feature-text\">\r\n            <div class=\"text-center feature-title\">\r\n              <h5>{{item.name}}</h5>\r\n              <p><i class=\"fa fa-map-marker\"></i> {{item.city}},     {{item.state}}</p>\r\n            </div>\r\n            <div class=\"room-info-warp\">\r\n              <div class=\"room-info\">\r\n                <div class=\"rf-left\">\r\n                  <p><i class=\"fa fa-th-large\"></i>{{item.size}} Square foot</p>\r\n                  <p><i class=\"fa fa-bed\"></i>{{item.bedrooms}} Bedrooms</p>\r\n                </div>\r\n                <div class=\"rf-right\">\r\n                  <p><i class=\"fa fa-car\"></i>{{item.carpark}} Carpark</p>\r\n                  <p><i class=\"fa fa-bath\"></i>{{item.bathrooms}} Bathrooms</p>\r\n                </div>\t\r\n              </div>\r\n              <div class=\"room-info\">\r\n                <div class=\"rf-left\">\r\n                  <p><i class=\"fa fa-user\"></i>{{item.posteduser}}</p>\r\n                </div>\r\n                <div class=\"rf-right\">\r\n                  <p><i class=\"fas fa-clock\"></i>{{item.registered | date}}</p>\r\n                </div>\t\r\n              </div>\r\n            </div>\r\n            <a (click)=\"view(item)\" class=\"room-price\">{{item.amount | currency: \"₦\"}}</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"site-pagination\">\r\n      <span>1</span>\r\n      <a href=\"#\">2</a>\r\n      <a href=\"#\">3</a>\r\n      <a href=\"#\"><i class=\"fa fa-angle-right\"></i></a>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- Clients section -->\r\n<div class=\"clients-section\">\r\n  <div class=\"container\">\r\n    <div class=\"clients-slider owl-carousel\">\r\n      <a href=\"#\">\r\n        <img src=\"https://images.africanfinancials.com/ng-wemaba-logo.png\" height='60px' alt=\"\">\r\n      </a>\r\n      <a href=\"#\">\r\n        <img src=\"https://www.ibm.com/innovate/branding/logoartwork/logoartwork.nsf/IBM_logoRR_pos_RGB.gif\" height='60px' alt=\"\">\r\n      </a>\r\n      <a href=\"#\">\r\n        <img src=\"assets/img/partner/3.png\"  height='60px' alt=\"\">\r\n      </a>\r\n      <a href=\"#\">\r\n        <img src=\"assets/img/partner/4.png\"  height='60px' alt=\"\">\r\n      </a>\r\n      <a href=\"#\">\r\n        <img src=\"assets/img/partner/5.png\"  height='60px' alt=\"\">\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Clients section end -->\r\n\r\n\r\n<!-- Footer section -->\r\n<footer class=\"footer-section set-bg\" data-setbg=\"assets/img/footer-bg.jpg\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-6 footer-widget\">\r\n        <img src=\"assets/logop.png\" alt=\"\">\r\n        <p>Resourceful Properties is the Real Estate Consultants firm and resulted from the need to adequately service our client’s interests in property related matters which have arisen</p>\r\n        <div class=\"social\">\r\n          <a href=\"https://www.facebook.com/pages/category/Local-Business/Resourceful-Properties-296818430474894/\"><i class=\"fab fa-facebook-f\"></i></a>\r\n          <!-- <a href=\"\"><i class=\"fab fa-twitter\"></i></a> -->\r\n          <a href=\"https://www.instagram.com/resourceful_properties/\"><i class=\"fab fa-instagram\"></i></a>\r\n          <a href=\"https://www.linkedin.com/company/resourceful-properties/about/\"><i class=\"fab fa-linkedin\"></i></a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-6 footer-widget\">\r\n        <div class=\"contact-widget\">\r\n          <h5 class=\"fw-title\">CONTACT US</h5>\r\n          <p><i class=\"fa fa-map-marker\"></i>64, AWOLOWO ROAD\tSOUTH WEST IKOYI LAGOS\r\n             </p>\r\n          <p><i class=\"fa fa-phone\"></i>+234-(0)803-473- 8744</p>\r\n          <p><i class=\"fa fa-envelope\"></i>kunledavids@yahoo.com</p>\r\n          <p><i class=\"fas fa-clock\"></i>Mon - Sat, 08 AM - 06 PM</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-6 footer-widget\">\r\n        <div class=\"double-menu-widget\">\r\n          <h5 class=\"fw-title\">POPULAR PLACES</h5>\r\n          <ul>\r\n            <li><a href=\"\">Lagos</a></li>\r\n            <li><a href=\"\">Ibadan</a></li>\r\n            <li><a href=\"\">Abuja</a></li>\r\n            <li><a href=\"\">Calabar</a></li>\r\n            <li><a href=\"\">Kano</a></li>\r\n          </ul>\r\n          <ul>\r\n            <li><a href=\"\">Lekki</a></li>\r\n            <li><a href=\"\">Victoria Island</a></li>\r\n            <li><a href=\"\">Yaba</a></li>\r\n            <li><a href=\"\">SUrulere</a></li>\r\n            <li><a href=\"\">Lagos Island</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-6  footer-widget\">\r\n        <div class=\"newslatter-widget\">\r\n          <h5 class=\"fw-title\">NEWSLETTER</h5>\r\n          <p>Subscribe your email to get the latest news and new offer also discount</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"footer-bottom\">\r\n      <div class=\"footer-nav\">\r\n        <ul>\r\n          <li><a [routerLink]=\"['../dashboard']\">HOME</a></li>\r\n          <li><a [routerLink]=\"['../employee']\">FEATURED LISTING</a></li>\r\n          <li><a [routerLink]=\"['../about']\">ABOUT US</a></li>\r\n          <li><a [routerLink]=\"['../pages']\">PAGES</a></li>\r\n          <li><a [routerLink]=\"['../blog']\">BLOG</a></li>\r\n          <li><a [routerLink]=\"['../contact']\">CONTACT</a></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"copyright\">\r\n        <p>\r\nCopyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved\r\n</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@component/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@component/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@component/innerview/innerview.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@component/innerview/innerview.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!-- Header section -->\n\n\t<header class=\"header-section\">\n\t\t<div class=\"header-top\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-6 header-top-left\">\n\t\t\t\t\t\t<div class=\"top-info\">\n\t\t\t\t\t\t\t<i class=\"fa fa-phone\"></i>\n\t\t\t\t\t\t\t+234-01- 873-0204\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"top-info\">\n\t\t\t\t\t\t\t<i class=\"fa fa-envelope\"></i>\n\t\t\t\t\t\t\tkunledavids@yahoo.com\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6 text-lg-right header-top-right\">\n\t\t\t\t\t\t<div class=\"top-social\">\n\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/pages/category/Local-Business/Resourceful-Properties-296818430474894/\"><i class=\"fab fa-facebook-f\"></i></a>\n\t\t\t\t\t\t\t<!-- <a href=\"\"><i class=\"fab fa-twitter\"></i></a> -->\n\t\t\t\t\t\t\t<a href=\"https://www.instagram.com/resourceful_properties/\"><i class=\"fab fa-instagram\"></i></a>\n\t\t\t\t\t\t\t<a href=\"https://www.linkedin.com/company/resourceful-properties/about/\"><i class=\"fab fa-linkedin\"></i></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"user-panel\">\n\t\t\t\t\t\t\t<a href=\"\"><i class=\"fas fa-user-circle\"></i> Register</a>\n\t\t\t\t\t\t\t<a href=\"\"><i class=\"fas fa-sign-in-alt\"></i> Login</a>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t<div class=\"rowers\">\n\t\t\t\t\t\t<a href=\"#\" class=\"site-logo\"><img src=\"assets/logop.png\" alt=\"\"></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t<div class=\"site-navbar\">\n\t\t\t\t\t\t<div class=\"nav-switch\">\n\t\t\t\t\t\t\t<i class=\"fa fa-bars\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul class=\"main-menu\">\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../dashboard']\">HOME</a></li>\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../employee']\">FEATURED LISTING</a></li>\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../about']\">ABOUT US</a></li>\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../pages']\">PAGES</a></li>\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../blog']\">BLOG</a></li>\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../contact']\">CONTACT</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</header>\n\t<!-- Header section end -->\n\n\n\t<!-- Page top section -->\n\t<section class=\"page-top-section set-bg\" data-setbg=\"assets/img/page-top-bg.jpg\">\n\t\t<div class=\"container text-white\">\n\t\t\t<h2>SINGLE LISTING</h2>\n\t\t</div>\n\t</section>\n\t<!--  Page top end -->\n\n\t<!-- Breadcrumb -->\n\t<div class=\"site-breadcrumb\">\n\t\t<div class=\"container\">\n\t\t\t<a href=\"\"><i class=\"fa fa-home\"></i>Home</a>\n\t\t\t<span><i class=\"fa fa-angle-right\"></i>Single Listing</span>\n\t\t</div>\n\t</div>\n\n\t<!-- Page -->\n\t<section class=\"page-section\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-8 single-list-page\">\n\t\t\t\t\t<div class=\"single-list-slider owl-carousel\" id=\"sl-slider\">\n\t\t\t\t\t\t<div class=\"sl-item set-bg\" [style.background-image]=\"sanitizeImage(value.firstimage)\">\n\t\t\t\t\t\t\t<div class=\"sale-notic\">FOR {{value.feature}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"sl-item set-bg\" [style.background-image]=\"sanitizeImage(value.secondimage)\">\n\t\t\t\t\t\t\t<div class=\"rent-notic\">FOR {{value.feature}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"sl-item set-bg\" [style.background-image]=\"sanitizeImage(value.thirdimage)\">\n\t\t\t\t\t\t\t<div class=\"sale-notic\">FOR {{value.feature}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"sl-item set-bg\" [style.background-image]=\"sanitizeImage(value.fourthimage)\">\n\t\t\t\t\t\t\t<div class=\"rent-notic\">FOR {{value.feature}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"owl-carousel sl-thumb-slider\" id=\"sl-slider-thumb\">\n\t\t\t\t\t\t<div class=\"sl-thumb set-bg\" [style.background-image]=\"sanitizeImage(value.firstimage)\"></div>\n\t\t\t\t\t\t<div class=\"sl-thumb set-bg\" [style.background-image]=\"sanitizeImage(value.secondimage)\"></div>\n\t\t\t\t\t\t<div class=\"sl-thumb set-bg\" [style.background-image]=\"sanitizeImage(value.thirdimage)\"></div>\n\t\t\t\t\t\t<div class=\"sl-thumb set-bg\" [style.background-image]=\"sanitizeImage(value.fourthimage)\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"single-list-content\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-xl-8 sl-title\">\n\t\t\t\t\t\t\t\t<h2>{{value.name}}</h2>\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-map-marker\"></i>{{value.city}}, {{value.state}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-xl-4\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"price-btn\">{{value.amount | currency:'₦'}}</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3 class=\"sl-sp-title\">Property Details</h3>\n\t\t\t\t\t\t<div class=\"row property-details-list\">\n\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6\">\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-th-large\"></i>{{value.size}} Square foot</p>\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-bed\"></i>{{value.bedrooms}} Bedrooms</p>\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-user\"></i>{{value.posteduser}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6\">\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-car\"></i>{{value.carpark}} Garages</p>\n\t\t\t\t\t\t\t\t<p><i class=\"fas fa-building\"></i>{{value.type}}</p>\n\t\t\t\t\t\t\t\t<p><i class=\"fas fa-clock\"></i>{{value.registered | date}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-bath\"></i>{{value.bathrooms}} Bathrooms</p>\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-trophy\"></i>{{value.age}} years age</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3 class=\"sl-sp-title\">Description</h3>\n\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t<p>{{value.description}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3 class=\"sl-sp-title bd-no\">Video</h3>\n\t\t\t\t\t\t<div class=\"perview-video\">\n\t\t\t\t\t\t\t<img src=\"{{value.video}}\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- sidebar -->\n\t\t\t\t<div class=\"col-lg-4 col-md-7 sidebar\">\n\t\t\t\t\t<div class=\"author-card\">\n\t\t\t\t\t\t<div class=\"author-img set-bg\" data-setbg=\"https://pbs.twimg.com/profile_images/1099224652126322688/yrba1N_5_400x400.jpg\"></div>\n\t\t\t\t\t\t<div class=\"author-info\">\n\t\t\t\t\t\t\t<h5>Giwa Kunle Davids</h5>\n\t\t\t\t\t\t\t<p>Real Estate Agent</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"author-contact\">\n\t\t\t\t\t\t\t<p><i class=\"fa fa-phone\"></i>+234-01- 873-0204</p>\n\t\t\t\t\t\t\t<p><i class=\"fa fa-envelope\"></i>kunledavids@yahoo.com</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"contact-form-card\">\n\t\t\t\t\t\t<h5>Do you have any question?</h5>\n\t\t\t\t\t\t<form [formGroup]=\"Contact\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"name\" placeholder=\"Your name\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"email\" placeholder=\"Your email\">\n\t\t\t\t\t\t\t<textarea formControlName=\"message\" placeholder=\"Your question\"></textarea>\n\t\t\t\t\t\t\t<button class=\"btn\" (click)=\"createContact()\">SUBMIT NOW</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"related-properties\">\n\t\t\t\t\t\t<h2>Related Property</h2>\n\t\t\t\t\t\t<div class=\"rp-item\" *ngFor=\"let item of property | slice:0:2;\" >\n\t\t\t\t\t\t\t<div class=\"rp-pic set-bg\" [style.background-image]=\"sanitizeImage(item.firstimage)\">\n\t\t\t\t\t\t\t\t<div class=\"sale-notic\">FOR {{item.feature}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"rp-info\">\n\t\t\t\t\t\t\t\t<h5>{{item.name}}</h5>\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-map-marker\"></i> {{item.city}}, {{item.state}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a (click)=\"view(item)\" class=\"rp-price\">{{item.amount | currency:\"₦\"}}</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!-- Page end -->\n\n\n\t<!-- Clients section -->\n\t<div class=\"clients-section\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"clients-slider owl-carousel\">\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"https://images.africanfinancials.com/ng-wemaba-logo.png\" height='60px' alt=\"\">\n\t\t\t\t</a>\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"https://www.ibm.com/innovate/branding/logoartwork/logoartwork.nsf/IBM_logoRR_pos_RGB.gif\" height='60px' alt=\"\">\n\t\t\t\t</a>\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"assets/img/partner/3.png\"  height='60px' alt=\"\">\n\t\t\t\t</a>\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"assets/img/partner/4.png\"  height='60px' alt=\"\">\n\t\t\t\t</a>\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"assets/img/partner/5.png\"  height='60px' alt=\"\">\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- Clients section end -->\n\n\t<footer class=\"footer-section set-bg\" data-setbg=\"assets/img/footer-bg.jpg\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-3 col-md-6 footer-widget\">\n\t\t\t\t\t<img src=\"assets/logop.png\" alt=\"\">\n\t\t\t\t\t<p>Resourceful Properties is the Real Estate Consultants firm and resulted from the need to adequately service our client’s interests in property related matters which have arisen</p>\n\t\t\t\t\t<div class=\"social\">\n            <a href=\"https://www.facebook.com/pages/category/Local-Business/Resourceful-Properties-296818430474894/\"><i class=\"fab fa-facebook-f\"></i></a>\n            <!-- <a href=\"\"><i class=\"fab fa-twitter\"></i></a> -->\n            <a href=\"https://www.instagram.com/resourceful_properties/\"><i class=\"fab fa-instagram\"></i></a>\n            <a href=\"https://www.linkedin.com/company/resourceful-properties/about/\"><i class=\"fab fa-linkedin\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-3 col-md-6 footer-widget\">\n\t\t\t\t\t<div class=\"contact-widget\">\n\t\t\t\t\t\t<h5 class=\"fw-title\">CONTACT US</h5>\n\t\t\t\t\t\t<p><i class=\"fa fa-map-marker\"></i>64, AWOLOWO ROAD\tSOUTH WEST IKOYI LAGOS\n\t\t\t\t\t\t\t </p>\n\t\t\t\t\t\t<p><i class=\"fa fa-phone\"></i>+234-(0)803-473- 8744</p>\n\t\t\t\t\t\t<p><i class=\"fa fa-envelope\"></i>kunledavids@yahoo.com</p>\n\t\t\t\t\t\t<p><i class=\"fas fa-clock\"></i>Mon - Sat, 08 AM - 06 PM</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-3 col-md-6 footer-widget\">\n\t\t\t\t\t<div class=\"double-menu-widget\">\n\t\t\t\t\t\t<h5 class=\"fw-title\">POPULAR PLACES</h5>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a href=\"\">Lagos</a></li>\n\t\t\t\t\t\t\t<li><a href=\"\">Ibadan</a></li>\n\t\t\t\t\t\t\t<li><a href=\"\">Abuja</a></li>\n\t\t\t\t\t\t\t<li><a href=\"\">Calabar</a></li>\n\t\t\t\t\t\t\t<li><a href=\"\">Kano</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a href=\"\">Lekki</a></li>\n\t\t\t\t\t\t\t<li><a href=\"\">Victoria Island</a></li>\n\t\t\t\t\t\t\t<li><a href=\"\">Yaba</a></li>\n\t\t\t\t\t\t\t<li><a href=\"\">SUrulere</a></li>\n\t\t\t\t\t\t\t<li><a href=\"\">Lagos Island</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-3 col-md-6  footer-widget\">\n\t\t\t\t\t<div class=\"newslatter-widget\">\n\t\t\t\t\t\t<h5 class=\"fw-title\">NEWSLETTER</h5>\n\t\t\t\t\t\t<p>Subscribe your email to get the latest news and new offer also discount</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"footer-bottom\">\n\t\t\t\t<div class=\"footer-nav\">\n\t\t\t\t\t<ul>\n            <li><a [routerLink]=\"['../dashboard']\">HOME</a></li>\n            <li><a [routerLink]=\"['../employee']\">FEATURED LISTING</a></li>\n            <li><a [routerLink]=\"['../about']\">ABOUT US</a></li>\n            <li><a [routerLink]=\"['../pages']\">PAGES</a></li>\n            <li><a [routerLink]=\"['../blog']\">BLOG</a></li>\n            <li><a [routerLink]=\"['../contact']\">CONTACT</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"copyright\">\n\t\t\t\t\t<p>\nCopyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved\n</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@component/pages/pages.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@component/pages/pages.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!-- Header section -->\r\n\r\n\t<header class=\"header-section\">\r\n\t\t<div class=\"header-top\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-lg-6 header-top-left\">\r\n\t\t\t\t\t\t<div class=\"top-info\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-phone\"></i>\r\n\t\t\t\t\t\t\t+234-01- 873-0204\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"top-info\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-envelope\"></i>\r\n\t\t\t\t\t\t\tkunledavids@yahoo.com\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-lg-6 text-lg-right header-top-right\">\r\n\t\t\t\t\t\t<div class=\"top-social\">\r\n\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/pages/category/Local-Business/Resourceful-Properties-296818430474894/\"><i class=\"fab fa-facebook-f\"></i></a>\r\n\t\t\t\t\t\t\t<!-- <a href=\"\"><i class=\"fab fa-twitter\"></i></a> -->\r\n\t\t\t\t\t\t\t<a href=\"https://www.instagram.com/resourceful_properties/\"><i class=\"fab fa-instagram\"></i></a>\r\n\t\t\t\t\t\t\t<a href=\"https://www.linkedin.com/company/resourceful-properties/about/\"><i class=\"fab fa-linkedin\"></i></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- <div class=\"user-panel\">\r\n\t\t\t\t\t\t\t<a href=\"\"><i class=\"fas fa-user-circle\"></i> Register</a>\r\n\t\t\t\t\t\t\t<a href=\"\"><i class=\"fas fa-sign-in-alt\"></i> Login</a>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-4\">\r\n\t\t\t\t\t<div class=\"rowers\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"site-logo\"><img src=\"assets/logop.png\" alt=\"\"></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-8\">\r\n\t\t\t\t\t<div class=\"site-navbar\">\r\n\t\t\t\t\t\t<div class=\"nav-switch\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-bars\"></i>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<ul class=\"main-menu\">\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../dashboard']\">HOME</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../employee']\">FEATURED LISTING</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../about']\">ABOUT US</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../pages']\">PAGES</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../blog']\">BLOG</a></li>\r\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../contact']\">CONTACT</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</header>\r\n\t<!-- Header section end -->\r\n\r\n\r\n\t<!-- Page top section -->\r\n\t<section class=\"page-top-section set-bg\" data-setbg=\"assets/img/page-top-bg.jpg\">\r\n\t\t<div class=\"container text-white\">\r\n\t\t\t<h2>SINGLE LISTING</h2>\r\n\t\t</div>\r\n\t</section>\r\n\t<!--  Page top end -->\r\n\r\n\t<!-- Breadcrumb -->\r\n\t<div class=\"site-breadcrumb\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<a href=\"\"><i class=\"fa fa-home\"></i>Home</a>\r\n\t\t\t<span><i class=\"fa fa-angle-right\"></i>Single Listing</span>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<!-- Page -->\r\n\t<section class=\"page-section\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-8 single-list-page\">\r\n\t\t\t\t\t<div class=\"single-list-slider owl-carousel\" id=\"sl-slider\">\r\n\t\t\t\t\t\t<div class=\"sl-item set-bg\" [style.background-image]=\"sanitizeImage(recentproperty.firstimage)\">\r\n\t\t\t\t\t\t\t<div class=\"sale-notic\">FOR {{recentproperty.feature}}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"sl-item set-bg\" [style.background-image]=\"sanitizeImage(recentproperty.secondimage)\">\r\n\t\t\t\t\t\t\t<div class=\"rent-notic\">FOR {{recentproperty.feature}}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"sl-item set-bg\" [style.background-image]=\"sanitizeImage(recentproperty.thirdimage)\">\r\n\t\t\t\t\t\t\t<div class=\"sale-notic\">FOR {{recentproperty.feature}}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"sl-item set-bg\" [style.background-image]=\"sanitizeImage(recentproperty.fourthimage)\">\r\n\t\t\t\t\t\t\t<div class=\"rent-notic\">FOR {{recentproperty.feature}}</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"owl-carousel sl-thumb-slider\" id=\"sl-slider-thumb\">\r\n\t\t\t\t\t\t<div class=\"sl-thumb set-bg\" [style.background-image]=\"sanitizeImage(recentproperty.firstimage)\"></div>\r\n\t\t\t\t\t\t<div class=\"sl-thumb set-bg\" [style.background-image]=\"sanitizeImage(recentproperty.secondimage)\"></div>\r\n\t\t\t\t\t\t<div class=\"sl-thumb set-bg\" [style.background-image]=\"sanitizeImage(recentproperty.thirdimage)\"></div>\r\n\t\t\t\t\t\t<div class=\"sl-thumb set-bg\" [style.background-image]=\"sanitizeImage(recentproperty.fourthimage)\"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"single-list-content\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-8 sl-title\">\r\n\t\t\t\t\t\t\t\t<h2>{{recentproperty.name}}</h2>\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-map-marker\"></i>{{recentproperty.city}}, {{recentproperty.state}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-xl-4\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"price-btn\">{{recentproperty.amount | currency:'₦'}}</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<h3 class=\"sl-sp-title\">Property Details</h3>\r\n\t\t\t\t\t\t<div class=\"row property-details-list\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6\">\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-th-large\"></i>{{recentproperty.size}} Square foot</p>\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-bed\"></i>{{recentproperty.bedrooms}} Bedrooms</p>\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-user\"></i>{{recentproperty.posteduser}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6\">\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-car\"></i>{{recentproperty.carpark}} Garages</p>\r\n\t\t\t\t\t\t\t\t<p><i class=\"fas fa-building\"></i>{{recentproperty.type}}</p>\r\n\t\t\t\t\t\t\t\t<p><i class=\"fas fa-clock\"></i>{{recentproperty.registered | date}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-bath\"></i>{{recentproperty.bathrooms}} Bathrooms</p>\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-trophy\"></i>{{recentproperty.age}} years age</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<h3 class=\"sl-sp-title\">Description</h3>\r\n\t\t\t\t\t\t<div class=\"description\">\r\n\t\t\t\t\t\t\t<p>{{recentproperty.description}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<h3 class=\"sl-sp-title bd-no\">Video</h3>\r\n\t\t\t\t\t\t<div class=\"perview-video\">\r\n\t\t\t\t\t\t\t<img src=\"{{recentproperty.video}}\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- sidebar -->\r\n\t\t\t\t<div class=\"col-lg-4 col-md-7 sidebar\">\r\n\t\t\t\t\t<div class=\"author-card\">\r\n\t\t\t\t\t\t<div class=\"author-img set-bg\" data-setbg=\"https://pbs.twimg.com/profile_images/1099224652126322688/yrba1N_5_400x400.jpg\"></div>\r\n\t\t\t\t\t\t<div class=\"author-info\">\r\n\t\t\t\t\t\t\t<h5>Giwa Kunle Davids</h5>\r\n\t\t\t\t\t\t\t<p>Real Estate Agent</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"author-contact\">\r\n\t\t\t\t\t\t\t<p><i class=\"fa fa-phone\"></i>+234-01- 873-0204</p>\r\n\t\t\t\t\t\t\t<p><i class=\"fa fa-envelope\"></i>kunledavids@yahoo.com</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"contact-form-card\">\r\n\t\t\t\t\t\t<h5>Do you have any question?</h5>\r\n\t\t\t\t\t\t<form [formGroup]=\"Contact\">\r\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"name\" placeholder=\"Your name\">\r\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"email\" placeholder=\"Your email\">\r\n\t\t\t\t\t\t\t<textarea formControlName=\"message\" placeholder=\"Your question\"></textarea>\r\n\t\t\t\t\t\t\t<button class=\"btn\" (click)=\"createContact()\">SUBMIT NOW</button>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"related-properties\">\r\n\t\t\t\t\t\t<h2>Related Property</h2>\r\n\t\t\t\t\t\t<div class=\"rp-item\" *ngFor=\"let item of property | slice:0:2;\" >\r\n\t\t\t\t\t\t\t<div class=\"rp-pic set-bg\" [style.background-image]=\"sanitizeImage(item.firstimage)\">\r\n\t\t\t\t\t\t\t\t<div class=\"sale-notic\">FOR {{item.feature}}</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"rp-info\">\r\n\t\t\t\t\t\t\t\t<h5>{{item.name}}</h5>\r\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-map-marker\"></i> {{item.city}}, {{item.state}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<a (click)='view(item)' class=\"rp-price\">{{item.amount | currency:\"₦\"}}</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\t<!-- Page end -->\r\n\r\n\r\n\t<!-- Clients section -->\r\n\t<div class=\"clients-section\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"clients-slider owl-carousel\">\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"https://images.africanfinancials.com/ng-wemaba-logo.png\" height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"https://www.ibm.com/innovate/branding/logoartwork/logoartwork.nsf/IBM_logoRR_pos_RGB.gif\" height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"assets/img/partner/3.png\"  height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"assets/img/partner/4.png\"  height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a href=\"#\">\r\n\t\t\t\t\t<img src=\"assets/img/partner/5.png\"  height='60px' alt=\"\">\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<!-- Clients section end -->\r\n\r\n\r\n\t<footer class=\"footer-section set-bg\" data-setbg=\"assets/img/footer-bg.jpg\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6 footer-widget\">\r\n\t\t\t\t\t<img src=\"assets/logop.png\" alt=\"\">\r\n\t\t\t\t\t<p>Resourceful Properties is the Real Estate Consultants firm and resulted from the need to adequately service our client’s interests in property related matters which have arisen</p>\r\n\t\t\t\t\t<div class=\"social\">\r\n            <a href=\"https://www.facebook.com/pages/category/Local-Business/Resourceful-Properties-296818430474894/\"><i class=\"fab fa-facebook-f\"></i></a>\r\n            <!-- <a href=\"\"><i class=\"fab fa-twitter\"></i></a> -->\r\n            <a href=\"https://www.instagram.com/resourceful_properties/\"><i class=\"fab fa-instagram\"></i></a>\r\n            <a href=\"https://www.linkedin.com/company/resourceful-properties/about/\"><i class=\"fab fa-linkedin\"></i></a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6 footer-widget\">\r\n\t\t\t\t\t<div class=\"contact-widget\">\r\n\t\t\t\t\t\t<h5 class=\"fw-title\">CONTACT US</h5>\r\n\t\t\t\t\t\t<p><i class=\"fa fa-map-marker\"></i>64, AWOLOWO ROAD\tSOUTH WEST IKOYI LAGOS\r\n\t\t\t\t\t\t\t </p>\r\n\t\t\t\t\t\t<p><i class=\"fa fa-phone\"></i>+234-(0)803-473- 8744</p>\r\n\t\t\t\t\t\t<p><i class=\"fa fa-envelope\"></i>kunledavids@yahoo.com</p>\r\n\t\t\t\t\t\t<p><i class=\"fas fa-clock\"></i>Mon - Sat, 08 AM - 06 PM</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6 footer-widget\">\r\n\t\t\t\t\t<div class=\"double-menu-widget\">\r\n\t\t\t\t\t\t<h5 class=\"fw-title\">POPULAR PLACES</h5>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Lagos</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Ibadan</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Abuja</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Calabar</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Kano</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Lekki</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Victoria Island</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Yaba</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">SUrulere</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"\">Lagos Island</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-lg-3 col-md-6  footer-widget\">\r\n\t\t\t\t\t<div class=\"newslatter-widget\">\r\n\t\t\t\t\t\t<h5 class=\"fw-title\">NEWSLETTER</h5>\r\n\t\t\t\t\t\t<p>Subscribe your email to get the latest news and new offer also discount</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"footer-bottom\">\r\n\t\t\t\t<div class=\"footer-nav\">\r\n\t\t\t\t\t<ul>\r\n            <li><a [routerLink]=\"['../dashboard']\">HOME</a></li>\r\n            <li><a [routerLink]=\"['../employee']\">FEATURED LISTING</a></li>\r\n            <li><a [routerLink]=\"['../about']\">ABOUT US</a></li>\r\n            <li><a [routerLink]=\"['../pages']\">PAGES</a></li>\r\n            <li><a [routerLink]=\"['../blog']\">BLOG</a></li>\r\n            <li><a [routerLink]=\"['../contact']\">CONTACT</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"copyright\">\r\n\t\t\t\t\t<p>\r\nCopyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved\r\n</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@component/singleblog/singleblog.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@component/singleblog/singleblog.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<header class=\"header-section\">\r\n  <div class=\"header-top\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6 header-top-left\">\r\n          <div class=\"top-info\">\r\n            <i class=\"fa fa-phone\"></i>\r\n            +234-01- 873-0204\r\n          </div>\r\n          <div class=\"top-info\">\r\n            <i class=\"fa fa-envelope\"></i>\r\n            kunledavids@yahoo.com\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6 text-lg-right header-top-right\">\r\n          <div class=\"top-social\">\r\n            <a href=\"https://www.facebook.com/pages/category/Local-Business/Resourceful-Properties-296818430474894/\"><i class=\"fab fa-facebook-f\"></i></a>\r\n            <!-- <a href=\"\"><i class=\"fab fa-twitter\"></i></a> -->\r\n            <a href=\"https://www.instagram.com/resourceful_properties/\"><i class=\"fab fa-instagram\"></i></a>\r\n            <a href=\"https://www.linkedin.com/company/resourceful-properties/about/\"><i class=\"fab fa-linkedin\"></i></a>\r\n          </div>\r\n          <!-- <div class=\"user-panel\">\r\n            <a href=\"\"><i class=\"fas fa-user-circle\"></i> Register</a>\r\n            <a href=\"\"><i class=\"fas fa-sign-in-alt\"></i> Login</a>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-4\">\r\n        <div class=\"rowers\">\r\n          <a href=\"#\" class=\"site-logo\"><img src=\"assets/logop.png\" alt=\"\"></a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <div class=\"site-navbar\">\r\n          <div class=\"nav-switch\">\r\n            <i class=\"fa fa-bars\"></i>\r\n          </div>\r\n          <ul class=\"main-menu\">\r\n            <li><a [routerLink]=\"['../dashboard']\">HOME</a></li>\r\n            <li><a [routerLink]=\"['../employee']\">FEATURED LISTING</a></li>\r\n            <li><a [routerLink]=\"['../about']\">ABOUT US</a></li>\r\n            <li><a [routerLink]=\"['../pages']\">PAGES</a></li>\r\n            <li><a [routerLink]=\"['../blog']\">BLOG</a></li>\r\n            <li><a [routerLink]=\"['../contact']\">CONTACT</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n<!-- Header section end -->\r\n\r\n\r\n<!-- Page top section -->\r\n<section class=\"page-top-section single-blog set-bg \" data-setbg=\"assets/img/page-top-bg.jpg\">\r\n  <div class=\"container text-white\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xl-8 offset-lg-2\">\r\n        <h2>{{value.title}}</h2>\r\n        <a href=\"\"><i class=\"fa fa-user\"></i>{{value.posteduser}}</a>\r\n        <a href=\"\"><i class=\"fas fa-clock\"></i>{{value.registered | date}}</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!--  Page top end -->\r\n\r\n<!-- Breadcrumb -->\r\n<div class=\"site-breadcrumb\">\r\n  <div class=\"container\">\r\n    <a href=\"\"><i class=\"fa fa-home\"></i>Home</a>\r\n    <span><i class=\"fa fa-angle-right\"></i>Blog Details</span>\r\n  </div>\r\n</div>\r\n\r\n<!-- page -->\r\n<section class=\"page-section single-blog\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-1 blog-share\">\r\n        <h5>Share</h5>\r\n        <div class=\"share-links\">\r\n          <a href=\"#\" class=\"facebook\"><i class=\"fab fa-facebook\"></i></a>\r\n          <a href=\"#\" class=\"twitter\"><i class=\"fab fa-twitter\"></i></a>\r\n          <a href=\"#\" class=\"google-plus\"><i class=\"fab fa-google-plus\"></i></a>\r\n          <a href=\"#\" class=\"instagram\"><i class=\"fab fa-instagram\"></i></a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-10 singel-blog-content\">\r\n        <img src=\"{{value.image}}\" alt=\"\">\r\n        <p>{{value.first}}</p>\r\n        <p>{{value.second}}</p>\r\n        <blockquote>\r\n          {{value.quote}}\r\n        </blockquote>\r\n        <p>{{value.third}}</p>\r\n        <p>{{value.fourth}}</p>\r\n        <div class=\"blog-tags\">\r\n          <p>Tag:</p>\r\n          <a href=\"#\">#news,</a>\r\n          <a href=\"#\">#realestate,</a>\r\n          <a href=\"#\">#investment,</a>\r\n          <a href=\"#\"> #price,</a>\r\n          <a href=\"#\">#market</a>\r\n        </div>\r\n        <div class=\"post-author\">\r\n          <div class=\"pa-thumb set-bg\" data-setbg=\"assets/logop.png\"></div>\r\n          <div class=\"pa-content\">\r\n            <h4>{{value.posteduser}}</h4>\r\n            <p>{{value.quote}}.</p>\r\n          </div>\r\n        </div>\r\n        <disqus-thread [page-identifier]=\"id\" [page-url]=\"location\"></disqus-thread>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<!-- page end-->\r\n     \r\n\r\n<!-- Clients section -->\r\n<div class=\"clients-section\">\r\n  <div class=\"container\">\r\n    <div class=\"clients-slider owl-carousel\">\r\n      <a href=\"#\">\r\n        <img src=\"https://images.africanfinancials.com/ng-wemaba-logo.png\" height='60px' alt=\"\">\r\n      </a>\r\n      <a href=\"#\">\r\n        <img src=\"https://www.ibm.com/innovate/branding/logoartwork/logoartwork.nsf/IBM_logoRR_pos_RGB.gif\" height='60px' alt=\"\">\r\n      </a>\r\n      <a href=\"#\">\r\n        <img src=\"assets/img/partner/3.png\"  height='60px' alt=\"\">\r\n      </a>\r\n      <a href=\"#\">\r\n        <img src=\"assets/img/partner/4.png\"  height='60px' alt=\"\">\r\n      </a>\r\n      <a href=\"#\">\r\n        <img src=\"assets/img/partner/5.png\"  height='60px' alt=\"\">\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- Clients section end -->\r\n\r\n\r\n<footer class=\"footer-section set-bg\" data-setbg=\"assets/img/footer-bg.jpg\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 col-md-6 footer-widget\">\r\n        <img src=\"assets/logop.png\" alt=\"\">\r\n        <p>Resourceful Properties is the Real Estate Consultants firm and resulted from the need to adequately service our client’s interests in property related matters which have arisen</p>\r\n        <div class=\"social\">\r\n          <a href=\"https://www.facebook.com/pages/category/Local-Business/Resourceful-Properties-296818430474894/\"><i class=\"fab fa-facebook-f\"></i></a>\r\n          <!-- <a href=\"\"><i class=\"fab fa-twitter\"></i></a> -->\r\n          <a href=\"https://www.instagram.com/resourceful_properties/\"><i class=\"fab fa-instagram\"></i></a>\r\n          <a href=\"https://www.linkedin.com/company/resourceful-properties/about/\"><i class=\"fab fa-linkedin\"></i></a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-6 footer-widget\">\r\n        <div class=\"contact-widget\">\r\n          <h5 class=\"fw-title\">CONTACT US</h5>\r\n          <p><i class=\"fa fa-map-marker\"></i>64, AWOLOWO ROAD\tSOUTH WEST IKOYI LAGOS\r\n             </p>\r\n          <p><i class=\"fa fa-phone\"></i>+234-(0)803-473- 8744</p>\r\n          <p><i class=\"fa fa-envelope\"></i>kunledavids@yahoo.com</p>\r\n          <p><i class=\"fas fa-clock\"></i>Mon - Sat, 08 AM - 06 PM</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-6 footer-widget\">\r\n        <div class=\"double-menu-widget\">\r\n          <h5 class=\"fw-title\">POPULAR PLACES</h5>\r\n          <ul>\r\n            <li><a href=\"\">Lagos</a></li>\r\n            <li><a href=\"\">Ibadan</a></li>\r\n            <li><a href=\"\">Abuja</a></li>\r\n            <li><a href=\"\">Calabar</a></li>\r\n            <li><a href=\"\">Kano</a></li>\r\n          </ul>\r\n          <ul>\r\n            <li><a href=\"\">Lekki</a></li>\r\n            <li><a href=\"\">Victoria Island</a></li>\r\n            <li><a href=\"\">Yaba</a></li>\r\n            <li><a href=\"\">SUrulere</a></li>\r\n            <li><a href=\"\">Lagos Island</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 col-md-6  footer-widget\">\r\n        <div class=\"newslatter-widget\">\r\n          <h5 class=\"fw-title\">NEWSLETTER</h5>\r\n          <p>Subscribe your email to get the latest news and new offer also discount</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"footer-bottom\">\r\n      <div class=\"footer-nav\">\r\n        <ul>\r\n          <li><a [routerLink]=\"['../dashboard']\">HOME</a></li>\r\n          <li><a [routerLink]=\"['../employee']\">FEATURED LISTING</a></li>\r\n          <li><a [routerLink]=\"['../about']\">ABOUT US</a></li>\r\n          <li><a [routerLink]=\"['../pages']\">PAGES</a></li>\r\n          <li><a [routerLink]=\"['../blog']\">BLOG</a></li>\r\n          <li><a [routerLink]=\"['../contact']\">CONTACT</a></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"copyright\">\r\n        <p>\r\nCopyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved\r\n</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@component/view/view.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@component/view/view.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<!-- Header section -->\n\n\t<header class=\"header-section\">\n\t\t<div class=\"header-top\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-lg-6 header-top-left\">\n\t\t\t\t\t\t<div class=\"top-info\">\n\t\t\t\t\t\t\t<i class=\"fa fa-phone\"></i>\n\t\t\t\t\t\t\t+234-01- 873-0204\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"top-info\">\n\t\t\t\t\t\t\t<i class=\"fa fa-envelope\"></i>\n\t\t\t\t\t\t\tkunledavids@yahoo.com\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-lg-6 text-lg-right header-top-right\">\n\t\t\t\t\t\t<div class=\"top-social\">\n\t\t\t\t\t\t\t<a href=\"https://www.facebook.com/pages/category/Local-Business/Resourceful-Properties-296818430474894/\"><i class=\"fab fa-facebook-f\"></i></a>\n\t\t\t\t\t\t\t<!-- <a href=\"\"><i class=\"fab fa-twitter\"></i></a> -->\n\t\t\t\t\t\t\t<a href=\"https://www.instagram.com/resourceful_properties/\"><i class=\"fab fa-instagram\"></i></a>\n\t\t\t\t\t\t\t<a href=\"https://www.linkedin.com/company/resourceful-properties/about/\"><i class=\"fab fa-linkedin\"></i></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!-- <div class=\"user-panel\">\n\t\t\t\t\t\t\t<a href=\"\"><i class=\"fas fa-user-circle\"></i> Register</a>\n\t\t\t\t\t\t\t<a href=\"\"><i class=\"fas fa-sign-in-alt\"></i> Login</a>\n\t\t\t\t\t\t</div> -->\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-4\">\n\t\t\t\t\t<div class=\"rowers\">\n\t\t\t\t\t\t<a href=\"#\" class=\"site-logo\"><img src=\"assets/logop.png\" alt=\"\"></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-8\">\n\t\t\t\t\t<div class=\"site-navbar\">\n\t\t\t\t\t\t<div class=\"nav-switch\">\n\t\t\t\t\t\t\t<i class=\"fa fa-bars\"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<ul class=\"main-menu\">\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../dashboard']\">HOME</a></li>\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../employee']\">FEATURED LISTING</a></li>\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../about']\">ABOUT US</a></li>\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../pages']\">PAGES</a></li>\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../blog']\">BLOG</a></li>\n\t\t\t\t\t\t\t<li><a [routerLink]=\"['../contact']\">CONTACT</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</header>\n\t<!-- Header section end -->\n\n\n\t<!-- Page top section -->\n\t<section class=\"page-top-section set-bg\" data-setbg=\"assets/img/page-top-bg.jpg\">\n\t\t<div class=\"container text-white\">\n\t\t\t<h2>SINGLE LISTING</h2>\n\t\t</div>\n\t</section>\n\t<!--  Page top end -->\n\n\t<!-- Breadcrumb -->\n\t<div class=\"site-breadcrumb\">\n\t\t<div class=\"container\">\n\t\t\t<a href=\"\"><i class=\"fa fa-home\"></i>Home</a>\n\t\t\t<span><i class=\"fa fa-angle-right\"></i>Single Listing</span>\n\t\t</div>\n\t</div>\n\n\t<!-- Page -->\n\t<section class=\"page-section\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-8 single-list-page\">\n\t\t\t\t\t<div class=\"single-list-slider owl-carousel\" id=\"sl-slider\">\n\t\t\t\t\t\t<div class=\"sl-item set-bg\" [style.background-image]=\"sanitizeImage(value.firstimage)\">\n\t\t\t\t\t\t\t<div class=\"sale-notic\">FOR {{value.feature}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"sl-item set-bg\" [style.background-image]=\"sanitizeImage(value.secondimage)\">\n\t\t\t\t\t\t\t<div class=\"rent-notic\">FOR {{value.feature}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"sl-item set-bg\" [style.background-image]=\"sanitizeImage(value.thirdimage)\">\n\t\t\t\t\t\t\t<div class=\"sale-notic\">FOR {{value.feature}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"sl-item set-bg\" [style.background-image]=\"sanitizeImage(value.fourthimage)\">\n\t\t\t\t\t\t\t<div class=\"rent-notic\">FOR {{value.feature}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"owl-carousel sl-thumb-slider\" id=\"sl-slider-thumb\">\n\t\t\t\t\t\t<div class=\"sl-thumb set-bg\" [style.background-image]=\"sanitizeImage(value.firstimage)\"></div>\n\t\t\t\t\t\t<div class=\"sl-thumb set-bg\" [style.background-image]=\"sanitizeImage(value.secondimage)\"></div>\n\t\t\t\t\t\t<div class=\"sl-thumb set-bg\" [style.background-image]=\"sanitizeImage(value.thirdimage)\"></div>\n\t\t\t\t\t\t<div class=\"sl-thumb set-bg\" [style.background-image]=\"sanitizeImage(value.fourthimage)\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"single-list-content\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-xl-8 sl-title\">\n\t\t\t\t\t\t\t\t<h2>{{value.name}}</h2>\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-map-marker\"></i>{{value.city}}, {{value.state}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-xl-4\">\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"price-btn\">{{value.amount | currency:'₦'}}</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3 class=\"sl-sp-title\">Property Details</h3>\n\t\t\t\t\t\t<div class=\"row property-details-list\">\n\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6\">\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-th-large\"></i>{{value.size}} Square foot</p>\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-bed\"></i>{{value.bedrooms}} Bedrooms</p>\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-user\"></i>{{value.posteduser}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4 col-sm-6\">\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-car\"></i>{{value.carpark}} Garages</p>\n\t\t\t\t\t\t\t\t<p><i class=\"fas fa-building\"></i>{{value.type}}</p>\n\t\t\t\t\t\t\t\t<p><i class=\"fas fa-clock\"></i>{{value.registered | date}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-bath\"></i>{{value.bathrooms}} Bathrooms</p>\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-trophy\"></i>{{value.age}} years age</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3 class=\"sl-sp-title\">Description</h3>\n\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t<p>{{value.description}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3 class=\"sl-sp-title bd-no\">Video</h3>\n\t\t\t\t\t\t<div class=\"perview-video\">\n\t\t\t\t\t\t\t<img src=\"{{value.video}}\" alt=\"\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!-- sidebar -->\n\t\t\t\t<div class=\"col-lg-4 col-md-7 sidebar\">\n\t\t\t\t\t<div class=\"author-card\">\n\t\t\t\t\t\t<div class=\"author-img set-bg\" data-setbg=\"https://pbs.twimg.com/profile_images/1099224652126322688/yrba1N_5_400x400.jpg\"></div>\n\t\t\t\t\t\t<div class=\"author-info\">\n\t\t\t\t\t\t\t<h5>Giwa Kunle Davids</h5>\n\t\t\t\t\t\t\t<p>Real Estate Agent</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"author-contact\">\n\t\t\t\t\t\t\t<p><i class=\"fa fa-phone\"></i>+234-01- 873-0204</p>\n\t\t\t\t\t\t\t<p><i class=\"fa fa-envelope\"></i>kunledavids@yahoo.com</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"contact-form-card\">\n\t\t\t\t\t\t<h5>Do you have any question?</h5>\n\t\t\t\t\t\t<form [formGroup]=\"Contact\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"name\" placeholder=\"Your name\">\n\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"email\" placeholder=\"Your email\">\n\t\t\t\t\t\t\t<textarea formControlName=\"message\" placeholder=\"Your question\"></textarea>\n\t\t\t\t\t\t\t<button class=\"btn\" (click)=\"createContact()\">SUBMIT NOW</button>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"related-properties\">\n\t\t\t\t\t\t<h2>Related Property</h2>\n\t\t\t\t\t\t<div class=\"rp-item\" *ngFor=\"let item of property | slice:0:2;\" >\n\t\t\t\t\t\t\t<div class=\"rp-pic set-bg\" [style.background-image]=\"sanitizeImage(item.firstimage)\">\n\t\t\t\t\t\t\t\t<div class=\"sale-notic\">FOR {{item.feature}}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"rp-info\">\n\t\t\t\t\t\t\t\t<h5>{{item.name}}</h5>\n\t\t\t\t\t\t\t\t<p><i class=\"fa fa-map-marker\"></i> {{item.city}}, {{item.state}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<a (click)=\"view(item)\" class=\"rp-price\">{{item.amount | currency:\"₦\"}}</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t<!-- Page end -->\n\n\n\t<!-- Clients section -->\n\t<div class=\"clients-section\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"clients-slider owl-carousel\">\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"https://images.africanfinancials.com/ng-wemaba-logo.png\" height='60px' alt=\"\">\n\t\t\t\t</a>\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"https://www.ibm.com/innovate/branding/logoartwork/logoartwork.nsf/IBM_logoRR_pos_RGB.gif\" height='60px' alt=\"\">\n\t\t\t\t</a>\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"assets/img/partner/3.png\"  height='60px' alt=\"\">\n\t\t\t\t</a>\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"assets/img/partner/4.png\"  height='60px' alt=\"\">\n\t\t\t\t</a>\n\t\t\t\t<a href=\"#\">\n\t\t\t\t\t<img src=\"assets/img/partner/5.png\"  height='60px' alt=\"\">\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- Clients section end -->\n\n\t<footer class=\"footer-section set-bg\" data-setbg=\"assets/img/footer-bg.jpg\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-3 col-md-6 footer-widget\">\n\t\t\t\t\t<img src=\"assets/logop.png\" alt=\"\">\n\t\t\t\t\t<p>Resourceful Properties is the Real Estate Consultants firm and resulted from the need to adequately service our client’s interests in property related matters which have arisen</p>\n\t\t\t\t\t<div class=\"social\">\n            <a href=\"https://www.facebook.com/pages/category/Local-Business/Resourceful-Properties-296818430474894/\"><i class=\"fab fa-facebook-f\"></i></a>\n            <!-- <a href=\"\"><i class=\"fab fa-twitter\"></i></a> -->\n            <a href=\"https://www.instagram.com/resourceful_properties/\"><i class=\"fab fa-instagram\"></i></a>\n            <a href=\"https://www.linkedin.com/company/resourceful-properties/about/\"><i class=\"fab fa-linkedin\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-3 col-md-6 footer-widget\">\n\t\t\t\t\t<div class=\"contact-widget\">\n\t\t\t\t\t\t<h5 class=\"fw-title\">CONTACT US</h5>\n\t\t\t\t\t\t<p><i class=\"fa fa-map-marker\"></i>64, AWOLOWO ROAD\tSOUTH WEST IKOYI LAGOS\n\t\t\t\t\t\t\t </p>\n\t\t\t\t\t\t<p><i class=\"fa fa-phone\"></i>+234-(0)803-473- 8744</p>\n\t\t\t\t\t\t<p><i class=\"fa fa-envelope\"></i>kunledavids@yahoo.com</p>\n\t\t\t\t\t\t<p><i class=\"fas fa-clock\"></i>Mon - Sat, 08 AM - 06 PM</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-3 col-md-6 footer-widget\">\n\t\t\t\t\t<div class=\"double-menu-widget\">\n\t\t\t\t\t\t<h5 class=\"fw-title\">POPULAR PLACES</h5>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a href=\"\">Lagos</a></li>\n\t\t\t\t\t\t\t<li><a href=\"\">Ibadan</a></li>\n\t\t\t\t\t\t\t<li><a href=\"\">Abuja</a></li>\n\t\t\t\t\t\t\t<li><a href=\"\">Calabar</a></li>\n\t\t\t\t\t\t\t<li><a href=\"\">Kano</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li><a href=\"\">Lekki</a></li>\n\t\t\t\t\t\t\t<li><a href=\"\">Victoria Island</a></li>\n\t\t\t\t\t\t\t<li><a href=\"\">Yaba</a></li>\n\t\t\t\t\t\t\t<li><a href=\"\">SUrulere</a></li>\n\t\t\t\t\t\t\t<li><a href=\"\">Lagos Island</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-3 col-md-6  footer-widget\">\n\t\t\t\t\t<div class=\"newslatter-widget\">\n\t\t\t\t\t\t<h5 class=\"fw-title\">NEWSLETTER</h5>\n\t\t\t\t\t\t<p>Subscribe your email to get the latest news and new offer also discount</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"footer-bottom\">\n\t\t\t\t<div class=\"footer-nav\">\n\t\t\t\t\t<ul>\n            <li><a [routerLink]=\"['../dashboard']\">HOME</a></li>\n            <li><a [routerLink]=\"['../employee']\">FEATURED LISTING</a></li>\n            <li><a [routerLink]=\"['../about']\">ABOUT US</a></li>\n            <li><a [routerLink]=\"['../pages']\">PAGES</a></li>\n            <li><a [routerLink]=\"['../blog']\">BLOG</a></li>\n            <li><a [routerLink]=\"['../contact']\">CONTACT</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"copyright\">\n\t\t\t\t\t<p>\nCopyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved\n</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/@component/viewblog/viewblog.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/@component/viewblog/viewblog.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>viewblog works!</p>\n"

/***/ }),

/***/ "./src/app/@component/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/@component/about/about.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Bjb21wb25lbnQvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/@component/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/@component/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AboutComponent = /** @class */ (function () {
    function AboutComponent(Route) {
        this.Route = Route;
    }
    AboutComponent.prototype.ngOnInit = function () {
        $('.nav-switch').on('click', function (event) {
            $('.main-menu').slideToggle(400);
            event.preventDefault();
        });
        var window_w = $(window).innerWidth();
        $(window).on('load', function () {
            /*------------------
              Preloder
            --------------------*/
            $(".loader").fadeOut();
            $("#preloder").delay(400).fadeOut("slow");
        });
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
        $('.clients-slider').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 10
                },
                600: {
                    items: 3
                },
                800: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
        $('.gallery').find('.gallery-item').each(function () {
            var pi_height1 = $(this).outerWidth(true), pi_height2 = pi_height1 / 2;
            if ($(this).hasClass('grid-long') && window_w > 991) {
                $(this).css('height', pi_height2);
            }
            else {
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
            items: 1,
            slideSpeed: 2000,
            nav: false,
            autoplay: true,
            dots: true,
            loop: true,
            responsiveRefreshRate: 200,
        }).on('changed.owl.carousel', syncPosition);
        sync2.on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        }).owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: true,
            margin: 10,
            smartSpeed: 200,
            slideSpeed: 500,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            slideBy: slidesPerPage,
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);
        function syncPosition(el) {
            //if you set loop to false, you have to restore this next line
            //var current = el.item.index;
            //if you disable loop you have to comment this block
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);
            if (current < 0) {
                current = count;
            }
            if (current > count) {
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
            if (syncedSecondary) {
                var number = el.item.index;
                sync1.data('owl.carousel').to(number, 100, true);
            }
        }
        sync2.on("click", ".owl-item", function (e) {
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
    };
    AboutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/@component/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/@component/about/about.component.scss")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/@component/blog/blog.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/@component/blog/blog.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Bjb21wb25lbnQvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/@component/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/@component/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/api.service */ "./src/app/@shared/api.service.ts");
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/fesm5/ng-uikit-pro-standard.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/@shared/enum */ "./src/app/@shared/enum.ts");
/* harmony import */ var src_app_shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/@shared/shared/shared.service */ "./src/app/@shared/shared/shared.service.ts");







var BlogComponent = /** @class */ (function () {
    function BlogComponent(Api, toastrService, router, shared) {
        this.Api = Api;
        this.toastrService = toastrService;
        this.router = router;
        this.shared = shared;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        $('.nav-switch').on('click', function (event) {
            $('.main-menu').slideToggle(400);
            event.preventDefault();
        });
        var window_w = $(window).innerWidth();
        $(window).on('load', function () {
            /*------------------
              Preloder
            --------------------*/
            $(".loader").fadeOut();
            $("#preloder").delay(400).fadeOut("slow");
        });
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
        $('.clients-slider').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 10
                },
                600: {
                    items: 3
                },
                800: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
        $('.gallery').find('.gallery-item').each(function () {
            var pi_height1 = $(this).outerWidth(true), pi_height2 = pi_height1 / 2;
            if ($(this).hasClass('grid-long') && window_w > 991) {
                $(this).css('height', pi_height2);
            }
            else {
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
            items: 1,
            slideSpeed: 2000,
            nav: false,
            autoplay: true,
            dots: true,
            loop: true,
            responsiveRefreshRate: 200,
        }).on('changed.owl.carousel', syncPosition);
        sync2.on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        }).owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: true,
            margin: 10,
            smartSpeed: 200,
            slideSpeed: 500,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            slideBy: slidesPerPage,
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);
        function syncPosition(el) {
            //if you set loop to false, you have to restore this next line
            //var current = el.item.index;
            //if you disable loop you have to comment this block
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);
            if (current < 0) {
                current = count;
            }
            if (current > count) {
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
            if (syncedSecondary) {
                var number = el.item.index;
                sync1.data('owl.carousel').to(number, 100, true);
            }
        }
        sync2.on("click", ".owl-item", function (e) {
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
        this.Api.Read(src_app_shared_enum__WEBPACK_IMPORTED_MODULE_5__["APIENUM"].BLOG).subscribe(function (res) {
            _this.blog = res.data;
        }, function (err) {
            _this.toastrService.error(err.error.message);
        });
    };
    BlogComponent.prototype.blogy = function (el) {
        this.router.navigate(['/main/single-blog']);
        this.shared.AddInfo(el);
    };
    BlogComponent.ctorParameters = function () { return [
        { type: src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_3__["ToastService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: src_app_shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }
    ]; };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/index.js!./src/app/@component/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/@component/blog/blog.component.scss")]
        })
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/@component/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/@component/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Bjb21wb25lbnQvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/@component/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/@component/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/api.service */ "./src/app/@shared/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/@shared/enum */ "./src/app/@shared/enum.ts");
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/fesm5/ng-uikit-pro-standard.js");






var ContactComponent = /** @class */ (function () {
    function ContactComponent(Api, toastrService, _fb) {
        this.Api = Api;
        this.toastrService = toastrService;
        this._fb = _fb;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.Contact = this._fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            status: ['Active'],
        });
        $('.nav-switch').on('click', function (event) {
            $('.main-menu').slideToggle(400);
            event.preventDefault();
        });
        var window_w = $(window).innerWidth();
        $(window).on('load', function () {
            /*------------------
              Preloder
            --------------------*/
            $(".loader").fadeOut();
            $("#preloder").delay(400).fadeOut("slow");
        });
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
        $('.clients-slider').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 10
                },
                600: {
                    items: 3
                },
                800: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
        $('.gallery').find('.gallery-item').each(function () {
            var pi_height1 = $(this).outerWidth(true), pi_height2 = pi_height1 / 2;
            if ($(this).hasClass('grid-long') && window_w > 991) {
                $(this).css('height', pi_height2);
            }
            else {
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
            items: 1,
            slideSpeed: 2000,
            nav: false,
            autoplay: true,
            dots: true,
            loop: true,
            responsiveRefreshRate: 200,
        }).on('changed.owl.carousel', syncPosition);
        sync2.on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        }).owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: true,
            margin: 10,
            smartSpeed: 200,
            slideSpeed: 500,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            slideBy: slidesPerPage,
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);
        function syncPosition(el) {
            //if you set loop to false, you have to restore this next line
            //var current = el.item.index;
            //if you disable loop you have to comment this block
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);
            if (current < 0) {
                current = count;
            }
            if (current > count) {
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
            if (syncedSecondary) {
                var number = el.item.index;
                sync1.data('owl.carousel').to(number, 100, true);
            }
        }
        sync2.on("click", ".owl-item", function (e) {
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
    };
    Object.defineProperty(ContactComponent.prototype, "name", {
        get: function () {
            return this.Contact.get('name');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactComponent.prototype, "message", {
        get: function () {
            return this.Contact.get('message');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContactComponent.prototype, "email", {
        get: function () {
            return this.Contact.get('message');
        },
        enumerable: true,
        configurable: true
    });
    ContactComponent.prototype.createContact = function () {
        var _this = this;
        this.Contact.disable();
        var value = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ status: 'active' }, this.Contact.value);
        this.Api.Create(src_app_shared_enum__WEBPACK_IMPORTED_MODULE_4__["APIENUM"].User, value).subscribe(function (res) {
            _this.success = res.message;
            _this.toastrService.success(res.message);
        }, function (err) {
            _this.error = err.error.message;
            _this.Contact.enable();
            _this.toastrService.error(err.error.message);
        }, function () {
            setTimeout(function () {
                _this.success = '';
                _this.error = '';
                _this.Contact.reset();
                _this.toastrService.clear();
                _this.Contact.enable();
            }, 500);
        });
    };
    ContactComponent.ctorParameters = function () { return [
        { type: src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/@component/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/@component/contact/contact.component.scss")]
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/@component/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/@component/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Full Page Carousel itself*/\n.carousel-caption {\n  padding-bottom: 8%;\n}\n/**\n * Owl Carousel v2.2.1\n * Copyright 2013-2017 David Deutsch\n * Licensed under  ()\n */\n/*\n *  Owl Carousel - Core\n */\n.owl-carousel {\n  display: none;\n  width: 100%;\n  -webkit-tap-highlight-color: transparent;\n  /* position relative and z-index fix webkit rendering fonts issue */\n  position: relative;\n  z-index: 1;\n}\n.owl-carousel .owl-stage {\n  position: relative;\n  -ms-touch-action: pan-Y;\n  -moz-backface-visibility: hidden;\n  /* fix firefox animation glitch */\n}\n.owl-carousel .owl-stage:after {\n  content: \".\";\n  display: block;\n  clear: both;\n  visibility: hidden;\n  line-height: 0;\n  height: 0;\n}\n.owl-carousel .owl-stage-outer {\n  position: relative;\n  overflow: hidden;\n  /* fix for flashing background */\n  -webkit-transform: translate3d(0px, 0px, 0px);\n}\n.owl-carousel .owl-wrapper,\n.owl-carousel .owl-item {\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  -ms-backface-visibility: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n}\n.owl-carousel .owl-item {\n  position: relative;\n  min-height: 1px;\n  float: left;\n  -webkit-backface-visibility: hidden;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n.owl-carousel .owl-item img {\n  display: block;\n  width: 100%;\n}\n.owl-carousel .owl-nav.disabled,\n.owl-carousel .owl-dots.disabled {\n  display: none;\n}\n.owl-carousel .owl-nav .owl-prev,\n.owl-carousel .owl-nav .owl-next,\n.owl-carousel .owl-dot {\n  cursor: pointer;\n  cursor: hand;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.owl-carousel.owl-loaded {\n  display: block;\n}\n.owl-carousel.owl-loading {\n  opacity: 0;\n  display: block;\n}\n.owl-carousel.owl-hidden {\n  opacity: 0;\n}\n.owl-carousel.owl-refresh .owl-item {\n  visibility: hidden;\n}\n.owl-carousel.owl-drag .owl-item {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.owl-carousel.owl-grab {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.owl-carousel.owl-rtl {\n  direction: rtl;\n}\n.owl-carousel.owl-rtl .owl-item {\n  float: right;\n}\n/* No Js */\n.no-js .owl-carousel {\n  display: block;\n}\n/*\n *  Owl Carousel - Animate Plugin\n */\n.owl-carousel .animated {\n  -webkit-animation-duration: 1000ms;\n          animation-duration: 1000ms;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n.owl-carousel .owl-animated-in {\n  z-index: 0;\n}\n.owl-carousel .owl-animated-out {\n  z-index: 1;\n}\n.owl-carousel .fadeOut {\n  -webkit-animation-name: fadeOut;\n          animation-name: fadeOut;\n}\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n/*\n * \tOwl Carousel - Auto Height Plugin\n */\n.owl-height {\n  transition: height 500ms ease-in-out;\n}\n/*\n * \tOwl Carousel - Lazy Load Plugin\n */\n.owl-carousel .owl-item .owl-lazy {\n  opacity: 0;\n  transition: opacity 400ms ease;\n}\n.owl-carousel .owl-item img.owl-lazy {\n  transform-style: preserve-3d;\n}\n/*\n * \tOwl Carousel - Video Plugin\n */\n.owl-carousel .owl-video-wrapper {\n  position: relative;\n  height: 100%;\n  background: #000;\n}\n.owl-carousel .owl-video-play-icon {\n  position: absolute;\n  height: 80px;\n  width: 80px;\n  left: 50%;\n  top: 50%;\n  margin-left: -40px;\n  margin-top: -40px;\n  /* background: url(\"owl.video.play.png\") no-repeat; */\n  cursor: pointer;\n  z-index: 1;\n  -webkit-backface-visibility: hidden;\n  transition: transform 100ms ease;\n}\n.owl-carousel .owl-video-play-icon:hover {\n  transform: scale(1.3, 1.3);\n}\n.owl-carousel .owl-video-playing .owl-video-tn,\n.owl-carousel .owl-video-playing .owl-video-play-icon {\n  display: none;\n}\n.owl-carousel .owl-video-tn {\n  opacity: 0;\n  height: 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  transition: opacity 400ms ease;\n}\n.owl-carousel .owl-video-frame {\n  position: relative;\n  z-index: 1;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQGNvbXBvbmVudC9kYXNoYm9hcmQvQzpcXFVzZXJzXFxIYXJkZWN4XFxFc3RhdGUtbWFuYWdlbWVudC0vc3JjXFxhcHBcXEBjb21wb25lbnRcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9AY29tcG9uZW50L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsNkJBQUE7QUF3QkE7RUFDRSxrQkFBQTtBQ3hCRjtBRDBCQTs7OztFQUFBO0FBS0E7O0VBQUE7QUFHQztFQUNDLGFBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSxtRUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ3ZCRjtBRHdCRTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FDckJKO0FEc0JFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ25CSjtBRG9CRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZDQUFBO0FDakJKO0FEa0JFOztFQUVFLG1DQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLHVDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtBQ2ZKO0FEZ0JFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQkFBQTtBQ2JKO0FEY0U7RUFDRSxjQUFBO0VBQ0EsV0FBQTtBQ1hKO0FEWUU7O0VBRUUsYUFBQTtBQ1RKO0FEVUU7OztFQUdFLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFFQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNQSjtBRFFFO0VBQ0UsY0FBQTtBQ0xKO0FETUU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQ0hKO0FESUU7RUFDRSxVQUFBO0FDREo7QURFRTtFQUNFLGtCQUFBO0FDQ0o7QURBRTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDR0o7QURGRTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUFBLFlBQUE7QUNLSjtBREpFO0VBQ0UsY0FBQTtBQ09KO0FETkU7RUFDRSxZQUFBO0FDU0o7QURQQSxVQUFBO0FBQ0E7RUFDRSxjQUFBO0FDVUY7QURSQTs7RUFBQTtBQUdBO0VBQ0Usa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGlDQUFBO1VBQUEseUJBQUE7QUNXRjtBRFRBO0VBQ0UsVUFBQTtBQ1lGO0FEVkE7RUFDRSxVQUFBO0FDYUY7QURYQTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUNjRjtBRFpBO0VBQ0U7SUFDRSxVQUFBO0VDZUY7RURkQTtJQUNFLFVBQUE7RUNnQkY7QUFDRjtBRHJCQTtFQUNFO0lBQ0UsVUFBQTtFQ2VGO0VEZEE7SUFDRSxVQUFBO0VDZ0JGO0FBQ0Y7QURmQTs7RUFBQTtBQUdBO0VBQ0Usb0NBQUE7QUNpQkY7QURmQTs7RUFBQTtBQUdBO0VBQ0UsVUFBQTtFQUNBLDhCQUFBO0FDa0JGO0FEaEJBO0VBQ0UsNEJBQUE7QUNtQkY7QURqQkE7O0VBQUE7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDb0JGO0FEbEJBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFEQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLGdDQUFBO0FDcUJGO0FEbkJBO0VBRU0sMEJBQUE7QUNzQk47QURwQkE7O0VBRUUsYUFBQTtBQ3VCRjtBRHJCQTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7QUN3QkY7QUR0QkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ3lCRiIsImZpbGUiOiJzcmMvYXBwL0Bjb21wb25lbnQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLyogRnVsbCBQYWdlIENhcm91c2VsIGl0c2VsZiovXHJcbi8vIC5jYXJvdXNlbCB7XHJcbi8vICAgaGVpZ2h0OiAxMDB2aDtcclxuLy8gfVxyXG5cclxuLy8gLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciB7XHJcbi8vICAgaGVpZ2h0OiAxMDB2aDtcclxuLy8gfVxyXG5cclxuLy8gLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSxcclxuLy8gLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciAuYWN0aXZlIHtcclxuLy8gICBoZWlnaHQ6IDEwMHZoO1xyXG4vLyB9XHJcblxyXG4vLyBpbWcge1xyXG4vLyAgICYuZC1ibG9jayB7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICB3aWR0aDogMTAwJTtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIC5wcm9wZXJ0aWUtaXRlbXtcclxuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3Byb3BlcnRpZS8xLmpwZ1wiKTtcclxuLy8gfVxyXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgcGFkZGluZy1ib3R0b206IDglO1xyXG59XHJcbi8qKlxyXG4gKiBPd2wgQ2Fyb3VzZWwgdjIuMi4xXHJcbiAqIENvcHlyaWdodCAyMDEzLTIwMTcgRGF2aWQgRGV1dHNjaFxyXG4gKiBMaWNlbnNlZCB1bmRlciAgKClcclxuICovXHJcbi8qXHJcbiAqICBPd2wgQ2Fyb3VzZWwgLSBDb3JlXHJcbiAqL1xyXG4gLm93bC1jYXJvdXNlbCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC8qIHBvc2l0aW9uIHJlbGF0aXZlIGFuZCB6LWluZGV4IGZpeCB3ZWJraXQgcmVuZGVyaW5nIGZvbnRzIGlzc3VlICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7IH1cclxuICAub3dsLWNhcm91c2VsIC5vd2wtc3RhZ2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLW1zLXRvdWNoLWFjdGlvbjogcGFuLVk7XHJcbiAgICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC8qIGZpeCBmaXJlZm94IGFuaW1hdGlvbiBnbGl0Y2ggKi8gfVxyXG4gIC5vd2wtY2Fyb3VzZWwgLm93bC1zdGFnZTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIi5cIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIGhlaWdodDogMDsgfVxyXG4gIC5vd2wtY2Fyb3VzZWwgLm93bC1zdGFnZS1vdXRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLyogZml4IGZvciBmbGFzaGluZyBiYWNrZ3JvdW5kICovXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7IH1cclxuICAub3dsLWNhcm91c2VsIC5vd2wtd3JhcHBlcixcclxuICAub3dsLWNhcm91c2VsIC5vd2wtaXRlbSB7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLW1zLWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9XHJcbiAgLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IH1cclxuICAub3dsLWNhcm91c2VsIC5vd2wtaXRlbSBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTsgfVxyXG4gIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYuZGlzYWJsZWQsXHJcbiAgLm93bC1jYXJvdXNlbCAub3dsLWRvdHMuZGlzYWJsZWQge1xyXG4gICAgZGlzcGxheTogbm9uZTsgfVxyXG4gIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1wcmV2LFxyXG4gIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1uZXh0LFxyXG4gIC5vd2wtY2Fyb3VzZWwgLm93bC1kb3Qge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY3Vyc29yOiBoYW5kO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxyXG4gIC5vd2wtY2Fyb3VzZWwub3dsLWxvYWRlZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jazsgfVxyXG4gIC5vd2wtY2Fyb3VzZWwub3dsLWxvYWRpbmcge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgLm93bC1jYXJvdXNlbC5vd2wtaGlkZGVuIHtcclxuICAgIG9wYWNpdHk6IDA7IH1cclxuICAub3dsLWNhcm91c2VsLm93bC1yZWZyZXNoIC5vd2wtaXRlbSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cclxuICAub3dsLWNhcm91c2VsLm93bC1kcmFnIC5vd2wtaXRlbSB7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lOyB9XHJcbiAgLm93bC1jYXJvdXNlbC5vd2wtZ3JhYiB7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICBjdXJzb3I6IGdyYWI7IH1cclxuICAub3dsLWNhcm91c2VsLm93bC1ydGwge1xyXG4gICAgZGlyZWN0aW9uOiBydGw7IH1cclxuICAub3dsLWNhcm91c2VsLm93bC1ydGwgLm93bC1pdGVtIHtcclxuICAgIGZsb2F0OiByaWdodDsgfVxyXG5cclxuLyogTm8gSnMgKi9cclxuLm5vLWpzIC5vd2wtY2Fyb3VzZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrOyB9XHJcblxyXG4vKlxyXG4gKiAgT3dsIENhcm91c2VsIC0gQW5pbWF0ZSBQbHVnaW5cclxuICovXHJcbi5vd2wtY2Fyb3VzZWwgLmFuaW1hdGVkIHtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoOyB9XHJcblxyXG4ub3dsLWNhcm91c2VsIC5vd2wtYW5pbWF0ZWQtaW4ge1xyXG4gIHotaW5kZXg6IDA7IH1cclxuXHJcbi5vd2wtY2Fyb3VzZWwgLm93bC1hbmltYXRlZC1vdXQge1xyXG4gIHotaW5kZXg6IDE7IH1cclxuXHJcbi5vd2wtY2Fyb3VzZWwgLmZhZGVPdXQge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0OyB9XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDE7IH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDA7IH0gfVxyXG5cclxuLypcclxuICogXHRPd2wgQ2Fyb3VzZWwgLSBBdXRvIEhlaWdodCBQbHVnaW5cclxuICovXHJcbi5vd2wtaGVpZ2h0IHtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgNTAwbXMgZWFzZS1pbi1vdXQ7IH1cclxuXHJcbi8qXHJcbiAqIFx0T3dsIENhcm91c2VsIC0gTGF6eSBMb2FkIFBsdWdpblxyXG4gKi9cclxuLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0gLm93bC1sYXp5IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgZWFzZTsgfVxyXG5cclxuLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0gaW1nLm93bC1sYXp5IHtcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkOyB9XHJcblxyXG4vKlxyXG4gKiBcdE93bCBDYXJvdXNlbCAtIFZpZGVvIFBsdWdpblxyXG4gKi9cclxuLm93bC1jYXJvdXNlbCAub3dsLXZpZGVvLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzAwMDsgfVxyXG5cclxuLm93bC1jYXJvdXNlbCAub3dsLXZpZGVvLXBsYXktaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogODBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gIC8qIGJhY2tncm91bmQ6IHVybChcIm93bC52aWRlby5wbGF5LnBuZ1wiKSBuby1yZXBlYXQ7ICovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2U7IH1cclxuXHJcbi5vd2wtY2Fyb3VzZWwgLm93bC12aWRlby1wbGF5LWljb246aG92ZXIge1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMywgMS4zKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMsIDEuMyk7IH1cclxuXHJcbi5vd2wtY2Fyb3VzZWwgLm93bC12aWRlby1wbGF5aW5nIC5vd2wtdmlkZW8tdG4sXHJcbi5vd2wtY2Fyb3VzZWwgLm93bC12aWRlby1wbGF5aW5nIC5vd2wtdmlkZW8tcGxheS1pY29uIHtcclxuICBkaXNwbGF5OiBub25lOyB9XHJcblxyXG4ub3dsLWNhcm91c2VsIC5vd2wtdmlkZW8tdG4ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBlYXNlOyB9XHJcblxyXG4ub3dsLWNhcm91c2VsIC5vd2wtdmlkZW8tZnJhbWUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTsgfVxyXG5cclxuICBcclxuIiwiLyogRnVsbCBQYWdlIENhcm91c2VsIGl0c2VsZiovXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiA4JTtcbn1cblxuLyoqXG4gKiBPd2wgQ2Fyb3VzZWwgdjIuMi4xXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE3IERhdmlkIERldXRzY2hcbiAqIExpY2Vuc2VkIHVuZGVyICAoKVxuICovXG4vKlxuICogIE93bCBDYXJvdXNlbCAtIENvcmVcbiAqL1xuLm93bC1jYXJvdXNlbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAvKiBwb3NpdGlvbiByZWxhdGl2ZSBhbmQgei1pbmRleCBmaXggd2Via2l0IHJlbmRlcmluZyBmb250cyBpc3N1ZSAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5vd2wtY2Fyb3VzZWwgLm93bC1zdGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLW1zLXRvdWNoLWFjdGlvbjogcGFuLVk7XG4gIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAvKiBmaXggZmlyZWZveCBhbmltYXRpb24gZ2xpdGNoICovXG59XG5cbi5vd2wtY2Fyb3VzZWwgLm93bC1zdGFnZTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiLlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLm93bC1jYXJvdXNlbCAub3dsLXN0YWdlLW91dGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvKiBmaXggZm9yIGZsYXNoaW5nIGJhY2tncm91bmQgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xufVxuXG4ub3dsLWNhcm91c2VsIC5vd2wtd3JhcHBlcixcbi5vd2wtY2Fyb3VzZWwgLm93bC1pdGVtIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtbXMtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG59XG5cbi5vd2wtY2Fyb3VzZWwgLm93bC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xufVxuXG4ub3dsLWNhcm91c2VsIC5vd2wtaXRlbSBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5vd2wtY2Fyb3VzZWwgLm93bC1uYXYuZGlzYWJsZWQsXG4ub3dsLWNhcm91c2VsIC5vd2wtZG90cy5kaXNhYmxlZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1wcmV2LFxuLm93bC1jYXJvdXNlbCAub3dsLW5hdiAub3dsLW5leHQsXG4ub3dsLWNhcm91c2VsIC5vd2wtZG90IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjdXJzb3I6IGhhbmQ7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm93bC1jYXJvdXNlbC5vd2wtbG9hZGVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5vd2wtY2Fyb3VzZWwub3dsLWxvYWRpbmcge1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm93bC1jYXJvdXNlbC5vd2wtaGlkZGVuIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm93bC1jYXJvdXNlbC5vd2wtcmVmcmVzaCAub3dsLWl0ZW0ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5vd2wtY2Fyb3VzZWwub3dsLWRyYWcgLm93bC1pdGVtIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm93bC1jYXJvdXNlbC5vd2wtZ3JhYiB7XG4gIGN1cnNvcjogbW92ZTtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG4ub3dsLWNhcm91c2VsLm93bC1ydGwge1xuICBkaXJlY3Rpb246IHJ0bDtcbn1cblxuLm93bC1jYXJvdXNlbC5vd2wtcnRsIC5vd2wtaXRlbSB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLyogTm8gSnMgKi9cbi5uby1qcyAub3dsLWNhcm91c2VsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qXG4gKiAgT3dsIENhcm91c2VsIC0gQW5pbWF0ZSBQbHVnaW5cbiAqL1xuLm93bC1jYXJvdXNlbCAuYW5pbWF0ZWQge1xuICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLm93bC1jYXJvdXNlbCAub3dsLWFuaW1hdGVkLWluIHtcbiAgei1pbmRleDogMDtcbn1cblxuLm93bC1jYXJvdXNlbCAub3dsLWFuaW1hdGVkLW91dCB7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5vd2wtY2Fyb3VzZWwgLmZhZGVPdXQge1xuICBhbmltYXRpb24tbmFtZTogZmFkZU91dDtcbn1cblxuQGtleWZyYW1lcyBmYWRlT3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuLypcbiAqIFx0T3dsIENhcm91c2VsIC0gQXV0byBIZWlnaHQgUGx1Z2luXG4gKi9cbi5vd2wtaGVpZ2h0IHtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG4vKlxuICogXHRPd2wgQ2Fyb3VzZWwgLSBMYXp5IExvYWQgUGx1Z2luXG4gKi9cbi5vd2wtY2Fyb3VzZWwgLm93bC1pdGVtIC5vd2wtbGF6eSB7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgZWFzZTtcbn1cblxuLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0gaW1nLm93bC1sYXp5IHtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLypcbiAqIFx0T3dsIENhcm91c2VsIC0gVmlkZW8gUGx1Z2luXG4gKi9cbi5vd2wtY2Fyb3VzZWwgLm93bC12aWRlby13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG59XG5cbi5vd2wtY2Fyb3VzZWwgLm93bC12aWRlby1wbGF5LWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbiAgbWFyZ2luLXRvcDogLTQwcHg7XG4gIC8qIGJhY2tncm91bmQ6IHVybChcIm93bC52aWRlby5wbGF5LnBuZ1wiKSBuby1yZXBlYXQ7ICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogMTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBlYXNlO1xufVxuXG4ub3dsLWNhcm91c2VsIC5vd2wtdmlkZW8tcGxheS1pY29uOmhvdmVyIHtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4zLCAxLjMpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMywgMS4zKTtcbn1cblxuLm93bC1jYXJvdXNlbCAub3dsLXZpZGVvLXBsYXlpbmcgLm93bC12aWRlby10bixcbi5vd2wtY2Fyb3VzZWwgLm93bC12aWRlby1wbGF5aW5nIC5vd2wtdmlkZW8tcGxheS1pY29uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm93bC1jYXJvdXNlbCAub3dsLXZpZGVvLXRuIHtcbiAgb3BhY2l0eTogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgZWFzZTtcbn1cblxuLm93bC1jYXJvdXNlbCAub3dsLXZpZGVvLWZyYW1lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/@component/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/@component/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@shared/api.service */ "./src/app/@shared/api.service.ts");
/* harmony import */ var src_app_shared_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/@shared/enum */ "./src/app/@shared/enum.ts");
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/fesm5/ng-uikit-pro-standard.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/@shared/shared/shared.service */ "./src/app/@shared/shared/shared.service.ts");








var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(Api, toastrService, Route, shared, _sanitizer) {
        this.Api = Api;
        this.toastrService = toastrService;
        this.Route = Route;
        this.shared = shared;
        this._sanitizer = _sanitizer;
        this.searchText = '';
    }
    DashboardComponent.prototype.sanitizeImage = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle("url(" + image + ")");
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Api.Read(src_app_shared_enum__WEBPACK_IMPORTED_MODULE_4__["APIENUM"].property).subscribe(function (res) {
            _this.property = res.data;
            var mostRecentDate = new Date(Math.max.apply(null, _this.property.map(function (e) {
                return new Date(e.registered);
            })));
            var mostRecentObject = _this.property.filter(function (e) {
                var d = new Date(e.registered);
                return d.getTime() == mostRecentDate.getTime();
            })[0];
        }, function (err) {
            _this.toastrService.error(err.error.message);
        });
        this.Api.Read(src_app_shared_enum__WEBPACK_IMPORTED_MODULE_4__["APIENUM"].BLOG).subscribe(function (res) {
            _this.blog = res.data;
        }, function (err) {
            _this.toastrService.error(err.error.message);
        });
        $('.nav-switch').on('click', function (event) {
            $('.main-menu').slideToggle(400);
            event.preventDefault();
        });
        var window_w = $(window).innerWidth();
        $(window).on('load', function () {
            /*------------------
              Preloder
            --------------------*/
            $(".loader").fadeOut();
            $("#preloder").delay(400).fadeOut("slow");
        });
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
        $('.clients-slider').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 10
                },
                600: {
                    items: 3
                },
                800: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
        $('.gallery').find('.gallery-item').each(function () {
            var pi_height1 = $(this).outerWidth(true), pi_height2 = pi_height1 / 2;
            if ($(this).hasClass('grid-long') && window_w > 991) {
                $(this).css('height', pi_height2);
            }
            else {
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
            items: 1,
            slideSpeed: 2000,
            nav: false,
            autoplay: true,
            dots: true,
            loop: true,
            responsiveRefreshRate: 200,
        }).on('changed.owl.carousel', syncPosition);
        sync2.on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        }).owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: true,
            margin: 10,
            smartSpeed: 200,
            slideSpeed: 500,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            slideBy: slidesPerPage,
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);
        function syncPosition(el) {
            //if you set loop to false, you have to restore this next line
            //var current = el.item.index;
            //if you disable loop you have to comment this block
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);
            if (current < 0) {
                current = count;
            }
            if (current > count) {
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
            if (syncedSecondary) {
                var number = el.item.index;
                sync1.data('owl.carousel').to(number, 100, true);
            }
        }
        sync2.on("click", ".owl-item", function (e) {
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
    };
    DashboardComponent.prototype.view = function (el) {
        this.Route.navigate(['/main/view']);
        this.shared.AddInfo(el);
    };
    DashboardComponent.prototype.blogy = function (el) {
        this.Route.navigate(['/main/single-blog']);
        this.shared.AddInfo(el);
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_5__["ToastService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: src_app_shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_5__["MdbTableDirective"], { static: true })
    ], DashboardComponent.prototype, "mdbTable", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/@component/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/@component/dashboard/dashboard.component.scss")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/@component/employee/employee.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/@component/employee/employee.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,\nbody,\n.view {\n  height: 100vh;\n}\n\n/* Full Page Carousel itself*/\n\n.carousel {\n  height: 100vh;\n}\n\n.carousel .carousel-inner {\n  height: 100vh;\n}\n\n.carousel .carousel-inner .carousel-item,\n.carousel .carousel-inner .active {\n  height: 100vh;\n}\n\nimg.d-block {\n  height: 100vh;\n}\n\n.propertie-item {\n  background-image: url('1.jpg');\n}\n\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 190px;\n  color: #fff;\n  text-align: center;\n}\n\n/**\n * Owl Carousel v2.2.1\n * Copyright 2013-2017 David Deutsch\n * Licensed under  ()\n */\n\n/*\n *  Owl Carousel - Core\n */\n\n.owl-carousel {\n  display: none;\n  width: 100%;\n  -webkit-tap-highlight-color: transparent;\n  /* position relative and z-index fix webkit rendering fonts issue */\n  position: relative;\n  z-index: 1;\n}\n\n.owl-carousel .owl-stage {\n  position: relative;\n  -ms-touch-action: pan-Y;\n  -moz-backface-visibility: hidden;\n  /* fix firefox animation glitch */\n}\n\n.owl-carousel .owl-stage:after {\n  content: \".\";\n  display: block;\n  clear: both;\n  visibility: hidden;\n  line-height: 0;\n  height: 0;\n}\n\n.owl-carousel .owl-stage-outer {\n  position: relative;\n  overflow: hidden;\n  /* fix for flashing background */\n  -webkit-transform: translate3d(0px, 0px, 0px);\n}\n\n.owl-carousel .owl-wrapper,\n.owl-carousel .owl-item {\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  -ms-backface-visibility: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n  -moz-transform: translate3d(0, 0, 0);\n  -ms-transform: translate3d(0, 0, 0);\n}\n\n.owl-carousel .owl-item {\n  position: relative;\n  min-height: 1px;\n  float: left;\n  -webkit-backface-visibility: hidden;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\n.owl-carousel .owl-item img {\n  display: block;\n  width: 100%;\n}\n\n.owl-carousel .owl-nav.disabled,\n.owl-carousel .owl-dots.disabled {\n  display: none;\n}\n\n.owl-carousel .owl-nav .owl-prev,\n.owl-carousel .owl-nav .owl-next,\n.owl-carousel .owl-dot {\n  cursor: pointer;\n  cursor: hand;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.owl-carousel.owl-loaded {\n  display: block;\n}\n\n.owl-carousel.owl-loading {\n  opacity: 0;\n  display: block;\n}\n\n.owl-carousel.owl-hidden {\n  opacity: 0;\n}\n\n.owl-carousel.owl-refresh .owl-item {\n  visibility: hidden;\n}\n\n.owl-carousel.owl-drag .owl-item {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.owl-carousel.owl-grab {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.owl-carousel.owl-rtl {\n  direction: rtl;\n}\n\n.owl-carousel.owl-rtl .owl-item {\n  float: right;\n}\n\n/* No Js */\n\n.no-js .owl-carousel {\n  display: block;\n}\n\n/*\n *  Owl Carousel - Animate Plugin\n */\n\n.owl-carousel .animated {\n  -webkit-animation-duration: 1000ms;\n          animation-duration: 1000ms;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n}\n\n.owl-carousel .owl-animated-in {\n  z-index: 0;\n}\n\n.owl-carousel .owl-animated-out {\n  z-index: 1;\n}\n\n.owl-carousel .fadeOut {\n  -webkit-animation-name: fadeOut;\n          animation-name: fadeOut;\n}\n\n@-webkit-keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes fadeOut {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n/*\n * \tOwl Carousel - Auto Height Plugin\n */\n\n.owl-height {\n  transition: height 500ms ease-in-out;\n}\n\n/*\n * \tOwl Carousel - Lazy Load Plugin\n */\n\n.owl-carousel .owl-item .owl-lazy {\n  opacity: 0;\n  transition: opacity 400ms ease;\n}\n\n.owl-carousel .owl-item img.owl-lazy {\n  transform-style: preserve-3d;\n}\n\n/*\n * \tOwl Carousel - Video Plugin\n */\n\n.owl-carousel .owl-video-wrapper {\n  position: relative;\n  height: 100%;\n  background: #000;\n}\n\n.owl-carousel .owl-video-play-icon {\n  position: absolute;\n  height: 80px;\n  width: 80px;\n  left: 50%;\n  top: 50%;\n  margin-left: -40px;\n  margin-top: -40px;\n  /* background: url(\"owl.video.play.png\") no-repeat; */\n  cursor: pointer;\n  z-index: 1;\n  -webkit-backface-visibility: hidden;\n  transition: transform 100ms ease;\n}\n\n.owl-carousel .owl-video-play-icon:hover {\n  transform: scale(1.3, 1.3);\n}\n\n.owl-carousel .owl-video-playing .owl-video-tn,\n.owl-carousel .owl-video-playing .owl-video-play-icon {\n  display: none;\n}\n\n.owl-carousel .owl-video-tn {\n  opacity: 0;\n  height: 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  transition: opacity 400ms ease;\n}\n\n.owl-carousel .owl-video-frame {\n  position: relative;\n  z-index: 1;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQGNvbXBvbmVudC9lbXBsb3llZS9DOlxcVXNlcnNcXEhhcmRlY3hcXEVzdGF0ZS1tYW5hZ2VtZW50LS9zcmNcXGFwcFxcQGNvbXBvbmVudFxcZW1wbG95ZWVcXGVtcGxveWVlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9AY29tcG9uZW50L2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxhQUFBO0FDQ0Y7O0FERUEsNkJBQUE7O0FBQ0E7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7O0VBRUUsYUFBQTtBQ0NGOztBREdFO0VBQ0UsYUFBQTtBQ0FKOztBRElBO0VBQ0UsOEJBQUE7QUNERjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURHQTs7OztFQUFBOztBQUtBOztFQUFBOztBQUdDO0VBQ0MsYUFBQTtFQUNBLFdBQUE7RUFDQSx3Q0FBQTtFQUNBLG1FQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDQUY7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQ0FBQTtBQ0VKOztBRERFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0lKOztBREhFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkNBQUE7QUNNSjs7QURMRTs7RUFFRSxtQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7QUNRSjs7QURQRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsMkJBQUE7QUNVSjs7QURURTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FDWUo7O0FEWEU7O0VBRUUsYUFBQTtBQ2NKOztBRGJFOzs7RUFHRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBRUEsc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDZ0JKOztBRGZFO0VBQ0UsY0FBQTtBQ2tCSjs7QURqQkU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQ29CSjs7QURuQkU7RUFDRSxVQUFBO0FDc0JKOztBRHJCRTtFQUNFLGtCQUFBO0FDd0JKOztBRHZCRTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDMEJKOztBRHpCRTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUFBLFlBQUE7QUM0Qko7O0FEM0JFO0VBQ0UsY0FBQTtBQzhCSjs7QUQ3QkU7RUFDRSxZQUFBO0FDZ0NKOztBRDlCQSxVQUFBOztBQUNBO0VBQ0UsY0FBQTtBQ2lDRjs7QUQvQkE7O0VBQUE7O0FBR0E7RUFDRSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsaUNBQUE7VUFBQSx5QkFBQTtBQ2tDRjs7QURoQ0E7RUFDRSxVQUFBO0FDbUNGOztBRGpDQTtFQUNFLFVBQUE7QUNvQ0Y7O0FEbENBO0VBQ0UsK0JBQUE7VUFBQSx1QkFBQTtBQ3FDRjs7QURuQ0E7RUFDRTtJQUNFLFVBQUE7RUNzQ0Y7RURyQ0E7SUFDRSxVQUFBO0VDdUNGO0FBQ0Y7O0FENUNBO0VBQ0U7SUFDRSxVQUFBO0VDc0NGO0VEckNBO0lBQ0UsVUFBQTtFQ3VDRjtBQUNGOztBRHRDQTs7RUFBQTs7QUFHQTtFQUNFLG9DQUFBO0FDd0NGOztBRHRDQTs7RUFBQTs7QUFHQTtFQUNFLFVBQUE7RUFDQSw4QkFBQTtBQ3lDRjs7QUR2Q0E7RUFDRSw0QkFBQTtBQzBDRjs7QUR4Q0E7O0VBQUE7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQzJDRjs7QUR6Q0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscURBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7QUM0Q0Y7O0FEMUNBO0VBRU0sMEJBQUE7QUM2Q047O0FEM0NBOztFQUVFLGFBQUE7QUM4Q0Y7O0FENUNBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtBQytDRjs7QUQ3Q0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ2dERiIsImZpbGUiOiJzcmMvYXBwL0Bjb21wb25lbnQvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLFxyXG5ib2R5LFxyXG4udmlldyB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLyogRnVsbCBQYWdlIENhcm91c2VsIGl0c2VsZiovXHJcbi5jYXJvdXNlbCB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSxcclxuLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciAuYWN0aXZlIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICYuZC1ibG9jayB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxufVxyXG5cclxuLnByb3BlcnRpZS1pdGVte1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvcHJvcGVydGllLzEuanBnXCIpO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNSU7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIGxlZnQ6IDE1JTtcclxuICB6LWluZGV4OiAxMDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTkwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi8qKlxyXG4gKiBPd2wgQ2Fyb3VzZWwgdjIuMi4xXHJcbiAqIENvcHlyaWdodCAyMDEzLTIwMTcgRGF2aWQgRGV1dHNjaFxyXG4gKiBMaWNlbnNlZCB1bmRlciAgKClcclxuICovXHJcbi8qXHJcbiAqICBPd2wgQ2Fyb3VzZWwgLSBDb3JlXHJcbiAqL1xyXG4gLm93bC1jYXJvdXNlbCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMTAwJTtcclxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC8qIHBvc2l0aW9uIHJlbGF0aXZlIGFuZCB6LWluZGV4IGZpeCB3ZWJraXQgcmVuZGVyaW5nIGZvbnRzIGlzc3VlICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7IH1cclxuICAub3dsLWNhcm91c2VsIC5vd2wtc3RhZ2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLW1zLXRvdWNoLWFjdGlvbjogcGFuLVk7XHJcbiAgICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC8qIGZpeCBmaXJlZm94IGFuaW1hdGlvbiBnbGl0Y2ggKi8gfVxyXG4gIC5vd2wtY2Fyb3VzZWwgLm93bC1zdGFnZTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIi5cIjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIGhlaWdodDogMDsgfVxyXG4gIC5vd2wtY2Fyb3VzZWwgLm93bC1zdGFnZS1vdXRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLyogZml4IGZvciBmbGFzaGluZyBiYWNrZ3JvdW5kICovXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7IH1cclxuICAub3dsLWNhcm91c2VsIC5vd2wtd3JhcHBlcixcclxuICAub3dsLWNhcm91c2VsIC5vd2wtaXRlbSB7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLW1zLWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApOyB9XHJcbiAgLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7IH1cclxuICAub3dsLWNhcm91c2VsIC5vd2wtaXRlbSBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTsgfVxyXG4gIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYuZGlzYWJsZWQsXHJcbiAgLm93bC1jYXJvdXNlbCAub3dsLWRvdHMuZGlzYWJsZWQge1xyXG4gICAgZGlzcGxheTogbm9uZTsgfVxyXG4gIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1wcmV2LFxyXG4gIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1uZXh0LFxyXG4gIC5vd2wtY2Fyb3VzZWwgLm93bC1kb3Qge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY3Vyc29yOiBoYW5kO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgfVxyXG4gIC5vd2wtY2Fyb3VzZWwub3dsLWxvYWRlZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jazsgfVxyXG4gIC5vd2wtY2Fyb3VzZWwub3dsLWxvYWRpbmcge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrOyB9XHJcbiAgLm93bC1jYXJvdXNlbC5vd2wtaGlkZGVuIHtcclxuICAgIG9wYWNpdHk6IDA7IH1cclxuICAub3dsLWNhcm91c2VsLm93bC1yZWZyZXNoIC5vd2wtaXRlbSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cclxuICAub3dsLWNhcm91c2VsLm93bC1kcmFnIC5vd2wtaXRlbSB7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lOyB9XHJcbiAgLm93bC1jYXJvdXNlbC5vd2wtZ3JhYiB7XHJcbiAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICBjdXJzb3I6IGdyYWI7IH1cclxuICAub3dsLWNhcm91c2VsLm93bC1ydGwge1xyXG4gICAgZGlyZWN0aW9uOiBydGw7IH1cclxuICAub3dsLWNhcm91c2VsLm93bC1ydGwgLm93bC1pdGVtIHtcclxuICAgIGZsb2F0OiByaWdodDsgfVxyXG5cclxuLyogTm8gSnMgKi9cclxuLm5vLWpzIC5vd2wtY2Fyb3VzZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrOyB9XHJcblxyXG4vKlxyXG4gKiAgT3dsIENhcm91c2VsIC0gQW5pbWF0ZSBQbHVnaW5cclxuICovXHJcbi5vd2wtY2Fyb3VzZWwgLmFuaW1hdGVkIHtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoOyB9XHJcblxyXG4ub3dsLWNhcm91c2VsIC5vd2wtYW5pbWF0ZWQtaW4ge1xyXG4gIHotaW5kZXg6IDA7IH1cclxuXHJcbi5vd2wtY2Fyb3VzZWwgLm93bC1hbmltYXRlZC1vdXQge1xyXG4gIHotaW5kZXg6IDE7IH1cclxuXHJcbi5vd2wtY2Fyb3VzZWwgLmZhZGVPdXQge1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0OyB9XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDE7IH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDA7IH0gfVxyXG5cclxuLypcclxuICogXHRPd2wgQ2Fyb3VzZWwgLSBBdXRvIEhlaWdodCBQbHVnaW5cclxuICovXHJcbi5vd2wtaGVpZ2h0IHtcclxuICB0cmFuc2l0aW9uOiBoZWlnaHQgNTAwbXMgZWFzZS1pbi1vdXQ7IH1cclxuXHJcbi8qXHJcbiAqIFx0T3dsIENhcm91c2VsIC0gTGF6eSBMb2FkIFBsdWdpblxyXG4gKi9cclxuLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0gLm93bC1sYXp5IHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgZWFzZTsgfVxyXG5cclxuLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0gaW1nLm93bC1sYXp5IHtcclxuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkOyB9XHJcblxyXG4vKlxyXG4gKiBcdE93bCBDYXJvdXNlbCAtIFZpZGVvIFBsdWdpblxyXG4gKi9cclxuLm93bC1jYXJvdXNlbCAub3dsLXZpZGVvLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzAwMDsgfVxyXG5cclxuLm93bC1jYXJvdXNlbCAub3dsLXZpZGVvLXBsYXktaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogODBweDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gIC8qIGJhY2tncm91bmQ6IHVybChcIm93bC52aWRlby5wbGF5LnBuZ1wiKSBuby1yZXBlYXQ7ICovXHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGVhc2U7IH1cclxuXHJcbi5vd2wtY2Fyb3VzZWwgLm93bC12aWRlby1wbGF5LWljb246aG92ZXIge1xyXG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMywgMS4zKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMsIDEuMyk7IH1cclxuXHJcbi5vd2wtY2Fyb3VzZWwgLm93bC12aWRlby1wbGF5aW5nIC5vd2wtdmlkZW8tdG4sXHJcbi5vd2wtY2Fyb3VzZWwgLm93bC12aWRlby1wbGF5aW5nIC5vd2wtdmlkZW8tcGxheS1pY29uIHtcclxuICBkaXNwbGF5OiBub25lOyB9XHJcblxyXG4ub3dsLWNhcm91c2VsIC5vd2wtdmlkZW8tdG4ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBlYXNlOyB9XHJcblxyXG4ub3dsLWNhcm91c2VsIC5vd2wtdmlkZW8tZnJhbWUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTsgfVxyXG4iLCJodG1sLFxuYm9keSxcbi52aWV3IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLyogRnVsbCBQYWdlIENhcm91c2VsIGl0c2VsZiovXG4uY2Fyb3VzZWwge1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uY2Fyb3VzZWwgLmNhcm91c2VsLWlubmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNhcm91c2VsIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSxcbi5jYXJvdXNlbCAuY2Fyb3VzZWwtaW5uZXIgLmFjdGl2ZSB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmltZy5kLWJsb2NrIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnByb3BlcnRpZS1pdGVtIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9wcm9wZXJ0aWUvMS5qcGdcIik7XG59XG5cbi5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTUlO1xuICBib3R0b206IDIwcHg7XG4gIGxlZnQ6IDE1JTtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTkwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qKlxuICogT3dsIENhcm91c2VsIHYyLjIuMVxuICogQ29weXJpZ2h0IDIwMTMtMjAxNyBEYXZpZCBEZXV0c2NoXG4gKiBMaWNlbnNlZCB1bmRlciAgKClcbiAqL1xuLypcbiAqICBPd2wgQ2Fyb3VzZWwgLSBDb3JlXG4gKi9cbi5vd2wtY2Fyb3VzZWwge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLyogcG9zaXRpb24gcmVsYXRpdmUgYW5kIHotaW5kZXggZml4IHdlYmtpdCByZW5kZXJpbmcgZm9udHMgaXNzdWUgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuXG4ub3dsLWNhcm91c2VsIC5vd2wtc3RhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC1tcy10b3VjaC1hY3Rpb246IHBhbi1ZO1xuICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLyogZml4IGZpcmVmb3ggYW5pbWF0aW9uIGdsaXRjaCAqL1xufVxuXG4ub3dsLWNhcm91c2VsIC5vd2wtc3RhZ2U6YWZ0ZXIge1xuICBjb250ZW50OiBcIi5cIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNsZWFyOiBib3RoO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi5vd2wtY2Fyb3VzZWwgLm93bC1zdGFnZS1vdXRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLyogZml4IGZvciBmbGFzaGluZyBiYWNrZ3JvdW5kICovXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbn1cblxuLm93bC1jYXJvdXNlbCAub3dsLXdyYXBwZXIsXG4ub3dsLWNhcm91c2VsIC5vd2wtaXRlbSB7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtbW96LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLW1zLWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4ub3dsLWNhcm91c2VsIC5vd2wtaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMXB4O1xuICBmbG9hdDogbGVmdDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbn1cblxuLm93bC1jYXJvdXNlbCAub3dsLWl0ZW0gaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ub3dsLWNhcm91c2VsIC5vd2wtbmF2LmRpc2FibGVkLFxuLm93bC1jYXJvdXNlbCAub3dsLWRvdHMuZGlzYWJsZWQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ub3dsLWNhcm91c2VsIC5vd2wtbmF2IC5vd2wtcHJldixcbi5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1uZXh0LFxuLm93bC1jYXJvdXNlbCAub3dsLWRvdCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBoYW5kO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5vd2wtY2Fyb3VzZWwub3dsLWxvYWRlZCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ub3dsLWNhcm91c2VsLm93bC1sb2FkaW5nIHtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5vd2wtY2Fyb3VzZWwub3dsLWhpZGRlbiB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5vd2wtY2Fyb3VzZWwub3dsLXJlZnJlc2ggLm93bC1pdGVtIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4ub3dsLWNhcm91c2VsLm93bC1kcmFnIC5vd2wtaXRlbSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5vd2wtY2Fyb3VzZWwub3dsLWdyYWIge1xuICBjdXJzb3I6IG1vdmU7XG4gIGN1cnNvcjogZ3JhYjtcbn1cblxuLm93bC1jYXJvdXNlbC5vd2wtcnRsIHtcbiAgZGlyZWN0aW9uOiBydGw7XG59XG5cbi5vd2wtY2Fyb3VzZWwub3dsLXJ0bCAub3dsLWl0ZW0ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi8qIE5vIEpzICovXG4ubm8tanMgLm93bC1jYXJvdXNlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKlxuICogIE93bCBDYXJvdXNlbCAtIEFuaW1hdGUgUGx1Z2luXG4gKi9cbi5vd2wtY2Fyb3VzZWwgLmFuaW1hdGVkIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMDAwbXM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5vd2wtY2Fyb3VzZWwgLm93bC1hbmltYXRlZC1pbiB7XG4gIHotaW5kZXg6IDA7XG59XG5cbi5vd2wtY2Fyb3VzZWwgLm93bC1hbmltYXRlZC1vdXQge1xuICB6LWluZGV4OiAxO1xufVxuXG4ub3dsLWNhcm91c2VsIC5mYWRlT3V0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZU91dCB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbi8qXG4gKiBcdE93bCBDYXJvdXNlbCAtIEF1dG8gSGVpZ2h0IFBsdWdpblxuICovXG4ub3dsLWhlaWdodCB7XG4gIHRyYW5zaXRpb246IGhlaWdodCA1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuLypcbiAqIFx0T3dsIENhcm91c2VsIC0gTGF6eSBMb2FkIFBsdWdpblxuICovXG4ub3dsLWNhcm91c2VsIC5vd2wtaXRlbSAub3dsLWxhenkge1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2U7XG59XG5cbi5vd2wtY2Fyb3VzZWwgLm93bC1pdGVtIGltZy5vd2wtbGF6eSB7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG59XG5cbi8qXG4gKiBcdE93bCBDYXJvdXNlbCAtIFZpZGVvIFBsdWdpblxuICovXG4ub3dsLWNhcm91c2VsIC5vd2wtdmlkZW8td3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xufVxuXG4ub3dsLWNhcm91c2VsIC5vd2wtdmlkZW8tcGxheS1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTQwcHg7XG4gIG1hcmdpbi10b3A6IC00MHB4O1xuICAvKiBiYWNrZ3JvdW5kOiB1cmwoXCJvd2wudmlkZW8ucGxheS5wbmdcIikgbm8tcmVwZWF0OyAqL1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDE7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZTtcbn1cblxuLm93bC1jYXJvdXNlbCAub3dsLXZpZGVvLXBsYXktaWNvbjpob3ZlciB7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMywgMS4zKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMsIDEuMyk7XG59XG5cbi5vd2wtY2Fyb3VzZWwgLm93bC12aWRlby1wbGF5aW5nIC5vd2wtdmlkZW8tdG4sXG4ub3dsLWNhcm91c2VsIC5vd2wtdmlkZW8tcGxheWluZyAub3dsLXZpZGVvLXBsYXktaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5vd2wtY2Fyb3VzZWwgLm93bC12aWRlby10biB7XG4gIG9wYWNpdHk6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGVhc2U7XG59XG5cbi5vd2wtY2Fyb3VzZWwgLm93bC12aWRlby1mcmFtZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/@component/employee/employee.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/@component/employee/employee.component.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@shared/api.service */ "./src/app/@shared/api.service.ts");
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/fesm5/ng-uikit-pro-standard.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/@shared/enum */ "./src/app/@shared/enum.ts");
/* harmony import */ var src_app_shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/@shared/shared/shared.service */ "./src/app/@shared/shared/shared.service.ts");








var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(Api, toastrService, router, shared, _sanitizer) {
        this.Api = Api;
        this.toastrService = toastrService;
        this.router = router;
        this.shared = shared;
        this._sanitizer = _sanitizer;
        this.searchText = '';
    }
    EmployeeComponent.prototype.sanitizeImage = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle("url(" + image + ")");
    };
    EmployeeComponent.prototype.oninput = function () {
        this.searchItems();
    };
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Api.Read(src_app_shared_enum__WEBPACK_IMPORTED_MODULE_6__["APIENUM"].property).subscribe(function (res) {
            _this.property = res.data;
            _this.mdbTable.setDataSource(_this.property);
            _this.property = _this.mdbTable.getDataSource();
            _this.previous = _this.mdbTable.getDataSource();
        }, function (err) {
            _this.toastrService.error(err.error.message);
        });
        $('.nav-switch').on('click', function (event) {
            $('.main-menu').slideToggle(400);
            event.preventDefault();
        });
        var window_w = $(window).innerWidth();
        $(window).on('load', function () {
            /*------------------
              Preloder
            --------------------*/
            $(".loader").fadeOut();
            $("#preloder").delay(400).fadeOut("slow");
        });
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
        $('.clients-slider').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 10
                },
                600: {
                    items: 3
                },
                800: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
        $('.gallery').find('.gallery-item').each(function () {
            var pi_height1 = $(this).outerWidth(true), pi_height2 = pi_height1 / 2;
            if ($(this).hasClass('grid-long') && window_w > 991) {
                $(this).css('height', pi_height2);
            }
            else {
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
            items: 1,
            slideSpeed: 2000,
            nav: false,
            autoplay: true,
            dots: true,
            loop: true,
            responsiveRefreshRate: 200,
        }).on('changed.owl.carousel', syncPosition);
        sync2.on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        }).owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: true,
            margin: 10,
            smartSpeed: 200,
            slideSpeed: 500,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            slideBy: slidesPerPage,
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);
        function syncPosition(el) {
            //if you set loop to false, you have to restore this next line
            //var current = el.item.index;
            //if you disable loop you have to comment this block
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);
            if (current < 0) {
                current = count;
            }
            if (current > count) {
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
            if (syncedSecondary) {
                var number = el.item.index;
                sync1.data('owl.carousel').to(number, 100, true);
            }
        }
        sync2.on("click", ".owl-item", function (e) {
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
    };
    EmployeeComponent.prototype.searchItems = function () {
        var prev = this.mdbTable.getDataSource();
        if (!this.searchText) {
            this.mdbTable.setDataSource(this.previous);
            this.property = this.mdbTable.getDataSource();
        }
        if (this.searchText) {
            this.property = this.mdbTable.searchLocalDataBy(this.searchText);
            this.mdbTable.setDataSource(prev);
        }
    };
    EmployeeComponent.prototype.view = function (el) {
        this.router.navigate(['/main/view']);
        this.shared.AddInfo(el);
    };
    EmployeeComponent.ctorParameters = function () { return [
        { type: src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["ToastService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: src_app_shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_4__["MdbTableDirective"], { static: true })
    ], EmployeeComponent.prototype, "mdbTable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input')
    ], EmployeeComponent.prototype, "oninput", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], EmployeeComponent.prototype, "title", void 0);
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/index.js!./src/app/@component/employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.scss */ "./src/app/@component/employee/employee.component.scss")]
        })
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/@component/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/@component/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Bjb21wb25lbnQvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/@component/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/@component/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/@component/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/@component/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/@component/innerview/innerview.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/@component/innerview/innerview.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Bjb21wb25lbnQvaW5uZXJ2aWV3L2lubmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/@component/innerview/innerview.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/@component/innerview/innerview.component.ts ***!
  \*************************************************************/
/*! exports provided: InnerviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InnerviewComponent", function() { return InnerviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/api.service */ "./src/app/@shared/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/@shared/enum */ "./src/app/@shared/enum.ts");
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/fesm5/ng-uikit-pro-standard.js");
/* harmony import */ var src_app_shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/@shared/shared/shared.service */ "./src/app/@shared/shared/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var InnerviewComponent = /** @class */ (function () {
    function InnerviewComponent(shared, Api, toastrService, _fb, _sanitizer, router) {
        this.shared = shared;
        this.Api = Api;
        this.toastrService = toastrService;
        this._fb = _fb;
        this._sanitizer = _sanitizer;
        this.router = router;
        this.searchText = '';
    }
    InnerviewComponent.prototype.sanitizeImage = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle("url(" + image + ")");
    };
    InnerviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.value = this.shared.getInfo().value;
        if (this.value == null) {
            this.router.navigate(['./main/dashboard']);
        }
        this.Api.Read(src_app_shared_enum__WEBPACK_IMPORTED_MODULE_5__["APIENUM"].property).subscribe(function (res) {
            _this.property = res.data;
            var mostRecentDate = new Date(Math.max.apply(null, _this.property.map(function (e) {
                return new Date(e.registered);
            })));
            var mostRecentObject = _this.property.filter(function (e) {
                var d = new Date(e.registered);
                return d.getTime() == mostRecentDate.getTime();
            })[0];
            _this.recentproperty = mostRecentObject;
            console.log(mostRecentObject);
            _this.mdbTable.setDataSource(_this.property);
            _this.property = _this.mdbTable.getDataSource();
            _this.previous = _this.mdbTable.getDataSource();
        }, function (err) {
            _this.toastrService.error(err.error.message);
        });
        this.Contact = this._fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            status: ['Active'],
        });
        $('.nav-switch').on('click', function (event) {
            $('.main-menu').slideToggle(400);
            event.preventDefault();
        });
        var window_w = $(window).innerWidth();
        $(window).on('load', function () {
            /*------------------
              Preloder
            --------------------*/
            $(".loader").fadeOut();
            $("#preloder").delay(400).fadeOut("slow");
        });
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
        $('.clients-slider').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 10
                },
                600: {
                    items: 3
                },
                800: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
        $('.gallery').find('.gallery-item').each(function () {
            var pi_height1 = $(this).outerWidth(true), pi_height2 = pi_height1 / 2;
            if ($(this).hasClass('grid-long') && window_w > 991) {
                $(this).css('height', pi_height2);
            }
            else {
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
            items: 1,
            slideSpeed: 2000,
            nav: false,
            autoplay: true,
            dots: true,
            loop: true,
            responsiveRefreshRate: 200,
        }).on('changed.owl.carousel', syncPosition);
        sync2.on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        }).owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: true,
            margin: 10,
            smartSpeed: 200,
            slideSpeed: 500,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            slideBy: slidesPerPage,
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);
        function syncPosition(el) {
            //if you set loop to false, you have to restore this next line
            //var current = el.item.index;
            //if you disable loop you have to comment this block
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);
            if (current < 0) {
                current = count;
            }
            if (current > count) {
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
            if (syncedSecondary) {
                var number = el.item.index;
                sync1.data('owl.carousel').to(number, 100, true);
            }
        }
        sync2.on("click", ".owl-item", function (e) {
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
    };
    InnerviewComponent.prototype.createContact = function () {
        var _this = this;
        this.Contact.disable();
        var value = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ status: 'active' }, this.Contact.value);
        this.Api.Create(src_app_shared_enum__WEBPACK_IMPORTED_MODULE_5__["APIENUM"].User, value).subscribe(function (res) {
            _this.success = res.message;
            _this.toastrService.success(res.message);
        }, function (err) {
            _this.error = err.error.message;
            _this.Contact.enable();
            _this.toastrService.error(err.error.message);
        }, function () {
            setTimeout(function () {
                _this.success = '';
                _this.error = '';
                _this.Contact.reset();
                _this.toastrService.clear();
                _this.Contact.enable();
            }, 500);
        });
    };
    InnerviewComponent.prototype.view = function (el) {
        this.router.navigate(['/main/view']);
        this.shared.AddInfo(el);
    };
    InnerviewComponent.ctorParameters = function () { return [
        { type: src_app_shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
        { type: src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_6__["MdbTableDirective"], { static: true })
    ], InnerviewComponent.prototype, "mdbTable", void 0);
    InnerviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-innerview',
            template: __webpack_require__(/*! raw-loader!./innerview.component.html */ "./node_modules/raw-loader/index.js!./src/app/@component/innerview/innerview.component.html"),
            styles: [__webpack_require__(/*! ./innerview.component.scss */ "./src/app/@component/innerview/innerview.component.scss")]
        })
    ], InnerviewComponent);
    return InnerviewComponent;
}());



/***/ }),

/***/ "./src/app/@component/pages/pages.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/@component/pages/pages.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Bjb21wb25lbnQvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/@component/pages/pages.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/@component/pages/pages.component.ts ***!
  \*****************************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/api.service */ "./src/app/@shared/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/@shared/enum */ "./src/app/@shared/enum.ts");
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/fesm5/ng-uikit-pro-standard.js");
/* harmony import */ var src_app_shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/@shared/shared/shared.service */ "./src/app/@shared/shared/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var PagesComponent = /** @class */ (function () {
    function PagesComponent(shared, Api, toastrService, _fb, _sanitizer, router) {
        this.shared = shared;
        this.Api = Api;
        this.toastrService = toastrService;
        this._fb = _fb;
        this._sanitizer = _sanitizer;
        this.router = router;
        this.searchText = '';
    }
    PagesComponent.prototype.sanitizeImage = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle("url(" + image + ")");
    };
    PagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Api.Read(src_app_shared_enum__WEBPACK_IMPORTED_MODULE_5__["APIENUM"].property).subscribe(function (res) {
            _this.property = res.data;
            var mostRecentDate = new Date(Math.max.apply(null, _this.property.map(function (e) {
                return new Date(e.registered);
            })));
            var mostRecentObject = _this.property.filter(function (e) {
                var d = new Date(e.registered);
                return d.getTime() == mostRecentDate.getTime();
            })[0];
            _this.recentproperty = mostRecentObject;
            console.log(mostRecentObject);
            _this.mdbTable.setDataSource(_this.property);
            _this.property = _this.mdbTable.getDataSource();
            _this.previous = _this.mdbTable.getDataSource();
        }, function (err) {
            _this.toastrService.error(err.error.message);
        });
        this.Contact = this._fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            status: ['Active'],
        });
        $('.nav-switch').on('click', function (event) {
            $('.main-menu').slideToggle(400);
            event.preventDefault();
        });
        var window_w = $(window).innerWidth();
        $(window).on('load', function () {
            /*------------------
              Preloder
            --------------------*/
            $(".loader").fadeOut();
            $("#preloder").delay(400).fadeOut("slow");
        });
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
        $('.clients-slider').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 10
                },
                600: {
                    items: 3
                },
                800: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
        $('.gallery').find('.gallery-item').each(function () {
            var pi_height1 = $(this).outerWidth(true), pi_height2 = pi_height1 / 2;
            if ($(this).hasClass('grid-long') && window_w > 991) {
                $(this).css('height', pi_height2);
            }
            else {
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
            items: 1,
            slideSpeed: 2000,
            nav: false,
            autoplay: true,
            dots: true,
            loop: true,
            responsiveRefreshRate: 200,
        }).on('changed.owl.carousel', syncPosition);
        sync2.on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        }).owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: true,
            margin: 10,
            smartSpeed: 200,
            slideSpeed: 500,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            slideBy: slidesPerPage,
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);
        function syncPosition(el) {
            //if you set loop to false, you have to restore this next line
            //var current = el.item.index;
            //if you disable loop you have to comment this block
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);
            if (current < 0) {
                current = count;
            }
            if (current > count) {
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
            if (syncedSecondary) {
                var number = el.item.index;
                sync1.data('owl.carousel').to(number, 100, true);
            }
        }
        sync2.on("click", ".owl-item", function (e) {
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
    };
    PagesComponent.prototype.createContact = function () {
        var _this = this;
        this.Contact.disable();
        var value = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ status: 'active' }, this.Contact.value);
        this.Api.Create(src_app_shared_enum__WEBPACK_IMPORTED_MODULE_5__["APIENUM"].User, value).subscribe(function (res) {
            _this.success = res.message;
            _this.toastrService.success(res.message);
        }, function (err) {
            _this.error = err.error.message;
            _this.Contact.enable();
            _this.toastrService.error(err.error.message);
        }, function () {
            setTimeout(function () {
                _this.success = '';
                _this.error = '';
                _this.Contact.reset();
                _this.toastrService.clear();
                _this.Contact.enable();
            }, 500);
        });
    };
    PagesComponent.prototype.view = function (el) {
        this.router.navigate(['/main/innerview']);
        this.shared.AddInfo(el);
    };
    PagesComponent.ctorParameters = function () { return [
        { type: src_app_shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
        { type: src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_6__["MdbTableDirective"], { static: true })
    ], PagesComponent.prototype, "mdbTable", void 0);
    PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! raw-loader!./pages.component.html */ "./node_modules/raw-loader/index.js!./src/app/@component/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.scss */ "./src/app/@component/pages/pages.component.scss")]
        })
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/@component/singleblog/singleblog.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/@component/singleblog/singleblog.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Bjb21wb25lbnQvc2luZ2xlYmxvZy9zaW5nbGVibG9nLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/@component/singleblog/singleblog.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/@component/singleblog/singleblog.component.ts ***!
  \***************************************************************/
/*! exports provided: SingleblogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleblogComponent", function() { return SingleblogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/@shared/shared/shared.service */ "./src/app/@shared/shared/shared.service.ts");




var SingleblogComponent = /** @class */ (function () {
    function SingleblogComponent(shared, router) {
        this.shared = shared;
        this.router = router;
        this.id = "";
        this.value = this.shared.getInfo().value;
        console.log(this.value);
        if (this.value == null) {
            this.router.navigate(['./main/blog']);
        }
        this.id = "resourcefulcomment" + "" + this.value.id;
    }
    SingleblogComponent.prototype.ngOnInit = function () {
        $('.nav-switch').on('click', function (event) {
            $('.main-menu').slideToggle(400);
            event.preventDefault();
        });
        var window_w = $(window).innerWidth();
        $(window).on('load', function () {
            /*------------------
              Preloder
            --------------------*/
            $(".loader").fadeOut();
            $("#preloder").delay(400).fadeOut("slow");
        });
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
        $('.clients-slider').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 10
                },
                600: {
                    items: 3
                },
                800: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
        $('.gallery').find('.gallery-item').each(function () {
            var pi_height1 = $(this).outerWidth(true), pi_height2 = pi_height1 / 2;
            if ($(this).hasClass('grid-long') && window_w > 991) {
                $(this).css('height', pi_height2);
            }
            else {
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
            items: 1,
            slideSpeed: 2000,
            nav: false,
            autoplay: true,
            dots: true,
            loop: true,
            responsiveRefreshRate: 200,
        }).on('changed.owl.carousel', syncPosition);
        sync2.on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        }).owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: true,
            margin: 10,
            smartSpeed: 200,
            slideSpeed: 500,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            slideBy: slidesPerPage,
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);
        function syncPosition(el) {
            //if you set loop to false, you have to restore this next line
            //var current = el.item.index;
            //if you disable loop you have to comment this block
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);
            if (current < 0) {
                current = count;
            }
            if (current > count) {
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
            if (syncedSecondary) {
                var number = el.item.index;
                sync1.data('owl.carousel').to(number, 100, true);
            }
        }
        sync2.on("click", ".owl-item", function (e) {
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
        this.location = window.location.href + "" + this.id;
        console.log(this.location, "..........", this.id);
    };
    SingleblogComponent.ctorParameters = function () { return [
        { type: src_app_shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SingleblogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-singleblog',
            template: __webpack_require__(/*! raw-loader!./singleblog.component.html */ "./node_modules/raw-loader/index.js!./src/app/@component/singleblog/singleblog.component.html"),
            styles: [__webpack_require__(/*! ./singleblog.component.scss */ "./src/app/@component/singleblog/singleblog.component.scss")]
        })
    ], SingleblogComponent);
    return SingleblogComponent;
}());



/***/ }),

/***/ "./src/app/@component/view/view.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/@component/view/view.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Bjb21wb25lbnQvdmlldy92aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/@component/view/view.component.ts":
/*!***************************************************!*\
  !*** ./src/app/@component/view/view.component.ts ***!
  \***************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/api.service */ "./src/app/@shared/api.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/@shared/enum */ "./src/app/@shared/enum.ts");
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/fesm5/ng-uikit-pro-standard.js");
/* harmony import */ var src_app_shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/@shared/shared/shared.service */ "./src/app/@shared/shared/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var ViewComponent = /** @class */ (function () {
    function ViewComponent(shared, Api, toastrService, _fb, _sanitizer, router) {
        this.shared = shared;
        this.Api = Api;
        this.toastrService = toastrService;
        this._fb = _fb;
        this._sanitizer = _sanitizer;
        this.router = router;
        this.searchText = '';
    }
    ViewComponent.prototype.sanitizeImage = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle("url(" + image + ")");
    };
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.value = this.shared.getInfo().value;
        if (this.value == null) {
            this.router.navigate(['./main/dashboard']);
        }
        this.Api.Read(src_app_shared_enum__WEBPACK_IMPORTED_MODULE_5__["APIENUM"].property).subscribe(function (res) {
            _this.property = res.data;
            var mostRecentDate = new Date(Math.max.apply(null, _this.property.map(function (e) {
                return new Date(e.registered);
            })));
            var mostRecentObject = _this.property.filter(function (e) {
                var d = new Date(e.registered);
                return d.getTime() == mostRecentDate.getTime();
            })[0];
            _this.recentproperty = mostRecentObject;
            console.log(mostRecentObject);
            _this.mdbTable.setDataSource(_this.property);
            _this.property = _this.mdbTable.getDataSource();
            _this.previous = _this.mdbTable.getDataSource();
        }, function (err) {
            _this.toastrService.error(err.error.message);
        });
        this.Contact = this._fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            status: ['Active'],
        });
        $('.nav-switch').on('click', function (event) {
            $('.main-menu').slideToggle(400);
            event.preventDefault();
        });
        var window_w = $(window).innerWidth();
        $(window).on('load', function () {
            /*------------------
              Preloder
            --------------------*/
            $(".loader").fadeOut();
            $("#preloder").delay(400).fadeOut("slow");
        });
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
        $('.clients-slider').owlCarousel({
            loop: true,
            autoplay: true,
            margin: 30,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 2,
                    margin: 10
                },
                600: {
                    items: 3
                },
                800: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });
        $('.gallery').find('.gallery-item').each(function () {
            var pi_height1 = $(this).outerWidth(true), pi_height2 = pi_height1 / 2;
            if ($(this).hasClass('grid-long') && window_w > 991) {
                $(this).css('height', pi_height2);
            }
            else {
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
            items: 1,
            slideSpeed: 2000,
            nav: false,
            autoplay: true,
            dots: true,
            loop: true,
            responsiveRefreshRate: 200,
        }).on('changed.owl.carousel', syncPosition);
        sync2.on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        }).owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: true,
            margin: 10,
            smartSpeed: 200,
            slideSpeed: 500,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            slideBy: slidesPerPage,
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);
        function syncPosition(el) {
            //if you set loop to false, you have to restore this next line
            //var current = el.item.index;
            //if you disable loop you have to comment this block
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - (el.item.count / 2) - .5);
            if (current < 0) {
                current = count;
            }
            if (current > count) {
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
            if (syncedSecondary) {
                var number = el.item.index;
                sync1.data('owl.carousel').to(number, 100, true);
            }
        }
        sync2.on("click", ".owl-item", function (e) {
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
    };
    ViewComponent.prototype.createContact = function () {
        var _this = this;
        this.Contact.disable();
        var value = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ status: 'active' }, this.Contact.value);
        this.Api.Create(src_app_shared_enum__WEBPACK_IMPORTED_MODULE_5__["APIENUM"].User, value).subscribe(function (res) {
            _this.success = res.message;
            _this.toastrService.success(res.message);
        }, function (err) {
            _this.error = err.error.message;
            _this.Contact.enable();
            _this.toastrService.error(err.error.message);
        }, function () {
            setTimeout(function () {
                _this.success = '';
                _this.error = '';
                _this.Contact.reset();
                _this.toastrService.clear();
                _this.Contact.enable();
            }, 500);
        });
    };
    ViewComponent.prototype.view = function (el) {
        this.router.navigate(['/main/innerview']);
        this.shared.AddInfo(el);
    };
    ViewComponent.ctorParameters = function () { return [
        { type: src_app_shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
        { type: src_app_shared_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_6__["MdbTableDirective"], { static: true })
    ], ViewComponent.prototype, "mdbTable", void 0);
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/index.js!./src/app/@component/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.scss */ "./src/app/@component/view/view.component.scss")]
        })
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/@component/viewblog/viewblog.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/@component/viewblog/viewblog.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Bjb21wb25lbnQvdmlld2Jsb2cvdmlld2Jsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/@component/viewblog/viewblog.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/@component/viewblog/viewblog.component.ts ***!
  \***********************************************************/
/*! exports provided: ViewblogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewblogComponent", function() { return ViewblogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViewblogComponent = /** @class */ (function () {
    function ViewblogComponent() {
    }
    ViewblogComponent.prototype.ngOnInit = function () {
    };
    ViewblogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewblog',
            template: __webpack_require__(/*! raw-loader!./viewblog.component.html */ "./node_modules/raw-loader/index.js!./src/app/@component/viewblog/viewblog.component.html"),
            styles: [__webpack_require__(/*! ./viewblog.component.scss */ "./src/app/@component/viewblog/viewblog.component.scss")]
        })
    ], ViewblogComponent);
    return ViewblogComponent;
}());



/***/ }),

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _component_singleblog_singleblog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../@component/singleblog/singleblog.component */ "./src/app/@component/singleblog/singleblog.component.ts");
/* harmony import */ var _component_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../@component/blog/blog.component */ "./src/app/@component/blog/blog.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@component/home/home.component */ "./src/app/@component/home/home.component.ts");
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../@component/dashboard/dashboard.component */ "./src/app/@component/dashboard/dashboard.component.ts");
/* harmony import */ var _component_employee_employee_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@component/employee/employee.component */ "./src/app/@component/employee/employee.component.ts");
/* harmony import */ var _component_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@component/about/about.component */ "./src/app/@component/about/about.component.ts");
/* harmony import */ var _component_pages_pages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@component/pages/pages.component */ "./src/app/@component/pages/pages.component.ts");
/* harmony import */ var _component_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@component/contact/contact.component */ "./src/app/@component/contact/contact.component.ts");
/* harmony import */ var _component_view_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@component/view/view.component */ "./src/app/@component/view/view.component.ts");
/* harmony import */ var _component_innerview_innerview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../@component/innerview/innerview.component */ "./src/app/@component/innerview/innerview.component.ts");













var routes = [
    {
        path: '',
        component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        children: [
            { path: 'dashboard', component: _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"] },
            { path: 'employee', component: _component_employee_employee_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeComponent"] },
            { path: 'about', component: _component_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"] },
            { path: 'pages', component: _component_pages_pages_component__WEBPACK_IMPORTED_MODULE_9__["PagesComponent"] },
            { path: 'blog', component: _component_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__["BlogComponent"] },
            { path: 'contact', component: _component_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"] },
            { path: 'single-blog', component: _component_singleblog_singleblog_component__WEBPACK_IMPORTED_MODULE_1__["SingleblogComponent"] },
            { path: 'view', component: _component_view_view_component__WEBPACK_IMPORTED_MODULE_11__["ViewComponent"] },
            { path: 'innerview', component: _component_innerview_innerview_component__WEBPACK_IMPORTED_MODULE_12__["InnerviewComponent"] },
        ]
    }
];
var MainRoutingModule = /** @class */ (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../@shared/api.service */ "./src/app/@shared/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_intercept__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@shared/intercept */ "./src/app/@shared/intercept.ts");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../@component/home/home.component */ "./src/app/@component/home/home.component.ts");
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../@component/dashboard/dashboard.component */ "./src/app/@component/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@shared/shared/shared.module */ "./src/app/@shared/shared/shared.module.ts");
/* harmony import */ var _component_employee_employee_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../@component/employee/employee.component */ "./src/app/@component/employee/employee.component.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-masonry */ "./node_modules/ngx-masonry/fesm5/ngx-masonry.js");
/* harmony import */ var ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-uikit-pro-standard */ "./node_modules/ng-uikit-pro-standard/fesm5/ng-uikit-pro-standard.js");
/* harmony import */ var _component_about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../@component/about/about.component */ "./src/app/@component/about/about.component.ts");
/* harmony import */ var _component_pages_pages_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../@component/pages/pages.component */ "./src/app/@component/pages/pages.component.ts");
/* harmony import */ var _component_blog_blog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../@component/blog/blog.component */ "./src/app/@component/blog/blog.component.ts");
/* harmony import */ var _component_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../@component/contact/contact.component */ "./src/app/@component/contact/contact.component.ts");
/* harmony import */ var _shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../@shared/shared/shared.service */ "./src/app/@shared/shared/shared.service.ts");
/* harmony import */ var _component_singleblog_singleblog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../@component/singleblog/singleblog.component */ "./src/app/@component/singleblog/singleblog.component.ts");
/* harmony import */ var angular2_disqus__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular2-disqus */ "./node_modules/angular2-disqus/lib/disqus.module.js");
/* harmony import */ var angular2_disqus__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angular2_disqus__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _component_view_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../@component/view/view.component */ "./src/app/@component/view/view.component.ts");
/* harmony import */ var _component_innerview_innerview_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../@component/innerview/innerview.component */ "./src/app/@component/innerview/innerview.component.ts");
/* harmony import */ var _component_viewblog_viewblog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../@component/viewblog/viewblog.component */ "./src/app/@component/viewblog/viewblog.component.ts");
























var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_component_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], _component_employee_employee_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeComponent"], _component_about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"], _component_pages_pages_component__WEBPACK_IMPORTED_MODULE_15__["PagesComponent"], _component_blog_blog_component__WEBPACK_IMPORTED_MODULE_16__["BlogComponent"], _component_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"], _component_singleblog_singleblog_component__WEBPACK_IMPORTED_MODULE_19__["SingleblogComponent"], _component_view_view_component__WEBPACK_IMPORTED_MODULE_21__["ViewComponent"], _component_innerview_innerview_component__WEBPACK_IMPORTED_MODULE_22__["InnerviewComponent"], _component_viewblog_viewblog_component__WEBPACK_IMPORTED_MODULE_23__["ViewblogComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _main_routing_module__WEBPACK_IMPORTED_MODULE_6__["MainRoutingModule"],
                angular2_disqus__WEBPACK_IMPORTED_MODULE_20__["DisqusModule"],
                _shared_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_11__["OwlModule"],
                ngx_masonry__WEBPACK_IMPORTED_MODULE_12__["NgxMasonryModule"]
            ],
            providers: [_shared_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], ng_uikit_pro_standard__WEBPACK_IMPORTED_MODULE_13__["ToastService"], _shared_shared_shared_service__WEBPACK_IMPORTED_MODULE_18__["SharedService"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                    useClass: _shared_intercept__WEBPACK_IMPORTED_MODULE_5__["InterceptorServices"],
                    multi: true
                }]
        })
    ], MainModule);
    return MainModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-main-module-es5.js.map