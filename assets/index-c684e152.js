import"./base-aa9563f4.js";import{E as y}from"./el-input-cb8555fc.js";import{A as E,v as x,o as b,c as V,a as f,V as g,b as o,w as B,i as I,a0 as O,_ as h,z as k,r as S,M as _,ap as C,s as F}from"./index-8ae97b1d.js";import{E as M}from"./el-button-7af24728.js";import{a as w,E as v}from"./el-form-item-aa2da51c.js";import{E as R,a as U}from"./el-select-d98f2e37.js";import"./el-scrollbar-9f38562a.js";import"./el-popper-b8155217.js";import"./index-4dfb43ce.js";import"./index-7c41fb03.js";import"./typescript-defaf979.js";import"./event-e06a23af.js";import"./isNil-c75b1b34.js";import"./index-5e036139.js";import"./get-e7313515.js";import"./objects-853fe3fc.js";import"./index-72266f70.js";import"./index-a061091a.js";import"./strings-4444b336.js";import"./index-303d9eff.js";import"./scroll-fe30122f.js";import"./aria-60e0cdc6.js";import"./focus-trap-b12ee28c.js";const j=E({__name:"MyInput",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(t,{emit:p}){const s=t,e=x({get:()=>s.modelValue,set:i=>p("update:modelValue",i)});return(i,m)=>{const d=y;return b(),V("div",null,[f(g(t.modelValue)+" ",1),o(d,{modelValue:I(e),"onUpdate:modelValue":m[0]||(m[0]=a=>O(e)?e.value=a:null),class:"input"},{default:B(()=>[f(" input ")]),_:1},8,["modelValue"])])}}});const A=h(j,[["__scopeId","data-v-e95b4255"]]);function N(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!C(t)}const D={name:"SearchBar",props:{searchOption:{type:Array,required:!0,default:()=>[]},title:{type:String,default:""},useSearch:{type:Boolean,default:!0}},emits:["handleSearch"],setup(t,{emit:p}){const s=k(),e=S({});(()=>{const a={};t.searchOption.forEach(({key:n,defaultValue:l})=>{a[n]=l||""}),e.value=a})();const m=()=>{p("handleSearch",e.value)},d={select:(a,n)=>{let l;const{options:c,...u}=a;return o(U,_({modelValue:e.value[n],"onUpdate:modelValue":r=>e.value[n]=r,placeholder:"请选择"},u),N(l=c.map(r=>o(R,{key:r.value,label:r.label,value:r.value},null)))?l:{default:()=>[l]})},input:(a,n)=>o(y,_({modelValue:e.value[n],"onUpdate:modelValue":l=>e.value[n]=l,placeholder:"请输入"},a),null),custom:(a,n)=>{const{component:l,...c}=a;return o(l,_({modelValue:e.value[n],"onUpdate:modelValue":u=>e.value[n]=u},c),null)}};return()=>{var a;return o("div",{class:"search-bar"},[(a=s.title)!=null&&a.call(s)||t.title?o("div",{class:"title"},[t.title]):null,o("div",{class:"search-bar-inner"},[o(w,{inline:!0,model:e.value,class:"demo-form-inline"},{default:()=>[t.searchOption.map(n=>{const{key:l,label:c,type:u,...r}=n;return o(v,{label:c,key:l,prop:l},{default:()=>[d[u]&&d[u](r,l)]})}),o(v,{class:"btn-group"},{default:()=>[t.useSearch&&o(M,{onClick:m},{default:()=>[f("查 询")]})]})]})])])}}};const $=h(D,[["__scopeId","data-v-f3ff36a7"]]),q={class:"wrapper"},z={__name:"index",setup(t){const p=S([{key:"name",label:"姓名",type:"input",disabled:!1},{key:"sex",label:"性别",type:"select",defaultValue:"2",options:[{label:"男",value:"1"},{label:"女",value:"2"}]},{key:"testCustom",label:"自定义",type:"custom",component:F(A)}]),s=e=>{console.log(e)};return(e,i)=>(b(),V("div",q,[o($,{"search-option":p.value,onHandleSearch:s},null,8,["search-option"])]))}};const ie=h(z,[["__scopeId","data-v-4b1a14f6"]]);export{ie as default};
