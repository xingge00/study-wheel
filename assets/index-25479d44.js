import"./base-c31ed203.js";import{E as y}from"./el-input-0f9dc05a.js";import{p as E,f as x,o as b,c as V,a as f,U as g,b as o,w as B,j as I,R as O,_ as h,n as k,r as S,G as _,ap as C,J as F}from"./index-42a3b3d9.js";import{E as R}from"./el-button-93762f56.js";import{a as U,E as v}from"./el-form-item-afb508bf.js";import{E as j,a as w}from"./el-select-a89ed3ae.js";import"./el-scrollbar-9838aa2b.js";import"./el-popper-cba48a8c.js";import"./index-c0204ed0.js";import"./types-963db8e3.js";import"./index-1ddd45d5.js";import"./typescript-defaf979.js";import"./event-e06a23af.js";import"./isNil-c75b1b34.js";import"./index-35704a87.js";import"./index-276a81ed.js";import"./objects-be624d3c.js";import"./index-13ca5b04.js";import"./strings-42b284d1.js";import"./scroll-f2322233.js";import"./aria-60e0cdc6.js";import"./index-7ea428a2.js";import"./focus-trap-7fce6621.js";const M=E({__name:"MyInput",props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(t,{emit:p}){const s=t,e=x({get:()=>s.modelValue,set:i=>p("update:modelValue",i)});return(i,m)=>{const d=y;return b(),V("div",null,[f(g(t.modelValue)+" ",1),o(d,{modelValue:I(e),"onUpdate:modelValue":m[0]||(m[0]=a=>O(e)?e.value=a:null),class:"input"},{default:B(()=>[f(" input ")]),_:1},8,["modelValue"])])}}});const N=h(M,[["__scopeId","data-v-e95b4255"]]);function A(t){return typeof t=="function"||Object.prototype.toString.call(t)==="[object Object]"&&!C(t)}const D={name:"SearchBar",props:{searchOption:{type:Array,required:!0,default:()=>[]},title:{type:String,default:""},useSearch:{type:Boolean,default:!0}},emits:["handleSearch"],setup(t,{emit:p}){const s=k(),e=S({});(()=>{const a={};t.searchOption.forEach(({key:n,defaultValue:l})=>{a[n]=l||""}),e.value=a})();const m=()=>{p("handleSearch",e.value)},d={select:(a,n)=>{let l;const{options:c,...u}=a;return o(w,_({modelValue:e.value[n],"onUpdate:modelValue":r=>e.value[n]=r,placeholder:"请选择"},u),A(l=c.map(r=>o(j,{key:r.value,label:r.label,value:r.value},null)))?l:{default:()=>[l]})},input:(a,n)=>o(y,_({modelValue:e.value[n],"onUpdate:modelValue":l=>e.value[n]=l,placeholder:"请输入"},a),null),custom:(a,n)=>{const{component:l,...c}=a;return o(l,_({modelValue:e.value[n],"onUpdate:modelValue":u=>e.value[n]=u},c),null)}};return()=>{var a;return o("div",{class:"search-bar"},[(a=s.title)!=null&&a.call(s)||t.title?o("div",{class:"title"},[t.title]):null,o("div",{class:"search-bar-inner"},[o(U,{inline:!0,model:e.value,class:"demo-form-inline"},{default:()=>[t.searchOption.map(n=>{const{key:l,label:c,type:u,...r}=n;return o(v,{label:c,key:l,prop:l},{default:()=>[d[u]&&d[u](r,l)]})}),o(v,{class:"btn-group"},{default:()=>[t.useSearch&&o(R,{onClick:m},{default:()=>[f("查 询")]})]})]})])])}}};const $=h(D,[["__scopeId","data-v-f3ff36a7"]]),q={class:"wrapper"},G={__name:"index",setup(t){const p=S([{key:"name",label:"姓名",type:"input",disabled:!1},{key:"sex",label:"性别",type:"select",defaultValue:"2",options:[{label:"男",value:"1"},{label:"女",value:"2"}]},{key:"testCustom",label:"自定义",type:"custom",component:F(N)}]),s=e=>{console.log(e)};return(e,i)=>(b(),V("div",q,[o($,{"search-option":p.value,onHandleSearch:s},null,8,["search-option"])]))}};const ie=h(G,[["__scopeId","data-v-4b1a14f6"]]);export{ie as default};
