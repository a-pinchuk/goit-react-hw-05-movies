"use strict";(self.webpackChunkreact_phonebook=self.webpackChunkreact_phonebook||[]).push([[917],{3874:function(n,e,t){var r,a=t(168),i=t(1087),s=(0,t(7691).default)(i.OL)(r||(r=(0,a.Z)(["\n  padding: 8px 16px;\n  border-radius: 4px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n"])));e.Z=s},2917:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r,a,i=t(4281),s=t(3874),u=t(9439),c=t(171),o=t(2791),p=t(7689),d=function(){var n=(0,o.useState)(),e=(0,u.Z)(n,2),t=e[0],r=e[1],a=(0,p.UO)().movieId;return(0,o.useEffect)((function(){(0,c.VQ)(a).then(r)}),[a,r]),t},l=t(168),f=t(7691),h=f.default.div(r||(r=(0,l.Z)(["\n  display: flex;\n  margin-top: 20px;\n"]))),v=f.default.img(a||(a=(0,l.Z)(["\n  display: block;\n  margin-right: 25px;\n"]))),x=t(184),m=function(){var n=d(),e=(0,p.TH)(),t=(0,p.s0)();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i.Z,{variant:"outlined",onClick:function(){var n,r;t(null!==(n=null===e||void 0===e||null===(r=e.state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/")},children:"Go back"}),n&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(h,{children:[(0,x.jsx)(v,{src:"https://image.tmdb.org/t/p/w500/"+n.poster_path,alt:"",height:"450px"}),(0,x.jsxs)("div",{children:[(0,x.jsx)("h2",{children:n.title}),(0,x.jsxs)("p",{children:["User Score: ",n.vote_average.toFixed(1)]}),(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)("p",{children:n.overview}),(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("p",{children:n.genres.map((function(n){return n.name})).join(" ")})]})]}),(0,x.jsx)("p",{children:"Additional information"}),(0,x.jsx)(s.Z,{to:"cast",state:e.state,children:"Cast"}),(0,x.jsx)(s.Z,{to:"reviews",state:e.state,children:"Reviews"}),(0,x.jsx)(p.j3,{})]})]})}},171:function(n,e,t){t.d(e,{DF:function(){return l},J0:function(){return h},KS:function(){return c},VQ:function(){return p},WK:function(){return x}});var r=t(5861),a=t(4687),i=t.n(a),s=t(1243),u="9f3449ca8495a13b6d35e887839f0061";function c(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("trending/all/day",{params:{api_key:u}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("movie/".concat(e),{params:{api_key:u}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("movie/".concat(e,"/reviews"),{params:{api_key:u}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("movie/".concat(e,"/credits"),{params:{api_key:u}});case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,s.Z)("search/movie",{params:{api_key:u,query:e,language:"en-US",page:1}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3/"}}]);
//# sourceMappingURL=917.1ad2ee0a.chunk.js.map