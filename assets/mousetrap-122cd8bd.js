var T={},W={get exports(){return T},set exports(c){T=c}};(function(c){(function(p,h,g){if(!p)return;for(var v={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},b={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},A={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},K={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},E,_=1;_<20;++_)v[111+_]="f"+_;for(_=0;_<=9;++_)v[_+96]=_.toString();function P(r,t,n){if(r.addEventListener){r.addEventListener(t,n,!1);return}r.attachEvent("on"+t,n)}function I(r){if(r.type=="keypress"){var t=String.fromCharCode(r.which);return r.shiftKey||(t=t.toLowerCase()),t}return v[r.which]?v[r.which]:b[r.which]?b[r.which]:String.fromCharCode(r.which).toLowerCase()}function V(r,t){return r.sort().join(",")===t.sort().join(",")}function H(r){var t=[];return r.shiftKey&&t.push("shift"),r.altKey&&t.push("alt"),r.ctrlKey&&t.push("ctrl"),r.metaKey&&t.push("meta"),t}function X(r){if(r.preventDefault){r.preventDefault();return}r.returnValue=!1}function Y(r){if(r.stopPropagation){r.stopPropagation();return}r.cancelBubble=!0}function S(r){return r=="shift"||r=="ctrl"||r=="alt"||r=="meta"}function $(){if(!E){E={};for(var r in v)r>95&&r<112||v.hasOwnProperty(r)&&(E[v[r]]=r)}return E}function z(r,t,n){return n||(n=$()[r]?"keydown":"keypress"),n=="keypress"&&t.length&&(n="keydown"),n}function G(r){return r==="+"?["+"]:(r=r.replace(/\+{2}/g,"+plus"),r.split("+"))}function D(r,t){var n,u,k,M=[];for(n=G(r),k=0;k<n.length;++k)u=n[k],K[u]&&(u=K[u]),t&&t!="keypress"&&A[u]&&(u=A[u],M.push("shift")),S(u)&&M.push(u);return t=z(u,M,t),{key:u,modifiers:M,action:t}}function O(r,t){return r===null||r===h?!1:r===t?!0:O(r.parentNode,t)}function l(r){var t=this;if(r=r||h,!(t instanceof l))return new l(r);t.target=r,t._callbacks={},t._directMap={};var n={},u,k=!1,M=!1,C=!1;function x(e){e=e||{};var f=!1,a;for(a in n){if(e[a]){f=!0;continue}n[a]=0}f||(C=!1)}function R(e,f,a,i,o,y){var s,d,m=[],w=a.type;if(!t._callbacks[e])return[];for(w=="keyup"&&S(e)&&(f=[e]),s=0;s<t._callbacks[e].length;++s)if(d=t._callbacks[e][s],!(!i&&d.seq&&n[d.seq]!=d.level)&&w==d.action&&(w=="keypress"&&!a.metaKey&&!a.ctrlKey||V(f,d.modifiers))){var Z=!i&&d.combo==o,j=i&&d.seq==i&&d.level==y;(Z||j)&&t._callbacks[e].splice(s,1),m.push(d)}return m}function q(e,f,a,i){t.stopCallback(f,f.target||f.srcElement,a,i)||e(f,a)===!1&&(X(f),Y(f))}t._handleKey=function(e,f,a){var i=R(e,f,a),o,y={},s=0,d=!1;for(o=0;o<i.length;++o)i[o].seq&&(s=Math.max(s,i[o].level));for(o=0;o<i.length;++o){if(i[o].seq){if(i[o].level!=s)continue;d=!0,y[i[o].seq]=1,q(i[o].callback,a,i[o].combo,i[o].seq);continue}d||q(i[o].callback,a,i[o].combo)}var m=a.type=="keypress"&&M;a.type==C&&!S(e)&&!m&&x(y),M=d&&a.type=="keydown"};function L(e){typeof e.which!="number"&&(e.which=e.keyCode);var f=I(e);if(f){if(e.type=="keyup"&&k===f){k=!1;return}t.handleKey(f,H(e),e)}}function J(){clearTimeout(u),u=setTimeout(x,1e3)}function Q(e,f,a,i){n[e]=0;function o(w){return function(){C=w,++n[e],J()}}function y(w){q(a,w,e),i!=="keyup"&&(k=I(w)),setTimeout(x,10)}for(var s=0;s<f.length;++s){var d=s+1===f.length,m=d?y:o(i||D(f[s+1]).action);B(f[s],m,i,e,s)}}function B(e,f,a,i,o){t._directMap[e+":"+a]=f,e=e.replace(/\s+/g," ");var y=e.split(" "),s;if(y.length>1){Q(e,y,f,a);return}s=D(e,a),t._callbacks[s.key]=t._callbacks[s.key]||[],R(s.key,s.modifiers,{type:s.action},i,e,o),t._callbacks[s.key][i?"unshift":"push"]({callback:f,modifiers:s.modifiers,action:s.action,seq:i,level:o,combo:e})}t._bindMultiple=function(e,f,a){for(var i=0;i<e.length;++i)B(e[i],f,a)},P(r,"keypress",L),P(r,"keydown",L),P(r,"keyup",L)}l.prototype.bind=function(r,t,n){var u=this;return r=r instanceof Array?r:[r],u._bindMultiple.call(u,r,t,n),u},l.prototype.unbind=function(r,t){var n=this;return n.bind.call(n,r,function(){},t)},l.prototype.trigger=function(r,t){var n=this;return n._directMap[r+":"+t]&&n._directMap[r+":"+t]({},r),n},l.prototype.reset=function(){var r=this;return r._callbacks={},r._directMap={},r},l.prototype.stopCallback=function(r,t){var n=this;if((" "+t.className+" ").indexOf(" mousetrap ")>-1||O(t,n.target))return!1;if("composedPath"in r&&typeof r.composedPath=="function"){var u=r.composedPath()[0];u!==r.target&&(t=u)}return t.tagName=="INPUT"||t.tagName=="SELECT"||t.tagName=="TEXTAREA"||t.isContentEditable},l.prototype.handleKey=function(){var r=this;return r._handleKey.apply(r,arguments)},l.addKeycodes=function(r){for(var t in r)r.hasOwnProperty(t)&&(v[t]=r[t]);E=null},l.init=function(){var r=l(h);for(var t in r)t.charAt(0)!=="_"&&(l[t]=function(n){return function(){return r[n].apply(r,arguments)}}(t))},l.init(),p.Mousetrap=l,c.exports&&(c.exports=l),typeof g=="function"&&g.amd&&g(function(){return l})})(typeof window<"u"?window:null,typeof window<"u"?document:null)})(W);const U=T,F=(c,p,h)=>{if(!(p!=null&&p.length))return;let g=p;Array.isArray(p)||(g=[p]);const v=b=>U.bind(b,A=>{if(h.componentInstance)h.componentInstance.$emit(b,A);else{const K=new CustomEvent(b,A);c.dispatchEvent(K)}return!1});g.forEach(v)},N=c=>{if(!(c!=null&&c.length))return;let p=c;Array.isArray(c)||(p=[c]),p.forEach(h=>U.unbind(h))},rr={mounted(c,{value:p},h){F(c,p,h)},updated(c,{value:p,oldValue:h},g){N(h),F(c,p,g)},beforeUnmount(c,{value:p}){N(p)}};export{rr as default};
