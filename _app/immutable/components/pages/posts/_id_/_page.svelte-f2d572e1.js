import{S as z,i as J,s as K,e as B,b as y,f as j,t as L,d as O,h,G as Q,j as X,v as R,w as T,x as U,y as W,k,q as v,a as D,l as E,m as w,r as g,c as F,n as A,F as _,u as V,g as Y}from"../../../../chunks/index-961eddeb.js";import{S as x}from"../../../../chunks/SvelteMarkdown-d25ecead.js";import{p as ee}from"../../../../chunks/stores-083779d6.js";import{P as te}from"../../../../chunks/PageWithNavigation-6319296b.js";import{b as S}from"../../../../chunks/blog-85f5a8ae.js";import{a as ae}from"../../../../chunks/acts-95976f92.js";import{c as q}from"../../../../chunks/singletons-39e87190.js";function ne(l){var n;const e=ae.find(t=>t.id===l);return(n=e==null?void 0:e.name)!=null?n:"(Person nicht gefunden)"}function G(l){let e,n;return e=new te({props:{$$slots:{header:[se],default:[re]},$$scope:{ctx:l}}}),{c(){R(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,a){U(e,t,a),n=!0},p(t,a){const r={};a&1031&&(r.$$scope={dirty:a,ctx:t}),e.$set(r)},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){L(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function H(l){let e,n,t=l[2].title+"",a,r;return{c(){e=k("a"),n=v("\u{1F448} "),a=v(t),this.h()},l(o){e=E(o,"A",{href:!0});var s=w(e);n=g(s,"\u{1F448} "),a=g(s,t),s.forEach(h),this.h()},h(){A(e,"href",r=q+"/posts/"+l[2].id)},m(o,s){y(o,e,s),_(e,n),_(e,a)},p(o,s){s&4&&t!==(t=o[2].title+"")&&V(a,t),s&4&&r!==(r=q+"/posts/"+o[2].id)&&A(e,"href",r)},d(o){o&&h(e)}}}function M(l){let e,n=l[1].title+"",t,a,r;return{c(){e=k("a"),t=v(n),a=v(" \u{1F449}"),this.h()},l(o){e=E(o,"A",{href:!0});var s=w(e);t=g(s,n),a=g(s," \u{1F449}"),s.forEach(h),this.h()},h(){A(e,"href",r=q+"/posts/"+l[1].id)},m(o,s){y(o,e,s),_(e,t),_(e,a)},p(o,s){s&2&&n!==(n=o[1].title+"")&&V(t,n),s&2&&r!==(r=q+"/posts/"+o[1].id)&&A(e,"href",r)},d(o){o&&h(e)}}}function re(l){let e,n,t,a=l[0].authors.map(l[3]).join(", ")+"",r,o,s,$,f,b,m,C,d,I;s=new x({props:{source:l[0].body}});let u=l[2]&&H(l),c=l[1]&&M(l);return{c(){e=k("article"),n=k("p"),t=v("geschrieben von "),r=v(a),o=D(),R(s.$$.fragment),$=D(),f=k("nav"),u&&u.c(),b=D(),m=k("a"),C=v("Zu den weiteren Nachrichten"),d=D(),c&&c.c(),this.h()},l(i){e=E(i,"ARTICLE",{});var p=w(e);n=E(p,"P",{});var N=w(n);t=g(N,"geschrieben von "),r=g(N,a),N.forEach(h),o=F(p),T(s.$$.fragment,p),p.forEach(h),$=F(i),f=E(i,"NAV",{class:!0});var P=w(f);u&&u.l(P),b=F(P),m=E(P,"A",{href:!0});var Z=w(m);C=g(Z,"Zu den weiteren Nachrichten"),Z.forEach(h),d=F(P),c&&c.l(P),P.forEach(h),this.h()},h(){A(m,"href",q+"/posts"),A(f,"class","svelte-nkoks6")},m(i,p){y(i,e,p),_(e,n),_(n,t),_(n,r),_(e,o),U(s,e,null),y(i,$,p),y(i,f,p),u&&u.m(f,null),_(f,b),_(f,m),_(m,C),_(f,d),c&&c.m(f,null),I=!0},p(i,p){(!I||p&1)&&a!==(a=i[0].authors.map(i[3]).join(", ")+"")&&V(r,a);const N={};p&1&&(N.source=i[0].body),s.$set(N),i[2]?u?u.p(i,p):(u=H(i),u.c(),u.m(f,b)):u&&(u.d(1),u=null),i[1]?c?c.p(i,p):(c=M(i),c.c(),c.m(f,null)):c&&(c.d(1),c=null)},i(i){I||(j(s.$$.fragment,i),I=!0)},o(i){L(s.$$.fragment,i),I=!1},d(i){i&&h(e),W(s),i&&h($),i&&h(f),u&&u.d(),c&&c.d()}}}function se(l){let e,n=l[0].title+"",t;return{c(){e=k("h1"),t=v(n),this.h()},l(a){e=E(a,"H1",{slot:!0});var r=w(e);t=g(r,n),r.forEach(h),this.h()},h(){A(e,"slot","header")},m(a,r){y(a,e,r),_(e,t)},p(a,r){r&1&&n!==(n=a[0].title+"")&&V(t,n)},d(a){a&&h(e)}}}function le(l){let e,n,t=l[0]&&G(l);return{c(){t&&t.c(),e=B()},l(a){t&&t.l(a),e=B()},m(a,r){t&&t.m(a,r),y(a,e,r),n=!0},p(a,[r]){a[0]?t?(t.p(a,r),r&1&&j(t,1)):(t=G(a),t.c(),j(t,1),t.m(e.parentNode,e)):t&&(Y(),L(t,1,1,()=>{t=null}),O())},i(a){n||(j(t),n=!0)},o(a){L(t),n=!1},d(a){t&&t.d(a),a&&h(e)}}}function ie(l,e,n){let t;Q(l,ee,d=>n(8,t=d));let a,r,o,s,$,f,b;m(),X(m);function m(){a=t.params.id,r=S.findIndex(d=>d.id===a),n(0,o=S[r]),s=r===S.length-1,$=r===0,n(1,f=s?void 0:S[r+1]),n(2,b=$?void 0:S[r-1])}return[o,f,b,d=>ne(d)]}class me extends z{constructor(e){super(),J(this,e,ie,le,K,{})}}export{me as default};
