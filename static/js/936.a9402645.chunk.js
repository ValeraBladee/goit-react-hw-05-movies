"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{1687:function(t,n,e){e.d(n,{Ht:function(){return p},JN:function(){return o},Jh:function(){return h},w7:function(){return f},yO:function(){return v}});var r=e(5861),a=e(7757),c=e.n(a),u=e(5294),i="https://api.themoviedb.org",s="60734cb7239d2e1b26d8feba8040402e",o=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/3/trending/movie/day?api_key=").concat(s));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/3/search/movie?api_key=").concat(s,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/3/movie/").concat(n,"?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/3/movie/").concat(n,"/credits?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(i,"/3/movie/").concat(n,"/reviews?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},4011:function(t,n,e){e.d(n,{Z:function(){return i}});var r=e(7689),a=e(1087),c="MoviesListItems_link__kD6ZF",u=e(184),i=function(t){var n=t.movies,e=(0,r.TH)();return(0,u.jsx)(u.Fragment,{children:n.map((function(t){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/".concat(t.id),state:{from:e},className:c,children:t.title})},t.id)}))})}},4936:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(5861),a=e(9439),c=e(7757),u=e.n(c),i=e(2791),s=e(8881),o=e(7689),p=e(1687),f=e(4011),v="Home_list__aopnc",h=e(184),d=function(){var t=(0,i.useState)([]),n=(0,a.Z)(t,2),e=n[0],c=n[1],d=(0,i.useState)(!1),l=(0,a.Z)(d,2),m=l[0],w=l[1],x=(0,i.useState)(!1),b=(0,a.Z)(x,2),k=b[0],_=b[1];return(0,i.useEffect)((function(){function t(){return(t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(!0),_(!1),t.prev=2,t.next=5,(0,p.JN)();case 5:n=t.sent,c(n.results),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(2),_(!0);case 12:return t.prev=12,w(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[2,9,12,15]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Trending today"}),m&&(0,h.jsx)(s.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]}),(0,h.jsx)("ul",{className:v,children:0!==e.length&&(0,h.jsx)(f.Z,{movies:e})}),k&&(0,h.jsx)("span",{children:"Something went wrong!"}),(0,h.jsx)(o.j3,{})]})}}}]);
//# sourceMappingURL=936.a9402645.chunk.js.map