(window.webpackJsonp=window.webpackJsonp||[]).push([[23,5,6,7,16,22],{435:function(t,e,n){var content=n(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("1eb89c8e",content,!0,{sourceMap:!1})},436:function(t,e,n){"use strict";n.r(e);var r=n(35),l=Object(r.b)({props:{faded:{type:Boolean},emphasized:{type:Boolean}},setup:function(){}}),o=(n(438),n(15)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"p-4 border lg:p-8 rounded-xl",class:{"stripe-bg shadow-lg":t.faded,"bg-white shadow-xl":t.emphasized,"shadow-lg bg-white":!t.faded&&!t.emphasized}},[t._t("default")],2)}),[],!1,null,"44197f55",null);e.default=component.exports},438:function(t,e,n){"use strict";n(435)},439:function(t,e,n){var r=n(61)(!1);r.push([t.i,".stripe-bg[data-v-44197f55]{background-image:linear-gradient(45deg,#f5f5f5 25%,#fafafa 0,#fafafa 50%,#fafafa 0,#f5f5f5 75%,#fafafa 0,#fafafa);background-size:80px 80px}",""]),t.exports=r},440:function(t,e,n){"use strict";n.r(e);var r=n(35),l=Object(r.b)({props:{resource:{type:Object,required:!0}},setup:function(){return{icons:{meeting:"video",form:"comment-dots",slides:"images",video:"youtube",link:"link",tool:"tools"}}}}),o=n(15),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"flex items-start w-full h-full px-4 py-3 text-left transition-all duration-100 ease-in-out border-2 rounded-lg hover:border-blue-600 hover:shadow-lg hover:text-blue-600",attrs:{href:t.resource.url,target:"blank"}},[n("div",{staticClass:"flex space-x-4"},[n("p",{staticClass:"flex-none text-xl"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:t.icons[t.resource.type]}})],1),t._v(" "),n("div",[n("p",{staticClass:"font-bold"},[t._v(t._s(t.resource.title))]),t._v(" "),n("p",{staticClass:"text-sm"},[t._v(t._s(t.resource.description))])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TIcon:n(151).default})},441:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(434),l=n(433);function o(t){Object(l.a)(1,arguments);var e=Object(r.a)(t);return e.setHours(0,0,0,0),e}function c(t,e){Object(l.a)(2,arguments);var n=o(t),r=o(e);return n.getTime()===r.getTime()}},443:function(t,e,n){var content=n(448);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("7701acbc",content,!0,{sourceMap:!1})},444:function(t,e,n){"use strict";n.r(e);var r=n(501),l=n(452),o=n(35),c=Object(o.b)({props:{tlEvent:{type:Object,required:!0},isCurrentEvent:{type:Boolean},isPastEvent:{type:Boolean},showResources:{type:Boolean},showPermalink:{type:Boolean}},setup:function(t){var e=new Date(t.tlEvent.date),n=Object(o.a)((function(){return t.tlEvent.resources||t.tlEvent.forms||t.tlEvent.meetings}));return{format:r.a,isPast:l.a,eventDate:e,hasResources:n}}}),f=(n(447),n(15)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("WrapperContentBox",{attrs:{faded:t.isPastEvent,emphasized:t.isCurrentEvent}},[n("article",{staticClass:"relative pt-8 lg:pt-0"},[n("ClientOnly",[t.isCurrentEvent?n("Stamp",{attrs:{date:t.tlEvent.date}}):t._e()],1),t._v(" "),n("header",{staticClass:"flex flex-col items-center mb-8"},[n("p",{staticClass:"mb-4 text-4xl font-bold text-center",class:t.isCurrentEvent?"text-pink-600":"text-gray-400"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"calendar-day"}})],1),t._v(" "),t.showPermalink?[n("NuxtLink",{staticClass:"title-link",attrs:{to:"/event/"+t.tlEvent.slug}},[n("h2",{staticClass:"relative inline-block mb-1 text-2xl font-bold hover:underline"},[t._v("\n            "+t._s(t.tlEvent.name)+"\n            "),n("div",{staticClass:"absolute top-0 right-0 hidden pl-2 text-base text-blue-600 transform translate-x-full translate-y-1 icon"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"link"}})],1)])])]:[n("h2",{staticClass:"inline-block mb-1 text-2xl font-bold"},[t._v("\n          "+t._s(t.tlEvent.name)+"\n        ")])],t._v(" "),n("ClientOnly",[n("p",{staticClass:"text-lg text-center"},[t._v("\n          "+t._s(t.isPast(t.eventDate)?"Took":"Takes")+" place on\n          "+t._s(t.format(new Date(t.eventDate),"MMMM do, 'at' h:mm aaaa"))+"\n        ")])])],2),t._v(" "),n("main",[n("div",{staticClass:"pb-10 prose",domProps:{innerHTML:t._s(t.$md.render(t.tlEvent.description))}})]),t._v(" "),t.showResources&&t.hasResources?n("aside",{staticClass:"space-y-8"},[t.isCurrentEvent&&t.tlEvent.meetings&&t.tlEvent.meetings.length?n("EventListItemResourceList",{attrs:{resources:t.tlEvent.meetings,title:"Meeting Rooms"}}):t._e(),t._v(" "),t.tlEvent.forms&&t.tlEvent.forms.length?n("EventListItemResourceList",{attrs:{resources:t.tlEvent.forms,title:"Forms"}}):t._e(),t._v(" "),t.tlEvent.resources&&t.tlEvent.resources.length?n("EventListItemResourceList",{attrs:{resources:t.tlEvent.resources,title:"Resources"}}):t._e()],1):t.isCurrentEvent?n("aside",[n("p",{staticClass:"italic text-center text-gray-400"},[t._v("\n        Links and other resources will be posted soon!\n      ")])]):t._e()],1)])}),[],!1,null,"b9e7671a",null);e.default=component.exports;installComponents(component,{Stamp:n(445).default,TIcon:n(151).default,EventListItemResourceList:n(446).default,WrapperContentBox:n(436).default})},445:function(t,e,n){"use strict";n.r(e);var r=n(35),l=n(449),o=n(450),c=Object(r.b)({props:{date:{type:Date,default:new Date}},setup:function(t){var e=Object(r.a)((function(){return Object(l.a)(t.date)})),n=Object(r.a)((function(){return Object(o.a)(t.date)})),text=Object(r.a)((function(){return n.value?"today!":e.value?"next":"live!"})),c=Object(r.a)((function(){return e.value&&!n.value?"text-blue-600 bg-white":"text-white bg-blue-600"}));return{isFutureDate:e,isTodayDate:n,text:text,classNames:c}}}),f=n(15),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"absolute top-0 left-0 px-2 py-1 text-sm font-semibold tracking-wide uppercase border-2 border-blue-600 rounded-lg shadow",class:t.classNames},[n("span",[t._v(t._s(t.text))])])}),[],!1,null,null,null);e.default=component.exports},446:function(t,e,n){"use strict";n.r(e);var r=n(35),l=Object(r.b)({props:{resources:{type:Array,default:function(){return[]}},title:{type:String,default:""}},setup:function(){return{}}}),o=n(15),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",{staticClass:"title-with-lines"},[t._v(t._s(t.title))]),t._v(" "),n("ul",{staticClass:"link-grid"},t._l(t.resources,(function(t){return n("li",{key:t.title},[n("ResourceListItem",{attrs:{resource:t}})],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ResourceListItem:n(440).default})},447:function(t,e,n){"use strict";n(443)},448:function(t,e,n){var r=n(61)(!1);r.push([t.i,".title-link:hover .icon[data-v-b9e7671a]{display:inline-block}",""]),t.exports=r},449:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(434),l=n(433);function o(t){return Object(l.a)(1,arguments),Object(r.a)(t).getTime()>Date.now()}},450:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(441),l=n(433);function o(t){return Object(l.a)(1,arguments),Object(r.a)(t,Date.now())}},452:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(434),l=n(433);function o(t){return Object(l.a)(1,arguments),Object(r.a)(t).getTime()<Date.now()}},505:function(t,e,n){"use strict";n.r(e);var r=n(5),l=(n(36),n(35)),o=Object(l.b)({setup:function(){var t=Object(l.e)().$content,e=Object(l.g)(),n=Object(l.d)("");return Object(l.f)(Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t("/events").where({slug:e.value.params.slug}).limit(1).fetch();case 2:return r.abrupt("return",n.value=r.sent);case 3:case"end":return r.stop()}}),r)})))),{event:n}}}),c=n(15),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"space-y-4 lg:mx-auto lg:max-w-2xl"},[n("NuxtLink",{staticClass:"text-gray-500 hover:text-gray-700",attrs:{to:"/"}},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"chevron-left"}}),t._v(" Back to the\n      Timeline")],1),t._v(" "),t.$fetchState.pending?n("WrapperContentBox",[t._v("Loading...")]):n("EventListItem",{attrs:{"tl-event":t.event[0],"show-resources":""}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TIcon:n(151).default,WrapperContentBox:n(436).default,EventListItem:n(444).default})}}]);