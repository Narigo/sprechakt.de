import{S as y,i as b,s as L,e as m,k as E,w as A,K as q,c as d,d as o,m as P,x as B,b as g,J as p,g as u,y as K,q as C,o as D,B as H,t as v,a as _,h as $,E as k,L as I}from"../chunks/index-008f2778.js";import{P as J}from"../chunks/PageWithNavigation-00a35a48.js";import{a as w}from"../chunks/acts-0f529a87.js";import"../chunks/paths-b9644fda.js";function x(c,e,i){const t=c.slice();return t[0]=e[i],t}function S(c){let e,i=c[0].name+"",t;return{c(){e=m("li"),t=v(i)},l(l){e=d(l,"LI",{});var n=_(e);t=$(n,i),n.forEach(o)},m(l,n){u(l,e,n),p(e,t)},p:k,d(l){l&&o(e)}}}function M(c){let e,i,t,l,n=w,s=[];for(let a=0;a<n.length;a+=1)s[a]=S(x(c,n,a));return{c(){e=m("p"),i=v(`Beim Sprechakt in Landshut sind schon einige K\xFCnstler:innen aufgetreten. Auf dieser Seite werden
		wir diese vorstellen.`),t=E(),l=m("ul");for(let a=0;a<s.length;a+=1)s[a].c()},l(a){e=d(a,"P",{});var h=_(e);i=$(h,`Beim Sprechakt in Landshut sind schon einige K\xFCnstler:innen aufgetreten. Auf dieser Seite werden
		wir diese vorstellen.`),h.forEach(o),t=P(a),l=d(a,"UL",{});var r=_(l);for(let f=0;f<s.length;f+=1)s[f].l(r);r.forEach(o)},m(a,h){u(a,e,h),p(e,i),u(a,t,h),u(a,l,h);for(let r=0;r<s.length;r+=1)s[r].m(l,null)},p(a,h){if(h&0){n=w;let r;for(r=0;r<n.length;r+=1){const f=x(a,n,r);s[r]?s[r].p(f,h):(s[r]=S(f),s[r].c(),s[r].m(l,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=n.length}},d(a){a&&o(e),a&&o(t),a&&o(l),I(s,a)}}}function N(c){let e,i;return{c(){e=m("h1"),i=v("Poet:innen"),this.h()},l(t){e=d(t,"H1",{slot:!0});var l=_(e);i=$(l,"Poet:innen"),l.forEach(o),this.h()},h(){g(e,"slot","header")},m(t,l){u(t,e,l),p(e,i)},p:k,d(t){t&&o(e)}}}function T(c){let e,i,t,l;return t=new J({props:{$$slots:{header:[N],default:[M]},$$scope:{ctx:c}}}),{c(){e=m("meta"),i=E(),A(t.$$.fragment),this.h()},l(n){const s=q('[data-svelte="svelte-14byy7i"]',document.head);e=d(s,"META",{name:!0,content:!0}),s.forEach(o),i=P(n),B(t.$$.fragment,n),this.h()},h(){document.title="Sprechakt Poeten",g(e,"name","description"),g(e,"content","Poetinnen der vergangenen Slams, sofern sie aufgelistet werden m\xF6chten")},m(n,s){p(document.head,e),u(n,i,s),K(t,n,s),l=!0},p(n,[s]){const a={};s&8&&(a.$$scope={dirty:s,ctx:n}),t.$set(a)},i(n){l||(C(t.$$.fragment,n),l=!0)},o(n){D(t.$$.fragment,n),l=!1},d(n){o(e),n&&o(i),H(t,n)}}}const F=!0;class G extends y{constructor(e){super(),b(this,e,null,T,L,{})}}export{G as default,F as prerender};
