import{aq as v,J as W,k,y as L,a2 as T,_ as x,v as S,r as C,o as u,c as _,H,i as p,al as M,d as $,F as I,U,C as E}from"./index-e8c6a594.js";const J=v(),N="/study-wheel/worker/playBall.js";let o;const l={Init(){if(!window.SharedWorker){console.error("当前浏览器不支持SharedWorker");return}o=new SharedWorker(N),o.port.start(),o.port.addEventListener("message",this.messageHandle)},close(){o&&(this.postMessage({sendType:"close"}),o.port.removeEventListener("message",this.messageHandle),o.port.close(),o=void 0)},getSharedWorker(){return o},updateCurBall(t){this.postMessage({sendType:"updateCurBall",data:JSON.stringify(t)})},postMessage(t){o&&o.port.postMessage(t)},messageHandle({data:t}){const r=t.map(n=>({id:Symbol("ball"),...JSON.parse(n)}));console.log("temp",r),J.setBallList(r)}},q=t=>{const r=W([window.screenLeft,window.screenTop]);let n=null;const i=c=>{n=setTimeout(()=>{r[0]=window.screenLeft,r[1]=window.screenTop,i(c)},c)};return k(()=>{i(t)}),L(()=>{clearTimeout(n)}),r},A=()=>(k(()=>{l.Init()}),T(()=>{l.close()}),l);const F={__name:"ball",props:{ballPos:{type:Array,default:()=>[0,0]},screenPos:{type:Array,default:()=>[0,0]},size:{type:[Number,String],default:100}},setup(t){const r=t,n=S(()=>[r.ballPos[0]-r.screenPos[0],r.ballPos[1]-r.screenPos[1]]),i=C(null);return(c,d)=>(u(),_("div",{ref_key:"curBall",ref:i,style:H({"--left-value":`${p(n)[0]-t.size/2}px`,"--top-value":`${p(n)[1]-t.size/2}px`,"--size-value":`${t.size}px`}),class:"ball"},null,4))}},O=x(F,[["__scopeId","data-v-9758fdd2"]]);const j={class:"ball-container"},D={__name:"index",setup(t){const r=v(),{ballList:n}=M(r),i=A(),c=q(10),d=(e,s,a=!0)=>({id:Symbol("ball"),isChild:a,pos:e,size:s});i.updateCurBall(d([window.innerWidth/2,window.innerHeight/2],100)),$(()=>c,([e,s])=>{i.updateCurBall(d([window.innerWidth/2+e,window.innerHeight/2+s],100))},{deep:!0});const z=(e,s)=>{var w,g,h,B;const a=(((w=e==null?void 0:e.pos)==null?void 0:w[0])||0)-(((g=s==null?void 0:s.pos)==null?void 0:g[0])||0),f=(((h=e==null?void 0:e.pos)==null?void 0:h[1])||0)-(((B=s==null?void 0:s.pos)==null?void 0:B[1])||0),m=((e==null?void 0:e.size)||0)/2,y=((s==null?void 0:s.size)||0)/2;return Math.sqrt(a*a+f*f)<m+y?[d(e.pos,2*(m+y),!1)]:(console.log("[ball1, ball2]",[e,s]),[e,s])},P=S(()=>z(...n.value));return(e,s)=>(u(),_("div",j,[(u(!0),_(I,null,U(p(P),a=>(u(),E(O,{key:a.id,"ball-pos":a.pos,"screen-pos":p(c),size:a.size,"is-drag":a.isChild},null,8,["ball-pos","screen-pos","size","is-drag"]))),128))]))}},G=x(D,[["__scopeId","data-v-4a024177"]]);export{G as default};
