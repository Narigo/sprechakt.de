import{S as O,i as z,s as K,w as T,x as P,y as k,E as B,q,o as C,B as A,e as m,k as y,K as J,c as u,d as c,m as I,b as p,J as r,g as H,t as D,a as _,h as w}from"../chunks/index-008f2778.js";import{b as L}from"../chunks/paths-b9644fda.js";import{h as R,g as V,s as F,a as W}from"../chunks/slams-c982c599.js";import{b as j}from"../chunks/blog-85f5a8ae.js";import{P as G}from"../chunks/PageWithNavigation-00a35a48.js";import{B as Q}from"../chunks/BlogSection-565e154a.js";import{E as U}from"../chunks/EventSection-fa23e774.js";function X(l){return R(l,5)}function Y(l){let e,s;return e=new U({props:{events:l[0]}}),{c(){T(e.$$.fragment)},l(t){P(e.$$.fragment,t)},m(t,i){k(e,t,i),s=!0},p:B,i(t){s||(q(e.$$.fragment,t),s=!0)},o(t){C(e.$$.fragment,t),s=!1},d(t){A(e,t)}}}function Z(l){return[V(F)]}class ee extends O{constructor(e){super(),z(this,e,Z,Y,K,{})}}function te(l){let e,s,t,i,n,a,d,h,g,S,v,f,$;return a=new Q({props:{posts:l[0]}}),f=new ee({}),{c(){e=m("div"),s=m("section"),t=m("h2"),i=D("Neueste Nachrichten"),n=y(),T(a.$$.fragment),d=y(),h=m("section"),g=m("h2"),S=D("Die n\xE4chsten Events"),v=y(),T(f.$$.fragment),this.h()},l(o){e=u(o,"DIV",{class:!0});var E=_(e);s=u(E,"SECTION",{class:!0});var x=_(s);t=u(x,"H2",{});var N=_(t);i=w(N,"Neueste Nachrichten"),N.forEach(c),n=I(x),P(a.$$.fragment,x),x.forEach(c),d=I(E),h=u(E,"SECTION",{class:!0});var b=_(h);g=u(b,"H2",{});var M=_(g);S=w(M,"Die n\xE4chsten Events"),M.forEach(c),v=I(b),P(f.$$.fragment,b),b.forEach(c),E.forEach(c),this.h()},h(){p(s,"class","svelte-1tf6o9h"),p(h,"class","svelte-1tf6o9h"),p(e,"class","content svelte-1tf6o9h")},m(o,E){H(o,e,E),r(e,s),r(s,t),r(t,i),r(s,n),k(a,s,null),r(e,d),r(e,h),r(h,g),r(g,S),r(h,v),k(f,h,null),$=!0},p:B,i(o){$||(q(a.$$.fragment,o),q(f.$$.fragment,o),$=!0)},o(o){C(a.$$.fragment,o),C(f.$$.fragment,o),$=!1},d(o){o&&c(e),A(a),A(f)}}}function se(l){let e,s,t,i,n,a,d,h=W(l[1])+"",g,S,v,f;return{c(){e=m("div"),s=m("h1"),t=D("Sprechakt"),i=y(),n=m("section"),a=m("p"),d=D("N\xE4chster Termin am "),g=D(h),S=D(`.
				`),v=m("a"),f=D("Mehr Informationen zum n\xE4chsten Event"),this.h()},l($){e=u($,"DIV",{class:!0,slot:!0});var o=_(e);s=u(o,"H1",{class:!0});var E=_(s);t=w(E,"Sprechakt"),E.forEach(c),i=I(o),n=u(o,"SECTION",{class:!0});var x=_(n);a=u(x,"P",{});var N=_(a);d=w(N,"N\xE4chster Termin am "),g=w(N,h),S=w(N,`.
				`),v=u(N,"A",{href:!0});var b=_(v);f=w(b,"Mehr Informationen zum n\xE4chsten Event"),b.forEach(c),N.forEach(c),x.forEach(c),o.forEach(c),this.h()},h(){p(s,"class","svelte-1tf6o9h"),p(v,"href",`${L}/slams/${l[1].id}`),p(n,"class","svelte-1tf6o9h"),p(e,"class","header svelte-1tf6o9h"),p(e,"slot","header")},m($,o){H($,e,o),r(e,s),r(s,t),r(e,i),r(e,n),r(n,a),r(a,d),r(a,g),r(a,S),r(a,v),r(v,f)},p:B,d($){$&&c(e)}}}function ne(l){let e,s,t,i;return t=new G({props:{$$slots:{header:[se],default:[te]},$$scope:{ctx:l}}}),{c(){e=m("meta"),s=y(),T(t.$$.fragment),this.h()},l(n){const a=J('[data-svelte="svelte-13vqada"]',document.head);e=u(a,"META",{name:!0,content:!0}),a.forEach(c),s=I(n),P(t.$$.fragment,n),this.h()},h(){document.title="Sprechakt",p(e,"name","description"),p(e,"content","Der Landshuter Poetry Slam in der Alten Kaserne")},m(n,a){r(document.head,e),H(n,s,a),k(t,n,a),i=!0},p(n,[a]){const d={};a&8&&(d.$$scope={dirty:a,ctx:n}),t.$set(d)},i(n){i||(q(t.$$.fragment,n),i=!0)},o(n){C(t.$$.fragment,n),i=!1},d(n){c(e),n&&c(s),A(t,n)}}}const me=!0;function ae(l){const e=X(j),t=V(F)[0];return[e,t]}class ue extends O{constructor(e){super(),z(this,e,ae,ne,K,{})}}export{ue as default,me as prerender};
