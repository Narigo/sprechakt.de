import{S as I,i as L,s as k,v as B,w as D,x as G,f as v,t as d,y as J,G as U,B as b,C as y,D as P,E as W,k as m,q as N,a as j,l as h,m as p,r as F,h as _,c as z,n as i,J as V,b as H,F as c,A as K}from"./index-961eddeb.js";import{c as g}from"./singletons-523790e5.js";import{p as M}from"./stores-ea2a2e8b.js";import{P as O}from"./PageWithNavigation-db59abc0.js";const Q=o=>({}),q=o=>({slot:"header"}),R=o=>({}),C=o=>({slot:"footer"});function T(o){let s;const a=o[1].default,e=b(a,o,o[2],null);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,n){e&&e.m(t,n),s=!0},p(t,n){e&&e.p&&(!s||n&4)&&y(e,a,t,t[2],s?W(a,t[2],n,null):P(t[2]),null)},i(t){s||(v(e,t),s=!0)},o(t){d(e,t),s=!1},d(t){e&&e.d(t)}}}function X(o){let s,a,e,t,n,l,r,$;return{c(){s=m("nav"),a=m("li"),e=m("a"),t=N("Fr\xFChere Veranstaltungen"),n=j(),l=m("li"),r=m("a"),$=N("Was ist ein Poetry Slam?"),this.h()},l(u){s=h(u,"NAV",{slot:!0,class:!0});var f=p(s);a=h(f,"LI",{class:!0});var E=p(a);e=h(E,"A",{href:!0,class:!0});var S=p(e);t=F(S,"Fr\xFChere Veranstaltungen"),S.forEach(_),E.forEach(_),n=z(f),l=h(f,"LI",{class:!0});var w=p(l);r=h(w,"A",{href:!0,class:!0});var A=p(r);$=F(A,"Was ist ein Poetry Slam?"),A.forEach(_),w.forEach(_),f.forEach(_),this.h()},h(){i(e,"href",`${g}/slams/events`),i(e,"class","svelte-161tovn"),V(e,"active",o[0].startsWith(`${g}/slams/events`)),i(a,"class","svelte-161tovn"),i(r,"href",`${g}/slams/about`),i(r,"class","svelte-161tovn"),V(r,"active",o[0].startsWith(`${g}/slams/about`)),i(l,"class","svelte-161tovn"),i(s,"slot","navigation"),i(s,"class","svelte-161tovn")},m(u,f){H(u,s,f),c(s,a),c(a,e),c(e,t),c(s,n),c(s,l),c(l,r),c(r,$)},p:K,d(u){u&&_(s)}}}function Y(o){let s;const a=o[1].header,e=b(a,o,o[2],q);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,n){e&&e.m(t,n),s=!0},p(t,n){e&&e.p&&(!s||n&4)&&y(e,a,t,t[2],s?W(a,t[2],n,Q):P(t[2]),q)},i(t){s||(v(e,t),s=!0)},o(t){d(e,t),s=!1},d(t){e&&e.d(t)}}}function Z(o){let s;const a=o[1].footer,e=b(a,o,o[2],C);return{c(){e&&e.c()},l(t){e&&e.l(t)},m(t,n){e&&e.m(t,n),s=!0},p(t,n){e&&e.p&&(!s||n&4)&&y(e,a,t,t[2],s?W(a,t[2],n,R):P(t[2]),C)},i(t){s||(v(e,t),s=!0)},o(t){d(e,t),s=!1},d(t){e&&e.d(t)}}}function x(o){let s,a;return s=new O({props:{$$slots:{footer:[Z],header:[Y],navigation:[X],default:[T]},$$scope:{ctx:o}}}),{c(){B(s.$$.fragment)},l(e){D(s.$$.fragment,e)},m(e,t){G(s,e,t),a=!0},p(e,[t]){const n={};t&4&&(n.$$scope={dirty:t,ctx:e}),s.$set(n)},i(e){a||(v(s.$$.fragment,e),a=!0)},o(e){d(s.$$.fragment,e),a=!1},d(e){J(s,e)}}}function ee(o,s,a){let e;U(o,M,r=>a(3,e=r));let{$$slots:t={},$$scope:n}=s;const l=e.url.pathname;return o.$$set=r=>{"$$scope"in r&&a(2,n=r.$$scope)},[l,t,n]}class ne extends I{constructor(s){super(),L(this,s,ee,x,k,{})}}export{ne as P};
