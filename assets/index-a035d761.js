var De=Object.defineProperty;var Ne=(o,t,n)=>t in o?De(o,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):o[t]=n;var le=(o,t,n)=>(Ne(o,typeof t!="symbol"?t+"":t,n),n);import"./base-87c153a0.js";import{E as we}from"./el-button-4513aef7.js";import{_ as k,a2 as Y,t as B,o as p,c as N,L as b,M as K,U as E,i as u,G as M,F as S,j as Q,B as W,v as V,r as C,C as I,Y as Z,E as z,H as ee,R as X,am as ie,an as ve,ar as O,w as q,b as P,D as pe,a6 as fe,P as te,d as $e,S as j,a9 as Le,a as R,I as H}from"./index-c8d88ced.js";import{C as _e}from"./index-b69d5e34.js";import"./index-88c79d56.js";import"./index-930f686d.js";const Ce=["onClick"],Ve={key:0,class:"line"},xe={__name:"AddNodeBtn",props:{endLine:{type:Boolean,default:!0},addType:{type:String,default:"node"}},emits:["toAdd"],setup(o,{emit:t}){const n=o,e=Y(),l=B("addNodeDialogRef"),a=h=>{if(h.id==="canvas-main"||!h)return{x:0,y:0};const _=a(h.offsetParent);return{x:_.x+h.offsetLeft,y:_.y+h.offsetTop}},s=h=>{t("toAdd",h)},r=Q(),m=h=>{if(n.addType==="branch")return t("toAdd");const{target:_,offsetY:x}=h,{x:f,y:A}=a(_);l.value.show({x:_.clientWidth+f,y:x+A},s,r)};return(h,_)=>(p(),N(S,null,[b("div",K({class:"add-node"},u(e),{onClick:E(m,["stop"])})," + ",16,Ce),o.endLine?(p(),N("div",Ve)):M("",!0)],64))}},ae=k(xe,[["__scopeId","data-v-77b265a2"]]);const Be=["onClick"],Se={__name:"SubBtn",emits:["toSub"],setup(o,{emit:t}){const n=B("hoverStack"),e=l=>{n.value=[],t("toSub")};return(l,a)=>(p(),N("div",{class:"sub-node",onClick:E(e,["stop"])}," - ",8,Be))}},me=k(Se,[["__scopeId","data-v-554bf87e"]]),ke={},Ae={class:"node-wrapper"},Ie=b("div",{class:"c-circle c-start"}," start ",-1),Pe=[Ie];function Me(o,t){return p(),N("div",Ae,Pe)}const Re=k(ke,[["render",Me]]),Te={},Fe={class:"node-wrapper"},Oe=b("div",{class:"c-circle c-end"}," end ",-1),je=[Oe];function Ee(o,t){return p(),N("div",Fe,je)}const Ue=k(Te,[["render",Ee]]),He={},ze={class:"node-wrapper"},Ye=b("div",{class:"c-circle c-other"}," Error ",-1);function Ke(o,t){return p(),N("div",ze,[W(o.$slots,"default"),Ye])}const J=k(He,[["render",Ke]]),ne=o=>{var t;return o?(t=o==null?void 0:o.branchList)!=null&&t.length?o.branchList.reduce((n,e)=>n+Math.max(...e.map(l=>ne(l)),1),0):1:0},ce=o=>Array.isArray(o)?Math.max(...o.map(t=>ne(t)),1):1,We=b("div",{class:"line"},null,-1),he={__name:"BranchRender",props:{modelValue:{type:Object,default:()=>({})},curNode:{type:Object,default:()=>({})}},emits:["addBranch","removeBranch","update:modelValue"],setup(o,{emit:t}){const n=o,e=V({get:()=>n.modelValue||[],set:c=>t("update:modelValue",c)}),l=V(()=>ne(n.curNode)),a=V(()=>{var c;return ce((c=e.value)==null?void 0:c[0])}),s=V(()=>{var c;return ce((c=e.value)==null?void 0:c[e.value.length-1])}),r=B("activateNode"),m=B("hoverStack"),h=V(()=>m.value[0]),_=c=>m.value.unshift(e.value[c]),x=c=>m.value.shift(),f=C(null),A=c=>{f.value=c,e.value[c]},w=()=>{f.value=null},v=c=>{f.value!==null&&c.preventDefault()},i=c=>{if(!(f.value===c||f.value===null)){if(f.value<c){const d=e.value[f.value];e.value.splice(c+1,0,d),e.value.splice(f.value,1)}else{const d=e.value.splice(f.value,1)[0];e.value.splice(c,0,d)}f.value=null}},g=c=>{r.value=e.value[c]};return(c,d)=>(p(),N(S,null,[We,o.curNode.type==="switch"?(p(),I(ae,{key:0,class:"on-bottom","end-line":!1,"add-type":"branch",onToAdd:d[0]||(d[0]=y=>t("addBranch"))})):M("",!0),b("div",{class:"branch-wrapper branch-wrapper-width",style:ee({"--var-col-count":u(l),"--var-first-branch-col-count":u(a),"--var-last-branch-col-count":u(s)})},[(p(!0),N(S,null,Z(u(e),(y,D)=>(p(),I(ge,{key:D,modelValue:u(e)[D],"onUpdate:modelValue":L=>u(e)[D]=L,class:z({"hover-branch":u(h)===u(e)[D]||u(r)===u(e)[D],"can-drop-branch":f.value!==null&&f.value!==D}),"branch-count":u(e).length,draggable:!0,onMouseenter:()=>_(D),onMouseleave:()=>x(),onRemoveBranch:()=>t("removeBranch",D),onDragstart:E(()=>A(D),["stop"]),onDragover:d[1]||(d[1]=L=>v(L)),onDropCapture:()=>i(D),onDragend:w,onClick:E(()=>g(D),["stop"])},null,8,["modelValue","onUpdate:modelValue","class","branch-count","onMouseenter","onMouseleave","onRemoveBranch","onDragstart","onDropCapture","onClick"]))),128))],4)],64))}},Xe=b("div",{class:"c-circle c-if"}," if ",-1),Ge={__name:"If",props:{modelValue:{type:Object,default:()=>({})},isPreview:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(o,{emit:t}){const n=o,e=V({get:()=>n.modelValue.branchList,set:s=>t("update:modelValue",{...n.modelValue,branchList:s})}),l=Y(),a=s=>{var r;return s?(r=s==null?void 0:s.branchList)!=null&&r.length?s.branchList.reduce((m,h)=>m+Math.max(...h.map(_=>a(_)),1),0):1:0};return V(()=>a(n.modelValue)),(s,r)=>(p(),N(S,null,[b("div",K({class:"node-wrapper"},u(l)),[W(s.$slots,"default"),Xe],16),o.isPreview?M("",!0):(p(),I(he,{key:0,modelValue:u(e),"onUpdate:modelValue":r[0]||(r[0]=m=>X(e)?e.value=m:null),"cur-node":o.modelValue},null,8,["modelValue","cur-node"]))],64))}};const qe=o=>(ie("data-v-653f9187"),o=o(),ve(),o),Je=qe(()=>b("div",{class:"c-circle c-switch"}," switch ",-1)),Qe={__name:"Switch",props:{modelValue:{type:Object,default:()=>({})},isPreview:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(o,{emit:t}){const n=o,e=V({get:()=>n.modelValue.branchList||[],set:r=>t("update:modelValue",{...n.modelValue,branchList:r})}),l=Y(),a=()=>{e.value.push([])},s=r=>{e.value.splice(r,1)};return(r,m)=>(p(),N(S,null,[b("div",K({class:"node-wrapper"},u(l)),[W(r.$slots,"default",{},void 0,!0),Je],16),o.isPreview?M("",!0):(p(),I(he,{key:0,modelValue:u(e),"onUpdate:modelValue":m[0]||(m[0]=h=>X(e)?e.value=h:null),"cur-node":o.modelValue,onAddBranch:a,onRemoveBranch:s},null,8,["modelValue","cur-node"]))],64))}},Ze=k(Qe,[["__scopeId","data-v-653f9187"]]),et={},tt={class:"node-wrapper"},at=b("div",{class:"c-circle c-feat"}," Feat ",-1);function nt(o,t){return p(),N("div",tt,[W(o.$slots,"default"),at])}const ot=k(et,[["render",nt]]),oe=[{type:"start",component:O(Re),generateNode:()=>new $("start")},{type:"end",component:O(Ue),generateNode:()=>new $("end")},{type:"if",component:O(Ge),generateNode:()=>new $("if")},{type:"switch",component:O(Ze),generateNode:(o=[[],[]])=>new $("switch",{branchList:o})},{type:"feat",component:O(ot),generateNode:()=>new $("feat")}],F=2,ue=(o,t=F)=>{const n=o==null?void 0:o.filter(Array.isArray);return n!=null&&n.length?t?n.length>=t?n.slice(0,t):n.slice().concat(new Array(t-n.length).fill(0).map(e=>[])):n.slice():new Array(t).fill(0).map(e=>[])},de=()=>({code:""}),T=class{constructor(t,n){const{branchList:e=[],nodeInfo:l={}}=n||{};if(Object.defineProperty(this,"id",{configurable:!1,writable:!1,value:++T.id}),Object.defineProperty(this,"type",{configurable:!1,writable:!1,value:oe.some(a=>a.type===t)?t:"error"}),Object.defineProperty(this,"nodeInfo",{configurable:!1,get(){return new Proxy(l,{get(a,s,r){return Reflect.get(a,s,r)},set(a,s,r,m){console.log("修改了",a,"的",s,"为",r),Reflect.set(a,s,r,m)}})}}),t==="if"){let a=ue(e);Object.defineProperty(this,"branchList",{configurable:!1,get:()=>a,set(s){if(s.length!==F)throw new J(`分支数量必须为${F}`);console.log("val.length",s.length),a=s}})}if(t==="switch"){let a=ue(e,0);Object.defineProperty(this,"branchList",{configurable:!1,get:()=>a,set(s){if(s.length<F)throw new J(`分支数量至少为${F}`);a=s}})}}static copyBranchList(t){return(t==null?void 0:t.map(n=>(n==null?void 0:n.map(e=>e.copySelf()))||[]))||[]}copySelf(){return new T(this.type,{branchList:T.copyBranchList(this.branchList)})}static executeNode(t,n=[],e){e||(e=de());const{type:l,branchList:a}=t;let s;["if","switch"].includes(l)&&(s=T.executeList(a[0],n));const r={start:()=>`start
      `,feat:()=>`feat
      `,end:()=>`end
      `,if:()=>`if(){
        ${s.context.code}
        }
      `,switch:()=>`switch(){
        ${s.context.code}
      }
      `};return e.code+=r[l](),{result:n,context:e}}static executeList(t,n=[]){const e=de();return{result:t.reduce((a,s)=>T.executeNode(s,a,e).result,n),context:e}}toString(){return`{${Object.getOwnPropertyNames(this).reduce((t,n)=>{let e=`${t},${n}:`;return Array.isArray(this[n])?e+=`[${this[n].toString()}]`:typeof this[n]=="number"?e+=`${this[n].toString()}`:typeof this[n]=="string"?e+=`"${this[n].toString()}"`:e+=`{${this[n].toString()}}`,e},"").slice(1)}}`}};let $=T;le($,"id",0);const st={type:"error",component:O(J),generateNode:()=>new $("error")},U=(o,t,n=null)=>{for(let e in o){e=e-0;const l=o[e];if(l===t)return{nodeList:o,parentNode:n,nodeIdx:e,branchIdx:null};for(let a in l.branchList||[]){a=a-0;const s=l.branchList[a];if(s===t)return{nodeList:s,parentNode:l,branchIdx:a,nodeIdx:null};const r=U(s,t,l);if(r)return r}}return null},rt=["draggable","onDragstart","onClick"],lt=b("div",{class:"line"},null,-1),ct={__name:"RenderItem",props:{modelValue:{type:Object,default:()=>({})},nodeList:{type:Array,default:()=>[]}},emits:["update:modelValue","update:nodeList","addNode","subNode","moveTo"],setup(o,{emit:t}){const n=o,e=V({get:()=>n.modelValue,set:y=>t("update:modelValue",y)}),l=V({get:()=>n.nodeList,set:y=>t("update:nodeList",y)}),a=V(()=>(oe.find(y=>y.type===e.value.type)||st).component),s=B("hoverStack"),r=B("dragConf"),m=B("activateNode"),h=V(()=>s.value[0]),_=()=>s.value.unshift(e.value),x=()=>s.value.shift(),f=()=>{r.value.customDragData={node:e.value,curBranch:l.value,target:null};const y=[],D=(L,ye)=>{var se;!ye&&y.push(L),(se=L==null?void 0:L.branchList)!=null&&se.length&&L.branchList.forEach(re=>{y.push(re),re.forEach(be=>D(be))})};D(e.value,!0),r.value.dragFlag=!0,r.value.banDropNodeList=y},A=()=>{r.value.dragFlag=!1,r.value.banDropNodeList=[]},w=Q(),v=()=>{r.value.customDragData&&(r.value.banDropNodeList.includes(e)||fe(r.value.customDragData.target)===w&&(t("moveTo",r.value.customDragData.node,r.value.customDragData.curBranch),r.value.customDragData=null,s.value=[]))},i=()=>{r.value.customDragData&&(r.value.customDragData.target=w)},g=()=>{r.value.customDragData&&(r.value.customDragData.target=null)},c=y=>{r.value.dragFlag&&!r.value.banDropNodeList.includes(e.value)&&y.preventDefault()},d=()=>{m.value=e.value};return(y,D)=>(p(),N(S,null,[b("div",{draggable:!["start","end"].includes(u(e).type),class:z(["node-box",{"hover-node":u(h)===u(e)||u(m)===u(e),"no-branch-box":!["if","switch"].includes(u(e).type)}]),onMouseenter:_,onMouseleave:x,onDragstart:E(f,["stop"]),onDragend:A,onClick:E(d,["stop"])},[(p(),I(pe(u(a)),{modelValue:u(e),"onUpdate:modelValue":D[1]||(D[1]=L=>X(e)?e.value=L:null)},{default:q(()=>[P(me,{onToSub:D[0]||(D[0]=L=>t("subNode"))})]),_:1},8,["modelValue"]))],42,rt),u(e).type!=="end"?(p(),N(S,{key:0},[lt,P(ae,{class:z({canDropFlag:u(r).dragFlag&&!u(r).banDropNodeList.includes(u(e))}),onToAdd:D[2]||(D[2]=L=>t("addNode",L)),onDragover:c,onDrop:v,onDragenter:i,onDragleave:g},null,8,["class"])],64)):M("",!0)],64))}},ut=b("div",{class:"line"},null,-1),ge={__name:"RenderList",props:{modelValue:{type:Array,default:()=>[]},startLine:{type:Boolean,default:!0},branchCount:{type:Number,default:1}},emits:["update:modelValue","removeBranch"],setup(o,{emit:t}){const n=o,e=Y(),l=V({get:()=>n.modelValue,set:v=>t("update:modelValue",v)}),a=B("dragConf"),s=B("hoverStack"),r=(v,i)=>{const g=i.generateNode();l.value.splice(v+1,0,g)},m=(v,i,g)=>{const c=i.findIndex(d=>d===v);if(i===l.value){if(c===g+1||c===g)return;c>g?(i.splice(c,1),i.splice(g+1,0,v)):(i.splice(g+1,0,v),i.splice(c,1))}else i.splice(c,1),l.value.splice(g+1,0,v)},h=v=>{l.value.splice(v,1)},_=Q(),x=()=>{a.value.customDragData&&(a.value.banDropNodeList.includes(l)||fe(a.value.customDragData.target)===_&&(m(a.value.customDragData.node,a.value.customDragData.curBranch,-1),s.value=[],a.value.customDragData=null))},f=()=>{a.value.customDragData&&(a.value.customDragData.target=_)},A=()=>{a.value.customDragData&&(a.value.customDragData.target=null)},w=v=>{a.value.dragFlag&&!a.value.banDropNodeList.includes(l.value)&&v.preventDefault()};return(v,i)=>(p(),N("div",K({class:"render-list-wrapper"},u(e)),[o.startLine?(p(),N(S,{key:0},[o.branchCount>2?(p(),I(me,{key:0,onClick:i[0]||(i[0]=g=>t("removeBranch"))})):M("",!0),ut,P(ae,{class:z({canDropFlag:u(a).dragFlag&&!u(a).banDropNodeList.includes(u(l))}),droppable:u(a).dragFlag&&!u(a).banDropNodeList.includes(u(l)),onToAdd:i[1]||(i[1]=g=>r(-1,g)),onDragover:w,onDrop:x,onDragenter:f,onDragleave:A},null,8,["class","droppable"])],64)):M("",!0),(p(!0),N(S,null,Z(u(l),(g,c)=>(p(),I(ct,{key:g.id,modelValue:u(l)[c],"onUpdate:modelValue":d=>u(l)[c]=d,"node-list":u(l),"onUpdate:nodeList":i[2]||(i[2]=d=>X(l)?l.value=d:null),onAddNode:d=>r(c,d),onSubNode:()=>h(c),onMoveTo:(d,y)=>m(d,y,c)},null,8,["modelValue","onUpdate:modelValue","node-list","onAddNode","onSubNode","onMoveTo"]))),128))],16))}};const dt={class:"select-node-wrapper"},it={__name:"AddNodeDialog",setup(o,{expose:t}){const n=C({x:1,y:1}),e=C(!1);let l,a;const s=()=>{e.value=!1,l=null,a=null},r=(_,x,f)=>{if(a===f)return s();a=f,l=x,n.value=_,e.value=!0},m=_=>{l==null||l(_),s()},h=C(oe.filter(_=>!["start","end"].includes(_.type)));return t({show:r,close:s}),(_,x)=>te((p(),N("div",{class:"add-node-dialog",style:ee({"--var-dialog-left":`${n.value.x}px`,"--var-dialog-top":`${n.value.y}px`,"--var-dialog-size":e.value?"300px":"0"})},[b("div",dt,[(p(!0),N(S,null,Z(h.value,f=>(p(),I(pe(f.component),{key:f.type,"is-preview":!0,onClick:()=>m(f)},null,8,["onClick"]))),128))])],4)),[[u(_e),s]])}},vt=k(it,[["__scopeId","data-v-7f77c4dd"]]);const pt={__name:"InfoPanel",setup(o){const t="350px",n=B("activateNode"),e=C(!1);$e(()=>n.value,a=>{a&&(e.value=!0)});const l=()=>{e.value=!1};return(a,s)=>te((p(),N("div",{style:ee({"--var-width":t,"--var-right":e.value?0:`-${t}`}),class:"custom-drawer"},[b("span",null,j(u(n)),1)],4)),[[u(_e),l]])}},ft=k(pt,[["__scopeId","data-v-4dbaf912"]]);const G=o=>(ie("data-v-7c907fff"),o=o(),ve(),o),_t={style:{display:"inline-block","vertical-align":"top"}},mt=G(()=>b("br",null,null,-1)),ht=G(()=>b("br",null,null,-1)),gt=G(()=>b("br",null,null,-1)),yt=G(()=>b("br",null,null,-1)),bt={__name:"Main",setup(o){const t=C([new $("start"),new $("feat"),new $("switch",{branchList:[[new $("feat")],[new $("feat")],[new $("feat")]]}),new $("end")]);console.log(t.value);const n=C(null);H("addNodeDialogRef",n);const e=C([]);H("hoverStack",e);const l=C({banDropNodeList:[],dragFlag:!1,customDragData:null});H("dragConf",l);const a=C(null);H("activateNode",a);const s=C(null),r=()=>{var d;const w=a.value;if(!w||["start","end"].includes(w.type))return;const{parentNode:v,branchIdx:i,nodeList:g,nodeIdx:c}=U(t.value,a.value,null);if(Array.isArray(w)){if(((d=v.branchList)==null?void 0:d.length)<=F)throw new Error(`分支数量至少为${F},剪切失败！`);(v.branchList||[]).splice(i,1)}else g.splice(c,1);s.value={type:"shear",data:w}},m=()=>{const w=a.value;w&&(["start","end"].includes(w.type)||(s.value={type:"copy",data:w}))},h=w=>{if(!s.value)return;const{type:v,data:i}=s.value;if(!i||["end"].includes(a.value.type))return;const g={copyNode:()=>{if(!a.value||Array.isArray(a.value))return;const{nodeList:d,nodeIdx:y}=U(t.value,a.value,null);console.log({branchNodeList:d,nodeIdx:y}),d.splice(y+1,0,i.copySelf())},shearNode:()=>{if(!a.value||Array.isArray(a.value))return;const{nodeList:d,nodeIdx:y}=U(t.value,a.value,null);d.splice(y+1,0,i),s.value=null},copyBranch:()=>{var d;((d=a.value)==null?void 0:d.type)==="switch"&&a.value.branchList.push(i.map(y=>y.copySelf()))},shearBranch:()=>{var d;((d=a.value)==null?void 0:d.type)==="switch"&&(a.value.branchList.push(i),s.value=null)}},c=v+(Array.isArray(i)?"Branch":"Node");g[c]()},_=C(!0),x=()=>{_.value=!_.value},f=C(""),A=()=>{console.log("BaseNode.executeList(nodeList.value, [])",$.executeList(t.value,[]));const w=$.executeList(t.value,[]);f.value=w.context.code};return(w,v)=>{var c;const i=we,g=Le("mousetrap");return p(),N("div",{id:"canvas-main",class:"canvas-main",onClickCapture:v[3]||(v[3]=d=>a.value=null)},[P(i,{onClick:x},{default:q(()=>[R(" 快捷建："+j(_.value?"开启":"关闭"),1)]),_:1}),P(i,{onClick:A},{default:q(()=>[R(" 执行 ")]),_:1}),P(ge,{modelValue:t.value,"onUpdate:modelValue":v[0]||(v[0]=d=>t.value=d),"start-line":!1},null,8,["modelValue"]),b("div",_t,[R(" shearPlate: "+j(s.value)+" ",1),mt,R(" ParentNode: "+j(((c=u(U)(t.value,a.value,null))==null?void 0:c.parentNode)||"null")+" ",1),ht,R(" activateNode: "+j(a.value)+" ",1),gt,b("pre",null,[R("      code"),yt,R(`
      `+j(f.value)+`
    `,1)])]),P(vt,{ref_key:"addNodeDialogRef",ref:n},null,512),P(ft),_.value?te((p(),N("div",{key:0,"onMod+c":v[1]||(v[1]=()=>m()),"onMod+x":v[2]||(v[2]=()=>r()),"onMod+v":h},null,544)),[[g,["mod+c","mod+v","mod+x"]]]):M("",!0)],32)}}},Dt=k(bt,[["__scopeId","data-v-7c907fff"]]),Bt={__name:"index",setup(o){return(t,n)=>(p(),I(Dt))}};export{Bt as default};
