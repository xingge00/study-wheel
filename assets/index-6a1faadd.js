var ie=Object.defineProperty;var pe=(a,t,n)=>t in a?ie(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n;var Z=(a,t,n)=>(pe(a,typeof t!="symbol"?t+"":t,n),n);import{_ as A,a2 as U,e as B,o as d,c as _,E as D,G as E,U as P,j as r,y as x,F as C,q as z,f as $,r as k,s as S,Y as X,x as j,z as ae,R as H,am as ve,an as fe,ar as M,w as me,b as O,v as ne,a6 as oe,g as se,P as _e,A as T}from"./index-fb8e86c9.js";import{C as ge}from"./index-39b845bf.js";import"./types-8c22acb2.js";const he=["onClick"],be={key:0,class:"line"},De={__name:"AddNodeBtn",props:{endLine:{type:Boolean,default:!0},addType:{type:String,default:"node"}},emits:["toAdd"],setup(a,{emit:t}){const n=a,e=U(),s=B("addNodeDialogRef"),l=u=>{if(u.id==="canvas-main"||!u)return{x:0,y:0};const f=l(u.offsetParent);return{x:f.x+u.offsetLeft,y:f.y+u.offsetTop}},i=u=>{t("toAdd",u)},o=u=>{if(n.addType==="branch")return t("toAdd");const{x:f,y}=l(u.target);s.value.show({x:u.offsetX+f,y:u.offsetY+y},i)};return(u,f)=>(d(),_(C,null,[D("div",E({class:"add-node"},r(e),{onClick:P(o,["stop"])})," + ",16,he),a.endLine?(d(),_("div",be)):x("",!0)],64))}},q=A(De,[["__scopeId","data-v-342634a2"]]);const ye=["onClick"],we={__name:"SubBtn",emits:["toSub"],setup(a,{emit:t}){const n=B("hoverStack"),e=s=>{n.value=[],t("toSub")};return(s,l)=>(d(),_("div",{class:"sub-node",onClick:P(e,["stop"])}," - ",8,ye))}},re=A(we,[["__scopeId","data-v-554bf87e"]]),Ne={},$e={class:"node-wrapper"},Ve=D("div",{class:"c-circle c-start"}," start ",-1),Ce=[Ve];function Le(a,t){return d(),_("div",$e,Ce)}const ke=A(Ne,[["render",Le]]),Be={},Se={class:"node-wrapper"},Ae=D("div",{class:"c-circle c-end"}," end ",-1),xe=[Ae];function Ie(a,t){return d(),_("div",Se,xe)}const Me=A(Be,[["render",Ie]]),Re={},Fe={class:"node-wrapper"},Pe=D("div",{class:"c-circle c-other"}," Error ",-1);function Oe(a,t){return d(),_("div",Fe,[z(a.$slots,"default"),Pe])}const Y=A(Re,[["render",Oe]]),G=a=>{var t;return a?(t=a==null?void 0:a.branchList)!=null&&t.length?a.branchList.reduce((n,e)=>n+Math.max(...e.map(s=>G(s)),1),0):1:0},ee=a=>Array.isArray(a)?Math.max(...a.map(t=>G(t)),1):1,Te=D("div",{class:"line"},null,-1),le={__name:"BranchRender",props:{modelValue:{type:Object,default:()=>({})},curNode:{type:Object,default:()=>({})}},emits:["addBranch","removeBranch","update:modelValue"],setup(a,{emit:t}){const n=a,e=$({get:()=>n.modelValue||[],set:c=>t("update:modelValue",c)}),s=$(()=>G(n.curNode)),l=$(()=>{var c;return ee((c=e.value)==null?void 0:c[0])}),i=$(()=>{var c;return ee((c=e.value)==null?void 0:c[e.value.length-1])}),o=B("activateNode"),u=B("hoverStack"),f=$(()=>u.value[0]),y=c=>u.value.unshift(e.value[c]),L=c=>u.value.shift(),h=k(null),R=c=>{h.value=c,e.value[c]},I=()=>{h.value=null},g=c=>{h.value!==null&&c.preventDefault()},m=c=>{if(!(h.value===c||h.value===null)){if(h.value<c){const v=e.value[h.value];e.value.splice(c+1,0,v),e.value.splice(h.value,1)}else{const v=e.value.splice(h.value,1)[0];e.value.splice(c,0,v)}h.value=null}};return(c,v)=>(d(),_(C,null,[Te,a.curNode.type==="switch"?(d(),S(q,{key:0,class:"on-bottom","end-line":!1,"add-type":"branch",onToAdd:v[0]||(v[0]=w=>t("addBranch"))})):x("",!0),D("div",{class:"branch-wrapper branch-wrapper-width",style:ae({"--var-col-count":r(s),"--var-first-branch-col-count":r(l),"--var-last-branch-col-count":r(i)})},[(d(!0),_(C,null,X(r(e),(w,p)=>(d(),S(ce,{key:p,modelValue:r(e)[p],"onUpdate:modelValue":N=>r(e)[p]=N,class:j({"hover-branch":r(f)===r(e)[p]||r(o)===r(e)[p],"can-drop-branch":h.value!==null&&h.value!==p}),"branch-count":r(e).length,draggable:!0,onMouseenter:()=>y(p),onMouseleave:()=>L(),onRemoveBranch:()=>t("removeBranch",p),onDragstart:P(()=>R(p),["stop"]),onDragover:v[1]||(v[1]=N=>g(N)),onDropCapture:()=>m(p),onDragend:I},null,8,["modelValue","onUpdate:modelValue","class","branch-count","onMouseenter","onMouseleave","onRemoveBranch","onDragstart","onDropCapture"]))),128))],4)],64))}},je=D("div",{class:"c-circle c-if"}," if ",-1),Ue={__name:"If",props:{modelValue:{type:Object,default:()=>({})},isPreview:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(a,{emit:t}){const n=a,e=$({get:()=>n.modelValue.branchList,set:i=>t("update:modelValue",{...n.modelValue,branchList:i})}),s=U(),l=i=>{var o;return i?(o=i==null?void 0:i.branchList)!=null&&o.length?i.branchList.reduce((u,f)=>u+Math.max(...f.map(y=>l(y)),1),0):1:0};return $(()=>l(n.modelValue)),(i,o)=>(d(),_(C,null,[D("div",E({class:"node-wrapper"},r(s)),[z(i.$slots,"default"),je],16),a.isPreview?x("",!0):(d(),S(le,{key:0,modelValue:r(e),"onUpdate:modelValue":o[0]||(o[0]=u=>H(e)?e.value=u:null),"cur-node":a.modelValue},null,8,["modelValue","cur-node"]))],64))}};const Ee=a=>(ve("data-v-653f9187"),a=a(),fe(),a),ze=Ee(()=>D("div",{class:"c-circle c-switch"}," switch ",-1)),He={__name:"Switch",props:{modelValue:{type:Object,default:()=>({})},isPreview:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(a,{emit:t}){const n=a,e=$({get:()=>n.modelValue.branchList||[],set:o=>t("update:modelValue",{...n.modelValue,branchList:o})}),s=U(),l=()=>{e.value.push([])},i=o=>{e.value.splice(o,1)};return(o,u)=>(d(),_(C,null,[D("div",E({class:"node-wrapper"},r(s)),[z(o.$slots,"default",{},void 0,!0),ze],16),a.isPreview?x("",!0):(d(),S(le,{key:0,modelValue:r(e),"onUpdate:modelValue":u[0]||(u[0]=f=>H(e)?e.value=f:null),"cur-node":a.modelValue,onAddBranch:l,onRemoveBranch:i},null,8,["modelValue","cur-node"]))],64))}},Ye=A(He,[["__scopeId","data-v-653f9187"]]),Xe={},qe={class:"node-wrapper"},Ge=D("div",{class:"c-circle c-feat"}," Feat ",-1);function Je(a,t){return d(),_("div",qe,[z(a.$slots,"default"),Ge])}const Ke=A(Xe,[["render",Je]]),J=[{type:"start",component:M(ke),generateNode:()=>new b("start")},{type:"end",component:M(Me),generateNode:()=>new b("end")},{type:"if",component:M(Ue),generateNode:()=>new b("if")},{type:"switch",component:M(Ye),generateNode:(a=[[],[]])=>new b("switch",{branchList:a})},{type:"feat",component:M(Ke),generateNode:()=>new b("feat")}],F=2,te=(a,t=F)=>{const n=a==null?void 0:a.filter(Array.isArray);return n!=null&&n.length?t?n.length>=t?n.slice(0,t):n.slice().concat(new Array(t-n.length).fill(0).map(e=>[])):n.slice():new Array(t).fill(0).map(e=>[])},K=class{constructor(t,n={branchList:[]}){const{branchList:e}=n;if(Object.defineProperty(this,"id",{configurable:!1,writable:!1,value:++K.id}),Object.defineProperty(this,"type",{configurable:!1,writable:!1,value:J.some(s=>s.type===t)?t:"error"}),t==="if"){let s=te(e);Object.defineProperty(this,"branchList",{configurable:!1,get:()=>s,set(l){if(l.length!==F)throw new Y(`分支数量必须为${F}`);s=l}})}if(t==="switch"){let s=te(e,0);Object.defineProperty(this,"branchList",{configurable:!1,get:()=>s,set(l){if(l.length<F)throw new Y(`分支数量至少为${F}`);s=l}})}}toString(){return`{${Object.getOwnPropertyNames(this).reduce((t,n)=>{let e=`${t},${n}:`;return Array.isArray(this[n])?e+=`[${this[n].toString()}]`:typeof this[n]=="number"?e+=`${this[n].toString()}`:e+=`"${this[n].toString()}"`,e},"").slice(1)}}`}};let b=K;Z(b,"id",0);const Qe={type:"error",component:M(Y),generateNode:()=>new b("error")},We=["draggable","onDragstart","onClick"],Ze=D("div",{class:"line"},null,-1),et={__name:"RenderItem",props:{modelValue:{type:Object,default:()=>({})},nodeList:{type:Array,default:()=>[]}},emits:["update:modelValue","update:nodeList","addNode","subNode","moveTo"],setup(a,{emit:t}){const n=a,e=$({get:()=>n.modelValue,set:p=>t("update:modelValue",p)}),s=$({get:()=>n.nodeList,set:p=>t("update:nodeList",p)}),l=$(()=>(J.find(p=>p.type===e.value.type)||Qe).component),i=B("hoverStack"),o=B("dragConf"),u=B("activateNode"),f=$(()=>i.value[0]),y=()=>i.value.unshift(e.value),L=()=>i.value.shift(),h=()=>{o.value.customDragData={node:e.value,curBranch:s.value,target:null};const p=[],N=(V,ue)=>{var Q;!ue&&p.push(V),(Q=V==null?void 0:V.branchList)!=null&&Q.length&&V.branchList.forEach(W=>{p.push(W),W.forEach(de=>N(de))})};N(e.value,!0),o.value.dragFlag=!0,o.value.banDropNodeList=p},R=()=>{o.value.dragFlag=!1,o.value.banDropNodeList=[]},I=se(),g=()=>{o.value.customDragData&&(o.value.banDropNodeList.includes(e)||oe(o.value.customDragData.target)===I&&(t("moveTo",o.value.customDragData.node,o.value.customDragData.curBranch),o.value.customDragData=null,i.value=[]))},m=()=>{o.value.customDragData&&(o.value.customDragData.target=I)},c=()=>{o.value.customDragData&&(o.value.customDragData.target=null)},v=p=>{o.value.dragFlag&&!o.value.banDropNodeList.includes(e.value)&&p.preventDefault()},w=()=>{u.value=e.value};return(p,N)=>(d(),_(C,null,[D("div",{draggable:!["start","end"].includes(r(e).type),class:j({"node-box":!["start","end"].includes(r(e).type),"hover-node":r(f)===r(e)||r(u)===r(e),"no-branch-box":!["if","switch"].includes(r(e).type)}),onMouseenter:y,onMouseleave:L,onDragstart:P(h,["stop"]),onDragend:R,onClick:P(w,["stop"])},[(d(),S(ne(r(l)),{modelValue:r(e),"onUpdate:modelValue":N[1]||(N[1]=V=>H(e)?e.value=V:null)},{default:me(()=>[O(re,{onToSub:N[0]||(N[0]=V=>t("subNode"))})]),_:1},8,["modelValue"]))],42,We),r(e).type!=="end"?(d(),_(C,{key:0},[Ze,O(q,{class:j({canDropFlag:r(o).dragFlag&&!r(o).banDropNodeList.includes(r(e))}),onToAdd:N[2]||(N[2]=V=>t("addNode",V)),onDragover:v,onDrop:g,onDragenter:m,onDragleave:c},null,8,["class"])],64)):x("",!0)],64))}},tt=D("div",{class:"line"},null,-1),ce={__name:"RenderList",props:{modelValue:{type:Array,default:()=>[]},startLine:{type:Boolean,default:!0},branchCount:{type:Number,default:1}},emits:["update:modelValue","removeBranch"],setup(a,{emit:t}){const n=a,e=U(),s=$({get:()=>n.modelValue,set:g=>t("update:modelValue",g)}),l=B("dragConf"),i=B("hoverStack"),o=(g,m)=>{const c=m.generateNode();s.value.splice(g+1,0,c)},u=(g,m,c)=>{const v=m.findIndex(w=>w===g);if(m===s.value){if(v===c+1||v===c)return;v>c?(m.splice(v,1),m.splice(c+1,0,g)):(m.splice(c+1,0,g),m.splice(v,1))}else m.splice(v,1),s.value.splice(c+1,0,g)},f=g=>{s.value.splice(g,1)},y=se(),L=()=>{l.value.customDragData&&(l.value.banDropNodeList.includes(s)||oe(l.value.customDragData.target)===y&&(u(l.value.customDragData.node,l.value.customDragData.curBranch,-1),i.value=[],l.value.customDragData=null))},h=()=>{l.value.customDragData&&(l.value.customDragData.target=y)},R=()=>{l.value.customDragData&&(l.value.customDragData.target=null)},I=g=>{l.value.dragFlag&&!l.value.banDropNodeList.includes(s.value)&&g.preventDefault()};return(g,m)=>(d(),_("div",E({class:"render-list-wrapper"},r(e)),[a.startLine?(d(),_(C,{key:0},[a.branchCount>2?(d(),S(re,{key:0,onClick:m[0]||(m[0]=c=>t("removeBranch"))})):x("",!0),tt,O(q,{class:j({canDropFlag:r(l).dragFlag&&!r(l).banDropNodeList.includes(r(s))}),droppable:r(l).dragFlag&&!r(l).banDropNodeList.includes(r(s)),onToAdd:m[1]||(m[1]=c=>o(-1,c)),onDragover:I,onDrop:L,onDragenter:h,onDragleave:R},null,8,["class","droppable"])],64)):x("",!0),(d(!0),_(C,null,X(r(s),(c,v)=>(d(),S(et,{key:c.id,modelValue:r(s)[v],"onUpdate:modelValue":w=>r(s)[v]=w,"node-list":r(s),"onUpdate:nodeList":m[2]||(m[2]=w=>H(s)?s.value=w:null),onAddNode:w=>o(v,w),onSubNode:()=>f(v),onMoveTo:(w,p)=>u(w,p,v)},null,8,["modelValue","onUpdate:modelValue","node-list","onAddNode","onSubNode","onMoveTo"]))),128))],16))}};const at={class:"select-node-wrapper"},nt={__name:"AddNodeDialog",setup(a,{expose:t}){const n=k({x:1,y:1}),e=k(!1);let s;const l=(f,y)=>{s=y,n.value=f,e.value=!0},i=()=>{e.value=!1},o=f=>{i(),s(f)},u=k(J.filter(f=>!["start","end"].includes(f.type)));return t({show:l,close:i}),(f,y)=>_e((d(),_("div",{class:"add-node-dialog",style:ae({"--var-dialog-left":`${n.value.x}px`,"--var-dialog-top":`${n.value.y}px`,"--var-dialog-size":e.value?"300px":"0"})},[D("div",at,[(d(!0),_(C,null,X(u.value,L=>(d(),S(ne(L.component),{key:L.type,"is-preview":!0,onClick:()=>o(L)},null,8,["onClick"]))),128))])],4)),[[r(ge),i]])}},ot=A(nt,[["__scopeId","data-v-97bc81a4"]]);const st={__name:"Main",setup(a){const t=k([new b("start"),new b("feat"),new b("switch",{branchList:[[new b("feat")],[new b("feat")],[new b("feat")]]}),new b("end")]);console.log(t.value);const n=k(null);T("addNodeDialogRef",n);const e=k([]);T("hoverStack",e);const s=k({banDropNodeList:[],dragFlag:!1,customDragData:null});T("dragConf",s);const l=k(null);return T("activateNode",l),(i,o)=>(d(),_("div",{id:"canvas-main",class:"canvas-main",onClickCapture:o[1]||(o[1]=u=>l.value=null)},[O(ce,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=u=>t.value=u),"start-line":!1},null,8,["modelValue"]),O(ot,{ref_key:"addNodeDialogRef",ref:n},null,512)],32))}},rt=A(st,[["__scopeId","data-v-bef857b9"]]),it={__name:"index",setup(a){return(t,n)=>(d(),S(rt))}};export{it as default};
