import{S as z,i as M,s as H,e as d,t as g,k as w,c as p,a as v,h as E,d as o,m as I,b as u,g as k,J as i,j as K,n as q,L as B,x as L,K as F,y as O,z as V,r as j,p as J,C as R}from"../chunks/index-295045bc.js";import{b as N}from"../chunks/paths-b9644fda.js";import{g as T,a as G,e as W}from"../chunks/slams-20a8c47f.js";import{P as Q}from"../chunks/PageWithNavigation-b3ae125c.js";function A(l,e,n){const t=l.slice();return t[1]=e[n],t}function U(l){let e,n;return{c(){e=d("p"),n=g("Ein weiterer Slam"),this.h()},l(t){e=p(t,"P",{class:!0});var s=v(e);n=E(s,"Ein weiterer Slam"),s.forEach(o),this.h()},h(){u(e,"class","svelte-1h0h81l")},m(t,s){k(t,e,s),i(e,n)},p:q,d(t){t&&o(e)}}}function X(l){let e,n=l[1].shortDescription+"",t;return{c(){e=d("p"),t=g(n),this.h()},l(s){e=p(s,"P",{class:!0});var r=v(e);t=E(r,n),r.forEach(o),this.h()},h(){u(e,"class","svelte-1h0h81l")},m(s,r){k(s,e,r),i(e,t)},p(s,r){r&1&&n!==(n=s[1].shortDescription+"")&&K(t,n)},d(s){s&&o(e)}}}function C(l){let e,n,t,s=T(l[1])+"",r,a,_,y;function S(h,f){return h[1].shortDescription?X:U}let $=S(l),c=$(l);return{c(){e=d("a"),n=d("div"),t=d("h3"),r=g(s),a=w(),c.c(),_=w(),this.h()},l(h){e=p(h,"A",{href:!0,class:!0});var f=v(e);n=p(f,"DIV",{class:!0});var m=v(n);t=p(m,"H3",{class:!0});var b=v(t);r=E(b,s),b.forEach(o),a=I(m),c.l(m),_=I(m),m.forEach(o),f.forEach(o),this.h()},h(){u(t,"class","svelte-1h0h81l"),u(n,"class","svelte-1h0h81l"),u(e,"href",y=`${N}/slams/${l[1].id}`),u(e,"class","svelte-1h0h81l")},m(h,f){k(h,e,f),i(e,n),i(n,t),i(t,r),i(n,a),c.m(n,null),i(n,_)},p(h,f){f&1&&s!==(s=T(h[1])+"")&&K(r,s),$===($=S(h))&&c?c.p(h,f):(c.d(1),c=$(h),c&&(c.c(),c.m(n,_))),f&1&&y!==(y=`${N}/slams/${h[1].id}`)&&u(e,"href",y)},d(h){h&&o(e),c.d()}}}function Y(l){let e,n=l[0],t=[];for(let s=0;s<n.length;s+=1)t[s]=C(A(l,n,s));return{c(){e=d("section");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=p(s,"SECTION",{class:!0});var r=v(e);for(let a=0;a<t.length;a+=1)t[a].l(r);r.forEach(o),this.h()},h(){u(e,"class","svelte-1h0h81l")},m(s,r){k(s,e,r);for(let a=0;a<t.length;a+=1)t[a].m(e,null)},p(s,[r]){if(r&1){n=s[0];let a;for(a=0;a<n.length;a+=1){const _=A(s,n,a);t[a]?t[a].p(_,r):(t[a]=C(_),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=n.length}},i:q,o:q,d(s){s&&o(e),B(t,s)}}}function Z(l,e,n){let{events:t}=e;return l.$$set=s=>{"events"in s&&n(0,t=s.events)},[t]}class ee extends z{constructor(e){super(),M(this,e,Z,Y,H,{events:0})}}function te(l){let e,n;return e=new ee({props:{events:W}}),{c(){L(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,s){V(e,t,s),n=!0},p:q,i(t){n||(j(e.$$.fragment,t),n=!0)},o(t){J(e.$$.fragment,t),n=!1},d(t){R(e,t)}}}function se(l){let e,n,t,s,r,a,_,y=l[0].date+"",S,$,c,h;return{c(){e=d("div"),n=d("h1"),t=g("Sprechakt"),s=w(),r=d("section"),a=d("p"),_=g("N\xE4chster Termin am "),S=g(y),$=g(`.
				`),c=d("a"),h=g("Mehr Informationen zum n\xE4chsten Event"),this.h()},l(f){e=p(f,"DIV",{slot:!0,class:!0});var m=v(e);n=p(m,"H1",{class:!0});var b=v(n);t=E(b,"Sprechakt"),b.forEach(o),s=I(m),r=p(m,"SECTION",{class:!0});var P=v(r);a=p(P,"P",{});var D=v(a);_=E(D,"N\xE4chster Termin am "),S=E(D,y),$=E(D,`.
				`),c=p(D,"A",{href:!0});var x=v(c);h=E(x,"Mehr Informationen zum n\xE4chsten Event"),x.forEach(o),D.forEach(o),P.forEach(o),m.forEach(o),this.h()},h(){u(n,"class","svelte-70qs8y"),u(c,"href",`${N}/slams/${l[0].id}`),u(r,"class","svelte-70qs8y"),u(e,"slot","header"),u(e,"class","svelte-70qs8y")},m(f,m){k(f,e,m),i(e,n),i(n,t),i(e,s),i(e,r),i(r,a),i(a,_),i(a,S),i(a,$),i(a,c),i(c,h)},p:q,d(f){f&&o(e)}}}function ne(l){let e,n,t,s;return t=new Q({props:{$$slots:{header:[se],default:[te]},$$scope:{ctx:l}}}),{c(){e=d("meta"),n=w(),L(t.$$.fragment),this.h()},l(r){const a=F('[data-svelte="svelte-13vqada"]',document.head);e=p(a,"META",{name:!0,content:!0}),a.forEach(o),n=I(r),O(t.$$.fragment,r),this.h()},h(){document.title="Sprechakt",u(e,"name","description"),u(e,"content","Der Landshuter Poetry Slam in der Alten Kaserne")},m(r,a){i(document.head,e),k(r,n,a),V(t,r,a),s=!0},p(r,[a]){const _={};a&4&&(_.$$scope={dirty:a,ctx:r}),t.$set(_)},i(r){s||(j(t.$$.fragment,r),s=!0)},o(r){J(t.$$.fragment,r),s=!1},d(r){o(e),r&&o(n),R(t,r)}}}const ie=!0;function ae(l){return[G(W)[0]]}class he extends z{constructor(e){super(),M(this,e,ae,ne,H,{})}}export{he as default,ie as prerender};
