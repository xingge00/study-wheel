import{r as w,l as P,H as b,I as O,J as h,K as $,L as _,j as T,g as j,k as S,M as D,C as E}from"./index-021b1ded.js";var N=Object.defineProperty,x=Object.defineProperties,C=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,A=(e,t)=>{for(var r in t||(t={}))F.call(t,r)&&d(e,r,t[r]);if(p)for(var r of p(t))I.call(t,r)&&d(e,r,t[r]);return e},M=(e,t)=>x(e,C(t));function J(e,t){var r;const n=h();return $(()=>{n.value=e()},M(A({},t),{flush:(r=t==null?void 0:t.flush)!=null?r:"sync"})),_(n)}var m;const g=typeof window<"u",K=e=>typeof e=="boolean",L=e=>typeof e=="number",V=e=>typeof e=="string",v=()=>{};g&&((m=window==null?void 0:window.navigator)!=null&&m.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function f(e){return typeof e=="function"?e():T(e)}function R(e,t){function r(...n){return new Promise((o,s)=>{Promise.resolve(e(()=>t.apply(this,n),{fn:t,thisArg:this,args:n})).then(o).catch(s)})}return r}function U(e,t={}){let r,n,o=v;const s=i=>{clearTimeout(i),o(),o=v};return i=>{const u=f(e),a=f(t.maxWait);return r&&s(r),u<=0||a!==void 0&&a<=0?(n&&(s(n),n=null),Promise.resolve(i())):new Promise((c,y)=>{o=t.rejectOnCancel?y:c,a&&!n&&(n=setTimeout(()=>{r&&s(r),n=null,c(i())},a)),r=setTimeout(()=>{n&&s(n),n=null,c(i())},u)})}}function q(e){return e}function W(e){return b()?(O(e),!0):!1}function B(e,t=200,r={}){return R(U(t,r),e)}function z(e,t=200,r={}){const n=w(e.value),o=B(()=>{n.value=e.value},t,r);return P(e,()=>o()),n}function G(e,t=!0){j()?S(e):t?e():D(e)}function Q(e,t,r={}){const{immediate:n=!0}=r,o=w(!1);let s=null;function l(){s&&(clearTimeout(s),s=null)}function i(){o.value=!1,l()}function u(...a){l(),o.value=!0,s=setTimeout(()=>{o.value=!1,s=null,e(...a)},f(t))}return n&&(o.value=!0,g&&u()),W(i),{isPending:_(o),start:u,stop:i}}const X=e=>e===void 0,Y=e=>typeof Element>"u"?!1:e instanceof Element,Z=e=>E(e)?!Number.isNaN(Number(e)):!1;export{Z as a,g as b,X as c,K as d,Y as e,V as f,G as g,q as h,L as i,z as j,J as k,v as n,f as r,W as t,Q as u};