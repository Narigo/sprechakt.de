import{S as K,i as C,s as G,e as E,b as p,t as m,d as M,f as _,h as c,G as N,j,g as B,v as h,w as v,x as b,y as k,k as g,q,l as $,m as w,r as A,F as y,A as F,a as H,c as L,n as f,u as R,K as P}from"../../../../chunks/index-9937773f.js";import{S as T}from"../../../../chunks/SvelteMarkdown-d5e8a0cd.js";import{p as U}from"../../../../chunks/stores-60e7bd68.js";import{g as V}from"../../../../chunks/index-66640e86.js";import{P as I}from"../../../../chunks/PageWithNavigation-cb3a5bf2.js";import"../../../../chunks/singletons-4e657cf1.js";function W(l){let e,r;return e=new I({props:{$$slots:{default:[D]},$$scope:{ctx:l}}}),{c(){h(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,a){b(e,t,a),r=!0},p(t,a){const n={};a&16&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function z(l){let e,r;return e=new I({props:{$$slots:{header:[O],default:[J]},$$scope:{ctx:l}}}),{c(){h(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,a){b(e,t,a),r=!0},p(t,a){const n={};a&17&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function D(l){let e,r;return{c(){e=g("p"),r=q("K\xFCnstler:in nicht gefunden!")},l(t){e=$(t,"P",{});var a=w(e);r=A(a,"K\xFCnstler:in nicht gefunden!"),a.forEach(c)},m(t,a){p(t,e,a),y(e,r)},p:F,d(t){t&&c(e)}}}function S(l){let e,r,t;return{c(){e=g("img"),this.h()},l(a){e=$(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){var a;P(e.src,r=(a=l[0].image)==null?void 0:a.url)||f(e,"src",r),f(e,"alt",t=l[0].name),f(e,"class","svelte-1mkdb2u")},m(a,n){p(a,e,n)},p(a,n){var s;n&1&&!P(e.src,r=(s=a[0].image)==null?void 0:s.url)&&f(e,"src",r),n&1&&t!==(t=a[0].name)&&f(e,"alt",t)},d(a){a&&c(e)}}}function J(l){let e,r,t,a,n=l[0].image&&S(l);return t=new T({props:{source:l[0].bio}}),{c(){e=g("article"),n&&n.c(),r=H(),h(t.$$.fragment)},l(s){e=$(s,"ARTICLE",{});var i=w(e);n&&n.l(i),r=L(i),v(t.$$.fragment,i),i.forEach(c)},m(s,i){p(s,e,i),n&&n.m(e,null),y(e,r),b(t,e,null),a=!0},p(s,i){s[0].image?n?n.p(s,i):(n=S(s),n.c(),n.m(e,r)):n&&(n.d(1),n=null);const o={};i&1&&(o.source=s[0].bio),t.$set(o)},i(s){a||(_(t.$$.fragment,s),a=!0)},o(s){m(t.$$.fragment,s),a=!1},d(s){s&&c(e),n&&n.d(),k(t)}}}function O(l){let e,r=l[0].name+"",t;return{c(){e=g("h1"),t=q(r),this.h()},l(a){e=$(a,"H1",{slot:!0,class:!0});var n=w(e);t=A(n,r),n.forEach(c),this.h()},h(){f(e,"slot","header"),f(e,"class","svelte-1mkdb2u")},m(a,n){p(a,e,n),y(e,t)},p(a,n){n&1&&r!==(r=a[0].name+"")&&R(t,r)},d(a){a&&c(e)}}}function Q(l){let e,r,t,a;const n=[z,W],s=[];function i(o,u){return o[0]?0:1}return e=i(l),r=s[e]=n[e](l),{c(){r.c(),t=E()},l(o){r.l(o),t=E()},m(o,u){s[e].m(o,u),p(o,t,u),a=!0},p(o,[u]){let d=e;e=i(o),e===d?s[e].p(o,u):(B(),m(s[d],1,1,()=>{s[d]=null}),M(),r=s[e],r?r.p(o,u):(r=s[e]=n[e](o),r.c()),_(r,1),r.m(t.parentNode,t))},i(o){a||(_(r),a=!0)},o(o){m(r),a=!1},d(o){s[e].d(o),o&&c(t)}}}function X(l,e,r){let t;N(l,U,i=>r(2,t=i));let a,n;s(),j(s);function s(){a=t.params.id,r(0,n=V(a))}return[n]}class re extends K{constructor(e){super(),C(this,e,X,Q,G,{})}}export{re as default};