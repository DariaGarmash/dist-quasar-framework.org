webpackJsonp([59],{165:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(401),s=e.n(n),r=e(402),i=e(4),o=i(s.a,r.a,!1,null,null,null);t.default=o.exports},401:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e(1);t.default={components:{QChatMessage:n.QChatMessage,QSpinnerDots:n.QSpinnerDots},data:function(){return{message:"",messages:[{label:"Sunday, 19th"},{name:"Vladimir",text:["How are you?"],avatar:"statics/boy-avatar.png",stamp:"Yesterday 13:34"},{name:"Jane",text:["I'm good, thank you!","And you?"],sent:!0,textColor:"white",bgColor:"black",avatar:"statics/linux-avatar.png",stamp:"Yesterday at 13:50"},{name:"Jane",text:["And you?"],sent:!0,avatar:"statics/linux-avatar.png",stamp:"Yesterday at 13:51"},{label:"Sunday, 19th"},{name:"Vladimir",bgColor:"amber",textColor:"white",text:["Fine. Nice weather today, right?","Hmm..."],avatar:"statics/boy-avatar.png",stamp:"13:55"},{label:"Sunday, 19th"},{name:"Vladimir",text:["How are you?"],avatar:"statics/boy-avatar.png",stamp:"Yesterday 13:34"},{name:"Jane",text:["I'm good, thank you!","And you?"],sent:!0,avatar:"statics/linux-avatar.png",stamp:"Yesterday at 13:50"},{name:"Jane",text:["And you?"],sent:!0,avatar:"statics/linux-avatar.png",stamp:"Yesterday at 13:51"},{label:"Sunday, 19th"},{name:"Vladimir",text:["Fine. Nice weather today, right?","Hmm..."],avatar:"statics/boy-avatar.png",stamp:"13:55"},{label:"Sunday, 19th"},{name:"Vladimir",text:["How are you?"],avatar:"statics/boy-avatar.png",stamp:"Yesterday 13:34"},{name:"Jane",text:["I'm good, thank you!","And you?"],sent:!0,avatar:"statics/linux-avatar.png",stamp:"Yesterday at 13:50"},{name:"Jane",text:["And you?"],sent:!0,avatar:"statics/linux-avatar.png",stamp:"Yesterday at 13:51"},{label:"Sunday, 19th"},{name:"Vladimir",text:["Fine. Nice weather today, right?","Hmm..."],avatar:"statics/boy-avatar.png",stamp:"13:55"},{label:"Sunday, 19th"},{name:"Vladimir",text:["How are you?"],avatar:"statics/boy-avatar.png",stamp:"Yesterday 13:34"},{name:"Jane",text:["I'm good, thank you!","And you?"],sent:!0,avatar:"statics/linux-avatar.png",stamp:"Yesterday at 13:50"},{name:"Jane",text:["And you?"],sent:!0,avatar:"statics/linux-avatar.png",stamp:"Yesterday at 13:51"},{label:"Sunday, 19th"},{name:"Vladimir",text:["Fine. Nice weather today, right?","Hmm..."],avatar:"statics/boy-avatar.png",stamp:"13:55"}]}}}},402:function(a,t,e){"use strict";var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"layout-padding",staticStyle:{"max-width":"500px"}},[a._l(a.messages,function(a){return e("q-chat-message",{key:a,attrs:{label:a.label,sent:a.sent,"text-color":a.textColor,"bg-color":a.bgColor,name:a.name,avatar:a.avatar,text:a.text,stamp:a.stamp}})}),a._v(" "),e("q-chat-message",{attrs:{name:"Vladimir",avatar:"statics/boy-avatar.png"}},[e("q-spinner-dots",{attrs:{size:"2rem"}})],1)],2)},s=[],r={render:n,staticRenderFns:s};t.a=r}});