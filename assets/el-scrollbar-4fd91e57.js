import{i as tt,a as ee,g as q,r as R,b as rt,c as U,d as k,f as nt,e as K,L as ce,M as X,h as We,t as j,S as pe,j as at}from"./index-6f665135.js";import{a as te,u as st}from"./index-4c55bd7b.js";import{A as J,t as ot,r as A,v as M,a4 as it,x as ve,o as H,C as re,w as Fe,P as lt,L as ne,E as N,i as x,H as ae,a3 as ut,a5 as ct,c as Ge,b as me,F as ft,d as ge,n as ye,I as dt,J as pt,k as vt,W as mt,B as gt,D as yt,G as ht,m as bt}from"./index-c7143ee5.js";import{a as fe,c as Ke,_ as de,g as Xe,d as Tt,i as B,w as _t,m as wt}from"./base-c8c799aa.js";import{t as At}from"./event-e06a23af.js";import{f as he}from"./index-71da7e18.js";var St=/\s/;function Et(e){for(var t=e.length;t--&&St.test(e.charAt(t)););return t}var $t=/^\s+/;function xt(e){return e&&e.slice(0,Et(e)+1).replace($t,"")}var be=0/0,Ot=/^[-+]0x[0-9a-f]+$/i,Pt=/^0b[01]+$/i,Lt=/^0o[0-7]+$/i,Ct=parseInt;function Te(e){if(typeof e=="number")return e;if(tt(e))return be;if(ee(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=ee(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=xt(e);var r=Pt.test(e);return r||Lt.test(e)?Ct(e.slice(2),r?2:8):Ot.test(e)?be:+e}var Rt=q(R,"WeakMap");const se=Rt;var It=9007199254740991,Mt=/^(?:0|[1-9]\d*)$/;function jt(e,t){var r=typeof e;return t=t??It,!!t&&(r=="number"||r!="symbol"&&Mt.test(e))&&e>-1&&e%1==0&&e<t}var zt=9007199254740991;function Ye(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=zt}function Bt(e){return e!=null&&Ye(e.length)&&!rt(e)}var Ht=Object.prototype;function Nt(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Ht;return e===r}function Dt(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var Ut="[object Arguments]";function _e(e){return U(e)&&k(e)==Ut}var qe=Object.prototype,Wt=qe.hasOwnProperty,Ft=qe.propertyIsEnumerable,Gt=_e(function(){return arguments}())?_e:function(e){return U(e)&&Wt.call(e,"callee")&&!Ft.call(e,"callee")};const Kt=Gt;function Xt(){return!1}var ke=typeof exports=="object"&&exports&&!exports.nodeType&&exports,we=ke&&typeof module=="object"&&module&&!module.nodeType&&module,Yt=we&&we.exports===ke,Ae=Yt?R.Buffer:void 0,qt=Ae?Ae.isBuffer:void 0,kt=qt||Xt;const oe=kt;var Jt="[object Arguments]",Zt="[object Array]",Qt="[object Boolean]",Vt="[object Date]",er="[object Error]",tr="[object Function]",rr="[object Map]",nr="[object Number]",ar="[object Object]",sr="[object RegExp]",or="[object Set]",ir="[object String]",lr="[object WeakMap]",ur="[object ArrayBuffer]",cr="[object DataView]",fr="[object Float32Array]",dr="[object Float64Array]",pr="[object Int8Array]",vr="[object Int16Array]",mr="[object Int32Array]",gr="[object Uint8Array]",yr="[object Uint8ClampedArray]",hr="[object Uint16Array]",br="[object Uint32Array]",v={};v[fr]=v[dr]=v[pr]=v[vr]=v[mr]=v[gr]=v[yr]=v[hr]=v[br]=!0;v[Jt]=v[Zt]=v[ur]=v[Qt]=v[cr]=v[Vt]=v[er]=v[tr]=v[rr]=v[nr]=v[ar]=v[sr]=v[or]=v[ir]=v[lr]=!1;function Tr(e){return U(e)&&Ye(e.length)&&!!v[k(e)]}function _r(e){return function(t){return e(t)}}var Je=typeof exports=="object"&&exports&&!exports.nodeType&&exports,D=Je&&typeof module=="object"&&module&&!module.nodeType&&module,wr=D&&D.exports===Je,Z=wr&&nt.process,Ar=function(){try{var e=D&&D.require&&D.require("util").types;return e||Z&&Z.binding&&Z.binding("util")}catch{}}();const Se=Ar;var Ee=Se&&Se.isTypedArray,Sr=Ee?_r(Ee):Tr;const Ze=Sr;var Er=Object.prototype,$r=Er.hasOwnProperty;function xr(e,t){var r=K(e),n=!r&&Kt(e),i=!r&&!n&&oe(e),a=!r&&!n&&!i&&Ze(e),s=r||n||i||a,u=s?Dt(e.length,String):[],o=u.length;for(var d in e)(t||$r.call(e,d))&&!(s&&(d=="length"||i&&(d=="offset"||d=="parent")||a&&(d=="buffer"||d=="byteLength"||d=="byteOffset")||jt(d,o)))&&u.push(d);return u}function Or(e,t){return function(r){return e(t(r))}}var Pr=Or(Object.keys,Object);const Lr=Pr;var Cr=Object.prototype,Rr=Cr.hasOwnProperty;function Ir(e){if(!Nt(e))return Lr(e);var t=[];for(var r in Object(e))Rr.call(e,r)&&r!="constructor"&&t.push(r);return t}function Mr(e){return Bt(e)?xr(e):Ir(e)}function jr(e,t){for(var r=-1,n=t.length,i=e.length;++r<n;)e[i+r]=t[r];return e}function zr(){this.__data__=new ce,this.size=0}function Br(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}function Hr(e){return this.__data__.get(e)}function Nr(e){return this.__data__.has(e)}var Dr=200;function Ur(e,t){var r=this.__data__;if(r instanceof ce){var n=r.__data__;if(!X||n.length<Dr-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new We(n)}return r.set(e,t),this.size=r.size,this}function L(e){var t=this.__data__=new ce(e);this.size=t.size}L.prototype.clear=zr;L.prototype.delete=Br;L.prototype.get=Hr;L.prototype.has=Nr;L.prototype.set=Ur;function Wr(e,t){for(var r=-1,n=e==null?0:e.length,i=0,a=[];++r<n;){var s=e[r];t(s,r,e)&&(a[i++]=s)}return a}function Fr(){return[]}var Gr=Object.prototype,Kr=Gr.propertyIsEnumerable,$e=Object.getOwnPropertySymbols,Xr=$e?function(e){return e==null?[]:(e=Object(e),Wr($e(e),function(t){return Kr.call(e,t)}))}:Fr;const Yr=Xr;function qr(e,t,r){var n=t(e);return K(e)?n:jr(n,r(e))}function xe(e){return qr(e,Mr,Yr)}var kr=q(R,"DataView");const ie=kr;var Jr=q(R,"Promise");const le=Jr;var Zr=q(R,"Set");const ue=Zr;var Oe="[object Map]",Qr="[object Object]",Pe="[object Promise]",Le="[object Set]",Ce="[object WeakMap]",Re="[object DataView]",Vr=j(ie),en=j(X),tn=j(le),rn=j(ue),nn=j(se),C=k;(ie&&C(new ie(new ArrayBuffer(1)))!=Re||X&&C(new X)!=Oe||le&&C(le.resolve())!=Pe||ue&&C(new ue)!=Le||se&&C(new se)!=Ce)&&(C=function(e){var t=k(e),r=t==Qr?e.constructor:void 0,n=r?j(r):"";if(n)switch(n){case Vr:return Re;case en:return Oe;case tn:return Pe;case rn:return Le;case nn:return Ce}return t});const Ie=C;var an=R.Uint8Array;const Me=an;var sn="__lodash_hash_undefined__";function on(e){return this.__data__.set(e,sn),this}function ln(e){return this.__data__.has(e)}function Y(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new We;++t<r;)this.add(e[t])}Y.prototype.add=Y.prototype.push=on;Y.prototype.has=ln;function un(e,t){for(var r=-1,n=e==null?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}function cn(e,t){return e.has(t)}var fn=1,dn=2;function Qe(e,t,r,n,i,a){var s=r&fn,u=e.length,o=t.length;if(u!=o&&!(s&&o>u))return!1;var d=a.get(e),m=a.get(t);if(d&&m)return d==t&&m==e;var c=-1,p=!0,h=r&dn?new Y:void 0;for(a.set(e,t),a.set(t,e);++c<u;){var g=e[c],b=t[c];if(n)var w=s?n(b,g,c,t,e,a):n(g,b,c,e,t,a);if(w!==void 0){if(w)continue;p=!1;break}if(h){if(!un(t,function(T,_){if(!cn(h,_)&&(g===T||i(g,T,r,n,a)))return h.push(_)})){p=!1;break}}else if(!(g===b||i(g,b,r,n,a))){p=!1;break}}return a.delete(e),a.delete(t),p}function pn(e){var t=-1,r=Array(e.size);return e.forEach(function(n,i){r[++t]=[i,n]}),r}function vn(e){var t=-1,r=Array(e.size);return e.forEach(function(n){r[++t]=n}),r}var mn=1,gn=2,yn="[object Boolean]",hn="[object Date]",bn="[object Error]",Tn="[object Map]",_n="[object Number]",wn="[object RegExp]",An="[object Set]",Sn="[object String]",En="[object Symbol]",$n="[object ArrayBuffer]",xn="[object DataView]",je=pe?pe.prototype:void 0,Q=je?je.valueOf:void 0;function On(e,t,r,n,i,a,s){switch(r){case xn:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case $n:return!(e.byteLength!=t.byteLength||!a(new Me(e),new Me(t)));case yn:case hn:case _n:return at(+e,+t);case bn:return e.name==t.name&&e.message==t.message;case wn:case Sn:return e==t+"";case Tn:var u=pn;case An:var o=n&mn;if(u||(u=vn),e.size!=t.size&&!o)return!1;var d=s.get(e);if(d)return d==t;n|=gn,s.set(e,t);var m=Qe(u(e),u(t),n,i,a,s);return s.delete(e),m;case En:if(Q)return Q.call(e)==Q.call(t)}return!1}var Pn=1,Ln=Object.prototype,Cn=Ln.hasOwnProperty;function Rn(e,t,r,n,i,a){var s=r&Pn,u=xe(e),o=u.length,d=xe(t),m=d.length;if(o!=m&&!s)return!1;for(var c=o;c--;){var p=u[c];if(!(s?p in t:Cn.call(t,p)))return!1}var h=a.get(e),g=a.get(t);if(h&&g)return h==t&&g==e;var b=!0;a.set(e,t),a.set(t,e);for(var w=s;++c<o;){p=u[c];var T=e[p],_=t[p];if(n)var O=s?n(_,T,p,t,e,a):n(T,_,p,e,t,a);if(!(O===void 0?T===_||i(T,_,r,n,a):O)){b=!1;break}w||(w=p=="constructor")}if(b&&!w){var E=e.constructor,S=t.constructor;E!=S&&"constructor"in e&&"constructor"in t&&!(typeof E=="function"&&E instanceof E&&typeof S=="function"&&S instanceof S)&&(b=!1)}return a.delete(e),a.delete(t),b}var In=1,ze="[object Arguments]",Be="[object Array]",G="[object Object]",Mn=Object.prototype,He=Mn.hasOwnProperty;function jn(e,t,r,n,i,a){var s=K(e),u=K(t),o=s?Be:Ie(e),d=u?Be:Ie(t);o=o==ze?G:o,d=d==ze?G:d;var m=o==G,c=d==G,p=o==d;if(p&&oe(e)){if(!oe(t))return!1;s=!0,m=!1}if(p&&!m)return a||(a=new L),s||Ze(e)?Qe(e,t,r,n,i,a):On(e,t,o,r,n,i,a);if(!(r&In)){var h=m&&He.call(e,"__wrapped__"),g=c&&He.call(t,"__wrapped__");if(h||g){var b=h?e.value():e,w=g?t.value():t;return a||(a=new L),i(b,w,r,n,a)}}return p?(a||(a=new L),Rn(e,t,r,n,i,a)):!1}function Ve(e,t,r,n,i){return e===t?!0:e==null||t==null||!U(e)&&!U(t)?e!==e&&t!==t:jn(e,t,r,n,Ve,i)}var zn=function(){return R.Date.now()};const V=zn;var Bn="Expected a function",Hn=Math.max,Nn=Math.min;function oa(e,t,r){var n,i,a,s,u,o,d=0,m=!1,c=!1,p=!0;if(typeof e!="function")throw new TypeError(Bn);t=Te(t)||0,ee(r)&&(m=!!r.leading,c="maxWait"in r,a=c?Hn(Te(r.maxWait)||0,t):a,p="trailing"in r?!!r.trailing:p);function h(f){var l=n,y=i;return n=i=void 0,d=f,s=e.apply(y,l),s}function g(f){return d=f,u=setTimeout(T,t),m?h(f):s}function b(f){var l=f-o,y=f-d,$=t-l;return c?Nn($,a-y):$}function w(f){var l=f-o,y=f-d;return o===void 0||l>=t||l<0||c&&y>=a}function T(){var f=V();if(w(f))return _(f);u=setTimeout(T,b(f))}function _(f){return u=void 0,p&&n?h(f):(n=i=void 0,s)}function O(){u!==void 0&&clearTimeout(u),d=0,n=o=i=u=void 0}function E(){return u===void 0?s:_(V())}function S(){var f=V(),l=w(f);if(n=arguments,i=this,o=f,l){if(u===void 0)return g(o);if(c)return clearTimeout(u),u=setTimeout(T,t),h(o)}return u===void 0&&(u=setTimeout(T,t)),s}return S.cancel=O,S.flush=E,S}function ia(e,t){return Ve(e,t)}const et=Symbol("scrollbarContextKey"),I=4,Dn={vertical:{offset:"offsetHeight",scroll:"scrollTop",scrollSize:"scrollHeight",size:"height",key:"vertical",axis:"Y",client:"clientY",direction:"top"},horizontal:{offset:"offsetWidth",scroll:"scrollLeft",scrollSize:"scrollWidth",size:"width",key:"horizontal",axis:"X",client:"clientX",direction:"left"}},Un=({move:e,size:t,bar:r})=>({[r.size]:t,transform:`translate${r.axis}(${e}%)`}),Wn=fe({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),Fn="Thumb",Gn=J({__name:"thumb",props:Wn,setup(e){const t=e,r=ot(et),n=Ke("scrollbar");r||At(Fn,"can not inject scrollbar context");const i=A(),a=A(),s=A({}),u=A(!1);let o=!1,d=!1,m=Xe?document.onselectstart:null;const c=M(()=>Dn[t.vertical?"vertical":"horizontal"]),p=M(()=>Un({size:t.size,move:t.move,bar:c.value})),h=M(()=>i.value[c.value.offset]**2/r.wrapElement[c.value.scrollSize]/t.ratio/a.value[c.value.offset]),g=f=>{var l;if(f.stopPropagation(),f.ctrlKey||[1,2].includes(f.button))return;(l=window.getSelection())==null||l.removeAllRanges(),w(f);const y=f.currentTarget;y&&(s.value[c.value.axis]=y[c.value.offset]-(f[c.value.client]-y.getBoundingClientRect()[c.value.direction]))},b=f=>{if(!a.value||!i.value||!r.wrapElement)return;const l=Math.abs(f.target.getBoundingClientRect()[c.value.direction]-f[c.value.client]),y=a.value[c.value.offset]/2,$=(l-y)*100*h.value/i.value[c.value.offset];r.wrapElement[c.value.scroll]=$*r.wrapElement[c.value.scrollSize]/100},w=f=>{f.stopImmediatePropagation(),o=!0,document.addEventListener("mousemove",T),document.addEventListener("mouseup",_),m=document.onselectstart,document.onselectstart=()=>!1},T=f=>{if(!i.value||!a.value||o===!1)return;const l=s.value[c.value.axis];if(!l)return;const y=(i.value.getBoundingClientRect()[c.value.direction]-f[c.value.client])*-1,$=a.value[c.value.offset]-l,z=(y-$)*100*h.value/i.value[c.value.offset];r.wrapElement[c.value.scroll]=z*r.wrapElement[c.value.scrollSize]/100},_=()=>{o=!1,s.value[c.value.axis]=0,document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",_),S(),d&&(u.value=!1)},O=()=>{d=!1,u.value=!!t.size},E=()=>{d=!0,u.value=o};it(()=>{S(),document.removeEventListener("mouseup",_)});const S=()=>{document.onselectstart!==m&&(document.onselectstart=m)};return te(ve(r,"scrollbarElement"),"mousemove",O),te(ve(r,"scrollbarElement"),"mouseleave",E),(f,l)=>(H(),re(ct,{name:x(n).b("fade"),persisted:""},{default:Fe(()=>[lt(ne("div",{ref_key:"instance",ref:i,class:N([x(n).e("bar"),x(n).is(x(c).key)]),onMousedown:b},[ne("div",{ref_key:"thumb",ref:a,class:N(x(n).e("thumb")),style:ae(x(p)),onMousedown:g},null,38)],34),[[ut,f.always||u.value]])]),_:1},8,["name"]))}});var Ne=de(Gn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/thumb.vue"]]);const Kn=fe({always:{type:Boolean,default:!0},width:String,height:String,ratioX:{type:Number,default:1},ratioY:{type:Number,default:1}}),Xn=J({__name:"bar",props:Kn,setup(e,{expose:t}){const r=e,n=A(0),i=A(0);return t({handleScroll:s=>{if(s){const u=s.offsetHeight-I,o=s.offsetWidth-I;i.value=s.scrollTop*100/u*r.ratioY,n.value=s.scrollLeft*100/o*r.ratioX}}}),(s,u)=>(H(),Ge(ft,null,[me(Ne,{move:n.value,ratio:s.ratioX,size:s.width,always:s.always},null,8,["move","ratio","size","always"]),me(Ne,{move:i.value,ratio:s.ratioY,size:s.height,vertical:"",always:s.always},null,8,["move","ratio","size","always"])],64))}});var Yn=de(Xn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/bar.vue"]]);const qn=fe({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:Tt([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20}}),kn={scroll:({scrollTop:e,scrollLeft:t})=>[e,t].every(B)},Jn="ElScrollbar",Zn=J({name:Jn}),Qn=J({...Zn,props:qn,emits:kn,setup(e,{expose:t,emit:r}){const n=e,i=Ke("scrollbar");let a,s;const u=A(),o=A(),d=A(),m=A("0"),c=A("0"),p=A(),h=A(1),g=A(1),b=M(()=>{const l={};return n.height&&(l.height=he(n.height)),n.maxHeight&&(l.maxHeight=he(n.maxHeight)),[n.wrapStyle,l]}),w=M(()=>[n.wrapClass,i.e("wrap"),{[i.em("wrap","hidden-default")]:!n.native}]),T=M(()=>[i.e("view"),n.viewClass]),_=()=>{var l;o.value&&((l=p.value)==null||l.handleScroll(o.value),r("scroll",{scrollTop:o.value.scrollTop,scrollLeft:o.value.scrollLeft}))};function O(l,y){bt(l)?o.value.scrollTo(l):B(l)&&B(y)&&o.value.scrollTo(l,y)}const E=l=>{B(l)&&(o.value.scrollTop=l)},S=l=>{B(l)&&(o.value.scrollLeft=l)},f=()=>{if(!o.value)return;const l=o.value.offsetHeight-I,y=o.value.offsetWidth-I,$=l**2/o.value.scrollHeight,z=y**2/o.value.scrollWidth,W=Math.max($,n.minSize),F=Math.max(z,n.minSize);h.value=$/(l-$)/(W/(l-W)),g.value=z/(y-z)/(F/(y-F)),c.value=W+I<l?`${W}px`:"",m.value=F+I<y?`${F}px`:""};return ge(()=>n.noresize,l=>{l?(a==null||a(),s==null||s()):({stop:a}=st(d,f),s=te("resize",f))},{immediate:!0}),ge(()=>[n.maxHeight,n.height],()=>{n.native||ye(()=>{var l;f(),o.value&&((l=p.value)==null||l.handleScroll(o.value))})}),dt(et,pt({scrollbarElement:u,wrapElement:o})),vt(()=>{n.native||ye(()=>{f()})}),mt(()=>f()),t({wrapRef:o,update:f,scrollTo:O,setScrollTop:E,setScrollLeft:S,handleScroll:_}),(l,y)=>(H(),Ge("div",{ref_key:"scrollbarRef",ref:u,class:N(x(i).b())},[ne("div",{ref_key:"wrapRef",ref:o,class:N(x(w)),style:ae(x(b)),onScroll:_},[(H(),re(yt(l.tag),{ref_key:"resizeRef",ref:d,class:N(x(T)),style:ae(l.viewStyle)},{default:Fe(()=>[gt(l.$slots,"default")]),_:3},8,["class","style"]))],38),l.native?ht("v-if",!0):(H(),re(Yn,{key:0,ref_key:"barRef",ref:p,height:c.value,width:m.value,always:l.always,"ratio-x":g.value,"ratio-y":h.value},null,8,["height","width","always","ratio-x","ratio-y"]))],2))}});var Vn=de(Qn,[["__file","/home/runner/work/element-plus/element-plus/packages/components/scrollbar/src/scrollbar.vue"]]);const la=_t(Vn),P=new Map;let De;Xe&&(document.addEventListener("mousedown",e=>De=e),document.addEventListener("mouseup",e=>{for(const t of P.values())for(const{documentHandler:r}of t)r(e,De)}));function Ue(e,t){let r=[];return Array.isArray(t.arg)?r=t.arg:wt(t.arg)&&r.push(t.arg),function(n,i){const a=t.instance.popperRef,s=n.target,u=i==null?void 0:i.target,o=!t||!t.instance,d=!s||!u,m=e.contains(s)||e.contains(u),c=e===s,p=r.length&&r.some(g=>g==null?void 0:g.contains(s))||r.length&&r.includes(u),h=a&&(a.contains(s)||a.contains(u));o||d||m||c||p||h||t.value(n,i)}}const ua={beforeMount(e,t){P.has(e)||P.set(e,[]),P.get(e).push({documentHandler:Ue(e,t),bindingFn:t.value})},updated(e,t){P.has(e)||P.set(e,[]);const r=P.get(e),n=r.findIndex(a=>a.bindingFn===t.oldValue),i={documentHandler:Ue(e,t),bindingFn:t.value};n>=0?r.splice(n,1,i):r.push(i)},unmounted(e){P.delete(e)}};export{ua as C,la as E,L as S,Me as U,Bt as a,jt as b,Kt as c,oa as d,jr as e,Ve as f,Ye as g,oe as h,ia as i,Ze as j,Mr as k,Nt as l,xr as m,Yr as n,Or as o,qr as p,Ie as q,Se as r,Fr as s,_r as t,xe as u};
