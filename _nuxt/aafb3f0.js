(window.webpackJsonp=window.webpackJsonp||[]).push([[16,17,18,19,20],{480:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(481),c=n(476);function o(e,t){Object(c.a)(2,arguments);var n=Object(r.a)(e),o=Object(r.a)(t);return n.getTime()===o.getTime()}},481:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(477),c=n(476);function o(e){Object(c.a)(1,arguments);var t=Object(r.a)(e);return t.setHours(0,0,0,0),t}},489:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(477),c=n(476);function o(e){return Object(c.a)(1,arguments),Object(r.a)(e).getTime()>Date.now()}},491:function(e,t,n){var content=n(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("388c3865",content,!0,{sourceMap:!1})},492:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(480),c=n(476);function o(e){return Object(c.a)(1,arguments),Object(r.a)(e,Date.now())}},496:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(477),c=n(476);function o(e){return Object(c.a)(1,arguments),Object(r.a)(e).getTime()<Date.now()}},499:function(e,t,n){var content=n(513);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("e96499d0",content,!0,{sourceMap:!1})},502:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(477),c=n(482),o=n(476);function l(e,t){Object(o.a)(1,arguments);var n=t||{},l=n.locale,f=l&&l.options&&l.options.weekStartsOn,d=null==f?0:Object(c.a)(f),v=null==n.weekStartsOn?d:Object(c.a)(n.weekStartsOn);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=Object(r.a)(e),O=m.getDay(),w=(O<v?7:0)+O-v;return m.setDate(m.getDate()-w),m.setHours(0,0,0,0),m}},503:function(e,t,n){"use strict";n(491)},504:function(e,t,n){var r=n(59)(!1);r.push([e.i,".mt-05[data-v-45994358]{margin-top:.05rem}",""]),e.exports=r},506:function(e,t,n){"use strict";n.r(t);var r=n(9),c=n(489),o=n(519),l=n(492),f=n(559),d=Object(r.defineComponent)({props:{event:{type:Object,required:!0},weekStatus:{type:String,default:"current"}},setup:function(e){var t=Object(r.computed)((function(){return Object(c.a)(Object(o.a)(e.event.datetime.start))||Object(l.a)(Object(o.a)(e.event.datetime.start))}));return{format:f.a,isFutureEvent:t}}}),v=(n(503),n(15)),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex space-x-2"},[n("p",[n("TIcon",{staticClass:"inline-block text-xs mt-05",class:"current"===e.weekStatus&&e.isFutureEvent?"text-pink-600":"text-gray-300",attrs:{icon:"calendar-day"}})],1),e._v(" "),n("div",[n("p",{staticClass:"font-semibold",class:{"line-through":!e.isFutureEvent}},[n("NuxtLink",{staticClass:"regular-link",attrs:{to:"/event/"+e.event.id}},[e._v(e._s(e.event.title))])],1),e._v(" "),n("p",[e._v("\n      "+e._s(e.format(new Date(e.event.datetime.start),"MMM d"))+"\n    ")])])])}),[],!1,null,"45994358",null);t.default=component.exports;installComponents(component,{TIcon:n(160).default})},507:function(e,t,n){"use strict";n.r(t);var r=n(9),c=Object(r.defineComponent)({props:{weekStatus:{type:String,default:"current"},events:{type:Array,default:function(){}}},setup:function(){return{}}}),o=n(15),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"mt-1 text-xs",class:{"opacity-75":"past"===e.weekStatus}},e._l(e.events,(function(t){return n("li",{key:t.slug},[e._t("event",null,{event:t})],2)})),0)}),[],!1,null,null,null);t.default=component.exports},508:function(e,t,n){"use strict";n.r(t);var r=n(9),c=n(489),o=n(492),l=n(559),f=Object(r.defineComponent)({props:{milestone:{type:Object,required:!0}},setup:function(e){var t=Object(r.computed)((function(){return Object(c.a)(new Date(e.milestone.deadline))||Object(o.a)(new Date(e.milestone.deadline))}));return{format:l.a,isFutureMilestone:t}}}),d=n(15),component=Object(d.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex space-x-2"},[n("p",[n("TIcon",{staticClass:"inline-block text-xs mt-05",class:e.isFutureMilestone?"text-pink-600":"text-gray-300",attrs:{icon:"cutoff"===e.milestone.type?"exclamation-circle":"check-square"}})],1),e._v(" "),n("div",[n("p",{staticClass:"font-semibold",class:{"line-through":!e.isFutureMilestone}},[n("NuxtLink",{staticClass:"regular-link",attrs:{to:"/milestone/"+e.milestone.slug}},[e._v(e._s(e.milestone.title))])],1),e._v(" "),n("p",[e._v("Due "+e._s(e.format(new Date(e.milestone.deadline),"MMM d")))])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TIcon:n(160).default})},511:function(e,t,n){"use strict";function r(e){var t,n,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(c&&(c+=" "),c+=n);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,i=0,n="";i<arguments.length;)(e=arguments[i++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},512:function(e,t,n){"use strict";n(499)},513:function(e,t,n){var r=n(59)(!1);r.push([e.i,".mt-05[data-v-683883f6]{margin-top:.05rem}",""]),e.exports=r},515:function(e,t,n){"use strict";n.r(t);n(43);var r=n(526),c=n(496),o=n(559),l=n(502),f=n(527),d=n(511),v=n(9),m=Object(v.defineComponent)({props:{week:{type:Object,required:!0}},setup:function(e){var t=Object(v.computed)((function(){return new Date(e.week.week)})),n=Object(v.computed)((function(){return Object(r.a)(new Date,t.value,{weekStartsOn:1})?"current":Object(c.a)(t.value)?"past":"future"})),m=Object(v.computed)((function(){return"".concat(Object(o.a)(Object(l.a)(t.value,{weekStartsOn:1}),"MMM d")," → ").concat(Object(o.a)(Object(f.a)(t.value,{weekStartsOn:1}),"MMM d"))}));return{format:o.a,weekStatus:n,weekDates:m,clsx:d.a}}}),O=(n(512),n(15)),component=Object(O.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex items-start space-x-2"},[n("div",{directives:[{name:"tippy",rawName:"v-tippy",value:{theme:"tl"},expression:"{ theme: 'tl' }"}],staticClass:"relative flex items-center justify-center flex-none w-10 h-10 font-mono text-sm font-semibold border rounded-lg shadow",class:e.clsx({"text-pink-600":"current"===e.weekStatus,"bg-gray-100 text-gray-500":"past"===e.weekStatus,"bg-white":"future"===e.weekStatus}),attrs:{content:e.weekDates}},[e._v("\n    W"+e._s(e.week.number)+"\n    "),["current","past"].includes(e.weekStatus)?[n("TIcon",{staticClass:"absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1",class:"current"===e.weekStatus?"text-pink-600":"text-gray-700",attrs:{icon:"current"===e.weekStatus?"hourglass-half":"check-circle"}})]:e._e()],2),e._v(" "),n("div",[e.week.events.length||e.week.milestones.length?[e.week.events.length?n("TimelineWeekItems",{attrs:{events:e.week.events},scopedSlots:e._u([{key:"event",fn:function(t){var r=t.event;return[n("TimelineWeekEvent",{attrs:{event:r,"week-status":e.weekStatus}})]}}],null,!1,1570511934)}):e._e(),e._v(" "),e.week.milestones.length?n("TimelineWeekItems",{attrs:{events:e.week.milestones},scopedSlots:e._u([{key:"event",fn:function(e){var t=e.event;return[n("TimelineWeekMilestone",{attrs:{milestone:t}})]}}],null,!1,1244855301)}):e._e()]:n("p",{staticClass:"text-xs italic text-gray-400"},[e._v("—")])],2)])}),[],!1,null,"683883f6",null);t.default=component.exports;installComponents(component,{TIcon:n(160).default,TimelineWeekEvent:n(506).default,TimelineWeekItems:n(507).default,TimelineWeekMilestone:n(508).default})},519:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(482),c=n(476),o=36e5,l={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},f=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,d=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,v=/^([+-])(\d{2})(?::?(\d{2}))?$/;function m(e,t){Object(c.a)(1,arguments);var n=t||{},o=null==n.additionalDigits?2:Object(r.a)(n.additionalDigits);if(2!==o&&1!==o&&0!==o)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var l,f=O(e);if(f.date){var d=w(f.date,o);l=j(d.restDateString,d.year)}if(isNaN(l)||!l)return new Date(NaN);var v,m=l.getTime(),time=0;if(f.time&&(time=y(f.time),isNaN(time)||null===time))return new Date(NaN);if(!f.timezone){var k=new Date(m+time),D=new Date(0);return D.setFullYear(k.getUTCFullYear(),k.getUTCMonth(),k.getUTCDate()),D.setHours(k.getUTCHours(),k.getUTCMinutes(),k.getUTCSeconds(),k.getUTCMilliseconds()),D}return v=h(f.timezone),isNaN(v)?new Date(NaN):new Date(m+time+v)}function O(e){var t,n={},r=e.split(l.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1],l.timeZoneDelimiter.test(n.date)&&(n.date=e.split(l.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var c=l.timezone.exec(t);c?(n.time=t.replace(c[1],""),n.timezone=c[1]):n.time=t}return n}function w(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:null};var c=r[1]&&parseInt(r[1]),o=r[2]&&parseInt(r[2]);return{year:null==o?c:100*o,restDateString:e.slice((r[1]||r[2]).length)}}function j(e,t){if(null===t)return null;var n=e.match(f);if(!n)return null;var r=!!n[4],c=k(n[1]),o=k(n[2])-1,l=k(n[3]),d=k(n[4]),v=k(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,d,v)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var c=r.getUTCDay()||7,o=7*(t-1)+n+1-c;return r.setUTCDate(r.getUTCDate()+o),r}(t,d,v):new Date(NaN);var m=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(x[t]||(T(e)?29:28))}(t,o,l)&&function(e,t){return t>=1&&t<=(T(e)?366:365)}(t,c)?(m.setUTCFullYear(t,o,Math.max(c,l)),m):new Date(NaN)}function k(e){return e?parseInt(e):1}function y(e){var t=e.match(d);if(!t)return null;var n=D(t[1]),r=D(t[2]),c=D(t[3]);return function(e,t,n){if(24===e)return 0===t&&0===n;return n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,c)?n*o+6e4*r+1e3*c:NaN}function D(e){return e&&parseFloat(e.replace(",","."))||0}function h(e){if("Z"===e)return 0;var t=e.match(v);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),c=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,c)?n*(r*o+6e4*c):NaN}var x=[31,null,31,30,31,30,31,31,30,31,30,31];function T(e){return e%400==0||e%4==0&&e%100}},526:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(502),c=n(476);function o(e,t,n){Object(c.a)(2,arguments);var o=Object(r.a)(e,n),l=Object(r.a)(t,n);return o.getTime()===l.getTime()}},527:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(477),c=n(482),o=n(476);function l(e,t){Object(o.a)(1,arguments);var n=t||{},l=n.locale,f=l&&l.options&&l.options.weekStartsOn,d=null==f?0:Object(c.a)(f),v=null==n.weekStartsOn?d:Object(c.a)(n.weekStartsOn);if(!(v>=0&&v<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=Object(r.a)(e),O=m.getDay(),w=6+(O<v?-7:0)-(O-v);return m.setDate(m.getDate()+w),m.setHours(23,59,59,999),m}},529:function(e,t,n){"use strict";n.r(t);n(26),n(25),n(34),n(21),n(39);var r=n(13),c=(n(35),n(22),n(9)),o=n(481),l=n(539),f=n(556),d=n(526);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=Object(c.defineComponent)({props:{timeline:{type:Array,required:!0},events:{type:Array,default:function(){return[]}},milestones:{type:Array,default:function(){return[]}}},setup:function(e){return{compiledTimeline:Object(c.ref)(function(t,n){if(!t)return[];var r=n;return t.map((function(t){var n=Object(o.a)(new Date(t.dates.start)),c=Object(l.a)(new Date(t.dates.end)),v=Object(f.a)({start:n,end:c},{weekStartsOn:1}).map((function(t){var n=r,c=function(e,t){return t.filter((function(t){return Object(d.a)(new Date(e),new Date(t.datetime.start),{weekStartsOn:1})}))}(t,e.events),o=function(e,t){return t.filter((function(t){return Object(d.a)(new Date(e),new Date(t.deadline),{weekStartsOn:1})}))}(t,e.milestones);return r++,{number:n,events:c,milestones:o,week:t}}));return m(m({},t),{},{weeks:v})}))}(e.timeline,1))}}}),w=n(15),component=Object(w.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-full"},[n("div",{staticClass:"w-full p-8 mx-auto bg-white border shadow-lg rounded-xl"},[e.compiledTimeline.length?n("ul",{staticClass:"space-y-8"},e._l(e.compiledTimeline,(function(t){return n("li",{key:t.id},[n("h3",{staticClass:"\n            flex\n            items-center\n            justify-between\n            mb-4\n            text-xs\n            font-semibold\n            tracking-wide\n            uppercase\n          "},[n("span",[e._v(e._s(t.title))]),n("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right",theme:"tl"},expression:"{ placement: 'right', theme: 'tl' }"}],staticClass:"py-1 pl-2 text-gray-500",attrs:{content:t.description}},[n("TIcon",{attrs:{icon:"question-circle"}})],1)]),e._v(" "),n("div",{staticClass:"space-y-4"},e._l(t.weeks,(function(e){return n("TimelineWeek",{key:e.number,attrs:{week:e}})})),1)])})),0):e._e()])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TIcon:n(160).default,TimelineWeek:n(515).default})},539:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(477),c=n(476);function o(e){Object(c.a)(1,arguments);var t=Object(r.a)(e);return t.setHours(23,59,59,999),t}},556:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n(482),c=n(477),o=n(476);function l(e,t){Object(o.a)(2,arguments);var n=Object(c.a)(e),l=Object(r.a)(t);return isNaN(l)?new Date(NaN):l?(n.setDate(n.getDate()+l),n):n}function f(e,t){Object(o.a)(2,arguments);var n=Object(r.a)(t),c=7*n;return l(e,c)}var d=n(502);function v(e,t){Object(o.a)(1,arguments);var n=e||{},r=Object(c.a)(n.start),l=Object(c.a)(n.end),v=l.getTime();if(!(r.getTime()<=v))throw new RangeError("Invalid interval");var m=Object(d.a)(r,t),O=Object(d.a)(l,t);m.setHours(15),O.setHours(15),v=O.getTime();for(var w=[],j=m;j.getTime()<=v;)j.setHours(0),w.push(Object(c.a)(j)),(j=f(j,1)).setHours(15);return w}}}]);