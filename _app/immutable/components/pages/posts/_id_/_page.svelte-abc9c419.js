import{S as D,i as G,s as L,e as B,b as v,f as $,t as E,d as U,h as _,G as W,j as z,v as S,w as V,x as Z,y as j,a as P,k as w,q as b,c as q,l as A,m as N,r as y,n as h,F as c,g as H,u as C}from"../../../../chunks/index-cdc6a83d.js";import{p as J}from"../../../../chunks/stores-1deca326.js";import{P as K}from"../../../../chunks/PageWithNavigation-0aeb5a9d.js";import{b as g,B as O}from"../../../../chunks/BlogEntry-f5d2395d.js";import{c as k}from"../../../../chunks/singletons-12656d99.js";import"../../../../chunks/SvelteMarkdown-f5eada1d.js";import"../../../../chunks/index-9c146807.js";import"../../../../chunks/acts-bd9cd396.js";function F(f){let t,s;return t=new K({props:{$$slots:{default:[Q]},$$scope:{ctx:f}}}),{c(){S(t.$$.fragment)},l(e){V(t.$$.fragment,e)},m(e,n){Z(t,e,n),s=!0},p(e,n){const a={};n&519&&(a.$$scope={dirty:n,ctx:e}),t.$set(a)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){E(t.$$.fragment,e),s=!1},d(e){j(t,e)}}}function I(f){let t,s,e=f[2].title+"",n,a;return{c(){t=w("a"),s=b("\u{1F448} "),n=b(e),this.h()},l(r){t=A(r,"A",{href:!0});var i=N(t);s=y(i,"\u{1F448} "),n=y(i,e),i.forEach(_),this.h()},h(){h(t,"href",a=k+"/posts/"+f[2].id)},m(r,i){v(r,t,i),c(t,s),c(t,n)},p(r,i){i&4&&e!==(e=r[2].title+"")&&C(n,e),i&4&&a!==(a=k+"/posts/"+r[2].id)&&h(t,"href",a)},d(r){r&&_(t)}}}function M(f){let t,s=f[1].title+"",e,n,a;return{c(){t=w("a"),e=b(s),n=b(" \u{1F449}"),this.h()},l(r){t=A(r,"A",{href:!0});var i=N(t);e=y(i,s),n=y(i," \u{1F449}"),i.forEach(_),this.h()},h(){h(t,"href",a=k+"/posts/"+f[1].id)},m(r,i){v(r,t,i),c(t,e),c(t,n)},p(r,i){i&2&&s!==(s=r[1].title+"")&&C(e,s),i&2&&a!==(a=k+"/posts/"+r[1].id)&&h(t,"href",a)},d(r){r&&_(t)}}}function Q(f){let t,s,e,n,a,r,i,m;t=new O({props:{entry:f[0]}});let o=f[2]&&I(f),u=f[1]&&M(f);return{c(){S(t.$$.fragment),s=P(),e=w("nav"),o&&o.c(),n=P(),a=w("a"),r=b("Zu den weiteren Meldungen"),i=P(),u&&u.c(),this.h()},l(l){V(t.$$.fragment,l),s=q(l),e=A(l,"NAV",{class:!0});var p=N(e);o&&o.l(p),n=q(p),a=A(p,"A",{href:!0});var d=N(a);r=y(d,"Zu den weiteren Meldungen"),d.forEach(_),i=q(p),u&&u.l(p),p.forEach(_),this.h()},h(){h(a,"href",k+"/posts"),h(e,"class","svelte-nkoks6")},m(l,p){Z(t,l,p),v(l,s,p),v(l,e,p),o&&o.m(e,null),c(e,n),c(e,a),c(a,r),c(e,i),u&&u.m(e,null),m=!0},p(l,p){const d={};p&1&&(d.entry=l[0]),t.$set(d),l[2]?o?o.p(l,p):(o=I(l),o.c(),o.m(e,n)):o&&(o.d(1),o=null),l[1]?u?u.p(l,p):(u=M(l),u.c(),u.m(e,null)):u&&(u.d(1),u=null)},i(l){m||($(t.$$.fragment,l),m=!0)},o(l){E(t.$$.fragment,l),m=!1},d(l){j(t,l),l&&_(s),l&&_(e),o&&o.d(),u&&u.d()}}}function R(f){let t,s,e=f[0]&&F(f);return{c(){e&&e.c(),t=B()},l(n){e&&e.l(n),t=B()},m(n,a){e&&e.m(n,a),v(n,t,a),s=!0},p(n,[a]){n[0]?e?(e.p(n,a),a&1&&$(e,1)):(e=F(n),e.c(),$(e,1),e.m(t.parentNode,t)):e&&(H(),E(e,1,1,()=>{e=null}),U())},i(n){s||($(e),s=!0)},o(n){E(e),s=!1},d(n){e&&e.d(n),n&&_(t)}}}function T(f,t,s){let e;W(f,J,p=>s(7,e=p));let n,a,r,i,m,o,u;l(),z(l);function l(){n=e.params.id,a=g.findIndex(p=>p.id===n),s(0,r=g[a]),i=a===g.length-1,m=a===0,s(1,o=i?void 0:g[a+1]),s(2,u=m?void 0:g[a-1])}return[r,o,u]}class le extends D{constructor(t){super(),G(this,t,T,R,L,{})}}export{le as default};
