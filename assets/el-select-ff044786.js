import{t as Le,v as d,a4 as Te,d as q,i as oe,j as ol,A as Me,J as $e,a5 as tl,a2 as Il,n as T,Q as me,a1 as il,o as v,c as $,B as ie,L as k,V as J,E as m,S as U,r as A,k as al,H as te,s as cl,O as ne,a6 as fe,a7 as ll,m as pl,l as Ll,I as yl,Z as _,a8 as Tl,b as ve,w as L,C as K,F as nl,U as fl,G as P,a3 as Ml,R as z,a9 as $l,aa as Vl,D as vl}from"./index-275378bc.js";import{u as Cl}from"./index-fcacae8c.js";import{E as kl,u as Dl,a as Pl}from"./el-popper-ed0c1460.js";import{i as zl,E as Bl}from"./el-input-8a67cc8e.js";import{i as ml,d as hl,E as ql}from"./el-scrollbar-bdfbd42b.js";import{E as Wl,t as Fl}from"./index-4719fdfb.js";import{u as Kl,E as Al,a as Nl,d as Rl}from"./index-93923ab1.js";import{e as Hl}from"./strings-0248e459.js";import{g as B}from"./get-e7313515.js";import{c as ae,_ as Ve,g as jl,i as Ql,w as Gl,e as Sl}from"./base-fc88d408.js";import{u as rl}from"./index-623bc40d.js";import{e as Ul,a as Jl,b as Zl,i as bl}from"./el-button-7c2dd60d.js";import{d as Xl,U as Z,C as Ol}from"./event-e06a23af.js";import{s as Yl}from"./scroll-16b055b7.js";import{E as xl}from"./aria-60e0cdc6.js";import{C as _l}from"./index-e584593d.js";import{i as en}from"./validator-65102801.js";const ln=e=>Ul[e||"default"],nn=e=>({focus:()=>{var l,i;(i=(l=e.value)==null?void 0:l.focus)==null||i.call(l)}}),wl=Symbol("ElSelectGroup"),ke=Symbol("ElSelect");function on(e,l){const i=Le(ke),b=Le(wl,{disabled:!1}),g=d(()=>Object.prototype.toString.call(e.value).toLowerCase()==="[object object]"),p=d(()=>i.props.multiple?w(i.props.modelValue,e.value):E(e.value,i.props.modelValue)),r=d(()=>{if(i.props.multiple){const c=i.props.modelValue||[];return!p.value&&c.length>=i.props.multipleLimit&&i.props.multipleLimit>0}else return!1}),u=d(()=>e.label||(g.value?"":e.value)),S=d(()=>e.value||e.label||""),O=d(()=>e.disabled||l.groupDisabled||r.value),f=ol(),w=(c=[],h)=>{if(g.value){const y=i.props.valueKey;return c&&c.some(W=>Te(B(W,y))===B(h,y))}else return c&&c.includes(h)},E=(c,h)=>{if(g.value){const{valueKey:y}=i.props;return B(c,y)===B(h,y)}else return c===h},M=()=>{!e.disabled&&!b.disabled&&(i.hoverIndex=i.optionsArray.indexOf(f.proxy))};q(()=>u.value,()=>{!e.created&&!i.props.remote&&i.setSelected()}),q(()=>e.value,(c,h)=>{const{remote:y,valueKey:W}=i.props;if(Object.is(c,h)||(i.onOptionDestroy(h,f.proxy),i.onOptionCreate(f.proxy)),!e.created&&!y){if(W&&typeof c=="object"&&typeof h=="object"&&c[W]===h[W])return;i.setSelected()}}),q(()=>b.disabled,()=>{l.groupDisabled=b.disabled},{immediate:!0});const{queryChange:t}=Te(i);return q(t,c=>{const{query:h}=oe(c),y=new RegExp(Hl(h),"i");l.visible=y.test(u.value)||e.created,l.visible||i.filteredOptionsCount--}),{select:i,currentLabel:u,currentValue:S,itemSelected:p,isDisabled:O,hoverItem:M}}const tn=Me({name:"ElOption",componentName:"ElOption",props:{value:{required:!0,type:[String,Number,Boolean,Object]},label:[String,Number],created:Boolean,disabled:{type:Boolean,default:!1}},setup(e){const l=ae("select"),i=$e({index:-1,groupDisabled:!1,visible:!0,hitState:!1,hover:!1}),{currentLabel:b,itemSelected:g,isDisabled:p,select:r,hoverItem:u}=on(e,i),{visible:S,hover:O}=tl(i),f=ol().proxy;r.onOptionCreate(f),Il(()=>{const E=f.value,{selected:M}=r,c=(r.props.multiple?M:[M]).some(h=>h.value===f.value);T(()=>{r.cachedOptions.get(E)===f&&!c&&r.cachedOptions.delete(E)}),r.onOptionDestroy(E,f)});function w(){e.disabled!==!0&&i.groupDisabled!==!0&&r.handleOptionSelect(f,!0)}return{ns:l,currentLabel:b,itemSelected:g,isDisabled:p,select:r,hoverItem:u,visible:S,hover:O,selectOptionClick:w,states:i}}});function an(e,l,i,b,g,p){return me((v(),$("li",{class:m([e.ns.be("dropdown","item"),e.ns.is("disabled",e.isDisabled),{selected:e.itemSelected,hover:e.hover}]),onMouseenter:l[0]||(l[0]=(...r)=>e.hoverItem&&e.hoverItem(...r)),onClick:l[1]||(l[1]=U((...r)=>e.selectOptionClick&&e.selectOptionClick(...r),["stop"]))},[ie(e.$slots,"default",{},()=>[k("span",null,J(e.currentLabel),1)])],34)),[[il,e.visible]])}var sl=Ve(tn,[["render",an],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);const rn=Me({name:"ElSelectDropdown",componentName:"ElSelectDropdown",setup(){const e=Le(ke),l=ae("select"),i=d(()=>e.props.popperClass),b=d(()=>e.props.multiple),g=d(()=>e.props.fitInputWidth),p=A("");function r(){var u;p.value=`${(u=e.selectWrapper)==null?void 0:u.offsetWidth}px`}return al(()=>{r(),Cl(e.selectWrapper,r)}),{ns:l,minWidth:p,popperClass:i,isMultiple:b,isFitInputWidth:g}}});function sn(e,l,i,b,g,p){return v(),$("div",{class:m([e.ns.b("dropdown"),e.ns.is("multiple",e.isMultiple),e.popperClass]),style:te({[e.isFitInputWidth?"width":"minWidth"]:e.minWidth})},[ie(e.$slots,"default")],6)}var un=Ve(rn,[["render",sn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);function dn(e){const{t:l}=rl();return $e({options:new Map,cachedOptions:new Map,createdLabel:null,createdSelected:!1,selected:e.multiple?[]:{},inputLength:20,inputWidth:0,optionsCount:0,filteredOptionsCount:0,visible:!1,softFocus:!1,selectedLabel:"",hoverIndex:-1,query:"",previousQuery:null,inputHovering:!1,cachedPlaceHolder:"",currentPlaceholder:l("el.select.placeholder"),menuVisibleOnFocus:!1,isOnComposition:!1,isSilentBlur:!1,prefixWidth:11,tagInMultiLine:!1,mouseEnter:!1})}const cn=(e,l,i)=>{const{t:b}=rl(),g=ae("select");Kl({from:"suffixTransition",replacement:"override style scheme",version:"2.3.0",scope:"props",ref:"https://element-plus.org/en-US/component/select.html#select-attributes"},d(()=>e.suffixTransition===!1));const p=A(null),r=A(null),u=A(null),S=A(null),O=A(null),f=A(null),w=A(-1),E=cl({query:""}),M=cl(""),{form:t,formItem:c}=Jl(),h=d(()=>!e.filterable||e.multiple||!l.visible),y=d(()=>e.disabled||(t==null?void 0:t.disabled)),W=d(()=>{const n=e.multiple?Array.isArray(e.modelValue)&&e.modelValue.length>0:e.modelValue!==void 0&&e.modelValue!==null&&e.modelValue!=="";return e.clearable&&!y.value&&l.inputHovering&&n}),re=d(()=>e.remote&&e.filterable&&!e.remoteShowSuffix?"":e.suffixIcon),De=d(()=>g.is("reverse",re.value&&l.visible&&e.suffixTransition)),he=d(()=>e.remote?300:0),se=d(()=>e.loading?e.loadingText||b("el.select.loading"):e.remote&&l.query===""&&l.options.size===0?!1:e.filterable&&l.query&&l.options.size>0&&l.filteredOptionsCount===0?e.noMatchText||b("el.select.noMatch"):l.options.size===0?e.noDataText||b("el.select.noData"):null),I=d(()=>Array.from(l.options.values())),Pe=d(()=>Array.from(l.cachedOptions.values())),ze=d(()=>{const n=I.value.filter(o=>!o.created).some(o=>o.currentLabel===l.query);return e.filterable&&e.allowCreate&&l.query!==""&&!n}),ee=Zl(),Be=d(()=>["small"].includes(ee.value)?"small":"default"),qe=d({get(){return l.visible&&se.value!==!1},set(n){l.visible=n}});q([()=>y.value,()=>ee.value,()=>t==null?void 0:t.size],()=>{T(()=>{F()})}),q(()=>e.placeholder,n=>{l.cachedPlaceHolder=l.currentPlaceholder=n}),q(()=>e.modelValue,(n,o)=>{e.multiple&&(F(),n&&n.length>0||r.value&&l.query!==""?l.currentPlaceholder="":l.currentPlaceholder=l.cachedPlaceHolder,e.filterable&&!e.reserveKeyword&&(l.query="",R(l.query))),ue(),e.filterable&&!e.multiple&&(l.inputLength=20),!ml(n,o)&&e.validateEvent&&(c==null||c.validate("change").catch(a=>Xl()))},{flush:"post",deep:!0}),q(()=>l.visible,n=>{var o,a,s;n?((a=(o=u.value)==null?void 0:o.updatePopper)==null||a.call(o),e.filterable&&(l.filteredOptionsCount=l.optionsCount,l.query=e.remote?"":l.selectedLabel,e.multiple?(s=r.value)==null||s.focus():l.selectedLabel&&(l.currentPlaceholder=`${l.selectedLabel}`,l.selectedLabel=""),R(l.query),!e.multiple&&!e.remote&&(E.value.query="",fe(E),fe(M)))):(e.filterable&&(ne(e.filterMethod)&&e.filterMethod(""),ne(e.remoteMethod)&&e.remoteMethod("")),r.value&&r.value.blur(),l.query="",l.previousQuery=null,l.selectedLabel="",l.inputLength=20,l.menuVisibleOnFocus=!1,We(),T(()=>{r.value&&r.value.value===""&&l.selected.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)}),e.multiple||(l.selected&&(e.filterable&&e.allowCreate&&l.createdSelected&&l.createdLabel?l.selectedLabel=l.createdLabel:l.selectedLabel=l.selected.currentLabel,e.filterable&&(l.query=l.selectedLabel)),e.filterable&&(l.currentPlaceholder=l.cachedPlaceHolder))),i.emit("visible-change",n)}),q(()=>l.options.entries(),()=>{var n,o,a;if(!jl)return;(o=(n=u.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&F();const s=((a=O.value)==null?void 0:a.querySelectorAll("input"))||[];Array.from(s).includes(document.activeElement)||ue(),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&ge()},{flush:"post"}),q(()=>l.hoverIndex,n=>{Ql(n)&&n>-1?w.value=I.value[n]||{}:w.value={},I.value.forEach(o=>{o.hover=w.value===o})});const F=()=>{e.collapseTags&&!e.filterable||T(()=>{var n,o;if(!p.value)return;const a=p.value.$el.querySelector("input"),s=S.value,C=ln(ee.value||(t==null?void 0:t.size));a.style.height=`${(l.selected.length===0?C:Math.max(s?s.clientHeight+(s.clientHeight>C?6:0):0,C))-2}px`,l.tagInMultiLine=Number.parseFloat(a.style.height)>=C,l.visible&&se.value!==!1&&((o=(n=u.value)==null?void 0:n.updatePopper)==null||o.call(n))})},R=async n=>{if(!(l.previousQuery===n||l.isOnComposition)){if(l.previousQuery===null&&(ne(e.filterMethod)||ne(e.remoteMethod))){l.previousQuery=n;return}l.previousQuery=n,T(()=>{var o,a;l.visible&&((a=(o=u.value)==null?void 0:o.updatePopper)==null||a.call(o))}),l.hoverIndex=-1,e.multiple&&e.filterable&&T(()=>{const o=r.value.value.length*15+20;l.inputLength=e.collapseTags?Math.min(50,o):o,be(),F()}),e.remote&&ne(e.remoteMethod)?(l.hoverIndex=-1,e.remoteMethod(n)):ne(e.filterMethod)?(e.filterMethod(n),fe(M)):(l.filteredOptionsCount=l.optionsCount,E.value.query=n,fe(E),fe(M)),e.defaultFirstOption&&(e.filterable||e.remote)&&l.filteredOptionsCount&&(await T(),ge())}},be=()=>{l.currentPlaceholder!==""&&(l.currentPlaceholder=r.value.value?"":l.cachedPlaceHolder)},ge=()=>{const n=I.value.filter(s=>s.visible&&!s.disabled&&!s.states.groupDisabled),o=n.find(s=>s.created),a=n[0];l.hoverIndex=de(I.value,o||a)},ue=()=>{var n;if(e.multiple)l.selectedLabel="";else{const a=ye(e.modelValue);(n=a.props)!=null&&n.created?(l.createdLabel=a.props.value,l.createdSelected=!0):l.createdSelected=!1,l.selectedLabel=a.currentLabel,l.selected=a,e.filterable&&(l.query=l.selectedLabel);return}const o=[];Array.isArray(e.modelValue)&&e.modelValue.forEach(a=>{o.push(ye(a))}),l.selected=o,T(()=>{F()})},ye=n=>{let o;const a=ll(n).toLowerCase()==="object",s=ll(n).toLowerCase()==="null",C=ll(n).toLowerCase()==="undefined";for(let N=l.cachedOptions.size-1;N>=0;N--){const V=Pe.value[N];if(a?B(V.value,e.valueKey)===B(n,e.valueKey):V.value===n){o={value:n,currentLabel:V.currentLabel,isDisabled:V.isDisabled};break}}if(o)return o;const Q=a?n.label:!s&&!C?n:"",G={value:n,currentLabel:Q};return e.multiple&&(G.hitState=!1),G},We=()=>{setTimeout(()=>{const n=e.valueKey;e.multiple?l.selected.length>0?l.hoverIndex=Math.min.apply(null,l.selected.map(o=>I.value.findIndex(a=>B(a,n)===B(o,n)))):l.hoverIndex=-1:l.hoverIndex=I.value.findIndex(o=>pe(o)===pe(l.selected))},300)},Fe=()=>{var n,o;Ke(),(o=(n=u.value)==null?void 0:n.updatePopper)==null||o.call(n),e.multiple&&F()},Ke=()=>{var n;l.inputWidth=(n=p.value)==null?void 0:n.$el.offsetWidth},Ae=()=>{e.filterable&&l.query!==l.selectedLabel&&(l.query=l.selectedLabel,R(l.query))},Ne=hl(()=>{Ae()},he.value),Re=hl(n=>{R(n.target.value)},he.value),X=n=>{ml(e.modelValue,n)||i.emit(Ol,n)},He=n=>{if(n.target.value.length<=0&&!ce()){const o=e.modelValue.slice();o.pop(),i.emit(Z,o),X(o)}n.target.value.length===1&&e.modelValue.length===0&&(l.currentPlaceholder=l.cachedPlaceHolder)},je=(n,o)=>{const a=l.selected.indexOf(o);if(a>-1&&!y.value){const s=e.modelValue.slice();s.splice(a,1),i.emit(Z,s),X(s),i.emit("remove-tag",o.value)}n.stopPropagation()},Y=n=>{n.stopPropagation();const o=e.multiple?[]:"";if(!Ll(o))for(const a of l.selected)a.isDisabled&&o.push(a.value);i.emit(Z,o),X(o),l.hoverIndex=-1,l.visible=!1,i.emit("clear")},Ce=(n,o)=>{var a;if(e.multiple){const s=(e.modelValue||[]).slice(),C=de(s,n.value);C>-1?s.splice(C,1):(e.multipleLimit<=0||s.length<e.multipleLimit)&&s.push(n.value),i.emit(Z,s),X(s),n.created&&(l.query="",R(""),l.inputLength=20),e.filterable&&((a=r.value)==null||a.focus())}else i.emit(Z,n.value),X(n.value),l.visible=!1;l.isSilentBlur=o,Qe(),!l.visible&&T(()=>{H(n)})},de=(n=[],o)=>{if(!pl(o))return n.indexOf(o);const a=e.valueKey;let s=-1;return n.some((C,Q)=>Te(B(C,a))===B(o,a)?(s=Q,!0):!1),s},Qe=()=>{l.softFocus=!0;const n=r.value||p.value;n&&(n==null||n.focus())},H=n=>{var o,a,s,C,Q;const G=Array.isArray(n)?n[0]:n;let N=null;if(G!=null&&G.value){const V=I.value.filter(Ie=>Ie.value===G.value);V.length>0&&(N=V[0].$el)}if(u.value&&N){const V=(C=(s=(a=(o=u.value)==null?void 0:o.popperRef)==null?void 0:a.contentRef)==null?void 0:s.querySelector)==null?void 0:C.call(s,`.${g.be("dropdown","wrap")}`);V&&Yl(V,N)}(Q=f.value)==null||Q.handleScroll()},Ge=n=>{l.optionsCount++,l.filteredOptionsCount++,l.options.set(n.value,n),l.cachedOptions.set(n.value,n)},Ue=(n,o)=>{l.options.get(n)===o&&(l.optionsCount--,l.filteredOptionsCount--,l.options.delete(n))},Je=n=>{n.code!==xl.backspace&&ce(!1),l.inputLength=r.value.value.length*15+20,F()},ce=n=>{if(!Array.isArray(l.selected))return;const o=l.selected[l.selected.length-1];if(o)return n===!0||n===!1?(o.hitState=n,n):(o.hitState=!o.hitState,o.hitState)},Ze=n=>{const o=n.target.value;if(n.type==="compositionend")l.isOnComposition=!1,T(()=>R(o));else{const a=o[o.length-1]||"";l.isOnComposition=!zl(a)}},Xe=()=>{T(()=>H(l.selected))},j=n=>{l.softFocus?l.softFocus=!1:((e.automaticDropdown||e.filterable)&&(e.filterable&&!l.visible&&(l.menuVisibleOnFocus=!0),l.visible=!0),i.emit("focus",n))},Se=()=>{var n;l.visible=!1,(n=p.value)==null||n.blur()},Ye=n=>{T(()=>{l.isSilentBlur?l.isSilentBlur=!1:i.emit("blur",n)}),l.softFocus=!1},Oe=n=>{Y(n)},xe=()=>{l.visible=!1},_e=n=>{l.visible&&(n.preventDefault(),n.stopPropagation(),l.visible=!1)},we=n=>{var o;n&&!l.mouseEnter||y.value||(l.menuVisibleOnFocus?l.menuVisibleOnFocus=!1:(!u.value||!u.value.isFocusInsideContent())&&(l.visible=!l.visible),l.visible&&((o=r.value||p.value)==null||o.focus()))},Ee=()=>{l.visible?I.value[l.hoverIndex]&&Ce(I.value[l.hoverIndex],void 0):we()},pe=n=>pl(n.value)?B(n.value,e.valueKey):n.value,el=d(()=>I.value.filter(n=>n.visible).every(n=>n.disabled)),le=n=>{if(!l.visible){l.visible=!0;return}if(!(l.options.size===0||l.filteredOptionsCount===0)&&!l.isOnComposition&&!el.value){n==="next"?(l.hoverIndex++,l.hoverIndex===l.options.size&&(l.hoverIndex=0)):n==="prev"&&(l.hoverIndex--,l.hoverIndex<0&&(l.hoverIndex=l.options.size-1));const o=I.value[l.hoverIndex];(o.disabled===!0||o.states.groupDisabled===!0||!o.visible)&&le(n),T(()=>H(w.value))}};return{optionsArray:I,selectSize:ee,handleResize:Fe,debouncedOnInputChange:Ne,debouncedQueryChange:Re,deletePrevTag:He,deleteTag:je,deleteSelected:Y,handleOptionSelect:Ce,scrollToOption:H,readonly:h,resetInputHeight:F,showClose:W,iconComponent:re,iconReverse:De,showNewOption:ze,collapseTagSize:Be,setSelected:ue,managePlaceholder:be,selectDisabled:y,emptyText:se,toggleLastOptionHitState:ce,resetInputState:Je,handleComposition:Ze,onOptionCreate:Ge,onOptionDestroy:Ue,handleMenuEnter:Xe,handleFocus:j,blur:Se,handleBlur:Ye,handleClearClick:Oe,handleClose:xe,handleKeydownEscape:_e,toggleMenu:we,selectOption:Ee,getValueKey:pe,navigateOptions:le,dropMenuVisible:qe,queryChange:E,groupQueryChange:M,reference:p,input:r,tooltipRef:u,tags:S,selectWrapper:O,scrollbar:f,handleMouseEnter:()=>{l.mouseEnter=!0},handleMouseLeave:()=>{l.mouseEnter=!1}}},gl="ElSelect",pn=Me({name:gl,componentName:gl,components:{ElInput:Bl,ElSelectMenu:un,ElOption:sl,ElTag:Wl,ElScrollbar:ql,ElTooltip:kl,ElIcon:Al},directives:{ClickOutside:_l},props:{name:String,id:String,modelValue:{type:[Array,String,Number,Boolean,Object],default:void 0},autocomplete:{type:String,default:"off"},automaticDropdown:Boolean,size:{type:String,validator:en},effect:{type:String,default:"light"},disabled:Boolean,clearable:Boolean,filterable:Boolean,allowCreate:Boolean,loading:Boolean,popperClass:{type:String,default:""},remote:Boolean,loadingText:String,noMatchText:String,noDataText:String,remoteMethod:Function,filterMethod:Function,multiple:Boolean,multipleLimit:{type:Number,default:0},placeholder:{type:String},defaultFirstOption:Boolean,reserveKeyword:{type:Boolean,default:!0},valueKey:{type:String,default:"value"},collapseTags:Boolean,collapseTagsTooltip:{type:Boolean,default:!1},teleported:Dl.teleported,persistent:{type:Boolean,default:!0},clearIcon:{type:bl,default:Nl},fitInputWidth:{type:Boolean,default:!1},suffixIcon:{type:bl,default:Rl},tagType:{...Fl.type,default:"info"},validateEvent:{type:Boolean,default:!0},remoteShowSuffix:{type:Boolean,default:!1},suffixTransition:{type:Boolean,default:!0},placement:{type:String,values:Pl,default:"bottom-start"}},emits:[Z,Ol,"remove-tag","clear","visible-change","focus","blur"],setup(e,l){const i=ae("select"),b=ae("input"),{t:g}=rl(),p=dn(e),{optionsArray:r,selectSize:u,readonly:S,handleResize:O,collapseTagSize:f,debouncedOnInputChange:w,debouncedQueryChange:E,deletePrevTag:M,deleteTag:t,deleteSelected:c,handleOptionSelect:h,scrollToOption:y,setSelected:W,resetInputHeight:re,managePlaceholder:De,showClose:he,selectDisabled:se,iconComponent:I,iconReverse:Pe,showNewOption:ze,emptyText:ee,toggleLastOptionHitState:Be,resetInputState:qe,handleComposition:F,onOptionCreate:R,onOptionDestroy:be,handleMenuEnter:ge,handleFocus:ue,blur:ye,handleBlur:We,handleClearClick:Fe,handleClose:Ke,handleKeydownEscape:Ae,toggleMenu:Ne,selectOption:Re,getValueKey:X,navigateOptions:He,dropMenuVisible:je,reference:Y,input:Ce,tooltipRef:de,tags:Qe,selectWrapper:H,scrollbar:Ge,queryChange:Ue,groupQueryChange:Je,handleMouseEnter:ce,handleMouseLeave:Ze}=cn(e,p,l),{focus:Xe}=nn(Y),{inputWidth:j,selected:Se,inputLength:Ye,filteredOptionsCount:Oe,visible:xe,softFocus:_e,selectedLabel:we,hoverIndex:Ee,query:pe,inputHovering:el,currentPlaceholder:le,menuVisibleOnFocus:ul,isOnComposition:dl,isSilentBlur:n,options:o,cachedOptions:a,optionsCount:s,prefixWidth:C,tagInMultiLine:Q}=tl(p),G=d(()=>{const D=[i.b()],x=oe(u);return x&&D.push(i.m(x)),e.disabled&&D.push(i.m("disabled")),D}),N=d(()=>({maxWidth:`${oe(j)-32}px`,width:"100%"})),V=d(()=>({maxWidth:`${oe(j)>123?oe(j)-123:oe(j)-75}px`}));yl(ke,$e({props:e,options:o,optionsArray:r,cachedOptions:a,optionsCount:s,filteredOptionsCount:Oe,hoverIndex:Ee,handleOptionSelect:h,onOptionCreate:R,onOptionDestroy:be,selectWrapper:H,selected:Se,setSelected:W,queryChange:Ue,groupQueryChange:Je})),al(()=>{p.cachedPlaceHolder=le.value=e.placeholder||g("el.select.placeholder"),e.multiple&&Array.isArray(e.modelValue)&&e.modelValue.length>0&&(le.value=""),Cl(H,O),e.remote&&e.multiple&&re(),T(()=>{const D=Y.value&&Y.value.$el;if(D&&(j.value=D.getBoundingClientRect().width,l.slots.prefix)){const x=D.querySelector(`.${b.e("prefix")}`);C.value=Math.max(x.getBoundingClientRect().width+5,30)}}),W()}),e.multiple&&!Array.isArray(e.modelValue)&&l.emit(Z,[]),!e.multiple&&Array.isArray(e.modelValue)&&l.emit(Z,"");const Ie=d(()=>{var D,x;return(x=(D=de.value)==null?void 0:D.popperRef)==null?void 0:x.contentRef});return{tagInMultiLine:Q,prefixWidth:C,selectSize:u,readonly:S,handleResize:O,collapseTagSize:f,debouncedOnInputChange:w,debouncedQueryChange:E,deletePrevTag:M,deleteTag:t,deleteSelected:c,handleOptionSelect:h,scrollToOption:y,inputWidth:j,selected:Se,inputLength:Ye,filteredOptionsCount:Oe,visible:xe,softFocus:_e,selectedLabel:we,hoverIndex:Ee,query:pe,inputHovering:el,currentPlaceholder:le,menuVisibleOnFocus:ul,isOnComposition:dl,isSilentBlur:n,options:o,resetInputHeight:re,managePlaceholder:De,showClose:he,selectDisabled:se,iconComponent:I,iconReverse:Pe,showNewOption:ze,emptyText:ee,toggleLastOptionHitState:Be,resetInputState:qe,handleComposition:F,handleMenuEnter:ge,handleFocus:ue,blur:ye,handleBlur:We,handleClearClick:Fe,handleClose:Ke,handleKeydownEscape:Ae,toggleMenu:Ne,selectOption:Re,getValueKey:X,navigateOptions:He,dropMenuVisible:je,focus:Xe,reference:Y,input:Ce,tooltipRef:de,popperPaneRef:Ie,tags:Qe,selectWrapper:H,scrollbar:Ge,wrapperKls:G,selectTagsStyle:N,nsSelect:i,tagTextStyle:V,handleMouseEnter:ce,handleMouseLeave:Ze}}}),fn=["disabled","autocomplete"],vn={style:{height:"100%",display:"flex","justify-content":"center","align-items":"center"}};function mn(e,l,i,b,g,p){const r=_("el-tag"),u=_("el-tooltip"),S=_("el-icon"),O=_("el-input"),f=_("el-option"),w=_("el-scrollbar"),E=_("el-select-menu"),M=Tl("click-outside");return me((v(),$("div",{ref:"selectWrapper",class:m(e.wrapperKls),onMouseenter:l[22]||(l[22]=(...t)=>e.handleMouseEnter&&e.handleMouseEnter(...t)),onMouseleave:l[23]||(l[23]=(...t)=>e.handleMouseLeave&&e.handleMouseLeave(...t)),onClick:l[24]||(l[24]=U((...t)=>e.toggleMenu&&e.toggleMenu(...t),["stop"]))},[ve(u,{ref:"tooltipRef",visible:e.dropMenuVisible,placement:e.placement,teleported:e.teleported,"popper-class":[e.nsSelect.e("popper"),e.popperClass],"fallback-placements":["bottom-start","top-start","right","left"],effect:e.effect,pure:"",trigger:"click",transition:`${e.nsSelect.namespace.value}-zoom-in-top`,"stop-popper-mouse-event":!1,"gpu-acceleration":!1,persistent:e.persistent,onShow:e.handleMenuEnter},{default:L(()=>[k("div",{class:"select-trigger",onMouseenter:l[20]||(l[20]=t=>e.inputHovering=!0),onMouseleave:l[21]||(l[21]=t=>e.inputHovering=!1)},[e.multiple?(v(),$("div",{key:0,ref:"tags",class:m(e.nsSelect.e("tags")),style:te(e.selectTagsStyle)},[e.collapseTags&&e.selected.length?(v(),$("span",{key:0,class:m([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[ve(r,{closable:!e.selectDisabled&&!e.selected[0].isDisabled,size:e.collapseTagSize,hit:e.selected[0].hitState,type:e.tagType,"disable-transitions":"",onClose:l[0]||(l[0]=t=>e.deleteTag(t,e.selected[0]))},{default:L(()=>[k("span",{class:m(e.nsSelect.e("tags-text")),style:te(e.tagTextStyle)},J(e.selected[0].currentLabel),7)]),_:1},8,["closable","size","hit","type"]),e.selected.length>1?(v(),K(r,{key:0,closable:!1,size:e.collapseTagSize,type:e.tagType,"disable-transitions":""},{default:L(()=>[e.collapseTagsTooltip?(v(),K(u,{key:0,disabled:e.dropMenuVisible,"fallback-placements":["bottom","top","right","left"],effect:e.effect,placement:"bottom",teleported:e.teleported},{default:L(()=>[k("span",{class:m(e.nsSelect.e("tags-text"))},"+ "+J(e.selected.length-1),3)]),content:L(()=>[k("div",{class:m(e.nsSelect.e("collapse-tags"))},[(v(!0),$(nl,null,fl(e.selected.slice(1),(t,c)=>(v(),$("div",{key:c,class:m(e.nsSelect.e("collapse-tag"))},[(v(),K(r,{key:e.getValueKey(t),class:"in-tooltip",closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",style:{margin:"2px"},onClose:h=>e.deleteTag(h,t)},{default:L(()=>[k("span",{class:m(e.nsSelect.e("tags-text")),style:te({maxWidth:e.inputWidth-75+"px"})},J(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))],2))),128))],2)]),_:1},8,["disabled","effect","teleported"])):(v(),$("span",{key:1,class:m(e.nsSelect.e("tags-text"))},"+ "+J(e.selected.length-1),3))]),_:1},8,["size","type"])):P("v-if",!0)],2)):P("v-if",!0),P(" <div> "),e.collapseTags?P("v-if",!0):(v(),K(Ml,{key:1,onAfterLeave:e.resetInputHeight},{default:L(()=>[k("span",{class:m([e.nsSelect.b("tags-wrapper"),{"has-prefix":e.prefixWidth&&e.selected.length}])},[(v(!0),$(nl,null,fl(e.selected,t=>(v(),K(r,{key:e.getValueKey(t),closable:!e.selectDisabled&&!t.isDisabled,size:e.collapseTagSize,hit:t.hitState,type:e.tagType,"disable-transitions":"",onClose:c=>e.deleteTag(c,t)},{default:L(()=>[k("span",{class:m(e.nsSelect.e("tags-text")),style:te({maxWidth:e.inputWidth-75+"px"})},J(t.currentLabel),7)]),_:2},1032,["closable","size","hit","type","onClose"]))),128))],2)]),_:1},8,["onAfterLeave"])),P(" </div> "),e.filterable?me((v(),$("input",{key:2,ref:"input","onUpdate:modelValue":l[1]||(l[1]=t=>e.query=t),type:"text",class:m([e.nsSelect.e("input"),e.nsSelect.is(e.selectSize)]),disabled:e.selectDisabled,autocomplete:e.autocomplete,style:te({marginLeft:e.prefixWidth&&!e.selected.length||e.tagInMultiLine?`${e.prefixWidth}px`:"",flexGrow:1,width:`${e.inputLength/(e.inputWidth-32)}%`,maxWidth:`${e.inputWidth-42}px`}),onFocus:l[2]||(l[2]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onBlur:l[3]||(l[3]=(...t)=>e.handleBlur&&e.handleBlur(...t)),onKeyup:l[4]||(l[4]=(...t)=>e.managePlaceholder&&e.managePlaceholder(...t)),onKeydown:[l[5]||(l[5]=(...t)=>e.resetInputState&&e.resetInputState(...t)),l[6]||(l[6]=z(U(t=>e.navigateOptions("next"),["prevent"]),["down"])),l[7]||(l[7]=z(U(t=>e.navigateOptions("prev"),["prevent"]),["up"])),l[8]||(l[8]=z((...t)=>e.handleKeydownEscape&&e.handleKeydownEscape(...t),["esc"])),l[9]||(l[9]=z(U((...t)=>e.selectOption&&e.selectOption(...t),["stop","prevent"]),["enter"])),l[10]||(l[10]=z((...t)=>e.deletePrevTag&&e.deletePrevTag(...t),["delete"])),l[11]||(l[11]=z(t=>e.visible=!1,["tab"]))],onCompositionstart:l[12]||(l[12]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionupdate:l[13]||(l[13]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onCompositionend:l[14]||(l[14]=(...t)=>e.handleComposition&&e.handleComposition(...t)),onInput:l[15]||(l[15]=(...t)=>e.debouncedQueryChange&&e.debouncedQueryChange(...t))},null,46,fn)),[[$l,e.query]]):P("v-if",!0)],6)):P("v-if",!0),ve(O,{id:e.id,ref:"reference",modelValue:e.selectedLabel,"onUpdate:modelValue":l[16]||(l[16]=t=>e.selectedLabel=t),type:"text",placeholder:e.currentPlaceholder,name:e.name,autocomplete:e.autocomplete,size:e.selectSize,disabled:e.selectDisabled,readonly:e.readonly,"validate-event":!1,class:m([e.nsSelect.is("focus",e.visible)]),tabindex:e.multiple&&e.filterable?-1:void 0,onFocus:e.handleFocus,onBlur:e.handleBlur,onInput:e.debouncedOnInputChange,onPaste:e.debouncedOnInputChange,onCompositionstart:e.handleComposition,onCompositionupdate:e.handleComposition,onCompositionend:e.handleComposition,onKeydown:[l[17]||(l[17]=z(U(t=>e.navigateOptions("next"),["stop","prevent"]),["down"])),l[18]||(l[18]=z(U(t=>e.navigateOptions("prev"),["stop","prevent"]),["up"])),z(U(e.selectOption,["stop","prevent"]),["enter"]),z(e.handleKeydownEscape,["esc"]),l[19]||(l[19]=z(t=>e.visible=!1,["tab"]))]},Vl({suffix:L(()=>[e.iconComponent&&!e.showClose?(v(),K(S,{key:0,class:m([e.nsSelect.e("caret"),e.nsSelect.e("icon"),e.iconReverse])},{default:L(()=>[(v(),K(vl(e.iconComponent)))]),_:1},8,["class"])):P("v-if",!0),e.showClose&&e.clearIcon?(v(),K(S,{key:1,class:m([e.nsSelect.e("caret"),e.nsSelect.e("icon")]),onClick:e.handleClearClick},{default:L(()=>[(v(),K(vl(e.clearIcon)))]),_:1},8,["class","onClick"])):P("v-if",!0)]),_:2},[e.$slots.prefix?{name:"prefix",fn:L(()=>[k("div",vn,[ie(e.$slots,"prefix")])])}:void 0]),1032,["id","modelValue","placeholder","name","autocomplete","size","disabled","readonly","class","tabindex","onFocus","onBlur","onInput","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onKeydown"])],32)]),content:L(()=>[ve(E,null,{default:L(()=>[me(ve(w,{ref:"scrollbar",tag:"ul","wrap-class":e.nsSelect.be("dropdown","wrap"),"view-class":e.nsSelect.be("dropdown","list"),class:m([e.nsSelect.is("empty",!e.allowCreate&&Boolean(e.query)&&e.filteredOptionsCount===0)])},{default:L(()=>[e.showNewOption?(v(),K(f,{key:0,value:e.query,created:!0},null,8,["value"])):P("v-if",!0),ie(e.$slots,"default")]),_:3},8,["wrap-class","view-class","class"]),[[il,e.options.size>0&&!e.loading]]),e.emptyText&&(!e.allowCreate||e.loading||e.allowCreate&&e.options.size===0)?(v(),$(nl,{key:0},[e.$slots.empty?ie(e.$slots,"empty",{key:0}):(v(),$("p",{key:1,class:m(e.nsSelect.be("dropdown","empty"))},J(e.emptyText),3))],64)):P("v-if",!0)]),_:3})]),_:3},8,["visible","placement","teleported","popper-class","effect","transition","persistent","onShow"])],34)),[[M,e.handleClose,e.popperPaneRef]])}var hn=Ve(pn,[["render",mn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);const bn=Me({name:"ElOptionGroup",componentName:"ElOptionGroup",props:{label:String,disabled:{type:Boolean,default:!1}},setup(e){const l=ae("select"),i=A(!0),b=ol(),g=A([]);yl(wl,$e({...tl(e)}));const p=Le(ke);al(()=>{g.value=r(b.subTree)});const r=S=>{const O=[];return Array.isArray(S.children)&&S.children.forEach(f=>{var w;f.type&&f.type.name==="ElOption"&&f.component&&f.component.proxy?O.push(f.component.proxy):(w=f.children)!=null&&w.length&&O.push(...r(f))}),O},{groupQueryChange:u}=Te(p);return q(u,()=>{i.value=g.value.some(S=>S.visible===!0)},{flush:"post"}),{visible:i,ns:l}}});function gn(e,l,i,b,g,p){return me((v(),$("ul",{class:m(e.ns.be("group","wrap"))},[k("li",{class:m(e.ns.be("group","title"))},J(e.label),3),k("li",null,[k("ul",{class:m(e.ns.b("group"))},[ie(e.$slots,"default")],2)])],2)),[[il,e.visible]])}var El=Ve(bn,[["render",gn],["__file","/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);const qn=Gl(hn,{Option:sl,OptionGroup:El}),Wn=Sl(sl);Sl(El);export{Wn as E,qn as a};
