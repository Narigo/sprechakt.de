import{S,i as b,s as w,e as l,k as E,w as d,K as k,c as m,d as c,m as q,x as f,b as i,J as h,g as _,y as $,q as g,o as v,B as x,E as y,t as P,a as u,h as B}from"../../chunks/index-008f2778.js";import{b as D}from"../../chunks/blog-85f5a8ae.js";import{P as N}from"../../chunks/PageWithNavigation-00a35a48.js";import{B as A}from"../../chunks/BlogSection-565e154a.js";import"../../chunks/paths-b9644fda.js";function K(o){let e,s;return e=new A({props:{posts:o[0]}}),{c(){d(e.$$.fragment)},l(t){f(e.$$.fragment,t)},m(t,n){$(e,t,n),s=!0},p:y,i(t){s||(g(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){x(e,t)}}}function C(o){let e,s,t;return{c(){e=l("div"),s=l("h1"),t=P("Nachrichten rund um den Sprechakt"),this.h()},l(n){e=m(n,"DIV",{class:!0,slot:!0});var a=u(e);s=m(a,"H1",{class:!0});var r=u(s);t=B(r,"Nachrichten rund um den Sprechakt"),r.forEach(c),a.forEach(c),this.h()},h(){i(s,"class","svelte-1pi800"),i(e,"class","header svelte-1pi800"),i(e,"slot","header")},m(n,a){_(n,e,a),h(e,s),h(s,t)},p:y,d(n){n&&c(e)}}}function H(o){let e,s,t,n;return t=new N({props:{$$slots:{header:[C],default:[K]},$$scope:{ctx:o}}}),{c(){e=l("meta"),s=E(),d(t.$$.fragment),this.h()},l(a){const r=k('[data-svelte="svelte-13vqada"]',document.head);e=m(r,"META",{name:!0,content:!0}),r.forEach(c),s=q(a),f(t.$$.fragment,a),this.h()},h(){document.title="Sprechakt",i(e,"name","description"),i(e,"content","Der Landshuter Poetry Slam in der Alten Kaserne")},m(a,r){h(document.head,e),_(a,s,r),$(t,a,r),n=!0},p(a,[r]){const p={};r&2&&(p.$$scope={dirty:r,ctx:a}),t.$set(p)},i(a){n||(g(t.$$.fragment,a),n=!0)},o(a){v(t.$$.fragment,a),n=!1},d(a){c(e),a&&c(s),x(t,a)}}}function I(o){return[D]}class W extends S{constructor(e){super(),b(this,e,I,H,w,{})}}export{W as default};