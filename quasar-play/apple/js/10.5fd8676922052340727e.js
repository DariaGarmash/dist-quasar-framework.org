webpackJsonp([10],{179:function(t,e,a){"use strict";function o(t){a(455)}Object.defineProperty(e,"__esModule",{value:!0});var i=a(457),n=a.n(i),r=a(458),s=a(4),c=o,p=s(n.a,r.a,!1,c,null,null);e.default=p.exports},455:function(t,e,a){var o=a(456);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(102)("1318ec30",o,!0)},456:function(t,e,a){e=t.exports=a(101)(void 0),e.push([t.i,".play-backtotop{color:#fff;position:fixed;left:0;top:30%;padding:15px;width:90px;background-color:#26a69a;border-radius:0 15px 15px 0}.play-backtotop:hover{color:#e0e0e0}",""])},457:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(0);e.default={components:{QBtn:o.QBtn,QIcon:o.QIcon,QFixedPosition:o.QFixedPosition},directives:{BackToTop:o.BackToTop,Ripple:o.Ripple}}},458:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-padding row justify-center"},[a("div",{staticStyle:{width:"500px","max-width":"90vw"}},[a("p",{staticClass:"caption"},[t._v("\n      Scroll down "),a("q-icon",{staticClass:"animate-bounce",staticStyle:{"font-size":"3rem"},attrs:{name:"keyboard_arrow_down"}})],1),t._v(" "),t._m(0),t._v(" "),a("q-fixed-position",{attrs:{corner:"bottom-right",offset:[18,18]}},[a("q-btn",{directives:[{name:"back-to-top",rawName:"v-back-to-top.animate",value:{offset:500,duration:200},expression:"{offset: 500, duration: 200}",modifiers:{animate:!0}}],staticClass:"animate-pop",attrs:{color:"primary",round:""}},[a("q-icon",{attrs:{name:"keyboard_arrow_up"}})],1)],1),t._v(" "),a("q-fixed-position",{attrs:{corner:"top-left",offset:[0,100]}},[a("a",{directives:[{name:"back-to-top",rawName:"v-back-to-top.animate",value:1e3,expression:"1000",modifiers:{animate:!0}},{name:"ripple",rawName:"v-ripple.mat",modifiers:{mat:!0}}],staticClass:"animate-pop play-backtotop non-selectable"},[t._v("\n        Back to top\n      ")])]),t._v(" "),t._l(50,function(e){return a("p",{staticClass:"caption"},[t._v("Keep scrolling...")])})],2)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"caption"},[t._v("\n      A circular button is set to appear after scrolling 500px.\n      "),a("br"),t._v("\n      After another 500px another element will appear on the left.\n    ")])}],n={render:o,staticRenderFns:i};e.a=n}});