const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./_MA3zNeA.js","./entry.FD5YV-B5.css","./C2ArSMzG.js","./HCQTvQk1.js","./Cwf6KEM2.js"])))=>i.map(i=>d[i]);
import{d as Q,aZ as Y,a_ as Cn,a$ as nn,B as A,b0 as Sn,G as kn,b1 as en,b2 as E,b3 as N,b4 as H,b5 as xn,b6 as ln,b7 as wn,_ as j,b8 as On,p as Dn,H as Tn,V as Ln,i as Mn,W as G,n as Rn}from"./_MA3zNeA.js";import{f as on,n as _n}from"./C2bHYaEW.js";const I=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];class z{constructor(l,e,r){this.normal=e,this.property=l,r&&(this.space=r)}}z.prototype.normal={};z.prototype.property={};z.prototype.space=void 0;function tn(n,l){const e={},r={};for(const t of n)Object.assign(e,t.property),Object.assign(r,t.normal);return new z(e,r,l)}function q(n){return n.toLowerCase()}class C{constructor(l,e){this.attribute=e,this.property=l}}C.prototype.attribute="";C.prototype.booleanish=!1;C.prototype.boolean=!1;C.prototype.commaOrSpaceSeparated=!1;C.prototype.commaSeparated=!1;C.prototype.defined=!1;C.prototype.mustUseProperty=!1;C.prototype.number=!1;C.prototype.overloadedBoolean=!1;C.prototype.property="";C.prototype.spaceSeparated=!1;C.prototype.space=void 0;let An=0;const u=_(),y=_(),rn=_(),o=_(),f=_(),U=_(),S=_();function _(){return 2**++An}const W=Object.freeze(Object.defineProperty({__proto__:null,boolean:u,booleanish:y,commaOrSpaceSeparated:S,commaSeparated:U,number:o,overloadedBoolean:rn,spaceSeparated:f},Symbol.toStringTag,{value:"Module"})),V=Object.keys(W);class $ extends C{constructor(l,e,r,t){let a=-1;if(super(l,e),Z(this,"space",t),typeof r=="number")for(;++a<V.length;){const s=V[a];Z(this,V[a],(r&W[s])===W[s])}}}$.prototype.defined=!0;function Z(n,l,e){e&&(n[l]=e)}function B(n){const l={},e={};for(const[r,t]of Object.entries(n.properties)){const a=new $(r,n.transform(n.attributes||{},r),t,n.space);n.mustUseProperty&&n.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),l[r]=a,e[q(r)]=r,e[q(a.attribute)]=r}return new z(l,e,n.space)}const an=B({properties:{ariaActiveDescendant:null,ariaAtomic:y,ariaAutoComplete:null,ariaBusy:y,ariaChecked:y,ariaColCount:o,ariaColIndex:o,ariaColSpan:o,ariaControls:f,ariaCurrent:null,ariaDescribedBy:f,ariaDetails:null,ariaDisabled:y,ariaDropEffect:f,ariaErrorMessage:null,ariaExpanded:y,ariaFlowTo:f,ariaGrabbed:y,ariaHasPopup:null,ariaHidden:y,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:f,ariaLevel:o,ariaLive:null,ariaModal:y,ariaMultiLine:y,ariaMultiSelectable:y,ariaOrientation:null,ariaOwns:f,ariaPlaceholder:null,ariaPosInSet:o,ariaPressed:y,ariaReadOnly:y,ariaRelevant:null,ariaRequired:y,ariaRoleDescription:f,ariaRowCount:o,ariaRowIndex:o,ariaRowSpan:o,ariaSelected:y,ariaSetSize:o,ariaSort:null,ariaValueMax:o,ariaValueMin:o,ariaValueNow:o,ariaValueText:null,role:null},transform(n,l){return l==="role"?l:"aria-"+l.slice(4).toLowerCase()}});function un(n,l){return l in n?n[l]:l}function sn(n,l){return un(n,l.toLowerCase())}const En=B({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:U,acceptCharset:f,accessKey:f,action:null,allow:null,allowFullScreen:u,allowPaymentRequest:u,allowUserMedia:u,alt:null,as:null,async:u,autoCapitalize:null,autoComplete:f,autoFocus:u,autoPlay:u,blocking:f,capture:null,charSet:null,checked:u,cite:null,className:f,cols:o,colSpan:null,content:null,contentEditable:y,controls:u,controlsList:f,coords:o|U,crossOrigin:null,data:null,dateTime:null,decoding:null,default:u,defer:u,dir:null,dirName:null,disabled:u,download:rn,draggable:y,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:u,formTarget:null,headers:f,height:o,hidden:u,high:o,href:null,hrefLang:null,htmlFor:f,httpEquiv:f,id:null,imageSizes:null,imageSrcSet:null,inert:u,inputMode:null,integrity:null,is:null,isMap:u,itemId:null,itemProp:f,itemRef:f,itemScope:u,itemType:f,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:u,low:o,manifest:null,max:null,maxLength:o,media:null,method:null,min:null,minLength:o,multiple:u,muted:u,name:null,nonce:null,noModule:u,noValidate:u,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:u,optimum:o,pattern:null,ping:f,placeholder:null,playsInline:u,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:u,referrerPolicy:null,rel:f,required:u,reversed:u,rows:o,rowSpan:o,sandbox:f,scope:null,scoped:u,seamless:u,selected:u,shadowRootClonable:u,shadowRootDelegatesFocus:u,shadowRootMode:null,shape:null,size:o,sizes:null,slot:null,span:o,spellCheck:y,src:null,srcDoc:null,srcLang:null,srcSet:null,start:o,step:null,style:null,tabIndex:o,target:null,title:null,translate:null,type:null,typeMustMatch:u,useMap:null,value:y,width:o,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:f,axis:null,background:null,bgColor:null,border:o,borderColor:null,bottomMargin:o,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:u,declare:u,event:null,face:null,frame:null,frameBorder:null,hSpace:o,leftMargin:o,link:null,longDesc:null,lowSrc:null,marginHeight:o,marginWidth:o,noResize:u,noHref:u,noShade:u,noWrap:u,object:null,profile:null,prompt:null,rev:null,rightMargin:o,rules:null,scheme:null,scrolling:y,standby:null,summary:null,text:null,topMargin:o,valueType:null,version:null,vAlign:null,vLink:null,vSpace:o,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:u,disableRemotePlayback:u,prefix:null,property:null,results:o,security:null,unselectable:null},space:"html",transform:sn}),Un=B({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:S,accentHeight:o,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:o,amplitude:o,arabicForm:null,ascent:o,attributeName:null,attributeType:null,azimuth:o,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:o,by:null,calcMode:null,capHeight:o,className:f,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:o,diffuseConstant:o,direction:null,display:null,dur:null,divisor:o,dominantBaseline:null,download:u,dx:null,dy:null,edgeMode:null,editable:null,elevation:o,enableBackground:null,end:null,event:null,exponent:o,externalResourcesRequired:null,fill:null,fillOpacity:o,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:U,g2:U,glyphName:U,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:o,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:o,horizOriginX:o,horizOriginY:o,id:null,ideographic:o,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:o,k:o,k1:o,k2:o,k3:o,k4:o,kernelMatrix:S,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:o,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:o,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:o,overlineThickness:o,paintOrder:null,panose1:null,path:null,pathLength:o,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:f,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:o,pointsAtY:o,pointsAtZ:o,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:S,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:S,rev:S,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:S,requiredFeatures:S,requiredFonts:S,requiredFormats:S,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:o,specularExponent:o,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:o,strikethroughThickness:o,string:null,stroke:null,strokeDashArray:S,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:o,strokeOpacity:o,strokeWidth:null,style:null,surfaceScale:o,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:S,tabIndex:o,tableValues:null,target:null,targetX:o,targetY:o,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:S,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:o,underlineThickness:o,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:o,values:null,vAlphabetic:o,vMathematical:o,vectorEffect:null,vHanging:o,vIdeographic:o,version:null,vertAdvY:o,vertOriginX:o,vertOriginY:o,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:o,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:un}),cn=B({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(n,l){return"xlink:"+l.slice(5).toLowerCase()}}),pn=B({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:sn}),dn=B({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(n,l){return"xml:"+l.slice(3).toLowerCase()}}),Bn=/[A-Z]/g,J=/-[a-z]/g,In=/^data[-\w.:]+$/i;function jn(n,l){const e=q(l);let r=l,t=C;if(e in n.normal)return n.property[n.normal[e]];if(e.length>4&&e.slice(0,4)==="data"&&In.test(l)){if(l.charAt(4)==="-"){const a=l.slice(5).replace(J,Hn);r="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=l.slice(4);if(!J.test(a)){let s=a.replace(Bn,zn);s.charAt(0)!=="-"&&(s="-"+s),l="data"+s}}t=$}return new t(r,l)}function zn(n){return"-"+n.toLowerCase()}function Hn(n){return n.charAt(1).toUpperCase()}const Fn=tn([an,En,cn,pn,dn],"html");tn([an,Un,cn,pn,dn],"svg");function Vn(n,l){return l.reduce((e,r)=>{const t=Nn(n,r);return t!==void 0&&(e[r]=t),e},{})}function Nn(n,l){return l.split(".").reduce((e,r)=>e&&e[r],n)}const K="default",gn=/^@|^v-on:/,fn=/^:|^v-bind:/,qn=/^v-model/,Wn=["select","textarea","input"],Kn=["math","svg"],Xn=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(n=>[n,`prose-${n}`])),$n=Q({name:"MDCRenderer",props:{body:{type:Object,required:!0},data:{type:Object,default:()=>({})},class:{type:[String,Object],default:void 0},tag:{type:[String,Boolean],default:void 0},prose:{type:Boolean,default:void 0},components:{type:Object,default:()=>({})},unwrap:{type:[Boolean,String],default:!1}},async setup(n){var c,p,g,b,O,w,P;const l=(p=(c=Cn())==null?void 0:c.appContext)==null?void 0:p.app,e=l==null?void 0:l.$nuxt,r=(e==null?void 0:e.$route)||(e==null?void 0:e._route),{mdc:t}=((g=e==null?void 0:e.$config)==null?void 0:g.public)||{},a={...(b=t==null?void 0:t.components)!=null&&b.prose&&n.prose!==!1?Xn:{},...((O=t==null?void 0:t.components)==null?void 0:O.map)||{},...nn(((P=(w=n.data)==null?void 0:w.mdc)==null?void 0:P.components)||{}),...n.components},s=A(()=>{var R;const k=(((R=n.body)==null?void 0:R.children)||[]).map(D=>D.tag||D.type).filter(D=>!I.includes(D));return Array.from(new Set(k)).sort().join(".")}),d=Sn({...n.data});kn(()=>n.data,k=>{Object.assign(d,k)}),await re(n.body,{tags:a});function m(k,R){const D=k.split(".").length-1;return k.split(".").reduce((M,i,h)=>h==D&&M?(M[i]=R,M[i]):typeof M=="object"?M[i]:void 0,d)}return{tags:a,contentKey:s,route:r,runtimeData:d,updateRuntimeData:m}},render(n){var O,w;const{tags:l,tag:e,body:r,data:t,contentKey:a,route:s,unwrap:d,runtimeData:m,updateRuntimeData:c}=n;if(!r)return null;const p={...t,tags:l,$route:s,runtimeData:m,updateRuntimeData:c},g=e!==!1?X(e||((O=p.component)==null?void 0:O.name)||p.component||"div"):void 0;return g?Y(g,{...(w=p.component)==null?void 0:w.props,class:n.class,...this.$attrs,key:a},{default:b}):b==null?void 0:b();function b(){const P=mn(r,Y,{documentMeta:p,parentScope:p,resolveComponent:X});return P!=null&&P.default?d?on(P.default(),typeof d=="string"?d.split(" "):["*"]):P.default():null}}});function Yn(n,l,e){const{documentMeta:r,parentScope:t,resolveComponent:a}=e;if(n.type==="text")return l(H,n.value);if(n.type==="comment")return l(xn,null,n.value);const s=n.tag,d=yn(n,r.tags);if(n.tag==="binding")return Gn(n,l,r,t);const m=hn(d)?g=>g:a;if(d==="script")return l("pre",{class:"script-to-pre"},`<script>
`+_n(n)+`
<\/script>`);const c=m(d);typeof c=="object"&&(c.tag=s);const p=Zn(n,r);return l(c,p,mn(n,l,{documentMeta:r,parentScope:{...t,...p},resolveComponent:m}))}function mn(n,l,e){const{documentMeta:r,parentScope:t,resolveComponent:a}=e,d=(n.children||[]).reduce((c,p)=>{if(!oe(p))return c[K].children.push(p),c;const g=le(p);return c[g]=c[g]||{props:{},children:[]},p.type==="element"&&(c[g].props=p.props,c[g].children.push(...p.children||[])),c},{[K]:{props:{},children:[]}});return Object.entries(d).reduce((c,[p,{props:g,children:b}])=>(b.length&&(c[p]=(O={})=>{const w=Vn(O,Object.keys(g||{}));let P=b.map(k=>Yn(k,l,{documentMeta:r,parentScope:{...t,...w},resolveComponent:a}));return g!=null&&g.unwrap&&(P=on(P,g.unwrap)),te(P)}),c),{})}function Gn(n,l,e,r={}){var c,p;const t={...e.runtimeData,...r,$document:e,$doc:e},a=/\.|\[(\d+)\]/,d=((c=n.props)==null?void 0:c.value.trim().split(a).filter(Boolean)).reduce((g,b)=>{if(g&&b in g)return typeof g[b]=="function"?g[b]():g[b]},t),m=(p=n.props)==null?void 0:p.defaultValue;return l(H,d??m??"")}function Zn(n,l){const{tag:e="",props:r={}}=n;return Object.keys(r).reduce(function(t,a){if(a==="__ignoreMap")return t;const s=r[a];if(qn.test(a))return Jn(a,s,t,l,{native:Wn.includes(e)});if(a==="v-bind")return Qn(a,s,t,l);if(gn.test(a))return ne(a,s,t,l);if(fn.test(a))return ee(a,s,t,l);const{attribute:d}=jn(Fn,a);return Array.isArray(s)&&s.every(m=>typeof m=="string")?(t[d]=s.join(" "),t):(t[d]=s,t)},{})}function Jn(n,l,e,r,{native:t}){var m;const a=((m=n.match(/^v-model:([^=]+)/))==null?void 0:m[1])||"modelValue",s=t?"value":a,d=t?"onInput":`onUpdate:${a}`;return e[s]=F(l,r.runtimeData),e[d]=c=>{var p;r.updateRuntimeData(l,t?(p=c.target)==null?void 0:p.value:c)},e}function Qn(n,l,e,r){const t=F(l,r);return e=Object.assign(e,t),e}function ne(n,l,e,r){return n=n.replace(gn,""),e.on=e.on||{},e.on[n]=()=>F(l,r),e}function ee(n,l,e,r){return n=n.replace(fn,""),e[n]=F(l,r),e}const X=n=>{if(typeof n=="string"){if(I.includes(n))return n;const l=en(E(n),!1);return!n||(l==null?void 0:l.name)==="AsyncComponentWrapper"||typeof l=="string"?l:"setup"in l?N(()=>new Promise(e=>e(l))):l}return n};function F(n,l){const e=n.split(".").reduce((r,t)=>typeof r=="object"?r[t]:void 0,l);return typeof e>"u"?wn(n):e}function le(n){let l="";for(const e of Object.keys(n.props||{}))if(!(!e.startsWith("#")&&!e.startsWith("v-slot:"))){l=e.split(/[:#]/,2)[1];break}return l||K}function oe(n){return n.tag==="template"}function hn(n){return Kn.includes(n)}function te(n){const l=[];for(const e of n){const r=l[l.length-1];e.type===H&&(r==null?void 0:r.type)===H?r.children=r.children+e.children:l.push(e)}return l}async function re(n,l){if(!n)return;const e=Array.from(new Set(r(n,l)));await Promise.all(e.map(async t=>{if(t!=null&&t.render||t!=null&&t.ssrRender||t!=null&&t.__ssrInlineRender)return;const a=X(t);a!=null&&a.__asyncLoader&&!a.__asyncResolved&&await a.__asyncLoader()}));function r(t,a){const s=t.tag;if(t.type==="text"||s==="binding"||t.type==="comment")return[];const d=yn(t,a.tags);if(hn(d))return[];const m=[];t.type!=="root"&&!I.includes(d)&&m.push(d);for(const c of t.children||[])m.push(...r(c,a));return m}}function yn(n,l){var r;const e=n.tag;return!e||typeof((r=n.props)==null?void 0:r.__ignoreMap)<"u"?e:l[e]||l[E(e)]||l[ln(n.tag)]||e}const ae=Object.assign($n,{__name:"MDCRenderer"}),ue=()=>j(()=>import("./_MA3zNeA.js").then(n=>n.bB),__vite__mapDeps([0,1]),import.meta.url),ie=()=>j(()=>import("./C2ArSMzG.js"),__vite__mapDeps([2,0,1]),import.meta.url),se=()=>j(()=>import("./HCQTvQk1.js"),__vite__mapDeps([3,0,1]),import.meta.url),ce=()=>j(()=>import("./Cwf6KEM2.js"),__vite__mapDeps([4,0,1,2]),import.meta.url),vn=["ProseA","ProseAccordion","ProseAccordionItem","ProseBadge","ProseBlockquote","ProseCallout","ProseCard","ProseCardGroup","ProseCode","ProseCodeCollapse","ProseCodeGroup","ProseCodeIcon","ProseCodePreview","ProseCodeTree","ProseCollapsible","ProseEm","ProseField","ProseFieldGroup","ProseH1","ProseH2","ProseH3","ProseH4","ProseHr","ProseIcon","ProseImg","ProseKbd","ProseLi","ProseOl","ProseP","ProsePre","ProseScript","ProseSteps","ProseStrong","ProseTable","ProseTabs","ProseTabsItem","ProseTbody","ProseTd","ProseTh","ProseThead","ProseTr","ProseUl","ProseCaution","ProseNote","ProseTip","ProseWarning","ProseH5","ProseH6","Icon"],bn=["UButton","UPageFeature","UPageHero","UPageSection"],pe=Object.freeze(Object.defineProperty({__proto__:null,UButton:ue,UPageFeature:ie,UPageHero:se,UPageSection:ce,globalComponents:vn,localComponents:bn},Symbol.toStringTag,{value:"Module"})),de=Q({__name:"ContentRenderer",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})},prose:{type:Boolean,default:void 0},class:{type:[String,Object],default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(n){var k,R,D,M;const l=["render","ssrRender","__ssrInlineRender"],e=n,r=!1,t=A(()=>{let i=e.value.body||e.value;return e.excerpt&&e.value.excerpt&&(i=e.value.excerpt),i.type==="minimal"?On(i):i}),a=A(()=>{var i,h;return!((h=(i=t.value)==null?void 0:i.children)!=null&&h.length)}),s=A(()=>{const{body:i,excerpt:h,...v}=e.value;return{...v,...e.data}}),d=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(i=>[i,`prose-${i}`])),{mdc:m}=Dn().public||{},c={...(k=m==null?void 0:m.components)!=null&&k.prose&&e.prose!==!1?d:{},...((R=m==null?void 0:m.components)==null?void 0:R.map)||{},...nn(((M=(D=e.data)==null?void 0:D.mdc)==null?void 0:M.components)||{}),...e.components},p=A(()=>{}),g=A(()=>t.value?O(t.value,{tags:c}):{});function b(i){let h=i;if(typeof i=="string"){if(I.includes(i))return i;if(vn.includes(E(i))?h=en(i,!1):bn.includes(E(i))&&(h=N(()=>j(()=>Promise.resolve().then(()=>pe),void 0,import.meta.url).then(T=>{const L=T[E(i)];return L?L():void 0}))),typeof h=="string")return h}if(!h)return h;const v=h;return"__asyncLoader"in v?v:"setup"in v?N(()=>Promise.resolve(v)):v}function O(i,h){if(!i)return;const v=Array.from(new Set(w(i,h))),x={};for(const[T,L]of v)if(!x[T]){if(typeof L=="object"&&l.some(Pn=>Object.hasOwnProperty.call(L,Pn))){x[T]=L;continue}x[T]=b(L)}return x}function w(i,h){const v=i.tag;if(i.type==="text"||v==="binding"||i.type==="comment")return[];const x=P(i,h.tags),T=[];i.type!=="root"&&!I.includes(x)&&T.push([v,x]);for(const L of i.children||[])T.push(...w(L,h));return T}function P(i,h){var x;const v=i.tag;return!v||typeof((x=i.props)==null?void 0:x.__ignoreMap)<"u"?v:h[v]||h[E(v)]||h[ln(i.tag)]||v}return(i,h)=>a.value?Ln(i.$slots,"empty",{key:1,body:t.value,data:s.value,dataContentId:G(r)?n.value.id:void 0}):(Mn(),Tn(ae,{key:p.value,body:t.value,data:s.value,class:Rn(e.class),tag:e.tag,prose:e.prose,unwrap:e.unwrap,components:g.value,"data-content-id":G(r)?n.value.id:void 0},null,8,["body","data","class","tag","prose","unwrap","components","data-content-id"]))}}),me=Object.assign(de,{__name:"ContentRenderer"});export{me as _};
