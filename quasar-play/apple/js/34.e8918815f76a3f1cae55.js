webpackJsonp([34],{103:function(r,e,t){"use strict";function o(r){t(242)}Object.defineProperty(e,"__esModule",{value:!0});var n=t(244),a=t.n(n),i=t(245),c=t(4),s=o,d=c(a.a,i.a,!1,s,null,null);e.default=d.exports},242:function(r,e,t){var o=t(243);"string"==typeof o&&(o=[[r.i,o,""]]),o.locals&&(r.exports=o.locals);t(101)("2fe14da3",o,!0)},243:function(r,e,t){e=r.exports=t(100)(void 0),e.push([r.i,".error-page .error-code{height:50vh;width:100%;padding-top:15vh;font-size:30vmax;color:hsla(0,0%,100%,.2);overflow:hidden}.error-page .error-card{border-radius:2px;margin-top:-50px;width:80vw;max-width:600px;padding:25px}.error-page .error-card>i{font-size:5rem}",""])},244:function(r,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(1);e.default={components:{QBtn:o.QBtn,QIcon:o.QIcon},data:function(){return{canGoBack:window.history.length>1}},methods:{goBack:function(){window.history.go(-1)}}}},245:function(r,e,t){"use strict";var o=function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("div",{staticClass:"error-page window-height window-width bg-light column items-center no-wrap"},[t("div",{staticClass:"error-code bg-primary flex flex-center"},[r._v("\n    404\n  ")]),r._v(" "),t("div",[t("div",{staticClass:"error-card shadow-4 bg-white column flex-center no-wrap"},[t("q-icon",{attrs:{name:"error_outline",color:"grey-5"}}),r._v(" "),t("p",{staticClass:"caption text-center"},[r._v("Oops. Nothing here...")]),r._v(" "),t("p",{staticClass:"text-center group"},[r.canGoBack?t("q-btn",{attrs:{color:"primary",push:"",icon:"keyboard_arrow_left"},on:{click:r.goBack}},[r._v("\n          Go back\n        ")]):r._e(),r._v(" "),t("q-btn",{attrs:{color:"primary",push:"","icon-right":"home"},on:{click:function(e){r.$router.replace("/")}}},[r._v("\n          Go home\n        ")])],1)],1)])])},n=[],a={render:o,staticRenderFns:n};e.a=a}});