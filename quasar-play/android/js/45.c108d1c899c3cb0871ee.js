webpackJsonp([45],{190:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(483),s=i.n(n),a=i(484),r=i(4),o=r(s.a,a.a,!1,null,null,null);e.default=o.exports},483:function(t,e,i){"use strict";function n(t){return(t<10?"0":"")+t}Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{eventList:[]}},methods:{writeVisibilityState:function(t){var e=new Date;this.eventList.unshift({timestamp:n(e.getHours())+":"+n(e.getMinutes())+":"+n(e.getSeconds())+"."+e.getMilliseconds(),label:" App became "+t})}},mounted:function(){var t=this;this.$nextTick(function(){t.$q.events.$on("app:visibility",t.writeVisibilityState)})},beforeDestroy:function(){this.$q.events.$off("app:visibility",this.writeVisibilityState)}}},484:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"layout-padding row justify-center"},[i("div",{staticStyle:{width:"500px","max-width":"90vw"}},[t._m(0),t._v(" "),t.eventList.length>0?i("table",{staticClass:"q-table striped"},[i("tbody",t._l(t.eventList,function(e){return i("tr",{key:e.timestamp},[i("td",[t._v(t._s(e.timestamp))]),t._v(" "),i("td",[t._v(t._s(e.label))])])}))]):t._e()])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"caption"},[t._v("\n      Switch to another\n      "),i("span",{staticClass:"cordova-hide"},[t._v("\n        tab in your browser\n      ")]),t._v(" "),i("span",{staticClass:"cordova-only"},[t._v("\n        App\n      ")]),t._v("\n      then come back here to see Visibility in action.\n    ")])}],a={render:n,staticRenderFns:s};e.a=a}});