(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{456:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));r(30),r(19),r(33),r(20),r(37);var n=r(10),c=(r(32),r(29),r(107),r(35)),o=r(452),l=r(450),f=r(449),O=r(434),v=r(433);var j=r(441);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=function(e){var t=Object(c.a)((function(){return e.map((function(e){return w(w({},e),{},{date:new Date(e.date)})}))})),r=Object(c.a)((function(){return t.value.filter((function(e){var t=e.date;return Object(o.a)(t)&&!Object(l.a)(t)}))})),n=Object(c.a)((function(){return t.value.filter((function(e){var t=e.date;return Object(f.a)(t)||Object(l.a)(t)}))})),m=Object(c.a)((function(){var e=n.value.map((function(e){return e.date})),t=function(e,t){Object(v.a)(2,arguments);var r=Object(O.a)(e);if(isNaN(r))return new Date(NaN);var n,c,o=r.getTime();return(null==t?[]:"function"==typeof t.forEach?t:Array.prototype.slice.call(t)).forEach((function(e){var t=Object(O.a)(e);if(isNaN(t))return n=new Date(NaN),void(c=NaN);var r=Math.abs(o-t.getTime());(null==n||r<c)&&(n=t,c=r)})),n}(new Date,e);return n.value.find((function(e){var r=e.date;return Object(j.a)(r,t)}))}));return{events:t,pastEvents:r,currentEvent:m,futureEvents:n,isToday:l.a,isFuture:f.a,isPast:o.a,isSameDay:j.a}}},471:function(e,t,r){"use strict";r.r(t);r(30),r(19),r(33),r(20),r(37);var n=r(10),c=(r(32),r(29),r(35)),o=r(442),l=r(434),f=r(433);function O(e,t){Object(f.a)(2,arguments);var r=Object(l.a)(e),n=Object(o.a)(t);return isNaN(n)?new Date(NaN):n?(r.setDate(r.getDate()+n),r):r}function v(e,t){Object(f.a)(2,arguments);var r=Object(o.a)(t),n=7*r;return O(e,n)}var j=r(459);var m=r(499),w=r(456);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var D=Object(c.b)({props:{timeline:{type:Object,required:!0},events:{type:Array,default:function(){return[]}},milestones:{type:Array,default:function(){return[]}}},setup:function(e){var t=Object(w.a)(e.events).pastEvents;return{compiledTimeline:Object(c.d)(function(t){var r=t.timeline;if(!r)return[];var n=0;return r.map((function(t){var r=function(e,t){Object(f.a)(1,arguments);var r=e||{},n=Object(l.a)(r.start),c=Object(l.a)(r.end),o=c.getTime();if(!(n.getTime()<=o))throw new RangeError("Invalid interval");var O=Object(j.a)(n,t),m=Object(j.a)(c,t);O.setHours(15),m.setHours(15),o=m.getTime();for(var w=[],d=O;d.getTime()<=o;)d.setHours(0),w.push(Object(l.a)(d)),(d=v(d,1)).setHours(15);return w}({start:new Date(t.startDate),end:new Date(t.endDate)},{weekStartsOn:1}).map((function(t){var r=n,c=function(e,t){return t.filter((function(t){return Object(m.a)(new Date(e),new Date(t.date),{weekStartsOn:1})}))}(t,e.events),o=function(e,t){return t.filter((function(t){return Object(m.a)(new Date(e),new Date(t.deadline),{weekStartsOn:1})}))}(t,e.milestones);return n++,{number:r,events:c,milestones:o,week:t}}));return y(y({},t),{},{weeks:r})}))}(e.timeline)),pastEvents:t}}}),h=r(15),component=Object(h.a)(D,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"w-full",class:{"pt-8":e.pastEvents.length}},[r("div",{staticClass:"w-full p-8 mx-auto bg-white border shadow-lg rounded-xl"},[e.compiledTimeline.length?r("ul",{staticClass:"space-y-8"},e._l(e.compiledTimeline,(function(t){return r("li",{key:t.startDate},[r("h3",{staticClass:"flex items-center justify-between mb-4 text-xs font-semibold tracking-wide uppercase"},[r("span",[e._v(e._s(t.title))]),r("span",{directives:[{name:"tippy",rawName:"v-tippy",value:{placement:"right",theme:"tl"},expression:"{ placement: 'right', theme: 'tl' }"}],staticClass:"py-1 pl-2 text-gray-500",attrs:{content:t.description}},[r("TIcon",{attrs:{icon:"question-circle"}})],1)]),e._v(" "),r("div",{staticClass:"space-y-4"},e._l(t.weeks,(function(e){return r("TimelineWeek",{key:e.number,attrs:{week:e}})})),1)])})),0):e._e()])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TIcon:r(151).default,TimelineWeek:r(472).default})}}]);