import{S as q,i as A,s as H,e as p,t as y,k as $,c as d,a as v,h as B,d as o,m as w,b as f,g as E,J as u,j,E as k,L as J}from"./index-008f2778.js";import{b as C}from"./paths-b9644fda.js";function I(r,e,l){const t=r.slice();return t[1]=e[l],t}function L(r){let e,l;return{c(){e=p("p"),l=y("Ein weiterer Beitrag"),this.h()},l(t){e=d(t,"P",{class:!0});var s=v(e);l=B(s,"Ein weiterer Beitrag"),s.forEach(o),this.h()},h(){f(e,"class","svelte-1h0h81l")},m(t,s){E(t,e,s),u(e,l)},p:k,d(t){t&&o(e)}}}function N(r){let e,l=r[1].shortDescription+"",t;return{c(){e=p("p"),t=y(l),this.h()},l(s){e=d(s,"P",{class:!0});var i=v(e);t=B(i,l),i.forEach(o),this.h()},h(){f(e,"class","svelte-1h0h81l")},m(s,i){E(s,e,i),u(e,t)},p(s,i){i&1&&l!==(l=s[1].shortDescription+"")&&j(t,l)},d(s){s&&o(e)}}}function P(r){let e,l,t,s=r[1].title+"",i,a,_,g;function S(n,h){return n[1].shortDescription?N:L}let b=S(r),c=b(r);return{c(){e=p("a"),l=p("div"),t=p("h3"),i=y(s),a=$(),c.c(),_=$(),this.h()},l(n){e=d(n,"A",{href:!0,class:!0});var h=v(e);l=d(h,"DIV",{class:!0});var m=v(l);t=d(m,"H3",{class:!0});var D=v(t);i=B(D,s),D.forEach(o),a=w(m),c.l(m),_=w(m),m.forEach(o),h.forEach(o),this.h()},h(){f(t,"class","svelte-1h0h81l"),f(l,"class","svelte-1h0h81l"),f(e,"href",g=`${C}/posts/${r[1].id}`),f(e,"class","svelte-1h0h81l")},m(n,h){E(n,e,h),u(e,l),u(l,t),u(t,i),u(l,a),c.m(l,null),u(l,_)},p(n,h){h&1&&s!==(s=n[1].title+"")&&j(i,s),b===(b=S(n))&&c?c.p(n,h):(c.d(1),c=b(n),c&&(c.c(),c.m(l,_))),h&1&&g!==(g=`${C}/posts/${n[1].id}`)&&f(e,"href",g)},d(n){n&&o(e),c.d()}}}function O(r){let e,l=r[0],t=[];for(let s=0;s<l.length;s+=1)t[s]=P(I(r,l,s));return{c(){e=p("section");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=d(s,"SECTION",{class:!0});var i=v(e);for(let a=0;a<t.length;a+=1)t[a].l(i);i.forEach(o),this.h()},h(){f(e,"class","svelte-1h0h81l")},m(s,i){E(s,e,i);for(let a=0;a<t.length;a+=1)t[a].m(e,null)},p(s,[i]){if(i&1){l=s[0];let a;for(a=0;a<l.length;a+=1){const _=I(s,l,a);t[a]?t[a].p(_,i):(t[a]=P(_),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=l.length}},i:k,o:k,d(s){s&&o(e),J(t,s)}}}function T(r,e,l){let{posts:t}=e;return r.$$set=s=>{"posts"in s&&l(0,t=s.posts)},[t]}class F extends q{constructor(e){super(),A(this,e,T,O,H,{posts:0})}}export{F as B};