function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav></app-nav>\n<router-outlet></router-outlet>\n<div id=\"html\">\n    <section id=\"s\">\n        <div style=\"padding:10% 1%;\">\n            <div class=\"g\">ABOUT US</div>\n            <article class=\"f\">\n                Meglorate Forex Brokerage Firmis a client – focused and result driven Forex brokerage firm\n                that provide forex training, news and updates, do buy and sale Forex from leading nations, trade\n                Forex online for clients and also provide broad-based Forex services at an affordable fee that\n                won’t in anyway put a hole in the pocket of our clients.\n                We offer a standard and professional Forex services to individual clients, and corporate clients.\n                We will ensure that we work hard to meetand surpass your expectations whenever you chose\n                to patronize our services.\n                We have your best interest and will always ensure that your interest come first, and this has to\n                do with everything we do which is guided by our corporate values and professional ethics. With\n                our professionals who are well experienced in the Forex bureau firms industry with strong bias\n                in online Forex trading.\n                We will at all times demonstrate our commitment to sustainability, both individually and as a\n                firm, by actively participate in any community we operate and integrate sustainable business\n                practices wherever possible\n            </article>\n\n            <div class=\"g\"> Our Goal</div>\n            <article class=\"f\">\n                Our goal is to grow our Forex brokerage service firm to become one of the top 20 Forex\n                brokerage firms in the world, which is why we have mapped out strategies that will help us serve\n                you in a better way and grow to become a major force to reckon with not only in Nigeria but also\n                in Africa continent and the world at large.\n            </article>\n<!-- \n            <div class=\"g\">Our Vision</div>\n            <article class=\"f\"> To be the leading forex firm with top quality delivery\n                <br> and aspiring forex brokers.\n            </article>\n\n            <div class=\"g\">Our Mission</div>\n            <article class=\"f\">Our mission is to deliver high quality service with a sense of friendship and a touch of\n                individual\n                <br> confidence.\n            </article> -->\n        </div>\n    </section>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<!-- <style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: -8px;\n    display: flex;\n    align-items: center;\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n</style>\n\n<!-- Toolbar -->\n<!-- <div class=\"toolbar\" role=\"banner\">\n  <img\n    width=\"40\"\n    alt=\"Angular Logo\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\"\n  />\n  <span>Welcome</span>\n    <div class=\"spacer\"></div>\n  <a aria-label=\"Angular on twitter\" target=\"_blank\" rel=\"noopener\" href=\"https://twitter.com/angular\" title=\"Twitter\">\n    \n    <svg id=\"twitter-logo\" height=\"24\" data-name=\"Logo — FIXED\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\">\n      <defs>\n        <style>\n          .cls-1 {\n            fill: none;\n          }\n\n          .cls-2 {\n            fill: #ffffff;\n          }\n        </style>\n      </defs>\n      <rect class=\"cls-1\" width=\"400\" height=\"400\" />\n      <path class=\"cls-2\" d=\"M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23\"\n      />\n    </svg>\n    \n  </a>\n</div> -->\n\n<!-- <div class=\"content\" role=\"main\"> -->\n\n<!-- Highlight Card -->\n<!-- <div class=\"card highlight-card card-small\">\n\n    <svg id=\"rocket\" alt=\"Rocket Ship\" xmlns=\"http://www.w3.org/2000/svg\" width=\"101.678\" height=\"101.678\" viewBox=\"0 0 101.678 101.678\">\n      <g id=\"Group_83\" data-name=\"Group 83\" transform=\"translate(-141 -696)\">\n        <circle id=\"Ellipse_8\" data-name=\"Ellipse 8\" cx=\"50.839\" cy=\"50.839\" r=\"50.839\" transform=\"translate(141 696)\" fill=\"#dd0031\"/>\n        <g id=\"Group_47\" data-name=\"Group 47\" transform=\"translate(165.185 720.185)\">\n          <path id=\"Path_33\" data-name=\"Path 33\" d=\"M3.4,42.615a3.084,3.084,0,0,0,3.553,3.553,21.419,21.419,0,0,0,12.215-6.107L9.511,30.4A21.419,21.419,0,0,0,3.4,42.615Z\" transform=\"translate(0.371 3.363)\" fill=\"#fff\"/>\n          <path id=\"Path_34\" data-name=\"Path 34\" d=\"M53.3,3.221A3.09,3.09,0,0,0,50.081,0,48.227,48.227,0,0,0,18.322,13.437c-6-1.666-14.991-1.221-18.322,7.218A33.892,33.892,0,0,1,9.439,25.1l-.333.666a3.013,3.013,0,0,0,.555,3.553L23.985,43.641a2.9,2.9,0,0,0,3.553.555l.666-.333A33.892,33.892,0,0,1,32.647,53.3c8.55-3.664,8.884-12.326,7.218-18.322A48.227,48.227,0,0,0,53.3,3.221ZM34.424,9.772a6.439,6.439,0,1,1,9.106,9.106,6.368,6.368,0,0,1-9.106,0A6.467,6.467,0,0,1,34.424,9.772Z\" transform=\"translate(0 0.005)\" fill=\"#fff\"/>\n        </g>\n      </g>\n    </svg>\n\n    <span>{{ title }} app is running!</span>\n\n    <svg id=\"rocket-smoke\" alt=\"Rocket Ship Smoke\" xmlns=\"http://www.w3.org/2000/svg\" width=\"516.119\" height=\"1083.632\" viewBox=\"0 0 516.119 1083.632\">\n      <path id=\"Path_40\" data-name=\"Path 40\" d=\"M644.6,141S143.02,215.537,147.049,870.207s342.774,201.755,342.774,201.755S404.659,847.213,388.815,762.2c-27.116-145.51-11.551-384.124,271.9-609.1C671.15,139.365,644.6,141,644.6,141Z\" transform=\"translate(-147.025 -140.939)\" fill=\"#f5f5f5\"/>\n    </svg>\n\n  </div> -->\n\n<!-- Resources -->\n<!-- <h2>Resources</h2>\n  <p>Here are some links to help you get started:</p>\n\n  <div class=\"card-container\">\n    <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z\"/></svg>\n\n      <span>Learn Angular</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>    </a>\n\n    <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z\"/></svg>\n\n      <span>CLI Documentation</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>\n    </a>\n\n    <a class=\"card\" target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z\"/></svg>\n\n      <span>Angular Blog</span>\n\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>\n    </a>\n\n  </div> -->\n\n<!-- Next Steps -->\n<!-- <h2>Next Steps</h2>\n  <p>What do you want to do next with your app?</p>\n\n  <input type=\"hidden\" #selection>\n\n  <div class=\"card-container\">\n    <div class=\"card card-small\" (click)=\"selection.value = 'component'\" tabindex=\"0\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>New Component</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'material'\" tabindex=\"0\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Angular Material</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'dependency'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Add Dependency</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'test'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Run and Watch Tests</span>\n    </div>\n\n    <div class=\"card card-small\" (click)=\"selection.value = 'build'\" tabindex=\"0\">\n      <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>\n\n      <span>Build for Production</span>\n    </div>\n  </div> -->\n\n<!-- Terminal -->\n<!-- <div class=\"terminal\" [ngSwitch]=\"selection.value\">\n      <pre *ngSwitchDefault>ng generate component xyz</pre>\n      <pre *ngSwitchCase=\"'material'\">ng add @angular/material</pre>\n      <pre *ngSwitchCase=\"'dependency'\">ng add _____</pre>\n      <pre *ngSwitchCase=\"'test'\">ng test</pre>\n      <pre *ngSwitchCase=\"'build'\">ng build --prod</pre>\n  </div> -->\n\n<!-- Links -->\n<!-- <div class=\"card-container\">\n    <a class=\"circle-link\" title=\"Animations\" href=\"https://angular.io/guide/animations\" target=\"_blank\" rel=\"noopener\">\n      <svg id=\"Group_20\" data-name=\"Group 20\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.813\" height=\"23.453\" viewBox=\"0 0 21.813 23.453\">\n        <path id=\"Path_15\" data-name=\"Path 15\" d=\"M4099.584,972.736h0l-10.882,3.9,1.637,14.4,9.245,5.153,9.245-5.153,1.686-14.4Z\" transform=\"translate(-4088.702 -972.736)\" fill=\"#ffa726\"/>\n        <path id=\"Path_16\" data-name=\"Path 16\" d=\"M4181.516,972.736v23.453l9.245-5.153,1.686-14.4Z\" transform=\"translate(-4170.633 -972.736)\" fill=\"#fb8c00\"/>\n        <path id=\"Path_17\" data-name=\"Path 17\" d=\"M4137.529,1076.127l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1058.315)\" fill=\"#ffe0b2\"/>\n        <path id=\"Path_18\" data-name=\"Path 18\" d=\"M4137.529,1051.705l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1036.757)\" fill=\"#fff3e0\"/>\n        <path id=\"Path_19\" data-name=\"Path 19\" d=\"M4137.529,1027.283l-7.7-3.723,4.417-2.721,7.753,3.723Z\" transform=\"translate(-4125.003 -1015.199)\" fill=\"#fff\"/>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"CLI\" href=\"https://cli.angular.io/\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Angular CLI Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.762\" height=\"23.447\" viewBox=\"0 0 21.762 23.447\">\n        <g id=\"Group_21\" data-name=\"Group 21\" transform=\"translate(0)\">\n          <path id=\"Path_20\" data-name=\"Path 20\" d=\"M2660.313,313.618h0l-10.833,3.9,1.637,14.4,9.2,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-2649.48 -313.618)\" fill=\"#37474f\"/>\n          <path id=\"Path_21\" data-name=\"Path 21\" d=\"M2741.883,313.618v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-2731.05 -313.618)\" fill=\"#263238\"/>\n          <path id=\"Path_22\" data-name=\"Path 22\" d=\"M2692.293,379.169h11.724V368.618h-11.724Zm11.159-.6h-10.608v-9.345h10.621v9.345Z\" transform=\"translate(-2687.274 -362.17)\" fill=\"#fff\"/>\n          <path id=\"Path_23\" data-name=\"Path 23\" d=\"M2709.331,393.688l.4.416,2.265-2.28-2.294-2.294-.4.4,1.893,1.893Z\" transform=\"translate(-2702.289 -380.631)\" fill=\"#fff\"/>\n          <rect id=\"Rectangle_12\" data-name=\"Rectangle 12\" width=\"3.517\" height=\"0.469\" transform=\"translate(9.709 13.744)\" fill=\"#fff\"/>\n        </g>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Augury\" href=\"https://augury.rangle.io/\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Angular Augury Logo\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"21.81\" height=\"23.447\" viewBox=\"0 0 21.81 23.447\">\n        <defs>\n          <clipPath id=\"clip-path\">\n            <rect id=\"Rectangle_13\" data-name=\"Rectangle 13\" width=\"10.338\" height=\"10.27\" fill=\"none\"/>\n          </clipPath>\n        </defs>\n        <g id=\"Group_25\" data-name=\"Group 25\" transform=\"translate(0)\">\n          <path id=\"Path_24\" data-name=\"Path 24\" d=\"M3780.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-3769.274 -311.417)\" fill=\"#4a3493\"/>\n          <path id=\"Path_25\" data-name=\"Path 25\" d=\"M3862.088,311.417v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-3851.207 -311.417)\" fill=\"#311b92\"/>\n          <g id=\"Group_24\" data-name=\"Group 24\" transform=\"translate(6.194 6.73)\" opacity=\"0.5\">\n            <g id=\"Group_23\" data-name=\"Group 23\" transform=\"translate(0 0)\">\n              <g id=\"Group_22\" data-name=\"Group 22\" clip-path=\"url(#clip-path)\">\n                <path id=\"Path_26\" data-name=\"Path 26\" d=\"M3832.4,373.252a5.168,5.168,0,1,1-5.828-4.383,5.216,5.216,0,0,1,2.574.3,3.017,3.017,0,1,0,3.252,4.086Z\" transform=\"translate(-3822.107 -368.821)\" fill=\"#fff\"/>\n              </g>\n            </g>\n          </g>\n          <path id=\"Path_27\" data-name=\"Path 27\" d=\"M3830.582,370.848a5.162,5.162,0,1,1-3.254-4.086,3.017,3.017,0,1,0,3.252,4.086Z\" transform=\"translate(-3814.311 -359.969)\" fill=\"#fff\"/>\n        </g>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Protractor\" href=\"https://www.protractortest.org/\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Angular Protractor Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"21.81\" height=\"23.447\" viewBox=\"0 0 21.81 23.447\">\n        <g id=\"Group_26\" data-name=\"Group 26\" transform=\"translate(0)\">\n          <path id=\"Path_28\" data-name=\"Path 28\" d=\"M4620.155,311.417h0l-10.881,3.9,1.637,14.4,9.244,5.152,9.244-5.152,1.685-14.4Z\" transform=\"translate(-4609.274 -311.417)\" fill=\"#e13439\"/>\n          <path id=\"Path_29\" data-name=\"Path 29\" d=\"M4702.088,311.417v23.447l9.244-5.152,1.685-14.4Z\" transform=\"translate(-4691.207 -311.417)\" fill=\"#b52f32\"/>\n          <path id=\"Path_30\" data-name=\"Path 30\" d=\"M4651.044,369.58v-.421h1.483a7.6,7.6,0,0,0-2.106-5.052l-1.123,1.123-.3-.3,1.122-1.121a7.588,7.588,0,0,0-4.946-2.055v1.482h-.421v-1.485a7.589,7.589,0,0,0-5.051,2.058l1.122,1.121-.3.3-1.123-1.123a7.591,7.591,0,0,0-2.106,5.052h1.482v.421h-1.489v1.734h15.241V369.58Zm-10.966-.263a4.835,4.835,0,0,1,9.67,0Z\" transform=\"translate(-4634.008 -355.852)\" fill=\"#fff\"/>\n        </g>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Find a Local Meetup\" href=\"https://www.meetup.com/find/?keywords=angular\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Meetup Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24.607\" height=\"23.447\" viewBox=\"0 0 24.607 23.447\">\n        <path id=\"logo--mSwarm\" d=\"M21.221,14.95A4.393,4.393,0,0,1,17.6,19.281a4.452,4.452,0,0,1-.8.069c-.09,0-.125.035-.154.117a2.939,2.939,0,0,1-2.506,2.091,2.868,2.868,0,0,1-2.248-.624.168.168,0,0,0-.245-.005,3.926,3.926,0,0,1-2.589.741,4.015,4.015,0,0,1-3.7-3.347,2.7,2.7,0,0,1-.043-.38c0-.106-.042-.146-.143-.166a3.524,3.524,0,0,1-1.516-.69A3.623,3.623,0,0,1,2.23,14.557a3.66,3.66,0,0,1,1.077-3.085.138.138,0,0,0,.026-.2,3.348,3.348,0,0,1-.451-1.821,3.46,3.46,0,0,1,2.749-3.28.44.44,0,0,0,.355-.281,5.072,5.072,0,0,1,3.863-3,5.028,5.028,0,0,1,3.555.666.31.31,0,0,0,.271.03A4.5,4.5,0,0,1,18.3,4.7a4.4,4.4,0,0,1,1.334,2.751,3.658,3.658,0,0,1,.022.706.131.131,0,0,0,.1.157,2.432,2.432,0,0,1,1.574,1.645,2.464,2.464,0,0,1-.7,2.616c-.065.064-.051.1-.014.166A4.321,4.321,0,0,1,21.221,14.95ZM13.4,14.607a2.09,2.09,0,0,0,1.409,1.982,4.7,4.7,0,0,0,1.275.221,1.807,1.807,0,0,0,.9-.151.542.542,0,0,0,.321-.545.558.558,0,0,0-.359-.534,1.2,1.2,0,0,0-.254-.078c-.262-.047-.526-.086-.787-.138a.674.674,0,0,1-.617-.75,3.394,3.394,0,0,1,.218-1.109c.217-.658.509-1.286.79-1.918a15.609,15.609,0,0,0,.745-1.86,1.95,1.95,0,0,0,.06-1.073,1.286,1.286,0,0,0-1.051-1.033,1.977,1.977,0,0,0-1.521.2.339.339,0,0,1-.446-.042c-.1-.092-.2-.189-.307-.284a1.214,1.214,0,0,0-1.643-.061,7.563,7.563,0,0,1-.614.512A.588.588,0,0,1,10.883,8c-.215-.115-.437-.215-.659-.316a2.153,2.153,0,0,0-.695-.248A2.091,2.091,0,0,0,7.541,8.562a9.915,9.915,0,0,0-.405.986c-.559,1.545-1.015,3.123-1.487,4.7a1.528,1.528,0,0,0,.634,1.777,1.755,1.755,0,0,0,1.5.211,1.35,1.35,0,0,0,.824-.858c.543-1.281,1.032-2.584,1.55-3.875.142-.355.28-.712.432-1.064a.548.548,0,0,1,.851-.24.622.622,0,0,1,.185.539,2.161,2.161,0,0,1-.181.621c-.337.852-.68,1.7-1.018,2.552a2.564,2.564,0,0,0-.173.528.624.624,0,0,0,.333.71,1.073,1.073,0,0,0,.814.034,1.22,1.22,0,0,0,.657-.655q.758-1.488,1.511-2.978.35-.687.709-1.37a1.073,1.073,0,0,1,.357-.434.43.43,0,0,1,.463-.016.373.373,0,0,1,.153.387.7.7,0,0,1-.057.236c-.065.157-.127.316-.2.469-.42.883-.846,1.763-1.262,2.648A2.463,2.463,0,0,0,13.4,14.607Zm5.888,6.508a1.09,1.09,0,0,0-2.179.006,1.09,1.09,0,0,0,2.179-.006ZM1.028,12.139a1.038,1.038,0,1,0,.01-2.075,1.038,1.038,0,0,0-.01,2.075ZM13.782.528a1.027,1.027,0,1,0-.011,2.055A1.027,1.027,0,0,0,13.782.528ZM22.21,6.95a.882.882,0,0,0-1.763.011A.882.882,0,0,0,22.21,6.95ZM4.153,4.439a.785.785,0,1,0,.787-.78A.766.766,0,0,0,4.153,4.439Zm8.221,18.22a.676.676,0,1,0-.677.666A.671.671,0,0,0,12.374,22.658ZM22.872,12.2a.674.674,0,0,0-.665.665.656.656,0,0,0,.655.643.634.634,0,0,0,.655-.644A.654.654,0,0,0,22.872,12.2ZM7.171-.123A.546.546,0,0,0,6.613.43a.553.553,0,1,0,1.106,0A.539.539,0,0,0,7.171-.123ZM24.119,9.234a.507.507,0,0,0-.493.488.494.494,0,0,0,.494.494.48.48,0,0,0,.487-.483A.491.491,0,0,0,24.119,9.234Zm-19.454,9.7a.5.5,0,0,0-.488-.488.491.491,0,0,0-.487.5.483.483,0,0,0,.491.479A.49.49,0,0,0,4.665,18.936Z\" transform=\"translate(0 0.123)\" fill=\"#f64060\"/>\n      </svg>\n    </a>\n\n    <a class=\"circle-link\" title=\"Join the Conversation on Gitter\" href=\"https://gitter.im/angular/angular\" target=\"_blank\" rel=\"noopener\">\n      <svg alt=\"Gitter Logo\" xmlns=\"http://www.w3.org/2000/svg\" width=\"19.447\" height=\"19.447\" viewBox=\"0 0 19.447 19.447\">\n        <g id=\"Group_40\" data-name=\"Group 40\" transform=\"translate(-1612 -405)\">\n          <rect id=\"Rectangle_19\" data-name=\"Rectangle 19\" width=\"19.447\" height=\"19.447\" transform=\"translate(1612 405)\" fill=\"#e60257\"/>\n          <g id=\"gitter\" transform=\"translate(1617.795 408.636)\">\n            <g id=\"Group_33\" data-name=\"Group 33\" transform=\"translate(0 0)\">\n              <rect id=\"Rectangle_15\" data-name=\"Rectangle 15\" width=\"1.04\" height=\"9.601\" transform=\"translate(2.304 2.324)\" fill=\"#fff\"/>\n              <rect id=\"Rectangle_16\" data-name=\"Rectangle 16\" width=\"1.04\" height=\"9.601\" transform=\"translate(4.607 2.324)\" fill=\"#fff\"/>\n              <rect id=\"Rectangle_17\" data-name=\"Rectangle 17\" width=\"1.04\" height=\"4.648\" transform=\"translate(6.91 2.324)\" fill=\"#fff\"/>\n              <rect id=\"Rectangle_18\" data-name=\"Rectangle 18\" width=\"1.04\" height=\"6.971\" transform=\"translate(0 0)\" fill=\"#fff\"/>\n            </g>\n          </g>\n        </g>\n      </svg>\n    </a>\n  </div> -->\n\n<!-- Footer -->\n<!-- <footer>\n      Love Angular?&nbsp;\n      <a href=\"https://github.com/angular/angular\" target=\"_blank\" rel=\"noopener\"> Give our repo a star.\n        <div class=\"github-star-badge\">\n            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0z\" fill=\"none\"/><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>\n          Star\n        </div>\n      </a>\n      <a href=\"https://github.com/angular/angular\" target=\"_blank\" rel=\"noopener\">\n        <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\" fill=\"#1976d2\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>\n      </a>\n  </footer> -->\n<!--\n  <svg id=\"clouds\" alt=\"Gray Clouds Background\" xmlns=\"http://www.w3.org/2000/svg\" width=\"2611.084\" height=\"485.677\" viewBox=\"0 0 2611.084 485.677\">\n    <path id=\"Path_39\" data-name=\"Path 39\" d=\"M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z\" transform=\"translate(142.69 -634.312)\" fill=\"#eee\"/>\n  </svg>-->\n\n<!-- </div> -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<app-nav></app-nav>\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlogBlogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav></app-nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-nav></app-nav>\n<router-outlet></router-outlet>\n<div id=\"html\">\n    <section>\n        <div id=\"landing\">\n            <div id=\"darkbg\"></div>\n            <br><br><br><br><br><br>\n            <div id=\"stat\">\n                <!-- <div id=\"linj\"></div> -->\n                <!-- <div id=\"lin\"></div> -->\n                <div class=\"ko\">\n                    <div class=\"kd\">\n                        <div class=\"whytBg\" style=\"animation-delay: .4s;\">\n\n                        </div>\n                    </div>\n                    <h3>USD</h3>\n                    <i>US Dollar</i>\n                </div>\n                <div class=\"ko  mob\">\n                    <div class=\"kd\">\n                        <div class=\"whytBg\" style=\"animation-delay: 3s;\">\n\n                        </div>\n                    </div>\n                    <h3>EUR</h3>\n                    <i>European<br> Euro</i>\n                </div>\n                <div class=\"ko\">\n                    <div class=\"kd\">\n                        <div class=\"whytBg\" style=\"animation-delay: 1s;\">\n\n                        </div>\n                    </div>\n                    <div class=\"er\">\n                        <h3>JPY</h3>\n                        <i>Japanese<br> Yen</i>\n                    </div>\n\n                </div>\n                <div class=\"ko\">\n                    <div class=\"kd\">\n                        <div class=\"whytBg\" style=\"animation-delay: 2.4s;\">\n\n                        </div>\n                    </div>\n                    <h3>GBP</h3>\n                    <i>Pound <br>Sterling</i>\n                </div>\n                <!-- <div class=\"ko  mob\">\n                    <div style=\"background-color:rgb(203, 17, 209); \" class=\"kd\">\n                        <div class=\"whytBg\" style=\"animation-delay: 3s;\">\n\n                        </div>\n                    </div>\n                    <h3>AUD</h3>\n                    <i>Australian <br>Dollar</i>\n                </div> -->\n                <div class=\"ko mob SSc\">\n\n                    <div class=\"kd\">\n                        <div class=\"whytBg\" style=\"animation-delay: 3.3s;\">\n\n                        </div>\n                    </div>\n                    <h3>CAD</h3>\n                    <i>Canadian<br> Dollar</i>\n                </div>\n                <div class=\"ko\">\n\n                    <div class=\"kd\">\n                        <div class=\"whytBg\">\n\n                        </div>\n                    </div>\n                    <h3>CHF</h3>\n                    <i>Swiss<br> Franc</i>\n                </div>\n                <!-- <div class=\"ko\">\n\n                    <div style=\"background-color:rgb(255, 143, 68); \" class=\"kd\">\n                        <div class=\"whytBg\" style=\"animation-delay: 6.4s;\">\n\n                        </div>\n                    </div>\n                    <h3>INR</h3>\n                    <i>Indian<br> Rupee</i>\n                </div> -->\n                <div class=\"ko\">\n                    <div class=\"kd\">\n                        <div class=\"whytBg\" style=\"animation-delay: 2.4s;\">\n\n                        </div>\n                    </div>\n                    <h3>SGD</h3>\n                    <i>Singapore<br>Dollar</i>\n                </div>\n                <!-- <div class=\"ko\">\n                    <div style=\"background-color:rgb(68, 17, 4); \" class=\"kd\">\n                        <div class=\"whytBg\" style=\"animation-delay: 2.4s;\">\n\n                        </div>\n                    </div>\n                    <h3>SEK</h3>\n                    <i>Swedish<br>Krona</i>\n                </div> -->\n                <div class=\"ko  mob\">\n                    <div class=\"kd\">\n                        <div class=\"whytBg\" style=\"animation-delay: 3s;\">\n\n                        </div>\n                    </div>\n                    <h3>HKD</h3>\n                    <i>Hong Kong<br> Dollar</i>\n                </div>\n                <div class=\"ko mob SSc\">\n                    <div class=\"kd \">\n                        <div class=\"whytBg\">\n\n                        </div>\n                    </div>\n                    <h3>CHF</h3>\n                    <i>Swiss<br> Franc</i>\n                </div>\n                <!-- <div class=\"ko\">\n                        <div style=\"background-color:darkslategray; \" class=\"kd\">\n                            <div class=\"whytBg\" style=\"animation-delay: 1s;\">\n\n                            </div>\n                        </div>\n                        <h3>XOF</h3>\n                        <i>CFA Franc</i>\n                    </div> -->\n                <!-- <div class=\"ko  mob SSc\"> -->\n                <!-- <i>DIAMOND</i> -->\n                <!-- <div style=\"background-color:rgb(77, 6, 43);\" class=\"kd\">\n                        <div class=\"whytBg\" style=\"animation-delay: 18.3s;\">\n\n                        </div>\n                    </div>\n                    <h3>NZD</h3>\n                    <i>New Zealand<br> Dollar</i> -->\n\n                <!-- </div> -->\n                <!-- <div class=\"ko\">\n                        <div style=\"background-color:rgb(68, 17, 4); \" class=\"kd\">\n                            <div class=\"whytBg\" style=\"animation-delay: 2.4s;\">\n\n                            </div>\n                        </div>\n                        <h3>CFA</h3>\n                        <i>New <br>Taiwan <br>Dollar</i>\n                    </div> -->\n                <div class=\"ko  mob\">\n                    <div style=\"background-color:rgb(203, 17, 209); \" class=\"kd\">\n                        <div class=\"whytBg\" style=\"animation-delay: 3s;\">\n\n                        </div>\n                    </div>\n                    <h3>NGN</h3>\n                    <i>Nigerian<br> Naira</i>\n                </div>\n            </div>\n            <div id=\"landingTextCont\" class=\"\">\n                <div id=\"bigText\">\n                    Meglotrade Forex <br id=\"hyhy\">Brokage\n                </div>\n                <!-- <hr id=\"line\"> -->\n                <div id=\"smallText\">\n                    .&nbsp;.&nbsp;.&nbsp; a global journey to financial success!\n                </div>\n            </div>\n            <!-- </div> -->\n        </div>\n        <!-- <div id=\"landingg\">\n        <div id=\"darkbg\">\n\n            <div id=\"landingTextCont\" class=\"\">\n                <div id=\"bigText\">\n                    Welcome to Meglorate Forex Brokage\n                </div>\n                <hr id=\"line\">\n                <div id=\"smallText\">\n                    Guarateeing you investment safety\n                </div>\n            </div>\n        </div>\n    </div> -->\n    </section>\n    <section>\n        <div id=\"iop\">\n            <div id=\"h\">\n                <div>\n                    <div id=\"display\">\n                        <br>\n                        <br>\n                        INVEST IN FOREX<br>The Largest, Boundless, Timeless Market.<br> <br>\n                        Over 5 trillion dollars\n                        worth of stocks, sold and bought daily.\n                        There is always a buyer when you want to sell and always a seller <br>when you want to buy\n                        and that is why we are here to help you succeed financially.\n                    </div>\n                    <div style=\"display: flex;justify-content: center;\">\n                        <button id=\"ocv\">\n                            <a href=\"google.com\" target=\"_blank\" style=\"text-decoration: none;font-size: 20px;\">Start\n                                Here</a>\n                            </button>\n                    </div>\n                </div>\n\n            </div>\n            <div style=\"text-align: centerb;\">\n                <h1 id=\"okk\">TOP STOCKS MARKET AROUND THE GLOBE</h1>\n                <div id=\"sat\">\n                    <div class=\"ko\">\n                        <div style=\"background:linear-gradient(90deg, rgb(31, 7, 36), rgba(15, 3, 59, 0.753)) \"\n                            class=\"kdd\">\n                            <div class=\"whitBg\" style=\"animation-delay: 2.4s;\">\n                            </div>\n                        </div>\n                        <h3 style=\"color:black;text-align: center;\">FOREX</h3>\n                    </div>\n                    <div style=\"display: flex;\">\n                        <div class=\"ko\">\n                            <div style=\"background:linear-gradient(90deg, rgb(128, 0, 32), rgb(255, 102, 0))\"\n                                class=\"kdd\">\n                                <div class=\"whiteBg\" style=\"animation-delay: .4s;\">\n                                </div>\n                            </div>\n                            <h3 style=\"color:black; text-align: center;\">NY</h3>\n                        </div>\n\n                        <div class=\"ko  mob\">\n                            <div style=\"background:linear-gradient(90deg, green, yellow) \" class=\"kdd\">\n                                <div class=\"whiteBg\" style=\"animation-delay: .3s;\">\n\n                                </div>\n                            </div>\n                            <h3 style=\"color:black;color:black; text-align: center;\">TOKYO</h3>\n                        </div>\n\n                        <div class=\"mob\">\n                            <div style=\"background:linear-gradient(90deg, rgb(128, 0, 28), pink) \" class=\"kdd\">\n                                <div class=\"whiteBg\" style=\"animation-delay: .43s;\">\n                                </div>\n                            </div>\n                            <h3 style=\"color:black; text-align: center;\">LONDON</h3>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <section>\n        <div class=\"paralax\" id=\"jk\">\n            <div id=\"fr\">\n                <div class=\"p\" style=\"display: flex;   flex-wrap: wrap;\">\n                    <div id=\"packager\">\n                        Here on Maglorate, we keep you <br>one step ahead\n                        of the market with up to <br>speed infostatistics\n                    </div>\n                    <div id=\"sat\"></div>\n                    <!-- <div id=\"stat\">\n                        <div class=\"ko\">\n                            <i>GOLD</i>\n                            <div style=\"background-color:darkslategray; animation-delay: 1s;\" class=\"kd\"></div>\n                        </div>\n                        <div class=\"ko\"><i>DIAMOND</i>\n                            <div style=\"background-color:deeppink;animation-delay: 3.3s;\" class=\"kd\"></div>\n                        </div>\n                        <div class=\"ko\">\n                            <i>OIL</i>\n                            <div style=\"background-color:#ef4; animation-delay: 6.4s;\" class=\"kd\"></div>\n                        </div>\n                        <div class=\"ko\"><i>RUBBER</i>\n                            <div style=\"background-color:midnightblue;\" class=\"kd\"></div>\n\n                        </div>\n                    </div> -->\n                </div>\n            </div>\n        </div>\n    </section>\n\n\n    <section (scroll)=\"view($event)\">\n        <h1 style=\"text-align:center;color: black;\">What we Offer</h1>\n        <div class=\"ghp\"></div>\n        <div style=\"max-width:80%; margin:auto;\">\n            <div id=\"qf\">\n                <div class=\"box ji\" id=\"box\"><img src=\"../../assets/dollar.svg\" class=\"i\">\n                    <p class=\"poi\">\n                        Buying and sellling of stocks\n                    </p>\n                </div>\n                <div class=\"box ji\" id=\"boxy\"><img src=\"../../assets/credit-card.svg\" class=\"i\">\n                    <p class=\"poi\">\n                        Different payment gateways, USSD, Bank and Card payment\n                    </p>\n                </div>\n                <div class=\"box ji\" id=\"boxw\"><img src=\"../../assets/money-graph-with-up-arrow.svg\" class=\"i\">\n                    <p class=\"poi\">\n                        latest Forex information, News and update\n                    </p>\n                </div>\n                <div class=\"box ji\" id=\"boxx\"><img src=\"../../assets/class.svg\" class=\"i\">\n                    <p class=\"poi\">Forex trading training\n                    </p>\n                </div>\n                <div class=\"box ji\" id=\"boxl\"><img src=\"../../assets/money-bag.svg\" class=\"i\">\n                    <p class=\"poi\">\n                        Forex and Financial Sevices Consultancy\n                    </p>\n                </div>\n                <div class=\"box ji\" id=\"boxi\"><img src=\"../../assets/responsive-design.svg\" class=\"i\">\n                    <p class=\"poi\">\n                        MT 4 & 5 and other platforms needed for your success. Therefore, there are no\n                        dull moments while trading.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section (scroll)=\"view($event)\">\n        <h1 style=\"text-align:center;color: black;\">Our Clients</h1>\n        <div class=\"ghp\"></div>\n        <div style=\"max-width:80%; margin:auto;\">\n            <div id=\"qf\">\n                <div class=\"box ji d\" id=\"swe\"><img src=\"../../assets/factory.svg\" class=\"i\">\n                    <p class=\"powi\">\n                        Manufacturing companies\n                    </p>\n                </div>\n                <div class=\"box ji d\" id=\"swes\"><img src=\"../../assets/ngo.svg\" class=\"i\">\n                    <p class=\"powi\">\n                        Non-Governmental Organisations\n                    </p>\n                </div>\n                <div class=\"box ji d\" id=\"swex\"><img src=\"../../assets/business-and-trade.svg\" class=\"i\">\n                    <p class=\"powi\">\n                        Blue Chip companies\n                    </p>\n                </div>\n                <div class=\"box ji d\" id=\"swez\"><img src=\"../../assets/hand-shake.svg\" class=\"i\">\n                    <p class=\"powi\">\n                        Co-operate Organisations\n                    </p>\n                </div>\n                <div class=\"box ji d\" id=\"swec\"><img src=\"../../assets/ocean-transportation.svg\" class=\"i\">\n                    <p class=\"powi\">\n                        Importers and Exporters\n                    </p>\n                </div>\n                <div class=\"box ji d\" id=\"swer\"><img src=\"../../assets/trading.svg\" class=\"i\">\n                    <p class=\"powi\">\n                        Enterpreneurs and Start-Up.\n                    </p>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <section style=\"padding: 1vmin 10%;\">\n        <div>\n            <div>\n                <h1 style=\"text-align:center;color: black;\">In The News</h1>\n                <div class=\"ghp\"></div>\n                <div id=\"qwq\">\n                    <div>\n                        <div class=\"box news\" style=\"background-image:url(../../assets/ighalo.jpg)\">\n                            <div class=\"bgp\">\n                                <a href=\"#\" target=\"/\" style=\"text-decoration: none;\">\n                                    <div class=\"button\">Read More</div>\n                                </a>\n                            </div>\n                            <div class=\"newsTip\">\n                                Dollars Rises For the Third time in Two Weeks\n                            </div>\n                        </div>\n                    </div>\n                    <div>\n                        <div class=\"box news\" style=\"background-image:url(../../assets/ighalo.jpg)\">\n                            <div class=\"bgp\">\n                                <a href=\"#\" target=\"/\" style=\"text-decoration: none;\">\n                                    <div class=\"button\">Read More</div>\n                                </a>\n                            </div>\n                            <div class=\"newsTip\">\n                                Dollars Rises For the Third time in Two Weeks\n                            </div>\n                        </div>\n                    </div>\n                    <div>\n                        <div class=\"box news\" style=\"background-image:url(../../assets/ighalo.jpg)\">\n                            <div class=\"bgp\">\n                                <a href=\"#\" target=\"/\" style=\"text-decoration: none;\">\n                                    <div class=\"button\">Read More</div>\n                                </a>\n                            </div>\n                            <div class=\"newsTip\">\n                                Dollars Rises For the Third time in Two Weeks\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <section>\n        <div id=\"poiu\">\n            <div id=\"ed\">CONTACT US </div>\n            <div id=\"teded\">\n                <form #form=\"ngForm\" (ngSubmit)=\"submitForm(form)\" style=\"margin: 4%;\">\n                    <div style=\"display: flex;\">\n                        <div>\n                            <!-- <label for=\"name\">Name</label> -->\n                            <input name=\"name\" type=\"text\" title=\"name\" placeholder=\"Name . . .\" class=\"der\" ngModel>\n                        </div>\n                        <div>\n                            <!-- <label for=\"email\">Email</label> -->\n                            <input name=\"email\" type=\"text\"\n                                title=\"email . . . Please double check your emaill for  autheticity\"\n                                placeholder=\"Email . . .\" class=\"der\" ngModel>\n                        </div>\n                    </div>\n                    <div>\n                        <label for=\"content\"></label>\n                        <textarea cols=\"40\" rows=\"10\" name=\"content\" title=\"Message\" class=\"der\" style=\"margin-left: 12vh;\n                        margin-top: 3vh\" ngModel></textarea>\n                    </div>\n                    <div (click)=\"submitForm(form)\" id=\"ase\"> Send</div>\n                </form>\n            </div>\n        </div>\n    </section>\n    <div id=\"toast_cont\">\n        <div id=\"toast\">Thanks, Your Feedback was received</div>\n    </div>\n    <section>\n        <h1 style=\"text-align: center;color: black;\">Our Partners</h1>\n        <div class=\"ghp\"></div>\n        <div style=\"min-height: 2vmin; \"></div>\n        <div id=\"wq\">\n            <div id=\"gakil\">\n                Glo FOREX<br>\n                Plometes<br>\n                Oxygen<br>\n                Bland<br>\n                Glo FOREX<br>\n                Plometes<br>\n                Oxygen<br>\n                Bland<br>\n            </div>\n        </div>\n    </section>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"s\">\n    <nav>\n        <div style=\"display: flex;max-width: 80%; margin: auto;height: stretch;\">\n            <div style=\"display: flex;align-items: center;\">\n                <div id=\"style\">\n                    <div class=\"logo\">MEGL</div>\n                    <img src=\"../../assets/globe.gif\" alt=\"LOGO\" height=\"30\" width=\"30\" style=\"border-radius: 50%;\">\n                    <div class=\"logo\">TRADE</div>\n                </div>\n            </div>\n            <div id=\"frw\">\n                <div id=\"b\" class=\"b\">\n                    <a class=\"anchor\" routerLink=\"../about-us\" #rla=\"routerLinkActive\" routerLinkActive=\"active\">\n                        <div class=\"link\"><span class=\"carryLink\">ABOUT US</span></div>\n                    </a>\n                    <a class=\"anchor\" routerLink=\"../blog\" #rla=\"routerLinkActive\" routerLinkActive=\"active\">\n                        <div class=\"link\"><span class=\"carryLink\">BLOG</span></div>\n                    </a>\n                    <a class=\"anchor\" href=\"https://google.com\" target=\"/\" #rla=\"routerLinkActive\"\n                        routerLinkActive=\"active\">\n                        <div class=\"link\"><span class=\"carryLink\">TRADE</span></div>\n                    </a>\n                    <a class=\"anchor\" routerLink=\"../home\" #rla=\"routerLinkActive\" routerLinkActive=\"active\">\n                        <div class=\"link\"><span class=\"carryLink\">HOME</span></div>\n                    </a>\n                </div>\n            </div>\n            <div id=\"ert\">\n                <div id=\"ws\" (click)=\"showFiller = !showFiller\"></div>\n                <div *ngIf=\"showFiller\" id=\"aaa\">\n                    <ul>\n                        <li>\n                            <a class=\"anchor\" routerLink=\"/home\" #rla=\"routerLinkActive\" routerLinkActive=\"active\">\n\n                                <div class=\"link\">\n                                    <div class=\"carryLink\">\n                                        <img src=\"../../assets/home-run.svg\" style=\"align-self: center;\" height=\"30\"\n                                            width=\"30\">\n                                        <br><span>HOME</span></div>\n                                </div>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"anchor\" href=\"https://google.com\" target=\"/\" #rla=\"routerLinkActive\"\n                                routerLinkActive=\"active\">\n                                <div class=\"link\">\n                                    <div class=\"carryLink\">\n                                        <img src=\"../../assets/report.svg\" style=\"align-self: center;\" height=\"30\"\n                                            width=\"30\">\n                                        <br>\n                                        <span>TRADE</span></div>\n                                </div>\n\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"anchor\" routerLink=\"/about-us\" #rla=\"routerLinkActive\" routerLinkActive=\"active\">\n                                <div class=\"link\">\n                                    <div class=\"carryLink\">\n                                        <img src=\"../../assets/team.svg\" style=\"align-self: center;\" height=\"30\"\n                                            width=\"30\">\n                                        <br>\n                                        <span>ABOUT US</span></div>\n                                </div>\n                            </a>\n                        </li>\n                        <li>\n                            <a class=\"anchor\" routerLink=\"/blog\" #rla=\"routerLinkActive\" routerLinkActive=\"active\">\n                                <div class=\"link\">\n                                    <div class=\"carryLink\">\n                                        <img src=\"../../assets/writer.svg\" style=\"align-self: center;\" height=\"30\"\n                                            width=\"30\">\n                                        <br>\n                                        <span>BLOG</span>\n                                    </div>\n\n                                </div>\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </nav>\n</div>\n<div id=\"v\">\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/about/about.component.css":
  /*!*******************************************!*\
    !*** ./src/app/about/about.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutAboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@-webkit-keyframes drre{\r\n    from{\r\n        margin-left:10%;\r\n    }\r\n    to{\r\n        margin: 0%;\r\n    }\r\n}\r\n@keyframes drre{\r\n    from{\r\n        margin-left:10%;\r\n    }\r\n    to{\r\n        margin: 0%;\r\n    }\r\n}\r\n#html{\r\n    -webkit-animation: .51s drre forwards;\r\n            animation: .51s drre forwards;\r\n}\r\n#s{ \r\n    background-image: linear-gradient(to right, blueviolet, purple);\r\n    color: white;\r\n    height: 40em;\r\n    padding: 0  12%  5%;\r\n    cursor: context-menu;\r\n}\r\narticle{\r\n    font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\";\r\n}\r\n.g{\r\n    text-align: center;\r\n    font-size: x-large;\r\n    font-weight: 800;\r\n    font-family: cursive;\r\n    cursor: context-menu;    \r\n}\r\n.f{\r\n    cursor: context-menu;\r\n    line-height: 3;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFQQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7QUFDQTtJQUNJLHFDQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLCtEQUErRDtJQUMvRCxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHlEQUF5RDtBQUM3RDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGtleWZyYW1lcyBkcnJle1xyXG4gICAgZnJvbXtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxMCU7XHJcbiAgICB9XHJcbiAgICB0b3tcclxuICAgICAgICBtYXJnaW46IDAlO1xyXG4gICAgfVxyXG59XHJcbiNodG1se1xyXG4gICAgYW5pbWF0aW9uOiAuNTFzIGRycmUgZm9yd2FyZHM7XHJcbn1cclxuI3N7IFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBibHVldmlvbGV0LCBwdXJwbGUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiA0MGVtO1xyXG4gICAgcGFkZGluZzogMCAgMTIlICA1JTtcclxuICAgIGN1cnNvcjogY29udGV4dC1tZW51O1xyXG59XHJcbmFydGljbGV7XHJcbiAgICBmb250LWZhbWlseTotYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIjtcclxufVxyXG4uZ3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGN1cnNvcjogY29udGV4dC1tZW51OyAgICBcclxufVxyXG4uZntcclxuICAgIGN1cnNvcjogY29udGV4dC1tZW51O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.css */
      "./src/app/about/about.component.css")).default]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'about-us',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'blog',
      component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_5__["BlogComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Meglotrade';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./blog/blog.component */
    "./src/app/blog/blog.component.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_9__["NavComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/blog/blog.component.css":
  /*!*****************************************!*\
    !*** ./src/app/blog/blog.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlogBlogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/blog/blog.component.ts":
  /*!****************************************!*\
    !*** ./src/app/blog/blog.component.ts ***!
    \****************************************/

  /*! exports provided: BlogComponent */

  /***/
  function srcAppBlogBlogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BlogComponent =
    /*#__PURE__*/
    function () {
      function BlogComponent() {
        _classCallCheck(this, BlogComponent);
      }

      _createClass(BlogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BlogComponent;
    }();

    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blog.component.css */
      "./src/app/blog/blog.component.css")).default]
    })], BlogComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "*{\r\n    color: antiquewhite;\r\n}\r\n@font-face {\r\n    font-family: myFirstFont;\r\n    src: url('Italianno-Regular.ttf');\r\n\r\n}\r\n#landing{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 90vh;\r\n    position: relative;\r\n    background: linear-gradient(45deg, #0a3d59, #0bcaeb, #0a3d59);    \r\n}\r\n#display{\r\n    margin: 0 22%;\r\n    cursor: context-menu;\r\n    font-family:-apple-system, BlinkMacSystemFont, \"Segoe UI\";\r\n}\r\n#okk{\r\n    margin: 0;\r\n    text-align: center;\r\n    LINE-HEIGHT: 1;\r\n    font-size: 50px;\r\n    color: transparent;\r\n    -webkit-background-clip: text;\r\n            background-clip: text;\r\n    background-image: url('50yOVM.jpg');\r\n}\r\n#darkbg{\r\n    position: absolute;\r\n    height: inherit;\r\n    width: -webkit-fill-available;\r\n    width: -moz-available;\r\n    width: stretch;\r\n    background-color: #00000069;\r\n}\r\n@-webkit-keyframes ee{\r\n    0%{\r\n        height: 24%;\r\n    }\r\n    20%{\r\n        height: 24.1%;\r\n    }\r\n    50%{\r\n        height: 24.5%;\r\n    }\r\n    65%{\r\n        height: 23.5%;\r\n    }\r\n    75%{\r\n        height: 20%;\r\n\r\n    }\r\n    82.5%{\r\n        height: 22.67%;\r\n\r\n    }\r\n    100%{\r\n        height: 24%;\r\n\r\n    }\r\n    }\r\n@keyframes ee{\r\n    0%{\r\n        height: 24%;\r\n    }\r\n    20%{\r\n        height: 24.1%;\r\n    }\r\n    50%{\r\n        height: 24.5%;\r\n    }\r\n    65%{\r\n        height: 23.5%;\r\n    }\r\n    75%{\r\n        height: 20%;\r\n\r\n    }\r\n    82.5%{\r\n        height: 22.67%;\r\n\r\n    }\r\n    100%{\r\n        height: 24%;\r\n\r\n    }\r\n    }\r\n@-webkit-keyframes noi{\r\n0%{\r\n    height: 74%;\r\n}\r\n20%{\r\n    height: 73%;\r\n}\r\n50%{\r\n    height: 80%;\r\n\r\n}\r\n65%{\r\n    height: 78%;\r\n\r\n}\r\n75%{\r\n    height: 78.8%;\r\n}\r\n82.5%{\r\n    height: 78.1%;\r\n\r\n}\r\n100%{\r\n    height: 77.3%;\r\n\r\n}\r\n}\r\n@keyframes noi{\r\n0%{\r\n    height: 74%;\r\n}\r\n20%{\r\n    height: 73%;\r\n}\r\n50%{\r\n    height: 80%;\r\n\r\n}\r\n65%{\r\n    height: 78%;\r\n\r\n}\r\n75%{\r\n    height: 78.8%;\r\n}\r\n82.5%{\r\n    height: 78.1%;\r\n\r\n}\r\n100%{\r\n    height: 77.3%;\r\n\r\n}\r\n}\r\n.whiteBg{\r\n    -webkit-animation: 3s noi ease-in infinite;\r\n            animation: 3s noi ease-in infinite;\r\n    background-color: white;\r\n}\r\n.whitBg{\r\n    -webkit-animation: 3s ee ease-in infinite;\r\n            animation: 3s ee ease-in infinite;\r\n    background-color: white;\r\n}\r\n.whytBg{\r\n    height:2%;\r\n    -webkit-animation: 100s e ease-in infinite;\r\n            animation: 100s e ease-in infinite;\r\n    background-color: white;\r\n}\r\nh3{\r\n    margin:0;\r\n}\r\n.ko{\r\n    margin: 0 5.7vh;\r\n}\r\n/* #stat::after{\r\n    width: inherit;\r\n    background-color: palevioletred;\r\n    padding: .2vh;\r\n    content: '';\r\n} */\r\n/* #stat::before{\r\n    content: '';\r\n    height: inherit;\r\n    padding: .2vh;\r\n    background-color: palevioletred;\r\n} */\r\n#linj{\r\n    position: absolute;\r\n    /* top: 13.5%; */\r\n    bottom: 15.5%;\r\n    margin-bottom: 12px;\r\n    height: 55vh;\r\n    width: 2px;\r\n    background-color: white;\r\n}\r\n#lin{\r\n    position: absolute;\r\n    height: 2px;\r\n    width:85%;\r\n    bottom: 15%;\r\n    background-color: white;\r\n}\r\n#stat{\r\n    margin-left: 3%;\r\n    margin-top: 15%;\r\n    min-height: 30vh;\r\n    /* padding: 2vh 5vh; */\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n#sat{\r\n    min-height: 30vh;\r\n    /* padding: 2vh 5vh; */\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n#fr{\r\n    display: flex; \r\n    background-color:  #00000066;\r\n}\r\n.paralax{\r\n    background-image: url('haga.jpeg');\r\n\r\n    height: calc(-webkit-fit-content + 5vh);\r\n\r\n    height: calc(-moz-fit-content + 5vh);\r\n\r\n    height: calc(fit-content + 5vh); \r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\ni{\r\n    min-width: 15vh;\r\n}\r\n@-webkit-keyframes e{\r\n    0%{\r\n        height: 10%; \r\n    }\r\n    15%{\r\n        height: 15%;\r\n    }\r\n    25%{\r\n\r\n        height: 30%;\r\n    }\r\n    35%{\r\n        height: 35%;\r\n    }\r\n    45%{\r\n        height: 65%;\r\n    }\r\n    50%{\r\n        height: 55%;     \r\n    }\r\n    60%{\r\n        height: 72.50%;\r\n    }\r\n    66%{\r\n        height: 44.3%;\r\n    }\r\n    75%{\r\n        height: 55.2%;\r\n    }\r\n    85%{\r\n        height: 45.4%;\r\n    }\r\n    90%{\r\n        height: 23.5%;\r\n    }\r\n    100%{\r\n        height: 15.8%;\r\n    }\r\n}\r\n@keyframes e{\r\n    0%{\r\n        height: 10%; \r\n    }\r\n    15%{\r\n        height: 15%;\r\n    }\r\n    25%{\r\n\r\n        height: 30%;\r\n    }\r\n    35%{\r\n        height: 35%;\r\n    }\r\n    45%{\r\n        height: 65%;\r\n    }\r\n    50%{\r\n        height: 55%;     \r\n    }\r\n    60%{\r\n        height: 72.50%;\r\n    }\r\n    66%{\r\n        height: 44.3%;\r\n    }\r\n    75%{\r\n        height: 55.2%;\r\n    }\r\n    85%{\r\n        height: 45.4%;\r\n    }\r\n    90%{\r\n        height: 23.5%;\r\n    }\r\n    100%{\r\n        height: 15.8%;\r\n    }\r\n}\r\n.kdd{\r\n    height: 42vh;\r\n    margin: 0 5vh;\r\n    width: 10vh\r\n}\r\n.kd{\r\n    background:linear-gradient(45deg,black,darkblue,rgb(167, 161, 161));\r\n    height: 42vh;\r\n    width: 5vh;\r\n    text-align: center;\r\n}\r\n#landingTextCont{\r\n    margin: auto;\r\n    -webkit-animation: ime 3.5s;\r\n            animation: ime 3.5s;\r\n    height: 83%;\r\n    position: absolute;\r\n}\r\n#mk{\r\n    padding: 1.5% 10%;\r\n    background-color: blueviolet;\r\n}\r\n#smallText{\r\n    font-size: 5vh;\r\n    -webkit-animation: qq 3.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;\r\n            animation: qq 3.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;\r\n}\r\n#line{\r\n    -webkit-animation: qq 3.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;\r\n            animation: qq 3.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;    \r\n}\r\n#wq{\r\n    background-image: url('iaia.jpeg');\r\n    min-height: 12vh;\r\n    background-position: center;\r\n    /* background-repeat: no-repeat; */\r\n    background-size: cover;\r\n    width: -webkit-fill-available;\r\n    width: -moz-available;\r\n    width: stretch;\r\n    max-width: 80%;\r\n    margin: auto;\r\n}\r\n#gakil{\r\n      background-color: blueviolet;\r\n    width: 30%;\r\n    border-bottom-right-radius: 30vmin;\r\n    padding: 6vmin;\r\n}\r\n@-webkit-keyframes h{\r\n    from{\r\n        max-width: 100%;\r\n    }\r\n\r\n    to{\r\n        max-width: 20%;\r\n    }\r\n}\r\n@keyframes h{\r\n    from{\r\n        max-width: 100%;\r\n    }\r\n\r\n    to{\r\n        max-width: 20%;\r\n    }\r\n}\r\n.ghp{\r\n    -webkit-animation: h 3s cubic-bezier(0.22, 0.61, 0.36, 1);\r\n            animation: h 3s cubic-bezier(0.22, 0.61, 0.36, 1);\r\n    min-height: .2em;\r\n    background-color: blueviolet;\r\n    max-width: 20%;\r\n    margin: auto;\r\n}\r\n@media screen and  (max-width:870px){\r\n    .SSc{\r\n        display: none;\r\n    }\r\n}\r\n#hyhy{\r\n    display: none;\r\n}\r\n@media screen and  (max-width:400px){\r\n    #hyhy{\r\n        display: block!important;\r\n    }\r\n}\r\n@media screen and  (max-width:700px){\r\n    #landingTextCont{\r\n        height: 35%;\r\n    }\r\n    #bigText{\r\n        font-size: 8vh!important;\r\n    }\r\n}\r\n@media screen and  (max-width:1000px){\r\n    #bigText{\r\n        font-size: 10vh!important;\r\n    }\r\n}\r\n@media screen and  (max-width:600px){\r\n   #stat{\r\n    padding: 0px!important;\r\n   }\r\n    .kd{\r\n        height: 30vh!important;\r\n    }\r\n    #linj{\r\n        height: 33.5vh;\r\n    }\r\n    #lin{\r\n        width: 50vh;\r\n    }\r\n    .mob{\r\n        display: none;\r\n    }\r\n    .box{\r\n        font-size: 3vh;\r\n        min-width: 230px;\r\n        min-height: 170px\r\n    }\r\n    #landingTextCont{\r\n        max-width: 500px;\r\n    }\r\n    textarea.der{\r\n        margin: 8.5%!important;\r\n\r\n\r\n    }\r\n    .der{\r\n        padding: 0 0 0 .5em!important;\r\n        margin: auto!important;\r\n    }\r\n    #landing{\r\n        height: 52vh!important;\r\n        min-height: 52vh!important;\r\n    }\r\n    #gakil{\r\n    width: 85%; \r\n    border-bottom-right-radius: 0vmin;\r\n    background-color: rgba(137, 43, 226, 0.69);\r\n    }\r\n    #packager{\r\n        padding: 2vh 5vh 2vh 7vh!important;\r\n    }\r\n    #h{   \r\n        background-image: linear-gradient(45deg, rgba(137, 43, 226, 0.212), purple)!important;\r\n        border-bottom-right-radius: 0vh!important;\r\n        min-height: 40vh!important;\r\n        max-width: 100%!important;\r\n    }\r\n    #smallText{\r\n        font-size:2.5vh;\r\n    }\r\n    #bigText{\r\n        min-width: 327px;\r\n      font-size:4.4vh!important;\r\n    }\r\n}\r\n#bigText{\r\n    /* max-width: fit-content; */\r\n    white-space: nowrap;\r\n    font-size: 15Vh;\r\n    font-family: myFirstFont;\r\n    -webkit-animation: anime 3.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;\r\n            animation: anime 3.5s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;\r\n    position: relative;\r\n    display: block;\r\n    font-weight: 700;\r\n    /* min-width: 1000px; */\r\n}\r\n#packager:hover{\r\n    background-color: rgba(8, 5, 11, 0.79);\r\n    transition: background-color, color .5s;\r\n    color: #888;\r\n}\r\n.newsTip{\r\n    position: absolute;\r\n    bottom: -2px;\r\n    width: 100%;\r\n    left: 0;\r\n    padding: 1vmin 0 1vmin 0.4vmin;\r\n    border-bottom-left-radius: 20px;\r\n    border-bottom-right-radius: 20px;\r\n    background-color: rgba(137, 43, 226, 0.397);\r\n\r\n}\r\n.news{\r\n    position: relative;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    min-width: 12vmin;\r\n    min-height: 12vmin;\r\n    padding: 0!important;\r\n    min-height: 200px;\r\n    min-width: 245px;\r\n}\r\n#iop{    \r\n    background-color: ivory;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: cover;\r\n    display: flex;\r\n}\r\n#qwq{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n}\r\n#packager{\r\n    padding: 2ch;\r\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI'; \r\n    cursor: pointer;\r\n    padding:  2vh 5vh 2vh 0vh;\r\n    min-width: 50%;\r\n    font-size: xx-large;\r\n}\r\n.i{\r\n    max-width: 12vh;\r\n    margin:1vh auto;\r\n    display: block;\r\n}\r\np, h1{\r\n    cursor: context-menu;\r\n}\r\n#box{\r\n    -webkit-animation-duration: .5s;\r\n            animation-duration: .5s;\r\n}\r\n#boxy{\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n}\r\n#boxw{\r\n    -webkit-animation-duration: 1.5s;\r\n            animation-duration: 1.5s;\r\n}\r\n#boxx{\r\n    -webkit-animation-duration: 2.5s;\r\n            animation-duration: 2.5s;\r\n}\r\n#boxl{\r\n    -webkit-animation-duration: 3s;\r\n            animation-duration: 3s;\r\n}\r\n#boxi{\r\n    -webkit-animation-duration: 3.5s;\r\n            animation-duration: 3.5s;\r\n}\r\n.ji{\r\n    visibility: hidden;\r\n}\r\n.faf{\r\n    -webkit-animation-timing-function:  cubic-bezier(0.01, 1.01, 0.35, 0.93);\r\n            animation-timing-function:  cubic-bezier(0.01, 1.01, 0.35, 0.93);\r\n    -webkit-animation: loo forwards;\r\n            animation: loo forwards;\r\n}\r\n@-webkit-keyframes loo{\r\n    0%{\r\n        visibility: hidden;\r\n        margin-top: 30vh;\r\n    }\r\n    100%{\r\n        visibility: visible;\r\n        margin-top:initial;\r\n    }\r\n}\r\n@keyframes loo{\r\n    0%{\r\n        visibility: hidden;\r\n        margin-top: 30vh;\r\n    }\r\n    100%{\r\n        visibility: visible;\r\n        margin-top:initial;\r\n    }\r\n}\r\n@-webkit-keyframes jyy{\r\nfrom{\r\n    margin-right: 100px;\r\n}\r\nto{\r\n    margin-right: auto;\r\n }\r\n}\r\n@keyframes jyy{\r\nfrom{\r\n    margin-right: 100px;\r\n}\r\nto{\r\n    margin-right: auto;\r\n }\r\n}\r\n.de{\r\n\r\n    -webkit-animation: jyy 10s cubic-bezier(0.95, 0.05, 0.795, 0.035) forwards!important;\r\n\r\n            animation: jyy 10s cubic-bezier(0.95, 0.05, 0.795, 0.035) forwards!important;\r\n}\r\nh1, div, span{\r\n    font-family: \"Segoe UI\";\r\n}\r\n.box{\r\n    font-family: \"Segoe UI\";\r\n    max-width: 35vh;\r\n    border: black 1px solid;\r\n    border-radius: 20px;\r\n    margin: 2vh;\r\n    padding: 2vh;\r\n    font-size: 3.5vh;\r\n    min-width: 250px;\r\n    min-height: 200px;\r\n    text-align: center;\r\n    background-image: linear-gradient(180deg, blueviolet, purple);\r\n    transition: visibility,box-shadow, 3s, .3s cubic-bezier(0.95, 0.05, 0.795, 0.035);\r\n\r\n}\r\n.powi{\r\n    color: black!important;\r\n}\r\n.d{\r\n    \r\n    background: transparent;\r\n    border: blueviolet 2px solid;\r\n}\r\n.box:hover{\r\n    box-shadow:#29222287 3px 2px 2px 4px;\r\n}\r\n#h button#ocv:hover{\r\n    transition:all .5s ease;\r\n    background-image: linear-gradient(45deg,deeppink, pink );\r\n}\r\n#h button#ocv{\r\n    \r\n    cursor: pointer;\r\n    margin-top:10px;\r\n    transition:all .5s ease;\r\n    will-change:background;\r\n    padding: 10px 15px;\r\n    color: white;\r\n    background-image: linear-gradient(45deg, pink, deeppink);\r\n    border-radius: 20px;\r\n    border: none;\r\n}\r\n#h{\r\n    background-image: linear-gradient(45deg, blueviolet, purple);\r\n    border-bottom-right-radius: 34vh;\r\n    max-width: 40%;\r\n    -webkit-animation: l 1.3s ;\r\n            animation: l 1.3s ;\r\n    min-height: 50vh;\r\n    padding: 2vh 4VH;\r\n}\r\n.button:hover{\r\n    height: -webkit-fit-content!important;\r\n    height: -moz-fit-content!important;\r\n    height: fit-content!important;\r\n    box-shadow: #00000070 2px 2px 2px 1px;\r\n    color:azure;\r\n    -webkit-animation: op 2s forwards;\r\n            animation: op 2s forwards;\r\n    background-color: blueviolet;\r\n}\r\n.button{\r\n    border-radius: 30px;\r\n    color: transparent;\r\n    -webkit-animation:op 1s forwards;\r\n            animation:op 1s forwards;\r\n    padding: 2vmin;\r\n    height: -webkit-fill-available;\r\n    height: -moz-available;\r\n    height: stretch;\r\n}\r\n@-webkit-keyframes op{\r\n    from{\r\n        margin-top: 50%;\r\n    }\r\n    to{\r\n        margin-top: 0%;\r\n    }\r\n}\r\n@keyframes op{\r\n    from{\r\n        margin-top: 50%;\r\n    }\r\n    to{\r\n        margin-top: 0%;\r\n    }\r\n}\r\n.bgp:hover{\r\n\r\n    background-color: rgba(137, 43, 226, 0.274);\r\n}\r\n.bgp{\r\n    position: relative;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: -webkit-fill-available;\r\n    height: -moz-available;\r\n    height: stretch;\r\n    border-bottom-left-radius: inherit;\r\n    border-bottom-right-radius: inherit;\r\n    border-top-left-radius: inherit;\r\n    border-top-right-radius: inherit;\r\n\r\n}\r\n#qf{\r\n    justify-content: center;\r\n    display: flex;\r\n    flex-wrap: wrap ;\r\n    margin: 2vh auto;\r\n}\r\n@-webkit-keyframes l{\r\n    0%{\r\n        border-bottom-right-radius: 14vh;\r\n        max-width: 30%;\r\n        }\r\n    30%{\r\n    }\r\n    100%{\r\n        max-width: 50%;\r\n        border-bottom-right-radius: 34vh;\r\n    }\r\n}\r\n@keyframes l{\r\n    0%{\r\n        border-bottom-right-radius: 14vh;\r\n        max-width: 30%;\r\n        }\r\n    30%{\r\n    }\r\n    100%{\r\n        max-width: 50%;\r\n        border-bottom-right-radius: 34vh;\r\n    }\r\n}\r\n.p{    \r\n    margin: 7% auto;\r\n    min-width: 80%\r\n}\r\n@-webkit-keyframes qq{\r\n    0%{\r\n        margin-left: -100vh;\r\n    }\r\n    100%{\r\n        margin-left: 0vh;\r\n    }\r\n}\r\n@keyframes qq{\r\n    0%{\r\n        margin-left: -100vh;\r\n    }\r\n    100%{\r\n        margin-left: 0vh;\r\n    }\r\n}\r\n@-webkit-keyframes anime{\r\n    0%{\r\n        min-width: 1100px; \r\n       margin-left: 100vh;\r\n    }\r\n    100%{\r\n        margin-left: 0vh;\r\n    }\r\n}\r\n@keyframes anime{\r\n    0%{\r\n        min-width: 1100px; \r\n       margin-left: 100vh;\r\n    }\r\n    100%{\r\n        margin-left: 0vh;\r\n    }\r\n}\r\n@-webkit-keyframes ime{\r\n    0%{\r\n        max-width: 100%;\r\n    }\r\n    100%{\r\n        margin: auto;\r\n        max-width: 80%;\r\n    }\r\n}\r\n@keyframes ime{\r\n    0%{\r\n        max-width: 100%;\r\n    }\r\n    100%{\r\n        margin: auto;\r\n        max-width: 80%;\r\n    }\r\n}\r\n@keyframes ime{\r\n    0%{\r\n        max-width: 100%;\r\n    }\r\n    100%{\r\n        margin: auto;\r\n        max-width: 80%;\r\n    }\r\n}\r\n#html{\r\n    -webkit-animation: .51s drre forwards;\r\n            animation: .51s drre forwards;\r\n}\r\n@-webkit-keyframes drre{\r\n    from{\r\n        margin-left:10%;\r\n    }\r\n    to{\r\n        \r\n        margin: 0%;\r\n}\r\n}\r\n@keyframes drre{\r\n    from{\r\n        margin-left:10%;\r\n    }\r\n    to{\r\n        \r\n        margin: 0%;\r\n}\r\n}\r\nlabel{\r\n    color:white;\r\n    background-color: #888;\r\n}\r\n.der{\r\n    padding: .5em;\r\n    color: black;   \r\n}\r\ninput.der{\r\n    outline: blueviolet 1px;\r\n    border: blueviolet solid 2px;\r\n    border-radius: 35px;\r\n    height: 35px;\r\n    margin: 0 5vh;\r\n}\r\n@-webkit-keyframes wwP{\r\n    0%{\r\n    opacity: 1;  \r\n  }\r\n    90%{\r\n        opacity: 1;  \r\n\r\n    }\r\n\r\n    100%{\r\n        opacity: 0;\r\n    }\r\n}\r\n@keyframes wwP{\r\n    0%{\r\n    opacity: 1;  \r\n  }\r\n    90%{\r\n        opacity: 1;  \r\n\r\n    }\r\n\r\n    100%{\r\n        opacity: 0;\r\n    }\r\n}\r\n.show{\r\n    display: inline!important;\r\n    -webkit-animation: wwP 5s;\r\n            animation: wwP 5s;\r\n}\r\n#toast_cont{\r\n    position: fixed;\r\n    top: 45px; \r\n    width: 100%;\r\n    display: flex;\r\n}\r\n#toast{\r\n    box-shadow: #00000073 1px 1px 0 0px;\r\n    background-color: blueviolet;\r\n    max-width: 40vh;\r\n    padding: 1.5vh;\r\n    text-align: center;\r\n    border-radius: 30px;\r\n    margin: auto;\r\n    opacity: 0;\r\n    display: none;\r\n}\r\n#ase{\r\n    box-shadow: #00000073 1px 1px 0 0px;\r\n    background-color: blueviolet;\r\n    width: 20vh;\r\n    padding: 1.5vh;\r\n    text-align: center;\r\n    border-radius: 30px;\r\n    cursor: pointer;\r\n    margin-left: 12vh;\r\n    margin-top: 1vh;\r\n}\r\n#poiu{\r\n    background-image: url('contact-us-landing-page-template-flat-design.jpg');\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n#teded{\r\n    background-color: rgba(137, 43, 226, 0.55);;\r\n    display: flex;\r\n    height: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n#ed{\r\n    font-size: 2.5em;\r\n    font-weight: 800;\r\n    font-family: cursive;\r\n    background-color: rgba(137, 43, 226, 0.55);\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixpQ0FBNEM7O0FBRWhEO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZEQUE2RDtBQUNqRTtBQUNBO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtJQUNwQix5REFBeUQ7QUFDN0Q7QUFDQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixtQ0FBOEM7QUFDbEQ7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsNkJBQWM7SUFBZCxxQkFBYztJQUFkLGNBQWM7SUFDZCwyQkFBMkI7QUFDL0I7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxXQUFXOztJQUVmO0lBQ0E7UUFDSSxjQUFjOztJQUVsQjtJQUNBO1FBQ0ksV0FBVzs7SUFFZjtJQUNBO0FBekJKO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFdBQVc7O0lBRWY7SUFDQTtRQUNJLGNBQWM7O0lBRWxCO0lBQ0E7UUFDSSxXQUFXOztJQUVmO0lBQ0E7QUFDSjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7O0FBRWY7QUFDQTtJQUNJLFdBQVc7O0FBRWY7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGFBQWE7O0FBRWpCO0FB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QUNJLG1DQUFtQztJQUNuQyw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUVBQXNGO0lBQ3RGLDJCQUEyQjtJQUMzQixzQkFBc0I7SUFDdEIsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IG15Rmlyc3RGb250O1xyXG4gICAgc3JjOiB1cmwoLi4vLi4vYXNzZXRzL0l0YWxpYW5uby1SZWd1bGFyLnR0Zik7XHJcblxyXG59XHJcbiNsYW5kaW5ne1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgIzBhM2Q1OSwgIzBiY2FlYiwgIzBhM2Q1OSk7ICAgIFxyXG59XHJcbiNkaXNwbGF5e1xyXG4gICAgbWFyZ2luOiAwIDIyJTtcclxuICAgIGN1cnNvcjogY29udGV4dC1tZW51O1xyXG4gICAgZm9udC1mYW1pbHk6LWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCI7XHJcbn1cclxuI29ra3tcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIExJTkUtSEVJR0hUOiAxO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy81MHlPVk0uanBnKTtcclxufVxyXG4jZGFya2Jne1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IHN0cmV0Y2g7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwNjk7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZWV7XHJcbiAgICAwJXtcclxuICAgICAgICBoZWlnaHQ6IDI0JTtcclxuICAgIH1cclxuICAgIDIwJXtcclxuICAgICAgICBoZWlnaHQ6IDI0LjElO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgIGhlaWdodDogMjQuNSU7XHJcbiAgICB9XHJcbiAgICA2NSV7XHJcbiAgICAgICAgaGVpZ2h0OiAyMy41JTtcclxuICAgIH1cclxuICAgIDc1JXtcclxuICAgICAgICBoZWlnaHQ6IDIwJTtcclxuXHJcbiAgICB9XHJcbiAgICA4Mi41JXtcclxuICAgICAgICBoZWlnaHQ6IDIyLjY3JTtcclxuXHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIGhlaWdodDogMjQlO1xyXG5cclxuICAgIH1cclxuICAgIH1cclxuQGtleWZyYW1lcyBub2l7XHJcbjAle1xyXG4gICAgaGVpZ2h0OiA3NCU7XHJcbn1cclxuMjAle1xyXG4gICAgaGVpZ2h0OiA3MyU7XHJcbn1cclxuNTAle1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcblxyXG59XHJcbjY1JXtcclxuICAgIGhlaWdodDogNzglO1xyXG5cclxufVxyXG43NSV7XHJcbiAgICBoZWlnaHQ6IDc4LjglO1xyXG59XHJcbjgyLjUle1xyXG4gICAgaGVpZ2h0OiA3OC4xJTtcclxuXHJcbn1cclxuMTAwJXtcclxuICAgIGhlaWdodDogNzcuMyU7XHJcblxyXG59XHJcbn1cclxuLndoaXRlQmd7XHJcbiAgICBhbmltYXRpb246IDNzIG5vaSBlYXNlLWluIGluZmluaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLndoaXRCZ3tcclxuICAgIGFuaW1hdGlvbjogM3MgZWUgZWFzZS1pbiBpbmZpbml0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi53aHl0Qmd7XHJcbiAgICBoZWlnaHQ6MiU7XHJcbiAgICBhbmltYXRpb246IDEwMHMgZSBlYXNlLWluIGluZmluaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuaDN7XHJcbiAgICBtYXJnaW46MDtcclxufVxyXG4ua297XHJcbiAgICBtYXJnaW46IDAgNS43dmg7XHJcbn1cclxuLyogI3N0YXQ6OmFmdGVye1xyXG4gICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldmlvbGV0cmVkO1xyXG4gICAgcGFkZGluZzogLjJ2aDtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG59ICovXHJcbi8qICNzdGF0OjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHBhZGRpbmc6IC4ydmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldmlvbGV0cmVkO1xyXG59ICovXHJcbiNsaW5qe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLyogdG9wOiAxMy41JTsgKi9cclxuICAgIGJvdHRvbTogMTUuNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgaGVpZ2h0OiA1NXZoO1xyXG4gICAgd2lkdGg6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbiNsaW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIHdpZHRoOjg1JTtcclxuICAgIGJvdHRvbTogMTUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuI3N0YXR7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHZoO1xyXG4gICAgLyogcGFkZGluZzogMnZoIDV2aDsgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbiNzYXR7XHJcbiAgICBtaW4taGVpZ2h0OiAzMHZoO1xyXG4gICAgLyogcGFkZGluZzogMnZoIDV2aDsgKi9cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbiNmcntcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICMwMDAwMDA2NjtcclxufVxyXG4ucGFyYWxheHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaGFnYS5qcGVnKTtcclxuXHJcbiAgICBoZWlnaHQ6IGNhbGMoZml0LWNvbnRlbnQgKyA1dmgpOyBcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5pe1xyXG4gICAgbWluLXdpZHRoOiAxNXZoO1xyXG59XHJcbkBrZXlmcmFtZXMgZXtcclxuICAgIDAle1xyXG4gICAgICAgIGhlaWdodDogMTAlOyBcclxuICAgIH1cclxuICAgIDE1JXtcclxuICAgICAgICBoZWlnaHQ6IDE1JTtcclxuICAgIH1cclxuICAgIDI1JXtcclxuXHJcbiAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB9XHJcbiAgICAzNSV7XHJcbiAgICAgICAgaGVpZ2h0OiAzNSU7XHJcbiAgICB9XHJcbiAgICA0NSV7XHJcbiAgICAgICAgaGVpZ2h0OiA2NSU7XHJcbiAgICB9XHJcbiAgICA1MCV7XHJcbiAgICAgICAgaGVpZ2h0OiA1NSU7ICAgICBcclxuICAgIH1cclxuICAgIDYwJXtcclxuICAgICAgICBoZWlnaHQ6IDcyLjUwJTtcclxuICAgIH1cclxuICAgIDY2JXtcclxuICAgICAgICBoZWlnaHQ6IDQ0LjMlO1xyXG4gICAgfVxyXG4gICAgNzUle1xyXG4gICAgICAgIGhlaWdodDogNTUuMiU7XHJcbiAgICB9XHJcbiAgICA4NSV7XHJcbiAgICAgICAgaGVpZ2h0OiA0NS40JTtcclxuICAgIH1cclxuICAgIDkwJXtcclxuICAgICAgICBoZWlnaHQ6IDIzLjUlO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICBoZWlnaHQ6IDE1LjglO1xyXG4gICAgfVxyXG59XHJcbi5rZGR7XHJcbiAgICBoZWlnaHQ6IDQydmg7XHJcbiAgICBtYXJnaW46IDAgNXZoO1xyXG4gICAgd2lkdGg6IDEwdmhcclxufVxyXG4ua2R7XHJcbiAgICBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg0NWRlZyxibGFjayxkYXJrYmx1ZSxyZ2IoMTY3LCAxNjEsIDE2MSkpO1xyXG4gICAgaGVpZ2h0OiA0MnZoO1xyXG4gICAgd2lkdGg6IDV2aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jbGFuZGluZ1RleHRDb250e1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYW5pbWF0aW9uOiBpbWUgMy41cztcclxuICAgIGhlaWdodDogODMlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbiNta3tcclxuICAgIHBhZGRpbmc6IDEuNSUgMTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxufVxyXG4jc21hbGxUZXh0e1xyXG4gICAgZm9udC1zaXplOiA1dmg7XHJcbiAgICBhbmltYXRpb246IHFxIDMuNXMgY3ViaWMtYmV6aWVyKDAuMjIsIDAuNjEsIDAuMzYsIDEpIGZvcndhcmRzO1xyXG59XHJcbiNsaW5le1xyXG4gICAgYW5pbWF0aW9uOiBxcSAzLjVzIGN1YmljLWJlemllcigwLjIyLCAwLjYxLCAwLjM2LCAxKSBmb3J3YXJkczsgICAgXHJcbn1cclxuI3dxe1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9pYWlhLmpwZWcpO1xyXG4gICAgbWluLWhlaWdodDogMTJ2aDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIC8qIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IHN0cmV0Y2g7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG4jZ2FraWx7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDMwdm1pbjtcclxuICAgIHBhZGRpbmc6IDZ2bWluO1xyXG59XHJcbkBrZXlmcmFtZXMgaHtcclxuICAgIGZyb217XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIHRve1xyXG4gICAgICAgIG1heC13aWR0aDogMjAlO1xyXG4gICAgfVxyXG59XHJcbi5naHB7XHJcbiAgICBhbmltYXRpb246IGggM3MgY3ViaWMtYmV6aWVyKDAuMjIsIDAuNjEsIDAuMzYsIDEpO1xyXG4gICAgbWluLWhlaWdodDogLjJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgICBtYXgtd2lkdGg6IDIwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDo4NzBweCl7XHJcbiAgICAuU1Nje1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuI2h5aHl7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOjQwMHB4KXtcclxuICAgICNoeWh5e1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAgKG1heC13aWR0aDo3MDBweCl7XHJcbiAgICAjbGFuZGluZ1RleHRDb250e1xyXG4gICAgICAgIGhlaWdodDogMzUlO1xyXG4gICAgfVxyXG4gICAgI2JpZ1RleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiA4dmghaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOjEwMDBweCl7XHJcbiAgICAjYmlnVGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDEwdmghaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kICAobWF4LXdpZHRoOjYwMHB4KXtcclxuICAgI3N0YXR7XHJcbiAgICBwYWRkaW5nOiAwcHghaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgICAua2R7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHZoIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICNsaW5qe1xyXG4gICAgICAgIGhlaWdodDogMzMuNXZoO1xyXG4gICAgfVxyXG4gICAgI2xpbntcclxuICAgICAgICB3aWR0aDogNTB2aDtcclxuICAgIH1cclxuICAgIC5tb2J7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5ib3h7XHJcbiAgICAgICAgZm9udC1zaXplOiAzdmg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAyMzBweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxNzBweFxyXG4gICAgfVxyXG4gICAgI2xhbmRpbmdUZXh0Q29udHtcclxuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgfVxyXG4gICAgdGV4dGFyZWEuZGVye1xyXG4gICAgICAgIG1hcmdpbjogOC41JSFpbXBvcnRhbnQ7XHJcblxyXG5cclxuICAgIH1cclxuICAgIC5kZXJ7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDAgLjVlbSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgICNsYW5kaW5ne1xyXG4gICAgICAgIGhlaWdodDogNTJ2aCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTJ2aCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjZ2FraWx7XHJcbiAgICB3aWR0aDogODUlOyBcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwdm1pbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM3LCA0MywgMjI2LCAwLjY5KTtcclxuICAgIH1cclxuICAgICNwYWNrYWdlcntcclxuICAgICAgICBwYWRkaW5nOiAydmggNXZoIDJ2aCA3dmghaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI2h7ICAgXHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDEzNywgNDMsIDIyNiwgMC4yMTIpLCBwdXJwbGUpIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHZoIWltcG9ydGFudDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA0MHZoIWltcG9ydGFudDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgI3NtYWxsVGV4dHtcclxuICAgICAgICBmb250LXNpemU6Mi41dmg7XHJcbiAgICB9XHJcbiAgICAjYmlnVGV4dHtcclxuICAgICAgICBtaW4td2lkdGg6IDMyN3B4O1xyXG4gICAgICBmb250LXNpemU6NC40dmghaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbiNiaWdUZXh0e1xyXG4gICAgLyogbWF4LXdpZHRoOiBmaXQtY29udGVudDsgKi9cclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBmb250LXNpemU6IDE1Vmg7XHJcbiAgICBmb250LWZhbWlseTogbXlGaXJzdEZvbnQ7XHJcbiAgICBhbmltYXRpb246IGFuaW1lIDMuNXMgY3ViaWMtYmV6aWVyKDAuMjIsIDAuNjEsIDAuMzYsIDEpIGZvcndhcmRzO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgLyogbWluLXdpZHRoOiAxMDAwcHg7ICovXHJcbn1cclxuI3BhY2thZ2VyOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4LCA1LCAxMSwgMC43OSk7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yLCBjb2xvciAuNXM7XHJcbiAgICBjb2xvcjogIzg4ODtcclxufVxyXG4ubmV3c1RpcHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTJweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IDF2bWluIDAgMXZtaW4gMC40dm1pbjtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM3LCA0MywgMjI2LCAwLjM5Nyk7XHJcblxyXG59XHJcbi5uZXdze1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtaW4td2lkdGg6IDEydm1pbjtcclxuICAgIG1pbi1oZWlnaHQ6IDEydm1pbjtcclxuICAgIHBhZGRpbmc6IDAhaW1wb3J0YW50O1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICBtaW4td2lkdGg6IDI0NXB4O1xyXG59XHJcbiNpb3B7ICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaXZvcnk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuI3F3cXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4jcGFja2FnZXJ7XHJcbiAgICBwYWRkaW5nOiAyY2g7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknOyBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6ICAydmggNXZoIDJ2aCAwdmg7XHJcbiAgICBtaW4td2lkdGg6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuLml7XHJcbiAgICBtYXgtd2lkdGg6IDEydmg7XHJcbiAgICBtYXJnaW46MXZoIGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5wLCBoMXtcclxuICAgIGN1cnNvcjogY29udGV4dC1tZW51O1xyXG59XHJcbiNib3h7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC41cztcclxufVxyXG4jYm94eXtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbn1cclxuI2JveHd7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XHJcbn1cclxuI2JveHh7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDIuNXM7XHJcbn1cclxuI2JveGx7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xyXG59XHJcbiNib3hpe1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzLjVzO1xyXG59XHJcbi5qaXtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG4uZmFme1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogIGN1YmljLWJlemllcigwLjAxLCAxLjAxLCAwLjM1LCAwLjkzKTtcclxuICAgIGFuaW1hdGlvbjogbG9vIGZvcndhcmRzO1xyXG59XHJcbkBrZXlmcmFtZXMgbG9ve1xyXG4gICAgMCV7XHJcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwdmg7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDppbml0aWFsO1xyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMganl5e1xyXG5mcm9te1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxufVxyXG50b3tcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuIH1cclxufVxyXG4uZGV7XHJcblxyXG4gICAgYW5pbWF0aW9uOiBqeXkgMTBzIGN1YmljLWJlemllcigwLjk1LCAwLjA1LCAwLjc5NSwgMC4wMzUpIGZvcndhcmRzIWltcG9ydGFudDtcclxufVxyXG5oMSwgZGl2LCBzcGFue1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIjtcclxufVxyXG4uYm94e1xyXG4gICAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIjtcclxuICAgIG1heC13aWR0aDogMzV2aDtcclxuICAgIGJvcmRlcjogYmxhY2sgMXB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIG1hcmdpbjogMnZoO1xyXG4gICAgcGFkZGluZzogMnZoO1xyXG4gICAgZm9udC1zaXplOiAzLjV2aDtcclxuICAgIG1pbi13aWR0aDogMjUwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIGJsdWV2aW9sZXQsIHB1cnBsZSk7XHJcbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5LGJveC1zaGFkb3csIDNzLCAuM3MgY3ViaWMtYmV6aWVyKDAuOTUsIDAuMDUsIDAuNzk1LCAwLjAzNSk7XHJcblxyXG59XHJcbi5wb3dpe1xyXG4gICAgY29sb3I6IGJsYWNrIWltcG9ydGFudDtcclxufVxyXG4uZHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IGJsdWV2aW9sZXQgMnB4IHNvbGlkO1xyXG59XHJcbi5ib3g6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiMyOTIyMjI4NyAzcHggMnB4IDJweCA0cHg7XHJcbn1cclxuI2ggYnV0dG9uI29jdjpob3ZlcntcclxuICAgIHRyYW5zaXRpb246YWxsIC41cyBlYXNlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLGRlZXBwaW5rLCBwaW5rICk7XHJcbn1cclxuI2ggYnV0dG9uI29jdntcclxuICAgIFxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgdHJhbnNpdGlvbjphbGwgLjVzIGVhc2U7XHJcbiAgICB3aWxsLWNoYW5nZTpiYWNrZ3JvdW5kO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBwaW5rLCBkZWVwcGluayk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbiNoe1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCBibHVldmlvbGV0LCBwdXJwbGUpO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDM0dmg7XHJcbiAgICBtYXgtd2lkdGg6IDQwJTtcclxuICAgIGFuaW1hdGlvbjogbCAxLjNzIDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwdmg7XHJcbiAgICBwYWRkaW5nOiAydmggNFZIO1xyXG59XHJcbi5idXR0b246aG92ZXJ7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50IWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6ICMwMDAwMDA3MCAycHggMnB4IDJweCAxcHg7XHJcbiAgICBjb2xvcjphenVyZTtcclxuICAgIGFuaW1hdGlvbjogb3AgMnMgZm9yd2FyZHM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG59XHJcbi5idXR0b257XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYW5pbWF0aW9uOm9wIDFzIGZvcndhcmRzO1xyXG4gICAgcGFkZGluZzogMnZtaW47XHJcbiAgICBoZWlnaHQ6IHN0cmV0Y2g7XHJcbn1cclxuQGtleWZyYW1lcyBvcHtcclxuICAgIGZyb217XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTAlO1xyXG4gICAgfVxyXG4gICAgdG97XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcbiAgICB9XHJcbn1cclxuLmJncDpob3ZlcntcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEzNywgNDMsIDIyNiwgMC4yNzQpO1xyXG59XHJcbi5iZ3B7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiBzdHJldGNoO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogaW5oZXJpdDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogaW5oZXJpdDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBpbmhlcml0O1xyXG5cclxufVxyXG4jcWZ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXAgO1xyXG4gICAgbWFyZ2luOiAydmggYXV0bztcclxufVxyXG5Aa2V5ZnJhbWVzIGx7XHJcbiAgICAwJXtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTR2aDtcclxuICAgICAgICBtYXgtd2lkdGg6IDMwJTtcclxuICAgICAgICB9XHJcbiAgICAzMCV7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzNHZoO1xyXG4gICAgfVxyXG59XHJcbi5weyAgICBcclxuICAgIG1hcmdpbjogNyUgYXV0bztcclxuICAgIG1pbi13aWR0aDogODAlXHJcbn1cclxuQGtleWZyYW1lcyBxcXtcclxuICAgIDAle1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTAwdmg7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwdmg7XHJcbiAgICB9XHJcbn1cclxuQGtleWZyYW1lcyBhbmltZXtcclxuICAgIDAle1xyXG4gICAgICAgIG1pbi13aWR0aDogMTEwMHB4OyBcclxuICAgICAgIG1hcmdpbi1sZWZ0OiAxMDB2aDtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDB2aDtcclxuICAgIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGltZXtcclxuICAgIDAle1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgfVxyXG59XHJcbkBrZXlmcmFtZXMgaW1le1xyXG4gICAgMCV7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgMTAwJXtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuI2h0bWx7XHJcbiAgICBhbmltYXRpb246IC41MXMgZHJyZSBmb3J3YXJkcztcclxufVxyXG5Aa2V5ZnJhbWVzIGRycmV7XHJcbiAgICBmcm9te1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEwJTtcclxuICAgIH1cclxuICAgIHRve1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1hcmdpbjogMCU7XHJcbn1cclxufVxyXG5sYWJlbHtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcclxufVxyXG4uZGVye1xyXG4gICAgcGFkZGluZzogLjVlbTtcclxuICAgIGNvbG9yOiBibGFjazsgICBcclxufVxyXG5cclxuaW5wdXQuZGVye1xyXG4gICAgb3V0bGluZTogYmx1ZXZpb2xldCAxcHg7XHJcbiAgICBib3JkZXI6IGJsdWV2aW9sZXQgc29saWQgMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgIGhlaWdodDogMzVweDtcclxuICAgIG1hcmdpbjogMCA1dmg7XHJcbn1cclxuQGtleWZyYW1lcyB3d1B7XHJcbiAgICAwJXtcclxuICAgIG9wYWNpdHk6IDE7ICBcclxuICB9XHJcbiAgICA5MCV7XHJcbiAgICAgICAgb3BhY2l0eTogMTsgIFxyXG5cclxuICAgIH1cclxuXHJcbiAgICAxMDAle1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbn1cclxuLnNob3d7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUhaW1wb3J0YW50O1xyXG4gICAgYW5pbWF0aW9uOiB3d1AgNXM7XHJcbn1cclxuXHJcbiN0b2FzdF9jb250e1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA0NXB4OyBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4jdG9hc3R7XHJcbiAgICBib3gtc2hhZG93OiAjMDAwMDAwNzMgMXB4IDFweCAwIDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XHJcbiAgICBtYXgtd2lkdGg6IDQwdmg7XHJcbiAgICBwYWRkaW5nOiAxLjV2aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jYXNle1xyXG4gICAgYm94LXNoYWRvdzogIzAwMDAwMDczIDFweCAxcHggMCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xyXG4gICAgd2lkdGg6IDIwdmg7XHJcbiAgICBwYWRkaW5nOiAxLjV2aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJ2aDtcclxuICAgIG1hcmdpbi10b3A6IDF2aDtcclxufVxyXG4jcG9pdXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2NvbnRhY3QtdXMtbGFuZGluZy1wYWdlLXRlbXBsYXRlLWZsYXQtZGVzaWduLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuI3RlZGVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMzcsIDQzLCAyMjYsIDAuNTUpOztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuI2Vke1xyXG4gICAgZm9udC1zaXplOiAyLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTM3LCA0MywgMjI2LCAwLjU1KTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js"); // import { ServiceService } from "../service.service";


    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(document) {
        _classCallCheck(this, HomeComponent);

        this.document = document;
      }

      _createClass(HomeComponent, [{
        key: "onWindowScroll",
        value: function onWindowScroll() {
          if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
            document.getElementById('box').classList.add('faf');
            document.getElementById('boxy').classList.add('faf');
            document.getElementById('boxw').classList.add('faf');
            document.getElementById('boxx').classList.add('faf');
            document.getElementById('boxl').classList.add('faf');
            document.getElementById('boxi').classList.add('faf');
            document.getElementById('box').classList.remove('ji');
            document.getElementById('boxw').classList.remove('ji');
            document.getElementById('boxx').classList.remove('ji');
            document.getElementById('boxl').classList.remove('ji');
            document.getElementById('boxi').classList.remove('ji');
            document.getElementById('boxy').classList.remove('ji');
          } else if (document.body.scrollTop > -20 || document.documentElement.scrollTop > -20) {
            this.document.getElementById('box').classList.remove('faf');
            this.document.getElementById('boxy').classList.remove('faf');
            this.document.getElementById('boxw').classList.remove('faf');
            this.document.getElementById('boxx').classList.remove('faf');
            this.document.getElementById('boxl').classList.remove('faf');
            this.document.getElementById('boxi').classList.remove('faf');
          } else if (document.body.scrollTop > -22 || document.documentElement.scrollTop > -22) {
            this.document.getElementById('box').classList.add('ji');
            this.document.getElementById('boxy').classList.add('ji');
            this.document.getElementById('boxw').classList.add('ji');
            this.document.getElementById('boxx').classList.add('ji');
            this.document.getElementById('boxl').classList.add('ji');
            this.document.getElementById('boxi').classList.add('ji');
          }

          if (document.body.scrollTop > 805 || document.documentElement.scrollTop > 805) {
            document.getElementById('swe').classList.add('faf');
            document.getElementById('swer').classList.add('faf');
            document.getElementById('swec').classList.add('faf');
            document.getElementById('swez').classList.add('faf');
            document.getElementById('swex').classList.add('faf');
            document.getElementById('swes').classList.add('faf');
            document.getElementById('swex').classList.remove('ji');
            document.getElementById('swe').classList.remove('ji');
            document.getElementById('swec').classList.remove('ji');
            document.getElementById('swez').classList.remove('ji');
            document.getElementById('swes').classList.remove('ji');
            document.getElementById('swer').classList.remove('ji');
          } else if (document.body.scrollTop > -20 || document.documentElement.scrollTop > -20) {
            this.document.getElementById('swe').classList.remove('faf');
            this.document.getElementById('swex').classList.remove('faf');
            this.document.getElementById('swez').classList.remove('faf');
            this.document.getElementById('swec').classList.remove('faf');
            this.document.getElementById('swes').classList.remove('faf');
            this.document.getElementById('swer').classList.remove('faf');
          } else if (document.body.scrollTop > -22 || document.documentElement.scrollTop > -22) {
            this.document.getElementById('swe').classList.add('ji');
            this.document.getElementById('swer').classList.add('ji');
            this.document.getElementById('swec').classList.add('ji');
            this.document.getElementById('swex').classList.add('ji');
            this.document.getElementById('swez').classList.add('ji');
            this.document.getElementById('swes').classList.add('ji');
          }
        }
      }, {
        key: "sent",
        value: function sent() {
          this.document.getElementById('toast').classList.add('show');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submitForm",
        value: function submitForm(form) {
          // this.s.sendFeedback(form.value);
          this.sent();
          form.reset();
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']) // for window scroll events
    ], HomeComponent.prototype, "onWindowScroll", null);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))], HomeComponent);
    /***/
  },

  /***/
  "./src/app/nav/nav.component.css":
  /*!***************************************!*\
    !*** ./src/app/nav/nav.component.css ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@font-face {\r\n    font-family: myFont;\r\n    src: url('Monoton-Regular.ttf');\r\n}\r\nnav{\r\n    max-height: 2.5em;\r\n    min-height: 2.5em;\r\n    background-color: blueviolet;\r\n    position: fixed;\r\n    min-width: 100%;\r\n    top:0;\r\n    color: white;\r\n    z-index:1;\r\n    box-shadow: #0a080821 3px 3px 6px -0.2px;\r\n}\r\n.ps{\r\n    max-width: 80%;\r\n}\r\n.p{\r\n    padding-left: 10em ;\r\n    padding-right: 10em;\r\n}\r\n.b{\r\n    min-height: -webkit-fill-available;\r\n    min-height: -moz-available;\r\n    min-height: stretch;\r\n    max-width: 80%;\r\n    margin: auto;\r\n}\r\n#s{\r\n    min-height: 1.6em;\r\n    position: fixed;\r\n    min-width: 100%;\r\n    z-index: 2\r\n}\r\n#b{\r\n    float: right;\r\n    min-height: 2.5em;\r\n    display: flex;\r\n    flex-direction: row-reverse;\r\n}\r\n#v{\r\n    min-height: 1.5em;\r\n    top: 2em;\r\n    background-color: blueviolet;\r\n    position: relative;\r\n}\r\n.link{\r\n    background-color: inherit;\r\n    min-width: 7em;    \r\n    text-align: center;\r\n    color: white;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 2em;\r\n}\r\n.carryLink{\r\n    height: 50%;\r\n}\r\na.anchor:hover{\r\n    background-color: rgb(92, 33, 146);\r\n}\r\na.anchor{\r\n    text-decoration: none;\r\n}\r\n.logo{\r\n    margin-top: 1.2%;\r\n    color: blueviolet;\r\n    font-family: arial;\r\n    font-size: large;\r\n    font-weight: 900;\r\n}\r\n.active{\r\n    background-color:deeppink\r\n}\r\n#style{\r\n    display: flex;\r\n    background-color: white;\r\n    color:  blue;\r\n    font-size: 150%;\r\n    cursor: pointer;\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    border-top-left-radius: 3vh;\r\n    border-bottom-right-radius: 3vh;\r\n    border-bottom-left-radius: 3vh;\r\n    border-top-right-radius:3vh ;\r\n    padding:0 1vh;\r\n}\r\n#frw{    \r\n    width: 100%;\r\n}\r\n@media screen and (max-width:720px){\r\n    .link{\r\n        min-width: 4em!important;\r\n\r\n    }\r\n}\r\n@media screen and (max-width:850px){\r\n    .link{\r\n        min-width: 5em!important;\r\n    }\r\n}\r\n@media screen and (max-width:600px){\r\n    #aaa{\r\n        display: block!important;\r\n    }\r\n    #ws{\r\n        display: block!important;}    \r\n    .link{\r\n        min-width: 3em!important;\r\n        font-size: small;\r\n        margin: 1.5vmin;\r\n        height: -webkit-fit-content;\r\n        height: -moz-fit-content;\r\n        height: fit-content;\r\n    }\r\n    #frw{    \r\n        width: 35%;\r\n    }\r\n    #b{\r\n        display: none;\r\n    }\r\n    .carryLink{\r\n        display: flex;\r\n        flex-direction: column;\r\n        padding: .3em;\r\n        justify-content: center;\r\n    }\r\n}\r\n#ws::before{\r\n    content: '';\r\n    position: absolute;\r\n    top: 7px;\r\n    height: inherit;\r\n    width: inherit;\r\n    background-color: inherit;\r\n}\r\n#ws::after{    \r\n    content: '';\r\n    position: absolute;\r\n    bottom: 17px;\r\n    height: inherit;\r\n    width: inherit;\r\n    background-color:inherit;\r\n}\r\n#ert{\r\n    \r\n    cursor: pointer;\r\n    display: flex;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n#ws{display: none;\r\n    margin-right: 12px;\r\n\theight:2.5px;\r\n\twidth: 30px;\r\n    background-color: white;\r\n}\r\n#aaa{\r\n    display: none;\r\n    position: absolute;\r\n    top: 30px;\r\n    right: 0px;\r\n    padding: .2em;\r\n    background-color: black;\r\n}\r\nul{\r\n    -webkit-padding-start: 0px;\r\n            padding-inline-start: 0px;\r\n    list-style: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLCtCQUEwQztBQUM5QztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGVBQWU7SUFDZixLQUFLO0lBQ0wsWUFBWTtJQUNaLFNBQVM7SUFDVCx3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtDQUFtQjtJQUFuQiwwQkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7SUFDZjtBQUNKO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYiwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixRQUFRO0lBQ1IsNEJBQTRCO0lBQzVCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixzRUFBc0U7SUFDdEUsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLGFBQWE7QUFDakI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0k7UUFDSSx3QkFBd0I7O0lBRTVCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0o7QUFDQztJQUNHO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx3QkFBd0IsQ0FBQztJQUM3QjtRQUNJLHdCQUF3QjtRQUN4QixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLDJCQUFtQjtRQUFuQix3QkFBbUI7UUFBbkIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsYUFBYTtRQUNiLHVCQUF1QjtJQUMzQjtBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixlQUFlO0lBQ2YsY0FBYztJQUNkLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7QUFDQTs7SUFFSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7QUFDQSxJQUFJLGFBQWE7SUFDYixrQkFBa0I7Q0FDckIsWUFBWTtDQUNaLFdBQVc7SUFDUix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSwwQkFBeUI7WUFBekIseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IG15Rm9udDtcclxuICAgIHNyYzogdXJsKC4uLy4uL2Fzc2V0cy9Nb25vdG9uLVJlZ3VsYXIudHRmKTtcclxufVxyXG5uYXZ7XHJcbiAgICBtYXgtaGVpZ2h0OiAyLjVlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDIuNWVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgIHRvcDowO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgei1pbmRleDoxO1xyXG4gICAgYm94LXNoYWRvdzogIzBhMDgwODIxIDNweCAzcHggNnB4IC0wLjJweDtcclxufVxyXG4ucHN7XHJcbiAgICBtYXgtd2lkdGg6IDgwJTtcclxufVxyXG4ucHtcclxuICAgIHBhZGRpbmctbGVmdDogMTBlbSA7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMGVtO1xyXG59XHJcbi5ie1xyXG4gICAgbWluLWhlaWdodDogc3RyZXRjaDtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiNze1xyXG4gICAgbWluLWhlaWdodDogMS42ZW07XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAyXHJcbn1cclxuI2J7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtaW4taGVpZ2h0OiAyLjVlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuI3Z7XHJcbiAgICBtaW4taGVpZ2h0OiAxLjVlbTtcclxuICAgIHRvcDogMmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ubGlua3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICBtaW4td2lkdGg6IDdlbTsgICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbn1cclxuLmNhcnJ5TGlua3tcclxuICAgIGhlaWdodDogNTAlO1xyXG59XHJcbmEuYW5jaG9yOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkyLCAzMywgMTQ2KTtcclxufVxyXG5hLmFuY2hvcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4ubG9nb3tcclxuICAgIG1hcmdpbi10b3A6IDEuMiU7XHJcbiAgICBjb2xvcjogYmx1ZXZpb2xldDtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG59XHJcbi5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmRlZXBwaW5rXHJcbn1cclxuI3N0eWxle1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6ICBibHVlO1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDN2aDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzdmg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzdmg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czozdmggO1xyXG4gICAgcGFkZGluZzowIDF2aDtcclxufVxyXG5cclxuI2Zyd3sgICAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjcyMHB4KXtcclxuICAgIC5saW5re1xyXG4gICAgICAgIG1pbi13aWR0aDogNGVtIWltcG9ydGFudDtcclxuXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo4NTBweCl7XHJcbiAgICAubGlua3tcclxuICAgICAgICBtaW4td2lkdGg6IDVlbSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NjAwcHgpe1xyXG4gICAgI2FhYXtcclxuICAgICAgICBkaXNwbGF5OiBibG9jayFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAjd3N7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2shaW1wb3J0YW50O30gICAgXHJcbiAgICAubGlua3tcclxuICAgICAgICBtaW4td2lkdGg6IDNlbSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICAgICBtYXJnaW46IDEuNXZtaW47XHJcbiAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIH1cclxuICAgICNmcnd7ICAgIFxyXG4gICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICB9XHJcbiAgICAjYntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNhcnJ5TGlua3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgcGFkZGluZzogLjNlbTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4jd3M6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA3cHg7XHJcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuI3dzOjphZnRlcnsgICAgXHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTdweDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjppbmhlcml0O1xyXG59XHJcbiNlcnR7XHJcbiAgICBcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiN3c3tkaXNwbGF5OiBub25lO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG5cdGhlaWdodDoyLjVweDtcclxuXHR3aWR0aDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbiNhYWF7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmc6IC4yZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG51bHtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/nav/nav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/nav/nav.component.ts ***!
    \**************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NavComponent =
    /*#__PURE__*/
    function () {
      function NavComponent() {
        _classCallCheck(this, NavComponent);
      }

      _createClass(NavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavComponent;
    }();

    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/nav/nav.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nav.component.css */
      "./src/app/nav/nav.component.css")).default]
    })], NavComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\angular\new\TaxSystem - Copy\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map