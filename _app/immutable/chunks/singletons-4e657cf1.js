import{A as f,s as g}from"./index-9937773f.js";const u=[];function b(t,s=f){let e;const o=new Set;function n(r){if(g(t,r)&&(t=r,e)){const c=!u.length;for(const i of o)i[1](),u.push(i,t);if(c){for(let i=0;i<u.length;i+=2)u[i][0](u[i+1]);u.length=0}}}function l(r){n(r(t))}function a(r,c=f){const i=[r,c];return o.add(i),o.size===1&&(e=s(n)||f),r(t),()=>{o.delete(i),o.size===0&&(e(),e=null)}}return{set:n,update:l,subscribe:a}}let d="",h="";function k(t){d=t.base,h=t.assets||d}function w(t){let s=t.baseURI;if(!s){const e=t.getElementsByTagName("base");s=e.length?e[0].href:t.URL}return s}function A(){return{x:pageXOffset,y:pageYOffset}}function U(t){let s;const e={noscroll:null,prefetch:null,reload:null};for(const n of t.composedPath())n instanceof Element&&(!s&&n.nodeName.toUpperCase()==="A"&&(s=n),e.noscroll===null&&(e.noscroll=n.getAttribute("data-sveltekit-noscroll")),e.prefetch===null&&(e.prefetch=n.getAttribute("data-sveltekit-prefetch")),e.reload===null&&(e.reload=n.getAttribute("data-sveltekit-reload")));const o=s&&new URL(s instanceof SVGAElement?s.href.baseVal:s.href,document.baseURI);return{a:s,url:o,options:e}}function p(t){const s=b(t);let e=!0;function o(){e=!0,s.update(a=>a)}function n(a){e=!1,s.set(a)}function l(a){let r;return s.subscribe(c=>{(r===void 0||e&&c!==r)&&a(r=c)})}return{notify:o,set:n,subscribe:l}}function m(){const{set:t,subscribe:s}=b(!1);let e;async function o(){clearTimeout(e);const n=await fetch(`${h}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(n.ok){const{version:l}=await n.json(),a=l!=="1664406228632";return a&&(t(!0),clearTimeout(e)),a}else throw new Error(`Version check failed: ${n.status}`)}return{subscribe:s,check:o}}function y(t){t.client}const R={url:p({}),page:p({}),navigating:b(null),updated:m()};export{A as a,k as b,d as c,h as d,U as f,w as g,y as i,R as s,b as w};