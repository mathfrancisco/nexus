import{$a as We,$b as Ge,Aa as Y,Ba as V,Ca as Pe,Da as Ne,Ea as Re,Eb as _t,Fa as _e,Ga as Fe,Ha as Le,Ia as je,Ja as j,Ka as ze,Na as tt,O as B,Pa as P,Q as w,R as Ot,Ra as He,Sa as Ue,T as Mt,Ub as Ve,V as g,W as Tt,X as q,Y as kt,Z as Dt,_ as Oe,_b as Ft,a as It,ac as Xe,b as Ie,bc as S,ca as Me,ec as Ke,ga as ut,nb as $e,nc as Ze,pc as Lt,qb as Be,qc as qe,ra as J,rb as Ye,sa as Pt,ta as Te,ua as ke,va as Nt,wa as De,xa as Q,za as Rt}from"./chunk-SN24K5UO.js";var Ht=class extends Xe{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Ut=class t extends Ht{static makeCurrent(){Ge(new t)}onAndCancel(r,e,n){return r.addEventListener(e,n),()=>{r.removeEventListener(e,n)}}dispatchEvent(r,e){r.dispatchEvent(e)}remove(r){r.remove()}createElement(r,e){return e=e||this.getDefaultDocument(),e.createElement(r)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(r){return r.nodeType===Node.ELEMENT_NODE}isShadowRoot(r){return r instanceof DocumentFragment}getGlobalEventTarget(r,e){return e==="window"?window:e==="document"?r:e==="body"?r.body:null}getBaseHref(r){let e=Sr();return e==null?null:xr(e)}resetBaseElement(){et=null}getUserAgent(){return window.navigator.userAgent}getCookie(r){return Ke(document.cookie,r)}},et=null;function Sr(){return et=et||document.querySelector("base"),et?et.getAttribute("href"):null}function xr(t){return new URL(t,document.baseURI).pathname}var Cr=(()=>{class t{build(){return new XMLHttpRequest}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=w({token:t,factory:t.\u0275fac})}}return t})(),Wt=new Mt(""),en=(()=>{class t{constructor(e,n){this._zone=n,this._eventNameToPlugin=new Map,e.forEach(a=>{a.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,a){return this._findPluginFor(n).addEventListener(e,n,a)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(i=>i.supports(e)),!n)throw new B(5101,!1);return this._eventNameToPlugin.set(e,n),n}static{this.\u0275fac=function(n){return new(n||t)(g(Wt),g(J))}}static{this.\u0275prov=w({token:t,factory:t.\u0275fac})}}return t})(),dt=class{constructor(r){this._doc=r}},jt="ng-app-id",nn=(()=>{class t{constructor(e,n,a,i={}){this.doc=e,this.appId=n,this.nonce=a,this.platformId=i,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=Lt(i),this.resetHostNodes()}addStyles(e){for(let n of e)this.changeUsageCount(n,1)===1&&this.onStyleAdded(n)}removeStyles(e){for(let n of e)this.changeUsageCount(n,-1)<=0&&this.onStyleRemoved(n)}ngOnDestroy(){let e=this.styleNodesInDOM;e&&(e.forEach(n=>n.remove()),e.clear());for(let n of this.getAllStyles())this.onStyleRemoved(n);this.resetHostNodes()}addHost(e){this.hostNodes.add(e);for(let n of this.getAllStyles())this.addStyleToHost(e,n)}removeHost(e){this.hostNodes.delete(e)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(e){for(let n of this.hostNodes)this.addStyleToHost(n,e)}onStyleRemoved(e){let n=this.styleRef;n.get(e)?.elements?.forEach(a=>a.remove()),n.delete(e)}collectServerRenderedStyles(){let e=this.doc.head?.querySelectorAll(`style[${jt}="${this.appId}"]`);if(e?.length){let n=new Map;return e.forEach(a=>{a.textContent!=null&&n.set(a.textContent,a)}),n}return null}changeUsageCount(e,n){let a=this.styleRef;if(a.has(e)){let i=a.get(e);return i.usage+=n,i.usage}return a.set(e,{usage:n,elements:[]}),n}getStyleElement(e,n){let a=this.styleNodesInDOM,i=a?.get(n);if(i?.parentNode===e)return a.delete(n),i.removeAttribute(jt),i;{let o=this.doc.createElement("style");return this.nonce&&o.setAttribute("nonce",this.nonce),o.textContent=n,this.platformIsServer&&o.setAttribute(jt,this.appId),e.appendChild(o),o}}addStyleToHost(e,n){let a=this.getStyleElement(e,n),i=this.styleRef,o=i.get(n)?.elements;o?o.push(a):i.set(n,{elements:[a],usage:1})}resetHostNodes(){let e=this.hostNodes;e.clear(),e.add(this.doc.head)}static{this.\u0275fac=function(n){return new(n||t)(g(S),g(Nt),g(Rt,8),g(Q))}}static{this.\u0275prov=w({token:t,factory:t.\u0275fac})}}return t})(),zt={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Bt=/%COMP%/g,rn="%COMP%",Ar=`_nghost-${rn}`,Ir=`_ngcontent-${rn}`,Or=!0,Mr=new Mt("",{providedIn:"root",factory:()=>Or});function Tr(t){return Ir.replace(Bt,t)}function kr(t){return Ar.replace(Bt,t)}function an(t,r){return r.map(e=>e.replace(Bt,t))}var Je=(()=>{class t{constructor(e,n,a,i,o,s,f,l=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=a,this.removeStylesOnCompDestroy=i,this.doc=o,this.platformId=s,this.ngZone=f,this.nonce=l,this.rendererByCompId=new Map,this.platformIsServer=Lt(s),this.defaultRenderer=new nt(e,o,f,this.platformIsServer)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===q.ShadowDom&&(n=Ie(It({},n),{encapsulation:q.Emulated}));let a=this.getOrCreateRenderer(e,n);return a instanceof mt?a.applyToHost(e):a instanceof rt&&a.applyStyles(),a}getOrCreateRenderer(e,n){let a=this.rendererByCompId,i=a.get(n.id);if(!i){let o=this.doc,s=this.ngZone,f=this.eventManager,l=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,m=this.platformIsServer;switch(n.encapsulation){case q.Emulated:i=new mt(f,l,n,this.appId,d,o,s,m);break;case q.ShadowDom:return new $t(f,l,e,n,o,s,this.nonce,m);default:i=new rt(f,l,n,d,o,s,m);break}a.set(n.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}static{this.\u0275fac=function(n){return new(n||t)(g(en),g(nn),g(Nt),g(Mr),g(S),g(Q),g(J),g(Rt))}}static{this.\u0275prov=w({token:t,factory:t.\u0275fac})}}return t})(),nt=class{constructor(r,e,n,a){this.eventManager=r,this.doc=e,this.ngZone=n,this.platformIsServer=a,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(r,e){return e?this.doc.createElementNS(zt[e]||e,r):this.doc.createElement(r)}createComment(r){return this.doc.createComment(r)}createText(r){return this.doc.createTextNode(r)}appendChild(r,e){(Qe(r)?r.content:r).appendChild(e)}insertBefore(r,e,n){r&&(Qe(r)?r.content:r).insertBefore(e,n)}removeChild(r,e){e.remove()}selectRootElement(r,e){let n=typeof r=="string"?this.doc.querySelector(r):r;if(!n)throw new B(-5104,!1);return e||(n.textContent=""),n}parentNode(r){return r.parentNode}nextSibling(r){return r.nextSibling}setAttribute(r,e,n,a){if(a){e=a+":"+e;let i=zt[a];i?r.setAttributeNS(i,e,n):r.setAttribute(e,n)}else r.setAttribute(e,n)}removeAttribute(r,e,n){if(n){let a=zt[n];a?r.removeAttributeNS(a,e):r.removeAttribute(`${n}:${e}`)}else r.removeAttribute(e)}addClass(r,e){r.classList.add(e)}removeClass(r,e){r.classList.remove(e)}setStyle(r,e,n,a){a&(tt.DashCase|tt.Important)?r.style.setProperty(e,n,a&tt.Important?"important":""):r.style[e]=n}removeStyle(r,e,n){n&tt.DashCase?r.style.removeProperty(e):r.style[e]=""}setProperty(r,e,n){r!=null&&(r[e]=n)}setValue(r,e){r.nodeValue=e}listen(r,e,n){if(typeof r=="string"&&(r=Ft().getGlobalEventTarget(this.doc,r),!r))throw new Error(`Unsupported event target ${r} for event ${e}`);return this.eventManager.addEventListener(r,e,this.decoratePreventDefault(n))}decoratePreventDefault(r){return e=>{if(e==="__ngUnwrap__")return r;(this.platformIsServer?this.ngZone.runGuarded(()=>r(e)):r(e))===!1&&e.preventDefault()}}};function Qe(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var $t=class extends nt{constructor(r,e,n,a,i,o,s,f){super(r,i,o,f),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=an(a.id,a.styles);for(let d of l){let m=document.createElement("style");s&&m.setAttribute("nonce",s),m.textContent=d,this.shadowRoot.appendChild(m)}}nodeOrShadowRoot(r){return r===this.hostEl?this.shadowRoot:r}appendChild(r,e){return super.appendChild(this.nodeOrShadowRoot(r),e)}insertBefore(r,e,n){return super.insertBefore(this.nodeOrShadowRoot(r),e,n)}removeChild(r,e){return super.removeChild(null,e)}parentNode(r){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(r)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},rt=class extends nt{constructor(r,e,n,a,i,o,s,f){super(r,i,o,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=a,this.styles=f?an(f,n.styles):n.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},mt=class extends rt{constructor(r,e,n,a,i,o,s,f){let l=a+"-"+n.id;super(r,e,n,i,o,s,f,l),this.contentAttr=Tr(l),this.hostAttr=kr(l)}applyToHost(r){this.applyStyles(),this.setAttribute(r,this.hostAttr,"")}createElement(r,e){let n=super.createElement(r,e);return super.setAttribute(n,this.contentAttr,""),n}},Dr=(()=>{class t extends dt{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,a){return e.addEventListener(n,a,!1),()=>this.removeEventListener(e,n,a)}removeEventListener(e,n,a){return e.removeEventListener(n,a)}static{this.\u0275fac=function(n){return new(n||t)(g(S))}}static{this.\u0275prov=w({token:t,factory:t.\u0275fac})}}return t})(),tn=["alt","control","meta","shift"],Pr={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Nr={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},Rr=(()=>{class t extends dt{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,a){let i=t.parseEventName(n),o=t.eventCallback(i.fullKey,a,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Ft().onAndCancel(e,i.domEventName,o))}static parseEventName(e){let n=e.toLowerCase().split("."),a=n.shift();if(n.length===0||!(a==="keydown"||a==="keyup"))return null;let i=t._normalizeKey(n.pop()),o="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),o="code."),tn.forEach(l=>{let d=n.indexOf(l);d>-1&&(n.splice(d,1),o+=l+".")}),o+=i,n.length!=0||i.length===0)return null;let f={};return f.domEventName=a,f.fullKey=o,f}static matchEventFullKeyCode(e,n){let a=Pr[e.key]||e.key,i="";return n.indexOf("code.")>-1&&(a=e.code,i="code."),a==null||!a?!1:(a=a.toLowerCase(),a===" "?a="space":a==="."&&(a="dot"),tn.forEach(o=>{if(o!==a){let s=Nr[o];s(e)&&(i+=o+".")}}),i+=a,i===n)}static eventCallback(e,n,a){return i=>{t.matchEventFullKeyCode(i,e)&&a.runGuarded(()=>n(i))}}static _normalizeKey(e){return e==="esc"?"escape":e}static{this.\u0275fac=function(n){return new(n||t)(g(S))}}static{this.\u0275prov=w({token:t,factory:t.\u0275fac})}}return t})();function ko(t,r){return Ve(It({rootComponent:t},_r(r)))}function _r(t){return{appProviders:[...Hr,...t?.providers??[]],platformProviders:zr}}function Fr(){Ut.makeCurrent()}function Lr(){return new Pt}function jr(){return ke(document),document}var zr=[{provide:Q,useValue:Ze},{provide:De,useValue:Fr,multi:!0},{provide:S,useFactory:jr,deps:[]}];var Hr=[{provide:Me,useValue:"root"},{provide:Pt,useFactory:Lr,deps:[]},{provide:Wt,useClass:Dr,multi:!0,deps:[S,J,Q]},{provide:Wt,useClass:Rr,multi:!0,deps:[S]},Je,nn,en,{provide:He,useExisting:Je},{provide:qe,useClass:Cr,deps:[]},[]];var Do=(()=>{class t{constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static{this.\u0275fac=function(n){return new(n||t)(g(S))}}static{this.\u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Yt=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=w({token:t,factory:function(n){let a=null;return n?a=new(n||t):a=g(Ur),a},providedIn:"root"})}}return t})(),Ur=(()=>{class t extends Yt{constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case j.NONE:return n;case j.HTML:return V(n,"HTML")?Y(n):je(this._doc,String(n)).toString();case j.STYLE:return V(n,"Style")?Y(n):n;case j.SCRIPT:if(V(n,"Script"))return Y(n);throw new B(5200,!1);case j.URL:return V(n,"URL")?Y(n):Le(String(n));case j.RESOURCE_URL:if(V(n,"ResourceURL"))return Y(n);throw new B(5201,!1);default:throw new B(5202,!1)}}bypassSecurityTrustHtml(e){return Pe(e)}bypassSecurityTrustStyle(e){return Ne(e)}bypassSecurityTrustScript(e){return Re(e)}bypassSecurityTrustUrl(e){return _e(e)}bypassSecurityTrustResourceUrl(e){return Fe(e)}static{this.\u0275fac=function(n){return new(n||t)(g(S))}}static{this.\u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function $r(t,r,e){return(r=Yr(r))in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function on(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,n)}return e}function c(t){for(var r=1;r<arguments.length;r++){var e=arguments[r]!=null?arguments[r]:{};r%2?on(Object(e),!0).forEach(function(n){$r(t,n,e[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):on(Object(e)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})}return t}function Br(t,r){if(typeof t!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var n=e.call(t,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(t)}function Yr(t){var r=Br(t,"string");return typeof r=="symbol"?r:r+""}var sn=()=>{},he={},Nn={},Rn=null,_n={mark:sn,measure:sn};try{typeof window<"u"&&(he=window),typeof document<"u"&&(Nn=document),typeof MutationObserver<"u"&&(Rn=MutationObserver),typeof performance<"u"&&(_n=performance)}catch{}var{userAgent:cn=""}=he.navigator||{},R=he,p=Nn,ln=Rn,ht=_n,No=!!R.document,k=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",Fn=~cn.indexOf("MSIE")||~cn.indexOf("Trident/"),Vr=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Gr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Ln={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},Xr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},jn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],y="classic",wt="duotone",Kr="sharp",Zr="sharp-duotone",zn=[y,wt,Kr,Zr],qr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},Jr={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},Qr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),ta={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},ea=["fak","fa-kit","fakd","fa-kit-duotone"],fn={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},na=["kit"],ra={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},aa=["fak","fakd"],ia={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},un={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},pt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},oa=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],sa=["fak","fa-kit","fakd","fa-kit-duotone"],ca={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},la={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},fa={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},qt={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},ua=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Jt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...oa,...ua],da=["solid","regular","light","thin","duotone","brands"],Hn=[1,2,3,4,5,6,7,8,9,10],ma=Hn.concat([11,12,13,14,15,16,17,18,19,20]),ha=[...Object.keys(fa),...da,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",pt.GROUP,pt.SWAP_OPACITY,pt.PRIMARY,pt.SECONDARY].concat(Hn.map(t=>"".concat(t,"x"))).concat(ma.map(t=>"w-".concat(t))),pa={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},M="___FONT_AWESOME___",Qt=16,Un="fa",Wn="svg-inline--fa",H="data-fa-i2svg",te="data-fa-pseudo-element",ga="data-fa-pseudo-element-pending",pe="data-prefix",ge="data-icon",dn="fontawesome-i2svg",ya="async",va=["HTML","HEAD","STYLE","SCRIPT"],$n=(()=>{try{return!0}catch{return!1}})();function lt(t){return new Proxy(t,{get(r,e){return e in r?r[e]:r[y]}})}var Bn=c({},Ln);Bn[y]=c(c(c(c({},{"fa-duotone":"duotone"}),Ln[y]),fn.kit),fn["kit-duotone"]);var ba=lt(Bn),ee=c({},ta);ee[y]=c(c(c(c({},{duotone:"fad"}),ee[y]),un.kit),un["kit-duotone"]);var mn=lt(ee),ne=c({},qt);ne[y]=c(c({},ne[y]),ia.kit);var ye=lt(ne),re=c({},la);re[y]=c(c({},re[y]),ra.kit);var Ro=lt(re),wa=Vr,Yn="fa-layers-text",Ea=Gr,Sa=c({},qr),_o=lt(Sa),xa=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Vt=Xr,Ca=[...na,...ha],it=R.FontAwesomeConfig||{};function Aa(t){var r=p.querySelector("script["+t+"]");if(r)return r.getAttribute(t)}function Ia(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}p&&typeof p.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(r=>{let[e,n]=r,a=Ia(Aa(e));a!=null&&(it[n]=a)});var Vn={styleDefault:"solid",familyDefault:y,cssPrefix:Un,replacementClass:Wn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};it.familyPrefix&&(it.cssPrefix=it.familyPrefix);var K=c(c({},Vn),it);K.autoReplaceSvg||(K.observeMutations=!1);var u={};Object.keys(Vn).forEach(t=>{Object.defineProperty(u,t,{enumerable:!0,set:function(r){K[t]=r,ot.forEach(e=>e(u))},get:function(){return K[t]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(t){K.cssPrefix=t,ot.forEach(r=>r(u))},get:function(){return K.cssPrefix}});R.FontAwesomeConfig=u;var ot=[];function Oa(t){return ot.push(t),()=>{ot.splice(ot.indexOf(t),1)}}var N=Qt,A={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ma(t){if(!t||!k)return;let r=p.createElement("style");r.setAttribute("type","text/css"),r.innerHTML=t;let e=p.head.childNodes,n=null;for(let a=e.length-1;a>-1;a--){let i=e[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return p.head.insertBefore(r,n),t}var Ta="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function st(){let t=12,r="";for(;t-- >0;)r+=Ta[Math.random()*62|0];return r}function Z(t){let r=[];for(let e=(t||[]).length>>>0;e--;)r[e]=t[e];return r}function ve(t){return t.classList?Z(t.classList):(t.getAttribute("class")||"").split(" ").filter(r=>r)}function Gn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ka(t){return Object.keys(t||{}).reduce((r,e)=>r+"".concat(e,'="').concat(Gn(t[e]),'" '),"").trim()}function Et(t){return Object.keys(t||{}).reduce((r,e)=>r+"".concat(e,": ").concat(t[e].trim(),";"),"")}function be(t){return t.size!==A.size||t.x!==A.x||t.y!==A.y||t.rotate!==A.rotate||t.flipX||t.flipY}function Da(t){let{transform:r,containerWidth:e,iconWidth:n}=t,a={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(r.x*32,", ").concat(r.y*32,") "),o="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),s="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(n/2*-1," -256)")};return{outer:a,inner:f,path:l}}function Pa(t){let{transform:r,width:e=Qt,height:n=Qt,startCentered:a=!1}=t,i="";return a&&Fn?i+="translate(".concat(r.x/N-e/2,"em, ").concat(r.y/N-n/2,"em) "):a?i+="translate(calc(-50% + ".concat(r.x/N,"em), calc(-50% + ").concat(r.y/N,"em)) "):i+="translate(".concat(r.x/N,"em, ").concat(r.y/N,"em) "),i+="scale(".concat(r.size/N*(r.flipX?-1:1),", ").concat(r.size/N*(r.flipY?-1:1),") "),i+="rotate(".concat(r.rotate,"deg) "),i}var Na=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Xn(){let t=Un,r=Wn,e=u.cssPrefix,n=u.replacementClass,a=Na;if(e!==t||n!==r){let i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(r),"g");a=a.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(n))}return a}var hn=!1;function Gt(){u.autoAddCss&&!hn&&(Ma(Xn()),hn=!0)}var Ra={mixout(){return{dom:{css:Xn,insertCss:Gt}}},hooks(){return{beforeDOMElementCreation(){Gt()},beforeI2svg(){Gt()}}}},T=R||{};T[M]||(T[M]={});T[M].styles||(T[M].styles={});T[M].hooks||(T[M].hooks={});T[M].shims||(T[M].shims=[]);var I=T[M],Kn=[],Zn=function(){p.removeEventListener("DOMContentLoaded",Zn),vt=1,Kn.map(t=>t())},vt=!1;k&&(vt=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),vt||p.addEventListener("DOMContentLoaded",Zn));function _a(t){k&&(vt?setTimeout(t,0):Kn.push(t))}function ft(t){let{tag:r,attributes:e={},children:n=[]}=t;return typeof t=="string"?Gn(t):"<".concat(r," ").concat(ka(e),">").concat(n.map(ft).join(""),"</").concat(r,">")}function pn(t,r,e){if(t&&t[r]&&t[r][e])return{prefix:r,iconName:e,icon:t[r][e]}}var Fa=function(r,e){return function(n,a,i,o){return r.call(e,n,a,i,o)}},Xt=function(r,e,n,a){var i=Object.keys(r),o=i.length,s=a!==void 0?Fa(e,a):e,f,l,d;for(n===void 0?(f=1,d=r[i[0]]):(f=0,d=n);f<o;f++)l=i[f],d=s(d,r[l],l,r);return d};function La(t){let r=[],e=0,n=t.length;for(;e<n;){let a=t.charCodeAt(e++);if(a>=55296&&a<=56319&&e<n){let i=t.charCodeAt(e++);(i&64512)==56320?r.push(((a&1023)<<10)+(i&1023)+65536):(r.push(a),e--)}else r.push(a)}return r}function ae(t){let r=La(t);return r.length===1?r[0].toString(16):null}function ja(t,r){let e=t.length,n=t.charCodeAt(r),a;return n>=55296&&n<=56319&&e>r+1&&(a=t.charCodeAt(r+1),a>=56320&&a<=57343)?(n-55296)*1024+a-56320+65536:n}function gn(t){return Object.keys(t).reduce((r,e)=>{let n=t[e];return!!n.icon?r[n.iconName]=n.icon:r[e]=n,r},{})}function ie(t,r){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},{skipHooks:n=!1}=e,a=gn(r);typeof I.hooks.addPack=="function"&&!n?I.hooks.addPack(t,gn(r)):I.styles[t]=c(c({},I.styles[t]||{}),a),t==="fas"&&ie("fa",r)}var{styles:ct,shims:za}=I,qn=Object.keys(ye),Ha=qn.reduce((t,r)=>(t[r]=Object.keys(ye[r]),t),{}),we=null,Jn={},Qn={},tr={},er={},nr={};function Ua(t){return~Ca.indexOf(t)}function Wa(t,r){let e=r.split("-"),n=e[0],a=e.slice(1).join("-");return n===t&&a!==""&&!Ua(a)?a:null}var rr=()=>{let t=n=>Xt(ct,(a,i,o)=>(a[o]=Xt(i,n,{}),a),{});Jn=t((n,a,i)=>(a[3]&&(n[a[3]]=i),a[2]&&a[2].filter(s=>typeof s=="number").forEach(s=>{n[s.toString(16)]=i}),n)),Qn=t((n,a,i)=>(n[i]=i,a[2]&&a[2].filter(s=>typeof s=="string").forEach(s=>{n[s]=i}),n)),nr=t((n,a,i)=>{let o=a[2];return n[i]=i,o.forEach(s=>{n[s]=i}),n});let r="far"in ct||u.autoFetchSvg,e=Xt(za,(n,a)=>{let i=a[0],o=a[1],s=a[2];return o==="far"&&!r&&(o="fas"),typeof i=="string"&&(n.names[i]={prefix:o,iconName:s}),typeof i=="number"&&(n.unicodes[i.toString(16)]={prefix:o,iconName:s}),n},{names:{},unicodes:{}});tr=e.names,er=e.unicodes,we=St(u.styleDefault,{family:u.familyDefault})};Oa(t=>{we=St(t.styleDefault,{family:u.familyDefault})});rr();function Ee(t,r){return(Jn[t]||{})[r]}function $a(t,r){return(Qn[t]||{})[r]}function z(t,r){return(nr[t]||{})[r]}function ar(t){return tr[t]||{prefix:null,iconName:null}}function Ba(t){let r=er[t],e=Ee("fas",t);return r||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function _(){return we}var ir=()=>({prefix:null,iconName:null,rest:[]});function Ya(t){let r=y,e=qn.reduce((n,a)=>(n[a]="".concat(u.cssPrefix,"-").concat(a),n),{});return zn.forEach(n=>{(t.includes(e[n])||t.some(a=>Ha[n].includes(a)))&&(r=n)}),r}function St(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{family:e=y}=r,n=ba[e][t];if(e===wt&&!t)return"fad";let a=mn[e][t]||mn[e][n],i=t in I.styles?t:null;return a||i||null}function Va(t){let r=[],e=null;return t.forEach(n=>{let a=Wa(u.cssPrefix,n);a?e=a:n&&r.push(n)}),{iconName:e,rest:r}}function yn(t){return t.sort().filter((r,e,n)=>n.indexOf(r)===e)}function xt(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{skipLookups:e=!1}=r,n=null,a=Jt.concat(sa),i=yn(t.filter(m=>a.includes(m))),o=yn(t.filter(m=>!Jt.includes(m))),s=i.filter(m=>(n=m,!jn.includes(m))),[f=null]=s,l=Ya(i),d=c(c({},Va(o)),{},{prefix:St(f,{family:l})});return c(c(c({},d),Za({values:t,family:l,styles:ct,config:u,canonical:d,givenPrefix:n})),Ga(e,n,d))}function Ga(t,r,e){let{prefix:n,iconName:a}=e;if(t||!n||!a)return{prefix:n,iconName:a};let i=r==="fa"?ar(a):{},o=z(n,a);return a=i.iconName||o||a,n=i.prefix||n,n==="far"&&!ct.far&&ct.fas&&!u.autoFetchSvg&&(n="fas"),{prefix:n,iconName:a}}var Xa=zn.filter(t=>t!==y||t!==wt),Ka=Object.keys(qt).filter(t=>t!==y).map(t=>Object.keys(qt[t])).flat();function Za(t){let{values:r,family:e,canonical:n,givenPrefix:a="",styles:i={},config:o={}}=t,s=e===wt,f=r.includes("fa-duotone")||r.includes("fad"),l=o.familyDefault==="duotone",d=n.prefix==="fad"||n.prefix==="fa-duotone";if(!s&&(f||l||d)&&(n.prefix="fad"),(r.includes("fa-brands")||r.includes("fab"))&&(n.prefix="fab"),!n.prefix&&Xa.includes(e)&&(Object.keys(i).find(h=>Ka.includes(h))||o.autoFetchSvg)){let h=Qr.get(e).defaultShortPrefixId;n.prefix=h,n.iconName=z(n.prefix,n.iconName)||n.iconName}return(n.prefix==="fa"||a==="fa")&&(n.prefix=_()||"fas"),n}var oe=class{constructor(){this.definitions={}}add(){for(var r=arguments.length,e=new Array(r),n=0;n<r;n++)e[n]=arguments[n];let a=e.reduce(this._pullDefinitions,{});Object.keys(a).forEach(i=>{this.definitions[i]=c(c({},this.definitions[i]||{}),a[i]),ie(i,a[i]);let o=ye[y][i];o&&ie(o,a[i]),rr()})}reset(){this.definitions={}}_pullDefinitions(r,e){let n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map(a=>{let{prefix:i,iconName:o,icon:s}=n[a],f=s[2];r[i]||(r[i]={}),f.length>0&&f.forEach(l=>{typeof l=="string"&&(r[i][l]=s)}),r[i][o]=s}),r}},vn=[],G={},X={},qa=Object.keys(X);function Ja(t,r){let{mixoutsTo:e}=r;return vn=t,G={},Object.keys(X).forEach(n=>{qa.indexOf(n)===-1&&delete X[n]}),vn.forEach(n=>{let a=n.mixout?n.mixout():{};if(Object.keys(a).forEach(i=>{typeof a[i]=="function"&&(e[i]=a[i]),typeof a[i]=="object"&&Object.keys(a[i]).forEach(o=>{e[i]||(e[i]={}),e[i][o]=a[i][o]})}),n.hooks){let i=n.hooks();Object.keys(i).forEach(o=>{G[o]||(G[o]=[]),G[o].push(i[o])})}n.provides&&n.provides(X)}),e}function se(t,r){for(var e=arguments.length,n=new Array(e>2?e-2:0),a=2;a<e;a++)n[a-2]=arguments[a];return(G[t]||[]).forEach(o=>{r=o.apply(null,[r,...n])}),r}function U(t){for(var r=arguments.length,e=new Array(r>1?r-1:0),n=1;n<r;n++)e[n-1]=arguments[n];(G[t]||[]).forEach(i=>{i.apply(null,e)})}function F(){let t=arguments[0],r=Array.prototype.slice.call(arguments,1);return X[t]?X[t].apply(null,r):void 0}function ce(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:r}=t,e=t.prefix||_();if(r)return r=z(e,r)||r,pn(or.definitions,e,r)||pn(I.styles,e,r)}var or=new oe,Qa=()=>{u.autoReplaceSvg=!1,u.observeMutations=!1,U("noAuto")},ti={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return k?(U("beforeI2svg",t),F("pseudoElements2svg",t),F("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:r}=t;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,_a(()=>{ni({autoReplaceSvgRoot:r}),U("watch",t)})}},ei={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:z(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){let r=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],e=St(t[0]);return{prefix:e,iconName:z(e,r)||r}}if(typeof t=="string"&&(t.indexOf("".concat(u.cssPrefix,"-"))>-1||t.match(wa))){let r=xt(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||_(),iconName:z(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){let r=_();return{prefix:r,iconName:z(r,t)||t}}}},E={noAuto:Qa,config:u,dom:ti,parse:ei,library:or,findIconDefinition:ce,toHtml:ft},ni=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:r=p}=t;(Object.keys(I.styles).length>0||u.autoFetchSvg)&&k&&u.autoReplaceSvg&&E.dom.i2svg({node:r})};function Ct(t,r){return Object.defineProperty(t,"abstract",{get:r}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(e=>ft(e))}}),Object.defineProperty(t,"node",{get:function(){if(!k)return;let e=p.createElement("div");return e.innerHTML=t.html,e.children}}),t}function ri(t){let{children:r,main:e,mask:n,attributes:a,styles:i,transform:o}=t;if(be(o)&&e.found&&!n.found){let{width:s,height:f}=e,l={x:s/f/2,y:.5};a.style=Et(c(c({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:r}]}function ai(t){let{prefix:r,iconName:e,children:n,attributes:a,symbol:i}=t,o=i===!0?"".concat(r,"-").concat(u.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},a),{},{id:o}),children:n}]}]}function Se(t){let{icons:{main:r,mask:e},prefix:n,iconName:a,transform:i,symbol:o,title:s,maskId:f,titleId:l,extra:d,watchable:m=!1}=t,{width:h,height:v}=e.found?e:r,D=aa.includes(n),L=[u.replacementClass,a?"".concat(u.cssPrefix,"-").concat(a):""].filter($=>d.classes.indexOf($)===-1).filter($=>$!==""||!!$).concat(d.classes).join(" "),x={children:[],attributes:c(c({},d.attributes),{},{"data-prefix":n,"data-icon":a,class:L,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(h," ").concat(v)})},O=D&&!~d.classes.indexOf("fa-fw")?{width:"".concat(h/v*16*.0625,"em")}:{};m&&(x.attributes[H]=""),s&&(x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(l||st())},children:[s]}),delete x.attributes.title);let b=c(c({},x),{},{prefix:n,iconName:a,main:r,mask:e,maskId:f,transform:i,symbol:o,styles:c(c({},O),d.styles)}),{children:C,attributes:W}=e.found&&r.found?F("generateAbstractMask",b)||{children:[],attributes:{}}:F("generateAbstractIcon",b)||{children:[],attributes:{}};return b.children=C,b.attributes=W,o?ai(b):ri(b)}function bn(t){let{content:r,width:e,height:n,transform:a,title:i,extra:o,watchable:s=!1}=t,f=c(c(c({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(f[H]="");let l=c({},o.styles);be(a)&&(l.transform=Pa({transform:a,startCentered:!0,width:e,height:n}),l["-webkit-transform"]=l.transform);let d=Et(l);d.length>0&&(f.style=d);let m=[];return m.push({tag:"span",attributes:f,children:[r]}),i&&m.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),m}function ii(t){let{content:r,title:e,extra:n}=t,a=c(c(c({},n.attributes),e?{title:e}:{}),{},{class:n.classes.join(" ")}),i=Et(n.styles);i.length>0&&(a.style=i);let o=[];return o.push({tag:"span",attributes:a,children:[r]}),e&&o.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),o}var{styles:Kt}=I;function le(t){let r=t[0],e=t[1],[n]=t.slice(4),a=null;return Array.isArray(n)?a={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(Vt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(Vt.SECONDARY),fill:"currentColor",d:n[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(Vt.PRIMARY),fill:"currentColor",d:n[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:n}},{found:!0,width:r,height:e,icon:a}}var oi={found:!1,width:512,height:512};function si(t,r){!$n&&!u.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(r,'" is missing.'))}function fe(t,r){let e=r;return r==="fa"&&u.styleDefault!==null&&(r=_()),new Promise((n,a)=>{if(e==="fa"){let i=ar(t)||{};t=i.iconName||t,r=i.prefix||r}if(t&&r&&Kt[r]&&Kt[r][t]){let i=Kt[r][t];return n(le(i))}si(t,r),n(c(c({},oi),{},{icon:u.showMissingIcons&&t?F("missingIconAbstract")||{}:{}}))})}var wn=()=>{},ue=u.measurePerformance&&ht&&ht.mark&&ht.measure?ht:{mark:wn,measure:wn},at='FA "6.7.1"',ci=t=>(ue.mark("".concat(at," ").concat(t," begins")),()=>sr(t)),sr=t=>{ue.mark("".concat(at," ").concat(t," ends")),ue.measure("".concat(at," ").concat(t),"".concat(at," ").concat(t," begins"),"".concat(at," ").concat(t," ends"))},xe={begin:ci,end:sr},gt=()=>{};function En(t){return typeof(t.getAttribute?t.getAttribute(H):null)=="string"}function li(t){let r=t.getAttribute?t.getAttribute(pe):null,e=t.getAttribute?t.getAttribute(ge):null;return r&&e}function fi(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(u.replacementClass)}function ui(){return u.autoReplaceSvg===!0?yt.replace:yt[u.autoReplaceSvg]||yt.replace}function di(t){return p.createElementNS("http://www.w3.org/2000/svg",t)}function mi(t){return p.createElement(t)}function cr(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{ceFn:e=t.tag==="svg"?di:mi}=r;if(typeof t=="string")return p.createTextNode(t);let n=e(t.tag);return Object.keys(t.attributes||[]).forEach(function(i){n.setAttribute(i,t.attributes[i])}),(t.children||[]).forEach(function(i){n.appendChild(cr(i,{ceFn:e}))}),n}function hi(t){let r=" ".concat(t.outerHTML," ");return r="".concat(r,"Font Awesome fontawesome.com "),r}var yt={replace:function(t){let r=t[0];if(r.parentNode)if(t[1].forEach(e=>{r.parentNode.insertBefore(cr(e),r)}),r.getAttribute(H)===null&&u.keepOriginalSource){let e=p.createComment(hi(r));r.parentNode.replaceChild(e,r)}else r.remove()},nest:function(t){let r=t[0],e=t[1];if(~ve(r).indexOf(u.replacementClass))return yt.replace(t);let n=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){let i=e[0].attributes.class.split(" ").reduce((o,s)=>(s===u.replacementClass||s.match(n)?o.toSvg.push(s):o.toNode.push(s),o),{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?r.removeAttribute("class"):r.setAttribute("class",i.toNode.join(" "))}let a=e.map(i=>ft(i)).join(`
`);r.setAttribute(H,""),r.innerHTML=a}};function Sn(t){t()}function lr(t,r){let e=typeof r=="function"?r:gt;if(t.length===0)e();else{let n=Sn;u.mutateApproach===ya&&(n=R.requestAnimationFrame||Sn),n(()=>{let a=ui(),i=xe.begin("mutate");t.map(a),i(),e()})}}var Ce=!1;function fr(){Ce=!0}function de(){Ce=!1}var bt=null;function xn(t){if(!ln||!u.observeMutations)return;let{treeCallback:r=gt,nodeCallback:e=gt,pseudoElementsCallback:n=gt,observeMutationsRoot:a=p}=t;bt=new ln(i=>{if(Ce)return;let o=_();Z(i).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!En(s.addedNodes[0])&&(u.searchPseudoElements&&n(s.target),r(s.target)),s.type==="attributes"&&s.target.parentNode&&u.searchPseudoElements&&n(s.target.parentNode),s.type==="attributes"&&En(s.target)&&~xa.indexOf(s.attributeName))if(s.attributeName==="class"&&li(s.target)){let{prefix:f,iconName:l}=xt(ve(s.target));s.target.setAttribute(pe,f||o),l&&s.target.setAttribute(ge,l)}else fi(s.target)&&e(s.target)})}),k&&bt.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function pi(){bt&&bt.disconnect()}function gi(t){let r=t.getAttribute("style"),e=[];return r&&(e=r.split(";").reduce((n,a)=>{let i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(n[o]=s.join(":").trim()),n},{})),e}function yi(t){let r=t.getAttribute("data-prefix"),e=t.getAttribute("data-icon"),n=t.innerText!==void 0?t.innerText.trim():"",a=xt(ve(t));return a.prefix||(a.prefix=_()),r&&e&&(a.prefix=r,a.iconName=e),a.iconName&&a.prefix||(a.prefix&&n.length>0&&(a.iconName=$a(a.prefix,t.innerText)||Ee(a.prefix,ae(t.innerText))),!a.iconName&&u.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function vi(t){let r=Z(t.attributes).reduce((a,i)=>(a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a),{}),e=t.getAttribute("title"),n=t.getAttribute("data-fa-title-id");return u.autoA11y&&(e?r["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(n||st()):(r["aria-hidden"]="true",r.focusable="false")),r}function bi(){return{iconName:null,title:null,titleId:null,prefix:null,transform:A,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Cn(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:e,prefix:n,rest:a}=yi(t),i=vi(t),o=se("parseNodeAttributes",{},t),s=r.styleParser?gi(t):[];return c({iconName:e,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:n,transform:A,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:i}},o)}var{styles:wi}=I;function ur(t){let r=u.autoReplaceSvg==="nest"?Cn(t,{styleParser:!1}):Cn(t);return~r.extra.classes.indexOf(Yn)?F("generateLayersText",t,r):F("generateSvgReplacementMutation",t,r)}function Ei(){return[...ea,...Jt]}function An(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!k)return Promise.resolve();let e=p.documentElement.classList,n=d=>e.add("".concat(dn,"-").concat(d)),a=d=>e.remove("".concat(dn,"-").concat(d)),i=u.autoFetchSvg?Ei():jn.concat(Object.keys(wi));i.includes("fa")||i.push("fa");let o=[".".concat(Yn,":not([").concat(H,"])")].concat(i.map(d=>".".concat(d,":not([").concat(H,"])"))).join(", ");if(o.length===0)return Promise.resolve();let s=[];try{s=Z(t.querySelectorAll(o))}catch{}if(s.length>0)n("pending"),a("complete");else return Promise.resolve();let f=xe.begin("onTree"),l=s.reduce((d,m)=>{try{let h=ur(m);h&&d.push(h)}catch(h){$n||h.name==="MissingIcon"&&console.error(h)}return d},[]);return new Promise((d,m)=>{Promise.all(l).then(h=>{lr(h,()=>{n("active"),n("complete"),a("pending"),typeof r=="function"&&r(),f(),d()})}).catch(h=>{f(),m(h)})})}function Si(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ur(t).then(e=>{e&&lr([e],r)})}function xi(t){return function(r){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(r||{}).icon?r:ce(r||{}),{mask:a}=e;return a&&(a=(a||{}).icon?a:ce(a||{})),t(n,c(c({},e),{},{mask:a}))}}var Ci=function(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=A,symbol:n=!1,mask:a=null,maskId:i=null,title:o=null,titleId:s=null,classes:f=[],attributes:l={},styles:d={}}=r;if(!t)return;let{prefix:m,iconName:h,icon:v}=t;return Ct(c({type:"icon"},t),()=>(U("beforeDOMElementCreation",{iconDefinition:t,params:r}),u.autoA11y&&(o?l["aria-labelledby"]="".concat(u.replacementClass,"-title-").concat(s||st()):(l["aria-hidden"]="true",l.focusable="false")),Se({icons:{main:le(v),mask:a?le(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:h,transform:c(c({},A),e),symbol:n,title:o,maskId:i,titleId:s,extra:{attributes:l,styles:d,classes:f}})))},Ai={mixout(){return{icon:xi(Ci)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=An,t.nodeCallback=Si,t}}},provides(t){t.i2svg=function(r){let{node:e=p,callback:n=()=>{}}=r;return An(e,n)},t.generateSvgReplacementMutation=function(r,e){let{iconName:n,title:a,titleId:i,prefix:o,transform:s,symbol:f,mask:l,maskId:d,extra:m}=e;return new Promise((h,v)=>{Promise.all([fe(n,o),l.iconName?fe(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(D=>{let[L,x]=D;h([r,Se({icons:{main:L,mask:x},prefix:o,iconName:n,transform:s,symbol:f,maskId:d,title:a,titleId:i,extra:m,watchable:!0})])}).catch(v)})},t.generateAbstractIcon=function(r){let{children:e,attributes:n,main:a,transform:i,styles:o}=r,s=Et(o);s.length>0&&(n.style=s);let f;return be(i)&&(f=F("generateAbstractTransformGrouping",{main:a,transform:i,containerWidth:a.width,iconWidth:a.width})),e.push(f||a.icon),{children:e,attributes:n}}}},Ii={mixout(){return{layer(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:e=[]}=r;return Ct({type:"layer"},()=>{U("beforeDOMElementCreation",{assembler:t,params:r});let n=[];return t(a=>{Array.isArray(a)?a.map(i=>{n=n.concat(i.abstract)}):n=n.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers"),...e].join(" ")},children:n}]})}}}},Oi={mixout(){return{counter(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:e=null,classes:n=[],attributes:a={},styles:i={}}=r;return Ct({type:"counter",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:r}),ii({content:t.toString(),title:e,extra:{attributes:a,styles:i,classes:["".concat(u.cssPrefix,"-layers-counter"),...n]}})))}}}},Mi={mixout(){return{text(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:e=A,title:n=null,classes:a=[],attributes:i={},styles:o={}}=r;return Ct({type:"text",content:t},()=>(U("beforeDOMElementCreation",{content:t,params:r}),bn({content:t,transform:c(c({},A),e),title:n,extra:{attributes:i,styles:o,classes:["".concat(u.cssPrefix,"-layers-text"),...a]}})))}}},provides(t){t.generateLayersText=function(r,e){let{title:n,transform:a,extra:i}=e,o=null,s=null;if(Fn){let f=parseInt(getComputedStyle(r).fontSize,10),l=r.getBoundingClientRect();o=l.width/f,s=l.height/f}return u.autoA11y&&!n&&(i.attributes["aria-hidden"]="true"),Promise.resolve([r,bn({content:r.innerHTML,width:o,height:s,transform:a,title:n,extra:i,watchable:!0})])}}},Ti=new RegExp('"',"ug"),In=[1105920,1112319],On=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),Jr),pa),ca),me=Object.keys(On).reduce((t,r)=>(t[r.toLowerCase()]=On[r],t),{}),ki=Object.keys(me).reduce((t,r)=>{let e=me[r];return t[r]=e[900]||[...Object.entries(e)][0][1],t},{});function Di(t){let r=t.replace(Ti,""),e=ja(r,0),n=e>=In[0]&&e<=In[1],a=r.length===2?r[0]===r[1]:!1;return{value:ae(a?r[0]:r),isSecondary:n||a}}function Pi(t,r){let e=t.replace(/^['"]|['"]$/g,"").toLowerCase(),n=parseInt(r),a=isNaN(n)?"normal":n;return(me[e]||{})[a]||ki[e]}function Mn(t,r){let e="".concat(ga).concat(r.replace(":","-"));return new Promise((n,a)=>{if(t.getAttribute(e)!==null)return n();let o=Z(t.children).filter(h=>h.getAttribute(te)===r)[0],s=R.getComputedStyle(t,r),f=s.getPropertyValue("font-family"),l=f.match(Ea),d=s.getPropertyValue("font-weight"),m=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),n();if(l&&m!=="none"&&m!==""){let h=s.getPropertyValue("content"),v=Pi(f,d),{value:D,isSecondary:L}=Di(h),x=l[0].startsWith("FontAwesome"),O=Ee(v,D),b=O;if(x){let C=Ba(D);C.iconName&&C.prefix&&(O=C.iconName,v=C.prefix)}if(O&&!L&&(!o||o.getAttribute(pe)!==v||o.getAttribute(ge)!==b)){t.setAttribute(e,b),o&&t.removeChild(o);let C=bi(),{extra:W}=C;W.attributes[te]=r,fe(O,v).then($=>{let vr=Se(c(c({},C),{},{icons:{main:$,mask:ir()},prefix:v,iconName:b,extra:W,watchable:!0})),At=p.createElementNS("http://www.w3.org/2000/svg","svg");r==="::before"?t.insertBefore(At,t.firstChild):t.appendChild(At),At.outerHTML=vr.map(br=>ft(br)).join(`
`),t.removeAttribute(e),n()}).catch(a)}else n()}else n()})}function Ni(t){return Promise.all([Mn(t,"::before"),Mn(t,"::after")])}function Ri(t){return t.parentNode!==document.head&&!~va.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(te)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Tn(t){if(k)return new Promise((r,e)=>{let n=Z(t.querySelectorAll("*")).filter(Ri).map(Ni),a=xe.begin("searchPseudoElements");fr(),Promise.all(n).then(()=>{a(),de(),r()}).catch(()=>{a(),de(),e()})})}var _i={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=Tn,t}}},provides(t){t.pseudoElements2svg=function(r){let{node:e=p}=r;u.searchPseudoElements&&Tn(e)}}},kn=!1,Fi={mixout(){return{dom:{unwatch(){fr(),kn=!0}}}},hooks(){return{bootstrap(){xn(se("mutationObserverCallbacks",{}))},noAuto(){pi()},watch(t){let{observeMutationsRoot:r}=t;kn?de():xn(se("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Dn=t=>{let r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((e,n)=>{let a=n.toLowerCase().split("-"),i=a[0],o=a.slice(1).join("-");if(i&&o==="h")return e.flipX=!0,e;if(i&&o==="v")return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(i){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o;break}return e},r)},Li={mixout(){return{parse:{transform:t=>Dn(t)}}},hooks(){return{parseNodeAttributes(t,r){let e=r.getAttribute("data-fa-transform");return e&&(t.transform=Dn(e)),t}}},provides(t){t.generateAbstractTransformGrouping=function(r){let{main:e,transform:n,containerWidth:a,iconWidth:i}=r,o={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(n.x*32,", ").concat(n.y*32,") "),f="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),l="rotate(".concat(n.rotate," 0 0)"),d={transform:"".concat(s," ").concat(f," ").concat(l)},m={transform:"translate(".concat(i/2*-1," -256)")},h={outer:o,inner:d,path:m};return{tag:"g",attributes:c({},h.outer),children:[{tag:"g",attributes:c({},h.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:c(c({},e.icon.attributes),h.path)}]}]}}}},Zt={x:0,y:0,width:"100%",height:"100%"};function Pn(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||r)&&(t.attributes.fill="black"),t}function ji(t){return t.tag==="g"?t.children:[t]}var zi={hooks(){return{parseNodeAttributes(t,r){let e=r.getAttribute("data-fa-mask"),n=e?xt(e.split(" ").map(a=>a.trim())):ir();return n.prefix||(n.prefix=_()),t.mask=n,t.maskId=r.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(r){let{children:e,attributes:n,main:a,mask:i,maskId:o,transform:s}=r,{width:f,icon:l}=a,{width:d,icon:m}=i,h=Da({transform:s,containerWidth:d,iconWidth:f}),v={tag:"rect",attributes:c(c({},Zt),{},{fill:"white"})},D=l.children?{children:l.children.map(Pn)}:{},L={tag:"g",attributes:c({},h.inner),children:[Pn(c({tag:l.tag,attributes:c(c({},l.attributes),h.path)},D))]},x={tag:"g",attributes:c({},h.outer),children:[L]},O="mask-".concat(o||st()),b="clip-".concat(o||st()),C={tag:"mask",attributes:c(c({},Zt),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,x]},W={tag:"defs",children:[{tag:"clipPath",attributes:{id:b},children:ji(m)},C]};return e.push(W,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(b,")"),mask:"url(#".concat(O,")")},Zt)}),{children:e,attributes:n}}}},Hi={provides(t){let r=!1;R.matchMedia&&(r=R.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){let e=[],n={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:c(c({},n),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});let i=c(c({},a),{},{attributeName:"opacity"}),o={tag:"circle",attributes:c(c({},n),{},{cx:"256",cy:"364",r:"28"}),children:[]};return r||o.children.push({tag:"animate",attributes:c(c({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(o),e.push({tag:"path",attributes:c(c({},n),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:r?[]:[{tag:"animate",attributes:c(c({},i),{},{values:"1;0;0;0;0;1;"})}]}),r||e.push({tag:"path",attributes:c(c({},n),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Ui={hooks(){return{parseNodeAttributes(t,r){let e=r.getAttribute("data-fa-symbol"),n=e===null?!1:e===""?!0:e;return t.symbol=n,t}}}},Wi=[Ra,Ai,Ii,Oi,Mi,_i,Fi,Li,zi,Hi,Ui];Ja(Wi,{mixoutsTo:E});var Fo=E.noAuto,dr=E.config,Lo=E.library,mr=E.dom,hr=E.parse,jo=E.findIconDefinition,zo=E.toHtml,pr=E.icon,Ho=E.layer,$i=E.text,Bi=E.counter;var Yi=["*"],Vi=t=>{throw new Error(`Could not find icon with iconName=${t.iconName} and prefix=${t.prefix} in the icon library.`)},Gi=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},yr=t=>t!=null&&(t===90||t===180||t===270||t==="90"||t==="180"||t==="270"),Xi=t=>{let r=yr(t.rotate),e={[`fa-${t.animation}`]:t.animation!=null&&!t.animation.startsWith("spin"),"fa-spin":t.animation==="spin"||t.animation==="spin-reverse","fa-spin-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-spin-reverse":t.animation==="spin-reverse"||t.animation==="spin-pulse-reverse","fa-pulse":t.animation==="spin-pulse"||t.animation==="spin-pulse-reverse","fa-fw":t.fixedWidth,"fa-border":t.border,"fa-inverse":t.inverse,"fa-layers-counter":t.counter,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both",[`fa-${t.size}`]:t.size!==null,[`fa-rotate-${t.rotate}`]:r,"fa-rotate-by":t.rotate!=null&&!r,[`fa-pull-${t.pull}`]:t.pull!==null,[`fa-stack-${t.stackItemSize}`]:t.stackItemSize!=null};return Object.keys(e).map(n=>e[n]?n:null).filter(n=>n)},Ae=new WeakSet,gr="fa-auto-css";function Ki(t,r){if(!r.autoAddCss||Ae.has(t))return;if(t.getElementById(gr)!=null){r.autoAddCss=!1,Ae.add(t);return}let e=t.createElement("style");e.setAttribute("type","text/css"),e.setAttribute("id",gr),e.innerHTML=mr.css();let n=t.head.childNodes,a=null;for(let i=n.length-1;i>-1;i--){let o=n[i],s=o.nodeName.toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=o)}t.head.insertBefore(e,a),r.autoAddCss=!1,Ae.add(t)}var Zi=t=>t.prefix!==void 0&&t.iconName!==void 0,qi=(t,r)=>Zi(t)?t:Array.isArray(t)&&t.length===2?{prefix:t[0],iconName:t[1]}:{prefix:r,iconName:t},Ji=(()=>{class t{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null,this._autoAddCss=!0}set autoAddCss(e){dr.autoAddCss=e,this._autoAddCss=e}get autoAddCss(){return this._autoAddCss}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),Qi=(()=>{class t{constructor(){this.definitions={}}addIcons(...e){for(let n of e){n.prefix in this.definitions||(this.definitions[n.prefix]={}),this.definitions[n.prefix][n.iconName]=n;for(let a of n.icon[2])typeof a=="string"&&(this.definitions[n.prefix][a]=n)}}addIconPacks(...e){for(let n of e){let a=Object.keys(n).map(i=>n[i]);this.addIcons(...a)}}getIconDefinition(e,n){return e in this.definitions&&n in this.definitions[e]?this.definitions[e][n]:null}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275prov=w({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),to=(()=>{class t{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275dir=Oe({type:t,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[ut]})}}return t})(),eo=(()=>{class t{constructor(e,n){this.renderer=e,this.elementRef=n}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}static{this.\u0275fac=function(n){return new(n||t)(P(Ue),P(Te))}}static{this.\u0275cmp=kt({type:t,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[ut,_t],ngContentSelectors:Yi,decls:1,vars:0,template:function(n,a){n&1&&(Be(),Ye(0))},encapsulation:2})}}return t})(),es=(()=>{class t{constructor(e,n,a,i,o){this.sanitizer=e,this.config=n,this.iconLibrary=a,this.stackItem=i,this.document=Tt(S),o!=null&&i==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){Gi();return}if(e){let n=this.findIconDefinition(this.icon??this.config.fallbackIcon);if(n!=null){let a=this.buildParams();Ki(this.document,this.config);let i=pr(n,a);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))}}}render(){this.ngOnChanges({})}findIconDefinition(e){let n=qi(e,this.config.defaultPrefix);if("icon"in n)return n;let a=this.iconLibrary.getIconDefinition(n.prefix,n.iconName);return a??(Vi(n),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},n=typeof this.transform=="string"?hr.transform(this.transform):this.transform,a={};return e.rotate!=null&&!yr(e.rotate)&&(a["--fa-rotate-angle"]=`${e.rotate}`),{title:this.title,transform:n,classes:Xi(e),mask:this.mask!=null?this.findIconDefinition(this.mask):null,symbol:this.symbol,attributes:{role:this.a11yRole},styles:a}}static{this.\u0275fac=function(n){return new(n||t)(P(Yt),P(Ji),P(Qi),P(to,8),P(eo,8))}}static{this.\u0275cmp=kt({type:t,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(n,a){n&2&&($e("innerHTML",a.renderedIconHTML,ze),We("title",a.title))},inputs:{icon:"icon",title:"title",animation:"animation",mask:"mask",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[ut,_t],decls:0,vars:0,template:function(n,a){},encapsulation:2})}}return t})();var ns=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=Dt({type:t})}static{this.\u0275inj=Ot({})}}return t})();export{Je as a,ko as b,Do as c,es as d,ns as e};
