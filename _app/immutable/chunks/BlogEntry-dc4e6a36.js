import{S as H,i as L,s as M,k as $,q as b,a as A,v as N,l as g,m as k,r as w,h as _,c as C,w as P,b as E,F as h,x as R,u as I,f as T,t as z,y as D}from"./index-9937773f.js";import{S as G}from"./SvelteMarkdown-d5e8a0cd.js";import{a as J}from"./index-05d4e0fb.js";function K(r){var S,B,F;let a,o=r[0].title+"",l,m,t,c,v,p=((F=(B=r[0].authorFallback)!=null?B:(S=r[0].authors)==null?void 0:S.map(r[1]).join(", "))!=null?F:"?")+"",d,y,s,f;return s=new G({props:{source:r[0].body}}),{c(){a=$("h2"),l=b(o),m=A(),t=$("article"),c=$("p"),v=b("geschrieben von "),d=b(p),y=A(),N(s.$$.fragment)},l(e){a=g(e,"H2",{});var n=k(a);l=w(n,o),n.forEach(_),m=C(e),t=g(e,"ARTICLE",{});var i=k(t);c=g(i,"P",{});var u=k(c);v=w(u,"geschrieben von "),d=w(u,p),u.forEach(_),y=C(i),P(s.$$.fragment,i),i.forEach(_)},m(e,n){E(e,a,n),h(a,l),E(e,m,n),E(e,t,n),h(t,c),h(c,v),h(c,d),h(t,y),R(s,t,null),f=!0},p(e,[n]){var u,j,q;(!f||n&1)&&o!==(o=e[0].title+"")&&I(l,o),(!f||n&1)&&p!==(p=((q=(j=e[0].authorFallback)!=null?j:(u=e[0].authors)==null?void 0:u.map(e[1]).join(", "))!=null?q:"?")+"")&&I(d,p);const i={};n&1&&(i.source=e[0].body),s.$set(i)},i(e){f||(T(s.$$.fragment,e),f=!0)},o(e){z(s.$$.fragment,e),f=!1},d(e){e&&_(a),e&&_(m),e&&_(t),D(s)}}}function O(r,a,o){let{entry:l}=a;const m=t=>J(t);return r.$$set=t=>{"entry"in t&&o(0,l=t.entry)},[l,m]}class W extends H{constructor(a){super(),L(this,a,O,K,M,{entry:0})}}export{W as B};