import{S as H,i as I,s as C,k as d,a as E,v as D,H as F,l as _,h as o,c as K,w as M,n as x,F as v,b as m,x as N,f as T,t as U,y as j,q as W,m as p,r as b,K as z,A as q}from"../../../../chunks/index-961eddeb.js";import{c as G}from"../../../../chunks/singletons-79c77322.js";import{a as y}from"../../../../chunks/acts-95976f92.js";import{P as J}from"../../../../chunks/PageWithInfoNav-faa45f1b.js";import"../../../../chunks/stores-5534f339.js";import"../../../../chunks/PageWithNavigation-fc997ea3.js";function B(f,t,i){const n=f.slice();return n[0]=t[i],n}function L(f){let t,i,n=f[0].name+"",a;return{c(){t=d("li"),i=d("a"),a=W(n),this.h()},l(s){t=_(s,"LI",{});var l=p(t);i=_(l,"A",{href:!0});var u=p(i);a=b(u,n),u.forEach(o),l.forEach(o),this.h()},h(){x(i,"href",G+"/infos/acts/"+f[0].id)},m(s,l){m(s,t,l),v(t,i),v(i,a)},p:q,d(s){s&&o(t)}}}function O(f){let t,i,n,a,s,l,u,A,$,k,g=y,c=[];for(let e=0;e<g.length;e+=1)c[e]=L(B(f,g,e));return{c(){t=d("p"),i=W(`Beim SprechAkt in Landshut sind schon einige K\xFCnstler:innen aufgetreten. Auf dieser Seite werden
		wir diese vorstellen.`),n=E(),a=d("ul");for(let e=0;e<c.length;e+=1)c[e].c();s=E(),l=d("h2"),u=W("Wie funktioniert das hier?"),A=E(),$=d("p"),k=W(`Wie melde ich mich als K\xFCnstler:in an? Wann muss ich da sein? Was muss ich bei l\xE4ngerer Anreise
		beachten? Was erwartet mich? Bis wann muss ich mich anmelden?`)},l(e){t=_(e,"P",{});var h=p(t);i=b(h,`Beim SprechAkt in Landshut sind schon einige K\xFCnstler:innen aufgetreten. Auf dieser Seite werden
		wir diese vorstellen.`),h.forEach(o),n=K(e),a=_(e,"UL",{});var r=p(a);for(let S=0;S<c.length;S+=1)c[S].l(r);r.forEach(o),s=K(e),l=_(e,"H2",{});var w=p(l);u=b(w,"Wie funktioniert das hier?"),w.forEach(o),A=K(e),$=_(e,"P",{});var P=p($);k=b(P,`Wie melde ich mich als K\xFCnstler:in an? Wann muss ich da sein? Was muss ich bei l\xE4ngerer Anreise
		beachten? Was erwartet mich? Bis wann muss ich mich anmelden?`),P.forEach(o)},m(e,h){m(e,t,h),v(t,i),m(e,n,h),m(e,a,h);for(let r=0;r<c.length;r+=1)c[r].m(a,null);m(e,s,h),m(e,l,h),v(l,u),m(e,A,h),m(e,$,h),v($,k)},p(e,h){if(h&0){g=y;let r;for(r=0;r<g.length;r+=1){const w=B(e,g,r);c[r]?c[r].p(w,h):(c[r]=L(w),c[r].c(),c[r].m(a,null))}for(;r<c.length;r+=1)c[r].d(1);c.length=g.length}},d(e){e&&o(t),e&&o(n),e&&o(a),z(c,e),e&&o(s),e&&o(l),e&&o(A),e&&o($)}}}function Q(f){let t,i;return{c(){t=d("h1"),i=W("K\xFCnstler:innen"),this.h()},l(n){t=_(n,"H1",{slot:!0});var a=p(t);i=b(a,"K\xFCnstler:innen"),a.forEach(o),this.h()},h(){x(t,"slot","header")},m(n,a){m(n,t,a),v(t,i)},p:q,d(n){n&&o(t)}}}function R(f){let t,i,n,a;return n=new J({props:{$$slots:{header:[Q],default:[O]},$$scope:{ctx:f}}}),{c(){t=d("meta"),i=E(),D(n.$$.fragment),this.h()},l(s){const l=F('[data-svelte="svelte-ni3da"]',document.head);t=_(l,"META",{name:!0,content:!0}),l.forEach(o),i=K(s),M(n.$$.fragment,s),this.h()},h(){document.title="K\xFCnstler:innen",x(t,"name","description"),x(t,"content","K\xFCnstler:innen der vergangenen Slams, sofern sie aufgelistet werden m\xF6chten")},m(s,l){v(document.head,t),m(s,i,l),N(n,s,l),a=!0},p(s,[l]){const u={};l&8&&(u.$$scope={dirty:l,ctx:s}),n.$set(u)},i(s){a||(T(n.$$.fragment,s),a=!0)},o(s){U(n.$$.fragment,s),a=!1},d(s){o(t),s&&o(i),j(n,s)}}}class ne extends H{constructor(t){super(),I(this,t,null,R,C,{})}}export{ne as default};
