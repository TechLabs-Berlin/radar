(window.webpackJsonp=window.webpackJsonp||[]).push([[27,13,15,22],{436:function(t,e,n){var content=n(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("1eb89c8e",content,!0,{sourceMap:!1})},438:function(t,e,n){"use strict";n.r(e);var l=n(35),o=Object(l.b)({props:{faded:{type:Boolean},emphasized:{type:Boolean}},setup:function(){}}),r=(n(439),n(15)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"p-4 border lg:p-8 rounded-xl",class:{"stripe-bg shadow-lg":t.faded,"bg-white shadow-xl":t.emphasized,"shadow-lg bg-white":!t.faded&&!t.emphasized}},[t._t("default")],2)}),[],!1,null,"44197f55",null);e.default=component.exports},439:function(t,e,n){"use strict";n(436)},440:function(t,e,n){var l=n(61)(!1);l.push([t.i,".stripe-bg[data-v-44197f55]{background-image:linear-gradient(45deg,#f5f5f5 25%,#fafafa 0,#fafafa 50%,#fafafa 0,#f5f5f5 75%,#fafafa 0,#fafafa);background-size:80px 80px}",""]),t.exports=l},444:function(t,e,n){"use strict";n.r(e);var l=n(35),o=Object(l.b)({props:{resource:{type:Object,required:!0}},setup:function(){return{icons:{meeting:"video",form:"comment-dots",slides:"images",video:"youtube",link:"link",tool:"tools",game:"dice"}}}}),r=n(15),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"flex items-start w-full h-full px-4 py-3 text-left transition-all duration-100 ease-in-out border-2 rounded-lg hover:border-blue-600 hover:shadow-lg hover:text-blue-600",attrs:{href:t.resource.url,target:"blank"}},[n("div",{staticClass:"flex space-x-4"},[n("p",{staticClass:"flex-none text-xl"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:t.icons[t.resource.type]}})],1),t._v(" "),n("div",[n("p",{staticClass:"font-bold"},[t._v(t._s(t.resource.title))]),t._v(" "),n("p",{staticClass:"text-sm"},[t._v(t._s(t.resource.description))])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TIcon:n(151).default})},459:function(t,e,n){"use strict";n.r(e);var l=n(35),o=n(509),r=Object(l.b)({props:{milestone:{type:Object,required:!0},alwaysShowTasks:{type:Boolean}},setup:function(){var t=Object(l.d)(!1);return{showTasks:t,toggleTasks:function(){return t.value=!t.value},format:o.a}}}),c=n(15),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("WrapperContentBox",[n("article",{staticClass:"relative pt-8 lg:pt-0"},[n("header",{staticClass:"flex flex-col items-center mb-8"},[n("p",{staticClass:"mb-4 text-4xl font-bold text-center text-pink-600"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"cutoff"===t.milestone.type?"exclamation-circle":"check-square"}})],1),t._v(" "),n("NuxtLink",{staticClass:"title-link",attrs:{to:"/milestone/"+t.milestone.slug}},[n("h2",{staticClass:"relative inline-block mb-1 text-2xl font-bold hover:underline"},[t._v("\n          "+t._s(t.milestone.title)+"\n          "),n("div",{staticClass:"absolute top-0 right-0 hidden pl-2 text-base text-blue-600 transform translate-x-full translate-y-1 icon"},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"link"}})],1)])]),t._v(" "),n("ClientOnly",[n("p",{staticClass:"text-lg text-center"},[t._v("\n          Due\n          "+t._s(t.format(new Date(t.milestone.deadline),"MMMM do, 'at' h:mm aaaa"))+"\n        ")])])],1),t._v(" "),n("main",{staticClass:"space-y-8"},[n("div",{staticClass:"prose",domProps:{innerHTML:t._s(t.$md.render(t.milestone.description))}}),t._v(" "),t.milestone.todos.length?[t.alwaysShowTasks?t._e():n("p",{staticClass:"text-center"},[t.showTasks?n("button",{staticClass:"px-2 py-1 text-sm font-semibold tracking-wide uppercase border-2 rounded-lg",on:{click:t.toggleTasks}},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"eye-slash"}}),t._v(" Hide tasks\n          ")],1):n("button",{staticClass:"px-2 py-1 text-sm font-semibold tracking-wide uppercase border-2 rounded-lg",on:{click:t.toggleTasks}},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"chevron-down"}}),t._v(" Show tasks\n          ")],1)]),t._v(" "),t.showTasks||t.alwaysShowTasks?n("ul",{staticClass:"space-y-8 text-lg"},t._l(t.milestone.todos,(function(e){return n("li",{key:e.name,staticClass:"flex space-x-4"},[n("div",[n("TIcon",{staticClass:"text-2xl text-blue-600",attrs:{icon:"check-square"}})],1),t._v(" "),n("div",[n("p",[t._v(t._s(e.name))]),t._v(" "),e.resources?n("ul",{staticClass:"mt-4 link-grid"},t._l(e.resources,(function(t){return n("li",{key:t.title},[n("ResourceListItem",{attrs:{resource:t}})],1)})),0):t._e()])])})),0):t._e()]:t._e()],2)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TIcon:n(151).default,ResourceListItem:n(444).default,WrapperContentBox:n(438).default})},478:function(t,e,n){var content=n(491);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("67ea8cf9",content,!0,{sourceMap:!1})},490:function(t,e,n){"use strict";n(478)},491:function(t,e,n){var l=n(61)(!1);l.push([t.i,".link-grid[data-v-d182eee8]{display:grid;grid-gap:1rem;grid-template-columns:1fr 1fr;grid-auto-rows:-webkit-max-content;grid-auto-rows:max-content}",""]),t.exports=l},514:function(t,e,n){"use strict";n.r(e);var l=n(5),o=(n(36),n(35)),r=n(459),c=Object(o.b)({components:{MilestoneListItem:r.default},setup:function(){var t=Object(o.e)().$content,e=Object(o.g)(),n=Object(o.d)({});return Object(o.f)(Object(l.a)(regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,t("/milestones").where({slug:e.value.params.slug}).limit(1).fetch();case 2:return l.abrupt("return",n.value=l.sent);case 3:case"end":return l.stop()}}),l)})))),{milestone:n}}}),d=(n(490),n(15)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"space-y-4 lg:mx-auto lg:max-w-2xl"},[n("NuxtLink",{staticClass:"text-gray-500 hover:text-gray-700",attrs:{to:"/"}},[n("TIcon",{staticClass:"inline-block",attrs:{icon:"chevron-left"}}),t._v(" Back to the\n      Timeline")],1),t._v(" "),t.$fetchState.pending?n("WrapperContentBox",[t._v("Loading...")]):n("MilestoneListItem",{attrs:{milestone:t.milestone[0],"always-show-tasks":""}})],1)])}),[],!1,null,"d182eee8",null);e.default=component.exports;installComponents(component,{TIcon:n(151).default,WrapperContentBox:n(438).default,MilestoneListItem:n(459).default})}}]);