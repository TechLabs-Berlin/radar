(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4,5,14,21],{479:function(t,e,n){var content=n(484);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("1eb89c8e",content,!0,{sourceMap:!1})},480:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(481),o=n(476);function l(t,e){Object(o.a)(2,arguments);var n=Object(r.a)(t),l=Object(r.a)(e);return n.getTime()===l.getTime()}},481:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(477),o=n(476);function l(t){Object(o.a)(1,arguments);var e=Object(r.a)(t);return e.setHours(0,0,0,0),e}},483:function(t,e,n){"use strict";n(479)},484:function(t,e,n){var r=n(59)(!1);r.push([t.i,".stripe-bg[data-v-44197f55]{background-image:linear-gradient(45deg,#f5f5f5 25%,#fafafa 0,#fafafa 50%,#fafafa 0,#f5f5f5 75%,#fafafa 0,#fafafa);background-size:80px 80px}",""]),t.exports=r},485:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n(9),o=n(489),l=n(492),c=n(509),f=n(496),d=function(t){var e=Object(r.computed)((function(){return Object(o.a)(t.date)})),n=Object(r.computed)((function(){return Object(l.a)(t.date)}));return{isLive:Object(r.computed)((function(){var e=Object(c.a)(new Date,t.date);return e>=0&&e<=120})),isFutureDate:e,isTodayDate:n,isInOneHour:Object(r.computed)((function(){var e=Object(c.a)(t.date,new Date);return e<=60&&e>=0})),isPastDate:Object(r.computed)((function(){return Object(f.a)(t.date)}))}}},486:function(t,e,n){"use strict";n.r(e);var r=n(9),o=Object(r.defineComponent)({props:{faded:{type:Boolean},emphasized:{type:Boolean}},setup:function(){}}),l=(n(483),n(15)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"p-4 border lg:p-8 rounded-xl",class:{"stripe-bg shadow-lg":t.faded,"bg-white shadow-xl":t.emphasized,"shadow-lg bg-white":!t.faded&&!t.emphasized}},[t._t("default")],2)}),[],!1,null,"44197f55",null);e.default=component.exports},487:function(t,e,n){var content=n(498);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(60).default)("054b0600",content,!0,{sourceMap:!1})},488:function(t,e,n){"use strict";n.r(e);var r=n(9),o=Object(r.defineComponent)({props:{resource:{type:Object,required:!0},onPink:{type:Boolean}},setup:function(){return{icons:{meeting:"video",form:"comment-dots",slides:"images",video:"youtube",link:"link",tool:"tools",game:"dice",nothing:"thumbs-up"}}}}),l=n(15),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"flex items-start w-full h-full px-4 py-3 text-left transition-all duration-100 ease-in-out border-2 rounded-lg hover:shadow-lg",class:t.onPink?"border-pink-900 hover:border-pink-600 hover:text-pink-600":"hover:border-blue-600 hover:text-blue-600",attrs:{href:t.resource.url,target:"_blank"}},[n("div",{staticClass:"flex space-x-4"},[n("p",{staticClass:"flex-none text-xl"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:t.icons[t.resource.type]}})],1),t._v(" "),n("div",[n("p",{staticClass:"font-bold"},[t._v(t._s(t.resource.title))]),t._v(" "),n("p",{staticClass:"text-sm"},[t._v(t._s(t.resource.description))])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TIcon:n(160).default})},489:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(477),o=n(476);function l(t){return Object(o.a)(1,arguments),Object(r.a)(t).getTime()>Date.now()}},492:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(480),o=n(476);function l(t){return Object(o.a)(1,arguments),Object(r.a)(t,Date.now())}},493:function(t,e,n){"use strict";n.r(e);n(26),n(25),n(22),n(34),n(21),n(39);var r=n(13),o=(n(257),n(559)),l=n(9),c=n(485);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=Object(l.defineComponent)({props:{tlEvent:{type:Object,required:!0},isCurrentEvent:{type:Boolean},isPastEvent:{type:Boolean},showResources:{type:Boolean},showPermalink:{type:Boolean}},setup:function(t){var e=new Date(t.tlEvent.datetime.start),n=Object(c.a)(d(d({},t.tlEvent),{},{date:e})),r=n.isPastDate,f=n.isFutureDate,v=n.isLive,m=n.isInOneHour,h=Object(l.computed)((function(){for(var e=0,n=Object.values(t.tlEvent.links);e<n.length;e++){if(n[e].length)return!0}})),O=Object(l.computed)((function(){return v.value?"Taking":r.value?"Took":"Takes"}));return{format:o.a,eventDate:e,hasResources:h,isInOneHour:m,isLive:v,isPastDate:r,isFutureDate:f,verb:O}}}),m=(n(497),n(15)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("WrapperContentBox",{attrs:{faded:t.isPastDate&&!t.isLive,emphasized:t.isCurrentEvent}},[n("article",{staticClass:"relative pt-8 lg:pt-0"},[t.isCurrentEvent?n("Stamp",{attrs:{date:t.eventDate}}):t._e(),t._v(" "),n("header",{staticClass:"flex flex-col items-center mb-8"},[n("p",{staticClass:"mb-4 text-4xl font-bold text-center",class:t.isCurrentEvent?"text-pink-600":"text-gray-400"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"calendar-day"}})],1),t._v(" "),t.showPermalink?[n("NuxtLink",{staticClass:"title-link",attrs:{to:"/event/"+t.tlEvent.id}},[n("h2",{staticClass:"\n              relative\n              inline-block\n              mb-1\n              text-2xl\n              font-bold\n              hover:underline\n            "},[t._v("\n            "+t._s(t.tlEvent.title)+"\n            "),n("div",{staticClass:"\n                absolute\n                top-0\n                right-0\n                hidden\n                pl-2\n                text-base text-blue-600\n                transform\n                translate-x-full translate-y-1\n                icon\n              "},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"link"}})],1)])])]:[n("h2",{staticClass:"inline-block mb-1 text-2xl font-bold"},[t._v("\n          "+t._s(t.tlEvent.title)+"\n        ")])],t._v(" "),n("div",[n("p",{staticClass:"text-lg text-center"},[t._v("\n          "+t._s(t.verb)+" place on\n          "+t._s(t.format(t.eventDate,"MMMM do, 'at' h:mm aaaa"))+"\n        ")])])],2),t._v(" "),n("main",[n("div",{staticClass:"pb-10 prose",domProps:{innerHTML:t._s(t.tlEvent.content.html)}})]),t._v(" "),t.hasResources?n("aside",{staticClass:"space-y-8"},[(t.isInOneHour||t.isLive)&&t.tlEvent.links.meetings&&t.tlEvent.links.meetings.length?[n("EventListItemResourceList",{attrs:{resources:t.tlEvent.links.meetings,title:"Meeting Rooms"}})]:t.isCurrentEvent?[n("p",{staticClass:"italic text-center text-gray-400"},[t._v("\n          Other event links will be posted soon!\n        ")])]:t._e(),t._v(" "),t.isLive||t.isPastDate||t.showResources||t.tlEvent.showResources?[t.tlEvent.links.forms&&t.tlEvent.links.forms.length?n("EventListItemResourceList",{attrs:{resources:t.tlEvent.links.forms,title:"Forms"}}):t._e(),t._v(" "),t.tlEvent.links.other&&t.tlEvent.links.other.length?n("EventListItemResourceList",{attrs:{resources:t.tlEvent.links.other,title:"Resources"}}):t._e()]:t._e()],2):t._e()],1)])}),[],!1,null,"522f9d46",null);e.default=component.exports;installComponents(component,{Stamp:n(494).default,TIcon:n(160).default,EventListItemResourceList:n(495).default,WrapperContentBox:n(486).default})},494:function(t,e,n){"use strict";n.r(e);var r=n(9),o=n(485),l=Object(r.defineComponent)({props:{date:{type:Date,default:new Date}},setup:function(t){var e=Object(o.a)({date:t.date}),n=e.isLive,l=e.isFutureDate,c=e.isTodayDate,text=Object(r.computed)((function(){return n.value?"live!":c.value?"today!":"next"})),f=Object(r.computed)((function(){return l.value&&!c.value?"text-blue-600 bg-white":"text-white bg-blue-600"}));return{isFutureDate:l,isTodayDate:c,text:text,classNames:f,isLive:n}}}),c=n(15),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"absolute top-0 left-0 px-2 py-1 text-sm font-semibold tracking-wide uppercase border-2 border-blue-600 rounded-lg shadow",class:t.classNames},[n("span",[t._v(t._s(t.text))])])}),[],!1,null,null,null);e.default=component.exports},495:function(t,e,n){"use strict";n.r(e);var r=n(9),o=Object(r.defineComponent)({props:{resources:{type:Array,default:function(){return[]}},title:{type:String,default:""}},setup:function(){return{}}}),l=n(15),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",{staticClass:"title-with-lines"},[t._v(t._s(t.title))]),t._v(" "),n("ul",{staticClass:"link-grid"},t._l(t.resources,(function(t){return n("li",{key:t.title},[n("ResourceListItem",{attrs:{resource:t}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ResourceListItem:n(488).default})},496:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n(477),o=n(476);function l(t){return Object(o.a)(1,arguments),Object(r.a)(t).getTime()<Date.now()}},497:function(t,e,n){"use strict";n(487)},498:function(t,e,n){var r=n(59)(!1);r.push([t.i,".title-link:hover .icon[data-v-522f9d46]{display:inline-block}",""]),t.exports=r},509:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(477),o=n(476);function l(t,e){Object(o.a)(2,arguments);var n=Object(r.a)(t),l=Object(r.a)(e);return n.getTime()-l.getTime()}function c(t,e){Object(o.a)(2,arguments);var n=l(t,e)/6e4;return n>0?Math.floor(n):Math.ceil(n)}},531:function(t,e,n){"use strict";n.r(e);var r=n(9),o=Object(r.defineComponent)({props:{show:{type:Boolean},events:{type:Array,default:function(){return[]}}},setup:function(){var t=Object(r.ref)(!1);return{showEvents:t,toggle:function(){return t.value=!t.value}}}}),l=n(15),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.events.length?[t.show?n("ul",{staticClass:"mb-8 space-y-4 md:space-y-8"},t._l(t.events,(function(t){return n("li",{key:t.id},[n("EventListItem",{attrs:{"tl-event":t,"is-past-event":"","show-resources":"","show-permalink":""}})],1)})),0):t._e()]:n("div",[n("p",[t._v("No Past Events.")])])],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{EventListItem:n(493).default})}}]);