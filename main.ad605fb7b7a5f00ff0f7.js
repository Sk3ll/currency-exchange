(()=>{"use strict";var e={470:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(933),s=t.n(r),i=t(476),o=t.n(i)()(s());o.push([e.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',""]);const a=o},0:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(933),s=t.n(r),i=t(476),o=t.n(i),a=t(470),c=o()(s());c.i(a.Z),c.push([e.id,':root{--main-color: #fdd08f;--darck-grey: #686666;--grey: #a6a6a6;--white: #fdfdfd}.container{position:relative;width:500px;height:300px;margin:50px auto;padding:10px;color:var(--black);font-family:"Gill Sans",sans-serif;background:var(--main-color);border-radius:25px;box-shadow:4px 4px 4px #d5a867}h1{padding-top:10px;padding-left:15px;text-align:left}.currency{position:absolute;top:90px;left:30px;font-size:20px}.input-exchange-value{position:absolute;top:170px;left:30px;font-size:20px}select{width:213px;height:58px;margin-left:10px;padding-left:50px;background:var(--white);border:none;border-radius:15px;outline:none;cursor:pointer;appearance:none;user-select:none}input{width:158px;height:53px;margin-left:10px;padding-left:50px;background:var(--white);border:none;border-radius:15px;outline:none;cursor:pointer;user-select:none}.exchange{position:absolute;top:72px;left:235px;width:215px;height:55px;color:var(--white);background:var(--darck-grey);border:none;border-radius:15px;cursor:pointer}button:active{filter:brightness(90%)}input:active{filter:brightness(90%)}select:active{filter:brightness(90%)}',""]);const d=c},476:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,s,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&o[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),s&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=s):u[4]="".concat(s)),n.push(u))}},n}},933:e=>{e.exports=function(e){return e[1]}},892:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},o=[],a=0;a<e.length;a++){var c=e[a],d=r.base?c[0]+r.base:c[0],u=i[d]||0,h="".concat(d," ").concat(u);i[d]=u+1;var l=t(h),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)n[l].references++,n[l].updater(p);else{var f=s(p,r);r.byIndex=a,n.splice(a,0,{identifier:h,updater:f,references:1})}o.push(h)}return o}function s(e,n){var t=n.domAPI(n);t.update(e);return function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,s){var i=r(e=e||[],s=s||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var a=t(i[o]);n[a].references--}for(var c=r(e,s),d=0;d<i.length;d++){var u=t(i[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=c}}},311:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},60:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},192:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},760:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var s=void 0!==t.layer;s&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,s&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},865:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var s=n[r];if(void 0!==s)return s.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(892),n=t.n(e),r=t(760),s=t.n(r),i=t(311),o=t.n(i),a=t(192),c=t.n(a),d=t(60),u=t.n(d),h=t(865),l=t.n(h),p=t(0),f={};f.styleTagTransform=l(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=s(),f.insertStyleElement=u();n()(p.Z,f);p.Z&&p.Z.locals&&p.Z.locals;class m{#e={BAD_REQUEST:400};get(e,n=null){return this.#n("GET",e,n)}#n(e,n,t=null){return new Promise(((r,s)=>{const i=new XMLHttpRequest;i.open(e,n),i.responseType="json",i.setRequestHeader("Content-Type","application/json"),i.onload=()=>{i.status>=this.#e.BAD_REQUEST?s(i.response):r(i.response)},i.onerror=()=>{s(i.response)},i.send(JSON.stringify(t))}))}}class g{#t=[];attach(e){this.#t.push(e)}detach(e){this.#t=this.#t.filter((n=>n!==e))}notifyObservers(){this.#t.forEach((e=>{e.update()}))}}const b="change",v="click",y="disabled",x="type",C="number",w="button",S="option",E="div",I="select",z="input",k="h1",R="form",A="Loading...",L="Operations",T="Exchange";class O extends g{#r=!1;#s=[];#i=[{symbol:"USD",name:"Dollar"},{symbol:"EUR",name:"Euro"},{symbol:"UAH",name:"Hryvnia"}];#o=null;#a=this.#i[0].symbol;#c=0;#d=1;getState(){return{isLoading:this.#r,coinInput:this.#c,coins:this.#s,currentCoin:this.#o,currencies:this.#i,currentCurrency:this.#a,currencyInput:this.#d}}setState({coins:e,coinInput:n,currencies:t,currencyInput:r,isLoading:s}){this.#s=e||this.#s,this.#c=n||this.#c,this.#i=t||this.#i,this.#d=r||this.#d,this.#r="boolean"==typeof s?s:this.#r,this.notifyObservers()}setSelects({currentCoin:e,currentCurrency:n}){this.#a=n||this.#a,this.#o=e||this.#o}}const F="https://api.coinstats.app/public/v1";class M{#u;#h;#l;#p=`${F}/coins?skip=0&limit=5&currency=`;constructor(e,n){e instanceof O&&(this.#h=e),n instanceof m&&(this.#l=n),this.#u=console}getCoins(){const{currentCurrency:e}=this.#h.getState();return this.#h.setState({isLoading:!0}),this.#l.get(`${this.#p}${e}`).then((({coins:e})=>this.#h.setState({coins:e,isLoading:!1}))).catch((e=>this.#u.error(e)))}}class N{#f;constructor(e){this.#f=document.createElement(e)}addEventListener(e,n){return this.#f.addEventListener(e,n),this}getComponent(){return this.#f}addClassName(e){return this.#f.className=e,this}setValue(e){return this.#f.value=e,this}setAttribute(e,n){return this.#f.setAttribute(e,n),this}isDisabled(e){return this.#f.toggleAttribute(y,e),this}setChildren(e){return this.#f.innerHTML=e,this}appendChild(e){return this.#f.appendChild(e),this}appendChildren(...e){return e.forEach((e=>{this.appendChild(e)})),this}}class D extends N{#h;constructor(e){super(z),e instanceof O&&(this.#h=e)}render(e,n,t){return this.addClassName(e).setValue(this.#h.getState()[n]).setAttribute(x,C),t&&this.addEventListener(b,(e=>{this.#h.setState({[n]:e.target.value})})),this.getComponent()}}class P extends N{constructor(){super(S)}render(e,n){return this.setValue(e).setChildren(n),this.getComponent()}}class j extends N{#h;constructor(e){super(I),e instanceof O&&(this.#h=e)}render(e,n,t,r){return this.addClassName(e).addEventListener(b,(e=>{this.#h.setSelects({[t]:e.target.value}),r&&r()})),this.#m(n),this.#h.getState()[t]||this.#g(n,t),this.setValue(this.#h.getState()[t]),this.getComponent()}#g(e,n){const[{symbol:t}]=this.#h.getState()[e];this.#h.setSelects({[n]:t})}#m(e){this.#h.getState()[e].forEach((e=>{const n=(new P).render(e.symbol,e.name);this.appendChild(n)}))}}class H extends N{constructor(){super(k)}render(){return this.setChildren(L),this.getComponent()}}class U extends j{#b;#h;constructor(e,n){super(n),n instanceof O&&(this.#h=n),e instanceof M&&(this.#b=e)}render(){return this.#b.getCoins(),this.getComponent()}update(){const{isLoading:e}=this.#h.getState();this.setChildren(e?`<option>${A}</option>`:"").isDisabled(e),e||super.render("result-currency","coins","currentCoin")}}class Z extends j{#b;#h;constructor(e,n){super(n),n instanceof O&&(this.#h=n),e instanceof M&&(this.#b=e)}render(){return super.render("changeable-currency","currencies","currentCurrency",this.#v.bind(this))}#v(){this.#b.getCoins()}}class q extends N{#y;#h;constructor(e,n){super(E),n instanceof O&&(this.#h=n),e instanceof M&&(this.#y=e)}render(){const e=new Z(this.#y,this.#h),n=new U(this.#y,this.#h);return this.#h.attach(n),this.addClassName("currency").appendChildren(e.render(),n.render()),this.getComponent()}}class V extends D{constructor(e){super(e)}render(){return super.render("initial-value","currencyInput",!0)}}class $ extends N{#h;#y;constructor(e,n){super(w),n instanceof O&&(this.#h=n),e instanceof M&&(this.#y=e)}render(){return this.addClassName("exchange").setChildren(T).addEventListener(v,this.#x.bind(this)),this.getComponent()}#x(e){e.preventDefault();const{currencyInput:n}=this.#h.getState(),t=this.#C();var r;this.#h.setState({coinInput:(r=n*t,parseInt(100*r,10)/100)})}#C(){const{coins:e,currentCoin:n}=this.#h.getState();return e.find((e=>e.symbol===n))?.price}}class _ extends D{#h;constructor(e){super(e),e instanceof O&&(this.#h=e)}render(){return super.render("result-value","coinInput")}update(){this.setValue(this.#h.getState().coinInput)}}class B extends N{#y;#h;constructor(e,n){super(E),n instanceof O&&(this.#h=n),e instanceof M&&(this.#y=e)}render(){const e=new V(this.#h),n=new $(this.#y,this.#h),t=new _(this.#h);return this.#h.attach(t),this.addClassName("input-exchange-value").appendChildren(e.render(),t.render(),n.render()),this.getComponent()}}class G extends N{#h;#y;constructor(e,n){super(R),e instanceof O&&(this.#h=e),n instanceof M&&(this.#y=n)}render(){const e=(new H).render(),n=new q(this.#y,this.#h).render(),t=new B(this.#y,this.#h).render();return this.appendChildren(e,n,t),this.getComponent()}}const J=(new class{bootstrap(){const e=new O,n=new m,t=new M(e,n);return new G(e,t).render()}}).bootstrap();document.querySelector(".container").appendChild(J)})()})();