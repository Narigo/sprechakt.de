import{S as V,i as W,s as z,w as M,x as O,y as R,q as j,o as C,B as T,l as L,g as h,p as G,d as c,O as K,u as Q,e as w,t as $,c as y,a as N,h as v,b as A,J as d,j as U,k as D,m as q,n as X}from"../../chunks/index-008f2778.js";import{S as Y}from"../../chunks/SvelteMarkdown-49df09f5.js";import{P as x,p as ee}from"../../chunks/PageWithNavigation-00a35a48.js";import{b as S}from"../../chunks/blog-85f5a8ae.js";import{a as te}from"../../chunks/acts-1de9d2be.js";import{b as B}from"../../chunks/paths-b9644fda.js";function ie(n){var a;const e=te.find(t=>t.id===n);return(a=e==null?void 0:e.name)!=null?a:"(Person nicht gefunden)"}function F(n){let e,a;return e=new x({props:{$$slots:{header:[re],default:[ae]},$$scope:{ctx:n}}}),{c(){M(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,i){R(e,t,i),a=!0},p(t,i){const l={};i&1031&&(l.$$scope={dirty:i,ctx:t}),e.$set(l)},i(t){a||(j(e.$$.fragment,t),a=!0)},o(t){C(e.$$.fragment,t),a=!1},d(t){T(e,t)}}}function H(n){let e,a,t=n[2].title+"",i,l;return{c(){e=w("a"),a=$("\u{1F448} "),i=$(t),this.h()},l(f){e=y(f,"A",{href:!0});var s=N(e);a=v(s,"\u{1F448} "),i=v(s,t),s.forEach(c),this.h()},h(){A(e,"href",l=B+"/posts/"+n[2].id)},m(f,s){h(f,e,s),d(e,a),d(e,i)},p(f,s){s&4&&t!==(t=f[2].title+"")&&U(i,t),s&4&&l!==(l=B+"/posts/"+f[2].id)&&A(e,"href",l)},d(f){f&&c(e)}}}function J(n){let e,a=n[1].title+"",t,i,l;return{c(){e=w("a"),t=$(a),i=$(" \u{1F449}"),this.h()},l(f){e=y(f,"A",{href:!0});var s=N(e);t=v(s,a),i=v(s," \u{1F449}"),s.forEach(c),this.h()},h(){A(e,"href",l=B+"/posts/"+n[1].id)},m(f,s){h(f,e,s),d(e,t),d(e,i)},p(f,s){s&2&&a!==(a=f[1].title+"")&&U(t,a),s&2&&l!==(l=B+"/posts/"+f[1].id)&&A(e,"href",l)},d(f){f&&c(e)}}}function ae(n){let e,a,t,i=n[0].authors.map(n[3]).join(", ")+"",l,f,s,k,b,_,g,I,m,P;s=new Y({props:{source:n[0].body}});let u=n[2]&&H(n),p=n[1]&&J(n);return{c(){e=w("article"),a=w("p"),t=$("geschrieben von "),l=$(i),f=D(),M(s.$$.fragment),k=D(),u&&u.c(),b=D(),_=w("a"),g=$("Zu den weiteren Nachrichten"),I=D(),p&&p.c(),m=L(),this.h()},l(r){e=y(r,"ARTICLE",{});var o=N(e);a=y(o,"P",{});var E=N(a);t=v(E,"geschrieben von "),l=v(E,i),E.forEach(c),f=q(o),O(s.$$.fragment,o),o.forEach(c),k=q(r),u&&u.l(r),b=q(r),_=y(r,"A",{href:!0});var Z=N(_);g=v(Z,"Zu den weiteren Nachrichten"),Z.forEach(c),I=q(r),p&&p.l(r),m=L(),this.h()},h(){A(_,"href",B+"/posts")},m(r,o){h(r,e,o),d(e,a),d(a,t),d(a,l),d(e,f),R(s,e,null),h(r,k,o),u&&u.m(r,o),h(r,b,o),h(r,_,o),d(_,g),h(r,I,o),p&&p.m(r,o),h(r,m,o),P=!0},p(r,o){(!P||o&1)&&i!==(i=r[0].authors.map(r[3]).join(", ")+"")&&U(l,i);const E={};o&1&&(E.source=r[0].body),s.$set(E),r[2]?u?u.p(r,o):(u=H(r),u.c(),u.m(b.parentNode,b)):u&&(u.d(1),u=null),r[1]?p?p.p(r,o):(p=J(r),p.c(),p.m(m.parentNode,m)):p&&(p.d(1),p=null)},i(r){P||(j(s.$$.fragment,r),P=!0)},o(r){C(s.$$.fragment,r),P=!1},d(r){r&&c(e),T(s),r&&c(k),u&&u.d(r),r&&c(b),r&&c(_),r&&c(I),p&&p.d(r),r&&c(m)}}}function re(n){let e,a=n[0].title+"",t;return{c(){e=w("h1"),t=$(a),this.h()},l(i){e=y(i,"H1",{slot:!0});var l=N(e);t=v(l,a),l.forEach(c),this.h()},h(){A(e,"slot","header")},m(i,l){h(i,e,l),d(e,t)},p(i,l){l&1&&a!==(a=i[0].title+"")&&U(t,a)},d(i){i&&c(e)}}}function le(n){let e,a,t=n[0]&&F(n);return{c(){t&&t.c(),e=L()},l(i){t&&t.l(i),e=L()},m(i,l){t&&t.m(i,l),h(i,e,l),a=!0},p(i,[l]){i[0]?t?(t.p(i,l),l&1&&j(t,1)):(t=F(i),t.c(),j(t,1),t.m(e.parentNode,e)):t&&(X(),C(t,1,1,()=>{t=null}),G())},i(i){a||(j(t),a=!0)},o(i){C(t),a=!1},d(i){t&&t.d(i),i&&c(e)}}}function se(n,e,a){let t;K(n,ee,m=>a(8,t=m));let i,l,f,s,k,b,_;g(),Q(g);function g(){i=t.params.id,l=S.findIndex(m=>m.id===i),a(0,f=S[l]),s=l===S.length-1,k=l===0,a(1,b=s?void 0:S[l+1]),a(2,_=k?void 0:S[l-1])}return[f,b,_,m=>ie(m)]}class me extends V{constructor(e){super(),W(this,e,se,le,z,{})}}export{me as default};
