import{S as z,i as J,s as K,e as Z,b as y,f as j,t as F,d as O,h as p,G as Q,j as X,v as R,w as T,x as U,y as W,k,q as v,a as C,l as E,m as w,r as g,c as D,n as A,F as m,u as L,g as Y}from"../../../../chunks/index-961eddeb.js";import{S as x}from"../../../../chunks/SvelteMarkdown-d25ecead.js";import{p as ee}from"../../../../chunks/stores-30de57e0.js";import{P as te}from"../../../../chunks/PageWithNavigation-3455b3fb.js";import{b as S}from"../../../../chunks/blog-85f5a8ae.js";import{a as ae}from"../../../../chunks/acts-95976f92.js";import{c as M}from"../../../../chunks/singletons-ccc91fdb.js";function ne(r){var n;const e=ae.find(t=>t.id===r);return(n=e==null?void 0:e.name)!=null?n:"(Person nicht gefunden)"}function B(r){let e,n;return e=new te({props:{$$slots:{header:[se],default:[le]},$$scope:{ctx:r}}}),{c(){R(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,a){U(e,t,a),n=!0},p(t,a){const l={};a&1031&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){F(e.$$.fragment,t),n=!1},d(t){W(e,t)}}}function G(r){let e,n,t=r[2].title+"",a,l;return{c(){e=k("a"),n=v("\u{1F448} "),a=v(t),this.h()},l(o){e=E(o,"A",{href:!0});var s=w(e);n=g(s,"\u{1F448} "),a=g(s,t),s.forEach(p),this.h()},h(){A(e,"href",l=M+"/posts/"+r[2].id)},m(o,s){y(o,e,s),m(e,n),m(e,a)},p(o,s){s&4&&t!==(t=o[2].title+"")&&L(a,t),s&4&&l!==(l=M+"/posts/"+o[2].id)&&A(e,"href",l)},d(o){o&&p(e)}}}function H(r){let e,n=r[1].title+"",t,a,l;return{c(){e=k("a"),t=v(n),a=v(" \u{1F449}"),this.h()},l(o){e=E(o,"A",{href:!0});var s=w(e);t=g(s,n),a=g(s," \u{1F449}"),s.forEach(p),this.h()},h(){A(e,"href",l=M+"/posts/"+r[1].id)},m(o,s){y(o,e,s),m(e,t),m(e,a)},p(o,s){s&2&&n!==(n=o[1].title+"")&&L(t,n),s&2&&l!==(l=M+"/posts/"+o[1].id)&&A(e,"href",l)},d(o){o&&p(e)}}}function le(r){let e,n,t,a=r[0].authors.map(r[3]).join(", ")+"",l,o,s,$,f,b,h,q,d,N;s=new x({props:{source:r[0].body}});let u=r[2]&&G(r),c=r[1]&&H(r);return{c(){e=k("article"),n=k("p"),t=v("geschrieben von "),l=v(a),o=C(),R(s.$$.fragment),$=C(),f=k("nav"),u&&u.c(),b=C(),h=k("a"),q=v("Zu den weiteren Meldungen"),d=C(),c&&c.c(),this.h()},l(i){e=E(i,"ARTICLE",{});var _=w(e);n=E(_,"P",{});var P=w(n);t=g(P,"geschrieben von "),l=g(P,a),P.forEach(p),o=D(_),T(s.$$.fragment,_),_.forEach(p),$=D(i),f=E(i,"NAV",{class:!0});var I=w(f);u&&u.l(I),b=D(I),h=E(I,"A",{href:!0});var V=w(h);q=g(V,"Zu den weiteren Meldungen"),V.forEach(p),d=D(I),c&&c.l(I),I.forEach(p),this.h()},h(){A(h,"href",M+"/posts"),A(f,"class","svelte-nkoks6")},m(i,_){y(i,e,_),m(e,n),m(n,t),m(n,l),m(e,o),U(s,e,null),y(i,$,_),y(i,f,_),u&&u.m(f,null),m(f,b),m(f,h),m(h,q),m(f,d),c&&c.m(f,null),N=!0},p(i,_){(!N||_&1)&&a!==(a=i[0].authors.map(i[3]).join(", ")+"")&&L(l,a);const P={};_&1&&(P.source=i[0].body),s.$set(P),i[2]?u?u.p(i,_):(u=G(i),u.c(),u.m(f,b)):u&&(u.d(1),u=null),i[1]?c?c.p(i,_):(c=H(i),c.c(),c.m(f,null)):c&&(c.d(1),c=null)},i(i){N||(j(s.$$.fragment,i),N=!0)},o(i){F(s.$$.fragment,i),N=!1},d(i){i&&p(e),W(s),i&&p($),i&&p(f),u&&u.d(),c&&c.d()}}}function se(r){let e,n=r[0].title+"",t;return{c(){e=k("h1"),t=v(n),this.h()},l(a){e=E(a,"H1",{slot:!0});var l=w(e);t=g(l,n),l.forEach(p),this.h()},h(){A(e,"slot","header")},m(a,l){y(a,e,l),m(e,t)},p(a,l){l&1&&n!==(n=a[0].title+"")&&L(t,n)},d(a){a&&p(e)}}}function re(r){let e,n,t=r[0]&&B(r);return{c(){t&&t.c(),e=Z()},l(a){t&&t.l(a),e=Z()},m(a,l){t&&t.m(a,l),y(a,e,l),n=!0},p(a,[l]){a[0]?t?(t.p(a,l),l&1&&j(t,1)):(t=B(a),t.c(),j(t,1),t.m(e.parentNode,e)):t&&(Y(),F(t,1,1,()=>{t=null}),O())},i(a){n||(j(t),n=!0)},o(a){F(t),n=!1},d(a){t&&t.d(a),a&&p(e)}}}function ie(r,e,n){let t;Q(r,ee,d=>n(8,t=d));let a,l,o,s,$,f,b;h(),X(h);function h(){a=t.params.id,l=S.findIndex(d=>d.id===a),n(0,o=S[l]),s=l===S.length-1,$=l===0,n(1,f=s?void 0:S[l+1]),n(2,b=$?void 0:S[l-1])}return[o,f,b,d=>ne(d)]}class he extends z{constructor(e){super(),J(this,e,ie,re,K,{})}}export{he as default};