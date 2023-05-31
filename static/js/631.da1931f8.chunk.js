"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[631],{8743:function(n,t,e){e.d(t,{u:function(){return c}});var r,i=e(168),a=e(8789).ZP.p(r||(r=(0,i.Z)(["\n  font-size: 20px;\n\n  text-align: center;\n"]))),o=e(184),c=function(n){var t=n.message;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a,{children:t})})}},631:function(n,t,e){e.r(t),e.d(t,{default:function(){return F}});var r,i,a,o,c,u,s,p=e(9439),f=e(1087),l=e(2791),d=e(9e3),x=e(168),h=e(8789),m=h.ZP.form(r||(r=(0,x.Z)(["\n  width: 100%;\n  max-width: 600px;\n  height: 48px;\n\n  display: flex;\n  gap: 2px;\n  align-items: center;\n\n  border-radius: 3px;\n  overflow: hidden;\n"]))),g=h.ZP.input(i||(i=(0,x.Z)(["\n  padding-left: 4px;\n  padding-right: 4px;\n\n  width: 550px;\n  height: 42px;\n\n  display: inline-block;\n\n  font: inherit;\n  font-size: 18px;\n\n  border: 2px solid grey;\n  border-radius: 4px;\n  outline: none;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n\n  &:focus {\n    border: 2px solid green;\n    outline: none;\n    box-shadow: 0px 0px 10px 1px rgba(44, 221, 118, 0.65);\n  }\n"]))),v=h.ZP.button(a||(a=(0,x.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n\n  border: 0;\n  opacity: 0.6;\n\n  transition: opacity 300ms linear;\n  cursor: pointer;\n\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),b=e(184),Z=function(n){var t,e=n.onSubmit,r=(0,f.lr)(),i=(0,p.Z)(r,1)[0],a=(0,l.useState)(null!==(t=i.get("query"))&&void 0!==t?t:""),o=(0,p.Z)(a,2),c=o[0],u=o[1];return(0,b.jsxs)(m,{onSubmit:function(n){n.preventDefault(),""!==c.trim()?e(c):alert("please enter a request")},children:[(0,b.jsx)(g,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",value:c,onChange:function(n){u(n.target.value.toLowerCase())}}),(0,b.jsx)(v,{type:"submit",children:(0,b.jsx)(d.Vph,{style:{width:30,height:30}})})]})},w=e(7689),y=e(3498),j=h.ZP.ul(o||(o=(0,x.Z)(["\n  margin: 20px 0;\n"]))),k=h.ZP.li(c||(c=(0,x.Z)(["\n  padding: 2px;\n\n  box-shadow: 0px 0px 3px 0px #000000bf;\n  border-radius: 4px;\n\n  transition: transform 300ms linear;\n\n  &:not(:last-child) {\n    margin-bottom: 6px;\n  }\n\n  &:hover {\n    transform: scale(1.02);\n  }\n"]))),_=h.ZP.div(u||(u=(0,x.Z)(["\n  /* width: 60px;\n  height: 80px;\n\n  object-fit: contain; */\n"]))),S=(0,h.ZP)(f.rU)(s||(s=(0,x.Z)(["\n  display: flex;\n  gap: 20px;\n  align-items: center;\n\n  font-size: 18px;\n  font-weight: 500;\n  color: inherit;\n  text-decoration: none;\n"]))),P=function(n){var t=n.movies,e=(0,w.TH)();return(0,b.jsx)(j,{children:t.map((function(n){var t=n.id,r=n.title,i=n.poster_path;return(0,b.jsx)(k,{children:(0,b.jsxs)(S,{to:"".concat(t),state:{from:e},children:[(0,b.jsx)(_,{children:(0,b.jsx)("img",{src:i?"https://image.tmdb.org/t/p/w500".concat(i):y,alt:r,width:"60",height:"80"})}),r]})},t)}))})},q=e(269),C=e(8743),z=e(9519),F=function(){var n,t=(0,f.lr)(),e=(0,p.Z)(t,2),r=e[0],i=e[1],a=(0,l.useState)([]),o=(0,p.Z)(a,2),c=o[0],u=o[1],s=(0,l.useState)(null),d=(0,p.Z)(s,2),x=d[0],h=d[1],m=(0,l.useState)(!1),g=(0,p.Z)(m,2),v=g[0],w=g[1],y=null!==(n=r.get("query"))&&void 0!==n?n:"";return(0,l.useEffect)((function(){""!==y&&(w(!0),(0,q.Xo)(y).then((function(n){u(n.data.results)})).catch((function(n){return h(n.toJSON())})).finally(w(!1)))}),[y]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(Z,{onSubmit:function(n){i({query:n})}}),v&&(0,b.jsx)(z.a,{}),x&&(0,b.jsx)(C.u,{message:x}),c&&(0,b.jsx)(P,{movies:c})]})}},269:function(n,t,e){e.d(t,{Df:function(){return s},Hu:function(){return l},Pg:function(){return p},S:function(){return f},Xo:function(){return d}});var r=e(5861),i=e(4687),a=e.n(i),o=e(1243),c="https://api.themoviedb.org/3",u="45d68bd879a3e756f01bd66285287115",s=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/trending/movie/day?api_key=").concat(u));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/movie/").concat(t,"?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/movie/").concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/movie/").concat(t,"/reviews?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(c,"/search/movie?api_key=").concat(u,"&query=").concat(t,"&include_adult=false"));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},3498:function(n,t,e){n.exports=e.p+"static/media/image.b59890b7b479e863e07c.jpg"}}]);
//# sourceMappingURL=631.da1931f8.chunk.js.map