var me=Object.defineProperty;var _e=(n,t,a)=>t in n?me(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a;var ee=(n,t,a)=>(_e(n,typeof t!="symbol"?t+"":t,a),a);import"./base-e7f1e9cc.js";import{E as ge}from"./el-button-9d0ba982.js";import{_ as x,a2 as E,t as A,o as i,c as y,L as w,M as H,U as R,i as s,G as I,F as B,j as G,B as z,v as L,r as k,C as M,Y as W,E as U,H as se,R as Y,am as he,an as ye,ar as P,w as re,b as O,D as le,a6 as ce,P as ue,a9 as be,a as te,S as ae,I as T}from"./index-ea08172c.js";import{C as De}from"./index-0e4e7197.js";import"./index-2d2c1f52.js";import"./index-714188a9.js";const Ne=["onClick"],we={key:0,class:"line"},$e={__name:"AddNodeBtn",props:{endLine:{type:Boolean,default:!0},addType:{type:String,default:"node"}},emits:["toAdd"],setup(n,{emit:t}){const a=n,e=E(),u=A("addNodeDialogRef"),r=p=>{if(p.id==="canvas-main"||!p)return{x:0,y:0};const v=r(p.offsetParent);return{x:v.x+p.offsetLeft,y:v.y+p.offsetTop}},l=p=>{t("toAdd",p)},o=G(),f=p=>{if(a.addType==="branch")return t("toAdd");const{target:v,offsetY:$}=p,{x:c,y:C}=r(v);u.value.show({x:v.clientWidth+c,y:$+C},l,o)};return(p,v)=>(i(),y(B,null,[w("div",H({class:"add-node"},s(e),{onClick:R(f,["stop"])})," + ",16,Ne),n.endLine?(i(),y("div",we)):I("",!0)],64))}},X=x($e,[["__scopeId","data-v-77b265a2"]]);const Ce=["onClick"],Ve={__name:"SubBtn",emits:["toSub"],setup(n,{emit:t}){const a=A("hoverStack"),e=u=>{a.value=[],t("toSub")};return(u,r)=>(i(),y("div",{class:"sub-node",onClick:R(e,["stop"])}," - ",8,Ce))}},de=x(Ve,[["__scopeId","data-v-554bf87e"]]),Le={},ke={class:"node-wrapper"},Be=w("div",{class:"c-circle c-start"}," start ",-1),Se=[Be];function Ae(n,t){return i(),y("div",ke,Se)}const Me=x(Le,[["render",Ae]]),xe={},Ie={class:"node-wrapper"},Pe=w("div",{class:"c-circle c-end"}," end ",-1),Oe=[Pe];function Re(n,t){return i(),y("div",Ie,Oe)}const je=x(xe,[["render",Re]]),Fe={},Te={class:"node-wrapper"},Ue=w("div",{class:"c-circle c-other"}," Error ",-1);function Ee(n,t){return i(),y("div",Te,[z(n.$slots,"default"),Ue])}const K=x(Fe,[["render",Ee]]),q=n=>{var t;return n?(t=n==null?void 0:n.branchList)!=null&&t.length?n.branchList.reduce((a,e)=>a+Math.max(...e.map(u=>q(u)),1),0):1:0},ne=n=>Array.isArray(n)?Math.max(...n.map(t=>q(t)),1):1,He=w("div",{class:"line"},null,-1),ie={__name:"BranchRender",props:{modelValue:{type:Object,default:()=>({})},curNode:{type:Object,default:()=>({})}},emits:["addBranch","removeBranch","update:modelValue"],setup(n,{emit:t}){const a=n,e=L({get:()=>a.modelValue||[],set:d=>t("update:modelValue",d)}),u=L(()=>q(a.curNode)),r=L(()=>{var d;return ne((d=e.value)==null?void 0:d[0])}),l=L(()=>{var d;return ne((d=e.value)==null?void 0:d[e.value.length-1])}),o=A("activateNode"),f=A("hoverStack"),p=L(()=>f.value[0]),v=d=>f.value.unshift(e.value[d]),$=d=>f.value.shift(),c=k(null),C=d=>{c.value=d,e.value[d]},S=()=>{c.value=null},_=d=>{c.value!==null&&d.preventDefault()},g=d=>{if(!(c.value===d||c.value===null)){if(c.value<d){const h=e.value[c.value];e.value.splice(d+1,0,h),e.value.splice(c.value,1)}else{const h=e.value.splice(c.value,1)[0];e.value.splice(d,0,h)}c.value=null}},b=d=>{o.value=e.value[d]};return(d,h)=>(i(),y(B,null,[He,n.curNode.type==="switch"?(i(),M(X,{key:0,class:"on-bottom","end-line":!1,"add-type":"branch",onToAdd:h[0]||(h[0]=D=>t("addBranch"))})):I("",!0),w("div",{class:"branch-wrapper branch-wrapper-width",style:se({"--var-col-count":s(u),"--var-first-branch-col-count":s(r),"--var-last-branch-col-count":s(l)})},[(i(!0),y(B,null,W(s(e),(D,m)=>(i(),M(pe,{key:m,modelValue:s(e)[m],"onUpdate:modelValue":V=>s(e)[m]=V,class:U({"hover-branch":s(p)===s(e)[m]||s(o)===s(e)[m],"can-drop-branch":c.value!==null&&c.value!==m}),"branch-count":s(e).length,draggable:!0,onMouseenter:()=>v(m),onMouseleave:()=>$(),onRemoveBranch:()=>t("removeBranch",m),onDragstart:R(()=>C(m),["stop"]),onDragover:h[1]||(h[1]=V=>_(V)),onDropCapture:()=>g(m),onDragend:S,onClick:R(()=>b(m),["stop"])},null,8,["modelValue","onUpdate:modelValue","class","branch-count","onMouseenter","onMouseleave","onRemoveBranch","onDragstart","onDropCapture","onClick"]))),128))],4)],64))}},ze=w("div",{class:"c-circle c-if"}," if ",-1),Ye={__name:"If",props:{modelValue:{type:Object,default:()=>({})},isPreview:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(n,{emit:t}){const a=n,e=L({get:()=>a.modelValue.branchList,set:l=>t("update:modelValue",{...a.modelValue,branchList:l})}),u=E(),r=l=>{var o;return l?(o=l==null?void 0:l.branchList)!=null&&o.length?l.branchList.reduce((f,p)=>f+Math.max(...p.map(v=>r(v)),1),0):1:0};return L(()=>r(a.modelValue)),(l,o)=>(i(),y(B,null,[w("div",H({class:"node-wrapper"},s(u)),[z(l.$slots,"default"),ze],16),n.isPreview?I("",!0):(i(),M(ie,{key:0,modelValue:s(e),"onUpdate:modelValue":o[0]||(o[0]=f=>Y(e)?e.value=f:null),"cur-node":n.modelValue},null,8,["modelValue","cur-node"]))],64))}};const Ke=n=>(he("data-v-653f9187"),n=n(),ye(),n),Ge=Ke(()=>w("div",{class:"c-circle c-switch"}," switch ",-1)),We={__name:"Switch",props:{modelValue:{type:Object,default:()=>({})},isPreview:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(n,{emit:t}){const a=n,e=L({get:()=>a.modelValue.branchList||[],set:o=>t("update:modelValue",{...a.modelValue,branchList:o})}),u=E(),r=()=>{e.value.push([])},l=o=>{e.value.splice(o,1)};return(o,f)=>(i(),y(B,null,[w("div",H({class:"node-wrapper"},s(u)),[z(o.$slots,"default",{},void 0,!0),Ge],16),n.isPreview?I("",!0):(i(),M(ie,{key:0,modelValue:s(e),"onUpdate:modelValue":f[0]||(f[0]=p=>Y(e)?e.value=p:null),"cur-node":n.modelValue,onAddBranch:r,onRemoveBranch:l},null,8,["modelValue","cur-node"]))],64))}},Xe=x(We,[["__scopeId","data-v-653f9187"]]),qe={},Je={class:"node-wrapper"},Qe=w("div",{class:"c-circle c-feat"}," Feat ",-1);function Ze(n,t){return i(),y("div",Je,[z(n.$slots,"default"),Qe])}const et=x(qe,[["render",Ze]]),J=[{type:"start",component:P(Me),generateNode:()=>new N("start")},{type:"end",component:P(je),generateNode:()=>new N("end")},{type:"if",component:P(Ye),generateNode:()=>new N("if")},{type:"switch",component:P(Xe),generateNode:(n=[[],[]])=>new N("switch",{branchList:n})},{type:"feat",component:P(et),generateNode:()=>new N("feat")}],j=2,oe=(n,t=j)=>{const a=n==null?void 0:n.filter(Array.isArray);return a!=null&&a.length?t?a.length>=t?a.slice(0,t):a.slice().concat(new Array(t-a.length).fill(0).map(e=>[])):a.slice():new Array(t).fill(0).map(e=>[])},F=class{constructor(t,a){const{branchList:e=[],parentNode:u=null,branchIdx:r=null}=a||{};if(Object.defineProperty(this,"id",{configurable:!1,writable:!1,value:++F.id}),Object.defineProperty(this,"type",{configurable:!1,writable:!1,value:J.some(l=>l.type===t)?t:"error"}),Object.defineProperty(this,"parentNode",{configurable:!1,value:u}),t==="if"){let l=oe(e);Object.defineProperty(this,"branchList",{configurable:!1,get:()=>l,set(o){if(o.length!==j)throw new K(`分支数量必须为${j}`);l=o}}),Object.defineProperty(this,"branchIdx",{configurable:!1,value:r})}if(t==="switch"){let l=oe(e,0);Object.defineProperty(this,"branchList",{configurable:!1,get:()=>l,set(o){if(o.length<j)throw new K(`分支数量至少为${j}`);l=o}}),Object.defineProperty(this,"branchIdx",{configurable:!1,value:r})}}static copyBranchList(t){return(t==null?void 0:t.map(a=>(a==null?void 0:a.map(e=>e.copySelf()))||[]))||[]}copySelf(){return new F(this.type,{branchList:F.copyBranchList(this.branchList)})}toString(){return`{${Object.getOwnPropertyNames(this).reduce((t,a)=>{let e=`${t},${a}:`;return Array.isArray(this[a])?e+=`[${this[a].toString()}]`:typeof this[a]=="number"?e+=`${this[a].toString()}`:typeof this[a]=="string"&&(e+=`"${this[a].toString()}"`),e},"").slice(1)}}`}};let N=F;ee(N,"id",0);const tt={type:"error",component:P(K),generateNode:()=>new N("error")},at=["draggable","onDragstart","onClick"],nt=w("div",{class:"line"},null,-1),ot={__name:"RenderItem",props:{modelValue:{type:Object,default:()=>({})},nodeList:{type:Array,default:()=>[]}},emits:["update:modelValue","update:nodeList","addNode","subNode","moveTo"],setup(n,{emit:t}){const a=n,e=L({get:()=>a.modelValue,set:D=>t("update:modelValue",D)}),u=L({get:()=>a.nodeList,set:D=>t("update:nodeList",D)}),r=L(()=>(J.find(D=>D.type===e.value.type)||tt).component),l=A("hoverStack"),o=A("dragConf"),f=A("activateNode"),p=L(()=>l.value[0]),v=()=>l.value.unshift(e.value),$=()=>l.value.shift(),c=()=>{o.value.customDragData={node:e.value,curBranch:u.value,target:null};const D=[],m=(V,ve)=>{var Q;!ve&&D.push(V),(Q=V==null?void 0:V.branchList)!=null&&Q.length&&V.branchList.forEach(Z=>{D.push(Z),Z.forEach(fe=>m(fe))})};m(e.value,!0),o.value.dragFlag=!0,o.value.banDropNodeList=D},C=()=>{o.value.dragFlag=!1,o.value.banDropNodeList=[]},S=G(),_=()=>{o.value.customDragData&&(o.value.banDropNodeList.includes(e)||ce(o.value.customDragData.target)===S&&(t("moveTo",o.value.customDragData.node,o.value.customDragData.curBranch),o.value.customDragData=null,l.value=[]))},g=()=>{o.value.customDragData&&(o.value.customDragData.target=S)},b=()=>{o.value.customDragData&&(o.value.customDragData.target=null)},d=D=>{o.value.dragFlag&&!o.value.banDropNodeList.includes(e.value)&&D.preventDefault()},h=()=>{f.value=e.value};return(D,m)=>(i(),y(B,null,[w("div",{draggable:!["start","end"].includes(s(e).type),class:U({"node-box":!["start","end"].includes(s(e).type),"hover-node":s(p)===s(e)||s(f)===s(e),"no-branch-box":!["if","switch"].includes(s(e).type)}),onMouseenter:v,onMouseleave:$,onDragstart:R(c,["stop"]),onDragend:C,onClick:R(h,["stop"])},[(i(),M(le(s(r)),{modelValue:s(e),"onUpdate:modelValue":m[1]||(m[1]=V=>Y(e)?e.value=V:null)},{default:re(()=>[O(de,{onToSub:m[0]||(m[0]=V=>t("subNode"))})]),_:1},8,["modelValue"]))],42,at),s(e).type!=="end"?(i(),y(B,{key:0},[nt,O(X,{class:U({canDropFlag:s(o).dragFlag&&!s(o).banDropNodeList.includes(s(e))}),onToAdd:m[2]||(m[2]=V=>t("addNode",V)),onDragover:d,onDrop:_,onDragenter:g,onDragleave:b},null,8,["class"])],64)):I("",!0)],64))}},st=w("div",{class:"line"},null,-1),pe={__name:"RenderList",props:{modelValue:{type:Array,default:()=>[]},startLine:{type:Boolean,default:!0},branchCount:{type:Number,default:1}},emits:["update:modelValue","removeBranch"],setup(n,{emit:t}){const a=n,e=E(),u=L({get:()=>a.modelValue,set:_=>t("update:modelValue",_)}),r=A("dragConf"),l=A("hoverStack"),o=(_,g)=>{const b=g.generateNode();u.value.splice(_+1,0,b)},f=(_,g,b)=>{const d=g.findIndex(h=>h===_);if(g===u.value){if(d===b+1||d===b)return;d>b?(g.splice(d,1),g.splice(b+1,0,_)):(g.splice(b+1,0,_),g.splice(d,1))}else g.splice(d,1),u.value.splice(b+1,0,_)},p=_=>{u.value.splice(_,1)},v=G(),$=()=>{r.value.customDragData&&(r.value.banDropNodeList.includes(u)||ce(r.value.customDragData.target)===v&&(f(r.value.customDragData.node,r.value.customDragData.curBranch,-1),l.value=[],r.value.customDragData=null))},c=()=>{r.value.customDragData&&(r.value.customDragData.target=v)},C=()=>{r.value.customDragData&&(r.value.customDragData.target=null)},S=_=>{r.value.dragFlag&&!r.value.banDropNodeList.includes(u.value)&&_.preventDefault()};return(_,g)=>(i(),y("div",H({class:"render-list-wrapper"},s(e)),[n.startLine?(i(),y(B,{key:0},[n.branchCount>2?(i(),M(de,{key:0,onClick:g[0]||(g[0]=b=>t("removeBranch"))})):I("",!0),st,O(X,{class:U({canDropFlag:s(r).dragFlag&&!s(r).banDropNodeList.includes(s(u))}),droppable:s(r).dragFlag&&!s(r).banDropNodeList.includes(s(u)),onToAdd:g[1]||(g[1]=b=>o(-1,b)),onDragover:S,onDrop:$,onDragenter:c,onDragleave:C},null,8,["class","droppable"])],64)):I("",!0),(i(!0),y(B,null,W(s(u),(b,d)=>(i(),M(ot,{key:b.id,modelValue:s(u)[d],"onUpdate:modelValue":h=>s(u)[d]=h,"node-list":s(u),"onUpdate:nodeList":g[2]||(g[2]=h=>Y(u)?u.value=h:null),onAddNode:h=>o(d,h),onSubNode:()=>p(d),onMoveTo:(h,D)=>f(h,D,d)},null,8,["modelValue","onUpdate:modelValue","node-list","onAddNode","onSubNode","onMoveTo"]))),128))],16))}};const rt={class:"select-node-wrapper"},lt={__name:"AddNodeDialog",setup(n,{expose:t}){const a=k({x:1,y:1}),e=k(!1);let u,r;const l=()=>{e.value=!1,u=null,r=null},o=(v,$,c)=>{if(r===c)return l();r=c,u=$,a.value=v,e.value=!0},f=v=>{l(),u==null||u(v)},p=k(J.filter(v=>!["start","end"].includes(v.type)));return t({show:o,close:l}),(v,$)=>ue((i(),y("div",{class:"add-node-dialog",style:se({"--var-dialog-left":`${a.value.x}px`,"--var-dialog-top":`${a.value.y}px`,"--var-dialog-size":e.value?"300px":"0"})},[w("div",rt,[(i(!0),y(B,null,W(p.value,c=>(i(),M(le(c.component),{key:c.type,"is-preview":!0,onClick:()=>f(c)},null,8,["onClick"]))),128))])],4)),[[s(De),l]])}},ct=x(lt,[["__scopeId","data-v-1c3f1435"]]);const ut={__name:"Main",setup(n){const t=k([new N("start"),new N("feat"),new N("switch",{branchList:[[new N("feat")],[new N("feat")],[new N("feat")]]}),new N("end")]);console.log(t.value);const a=k(null);T("addNodeDialogRef",a);const e=k([]);T("hoverStack",e);const u=k({banDropNodeList:[],dragFlag:!1,customDragData:null});T("dragConf",u);const r=k(null);T("activateNode",r);const l=k(null),o=$=>{const c=r.value;c&&(l.value={type:$,data:c})},f=$=>{if(!l.value)return;const{type:c,data:C}=l.value;if(!C||Array.isArray(C))return;({copy:()=>{t.value.splice(1,0,C.copySelf())},shear:()=>{t.value.splice(1,0,C)}})[c]()},p=k(!1),v=()=>{p.value=!p.value};return($,c)=>{const C=ge,S=be("mousetrap");return i(),y("div",{id:"canvas-main",class:"canvas-main",onClickCapture:c[3]||(c[3]=_=>r.value=null)},[O(C,{onClick:v},{default:re(()=>[te(" 快捷建："+ae(p.value?"开启":"关闭"),1)]),_:1}),O(pe,{modelValue:t.value,"onUpdate:modelValue":c[0]||(c[0]=_=>t.value=_),"start-line":!1},null,8,["modelValue"]),te(" "+ae(l.value)+" ",1),O(ct,{ref_key:"addNodeDialogRef",ref:a},null,512),p.value?ue((i(),y("div",{key:0,"onMod+c":c[1]||(c[1]=()=>o("copy")),"onMod+x":c[2]||(c[2]=()=>o("shear")),"onMod+v":f},null,544)),[[S,["mod+c","mod+v","mod+x"]]]):I("",!0)],32)}}},dt=x(ut,[["__scopeId","data-v-15aff64b"]]),ht={__name:"index",setup(n){return(t,a)=>(i(),M(dt))}};export{ht as default};
