import{S as j,i as K,s as N,k as d,a as E,l as v,m as $,h as _,c as I,n as o,b as k,F as b,A as S,q as T,r as M,K as A,u as G,v as H,H as W,w as V,x as q,f as P,t as D,y as B,g as Y,d as J,O as Q}from"../../../chunks/index-9937773f.js";import{c as z,d as X}from"../../../chunks/singletons-70ef0c12.js";import{H as x}from"../../../chunks/HeaderImage-a9fb14ec.js";import{P as ee}from"../../../chunks/PageWithNavigation-18233427.js";import"../../../chunks/stores-d83a6463.js";const te=""+new URL("../../../assets/placeholder-a0e54e25.svg",import.meta.url).href;function le(n){let e,l,s;return{c(){e=d("img"),this.h()},l(t){e=v(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){A(e.src,l=te)||o(e,"src",l),o(e,"alt",s="Platzhalter f\xFCr "+n[0].name),o(e,"class","svelte-1gopn5p")},m(t,a){k(t,e,a)},p(t,a){a&1&&s!==(s="Platzhalter f\xFCr "+t[0].name)&&o(e,"alt",s)},d(t){t&&_(e)}}}function ae(n){let e,l,s;return{c(){e=d("img"),this.h()},l(t){e=v(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){A(e.src,l=n[1]+"/"+n[0].image.pathInAssets)||o(e,"src",l),o(e,"alt",s=n[0].name),o(e,"class","svelte-1gopn5p")},m(t,a){k(t,e,a)},p(t,a){a&1&&!A(e.src,l=t[1]+"/"+t[0].image.pathInAssets)&&o(e,"src",l),a&1&&s!==(s=t[0].name)&&o(e,"alt",s)},d(t){t&&_(e)}}}function se(n){let e,l=n[0].name+"",s;return{c(){e=d("h3"),s=T(l),this.h()},l(t){e=v(t,"H3",{class:!0});var a=$(e);s=M(a,l),a.forEach(_),this.h()},h(){o(e,"class","svelte-1gopn5p")},m(t,a){k(t,e,a),b(e,s)},p(t,a){a&1&&l!==(l=t[0].name+"")&&G(s,l)},d(t){t&&_(e)}}}function re(n){let e,l,s=n[0].name+"",t,a;return{c(){e=d("a"),l=d("h3"),t=T(s),this.h()},l(r){e=v(r,"A",{href:!0,class:!0});var c=$(e);l=v(c,"H3",{class:!0});var u=$(l);t=M(u,s),u.forEach(_),c.forEach(_),this.h()},h(){o(l,"class","svelte-1gopn5p"),o(e,"href",a=n[0].homepage),o(e,"class","svelte-1gopn5p")},m(r,c){k(r,e,c),b(e,l),b(l,t)},p(r,c){c&1&&s!==(s=r[0].name+"")&&G(t,s),c&1&&a!==(a=r[0].homepage)&&o(e,"href",a)},d(r){r&&_(e)}}}function ie(n){let e,l,s=n[0].name+"",t,a;return{c(){e=d("a"),l=d("h3"),t=T(s),this.h()},l(r){e=v(r,"A",{href:!0,class:!0});var c=$(e);l=v(c,"H3",{class:!0});var u=$(l);t=M(u,s),u.forEach(_),c.forEach(_),this.h()},h(){o(l,"class","svelte-1gopn5p"),o(e,"href",a=z+"/acts/"+n[0].id),o(e,"class","svelte-1gopn5p")},m(r,c){k(r,e,c),b(e,l),b(l,t)},p(r,c){c&1&&s!==(s=r[0].name+"")&&G(t,s),c&1&&a!==(a=z+"/acts/"+r[0].id)&&o(e,"href",a)},d(r){r&&_(e)}}}function ne(n){let e,l,s,t,a,r=n[0].homepage&&L(n),c=n[0].facebook&&U(n),u=n[0].instagram&&C(n),g=n[0].twitter&&R(n),f=n[0].youTube&&F(n);return{c(){e=d("div"),r&&r.c(),l=E(),c&&c.c(),s=E(),u&&u.c(),t=E(),g&&g.c(),a=E(),f&&f.c(),this.h()},l(m){e=v(m,"DIV",{class:!0});var i=$(e);r&&r.l(i),l=I(i),c&&c.l(i),s=I(i),u&&u.l(i),t=I(i),g&&g.l(i),a=I(i),f&&f.l(i),i.forEach(_),this.h()},h(){o(e,"class","socials svelte-1gopn5p")},m(m,i){k(m,e,i),r&&r.m(e,null),b(e,l),c&&c.m(e,null),b(e,s),u&&u.m(e,null),b(e,t),g&&g.m(e,null),b(e,a),f&&f.m(e,null)},p(m,i){m[0].homepage?r?r.p(m,i):(r=L(m),r.c(),r.m(e,l)):r&&(r.d(1),r=null),m[0].facebook?c?c.p(m,i):(c=U(m),c.c(),c.m(e,s)):c&&(c.d(1),c=null),m[0].instagram?u?u.p(m,i):(u=C(m),u.c(),u.m(e,t)):u&&(u.d(1),u=null),m[0].twitter?g?g.p(m,i):(g=R(m),g.c(),g.m(e,a)):g&&(g.d(1),g=null),m[0].youTube?f?f.p(m,i):(f=F(m),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},d(m){m&&_(e),r&&r.d(),c&&c.d(),u&&u.d(),g&&g.d(),f&&f.d()}}}function L(n){let e,l,s;return{c(){e=d("a"),l=T(n[3]),this.h()},l(t){e=v(t,"A",{rel:!0,href:!0,class:!0});var a=$(e);l=M(a,n[3]),a.forEach(_),this.h()},h(){o(e,"rel","external"),o(e,"href",s=n[0].homepage),o(e,"class","svelte-1gopn5p")},m(t,a){k(t,e,a),b(e,l)},p(t,a){a&1&&s!==(s=t[0].homepage)&&o(e,"href",s)},d(t){t&&_(e)}}}function U(n){let e,l,s,t;return{c(){e=d("a"),l=d("img"),this.h()},l(a){e=v(a,"A",{rel:!0,href:!0,class:!0});var r=$(e);l=v(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(_),this.h()},h(){A(l.src,s=z+"/socials/f_logo_RGB-Black_1024.svg")||o(l,"src",s),o(l,"alt","Facebook"),o(l,"class","svelte-1gopn5p"),o(e,"rel","external"),o(e,"href",t=n[0].facebook),o(e,"class","svelte-1gopn5p")},m(a,r){k(a,e,r),b(e,l)},p(a,r){r&1&&t!==(t=a[0].facebook)&&o(e,"href",t)},d(a){a&&_(e)}}}function C(n){let e,l,s,t;return{c(){e=d("a"),l=d("img"),this.h()},l(a){e=v(a,"A",{rel:!0,href:!0,class:!0});var r=$(e);l=v(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(_),this.h()},h(){A(l.src,s=z+"/socials/glyph-logo_May2016.svg")||o(l,"src",s),o(l,"alt","Instagram"),o(l,"class","svelte-1gopn5p"),o(e,"rel","external"),o(e,"href",t=n[0].instagram),o(e,"class","svelte-1gopn5p")},m(a,r){k(a,e,r),b(e,l)},p(a,r){r&1&&t!==(t=a[0].instagram)&&o(e,"href",t)},d(a){a&&_(e)}}}function R(n){let e,l,s,t;return{c(){e=d("a"),l=d("img"),this.h()},l(a){e=v(a,"A",{rel:!0,href:!0,class:!0});var r=$(e);l=v(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(_),this.h()},h(){A(l.src,s=z+"/socials/twitter-2021-black.svg")||o(l,"src",s),o(l,"alt","Twitter"),o(l,"class","svelte-1gopn5p"),o(e,"rel","external"),o(e,"href",t=n[0].twitter),o(e,"class","svelte-1gopn5p")},m(a,r){k(a,e,r),b(e,l)},p(a,r){r&1&&t!==(t=a[0].twitter)&&o(e,"href",t)},d(a){a&&_(e)}}}function F(n){let e,l,s,t;return{c(){e=d("a"),l=d("img"),this.h()},l(a){e=v(a,"A",{rel:!0,href:!0,class:!0});var r=$(e);l=v(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(_),this.h()},h(){A(l.src,s=z+"/socials/yt_icon_mono_light.svg")||o(l,"src",s),o(l,"alt","YouTube"),o(l,"class","svelte-1gopn5p"),o(e,"rel","external"),o(e,"href",t=n[0].youTube),o(e,"class","svelte-1gopn5p")},m(a,r){k(a,e,r),b(e,l)},p(a,r){r&1&&t!==(t=a[0].youTube)&&o(e,"href",t)},d(a){a&&_(e)}}}function oe(n){let e,l,s,t,a;function r(h,p){return h[0].image?ae:le}let c=r(n),u=c(n);function g(h,p){return h[0].bio?ie:h[0].homepage?re:se}let f=g(n),m=f(n),i=n[2]&&ne(n);return{c(){e=d("div"),l=d("div"),u.c(),s=E(),t=d("div"),m.c(),a=E(),i&&i.c(),this.h()},l(h){e=v(h,"DIV",{class:!0});var p=$(e);l=v(p,"DIV",{class:!0});var w=$(l);u.l(w),w.forEach(_),s=I(p),t=v(p,"DIV",{class:!0});var y=$(t);m.l(y),a=I(y),i&&i.l(y),y.forEach(_),p.forEach(_),this.h()},h(){o(l,"class","image svelte-1gopn5p"),o(t,"class","content svelte-1gopn5p"),o(e,"class","card svelte-1gopn5p")},m(h,p){k(h,e,p),b(e,l),u.m(l,null),b(e,s),b(e,t),m.m(t,null),b(t,a),i&&i.m(t,null)},p(h,[p]){c===(c=r(h))&&u?u.p(h,p):(u.d(1),u=c(h),u&&(u.c(),u.m(l,null))),f===(f=g(h))&&m?m.p(h,p):(m.d(1),m=f(h),m&&(m.c(),m.m(t,a))),h[2]&&i.p(h,p)},i:S,o:S,d(h){h&&_(e),u.d(),m.d(),i&&i.d()}}}function ce(n,e,l){var u,g;let{act:s}=e;const t=`${X}/images/from-db`,a=!!((g=(u=s.instagram)!=null?u:s.twitter)!=null?g:s.youTube),r=["\u{1F30E}","\u{1F30D}","\u{1F30F}"],c=r[Math.floor((new Date().getTimezoneOffset()/60+12)/(24/r.length))%r.length];return n.$$set=f=>{"act"in f&&l(0,s=f.act)},[s,t,a,c]}class fe extends j{constructor(e){super(),K(this,e,ce,oe,N,{act:0})}}const ue=""+new URL("../../../assets/acts-128f8d37.jpg",import.meta.url).href;function O(n,e,l){const s=n.slice();return s[2]=e[l],s}function Z(n){let e,l,s;return l=new fe({props:{act:n[2]}}),{c(){e=d("li"),H(l.$$.fragment),this.h()},l(t){e=v(t,"LI",{class:!0});var a=$(e);V(l.$$.fragment,a),a.forEach(_),this.h()},h(){o(e,"class","svelte-zpz6rr")},m(t,a){k(t,e,a),q(l,e,null),s=!0},p:S,i(t){s||(P(l.$$.fragment,t),s=!0)},o(t){D(l.$$.fragment,t),s=!1},d(t){t&&_(e),B(l)}}}function he(n){let e,l,s,t,a,r,c,u,g=n[0],f=[];for(let i=0;i<g.length;i+=1)f[i]=Z(O(n,g,i));const m=i=>D(f[i],1,1,()=>{f[i]=null});return{c(){e=d("p"),l=T("Diese Poetry Slammer:Innen sind unter anderem bereits beim SprechAkt aufgetreten:"),s=E(),t=d("h2"),a=T("Von A bis Z"),r=E(),c=d("ul");for(let i=0;i<f.length;i+=1)f[i].c();this.h()},l(i){e=v(i,"P",{});var h=$(e);l=M(h,"Diese Poetry Slammer:Innen sind unter anderem bereits beim SprechAkt aufgetreten:"),h.forEach(_),s=I(i),t=v(i,"H2",{});var p=$(t);a=M(p,"Von A bis Z"),p.forEach(_),r=I(i),c=v(i,"UL",{class:!0});var w=$(c);for(let y=0;y<f.length;y+=1)f[y].l(w);w.forEach(_),this.h()},h(){o(c,"class","svelte-zpz6rr")},m(i,h){k(i,e,h),b(e,l),k(i,s,h),k(i,t,h),b(t,a),k(i,r,h),k(i,c,h);for(let p=0;p<f.length;p+=1)f[p].m(c,null);u=!0},p(i,h){if(h&1){g=i[0];let p;for(p=0;p<g.length;p+=1){const w=O(i,g,p);f[p]?(f[p].p(w,h),P(f[p],1)):(f[p]=Z(w),f[p].c(),P(f[p],1),f[p].m(c,null))}for(Y(),p=g.length;p<f.length;p+=1)m(p);J()}},i(i){if(!u){for(let h=0;h<g.length;h+=1)P(f[h]);u=!0}},o(i){f=f.filter(Boolean);for(let h=0;h<f.length;h+=1)D(f[h]);u=!1},d(i){i&&_(e),i&&_(s),i&&_(t),i&&_(r),i&&_(c),Q(f,i)}}}function _e(n){let e,l;return e=new x({props:{slot:"header",alt:"Poet:Innen",imageUrl:ue}}),{c(){H(e.$$.fragment)},l(s){V(e.$$.fragment,s)},m(s,t){q(e,s,t),l=!0},p:S,i(s){l||(P(e.$$.fragment,s),l=!0)},o(s){D(e.$$.fragment,s),l=!1},d(s){B(e,s)}}}function me(n){let e,l,s,t;return s=new ee({props:{$$slots:{header:[_e],default:[he]},$$scope:{ctx:n}}}),{c(){e=d("meta"),l=E(),H(s.$$.fragment),this.h()},l(a){const r=W('[data-svelte="svelte-14ky2cy"]',document.head);e=v(r,"META",{name:!0,content:!0}),r.forEach(_),l=I(a),V(s.$$.fragment,a),this.h()},h(){document.title="Poet:Innen",o(e,"name","description"),o(e,"content","Poet:Innen der vergangenen Slams, sofern sie aufgelistet werden m\xF6chten")},m(a,r){b(document.head,e),k(a,l,r),q(s,a,r),t=!0},p(a,[r]){const c={};r&32&&(c.$$scope={dirty:r,ctx:a}),s.$set(c)},i(a){t||(P(s.$$.fragment,a),t=!0)},o(a){D(s.$$.fragment,a),t=!1},d(a){_(e),a&&_(l),B(s,a)}}}function pe(n,e,l){let{data:s}=e;const t=s.acts;return n.$$set=a=>{"data"in a&&l(1,s=a.data)},[t,s]}class $e extends j{constructor(e){super(),K(this,e,pe,me,N,{data:1})}}export{$e as default};
