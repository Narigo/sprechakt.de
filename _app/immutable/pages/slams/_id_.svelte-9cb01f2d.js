import{S as G,i as N,s as H,e as b,c as $,R as B,b as d,g as w,d as _,a as E,n as I,L as W,F as Q,l as P,r as p,x as q,y as L,z as j,p as v,C as D,o as R,q as V,t as M,h as O,J as k,k as C,m as y,j as X,G as Y,H as x,I as ee,K as te,O as ne}from"../../chunks/index-cf8cc359.js";import{P as se,p as ae}from"../../chunks/PageWithNavigation-0e25f0a4.js";import{b as le,a as ie,s as re}from"../../chunks/slams-a9b95ee7.js";import{b as oe}from"../../chunks/paths-b9644fda.js";import{S as ce}from"../../chunks/SvelteMarkdown-8eabf4b3.js";function U(a,e,s){const t=a.slice();return t[1]=e[s],t}function Z(a){let e,s;return{c(){e=b("img"),this.h()},l(t){e=$(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){B(e.src,s=a[1].url)||d(e,"src",s),d(e,"alt","Eindruck vom Event"),d(e,"class","svelte-iiyqm3")},m(t,n){w(t,e,n)},p(t,n){n&1&&!B(e.src,s=t[1].url)&&d(e,"src",s)},d(t){t&&_(e)}}}function fe(a){let e,s=a[0],t=[];for(let n=0;n<s.length;n+=1)t[n]=Z(U(a,s,n));return{c(){e=b("section");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=$(n,"SECTION",{class:!0});var l=E(e);for(let i=0;i<t.length;i+=1)t[i].l(l);l.forEach(_),this.h()},h(){d(e,"class","svelte-iiyqm3")},m(n,l){w(n,e,l);for(let i=0;i<t.length;i+=1)t[i].m(e,null)},p(n,[l]){if(l&1){s=n[0];let i;for(i=0;i<s.length;i+=1){const o=U(n,s,i);t[i]?t[i].p(o,l):(t[i]=Z(o),t[i].c(),t[i].m(e,null))}for(;i<t.length;i+=1)t[i].d(1);t.length=s.length}},i:I,o:I,d(n){n&&_(e),W(t,n)}}}function me(a,e,s){let{images:t}=e;return a.$$set=n=>{"images"in n&&s(0,t=n.images)},[t]}class ue extends G{constructor(e){super(),N(this,e,me,fe,H,{images:0})}}const _e=a=>({}),z=a=>({});function F(a){let e,s;return e=new ce({props:{source:a[1],options:{baseUrl:oe,gfm:!0}}}),{c(){q(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,n){j(e,t,n),s=!0},p(t,n){const l={};n&2&&(l.source=t[1]),e.$set(l)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){D(e,t)}}}function he(a){let e,s,t=a[1]&&F(a);return{c(){t&&t.c(),e=P()},l(n){t&&t.l(n),e=P()},m(n,l){t&&t.m(n,l),w(n,e,l),s=!0},p(n,l){n[1]?t?(t.p(n,l),l&2&&p(t,1)):(t=F(n),t.c(),p(t,1),t.m(e.parentNode,e)):t&&(R(),v(t,1,1,()=>{t=null}),V())},i(n){s||(p(t),s=!0)},o(n){v(t),s=!1},d(n){t&&t.d(n),n&&_(e)}}}function J(a){let e,s;return e=new ue({props:{images:a[2]}}),{c(){q(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,n){j(e,t,n),s=!0},p(t,n){const l={};n&4&&(l.images=t[2]),e.$set(l)},i(t){s||(p(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){D(e,t)}}}function K(a){let e,s;return{c(){e=b("a"),s=M("Zur\xFCck"),this.h()},l(t){e=$(t,"A",{href:!0});var n=E(e);s=O(n,"Zur\xFCck"),n.forEach(_),this.h()},h(){d(e,"href",a[0])},m(t,n){w(t,e,n),k(e,s)},p(t,n){n&1&&d(e,"href",t[0])},d(t){t&&_(e)}}}function ge(a){let e,s,t,n,l,i,o,u;const h=a[5].content,S=Q(h,a,a[4],z),g=S||he(a);let c=a[2]&&J(a),m=a[0]&&K(a);return{c(){e=b("section"),s=b("h3"),t=M(a[3]),n=C(),l=b("div"),g&&g.c(),i=C(),c&&c.c(),o=C(),m&&m.c(),this.h()},l(r){e=$(r,"SECTION",{class:!0});var f=E(e);s=$(f,"H3",{class:!0});var T=E(s);t=O(T,a[3]),T.forEach(_),n=y(f),l=$(f,"DIV",{class:!0});var A=E(l);g&&g.l(A),A.forEach(_),i=y(f),c&&c.l(f),o=y(f),m&&m.l(f),f.forEach(_),this.h()},h(){d(s,"class","svelte-1d94wj3"),d(l,"class","svelte-1d94wj3"),d(e,"class","svelte-1d94wj3")},m(r,f){w(r,e,f),k(e,s),k(s,t),k(e,n),k(e,l),g&&g.m(l,null),k(e,i),c&&c.m(e,null),k(e,o),m&&m.m(e,null),u=!0},p(r,[f]){(!u||f&8)&&X(t,r[3]),S?S.p&&(!u||f&16)&&Y(S,h,r,r[4],u?ee(h,r[4],f,_e):x(r[4]),z):g&&g.p&&(!u||f&2)&&g.p(r,u?f:-1),r[2]?c?(c.p(r,f),f&4&&p(c,1)):(c=J(r),c.c(),p(c,1),c.m(e,o)):c&&(R(),v(c,1,1,()=>{c=null}),V()),r[0]?m?m.p(r,f):(m=K(r),m.c(),m.m(e,null)):m&&(m.d(1),m=null)},i(r){u||(p(g,r),p(c),u=!0)},o(r){v(g,r),v(c),u=!1},d(r){r&&_(e),g&&g.d(r),c&&c.d(),m&&m.d()}}}function de(a,e,s){let{$$slots:t={},$$scope:n}=e,{backLink:l}=e,{markdownContent:i}=e,{images:o=[]}=e,{title:u}=e;return a.$$set=h=>{"backLink"in h&&s(0,l=h.backLink),"markdownContent"in h&&s(1,i=h.markdownContent),"images"in h&&s(2,o=h.images),"title"in h&&s(3,u=h.title),"$$scope"in h&&s(4,n=h.$$scope)},[l,i,o,u,n,t]}class pe extends G{constructor(e){super(),N(this,e,de,ge,H,{backLink:0,markdownContent:1,images:2,title:3})}}function ke(a){var t,n;let e,s;return e=new pe({props:{title:ie(a[0]),markdownContent:(t=a[0].description)!=null?t:"",images:(n=a[0].images)!=null?n:[],backLink:".."}}),{c(){q(e.$$.fragment)},l(l){L(e.$$.fragment,l)},m(l,i){j(e,l,i),s=!0},p:I,i(l){s||(p(e.$$.fragment,l),s=!0)},o(l){v(e.$$.fragment,l),s=!1},d(l){D(e,l)}}}function ve(a){let e,s;return{c(){e=b("h1"),s=M("Slams"),this.h()},l(t){e=$(t,"H1",{slot:!0});var n=E(e);s=O(n,"Slams"),n.forEach(_),this.h()},h(){d(e,"slot","header")},m(t,n){w(t,e,n),k(e,s)},p:I,d(t){t&&_(e)}}}function be(a){let e,s,t,n,l;return document.title=e="Sprechakt - "+a[0].name,n=new se({props:{$$slots:{header:[ve],default:[ke]},$$scope:{ctx:a}}}),{c(){s=b("meta"),t=C(),q(n.$$.fragment),this.h()},l(i){const o=te('[data-svelte="svelte-jlvp6u"]',document.head);s=$(o,"META",{name:!0,content:!0}),o.forEach(_),t=y(i),L(n.$$.fragment,i),this.h()},h(){d(s,"name","description"),d(s,"content",a[0].description)},m(i,o){k(document.head,s),w(i,t,o),j(n,i,o),l=!0},p(i,[o]){(!l||o&1)&&e!==(e="Sprechakt - "+i[0].name)&&(document.title=e);const u={};o&16&&(u.$$scope={dirty:o,ctx:i}),n.$set(u)},i(i){l||(p(n.$$.fragment,i),l=!0)},o(i){v(n.$$.fragment,i),l=!1},d(i){_(s),i&&_(t),D(n,i)}}}function $e(a,e,s){let t;ne(a,ae,o=>s(1,t=o));const n=t.params.id;return[le(re)[n]]}class Ie extends G{constructor(e){super(),N(this,e,$e,be,H,{})}}export{Ie as default};
