import{S as F,i as O,s as U,B as K,k as w,q,a as y,l as E,m as C,r as H,h as u,c as A,n as $,b as k,F as b,u as Q,C as R,D as X,E as Y,f as d,g as V,t as g,d as W,e as S,v as I,w as D,x as L,y as j,H as x,G as ee,A as M}from"../../../../../chunks/index-9937773f.js";import{d as te,c as z}from"../../../../../chunks/singletons-6fb8b7bd.js";import{p as ne}from"../../../../../chunks/stores-1cc34125.js";import{b as ae,e as se,a as le}from"../../../../../chunks/slams-b1313e9b.js";import{P as J}from"../../../../../chunks/PageWithNavigation-3a7ba952.js";import{I as re}from"../../../../../chunks/ImageGrid-cdd18819.js";import{S as oe}from"../../../../../chunks/SvelteMarkdown-d5e8a0cd.js";const ie=l=>({}),T=l=>({});function B(l){let t,a;return t=new oe({props:{source:l[1],options:{baseUrl:z,gfm:!0}}}),{c(){I(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,n){L(t,e,n),a=!0},p(e,n){const s={};n&2&&(s.source=e[1]),t.$set(s)},i(e){a||(d(t.$$.fragment,e),a=!0)},o(e){g(t.$$.fragment,e),a=!1},d(e){j(t,e)}}}function ce(l){let t,a,e=l[1]&&B(l);return{c(){e&&e.c(),t=S()},l(n){e&&e.l(n),t=S()},m(n,s){e&&e.m(n,s),k(n,t,s),a=!0},p(n,s){n[1]?e?(e.p(n,s),s&2&&d(e,1)):(e=B(n),e.c(),d(e,1),e.m(t.parentNode,t)):e&&(V(),g(e,1,1,()=>{e=null}),W())},i(n){a||(d(e),a=!0)},o(n){g(e),a=!1},d(n){e&&e.d(n),n&&u(t)}}}function G(l){let t,a;return t=new re({props:{images:l[2].map(l[7])}}),{c(){I(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,n){L(t,e,n),a=!0},p(e,n){const s={};n&4&&(s.images=e[2].map(e[7])),t.$set(s)},i(e){a||(d(t.$$.fragment,e),a=!0)},o(e){g(t.$$.fragment,e),a=!1},d(e){j(t,e)}}}function Z(l){let t,a;return{c(){t=w("a"),a=q("Zur\xFCck"),this.h()},l(e){t=E(e,"A",{href:!0});var n=C(t);a=H(n,"Zur\xFCck"),n.forEach(u),this.h()},h(){$(t,"href",l[0])},m(e,n){k(e,t,n),b(t,a)},p(e,n){n&1&&$(t,"href",e[0])},d(e){e&&u(t)}}}function fe(l){let t,a,e,n,s,m,h,_;const p=l[6].content,v=K(p,l,l[5],T),i=v||ce(l);let c=l[2]&&G(l),r=l[0]&&Z(l);return{c(){t=w("section"),a=w("h3"),e=q(l[3]),n=y(),s=w("div"),i&&i.c(),m=y(),c&&c.c(),h=y(),r&&r.c(),this.h()},l(o){t=E(o,"SECTION",{class:!0});var f=C(t);a=E(f,"H3",{class:!0});var N=C(a);e=H(N,l[3]),N.forEach(u),n=A(f),s=E(f,"DIV",{class:!0});var P=C(s);i&&i.l(P),P.forEach(u),m=A(f),c&&c.l(f),h=A(f),r&&r.l(f),f.forEach(u),this.h()},h(){$(a,"class","svelte-1d94wj3"),$(s,"class","svelte-1d94wj3"),$(t,"class","svelte-1d94wj3")},m(o,f){k(o,t,f),b(t,a),b(a,e),b(t,n),b(t,s),i&&i.m(s,null),b(t,m),c&&c.m(t,null),b(t,h),r&&r.m(t,null),_=!0},p(o,[f]){(!_||f&8)&&Q(e,o[3]),v?v.p&&(!_||f&32)&&R(v,p,o,o[5],_?Y(p,o[5],f,ie):X(o[5]),T):i&&i.p&&(!_||f&2)&&i.p(o,_?f:-1),o[2]?c?(c.p(o,f),f&4&&d(c,1)):(c=G(o),c.c(),d(c,1),c.m(t,h)):c&&(V(),g(c,1,1,()=>{c=null}),W()),o[0]?r?r.p(o,f):(r=Z(o),r.c(),r.m(t,null)):r&&(r.d(1),r=null)},i(o){_||(d(i,o),d(c),_=!0)},o(o){g(i,o),g(c),_=!1},d(o){o&&u(t),i&&i.d(o),c&&c.d(),r&&r.d()}}}function ue(l,t,a){let{$$slots:e={},$$scope:n}=t,{backLink:s}=t,{markdownContent:m}=t,{images:h=[]}=t,{title:_}=t;const p=`${te}/images/from-db`,v=i=>({url:`${p}/${i.pathInAssets}`,alt:i.filename});return l.$$set=i=>{"backLink"in i&&a(0,s=i.backLink),"markdownContent"in i&&a(1,m=i.markdownContent),"images"in i&&a(2,h=i.images),"title"in i&&a(3,_=i.title),"$$scope"in i&&a(5,n=i.$$scope)},[s,m,h,_,p,n,e,v]}class me extends F{constructor(t){super(),O(this,t,ue,fe,U,{backLink:0,markdownContent:1,images:2,title:3})}}function _e(l){let t,a;return{c(){t=y(),a=w("meta"),this.h()},l(e){t=A(e),a=E(e,"META",{name:!0,content:!0}),this.h()},h(){document.title="Event nicht gefunden - SprechAkt",$(a,"name","description"),$(a,"content","Das angegebene Event wurde nicht gefunden")},m(e,n){k(e,t,n),k(e,a,n)},p:M,d(e){e&&u(t),e&&u(a)}}}function de(l){let t,a,e;return document.title=t=l[0].name+" - SprechAkt",{c(){a=y(),e=w("meta"),this.h()},l(n){a=A(n),e=E(n,"META",{name:!0,content:!0}),this.h()},h(){$(e,"name","description"),$(e,"content",l[0].description)},m(n,s){k(n,a,s),k(n,e,s)},p(n,s){s&1&&t!==(t=n[0].name+" - SprechAkt")&&(document.title=t)},d(n){n&&u(a),n&&u(e)}}}function pe(l){let t,a;return t=new J({props:{$$slots:{default:[ge]},$$scope:{ctx:l}}}),{c(){I(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,n){L(t,e,n),a=!0},p(e,n){const s={};n&16&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){a||(d(t.$$.fragment,e),a=!0)},o(e){g(t.$$.fragment,e),a=!1},d(e){j(t,e)}}}function he(l){let t,a;return t=new J({props:{$$slots:{header:[$e],default:[ke]},$$scope:{ctx:l}}}),{c(){I(t.$$.fragment)},l(e){D(t.$$.fragment,e)},m(e,n){L(t,e,n),a=!0},p(e,n){const s={};n&16&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){a||(d(t.$$.fragment,e),a=!0)},o(e){g(t.$$.fragment,e),a=!1},d(e){j(t,e)}}}function ge(l){let t;return{c(){t=q("Event nicht gefunden!")},l(a){t=H(a,"Event nicht gefunden!")},m(a,e){k(a,t,e)},d(a){a&&u(t)}}}function ke(l){var e,n;let t,a;return t=new me({props:{title:le(l[0]),markdownContent:(e=l[0].description)!=null?e:"",images:(n=l[0].images)!=null?n:[],backLink:z+"/slams/events"}}),{c(){I(t.$$.fragment)},l(s){D(t.$$.fragment,s)},m(s,m){L(t,s,m),a=!0},p:M,i(s){a||(d(t.$$.fragment,s),a=!0)},o(s){g(t.$$.fragment,s),a=!1},d(s){j(t,s)}}}function $e(l){let t,a;return{c(){t=w("h1"),a=q("Slams"),this.h()},l(e){t=E(e,"H1",{slot:!0});var n=C(t);a=H(n,"Slams"),n.forEach(u),this.h()},h(){$(t,"slot","header")},m(e,n){k(e,t,n),b(t,a)},p:M,d(e){e&&u(t)}}}function be(l){let t,a,e,n,s,m;function h(r,o){return r[0]?de:_e}let p=h(l)(l);const v=[he,pe],i=[];function c(r,o){return r[0]?0:1}return e=c(l),n=i[e]=v[e](l),{c(){p.c(),t=S(),a=y(),n.c(),s=S()},l(r){const o=x('[data-svelte="svelte-cryipf"]',document.head);p.l(o),t=S(),o.forEach(u),a=A(r),n.l(r),s=S()},m(r,o){p.m(document.head,null),b(document.head,t),k(r,a,o),i[e].m(r,o),k(r,s,o),m=!0},p(r,[o]){p.p(r,o),n.p(r,o)},i(r){m||(d(n),m=!0)},o(r){g(n),m=!1},d(r){p.d(r),u(t),r&&u(a),i[e].d(r),r&&u(s)}}}function ve(l,t,a){let e;ee(l,ne,h=>a(1,e=h));const n=e.params.id;return[ae(se)[n]]}class De extends F{constructor(t){super(),O(this,t,ve,be,U,{})}}export{De as default};