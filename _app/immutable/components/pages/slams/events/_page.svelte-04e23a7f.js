import{S as Z,i as x,s as ee,k as d,l as p,m as v,h as f,n as m,b as k,f as w,g as te,d as se,t as D,R as ne,w as q,x as H,y,z as C,q as S,a as A,r as z,c as P,J as u,u as B,B as O,L as re}from"../../../../chunks/index-5a7f2d14.js";import{a as j,i as J,e as R,d as ae}from"../../../../chunks/slams-043ad4bc.js";import{j as G}from"../../../../chunks/singletons-898fd478.js";import{W as le}from"../../../../chunks/WideCard-76d64937.js";import{H as oe}from"../../../../chunks/HeaderImage-847b430d.js";import{i as ie}from"../../../../chunks/events-37fca14d.js";import{P as ce}from"../../../../chunks/PageWithNavigation-806c05a9.js";function Q(c,e,n){const t=c.slice();return t[1]=e[n],t}function fe(c){let e,n;return{c(){e=d("p"),n=S("Ein weiterer Slam"),this.h()},l(t){e=p(t,"P",{class:!0});var s=v(e);n=z(s,"Ein weiterer Slam"),s.forEach(f),this.h()},h(){m(e,"class","svelte-16ikqr1")},m(t,s){k(t,e,s),u(e,n)},p:O,d(t){t&&f(e)}}}function he(c){let e,n=c[1].shortDescription+"",t;return{c(){e=d("p"),t=S(n),this.h()},l(s){e=p(s,"P",{class:!0});var a=v(e);t=z(a,n),a.forEach(f),this.h()},h(){m(e,"class","svelte-16ikqr1")},m(s,a){k(s,e,a),u(e,t)},p(s,a){a&1&&n!==(n=s[1].shortDescription+"")&&B(t,n)},d(s){s&&f(e)}}}function ue(c){let e,n=c[1].name+"",t,s,a=j(c[1])+"",r,o,l;function E(i,h){return i[1].shortDescription?he:fe}let $=E(c),_=$(c);return{c(){e=d("h3"),t=S(n),s=S(" am "),r=S(a),o=A(),_.c(),l=A(),this.h()},l(i){e=p(i,"H3",{class:!0});var h=v(e);t=z(h,n),s=z(h," am "),r=z(h,a),h.forEach(f),o=P(i),_.l(i),l=P(i),this.h()},h(){m(e,"class","svelte-16ikqr1")},m(i,h){k(i,e,h),u(e,t),u(e,s),u(e,r),k(i,o,h),_.m(i,h),k(i,l,h)},p(i,h){h&1&&n!==(n=i[1].name+"")&&B(t,n),h&1&&a!==(a=j(i[1])+"")&&B(r,a),$===($=E(i))&&_?_.p(i,h):(_.d(1),_=$(i),_&&(_.c(),_.m(l.parentNode,l)))},d(i){i&&f(e),i&&f(o),_.d(i),i&&f(l)}}}function X(c){let e,n,t,s;return n=new le({props:{$$slots:{default:[ue]},$$scope:{ctx:c}}}),{c(){e=d("a"),q(n.$$.fragment),this.h()},l(a){e=p(a,"A",{href:!0,class:!0});var r=v(e);H(n.$$.fragment,r),r.forEach(f),this.h()},h(){m(e,"href",t=`${G}/slams/events/${c[1].id}`),m(e,"class","svelte-16ikqr1")},m(a,r){k(a,e,r),y(n,e,null),s=!0},p(a,r){const o={};r&17&&(o.$$scope={dirty:r,ctx:a}),n.$set(o),(!s||r&1&&t!==(t=`${G}/slams/events/${a[1].id}`))&&m(e,"href",t)},i(a){s||(w(n.$$.fragment,a),s=!0)},o(a){D(n.$$.fragment,a),s=!1},d(a){a&&f(e),C(n)}}}function me(c){let e,n,t=c[0],s=[];for(let r=0;r<t.length;r+=1)s[r]=X(Q(c,t,r));const a=r=>D(s[r],1,1,()=>{s[r]=null});return{c(){e=d("section");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=p(r,"SECTION",{class:!0});var o=v(e);for(let l=0;l<s.length;l+=1)s[l].l(o);o.forEach(f),this.h()},h(){m(e,"class","svelte-16ikqr1")},m(r,o){k(r,e,o);for(let l=0;l<s.length;l+=1)s[l].m(e,null);n=!0},p(r,[o]){if(o&1){t=r[0];let l;for(l=0;l<t.length;l+=1){const E=Q(r,t,l);s[l]?(s[l].p(E,o),w(s[l],1)):(s[l]=X(E),s[l].c(),w(s[l],1),s[l].m(e,null))}for(te(),l=t.length;l<s.length;l+=1)a(l);se()}},i(r){if(!n){for(let o=0;o<t.length;o+=1)w(s[o]);n=!0}},o(r){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)D(s[o]);n=!1},d(r){r&&f(e),ne(s,r)}}}function _e(c,e,n){let{events:t}=e;return c.$$set=s=>{"events"in s&&n(0,t=s.events)},[t]}class Y extends Z{constructor(e){super(),x(this,e,_e,me,ee,{events:0})}}function de(c,e){let n=0;for(;n<c.length&&e(c[n]);)n++;return c.slice(0,n)}function pe(c){let e,n,t,s,a,r,o,l,E,$,_,i,h,M,W,T,I;return $=new Y({props:{events:c[1]}}),T=new Y({props:{events:c[0]}}),{c(){e=d("div"),n=d("section"),t=d("p"),s=S(`Der SprechAkt findet regelmäßig alle zwei Monate donnerstags in der Alten Kaserne statt.
				Daneben gibt es ab und zu Lesungen und Themenslams in anderen Locations wie Bücher Pustet
				oder der VHS Moosburg.`),a=A(),r=d("section"),o=d("h2"),l=S("Anstehende Termine"),E=A(),q($.$$.fragment),_=A(),i=d("section"),h=d("h2"),M=S("Frühere Termine"),W=A(),q(T.$$.fragment),this.h()},l(g){e=p(g,"DIV",{class:!0});var b=v(e);n=p(b,"SECTION",{class:!0});var V=v(n);t=p(V,"P",{class:!0});var F=v(t);s=z(F,`Der SprechAkt findet regelmäßig alle zwei Monate donnerstags in der Alten Kaserne statt.
				Daneben gibt es ab und zu Lesungen und Themenslams in anderen Locations wie Bücher Pustet
				oder der VHS Moosburg.`),F.forEach(f),V.forEach(f),a=P(b),r=p(b,"SECTION",{class:!0});var N=v(r);o=p(N,"H2",{class:!0});var K=v(o);l=z(K,"Anstehende Termine"),K.forEach(f),E=P(N),H($.$$.fragment,N),N.forEach(f),_=P(b),i=p(b,"SECTION",{class:!0});var L=v(i);h=p(L,"H2",{class:!0});var U=v(h);M=z(U,"Frühere Termine"),U.forEach(f),W=P(L),H(T.$$.fragment,L),L.forEach(f),b.forEach(f),this.h()},h(){m(t,"class","svelte-5z2mae"),m(n,"class","svelte-5z2mae"),m(o,"class","svelte-5z2mae"),m(r,"class","svelte-5z2mae"),m(h,"class","svelte-5z2mae"),m(i,"class","svelte-5z2mae"),m(e,"class","svelte-5z2mae")},m(g,b){k(g,e,b),u(e,n),u(n,t),u(t,s),u(e,a),u(e,r),u(r,o),u(o,l),u(r,E),y($,r,null),u(e,_),u(e,i),u(i,h),u(h,M),u(i,W),y(T,i,null),I=!0},p:O,i(g){I||(w($.$$.fragment,g),w(T.$$.fragment,g),I=!0)},o(g){D($.$$.fragment,g),D(T.$$.fragment,g),I=!1},d(g){g&&f(e),C($),C(T)}}}function $e(c){let e,n;return e=new oe({props:{slot:"header",alt:"Unsere Termine",imageUrl:ie}}),{c(){q(e.$$.fragment)},l(t){H(e.$$.fragment,t)},m(t,s){y(e,t,s),n=!0},p:O,i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function ve(c){let e,n,t,s;return t=new ce({props:{$$slots:{header:[$e],default:[pe]},$$scope:{ctx:c}}}),{c(){e=d("meta"),n=A(),q(t.$$.fragment),this.h()},l(a){const r=re("svelte-14y7817",document.head);e=p(r,"META",{name:!0,content:!0}),r.forEach(f),n=P(a),H(t.$$.fragment,a),this.h()},h(){document.title="SprechAkt",m(e,"name","description"),m(e,"content","Vergangene Poetry Slam Events des SprechAkts")},m(a,r){u(document.head,e),k(a,n,r),y(t,a,r),s=!0},p(a,[r]){const o={};r&4&&(o.$$scope={dirty:r,ctx:a}),t.$set(o)},i(a){s||(w(t.$$.fragment,a),s=!0)},o(a){D(t.$$.fragment,a),s=!1},d(a){f(e),a&&f(n),C(t,a)}}}function ge(c){const e=de(R,J),n=ae(R,J);return[e,n]}class Ae extends Z{constructor(e){super(),x(this,e,ge,ve,ee,{})}}export{Ae as default};