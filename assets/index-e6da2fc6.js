import{A as E,d as x,o as y,c as b,a as f,O as g,b as o,w as B,k as I,X as O,P as h,q as k,r as V,W as _,b0 as C,a6 as F}from"./index-274faae7.js";import{E as S}from"./el-input-4516e7eb.js";import{E as w}from"./el-button-44cd7fe3.js";import{a as M,E as v}from"./el-form-item-3d6cc015.js";import{E as R,a as U}from"./el-select-571b198e.js";import"./el-scrollbar-ce87f6cc.js";import"./event-9519ab40.js";import"./index-b6b8256e.js";import"./get-e7313515.js";import"./objects-42526cee.js";import"./index-a170027c.js";import"./index-dbd292ce.js";import"./strings-d6676f3c.js";import"./index-197c75cb.js";import"./scroll-1b1472d8.js";import"./validator-095d3edc.js";const j=E({__name:"MyInput",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(t,{emit:c}){const s=t,e=x({get:()=>s.modelValue,set:d=>c("update:modelValue",d)});return(d,i)=>{const m=S;return y(),b("div",null,[f(g(t.modelValue)+" ",1),o(m,{modelValue:I(e),"onUpdate:modelValue":i[0]||(i[0]=a=>O(e)?e.value=a:null),class:"input"},{default:B(()=>[f(" input ")]),_:1},8,["modelValue"])])}}});const A=h(j,[["__scopeId","data-v-e95b4255"]]);function N(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!C(t)}const q={name:"SearchBar",props:{searchOption:{type:Array,required:!0,default:()=>[]},title:{type:String,default:""},useSearch:{type:Boolean,default:!0}},emits:["handleSearch"],setup(t,{emit:c}){const s=k(),e=V({});(()=>{const a={};t.searchOption.forEach(({key:n,defaultValue:l})=>{a[n]=l||""}),e.value=a})();const i=()=>{c("handleSearch",e.value)},m={select:(a,n)=>{let l;const{options:p,...r}=a;return o(U,_({modelValue:e.value[n],"onUpdate:modelValue":u=>e.value[n]=u,placeholder:"请选择"},r),N(l=p.map(u=>o(R,{key:u.value,label:u.label,value:u.value},null)))?l:{default:()=>[l]})},input:(a,n)=>o(S,_({modelValue:e.value[n],"onUpdate:modelValue":l=>e.value[n]=l,placeholder:"请输入"},a),null),custom:(a,n)=>{const{component:l,...p}=a;return o(l,_({modelValue:e.value[n],"onUpdate:modelValue":r=>e.value[n]=r},p),null)}};return()=>{var a;return o("div",{class:"search-bar"},[(a=s.title)!=null&&a.call(s)||t.title?o("div",{class:"title"},[t.title]):null,o("div",{class:"search-bar-inner"},[o(M,{inline:!0,model:e.value,class:"demo-form-inline"},{default:()=>[t.searchOption.map(n=>{const{key:l,label:p,type:r,...u}=n;return o(v,{label:p,key:l,prop:l},{default:()=>[m[r]&&m[r](u,l)]})}),o(v,{class:"btn-group"},{default:()=>[t.useSearch&&o(w,{onClick:i},{default:()=>[f("查 询")]})]})]})])])}}};const D=h(q,[["__scopeId","data-v-f3ff36a7"]]),P={class:"wrapper"},$={__name:"index",setup(t){const c=V([{key:"name",label:"姓名",type:"input",disabled:!1},{key:"sex",label:"性别",type:"select",defaultValue:"2",options:[{label:"男",value:"1"},{label:"女",value:"2"}]},{key:"testCustom",label:"自定义",type:"custom",component:F(A)}]),s=e=>{console.log(e)};return(e,d)=>(y(),b("div",P,[o(D,{"search-option":c.value,onHandleSearch:s},null,8,["search-option"])]))}};const oe=h($,[["__scopeId","data-v-4b1a14f6"]]);export{oe as default};