import{S as j,i as C,s as G,e as E,b as p,t as m,d as K,f as _,h as c,G as L,j as M,g as N,v as h,w as v,x as b,y as k,k as $,q as S,l as g,m as w,r as q,F as y,A as z,a as B,c as F,n as u,u as H,L as I}from"../../../../chunks/index-cdc6a83d.js";import{S as R}from"../../../../chunks/SvelteMarkdown-f5eada1d.js";import{p as T}from"../../../../chunks/stores-e727437b.js";import{g as U}from"../../../../chunks/index-17612b3d.js";import{P as A}from"../../../../chunks/PageWithInfoNav-ddb0661f.js";import"../../../../chunks/singletons-6187208d.js";import"../../../../chunks/acts-8d5b8edf.js";import"../../../../chunks/PageWithNavigation-0f03c326.js";function V(l){let e,r;return e=new A({props:{$$slots:{default:[D]},$$scope:{ctx:l}}}),{c(){h(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,a){b(e,t,a),r=!0},p(t,a){const n={};a&16&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function W(l){let e,r;return e=new A({props:{$$slots:{header:[O],default:[J]},$$scope:{ctx:l}}}),{c(){h(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,a){b(e,t,a),r=!0},p(t,a){const n={};a&17&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){r||(_(e.$$.fragment,t),r=!0)},o(t){m(e.$$.fragment,t),r=!1},d(t){k(e,t)}}}function D(l){let e,r;return{c(){e=$("p"),r=S("K\xFCnstler:in nicht gefunden!")},l(t){e=g(t,"P",{});var a=w(e);r=q(a,"K\xFCnstler:in nicht gefunden!"),a.forEach(c)},m(t,a){p(t,e,a),y(e,r)},p:z,d(t){t&&c(e)}}}function P(l){let e,r,t;return{c(){e=$("img"),this.h()},l(a){e=g(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){var a;I(e.src,r=(a=l[0].image)==null?void 0:a.url)||u(e,"src",r),u(e,"alt",t=l[0].name),u(e,"class","svelte-ojzt9c")},m(a,n){p(a,e,n)},p(a,n){var s;n&1&&!I(e.src,r=(s=a[0].image)==null?void 0:s.url)&&u(e,"src",r),n&1&&t!==(t=a[0].name)&&u(e,"alt",t)},d(a){a&&c(e)}}}function J(l){let e,r,t,a,n=l[0].image&&P(l);return t=new R({props:{source:l[0].bio}}),{c(){e=$("article"),n&&n.c(),r=B(),h(t.$$.fragment)},l(s){e=g(s,"ARTICLE",{});var i=w(e);n&&n.l(i),r=F(i),v(t.$$.fragment,i),i.forEach(c)},m(s,i){p(s,e,i),n&&n.m(e,null),y(e,r),b(t,e,null),a=!0},p(s,i){s[0].image?n?n.p(s,i):(n=P(s),n.c(),n.m(e,r)):n&&(n.d(1),n=null);const o={};i&1&&(o.source=s[0].bio),t.$set(o)},i(s){a||(_(t.$$.fragment,s),a=!0)},o(s){m(t.$$.fragment,s),a=!1},d(s){s&&c(e),n&&n.d(),k(t)}}}function O(l){let e,r=l[0].name+"",t;return{c(){e=$("h1"),t=S(r),this.h()},l(a){e=g(a,"H1",{slot:!0});var n=w(e);t=q(n,r),n.forEach(c),this.h()},h(){u(e,"slot","header")},m(a,n){p(a,e,n),y(e,t)},p(a,n){n&1&&r!==(r=a[0].name+"")&&H(t,r)},d(a){a&&c(e)}}}function Q(l){let e,r,t,a;const n=[W,V],s=[];function i(o,f){return o[0]?0:1}return e=i(l),r=s[e]=n[e](l),{c(){r.c(),t=E()},l(o){r.l(o),t=E()},m(o,f){s[e].m(o,f),p(o,t,f),a=!0},p(o,[f]){let d=e;e=i(o),e===d?s[e].p(o,f):(N(),m(s[d],1,1,()=>{s[d]=null}),K(),r=s[e],r?r.p(o,f):(r=s[e]=n[e](o),r.c()),_(r,1),r.m(t.parentNode,t))},i(o){a||(_(r),a=!0)},o(o){m(r),a=!1},d(o){s[e].d(o),o&&c(t)}}}function X(l,e,r){let t;L(l,T,i=>r(2,t=i));let a,n;s(),M(s);function s(){a=t.params.id,r(0,n=U(a))}return[n]}class se extends j{constructor(e){super(),C(this,e,X,Q,G,{})}}export{se as default};