"use strict";(self.webpackChunkreact_phonebook=self.webpackChunkreact_phonebook||[]).push([[736],{2736:function(n,r,t){t.r(r);var e=t(9439),a=t(171),u=t(2791),c=t(7689),s=t(184);r.default=function(){var n=(0,u.useState)([]),r=(0,e.Z)(n,2),t=r[0],i=r[1],o=(0,c.UO)().movieId;return(0,u.useEffect)((function(){(0,a.DF)(o).then((function(n){return i(n.results)}))}),[o,i]),(0,s.jsx)(s.Fragment,{children:0!==t.length?t.map((function(n){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("h2",{children:["Author: ",n.author]}),(0,s.jsx)("p",{children:n.content})]})})):(0,s.jsx)("p",{children:"There are no reviews"})})}},171:function(n,r,t){t.d(r,{DF:function(){return h},J0:function(){return d},KS:function(){return i},VQ:function(){return p},WK:function(){return m}});var e=t(5861),a=t(4687),u=t.n(a),c=t(1243),s="9f3449ca8495a13b6d35e887839f0061";function i(){return o.apply(this,arguments)}function o(){return(o=(0,e.Z)(u().mark((function n(){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("trending/all/day",{params:{api_key:s}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(r),{params:{api_key:s}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(r,"/reviews"),{params:{api_key:s}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(r,"/credits"),{params:{api_key:s}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return y.apply(this,arguments)}function y(){return(y=(0,e.Z)(u().mark((function n(r){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("search/movie",{params:{api_key:s,query:r,language:"en-US",page:1}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=736.adc8badb.chunk.js.map