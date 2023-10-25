import{N as fe,l as se,aX as me,a9 as pe,aH as H,V as ve,aF as ye,y as K,ba as ge,ae as ne,aT as J,m as X,aW as be,aS as Ce,bb as he,aU as ke,aE as x,s as G,az as j,A as V,b as h,bc as U,B as k,aV as we,v as Ee,i as Z,bd as _e,d as L,o as B,c as Y,R as O,E,k as o,Y as De,w as C,C as W,D as Me,G as Te,H as q,I as le,_ as ae,be as Ie,Q as Se,aO as Be,n as Q,r as _,f as $e,X as Fe,g as Ae,bf as Le,bg as ee,q as Oe,J as Pe,S as Ne,bh as ze,au as Re,ar as Ve,aa as Ye,ap as xe,av as Ue,L as He,as as Xe,a as oe,F as je,am as We}from"./index-a458e504.js";import{E as qe}from"./el-button-b19e4c7f.js";import{u as Ke}from"./index-53563a1d.js";import{U as ue}from"./event-9519ab40.js";import{g as Ge}from"./scroll-d840070e.js";import{u as te}from"./index-708d6a25.js";const Je=(...e)=>t=>{e.forEach(s=>{fe(s)?s(t):s.value=t})},re=Symbol("dialogInjectionKey"),Ze=(e,t,s)=>{let i={offsetX:0,offsetY:0};const n=l=>{const c=l.clientX,p=l.clientY,{offsetX:m,offsetY:v}=i,a=e.value.getBoundingClientRect(),f=a.left,D=a.top,P=a.width,N=a.height,z=document.documentElement.clientWidth,$=document.documentElement.clientHeight,R=-f+m,F=-D+v,M=z-f-P+m,T=$-D-N+v,A=w=>{const u=Math.min(Math.max(m+w.clientX-c,R),M),b=Math.min(Math.max(v+w.clientY-p,F),T);i={offsetX:u,offsetY:b},e.value.style.transform=`translate(${H(u)}, ${H(b)})`},y=()=>{document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",A),document.addEventListener("mouseup",y)},d=()=>{t.value&&e.value&&t.value.addEventListener("mousedown",n)},r=()=>{t.value&&e.value&&t.value.removeEventListener("mousedown",n)};se(()=>{me(()=>{s.value?d():r()})}),pe(()=>{r()})},Qe=e=>{ve(e)||ye("[useLockscreen]","You need to pass a ref param to this function");const t=K("popup"),s=ge(()=>t.bm("parent","hidden"));if(!ne||J(document.body,s.value))return;let i=0,n=!1,d="0";const r=()=>{setTimeout(()=>{ke(document.body,s.value),n&&(document.body.style.width=d)},200)};X(e,l=>{if(!l){r();return}n=!J(document.body,s.value),n&&(d=document.body.style.width),i=Ge(t.namespace.value);const c=document.documentElement.clientHeight<document.body.scrollHeight,p=be(document.body,"overflowY");i>0&&(c||p==="scroll")&&n&&(document.body.style.width=`calc(100% - ${i}px)`),Ce(document.body,s.value)}),he(()=>r())},ie=e=>{if(!e)return{onClick:x,onMousedown:x,onMouseup:x};let t=!1,s=!1;return{onClick:r=>{t&&s&&e(r),t=s=!1},onMousedown:r=>{t=r.target===r.currentTarget},onMouseup:r=>{s=r.target===r.currentTarget}}},e1=G({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:j([String,Array,Object])},zIndex:{type:j([String,Number])}}),o1={click:e=>e instanceof MouseEvent};var t1=V({name:"ElOverlay",props:e1,emits:o1,setup(e,{slots:t,emit:s}){const i=K("overlay"),n=c=>{s("click",c)},{onClick:d,onMousedown:r,onMouseup:l}=ie(e.customMaskEvent?void 0:n);return()=>e.mask?h("div",{class:[i.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:d,onMousedown:r,onMouseup:l},[k(t,"default")],U.STYLE|U.CLASS|U.PROPS,["onClick","onMouseup","onMousedown"]):we("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[k(t,"default")])}});const s1=t1,ce=G({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:Ee},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),n1={close:()=>!0},l1=["aria-label"],a1=["id"],u1=V({name:"ElDialogContent"}),r1=V({...u1,props:ce,emits:n1,setup(e){const t=e,{t:s}=Ke(),{Close:i}=Ie,{dialogRef:n,headerRef:d,bodyId:r,ns:l,style:c}=Z(re),{focusTrapRef:p}=Z(_e),m=Je(p,n),v=L(()=>t.draggable);return Ze(n,d,v),(a,f)=>(B(),Y("div",{ref:o(m),class:E([o(l).b(),o(l).is("fullscreen",a.fullscreen),o(l).is("draggable",o(v)),o(l).is("align-center",a.alignCenter),{[o(l).m("center")]:a.center},a.customClass]),style:le(o(c)),tabindex:"-1"},[O("header",{ref_key:"headerRef",ref:d,class:E(o(l).e("header"))},[k(a.$slots,"header",{},()=>[O("span",{role:"heading",class:E(o(l).e("title"))},De(a.title),3)]),a.showClose?(B(),Y("button",{key:0,"aria-label":o(s)("el.dialog.close"),class:E(o(l).e("headerbtn")),type:"button",onClick:f[0]||(f[0]=D=>a.$emit("close"))},[h(o(Te),{class:E(o(l).e("close"))},{default:C(()=>[(B(),W(Me(a.closeIcon||o(i))))]),_:1},8,["class"])],10,l1)):q("v-if",!0)],2),O("div",{id:o(r),class:E(o(l).e("body"))},[k(a.$slots,"default")],10,a1),a.$slots.footer?(B(),Y("footer",{key:0,class:E(o(l).e("footer"))},[k(a.$slots,"footer")],2)):q("v-if",!0)],6))}});var i1=ae(r1,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const c1=G({...ce,appendToBody:{type:Boolean,default:!1},beforeClose:{type:j(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),d1={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[ue]:e=>Se(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},f1=(e,t)=>{const i=Ae().emit,{nextZIndex:n}=Be();let d="";const r=Q(),l=Q(),c=_(!1),p=_(!1),m=_(!1),v=_(e.zIndex||n());let a,f;const D=$e("namespace",Le),P=L(()=>{const g={},S=`--${D.value}-dialog`;return e.fullscreen||(e.top&&(g[`${S}-margin-top`]=e.top),e.width&&(g[`${S}-width`]=H(e.width))),g}),N=L(()=>e.alignCenter?{display:"flex"}:{});function z(){i("opened")}function $(){i("closed"),i(ue,!1),e.destroyOnClose&&(m.value=!1)}function R(){i("close")}function F(){f==null||f(),a==null||a(),e.openDelay&&e.openDelay>0?{stop:a}=ee(()=>y(),e.openDelay):y()}function M(){a==null||a(),f==null||f(),e.closeDelay&&e.closeDelay>0?{stop:f}=ee(()=>w(),e.closeDelay):w()}function T(){function g(S){S||(p.value=!0,c.value=!1)}e.beforeClose?e.beforeClose(g):M()}function A(){e.closeOnClickModal&&T()}function y(){ne&&(c.value=!0)}function w(){c.value=!1}function u(){i("openAutoFocus")}function b(){i("closeAutoFocus")}function I(g){var S;((S=g.detail)==null?void 0:S.focusReason)==="pointer"&&g.preventDefault()}e.lockScroll&&Qe(c);function de(){e.closeOnPressEscape&&T()}return X(()=>e.modelValue,g=>{g?(p.value=!1,F(),m.value=!0,v.value=e.zIndex?v.value++:n(),Fe(()=>{i("open"),t.value&&(t.value.scrollTop=0)})):c.value&&M()}),X(()=>e.fullscreen,g=>{t.value&&(g?(d=t.value.style.transform,t.value.style.transform=""):t.value.style.transform=d)}),se(()=>{e.modelValue&&(c.value=!0,m.value=!0,F())}),{afterEnter:z,afterLeave:$,beforeLeave:R,handleClose:T,onModalClick:A,close:M,doClose:w,onOpenAutoFocus:u,onCloseAutoFocus:b,onCloseRequested:de,onFocusoutPrevented:I,titleId:r,bodyId:l,closed:p,style:P,overlayDialogStyle:N,rendered:m,visible:c,zIndex:v}},m1=["aria-label","aria-labelledby","aria-describedby"],p1=V({name:"ElDialog",inheritAttrs:!1}),v1=V({...p1,props:c1,emits:d1,setup(e,{expose:t}){const s=e,i=Oe();te({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},L(()=>!!i.title)),te({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},L(()=>!!s.customClass));const n=K("dialog"),d=_(),r=_(),l=_(),{visible:c,titleId:p,bodyId:m,style:v,overlayDialogStyle:a,rendered:f,zIndex:D,afterEnter:P,afterLeave:N,beforeLeave:z,handleClose:$,onModalClick:R,onOpenAutoFocus:F,onCloseAutoFocus:M,onCloseRequested:T,onFocusoutPrevented:A}=f1(s,d);Pe(re,{dialogRef:d,headerRef:r,bodyId:m,ns:n,rendered:f,style:v});const y=ie(R),w=L(()=>s.draggable&&!s.fullscreen);return t({visible:c,dialogContentRef:l}),(u,b)=>(B(),W(Ue,{to:"body",disabled:!u.appendToBody},[h(xe,{name:"dialog-fade",onAfterEnter:o(P),onAfterLeave:o(N),onBeforeLeave:o(z),persisted:""},{default:C(()=>[Ne(h(o(s1),{"custom-mask-event":"",mask:u.modal,"overlay-class":u.modalClass,"z-index":o(D)},{default:C(()=>[O("div",{role:"dialog","aria-modal":"true","aria-label":u.title||void 0,"aria-labelledby":u.title?void 0:o(p),"aria-describedby":o(m),class:E(`${o(n).namespace.value}-overlay-dialog`),style:le(o(a)),onClick:b[0]||(b[0]=(...I)=>o(y).onClick&&o(y).onClick(...I)),onMousedown:b[1]||(b[1]=(...I)=>o(y).onMousedown&&o(y).onMousedown(...I)),onMouseup:b[2]||(b[2]=(...I)=>o(y).onMouseup&&o(y).onMouseup(...I))},[h(o(ze),{loop:"",trapped:o(c),"focus-start-el":"container",onFocusAfterTrapped:o(F),onFocusAfterReleased:o(M),onFocusoutPrevented:o(A),onReleaseRequested:o(T)},{default:C(()=>[o(f)?(B(),W(i1,Re({key:0,ref_key:"dialogContentRef",ref:l},u.$attrs,{"custom-class":u.customClass,center:u.center,"align-center":u.alignCenter,"close-icon":u.closeIcon,draggable:o(w),fullscreen:u.fullscreen,"show-close":u.showClose,title:u.title,onClose:o($)}),Ve({header:C(()=>[u.$slots.title?k(u.$slots,"title",{key:1}):k(u.$slots,"header",{key:0,close:o($),titleId:o(p),titleClass:o(n).e("title")})]),default:C(()=>[k(u.$slots,"default")]),_:2},[u.$slots.footer?{name:"footer",fn:C(()=>[k(u.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):q("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,m1)]),_:3},8,["mask","overlay-class","z-index"]),[[Ye,o(c)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var y1=ae(v1,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const g1=He(y1);const b1=new TextDecoder;let C1=b1.decode(new Uint8Array([10,60,115,99,114,105,112,116,32,115,101,116,117,112,62,10,105,109,112,111,114,116,32,123,32,114,101,102,32,125,32,102,114,111,109,32,39,118,117,101,39,10,10,105,109,112,111,114,116,32,123,32,115,111,117,114,99,101,67,111,100,101,32,97,115,32,99,117,114,86,117,101,67,111,100,101,32,125,32,102,114,111,109,32,39,64,64,64,47,115,114,99,47,118,105,101,119,115,47,80,108,97,121,71,114,111,117,110,100,47,105,110,100,101,120,46,118,117,101,115,104,111,119,39,10,10,99,111,110,115,116,32,115,104,111,97,68,105,97,108,111,103,32,61,32,114,101,102,40,102,97,108,115,101,41,10,10,99,111,110,115,116,32,111,112,101,110,68,105,97,108,111,103,32,61,32,40,41,32,61,62,32,123,10,32,32,115,104,111,97,68,105,97,108,111,103,46,118,97,108,117,101,32,61,32,116,114,117,101,10,125,10,60,47,115,99,114,105,112,116,62,10,10,60,116,101,109,112,108,97,116,101,62,10,32,32,60,100,105,118,32,99,108,97,115,115,61,34,119,114,97,112,112,101,114,34,62,10,32,32,32,32,60,101,108,45,98,117,116,116,111,110,32,64,99,108,105,99,107,61,34,111,112,101,110,68,105,97,108,111,103,34,62,10,32,32,32,32,32,32,230,137,147,229,188,128,229,188,185,231,170,151,10,32,32,32,32,60,47,101,108,45,98,117,116,116,111,110,62,10,32,32,60,47,100,105,118,62,10,32,32,60,101,108,45,100,105,97,108,111,103,10,32,32,32,32,118,45,109,111,100,101,108,61,34,115,104,111,97,68,105,97,108,111,103,34,10,32,32,32,32,116,105,116,108,101,61,34,229,189,147,229,137,141,233,161,181,233,157,162,230,186,144,231,160,129,34,10,32,32,32,32,116,111,112,61,34,53,48,112,120,34,10,32,32,62,10,32,32,32,32,60,104,105,103,104,108,105,103,104,116,106,115,10,32,32,32,32,32,32,115,116,121,108,101,61,34,104,101,105,103,104,116,58,49,48,48,37,59,111,118,101,114,102,108,111,119,58,32,97,117,116,111,59,34,10,32,32,32,32,32,32,108,97,110,103,117,97,103,101,61,34,106,115,34,10,32,32,32,32,32,32,58,99,111,100,101,61,34,99,117,114,86,117,101,67,111,100,101,34,10,32,32,32,32,47,62,10,32,32,32,32,60,116,101,109,112,108,97,116,101,32,35,102,111,111,116,101,114,62,10,32,32,32,32,32,32,60,115,112,97,110,32,99,108,97,115,115,61,34,100,105,97,108,111,103,45,102,111,111,116,101,114,34,62,10,32,32,32,32,32,32,32,32,60,101,108,45,98,117,116,116,111,110,32,64,99,108,105,99,107,61,34,115,104,111,97,68,105,97,108,111,103,32,61,32,102,97,108,115,101,34,62,229,133,179,233,151,173,60,47,101,108,45,98,117,116,116,111,110,62,10,32,32,32,32,32,32,60,47,115,112,97,110,62,10,32,32,32,32,60,47,116,101,109,112,108,97,116,101,62,10,32,32,60,47,101,108,45,100,105,97,108,111,103,62,10,60,47,116,101,109,112,108,97,116,101,62,10,10,60,115,116,121,108,101,32,108,97,110,103,61,34,115,99,115,115,34,32,115,99,111,112,101,100,62,10,46,119,114,97,112,112,101,114,32,123,10,10,125,10,60,47,115,116,121,108,101,62,10]));const h1={class:"wrapper"},k1={class:"dialog-footer"},w1={__name:"index",setup(e){const t=_(!1),s=()=>{t.value=!0};return(i,n)=>{const d=qe,r=We("highlightjs"),l=g1;return B(),Y(je,null,[O("div",h1,[h(d,{onClick:s},{default:C(()=>[oe(" 打开弹窗 ")]),_:1})]),h(l,{modelValue:t.value,"onUpdate:modelValue":n[1]||(n[1]=c=>t.value=c),title:"当前页面源码",top:"50px"},{footer:C(()=>[O("span",k1,[h(d,{onClick:n[0]||(n[0]=c=>t.value=!1)},{default:C(()=>[oe("关闭")]),_:1})])]),default:C(()=>[h(r,{style:{height:"100%",overflow:"auto"},language:"js",code:o(C1)},null,8,["code"])]),_:1},8,["modelValue"])],64)}}},S1=Xe(w1,[["__scopeId","data-v-743357bc"]]);export{S1 as default};
