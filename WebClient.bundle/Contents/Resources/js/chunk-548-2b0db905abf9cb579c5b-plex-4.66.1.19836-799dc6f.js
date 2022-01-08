"use strict";(self.webpackChunkplex_web_client=self.webpackChunkplex_web_client||[]).push([[548],{33997:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(22222),s=r(4524),i=r(72194),o=r(59468);const a=(0,i.Z)(o.Z,(({homeSettings:e})=>e)),c=(0,n.P1)(a,(e=>e.servers),s.Z,((e,t,r)=>{const{preferredServerID:n}=e;if(n)for(let e=0,s=t.length;e<s;e++){const s=r[t[e]];if(s.machineIdentifier===n)return s}}))},1292:(e,t,r)=>{function n(e,t){return e&&t?`${t} (${e})`:t||e}r.d(t,{Z:()=>n})},82947:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(5562);const s=function(e){const t=e.activeConnection;let r,s=!1;return e.isConnected&&t?r=e.isOutOfDate?(0,n.Z)("Needs Update"):t.relay?(0,n.Z)("Indirect"):t.isPrivate?(0,n.Z)("Nearby"):(0,n.Z)("Remote"):e.isRelayed?r=(0,n.Z)("Indirect"):e.isUnavailable?r=(0,n.Z)("Unavailable"):e.isUnauthorized?r=(0,n.Z)("Unauthorized"):(s=!0,r=(0,n.Z)("Connecting")),{isConnecting:s,status:r}}},28548:(e,t,r)=>{r.r(t),r.d(t,{default:()=>et});var n=r(67294),s=r(92937),i=r(65669),o=r(37703),a=r(22222),c=r(96516),l=r(61254);const p=(0,c.Z)((0,a.P1)(l.Z,(e=>e.reduce(((e,t)=>{const{entityID:r,machineIdentifier:n}=t;return r&&n&&e.push({entityID:r,machineIdentifier:n}),e}),[]))),(e=>e));function u(e){return e.user.experienceSettings.homeSettings.preferredServerID}var d=r(72668),m=r(43666),f=r(27082),v=r(45428),h=r(58801),S=r(3704),y=r(12319),P=r(98727),b=r(74816),E=r(2375),I=r(33997),x=r(59468),N=r(46202),g=r(3386),Z=r(5562),C=r(37084),O=r(20723),B=r(9119),T=r(43478),k=Object.defineProperty,F=Object.prototype.hasOwnProperty,j=Object.getOwnPropertySymbols,R=Object.prototype.propertyIsEnumerable,w=(e,t,r)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,D=(e,t)=>{for(var r in t||(t={}))F.call(t,r)&&w(e,r,t[r]);if(j)for(var r of j(t))R.call(t,r)&&w(e,r,t[r]);return e};class U extends n.Component{constructor(e,t){super(e,t),this.onChange=e=>{const t=this.store.getState(),r=Object.keys(t).filter((e=>this.props.names.includes(e))),n=D({},t);r.forEach((t=>{const r=n[t];n[t]=D(D({},r),{value:e})})),this.store.dispatch(C.Nw.replaceState(n))},this.onFormStoreChange=()=>{const{names:e}=this.props;if(!e.length)return;const t=this.store.getState(),r=Object.keys(t).filter((e=>this.props.names.includes(e))),[n]=r,s=t[n].value,i=function(e,t,r){return e.every((e=>{const n=r[e];return!n||n.value===t}))}(r,s,t);this.setState({value:i?s:null})},this.store=this.context.formStore,this.state={value:!0}}UNSAFE_componentWillMount(){this.unsubscribe=this.store.subscribe(this.onFormStoreChange)}componentWillUnmount(){this.unsubscribe&&this.unsubscribe()}render(){const e=this.props,{names:t,onChange:r}=e,s=((e,t)=>{var r={};for(var n in e)F.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&j)for(var n of j(e))t.indexOf(n)<0&&R.call(e,n)&&(r[n]=e[n]);return r})(e,["names","onChange"]);return t.length?n.createElement(O.Z,D(D({},s),{value:this.state.value,onChange:(0,B.Z)(this.onChange,r)})):null}}U.contextTypes={formStore:T.Z};const _=U;function A(e){const{className:t,titleBarClassName:r,titleTextClassName:s,scrollerClassName:i,title:o,rightTitle:a,children:c}=e;return n.createElement("div",{className:t},n.createElement("div",{className:r},n.createElement("span",{className:s},o),a),n.createElement(v.Z,{className:i},c))}A.defaultProps={className:"FirstRunExperienceActionsContainer-container-1ma7sv",titleBarClassName:"FirstRunExperienceActionsContainer-titleBar-1697to",titleTextClassName:"FirstRunExperienceActionsContainer-titleText-2qNhTH",scrollerClassName:"FirstRunExperienceActionsContainer-scroller-2k3Fph Scroller-vertical-3bAxBf"};const M=A;var q=r(39670),z=r(22745),H=r(6103),$=r(60528);const G="FirstRunExperienceStep-stepButton-1oKp_-";var Q=Object.defineProperty,V=Object.prototype.hasOwnProperty,W=Object.getOwnPropertySymbols,J=Object.prototype.propertyIsEnumerable,K=(e,t,r)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Y=(e,t)=>{for(var r in t||(t={}))V.call(t,r)&&K(e,r,t[r]);if(W)for(var r of W(t))J.call(t,r)&&K(e,r,t[r]);return e},L=(e,t)=>{var r={};for(var n in e)V.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&W)for(var n of W(e))t.indexOf(n)<0&&J.call(e,n)&&(r[n]=e[n]);return r};function X(e){const{step:t,isActive:r,onPress:s}=e;return n.createElement(H.Z,{className:r?"FirstRunExperienceStep-activeStepIcon-1uuF3f FirstRunExperienceStep-stepIcon-2vI0uy":"FirstRunExperienceStep-stepIcon-2vI0uy",onPress:function(){s(t)}},t)}function ee(e){const t=e,{className:r,actionsClassName:s,stepContainerClassName:i,steps:o,step:a,stepHeadingText:c,stepBodyText:l,stepButtonBackText:p,stepButtonNextText:u,children:d,component:m,onButtonBackPress:f,onButtonNextPress:v,onStepPress:h}=t,S=L(t,["className","actionsClassName","stepContainerClassName","steps","step","stepHeadingText","stepBodyText","stepButtonBackText","stepButtonNextText","children","component","onButtonBackPress","onButtonNextPress","onStepPress"]),y=q.Z.prop("X-Plex-Product");return n.createElement(m,Y({className:r},S),n.createElement("div",{className:s},d),n.createElement("div",{className:i},n.createElement("div",{className:"FirstRunExperienceStep-stepText-1CyAQV"},(0,Z.Z)("{productName} Setup",{productName:y}),Array.from(Array(o),((e,t)=>t+1)).map((e=>n.createElement(X,{key:e,isActive:a===e,step:e,onPress:h})))),n.createElement("h3",{className:"FirstRunExperienceStep-stepHeading-318zGD"},c),n.createElement("p",{className:"FirstRunExperienceStep-stepBody-3Uq0q1"},l),p?n.createElement(z.Z,{className:G,onPress:f},p):null,n.createElement(z.Z,{className:G,kind:$._8,type:"submit",onPress:v},u)))}ee.defaultProps={className:"FirstRunExperienceStep-container-1QkeKA",actionsClassName:"FirstRunExperienceStep-actions-246MJ3",stepContainerClassName:"FirstRunExperienceStep-stepContainer-2Lhx9n",component:function(e){var t=e,{children:r}=t,s=L(t,["children"]);return n.createElement("div",Y({},s),r)},steps:2,step:1};const te=ee;var re=r(51221),ne=r(75748);var se=Object.defineProperty,ie=Object.prototype.hasOwnProperty,oe=Object.getOwnPropertySymbols,ae=Object.prototype.propertyIsEnumerable,ce=(e,t,r)=>t in e?se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const le=(0,re.Z)((function(e){const t=e,{title:r,sourceType:s,providerIdentifier:i}=t,o=((e,t)=>{var r={};for(var n in e)ie.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&oe)for(var n of oe(e))t.indexOf(n)<0&&ae.call(e,n)&&(r[n]=e[n]);return r})(t,["title","sourceType","providerIdentifier"]);return n.createElement("label",{className:"SelectSourceItemInput-sourceItem-1oJk0v",htmlFor:o.name},n.createElement("span",{className:"SelectSourceItemInput-sourceTitle-2W7QWj"},n.createElement("span",{className:"SelectSourceItemInput-sourceIconContainer-17wMy_"},n.createElement(ne.Z,{providerIdentifier:i,sourceType:s})),r),n.createElement(O.Z,((e,t)=>{for(var r in t||(t={}))ie.call(t,r)&&ce(e,r,t[r]);if(oe)for(var r of oe(t))ae.call(t,r)&&ce(e,r,t[r]);return e})({inputClassName:"SelectSourceItemInput-input-aS8jvv CheckInput-input-1qT5Fh"},o)))})),pe=function(e){const{isPending:t,steps:r,sources:s,onSubmit:i,onButtonBackPress:o,onStepPress:a}=e;return t?n.createElement(h.Z,null):n.createElement(te,{component:C.ZP,step:2,stepBodyText:(0,Z.Z)("Choose what you’d like to have in your sidebar navigation menu. (You’ll always have easy access to everything, so you can make changes and further customize your menu later.)"),stepButtonBackText:r>1?(0,Z.Z)("Go Back"):void 0,stepButtonNextText:(0,Z.Z)("Finish Setup"),stepHeadingText:(0,Z.Z)("Customize your Media"),steps:r,onButtonBackPress:o,onStepPress:a,onSubmit:i},n.createElement(M,{rightTitle:s.length?n.createElement(_,{inputClassName:"SelectNavigationStep-input-3bfri0 CheckInput-input-1qT5Fh",name:"allSources",names:s.map((e=>e.key))}):null,title:(0,Z.Z)("Pinned Sources")},s.map((e=>n.createElement(le,{key:e.key,initialValue:!0,name:e.key,providerIdentifier:e.providerIdentifier,sourceType:e.sourceType,title:e.title})))))};var ue=Object.defineProperty,de=Object.prototype.hasOwnProperty,me=Object.getOwnPropertySymbols,fe=Object.prototype.propertyIsEnumerable,ve=(e,t,r)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,he=(e,t)=>{for(var r in t||(t={}))de.call(t,r)&&ve(e,r,t[r]);if(me)for(var r of me(t))fe.call(t,r)&&ve(e,r,t[r]);return e};const Se=(0,a.P1)(I.Z,P.Z,((e,t)=>(e?e.providers:[]).map((e=>t[e])))),ye=(0,a.P1)(b.Z,(e=>e.filter((e=>!/.*(staging|dev)$/.test(e.identifier)))));function Pe(e,t){return t.reduce(((t,r)=>{const n=(0,g.Z)(r),s=(0,N.Z)({sourceServer:e,sourceProvider:r,directories:n&&n.directories});return t.push(...s),t}),[])}const be={dispatchSetupSources:m.E8};class Ee extends n.Component{constructor(){super(...arguments),this.onSubmit=e=>{const t=this.props.sources.filter((({key:t})=>e[t]));this.props.dispatchSetupSources({sources:t})}}componentDidUpdate(){this.props.hasCompletedSetup&&this.props.onEndFirstRunExperience(),this.props.isPending||0!==this.props.sources.length||this.props.dispatchSetupSources({sources:[]})}render(){const e=this.props,{isPending:t,sources:r,onEndFirstRunExperience:s,dispatchSetupSources:i}=e,o=((e,t)=>{var r={};for(var n in e)de.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&me)for(var n of me(e))t.indexOf(n)<0&&fe.call(e,n)&&(r[n]=e[n]);return r})(e,["isPending","sources","onEndFirstRunExperience","dispatchSetupSources"]);return n.createElement(pe,he(he({isPending:t||0===r.length,sources:r},o),{onSubmit:this.onSubmit}))}}const Ie=(0,o.$j)((function(){return(0,a.P1)(I.Z,Se,E.Z,ye,x.Z,((e,t,r,n,s)=>{const i=Pe(e,t),o=Pe(r,n),{sidebarSettings:{hasCompletedSetup:a}}=s;return{isPending:!(!e||e.connectionTestResult!==y._r.PENDING),sources:[...i,...o],hasCompletedSetup:a}}))}),be)(Ee);var xe=r(45697),Ne=r.n(xe),ge=r(50602),Ze=r(74995),Ce=r(94184),Oe=r.n(Ce),Be=r(30492),Te=r(1292),ke=r(82947),Fe=r(41324),je=r(35771);var Re=Object.defineProperty,we=Object.prototype.hasOwnProperty,De=Object.getOwnPropertySymbols,Ue=Object.prototype.propertyIsEnumerable,_e=(e,t,r)=>t in e?Re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ae=(e,t)=>{for(var r in t||(t={}))we.call(t,r)&&_e(e,r,t[r]);if(De)for(var r of De(t))Ue.call(t,r)&&_e(e,r,t[r]);return e};const Me=(0,o.$j)((function(){return(0,ge.Z)((0,Ze.Z)(),["activeConnection","friendlyName","sourceTitle","isConnected","isOutOfDate","isRelayed","isSecure","isShared","isUnavailable"])}),(function(e,t){return{onPress(){t.onPress({entityID:t.serverEntityID,machineIdentifier:t.machineIdentifier})}}}))((function(e){const{isSelected:t,isUnavailable:r,onPress:s}=e,i=(0,Te.Z)((0,Be.Z)(e),(0,ke.Z)(e).status);return n.createElement(H.Z,{className:Oe()("SelectPreferredServerItem-serverButton-1dFMw2",t&&"SelectPreferredServerItem-isSelected-3hiV7Y",r&&"SelectPreferredServerItem-isUnavailable-1fhTly"),onPress:s},n.createElement("span",{className:"SelectPreferredServerItem-titles-3SrcQl"},n.createElement("span",{className:"SelectPreferredServerItem-title-1lnUjH"},(0,Fe.Z)(e)),n.createElement("span",{className:"SelectPreferredServerItem-details-2dSfC2"},i)),t?n.createElement(je.Z,{"aria-label":(0,Z.Z)("Selected"),className:"SelectPreferredServerItem-serverMenuIcon-1-qi_A"}):null)}));Me.propTypes=Ae(Ae({},Me.propTypes),{machineIdentifier:Ne().string.isRequired,serverEntityID:Ne().string.isRequired});const qe=Me,ze=function(e){const{preferredServerIdentifiers:t,serverIdentifiers:r,onSavePreferredServer:s,onButtonNextPress:i,onStepPress:o}=e;return n.createElement(te,{step:1,stepBodyText:(0,Z.Z)("It looks like you have access to more than one Plex Media Server. Choose your preferred server, and we’ll use it to build your home screen."),stepButtonNextText:(0,Z.Z)("Continue"),stepHeadingText:(0,Z.Z)("Choose your Preferred Server"),onButtonNextPress:i,onStepPress:o},n.createElement(M,{title:(0,Z.Z)("Plex Media Servers")},r.map((e=>n.createElement(qe,{key:e.entityID,isSelected:t&&t.machineIdentifier===e.machineIdentifier,machineIdentifier:e.machineIdentifier,serverEntityID:e.entityID,onPress:s})))))};var He=Object.defineProperty,$e=Object.prototype.hasOwnProperty,Ge=Object.getOwnPropertySymbols,Qe=Object.prototype.propertyIsEnumerable,Ve=(e,t,r)=>t in e?He(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,We=(e,t)=>{for(var r in t||(t={}))$e.call(t,r)&&Ve(e,r,t[r]);if(Ge)for(var r of Ge(t))Qe.call(t,r)&&Ve(e,r,t[r]);return e};function Je(e,t){return!e&&t.length>0}class Ke extends n.Component{constructor(e,t){super(e,t),this.onNextStepPress=()=>{this.setState((e=>({step:Math.max(2,e.step+1)})))},this.onBackStepPress=()=>{this.setState((e=>({step:Math.min(1,e.step-1)})))},this.onStepPress=e=>{this.setState({step:e})},this.onEndFirstRunExperience=()=>{const{preferredServerIdentifiers:e,onEndFirstRunExperience:t}=this.props;t(e?{preferredServerEntityID:e.entityID,preferredServerInteraction:e.machineIdentifier!==this.state.initialDefaultPreferredServerIdentifier}:{})},this.state={step:1}}componentDidMount(){(0,f.c9)((()=>{this.props.onResetCustomization()})),this._maybeCallOnSavePreferredServer(We(We({},this.props),{preferredServerIdentifiers:null}))}componentDidUpdate(){this._maybeCallOnSavePreferredServer(this.props)}_maybeCallOnSavePreferredServer(e){const{isPending:t,preferredServerIdentifiers:r,serverIdentifiers:n,onSavePreferredServer:s}=e;if(t)return;const i=function(e,t){return e?e.machineIdentifier:t.length>0?t[0].machineIdentifier:void 0}(r,n);!this.state.initialDefaultPreferredServerIdentifier&&i&&this.setState({initialDefaultPreferredServerIdentifier:i}),Je(r,n)&&s({machineIdentifier:i})}render(){const{isPending:e,preferredServerIdentifiers:t,serverIdentifiers:r,onSavePreferredServer:s}=this.props,{step:i}=this.state,o=r.length<2;return e||Je(t,r)?n.createElement(S.Z,null,n.createElement(h.Z,null)):n.createElement(v.Z,{className:"FirstRunExperiencePage-container-2u3V3R"},1!==i||o?n.createElement(Ie,{steps:o?0:2,onButtonBackPress:this.onBackStepPress,onEndFirstRunExperience:this.onEndFirstRunExperience,onStepPress:this.onStepPress}):n.createElement(ze,{preferredServerIdentifiers:t,serverIdentifiers:r,onButtonNextPress:this.onNextStepPress,onSavePreferredServer:s,onStepPress:this.onStepPress}))}}const Ye=Ke,Le={onSavePreferredServer:m.p7,onEndFirstRunExperience:m.G_,onResetCustomization:m.Dy},Xe=(0,o.$j)((function(){return(0,a.P1)(d.Z,u,p,((e,t,r)=>({isPending:!e,preferredServerIdentifiers:t?r.find((e=>e.machineIdentifier===t)):void 0,serverIdentifiers:r})))}),Le)(Ye);function et(){return n.createElement("div",{className:s.u},n.createElement(i.Z,null,n.createElement(Xe,null)))}}}]);