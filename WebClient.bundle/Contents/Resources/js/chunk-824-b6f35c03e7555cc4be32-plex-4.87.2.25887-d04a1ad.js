(self.webpackChunkplex_web_client=self.webpackChunkplex_web_client||[]).push([[824],{44271:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(22222),o=r(13469),i=r.n(o),s=r(53461);function a(e){return(0,n.P1)((0,s.Z)(),(t=>{if(t)return i().findWhere(t.features,{type:e})}))}},83824:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>zr});var n=r(67294),o=r(82650),i=r(35387),s=r(61737),a=r(28216),l=r(22222),p=r(56925),c=r(53461),u=r(87442),d=r(73788),h=r(42985),g=r(63776),f=r(16018),m=r(56791),v=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;const E=function(e){const t=e,{children:r,hasProvider:o,showSpinner:i,showError:s}=t,a=((e,t)=>{var r={};for(var n in e)y.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&v)for(var n of v(e))t.indexOf(n)<0&&b.call(e,n)&&(r[n]=e[n]);return r})(t,["children","hasProvider","showSpinner","showError"]);if(i)return n.createElement(g.Z,null,n.createElement(h.Z,null));if(s)return n.createElement(m.Z,{title:(0,d.Z)("There was an unexpected error")});if(!o)return n.createElement(f.Z,null);const l=n.Children.only(r);return n.cloneElement(l,a)};var P=Object.defineProperty,O=Object.defineProperties,C=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const w={dispatchFetchProvider:p.dB,dispatchPopulateProvider:p.RG};class T extends n.Component{constructor(){super(...arguments),this.onPopulate=({serverEntityID:e,providerEntityID:t})=>{(0,u.c9)((()=>{this.props.dispatchPopulateProvider({providerEntityID:t,options:{merge:!0}})}))},this.onRepopulate=({serverEntityID:e,providerEntityID:t})=>{(0,u.c9)((()=>{this.props.dispatchFetchProvider({providerEntityID:t,options:{merge:!0}})}))}}componentDidMount(){this.props.isProvidersPopulated&&this.onPopulate({providerEntityID:this.props.providerEntityID})}UNSAFE_componentWillReceiveProps(e){e.providerEntityID===this.props.providerEntityID&&e.isProvidersPopulated===this.props.isProvidersPopulated||this.onRepopulate({providerEntityID:e.providerEntityID})}render(){const e=this.props,{dispatchFetchProvider:t,dispatchPopulateProvider:r}=e,o=((e,t)=>{var r={};for(var n in e)D.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&I)for(var n of I(e))t.indexOf(n)<0&&S.call(e,n)&&(r[n]=e[n]);return r})(e,["dispatchFetchProvider","dispatchPopulateProvider"]);return n.createElement(E,(i=((e,t)=>{for(var r in t||(t={}))D.call(t,r)&&x(e,r,t[r]);if(I)for(var r of I(t))S.call(t,r)&&x(e,r,t[r]);return e})({},o),s={onRetry:this.onRepopulate},O(i,C(s))));var i,s}}const j=(0,a.$j)((function(){return(0,l.P1)((0,c.Z)(),(e=>e?{isProvidersPopulated:!0,hasProvider:!0,providerEntityID:e.entityID,isRetrying:!!e.isPending,showSpinner:!e.isPopulated&&!e.error,showError:!!e.error}:{isProvidersPopulated:!1,hasProvider:!1,isRetrying:!0,showSpinner:!0,showError:!1}))}),w)(T);var Z=r(39166),k=r(44271),N=r(86418),M=r(62291),V=r(84419),_=r(85494),L=r(76848),F=r(70308),R=r(99415),U=r(86832);function B(e,t){return e?e.split("|").map((e=>{const[r,n]=e.split(":");return[t===R.bB?parseInt(r,10):r,n]})):null}function H(e,t){var r;return null==(r=B(e,t))?void 0:r.map((([e,t])=>({[e]:t})))}function z(e){var t;const r=W(e),n=null==(t=B(e.enumValues,e.type))?void 0:t.find((([e])=>e===r));return n?n[1]:null}function W(e){var t;return null!=(t=e.value)?t:e.defaultValue}var A=r(55097),G=r(7971),X=r(70852),J=r(85482),Q=r(2768),q=r(37754),K=r(58851);const $=(0,K.Z)(X.Z),Y=function(e){const{labelText:t,helpText:r,options:o}=e;return n.createElement(J.Z,null,n.createElement(q.Z,null,t),r?n.createElement(Q.Z,{className:"MultiSelectInputGroup-help-a3KlxM FormHelp-help-yud9Zf"},r):null,n.createElement("div",{className:"MultiSelectInputGroup-multiSelectContainer-JZ8NAl"},o.map((e=>n.createElement("div",{key:e.key,className:"MultiSelectInputGroup-multiSelectItem-RFJKRq"},n.createElement($,{checkboxText:e.title,initialValue:e.selected,name:e.key}))))))};var ee=r(35767),te=r(13469),re=r.n(te),ne=r(7614),oe=r(94184),ie=r.n(oe),se=r(3521),ae=r(69281);const le={input:"MaskedInput-input-jNZs6m TextInput-input-NqTdW3 input-input-XAtklw",small:"MaskedInput-small-EpCkiz TextInput-small-efNCXZ input-small-eTaFF8",large:"MaskedInput-large-wfxsF_ TextInput-large-I75O3g input-large-KIQwL0",isDisabled:"MaskedInput-isDisabled-atAf3i TextInput-isDisabled-PzBOCB input-isDisabled-NZu29w",hasError:"MaskedInput-hasError-EbQFws TextInput-hasError-o5OcFz input-hasError-GqupwL"};var pe=Object.defineProperty,ce=Object.defineProperties,ue=Object.getOwnPropertyDescriptors,de=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable,fe=(e,t,r)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;class me extends n.Component{constructor(){super(...arguments),this.setInputRef=e=>{this.inputRef=e},this.onChange=e=>{this.textMaskInputElement.update(),this.props.onChange(this.textMaskInputElement.state.previousConformedValue)}}componentDidMount(){const{value:e}=this.props,{mask:t,guide:r,pipe:n,placeholderChar:o,keepCharPositions:i}=this.props;this.textMaskInputElement=(0,se.createTextMaskInputElement)({inputElement:this.inputRef,mask:t,guide:r,pipe:n,placeholderChar:o,keepCharPositions:i}),this.textMaskInputElement.update(e)}componentDidUpdate(){this.textMaskInputElement.update(this.props.value)}render(){const e=this.props,{className:t,errorClassName:r,disabledClassName:o,isDisabled:i,type:s,name:a,initialValue:l,value:p,size:c,mask:u,guide:d,pipe:h,placeholderChar:g,keepCharPositions:f,hasError:m,errors:v,validations:y,onChange:b}=e,E=((e,t)=>{var r={};for(var n in e)he.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&de)for(var n of de(e))t.indexOf(n)<0&&ge.call(e,n)&&(r[n]=e[n]);return r})(e,["className","errorClassName","disabledClassName","isDisabled","type","name","initialValue","value","size","mask","guide","pipe","placeholderChar","keepCharPositions","hasError","errors","validations","onChange"]);return n.createElement("input",(P=((e,t)=>{for(var r in t||(t={}))he.call(t,r)&&fe(e,r,t[r]);if(de)for(var r of de(t))ge.call(t,r)&&fe(e,r,t[r]);return e})({},E),O={ref:this.setInputRef,className:ie()(t,le[c],i&&o,m&&r),defaultValue:p,disabled:i,id:a,name:a,type:s,onChange:this.onChange},ce(P,ue(O))));var P,O}}me.defaultProps={className:le.input,errorClassName:le.hasError,disabledClassName:le.isDisabled,isDisabled:!1,size:ae.ln,type:"text",hasError:!1};const ve=me;class ye extends n.Component{constructor(e,t){super(e,t),this.onCountryChange=e=>{const t=this._calculateLocationState(e,this.state.postalCode,this.props.countries);this.setState(t,(()=>{this.props.onChange({country:t.country,postalCode:t.postalCode})}))},this.onPostalCodeChange=e=>{this.setState({postalCode:e},(()=>{this.props.onChange({country:this.state.country,postalCode:e})}))},this.state=this._calculateLocationState(e.initialValue.country,e.initialValue.postalCode,e.countries)}UNSAFE_componentWillReceiveProps(e){const t=this.state.country!==e.value.country,r=this.state.postalCode!==e.value.postalCode;if(this.props.countries!==e.countries||t||r){const t=this._calculateLocationState(e.value.country,e.value.postalCode,e.countries);this.setState(t)}}_getCountryOption(e,t){return t.find((t=>t.code===e))}_countryHasPostalCode(e,t){const r=this._getCountryOption(e,t);return r&&"postalcode"===r.flavor}_calculateLocationState(e,t,r){return{country:e,postalCode:this._countryHasPostalCode(e,r)&&t?t:""}}_getSelectInputValues(e){return e.map((e=>({[e.code]:e.title})))}_getPostalCodeMask(e,t){const r=this._getCountryOption(e,t).postalCodeFormat;return r?re().map(r,(e=>"N"===e?/\d/:/\./)):[]}render(){const{labelText:e,helpText:t,countries:r,showErrors:o,errors:i,onBlur:s}=this.props,{country:a,postalCode:l}=this.state,[p]=i,c=0===r.length,u=this._countryHasPostalCode(a,r);return n.createElement(J.Z,null,n.createElement(q.Z,{name:"country"},e),t?n.createElement(Q.Z,{className:"LocationSettingInputGroup-help-DrA4XO FormHelp-help-yud9Zf"},t):null,n.createElement(ne.Z,{isDisabled:c,name:"country",value:a,values:this._getSelectInputValues(r),onChange:this.onCountryChange}),u?n.createElement(q.Z,{className:"LocationSettingInputGroup-secondaryLabel-u0ZX5a FormLabel-label-KQvmHO",hasError:o,name:"postalCode"},(0,d.Z)("Postal Code"),o&&p?` — ${p}`:null):null,u?n.createElement(ve,{hasError:o,isDisabled:c,mask:this._getPostalCodeMask(a,r),name:"postalCode",value:l,onBlur:s,onChange:this.onPostalCodeChange}):null)}}const be=(0,K.Z)(ye);var Ee=r(32667),Pe=Object.defineProperty,Oe=Object.defineProperties,Ce=Object.getOwnPropertyDescriptors,Ie=Object.getOwnPropertySymbols,De=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable,xe=(e,t,r)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const we=[function(e){return e.postalCode&&!/^\d{5}$/.test(e.postalCode)?(0,d.Z)("Postal Code is not in correct format"):void 0}],Te={playbackSpeed:Ee.H},je=function e(t){const{id:r,type:o,multiselect:i,label:s,summary:a,country:l,locations:p,postalCode:c,value:u,options:h,enumValues:g,settings:f,parentSetting:m}=t;return r===F.xy?n.createElement(A.Z,{checkboxText:(0,d.Z)("Display the last 3 accessed channels in Guide"),checkedValue:3,initialValue:u,name:r,uncheckedValue:0}):o===R.oG?n.createElement("div",null,f.map((r=>{return r.hidden?null:n.createElement(e,(o=((e,t)=>{for(var r in t||(t={}))De.call(t,r)&&xe(e,r,t[r]);if(Ie)for(var r of Ie(t))Se.call(t,r)&&xe(e,r,t[r]);return e})({key:r.id},r),Oe(o,Ce({parentSetting:t}))));var o}))):o===R.Vi?n.createElement(A.Z,{checkboxText:s,helpText:a,initialValue:u,labelText:m&&m.label||s,name:r}):o===R.tf?n.createElement(ee.Z,{initialValue:u,labelText:s,max:t.max,min:t.min,name:r,stepSize:t.step,valueModifier:Te[r]}):o===R.Ct?n.createElement(be,{countries:p,helpText:a,initialValue:{country:l,postalCode:c},labelText:s,name:r,validations:we}):o===R.XD&&i?n.createElement(Y,{helpText:a,labelText:s,options:h}):g?n.createElement(G.Z,{helpText:a,initialValue:u,labelText:s,name:r,values:H(g,o)}):(U.Z.warn("Unsupported provider setting type:[%s]",o),null)};var Ze=r(85796),ke=Object.defineProperty,Ne=Object.defineProperties,Me=Object.getOwnPropertyDescriptors,Ve=Object.getOwnPropertySymbols,_e=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable,Fe=(e,t,r)=>t in e?ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const Re=function(e){const t=e,{setting:r}=t,o=((e,t)=>{var r={};for(var n in e)_e.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&Ve)for(var n of Ve(e))t.indexOf(n)<0&&Le.call(e,n)&&(r[n]=e[n]);return r})(t,["setting"]);return n.createElement(Ze.Z,(i=((e,t)=>{for(var r in t||(t={}))_e.call(t,r)&&Fe(e,r,t[r]);if(Ve)for(var r of Ve(t))Le.call(t,r)&&Fe(e,r,t[r]);return e})({},o),s={closedNode:z(r),initialValue:W(r)},Ne(i,Me(s))));var i,s};var Ue=Object.defineProperty,Be=Object.getOwnPropertySymbols,He=Object.prototype.hasOwnProperty,ze=Object.prototype.propertyIsEnumerable,We=(e,t,r)=>t in e?Ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const Ae=function(e){const t=e,{setting:r}=t,o=((e,t)=>{var r={};for(var n in e)He.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&Be)for(var n of Be(e))t.indexOf(n)<0&&ze.call(e,n)&&(r[n]=e[n]);return r})(t,["setting"]);return n.createElement(Ze.Z,((e,t)=>{for(var r in t||(t={}))He.call(t,r)&&We(e,r,t[r]);if(Be)for(var r of Be(t))ze.call(t,r)&&We(e,r,t[r]);return e})({closedNode:r.summary},o))};var Ge=r(37198),Xe=r(62704),Je=r(8067),Qe=r(37920),qe=r(993),Ke=r(31489),$e=r(84520),Ye=r(86979),et=r(59900),tt=r(45697),rt=r.n(tt),nt=r(90558);function ot(e){const t=e["aria-label"],r=e.className,o=e.style,i={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 560 560",id:"plex-icon-eye-closed-560"};i["aria-hidden"]=!t,i.style=o,i.className=nt.Z.plexIcon+(r?" "+r:"");const s=[n.createElement.apply(n,["g",void 0].concat([n.createElement.apply(n,["path",{d:"M522.454 280c-56.558 79.108-145.66 125.848-241.414 125.848-95.82 0-184.9884-46.756-241.5154-125.848H1l3.1852 4.958C65.863 381.112 169.368 438.512 281.034 438.512c111.642 0 215.126-57.4 276.788-153.578L561 280h-38.546z"}].concat([])),n.createElement.apply(n,["path",{d:"M269.018 436.36V520h29.56v-83.64zM383.556 414.76l34.616 83.904 27.21-11.884-34.616-83.906zM480.352 361.564l54.132 71.284 23.294-18.728-54.132-71.284zM154.4628 402.434l-31.0532 87.792 27.7794 10.4 31.053-87.79zM62.8262 345.216L8.3388 416.972l23.2936 18.726 54.4874-71.754z"}].concat([]))]))];return t&&s.unshift(n.createElement("title",null,t)),n.createElement.apply(n,["svg",i].concat(s))}ot.propTypes={"aria-label":rt().string,className:rt().string,style:rt().object};const it=ot;function st(e){const t=e["aria-label"],r=e.className,o=e.style,i={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 560 560",id:"plex-icon-eye-open-560"};i["aria-hidden"]=!t,i.style=o,i.className=nt.Z.plexIcon+(r?" "+r:"");const s=[n.createElement.apply(n,["g",void 0].concat([n.createElement.apply(n,["path",{d:"M556.022 268.128C550.718 261.908 431.676 120 280.22 120 128.766 120 9.7238 261.908 4.4198 268.128c-5.893 6.784-5.893 16.394 0 23.744C9.7238 298.092 128.766 440 280.22 440c151.456 0 270.498-142.474 275.802-148.128 5.304-6.784 5.304-16.96 0-23.744zM280.22 386.29c-61.288 0-110.79-47.492-110.79-106.29 0-58.798 49.502-106.29 110.79-106.29 61.29 0 110.792 47.492 110.792 106.29 0 58.798-49.502 106.29-110.792 106.29z"}].concat([])),n.createElement.apply(n,["path",{d:"M280.224 344.452c37.102 0 67.182-28.856 67.182-64.452s-30.08-64.454-67.182-64.454c-37.104 0-67.184 28.858-67.184 64.454 0 35.596 30.08 64.452 67.184 64.452z"}].concat([]))]))];return t&&s.unshift(n.createElement("title",null,t)),n.createElement.apply(n,["svg",i].concat(s))}st.propTypes={"aria-label":rt().string,className:rt().string,style:rt().object};const at=st;var lt=r(55550);const pt={item:"LineupChannel-item-a8lbeO",label:"LineupChannel-label-RIB_Sv",title:"LineupChannel-title-KsfeQt",iconReorder:"LineupChannel-iconReorder-d6kKvE",toggleButton:"LineupChannel-toggleButton-N1mdEQ IconButton-button-s4bVCh",thumb:"LineupChannel-thumb-fnPGEA"};function ct(e){const{serverEntityID:t,providerEntityID:r,className:o,channelID:i,title:s,thumb:a,style:l,hidden:p,connectDragSource:c,onToggleHideChannel:u}=e,h=(0,n.useCallback)((()=>{u&&u(i)}),[i,u]),g=p?(0,d.Z)("Show"):(0,d.Z)("Hide");return n.createElement("div",{className:ie()(o,p&&pt.isHidden),style:l},c(n.createElement("div",null,n.createElement(lt.Z,{className:pt.iconReorder}))),n.createElement(et.Z,{backgroundSize:"contain",className:pt.thumb,height:36,providerEntityID:r,serverEntityID:t,url:a,width:36}),n.createElement("span",{className:pt.label},n.createElement("span",{className:pt.title},s)),n.createElement(Ye.Z,{ariaLabel:g,className:pt.toggleButton,component:$e.Z,iconComponent:p?it:at,tooltip:g,onPress:h}))}ct.defaultProps={className:pt.item,connectDragSource:e=>e};const ut=ct;var dt=r(54139),ht=r(22310),gt=r(24107),ft=Object.defineProperty,mt=Object.defineProperties,vt=Object.getOwnPropertyDescriptors,yt=Object.getOwnPropertySymbols,bt=Object.prototype.hasOwnProperty,Et=Object.prototype.propertyIsEnumerable,Pt=(e,t,r)=>t in e?ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const Ot=parseInt(gt.Z.lineupSettingChannelHeight,10);class Ct extends n.Component{render(){const{item:e,style:t}=this.props;if(!e||!t)return null;const r=e,{listHeight:o,listWidth:i,listTop:s,listRight:a,listBottom:l,listLeft:p}=r,c=((e,t)=>{var r={};for(var n in e)bt.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&yt)for(var n of yt(e))t.indexOf(n)<0&&Et.call(e,n)&&(r[n]=e[n]);return r})(r,["listHeight","listWidth","listTop","listRight","listBottom","listLeft"]);return n.createElement(Ke.Z,null,n.createElement(ut,(u=((e,t)=>{for(var r in t||(t={}))bt.call(t,r)&&Pt(e,r,t[r]);if(yt)for(var r of yt(t))Et.call(t,r)&&Pt(e,r,t[r]);return e})({},c),mt(u,vt({style:t})))));var u}}const It=(0,qe.r)((function(e){const t=e.getItem(),r={item:t,style:null},n=e.getInitialSourceClientOffset(),o=e.getSourceClientOffset();if(e.getItemType()===dt.L4&&n&&o){let e=o.y;e-t.listTop<=0?e=t.listTop:e+Ot>=t.listBottom&&(e=t.listBottom-Ot),r.style=(0,ht.Z)({x:n.x,y:e},t.listWidth)}return r}))(Ct);var Dt=r(93712),St=r(90625),xt=r(46408),wt=r(73935),Tt=r(50774);var jt=Object.defineProperty,Zt=Object.getOwnPropertySymbols,kt=Object.prototype.hasOwnProperty,Nt=Object.prototype.propertyIsEnumerable,Mt=(e,t,r)=>t in e?jt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const Vt={beginDrag(e){const{channelID:t,serverEntityID:r,providerEntityID:n,title:o,thumb:i,hidden:s,listIndex:a,listHeight:l,listWidth:p,listTop:c,listRight:u,listBottom:d,listLeft:h}=e;return{dragIndex:a,channelID:t,serverEntityID:r,providerEntityID:n,title:o,thumb:i,hidden:s,listHeight:l,listWidth:p,listTop:c,listRight:u,listBottom:d,listLeft:h}},endDrag(e,t){e.onItemDragEnd({didDrop:t.didDrop()})}},_t={hover(e,t,r){const n=t.getClientOffset(),o=(0,wt.findDOMNode)(r).getBoundingClientRect(),i=(o.bottom-o.top)/2,s=n.y-o.top,a=t.getItem().dragIndex,l=e.listIndex;let p;p=l===a?l:s>i?l+1:l,e.onItemDragMove({dragIndex:a,dropIndex:p})}};class Lt extends n.Component{componentDidMount(){this.props.connectDragPreview((0,xt.r)())}render(){const e=this.props,{isOver:t,isDragging:r,listIndex:o,dropIndex:i,listHeight:s,listWidth:a,listTop:l,listRight:p,listBottom:c,listLeft:u,isDraggingBefore:d,isDraggingAfter:h,connectDropTarget:g}=e,f=((e,t)=>{var r={};for(var n in e)kt.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&Zt)for(var n of Zt(e))t.indexOf(n)<0&&Nt.call(e,n)&&(r[n]=e[n]);return r})(e,["isOver","isDragging","listIndex","dropIndex","listHeight","listWidth","listTop","listRight","listBottom","listLeft","isDraggingBefore","isDraggingAfter","connectDropTarget"]);return g(n.createElement("div",{className:ie()("LineupChannelDragSource-container-jQ9BdI",t&&"LineupChannelDragSource-isOver-JETAax",r&&Tt.fN,t&&d&&Tt.DT,t&&h&&Tt.QZ)},n.createElement(ut,((e,t)=>{for(var r in t||(t={}))kt.call(t,r)&&Mt(e,r,t[r]);if(Zt)for(var r of Zt(t))Nt.call(t,r)&&Mt(e,r,t[r]);return e})({},f))))}}const Ft=(0,Dt.G)(dt.L4,_t,(function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}}))((0,St.E)(dt.L4,Vt,(function(e,t){return{connectDragPreview:e.dragPreview(),connectDragSource:e.dragSource(),isDragging:t.isDragging()}}))(Lt));var Rt=Object.defineProperty,Ut=Object.defineProperties,Bt=Object.getOwnPropertyDescriptors,Ht=Object.getOwnPropertySymbols,zt=Object.prototype.hasOwnProperty,Wt=Object.prototype.propertyIsEnumerable,At=(e,t,r)=>t in e?Rt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Gt=(e,t)=>{for(var r in t||(t={}))zt.call(t,r)&&At(e,r,t[r]);if(Ht)for(var r of Ht(t))Wt.call(t,r)&&At(e,r,t[r]);return e},Xt=(e,t)=>Ut(e,Bt(t));const Jt={dragIndex:-1,dropIndex:-1,hasValidDropTarget:!1};class Qt extends n.Component{constructor(e,t){super(e,t),this.onItemDragMove=e=>{const{dragIndex:t,dropIndex:r}=e,{dragIndex:n,dropIndex:o}=this.state;let i=r!==o?r:o;const s=t!==n?t:n;if((i===s||i>s&&i-s==1)&&(i=-1),s!==n||i!==o){const e={dragIndex:s,dropIndex:i,hasValidDropTarget:-1!==i};this.setState(e)}},this.onItemDragEnd=e=>{const{dragIndex:t,dropIndex:r}=this.state;let n;e.didDrop&&-1!==r&&(n=()=>{this.props.onReorderChannel({fromIndex:t,toIndex:r>t?r-1:r})}),this.setState(Jt,n)},this.onMeasure=e=>{const{height:t,width:r,x:n,y:o}=e;this.setState({listHeight:t,listWidth:r,listTop:o,listRight:n+r,listBottom:o+t,listLeft:n})},this.state=Xt(Gt({},Jt),{listHeight:0,listWidth:0,listTop:0,listRight:0,listBottom:0,listLeft:0})}render(){const{serverEntityID:e,providerEntityID:t,lineup:r,onToggleHideChannel:o}=this.props,{dropIndex:i,hasValidDropTarget:s}=this.state;return n.createElement(Xe.Z,{onMeasure:this.onMeasure},n.createElement(Je.Z,{className:"SortableLineup-scroller-vFMW_V Scroller-scroller-aaw2tP",scrollDirection:Qe.yZ},r.map(((r,a)=>{const{id:l,title:p,thumb:c,hidden:u}=r,d=a,h=s&&i===d,g=s&&i===d+1;return n.createElement(Ft,Xt(Gt({},this.state),{key:l,channelID:l,hasValidDropTarget:s,hidden:u,isDraggingAfter:g,isDraggingBefore:h,listIndex:d,providerEntityID:t,serverEntityID:e,thumb:c,title:p,onItemDragEnd:this.onItemDragEnd,onItemDragMove:this.onItemDragMove,onToggleHideChannel:o}))})),n.createElement(It,null)))}}const qt=Qt;var Kt=Object.defineProperty,$t=Object.defineProperties,Yt=Object.getOwnPropertyDescriptors,er=Object.getOwnPropertySymbols,tr=Object.prototype.hasOwnProperty,rr=Object.prototype.propertyIsEnumerable,nr=(e,t,r)=>t in e?Kt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,or=(e,t)=>{for(var r in t||(t={}))tr.call(t,r)&&nr(e,r,t[r]);if(er)for(var r of er(t))rr.call(t,r)&&nr(e,r,t[r]);return e},ir=(e,t)=>$t(e,Yt(t));const sr=function(e){const t=e,{serverEntityID:r,providerEntityID:o,setting:i,onTogglePress:s,onSubmit:a}=t,l=((e,t)=>{var r={};for(var n in e)tr.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&er)for(var n of er(e))t.indexOf(n)<0&&rr.call(e,n)&&(r[n]=e[n]);return r})(t,["serverEntityID","providerEntityID","setting","onTogglePress","onSubmit"]),{summary:p,lineup:c,isLineupPending:u}=i,[d,h]=(0,n.useState)(c),[g,f]=(0,n.useState)(!1),m=(0,n.useCallback)((e=>{f(!0),h(d.map((t=>t.id===e?ir(or({},t),{hidden:!t.hidden}):t)))}),[d]),v=(0,n.useCallback)((({fromIndex:e,toIndex:t})=>{e!==t&&(f(!0),h((0,Ge.Z)(d,e,t)))}),[d]),y=(0,n.useCallback)((e=>{h(c),s(e)}),[c,s]),b=(0,n.useCallback)((()=>{const e=d.map((({id:e,hidden:t})=>({id:e,hidden:t})));a(e)}),[d,a]);return(0,n.useEffect)((()=>{u||h(c)}),[u,c]),n.createElement(Ze.Z,ir(or({},l),{closedNode:p,isDirty:g,showSpinner:u,onSubmit:b,onTogglePress:y}),n.createElement(Q.Z,{className:"ProviderSettingLineupFormSection-help-hzAgHJ FormHelp-help-yud9Zf"},p),n.createElement(qt,{lineup:d,providerEntityID:o,serverEntityID:r,onReorderChannel:v,onToggleHideChannel:m}))};var ar=Object.defineProperty,lr=Object.defineProperties,pr=Object.getOwnPropertyDescriptors,cr=Object.getOwnPropertySymbols,ur=Object.prototype.hasOwnProperty,dr=Object.prototype.propertyIsEnumerable,hr=(e,t,r)=>t in e?ar(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;class gr extends n.Component{constructor(){super(...arguments),this.onSubmit=e=>{const{location:t}=e;this.props.onSubmit(t)}}_getCountryPostalCodeLabel(e,t){const r=[];return e?(r.push(e),t&&r.push(t),r.join(", ")):""}render(){const e=this.props,{setting:t}=e,r=((e,t)=>{var r={};for(var n in e)ur.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&cr)for(var n of cr(e))t.indexOf(n)<0&&dr.call(e,n)&&(r[n]=e[n]);return r})(e,["setting"]);return n.createElement(Ze.Z,(o=((e,t)=>{for(var r in t||(t={}))ur.call(t,r)&&hr(e,r,t[r]);if(cr)for(var r of cr(t))dr.call(t,r)&&hr(e,r,t[r]);return e})({closedNode:this._getCountryPostalCodeLabel(t.countryLabel,t.postalCode),showSpinner:t.isLocationsPending},r),i={onSubmit:this.onSubmit},lr(o,pr(i))));var o,i}}const fr=gr;var mr=Object.defineProperty,vr=Object.getOwnPropertySymbols,yr=Object.prototype.hasOwnProperty,br=Object.prototype.propertyIsEnumerable,Er=(e,t,r)=>t in e?mr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const Pr=function(e){const t=e,{setting:r}=t,o=((e,t)=>{var r={};for(var n in e)yr.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&vr)for(var n of vr(e))t.indexOf(n)<0&&br.call(e,n)&&(r[n]=e[n]);return r})(t,["setting"]);return n.createElement(Ze.Z,((e,t)=>{for(var r in t||(t={}))yr.call(t,r)&&Er(e,r,t[r]);if(vr)for(var r of vr(t))br.call(t,r)&&Er(e,r,t[r]);return e})({closedNode:(0,d.Z)("{1} selected",r.selectedCount),showSpinner:r.isOptionsPending},o))};var Or=Object.defineProperty,Cr=Object.defineProperties,Ir=Object.getOwnPropertyDescriptors,Dr=Object.getOwnPropertySymbols,Sr=Object.prototype.hasOwnProperty,xr=Object.prototype.propertyIsEnumerable,wr=(e,t,r)=>t in e?Or(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Tr=(e,t)=>{for(var r in t||(t={}))Sr.call(t,r)&&wr(e,r,t[r]);if(Dr)for(var r of Dr(t))xr.call(t,r)&&wr(e,r,t[r]);return e},jr=(e,t)=>Cr(e,Ir(t));class Zr extends n.Component{constructor(){super(...arguments),this.onTogglePress=()=>{const{setting:{optionsError:e,locationsError:t,lineupError:r,id:n}}=this.props;this.props.onTogglePress(n),(e||t||r)&&this.props.onOptionsFetchErrorDismiss(n)},this.onSubmit=e=>{this.props.onUpdateSetting(this.props.setting.id,e)}}render(){const{setting:e}=this.props,{id:t,summary:r,optionsError:o,locationsError:i,lineupError:s,type:a,multiselect:l,enumValues:p,value:c}=e,u=this.props,{updateError:h,onUpdateSetting:g,onTogglePress:f,onOptionsFetchErrorDismiss:m}=u,v=((e,t)=>{var r={};for(var n in e)Sr.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&Dr)for(var n of Dr(e))t.indexOf(n)<0&&xr.call(e,n)&&(r[n]=e[n]);return r})(u,["updateError","onUpdateSetting","onTogglePress","onOptionsFetchErrorDismiss"]),y=h?(0,d.Z)("Unable to save settings"):void 0,b=o||i||s?(0,d.Z)("There was an error loading the options"):y;return t===F.xy?n.createElement(Ze.Z,jr(Tr({},v),{closedNode:3===c?(0,d.Z)("Enabled"):(0,d.Z)("Disabled"),errorMessage:b,title:(0,d.Z)("Display the last 3 accessed channels in Guide"),onSubmit:this.onSubmit,onTogglePress:this.onTogglePress})):a===R.oG?n.createElement(Ae,jr(Tr({},v),{errorMessage:b,onSubmit:this.onSubmit,onTogglePress:this.onTogglePress})):a===R.Ct?n.createElement(fr,jr(Tr({},v),{errorMessage:b,onSubmit:this.onSubmit,onTogglePress:this.onTogglePress})):a===R.XD&&l?n.createElement(Pr,jr(Tr({},v),{errorMessage:b,onSubmit:this.onSubmit,onTogglePress:this.onTogglePress})):p?n.createElement(Re,jr(Tr({},v),{errorMessage:b,onSubmit:this.onSubmit,onTogglePress:this.onTogglePress})):a===R.Pt?n.createElement(sr,jr(Tr({},v),{errorMessage:b,setting:e,onSubmit:this.onSubmit,onTogglePress:this.onTogglePress})):a===R.tf||a===R.Vi?n.createElement(Ze.Z,jr(Tr({closedNode:r},v),{errorMessage:b,onSubmit:this.onSubmit,onTogglePress:this.onTogglePress})):(U.Z.warn("Unsupported provider setting type:[%s]",a),null)}}const kr=Zr;var Nr=Object.defineProperty,Mr=Object.getOwnPropertySymbols,Vr=Object.prototype.hasOwnProperty,_r=Object.prototype.propertyIsEnumerable,Lr=(e,t,r)=>t in e?Nr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;class Fr extends n.Component{constructor(e,t){super(e,t),this.onTogglePress=e=>{this.props.updateError&&this.props.onUpdateErrorDismiss(),this.state.openSettingID===e?this.setState({openSettingID:null}):(this.props.onSettingViewDetail(e),this.setState({openSettingID:e}))},this.state={openSettingID:null,isUpdatePendingFromStore:e.isUpdatePending}}static getDerivedStateFromProps(e,t){const r={isUpdatePendingFromStore:e.isUpdatePending};return!t.isUpdatePendingFromStore||e.isUpdatePending||e.updateError||(r.openSettingID=null),r}render(){const{serverEntityID:e,providerEntityID:t,providerTitle:r,showSpinner:o,settings:i,isUpdatePending:s,updateError:a,onUpdateSetting:l,onOptionsFetchErrorDismiss:p}=this.props,{openSettingID:c}=this.state;return o?n.createElement(g.Z,null,n.createElement(h.Z,null)):n.createElement(_.Z,{metricsPage:M.PX,metricsPane:"settings"},n.createElement(L.Z,null,r,r?n.createElement(V.Z,null):null,(0,d.Z)("Personalize")),i.map((r=>r.hidden?null:n.createElement(kr,{key:r.id,isOpen:c===r.id,isUpdating:s,providerEntityID:t,serverEntityID:e,setting:r,title:r.label,updateError:a,onOptionsFetchErrorDismiss:p,onTogglePress:this.onTogglePress,onUpdateSetting:l},n.createElement(je,((e,t)=>{for(var r in t||(t={}))Vr.call(t,r)&&Lr(e,r,t[r]);if(Mr)for(var r of Mr(t))_r.call(t,r)&&Lr(e,r,t[r]);return e})({},r))))))}}const Rr=Fr,Ur={dispatchFetchProviderSettings:Z.VH,dispatchUpdateProviderSetting:Z.qf,dispatchClearProviderSettingUpdateError:Z.ou,dispatchClearProviderSettingFetchError:Z.N2,dispatchPopulateSettingsOptions:Z.WI};class Br extends n.Component{constructor(){super(...arguments),this.onUpdateErrorDismiss=()=>{this.props.dispatchClearProviderSettingUpdateError({providerEntityID:this.props.providerEntityID})},this.onOptionsFetchErrorDismiss=e=>{this.props.dispatchClearProviderSettingFetchError({providerEntityID:this.props.providerEntityID,settingID:e})},this.onUpdateSetting=(e,t)=>{this.props.dispatchUpdateProviderSetting({providerEntityID:this.props.providerEntityID,settingID:e,values:t})},this.onSettingViewDetail=e=>{this.props.dispatchPopulateSettingsOptions({providerEntityID:this.props.providerEntityID,settingID:e})}}componentDidMount(){const{providerEntityID:e}=this.props;this.props.dispatchFetchProviderSettings({providerEntityID:e})}render(){return n.createElement(Rr,{isUpdatePending:this.props.isUpdatePending,providerEntityID:this.props.providerEntityID,providerTitle:this.props.providerTitle,serverEntityID:this.props.serverEntityID,settings:this.props.settings,showSpinner:this.props.isSettingsPending,updateError:this.props.updateError,onOptionsFetchErrorDismiss:this.onOptionsFetchErrorDismiss,onSettingViewDetail:this.onSettingViewDetail,onUpdateErrorDismiss:this.onUpdateErrorDismiss,onUpdateSetting:this.onUpdateSetting})}}const Hr=(0,a.$j)((function(){return(0,l.P1)((0,c.Z)(),(0,k.Z)(N.Z.SETTINGS),(e=>e.ui.providerSettingsPage),((e,t,r)=>({providerEntityID:e.entityID,providerTitle:e.title,settings:t.settings,isSettingsPending:t.isSettingsPending,isUpdatePending:r.isUpdatePending,updateError:r.updateError})))}),Ur)(Br);function zr(){const{machineIdentifier:e,providerIdentifier:t}=(0,s.Z)(),r=(0,o.Z)(i.cN,e),a=(0,o.Z)(i.MC,t,r);return n.createElement(j,{providerEntityID:a,serverEntityID:r},n.createElement(Hr,{providerEntityID:a}))}},85494:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(67294),o=r(97257);function i({children:e,className:t,metricsPage:r,metricsPane:i,scrollTop:s,onScrollPositionChange:a}){return n.createElement(o.Z,{autoScroll:!0,metricsPage:r,metricsProperties:{pane:i},scrollTop:s,onScrollPositionChange:a},n.createElement("div",{className:t},e))}i.defaultProps={className:"SettingsPage-content-qemqww PageContent-pageContent-rk0p0C"};const s=i},76848:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(94184),o=r.n(n),i=r(67294);function s(e){return i.createElement("h2",{className:o()(e.className,e.hasCommunityFeatures&&"SettingsPageHeader-communityFeatures-wPe687")},e.children)}s.defaultProps={className:"SettingsPageHeader-header-Ra2WXw"};const a=s},3521:function(e){e.exports=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(3);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(o).default}});var i=r(2);Object.defineProperty(t,"adjustCaretPosition",{enumerable:!0,get:function(){return n(i).default}});var s=r(5);Object.defineProperty(t,"createTextMaskInputElement",{enumerable:!0,get:function(){return n(s).default}})},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.placeholderChar="_"},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.previousConformedValue,o=void 0===t?n:t,i=e.currentCaretPosition,s=void 0===i?0:i,a=e.conformedValue,l=e.rawValue,p=e.placeholderChar,c=e.placeholder,u=e.indexesOfPipedChars,d=void 0===u?r:u,h=e.caretTrapIndexes,g=void 0===h?r:h;if(0===s)return 0;var f=l.length,m=o.length,v=c.length,y=a.length,b=f-m,E=b>0;if(b>1&&!E&&0!==m)return s;var P=0;if(!E||o!==a&&a!==c)for(var O=a.toLowerCase(),C=l.toLowerCase().substr(0,s).split(n).filter((function(e){return-1!==O.indexOf(e)})),I=C[C.length-1],D=d.map((function(e){return O[e]})).filter((function(e){return e===I})).length,S=C.filter((function(e){return e===I})).length,x=c.substr(0,c.indexOf(p)).split(n).filter((function(e,t){return e===I&&l[t]!==e})).length+S+D,w=0,T=0;T<y&&(P=T+1,O[T]===I&&w++,!(w>=x));T++);else P=s-b;if(E){for(var j=P,Z=P;Z<=v;Z++)if(c[Z]===p&&(j=Z),c[Z]===p||-1!==g.indexOf(Z)||Z===v)return j}else for(var k=P;k>=0;k--)if(c[k-1]===p||-1!==g.indexOf(k)||0===k)return k};var r=[],n=""},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=r.guide,a=void 0===s||s,l=r.previousConformedValue,p=void 0===l?i:l,c=r.placeholderChar,u=void 0===c?o.placeholderChar:c,d=r.placeholder,h=void 0===d?(0,n.convertMaskToPlaceholder)(t,u):d,g=r.currentCaretPosition,f=r.keepCharPositions,m=!1===a&&void 0!==p,v=e.length,y=p.length,b=h.length,E=t.length,P=v-y,O=P>0,C=g+(O?-P:0),I=C+Math.abs(P);if(!0===f&&!O){for(var D=i,S=C;S<I;S++)h[S]===u&&(D+=u);e=e.slice(0,C)+D+e.slice(C,v)}for(var x=e.split(i).map((function(e,t){return{char:e,isNew:t>=C&&t<I}})),w=v-1;w>=0;w--){var T=x[w].char;T!==u&&T===h[w>=C&&y===E?w-P:w]&&x.splice(w,1)}var j=i,Z=!1;e:for(var k=0;k<b;k++){var N=h[k];if(N===u){if(x.length>0)for(;x.length>0;){var M=x.shift(),V=M.char,_=M.isNew;if(V===u&&!0!==m){j+=u;continue e}if(t[k].test(V)){if(!0===f&&!1!==_&&p!==i&&!1!==a&&O){for(var L=x.length,F=null,R=0;R<L;R++){var U=x[R];if(U.char!==u&&!1===U.isNew)break;if(U.char===u){F=R;break}}null!==F?(j+=V,x.splice(F,1)):k--}else j+=V;continue e}Z=!0}!1===m&&(j+=h.substr(k,b));break}j+=N}if(m&&!1===O){for(var B=null,H=0;H<j.length;H++)h[H]===u&&(B=H);j=null!==B?j.substr(0,B+1):i}return{conformedValue:j,meta:{someCharsRejected:Z}}};var n=r(4),o=r(1),i=""},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.placeholderChar;if(-1!==e.indexOf(t))throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\nThe placeholder character that was received is: "+JSON.stringify(t)+"\n\nThe mask that was received is: "+JSON.stringify(e));return e.map((function(e){return e instanceof RegExp?t:e})).join("")},t.isString=function(e){return"string"==typeof e||e instanceof String},t.isNumber=function(e){return"number"==typeof e&&void 0===e.length&&!isNaN(e)},t.processCaretTraps=function(e){for(var t=[],r=void 0;-1!==(r=e.indexOf(i));)t.push(r),e.splice(r,1);return{maskWithoutCaretTraps:e,indexes:t}};var n=r(1),o=[],i="[]"},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){document.activeElement===e&&(m?setTimeout((function(){return e.setSelectionRange(t,t,g)}),0):e.setSelectionRange(t,t,g))}function i(e){if((0,c.isString)(e))return e;if((0,c.isNumber)(e))return String(e);if(null==e)return h;throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n "+JSON.stringify(e))}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=function(e){var t={previousConformedValue:h};return{state:t,update:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,g=n.inputElement,m=n.mask,v=n.guide,y=n.pipe,b=n.placeholderChar,E=void 0===b?u.placeholderChar:b,P=n.keepCharPositions,O=void 0!==P&&P;if((r=r||g.value)!==t.previousConformedValue){(void 0===m?"undefined":a(m))===f&&void 0!==m.pipe&&void 0!==m.mask&&(y=m.pipe,m=m.mask);var C=void 0,I=void 0;if(m instanceof Array&&(C=(0,c.convertMaskToPlaceholder)(m,E)),!1!==m){var D=i(r),S=g.selectionStart,x=t.previousConformedValue,w=void 0;if((void 0===m?"undefined":a(m))===d){if(!1===(I=m(D,{currentCaretPosition:S,previousConformedValue:x,placeholderChar:E})))return;var T=(0,c.processCaretTraps)(I);I=T.maskWithoutCaretTraps,w=T.indexes,C=(0,c.convertMaskToPlaceholder)(I,E)}else I=m;var j={previousConformedValue:x,guide:v,placeholderChar:E,pipe:y,placeholder:C,currentCaretPosition:S,keepCharPositions:O},Z=(0,p.default)(D,I,j).conformedValue,k=(void 0===y?"undefined":a(y))===d,N={};k&&(!1===(N=y(Z,s({rawValue:D},j)))?N={value:x,rejected:!0}:(0,c.isString)(N)&&(N={value:N}));var M=k?N.value:Z,V=(0,l.default)({previousConformedValue:x,conformedValue:M,placeholder:C,rawValue:D,currentCaretPosition:S,placeholderChar:E,indexesOfPipedChars:N.indexesOfPipedChars,caretTrapIndexes:w}),_=M===C&&0===V?h:M;t.previousConformedValue=_,g.value!==_&&(g.value=_,o(g,V))}}}}};var l=n(r(2)),p=n(r(3)),c=r(4),u=r(1),d="function",h="",g="none",f="object",m="undefined"!=typeof navigator&&/Android/i.test(navigator.userAgent)}])}}]);