webpackJsonp([49],{180:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(459),n=i.n(s),r=i(460),a=i(4),o=a(n.a,r.a,!1,null,null,null);e.default=o.exports},459:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(0);e.default={components:{QInfiniteScroll:s.QInfiniteScroll,QChip:s.QChip,QSpinnerDots:s.QSpinnerDots},data:function(){return{items:[{},{},{},{},{}]}},methods:{refresher:function(t,e){var i=this;setTimeout(function(){for(var t=[],s=0;s<7;s++)t.push({});i.items=i.items.concat(t),e()},2500)}}}},460:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"layout-padding row justify-center"},[i("div",{staticStyle:{width:"500px","max-width":"90vw"}},[i("p",{staticClass:"caption"},[t._v("Scroll down to see it in action.")]),t._v(" "),i("br"),t._v(" "),i("q-infinite-scroll",{attrs:{handler:t.refresher}},[t._l(t.items,function(e,s){return i("p",{staticClass:"caption"},[i("q-chip",{staticClass:"shadow-1",attrs:{square:"",color:"secondary"}},[t._v("\n          "+t._s(s+1)+"\n        ")]),t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      ")],1)}),t._v(" "),i("div",{staticClass:"row justify-center",staticStyle:{"margin-bottom":"50px"}},[i("q-spinner-dots",{attrs:{slot:"message",size:40},slot:"message"})],1)],2)],1)])},n=[],r={render:s,staticRenderFns:n};e.a=r}});