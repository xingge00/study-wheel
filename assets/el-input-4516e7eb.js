import{d as c,a1 as Le,g as Re,r as V,a2 as ge,s as De,a3 as Q,v as xe,a4 as Oe,a5 as J,A as Ee,Y as He,q as Ke,y as we,a6 as ee,a7 as je,a8 as We,a9 as Ue,aa as Ye,ab as Xe,m as te,Z as M,ac as Se,l as Ze,t as qe,Q as Ge,V as Qe,o as p,c as g,H as v,F as ae,E as y,k as t,B as K,N as P,C as w,w as $,D as j,G as A,W as oe,b as Je,S as et,ad as tt,ae as at,O as W,I as ot,_ as nt,af as st,ag as Ce,L as lt}from"./index-274faae7.js";import{u as rt,a as it,b as ut,c as ct,d as dt}from"./el-button-44cd7fe3.js";import{U as ne}from"./event-9519ab40.js";const pt=o=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(o),ft=["class","style"],vt=/^on[A-Z]/,mt=(o={})=>{const{excludeListeners:m=!1,excludeKeys:s}=o,a=c(()=>((s==null?void 0:s.value)||[]).concat(ft)),l=Re();return l?c(()=>{var r;return Le(Object.entries((r=l.proxy)==null?void 0:r.$attrs).filter(([u])=>!a.value.includes(u)&&!(m&&vt.test(u))))}):c(()=>({}))};function yt(o){const m=V();function s(){if(o.value==null)return;const{selectionStart:l,selectionEnd:r,value:u}=o.value;if(l==null||r==null)return;const x=u.slice(0,Math.max(0,l)),d=u.slice(Math.max(0,r));m.value={selectionStart:l,selectionEnd:r,value:u,beforeTxt:x,afterTxt:d}}function a(){if(o.value==null||m.value==null)return;const{value:l}=o.value,{beforeTxt:r,afterTxt:u,selectionStart:x}=m.value;if(r==null||u==null||x==null)return;let d=l.length;if(l.endsWith(u))d=l.length-u.length;else if(l.startsWith(r))d=r.length;else{const h=r[x-1],S=l.indexOf(h,x-1);S!==-1&&(d=S+1)}o.value.setSelectionRange(d,d)}return[s,a]}let b;const ht=`
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,bt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function gt(o){const m=window.getComputedStyle(o),s=m.getPropertyValue("box-sizing"),a=Number.parseFloat(m.getPropertyValue("padding-bottom"))+Number.parseFloat(m.getPropertyValue("padding-top")),l=Number.parseFloat(m.getPropertyValue("border-bottom-width"))+Number.parseFloat(m.getPropertyValue("border-top-width"));return{contextStyle:bt.map(u=>`${u}:${m.getPropertyValue(u)}`).join(";"),paddingSize:a,borderSize:l,boxSizing:s}}function Ie(o,m=1,s){var a;b||(b=document.createElement("textarea"),document.body.appendChild(b));const{paddingSize:l,borderSize:r,boxSizing:u,contextStyle:x}=gt(o);b.setAttribute("style",`${x};${ht}`),b.value=o.value||o.placeholder||"";let d=b.scrollHeight;const h={};u==="border-box"?d=d+r:u==="content-box"&&(d=d-l),b.value="";const S=b.scrollHeight-l;if(ge(m)){let f=S*m;u==="border-box"&&(f=f+l+r),d=Math.max(f,d),h.minHeight=`${f}px`}if(ge(s)){let f=S*s;u==="border-box"&&(f=f+l+r),d=Math.min(f,d)}return h.height=`${d}px`,(a=b.parentNode)==null||a.removeChild(b),b=void 0,h}const xt=De({id:{type:String,default:void 0},size:rt,disabled:Boolean,modelValue:{type:Q([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:Q([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:xe},prefixIcon:{type:xe},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:Q([Object,Array,String]),default:()=>Oe({})}}),wt={[ne]:o=>J(o),input:o=>J(o),change:o=>J(o),focus:o=>o instanceof FocusEvent,blur:o=>o instanceof FocusEvent,clear:()=>!0,mouseleave:o=>o instanceof MouseEvent,mouseenter:o=>o instanceof MouseEvent,keydown:o=>o instanceof Event,compositionstart:o=>o instanceof CompositionEvent,compositionupdate:o=>o instanceof CompositionEvent,compositionend:o=>o instanceof CompositionEvent},St=["role"],Ct=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],It=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],Et=Ee({name:"ElInput",inheritAttrs:!1}),kt=Ee({...Et,props:xt,emits:wt,setup(o,{expose:m,emit:s}){const a=o,l=He(),r=Ke(),u=c(()=>{const e={};return a.containerRole==="combobox"&&(e["aria-haspopup"]=l["aria-haspopup"],e["aria-owns"]=l["aria-owns"],e["aria-expanded"]=l["aria-expanded"]),e}),x=c(()=>[a.type==="textarea"?le.b():n.b(),n.m(ke.value),n.is("disabled",k.value),n.is("exceed",Ve.value),{[n.b("group")]:r.prepend||r.append,[n.bm("group","append")]:r.append,[n.bm("group","prepend")]:r.prepend,[n.m("prefix")]:r.prefix||a.prefixIcon,[n.m("suffix")]:r.suffix||a.suffixIcon||a.clearable||a.showPassword,[n.bm("suffix","password-clear")]:D.value&&X.value},l.class]),d=c(()=>[n.e("wrapper"),n.is("focus",N.value)]),h=mt({excludeKeys:c(()=>Object.keys(u.value))}),{form:S,formItem:f}=it(),{inputId:se}=ut(a,{formItemContext:f}),ke=ct(),k=dt(),n=we("input"),le=we("textarea"),L=ee(),I=ee(),N=V(!1),U=V(!1),F=V(!1),R=V(!1),re=V(),Y=ee(a.inputStyle),T=c(()=>L.value||I.value),ie=c(()=>{var e;return(e=S==null?void 0:S.statusIcon)!=null?e:!1}),_=c(()=>(f==null?void 0:f.validateState)||""),ue=c(()=>_.value&&je[_.value]),ze=c(()=>R.value?We:Ue),Pe=c(()=>[l.style,a.inputStyle]),ce=c(()=>[a.inputStyle,Y.value,{resize:a.resize}]),C=c(()=>Ye(a.modelValue)?"":String(a.modelValue)),D=c(()=>a.clearable&&!k.value&&!a.readonly&&!!C.value&&(N.value||U.value)),X=c(()=>a.showPassword&&!k.value&&!a.readonly&&!!C.value&&(!!C.value||N.value)),z=c(()=>a.showWordLimit&&!!h.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!k.value&&!a.readonly&&!a.showPassword),Z=c(()=>Array.from(C.value).length),Ve=c(()=>!!z.value&&Z.value>Number(h.value.maxlength)),Ne=c(()=>!!r.suffix||!!a.suffixIcon||D.value||a.showPassword||z.value||!!_.value&&ie.value),[Fe,Te]=yt(L);Xe(I,e=>{if(!z.value||a.resize!=="both")return;const i=e[0],{width:E}=i.contentRect;re.value={right:`calc(100% - ${E+15+6}px)`}});const O=()=>{const{type:e,autosize:i}=a;if(!(!st||e!=="textarea"||!I.value))if(i){const E=Ce(i)?i.minRows:void 0,G=Ce(i)?i.maxRows:void 0;Y.value={...Ie(I.value,E,G)}}else Y.value={minHeight:Ie(I.value).minHeight}},B=()=>{const e=T.value;!e||e.value===C.value||(e.value=C.value)},q=async e=>{Fe();let{value:i}=e.target;if(a.formatter&&(i=a.parser?a.parser(i):i,i=a.formatter(i)),!F.value){if(i===C.value){B();return}s(ne,i),s("input",i),await M(),B(),Te()}},de=e=>{s("change",e.target.value)},pe=e=>{s("compositionstart",e),F.value=!0},fe=e=>{var i;s("compositionupdate",e);const E=(i=e.target)==null?void 0:i.value,G=E[E.length-1]||"";F.value=!pt(G)},ve=e=>{s("compositionend",e),F.value&&(F.value=!1,q(e))},_e=()=>{R.value=!R.value,H()},H=async()=>{var e;await M(),(e=T.value)==null||e.focus()},Be=()=>{var e;return(e=T.value)==null?void 0:e.blur()},me=e=>{N.value=!0,s("focus",e)},ye=e=>{var i;N.value=!1,s("blur",e),a.validateEvent&&((i=f==null?void 0:f.validate)==null||i.call(f,"blur").catch(E=>Se()))},Me=e=>{U.value=!1,s("mouseleave",e)},$e=e=>{U.value=!0,s("mouseenter",e)},he=e=>{s("keydown",e)},Ae=()=>{var e;(e=T.value)==null||e.select()},be=()=>{s(ne,""),s("change",""),s("clear"),s("input","")};return te(()=>a.modelValue,()=>{var e;M(()=>O()),a.validateEvent&&((e=f==null?void 0:f.validate)==null||e.call(f,"change").catch(i=>Se()))}),te(C,()=>B()),te(()=>a.type,async()=>{await M(),B(),O()}),Ze(()=>{!a.formatter&&a.parser,B(),M(O)}),m({input:L,textarea:I,ref:T,textareaStyle:ce,autosize:qe(a,"autosize"),focus:H,blur:Be,select:Ae,clear:be,resizeTextarea:O}),(e,i)=>Ge((p(),g("div",oe(t(u),{class:t(x),style:t(Pe),role:e.containerRole,onMouseenter:$e,onMouseleave:Me}),[v(" input "),e.type!=="textarea"?(p(),g(ae,{key:0},[v(" prepend slot "),e.$slots.prepend?(p(),g("div",{key:0,class:y(t(n).be("group","prepend"))},[K(e.$slots,"prepend")],2)):v("v-if",!0),P("div",{class:y(t(d))},[v(" prefix slot "),e.$slots.prefix||e.prefixIcon?(p(),g("span",{key:0,class:y(t(n).e("prefix"))},[P("span",{class:y(t(n).e("prefix-inner")),onClick:H},[K(e.$slots,"prefix"),e.prefixIcon?(p(),w(t(A),{key:0,class:y(t(n).e("icon"))},{default:$(()=>[(p(),w(j(e.prefixIcon)))]),_:1},8,["class"])):v("v-if",!0)],2)],2)):v("v-if",!0),P("input",oe({id:t(se),ref_key:"input",ref:L,class:t(n).e("inner")},t(h),{type:e.showPassword?R.value?"text":"password":e.type,disabled:t(k),formatter:e.formatter,parser:e.parser,readonly:e.readonly,autocomplete:e.autocomplete,tabindex:e.tabindex,"aria-label":e.label,placeholder:e.placeholder,style:e.inputStyle,form:a.form,onCompositionstart:pe,onCompositionupdate:fe,onCompositionend:ve,onInput:q,onFocus:me,onBlur:ye,onChange:de,onKeydown:he}),null,16,Ct),v(" suffix slot "),t(Ne)?(p(),g("span",{key:1,class:y(t(n).e("suffix"))},[P("span",{class:y(t(n).e("suffix-inner")),onClick:H},[!t(D)||!t(X)||!t(z)?(p(),g(ae,{key:0},[K(e.$slots,"suffix"),e.suffixIcon?(p(),w(t(A),{key:0,class:y(t(n).e("icon"))},{default:$(()=>[(p(),w(j(e.suffixIcon)))]),_:1},8,["class"])):v("v-if",!0)],64)):v("v-if",!0),t(D)?(p(),w(t(A),{key:1,class:y([t(n).e("icon"),t(n).e("clear")]),onMousedown:tt(t(at),["prevent"]),onClick:be},{default:$(()=>[Je(t(et))]),_:1},8,["class","onMousedown"])):v("v-if",!0),t(X)?(p(),w(t(A),{key:2,class:y([t(n).e("icon"),t(n).e("password")]),onClick:_e},{default:$(()=>[(p(),w(j(t(ze))))]),_:1},8,["class"])):v("v-if",!0),t(z)?(p(),g("span",{key:3,class:y(t(n).e("count"))},[P("span",{class:y(t(n).e("count-inner"))},W(t(Z))+" / "+W(t(h).maxlength),3)],2)):v("v-if",!0),t(_)&&t(ue)&&t(ie)?(p(),w(t(A),{key:4,class:y([t(n).e("icon"),t(n).e("validateIcon"),t(n).is("loading",t(_)==="validating")])},{default:$(()=>[(p(),w(j(t(ue))))]),_:1},8,["class"])):v("v-if",!0)],2)],2)):v("v-if",!0)],2),v(" append slot "),e.$slots.append?(p(),g("div",{key:1,class:y(t(n).be("group","append"))},[K(e.$slots,"append")],2)):v("v-if",!0)],64)):(p(),g(ae,{key:1},[v(" textarea "),P("textarea",oe({id:t(se),ref_key:"textarea",ref:I,class:t(le).e("inner")},t(h),{tabindex:e.tabindex,disabled:t(k),readonly:e.readonly,autocomplete:e.autocomplete,style:t(ce),"aria-label":e.label,placeholder:e.placeholder,form:a.form,onCompositionstart:pe,onCompositionupdate:fe,onCompositionend:ve,onInput:q,onFocus:me,onBlur:ye,onChange:de,onKeydown:he}),null,16,It),t(z)?(p(),g("span",{key:0,style:ot(re.value),class:y(t(n).e("count"))},W(t(Z))+" / "+W(t(h).maxlength),7)):v("v-if",!0)],64))],16,St)),[[Qe,e.type!=="hidden"]])}});var zt=nt(kt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const Ft=lt(zt);export{Ft as E,pt as i};