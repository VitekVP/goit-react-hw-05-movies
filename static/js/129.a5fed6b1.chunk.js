"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[129],{8743:function(n,e,t){t.d(e,{u:function(){return o}});var r,i=t(168),c=t(8789).ZP.p(r||(r=(0,i.Z)(["\n  font-size: 20px;\n\n  text-align: center;\n"]))),a=t(184),o=function(n){var e=n.message;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(c,{children:e})})}},129:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,i,c,a,o,s,u=t(9439),p=t(7689),l=t(2791),d=t(269),x=t(3498),f=t(9519),h=t(168),v=t(1087),g=t(8789),m=g.ZP.button(r||(r=(0,h.Z)(["\n  width: 120px;\n  height: 30px;\n  padding: 0;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-weight: 700;\n  font-size: 12px;\n\n  box-shadow: 0px 0px 6px 0px #000000bf;\n  border: none;\n  border-radius: 4px;\n\n  cursor: pointer;\n\n  transition: background-color 300ms linear, color 300ms linear;\n\n  &:hover {\n    background-color: #959292;\n    color: white;\n  }\n"]))),b=g.ZP.div(i||(i=(0,h.Z)(["\n  padding: 15px 10px;\n  margin: 20px 0;\n\n  display: flex;\n  gap: 20px;\n\n  border-radius: 4px;\n  box-shadow: 0px 0px 6px 0px #000000bf;\n"]))),j=g.ZP.div(c||(c=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),w=g.ZP.h3(a||(a=(0,h.Z)(["\n  margin-bottom: 20px;\n\n  text-align: center;\n  font-size: 24px;\n"]))),Z=g.ZP.ul(o||(o=(0,h.Z)(["\n  margin-bottom: 20px;\n\n  display: flex;\n  justify-content: center;\n  gap: 30px;\n"]))),k=(0,g.ZP)(v.OL)(s||(s=(0,h.Z)(["\n  padding: 2px 6px;\n  font-size: 16px;\n  font-weight: 700;\n  color: black;\n  text-decoration: none;\n\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 300ms linear, color 300ms linear;\n\n  &.active {\n    color: white;\n    background-color: grey;\n  }\n"]))),y=t(184),_=function(n){var e,t,r=n.genres,i=n.alt,c=n.overview,a=n.poster,o=n.date,s=n.title,u=n.score,d=(0,p.TH)(),h=(0,p.s0)(),v=(0,l.useRef)(null!==(e=null===(t=d.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,y.jsxs)("div",{children:[(0,y.jsx)(m,{type:"button",onClick:function(){return h(v.current)},children:"Go Back"}),(0,y.jsxs)(b,{children:[(0,y.jsx)("img",{src:a?"https://image.tmdb.org/t/p/w500".concat(a):x,alt:i,width:"300",height:"550"}),(0,y.jsxs)(j,{children:[(0,y.jsx)("h2",{children:s}),(0,y.jsx)("p",{children:o}),(0,y.jsxs)("p",{children:["User Score: ",u?10*Math.round(u):"...","%"]}),(0,y.jsx)("b",{children:"Overviev:"}),(0,y.jsx)("p",{children:c||"..."}),(0,y.jsx)("b",{children:"Genres:"}),(0,y.jsx)("p",{children:r?r.map((function(n){return n.name})).join(" "):"..."})]})]}),(0,y.jsx)(w,{children:"Additional information"}),(0,y.jsxs)(Z,{children:[(0,y.jsx)("li",{children:(0,y.jsx)(k,{to:"cast",children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(k,{to:"reviews",children:"Reviews"})})]}),(0,y.jsx)(l.Suspense,{fallback:(0,y.jsx)(f.a,{}),children:(0,y.jsx)(p.j3,{})})]})},P=t(8743),S=function(){var n=(0,p.UO)().movieId,e=(0,l.useState)({}),t=(0,u.Z)(e,2),r=t[0],i=t[1],c=(0,l.useState)(null),a=(0,u.Z)(c,2),o=a[0],s=a[1],x=(0,l.useState)(!1),h=(0,u.Z)(x,2),v=h[0],g=h[1];(0,l.useEffect)((function(){g(!0),(0,d.Pg)(n).then((function(n){i(n.data)})).catch((function(n){return s(n.toJSON())})).finally((function(){return g(!1)}))}),[n]);var m=r.genres,b=r.original_title,j=r.overview,w=r.poster_path,Z=r.release_date,k=r.title,S=r.vote_average;return(0,y.jsxs)("div",{children:[v&&(0,y.jsx)(f.a,{}),o&&(0,y.jsx)(P.u,{message:o}),r&&(0,y.jsx)(_,{genres:m,alt:b,overview:j,poster:w,title:k,date:Z,score:S})]})}},269:function(n,e,t){t.d(e,{Df:function(){return u},Hu:function(){return d},Pg:function(){return p},S:function(){return l},Xo:function(){return x}});var r=t(5861),i=t(4687),c=t.n(i),a=t(1243),o="https://api.themoviedb.org/3",s="45d68bd879a3e756f01bd66285287115",u=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(o,"/movie/").concat(e,"?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(o,"/movie/").concat(e,"/credits?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(o,"/search/movie?api_key=").concat(s,"&query=").concat(e,"&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},3498:function(n,e,t){n.exports=t.p+"static/media/image.b59890b7b479e863e07c.jpg"}}]);
//# sourceMappingURL=129.a5fed6b1.chunk.js.map