import"./base-e7f1e9cc.js";import{E as y}from"./el-input-f8c105f0.js";import{A as E,v as x,o as b,c as V,a as f,S as g,b as o,w as B,i as I,R as O,_ as h,z as k,r as S,M as _,ap as C,s as F}from"./index-ea08172c.js";import{E as M}from"./el-button-9d0ba982.js";import{a as R,E as v}from"./el-form-item-4f0e28e0.js";import{E as w,a as U}from"./el-select-cc2286ab.js";import"./el-scrollbar-22fc04de.js";import"./el-popper-5ba6e9ae.js";import"./index-4fc09483.js";import"./index-2d2c1f52.js";import"./typescript-defaf979.js";import"./event-e06a23af.js";import"./isNil-c75b1b34.js";import"./index-714188a9.js";import"./index-1d99722b.js";import"./objects-2d2aae1c.js";import"./index-255cf008.js";import"./strings-c325635a.js";import"./scroll-77c71a3f.js";import"./aria-60e0cdc6.js";import"./index-0e4e7197.js";import"./focus-trap-4763f64c.js";const j=E({__name:"MyInput",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(t,{emit:p}){const s=t,e=x({get:()=>s.modelValue,set:i=>p("update:modelValue",i)});return(i,d)=>{const m=y;return b(),V("div",null,[f(g(t.modelValue)+" ",1),o(m,{modelValue:I(e),"onUpdate:modelValue":d[0]||(d[0]=a=>O(e)?e.value=a:null),class:"input"},{default:B(()=>[f(" input ")]),_:1},8,["modelValue"])])}}});const A=h(j,[["__scopeId","data-v-e95b4255"]]);function N(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!C(t)}const D={name:"SearchBar",props:{searchOption:{type:Array,required:!0,default:()=>[]},title:{type:String,default:""},useSearch:{type:Boolean,default:!0}},emits:["handleSearch"],setup(t,{emit:p}){const s=k(),e=S({});(()=>{const a={};t.searchOption.forEach(({key:n,defaultValue:l})=>{a[n]=l||""}),e.value=a})();const d=()=>{p("handleSearch",e.value)},m={select:(a,n)=>{let l;const{options:c,...u}=a;return o(U,_({modelValue:e.value[n],"onUpdate:modelValue":r=>e.value[n]=r,placeholder:"请选择"},u),N(l=c.map(r=>o(w,{key:r.value,label:r.label,value:r.value},null)))?l:{default:()=>[l]})},input:(a,n)=>o(y,_({modelValue:e.value[n],"onUpdate:modelValue":l=>e.value[n]=l,placeholder:"请输入"},a),null),custom:(a,n)=>{const{component:l,...c}=a;return o(l,_({modelValue:e.value[n],"onUpdate:modelValue":u=>e.value[n]=u},c),null)}};return()=>{var a;return o("div",{class:"search-bar"},[(a=s.title)!=null&&a.call(s)||t.title?o("div",{class:"title"},[t.title]):null,o("div",{class:"search-bar-inner"},[o(R,{inline:!0,model:e.value,class:"demo-form-inline"},{default:()=>[t.searchOption.map(n=>{const{key:l,label:c,type:u,...r}=n;return o(v,{label:c,key:l,prop:l},{default:()=>[m[u]&&m[u](r,l)]})}),o(v,{class:"btn-group"},{default:()=>[t.useSearch&&o(M,{onClick:d},{default:()=>[f("查 询")]})]})]})])])}}};const $=h(D,[["__scopeId","data-v-f3ff36a7"]]),q={class:"wrapper"},z={__name:"index",setup(t){const p=S([{key:"name",label:"姓名",type:"input",disabled:!1},{key:"sex",label:"性别",type:"select",defaultValue:"2",options:[{label:"男",value:"1"},{label:"女",value:"2"}]},{key:"testCustom",label:"自定义",type:"custom",component:F(A)}]),s=e=>{console.log(e)};return(e,i)=>(b(),V("div",q,[o($,{"search-option":p.value,onHandleSearch:s},null,8,["search-option"])]))}};const ce=h(z,[["__scopeId","data-v-4b1a14f6"]]);export{ce as default};
