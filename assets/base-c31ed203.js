import{i as y,h as m,d as V,N as h,r as O,g as w,e as b,f as B}from"./index-42a3b3d9.js";function C(s){for(var e=-1,n=s==null?0:s.length,o={};++e<n;){var r=s[e];o[r[0]]=r[1]}return o}const N="__epPropKey",A=s=>s,I=s=>y(s)&&!!s[N],K=(s,e)=>{if(!y(s)||I(s))return s;const{values:n,required:o,default:r,type:l,validator:v}=s,$={type:l,required:!!o,validator:n||v?d=>{let u=!1,f=[];if(n&&(f=Array.from(n),m(s,"default")&&f.push(r),u||(u=f.includes(d))),v&&(u||(u=v(d))),!u&&f.length>0){const p=[...new Set(f)].map(g=>JSON.stringify(g)).join(", ");V(`Invalid prop: validation failed${e?` for prop "${e}"`:""}. Expected one of [${p}], got value ${JSON.stringify(d)}.`)}return u}:void 0,[N]:!0};return m(s,"default")&&($.default=r),$},G=s=>C(Object.entries(s).map(([e,n])=>[e,K(n,e)])),x=(s,e)=>{if(s.install=n=>{for(const o of[s,...Object.values(e??{})])n.component(o.name,o)},e)for(const[n,o]of Object.entries(e))s[n]=o;return s},z=s=>(s.install=h,s),j=Symbol(),_=O();function q(s,e=void 0){const n=w()?b(j,_):_;return s?B(()=>{var o,r;return(r=(o=n.value)==null?void 0:o[s])!=null?r:e}):n}const E="el",J="is-",i=(s,e,n,o,r)=>{let l=`${s}-${e}`;return n&&(l+=`-${n}`),o&&(l+=`__${o}`),r&&(l+=`--${r}`),l},D=s=>{const e=q("namespace",E);return{namespace:e,b:(t="")=>i(e.value,s,t,"",""),e:t=>t?i(e.value,s,"",t,""):"",m:t=>t?i(e.value,s,"","",t):"",be:(t,a)=>t&&a?i(e.value,s,t,a,""):"",em:(t,a)=>t&&a?i(e.value,s,"",t,a):"",bm:(t,a)=>t&&a?i(e.value,s,t,"",a):"",bem:(t,a,c)=>t&&a&&c?i(e.value,s,t,a,c):"",is:(t,...a)=>{const c=a.length>=1?a[0]:!0;return t&&c?`${J}${t}`:""},cssVar:t=>{const a={};for(const c in t)t[c]&&(a[`--${e.value}-${c}`]=t[c]);return a},cssVarName:t=>`--${e.value}-${t}`,cssVarBlock:t=>{const a={};for(const c in t)t[c]&&(a[`--${e.value}-${s}-${c}`]=t[c]);return a},cssVarBlockName:t=>`--${e.value}-${s}-${t}`}};var F=(s,e)=>{const n=s.__vccOpts||s;for(const[o,r]of e)n[o]=r;return n};export{F as _,G as a,K as b,D as c,A as d,z as e,E as f,C as g,q as u,x as w};
