import{L as $,S as B,i as I,s as P,e as _,t as v,c as g,a as f,h,d,g as C,G as l,n as E,k,m as y,M as q}from"../../chunks/index-4e5fc82f.js";import{g as D,e as G}from"../../chunks/index-33598362.js";const H=()=>{const t=$("__svelte__");return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:t.navigating.subscribe}},session:t.session,updated:t.updated}},L={subscribe(t){return H().page.subscribe(t)}};function M(t){let e,a=t[0].extras+"",r;return{c(){e=_("p"),r=v(a)},l(s){e=g(s,"P",{});var i=f(e);r=h(i,a),i.forEach(d)},m(s,i){C(s,e,i),l(e,r)},p:E,d(s){s&&d(e)}}}function N(t){let e,a,r=t[0].date+"",s,i,p,u=t[0].description+"",b,m,o=t[0].extras&&M(t);return{c(){e=_("section"),a=_("h3"),s=v(r),i=k(),p=_("p"),b=v(u),m=k(),o&&o.c()},l(c){e=g(c,"SECTION",{});var n=f(e);a=g(n,"H3",{});var x=f(a);s=h(x,r),x.forEach(d),i=y(n),p=g(n,"P",{});var S=f(p);b=h(S,u),S.forEach(d),m=y(n),o&&o.l(n),n.forEach(d)},m(c,n){C(c,e,n),l(e,a),l(a,s),l(e,i),l(e,p),l(p,b),l(e,m),o&&o.m(e,null)},p(c,[n]){c[0].extras&&o.p(c,n)},i:E,o:E,d(c){c&&d(e),o&&o.d()}}}function O(t,e,a){let r;q(t,L,u=>a(1,r=u));const s=r.params.id;return[D(G)[s]]}class j extends B{constructor(e){super(),I(this,e,O,N,P,{})}}export{j as default};
