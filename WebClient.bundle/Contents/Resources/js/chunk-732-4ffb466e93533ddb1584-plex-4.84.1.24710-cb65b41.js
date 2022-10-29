"use strict";(self.webpackChunkplex_web_client=self.webpackChunkplex_web_client||[]).push([[732],{631:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(22222),i=n(44273),l=n(33434),a=n(58671);const o=(0,l.Z)((function(e){return(0,r.P1)((0,a.Z)(e),(e=>e.accounts.slice().sort(i.Z)))}))},44273:(e,t,n)=>{function r(e,t){if(1===e.id)return-1;if(1===t.id)return 1;const n=e.name.trim().toUpperCase(),r=t.name.trim().toUpperCase();return n<r?-1:n>r?1:0}n.d(t,{Z:()=>r})},18732:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Dt});var r=n(67294),i=n(62291),l=n(44811),a=n(72310),o=n(91085),s=n(61737),c=n(79115),u=n(8292),m=n(28216),y=n(13469),p=n.n(y),d=n(56036);n(32903);const v="boolean",f="other";var Z=Object.defineProperty,g=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&h(e,n,t[n]);if(g)for(var n of g(t))P.call(t,n)&&h(e,n,t[n]);return e},I=n(68622),k=n(23636);const O=`([^&!=<>]+)(${I.ZP.sort(((e,t)=>t.length-e.length)).map(d.Z).join("|")})([^&]+)?`,w=new RegExp(O,"g"),T=new RegExp(O),S={unwatched:!0,unwatchedLeaves:!0,unmatched:!0,duplicate:!0,inProgress:!0,hdonly:!0,hdr:!0};var C=n(87442),x=n(13220),H=n(18655),M=n(65372),j=n(71273),F=n(20683),A=n(32975);const N=x.Z.extend({name:"PlayHistoryListItemModel",syncedAttrs:{key:H.Z.string,parentKey:H.Z.string,grandparentKey:H.Z.string,title:H.Z.string,parentTitle:H.Z.string,grandparentTitle:H.Z.string,type:H.Z.string,thumb:H.Z.string,parentThumb:H.Z.string,grandparentThumb:H.Z.string,grandparentArt:H.Z.string,index:H.Z.integer,parentIndex:H.Z.integer,originallyAvailableAt:H.Z.string,viewedAt:H.Z.integer,accountID:H.Z.integer,deviceID:H.Z.integer},derivedAttrs:{itemKey(){return this.get("key")},id(){return this.cid}}}),R=A.Z.extend({name:"PlayHistoryListItemCollection",context:["server"],model:N});x.Z.extend({mixins:[M.Z],collectionName:"items",name:"PlayHistoryListModel",context:["server","accountID","filters","sort","limit"],responseType:j.AV,url(){const e=this.filters.reduce(((e,t)=>(e[t.key]=t.value,e)),{});null!=this.accountID&&(e.accountID=this.accountID),null!=this.sort&&(e.sort=this.sort),null!=this.limit&&(e.limit=this.limit);let t=F.Z.join("/status/sessions/history/all",e);return t=t.replace("viewedAt=","viewedAt>="),this.getPaginatedUrl(t)},sessionAttrs:{currentPageStart:H.Z.integer,currentPageSize:H.Z.integer,populatedRange:H.Z.object},syncedAttrs:{totalSize:H.Z.integer},syncedRelations:{items:{relationClass:R,rootPropertyName:"Metadata",setOptions:e=>({remove:e.remove,at:e.at})}},defaults:()=>({populatedRange:{start:0,end:0,size:0}}),initialize(){this.startPopulatedRangeMonitor()}});var D=n(24307),L=n(61595),U=n(74861),q=n(42218),z=n(12316),K=n(51175);function X(e,t){return!!e&&e.some((e=>e.key===t))}var _=n(73788),Q=n(2696);var V=n(22222),Y=n(58671);var W=n(27044),G=n(85209),$=n(33593),B=n(45731),J=n(50223);const ee={key:"user",title:()=>(0,_.Z)("User"),component:function({className:e,playHistoryItem:t}){const[n]=(0,l.c9)(),{accountID:i}=t,a=(0,r.useMemo)((()=>((e,t)=>(0,V.P1)((0,Y.Z)(e),(e=>e.accounts.find((e=>e.id===t)))))(n.machineIdentifier,i)),[i,n.machineIdentifier]),o=(0,m.v9)(a);return o?r.createElement("span",{className:e,title:o.name},o.name):r.createElement("span",{className:e},(0,_.Z)("Unknown User"))},style:{flex:"1 1 250px"}},te={key:"type",title:()=>(0,_.Z)("Type"),component:function({className:e,playHistoryItem:t}){const{type:n}=t,i=(0,G.getMetadataType)(n);return i?r.createElement("span",{className:e,title:i.title},i.title):null},style:{flex:"0 1 120px"}},ne={key:"title",title:()=>(0,_.Z)("Title"),component:function({className:e,playHistoryItem:t}){const n=(0,Q.Z)(t);return r.createElement("span",{className:e},r.createElement("div",{className:"PlayHistoryTableTitle-titleContainer-vVYJ11"},r.createElement("span",{className:"PlayHistoryTableTitle-title-KfbuOe",title:n},n)))},style:{flex:"2 0 350px"}},re={key:"player",title:()=>(0,_.Z)("Player"),component:function({className:e,playHistoryItem:t}){const[n]=(0,l.c9)(),{deviceID:i}=t,a=(0,m.v9)((0,W.Z)(n.machineIdentifier)).devices.find((e=>e.id===i));return a?r.createElement("span",{className:e,title:a.name},a.name):r.createElement("span",{className:e},(0,_.Z)("Unknown"))},style:{flex:"1 1 150px"}},ie={key:"platform",title:()=>(0,_.Z)("Platform"),component:function({className:e,playHistoryItem:t}){const[n]=(0,l.c9)(),{deviceID:i}=t,a=(0,m.v9)((0,W.Z)(n.machineIdentifier)).devices.find((e=>e.id===i));return a?r.createElement("span",{className:e,title:a.platform},a.platform):r.createElement("span",{className:e},(0,_.Z)("Unknown"))},style:{flex:"1 1 150px"}},le=[{key:"viewedAt",ascKey:"viewedAt",descKey:"viewedAt:desc",title:()=>(0,_.Z)("Played"),component:function({className:e,playHistoryItem:t}){const{viewedAt:n}=t,i=(0,m.v9)(B.Z),l=(0,$.Z)(1e3*n,`${i} MMM d, yyyy`);return r.createElement("span",{className:e,title:l},l)},style:{flex:"1 1 150px"}}];var ae=n(90144),oe=n(7659),se=n(14739),ce=n(24107),ue=n(65790);const me=parseInt(ce.Z.tableRowHeight,10),ye=(0,ue.Z)({rowHeight:me,overscan:20});var pe=n(50439),de=n(63797),ve=n(64154),fe=n(62286),Ze=n(18585);const ge=(0,V.P1)(Ze.Z,(e=>e.playHistory));var be=n(62376),Pe=n(12476),he=n(16975),Ee=n(30547);const Ie=r.forwardRef((({style:e,cellIndex:t},n)=>r.createElement("div",{ref:n,className:t%2?"PlayHistoryTableRowLoading-alternateLoadingItem-mBL8aM PlayHistoryTableRowLoading-loadingItem-ztQZqS":"PlayHistoryTableRowLoading-loadingItem-ztQZqS",style:e},(0,_.Z)("Loading..."))));var ke=Object.getOwnPropertySymbols,Oe=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;function Te(e){var t=e,{item:n,activeTableColumns:i}=t,a=((e,t)=>{var n={};for(var r in e)Oe.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&ke)for(var r of ke(e))t.indexOf(r)<0&&we.call(e,r)&&(n[r]=e[r]);return n})(t,["item","activeTableColumns"]);const[o]=(0,l.c9)(),s=(0,he.Z)(a);let c;if(null==n?void 0:n.key){const e=i.some((e=>"title"===e.key)),t=n.type===G.TRACK?n.parentKey:n.key;c=e?(0,Ee.Z)(o,{isLibraryProvider:!0},t):void 0}return n?r.createElement("div",{ref:s.cellRef,className:a.cellIndex%2?"PlayHistoryTableRow-alternateItem-l9Zpev PlayHistoryTableRow-item-TN478t":"PlayHistoryTableRow-item-TN478t",style:s.style},r.createElement(be.Z,{"aria-label":n.title,className:"PlayHistoryTableRow-columns-RnVGEQ Link-link-vSsQW1",isDisabled:!c,to:c},i.map((({style:e,component:t},i)=>r.createElement(Pe.Z,{key:i,component:t,playHistoryItem:n,style:e}))))):r.createElement(Ie,{ref:s.cellRef,cellIndex:a.cellIndex,style:s.style})}var Se=Object.defineProperty,Ce=Object.defineProperties,xe=Object.getOwnPropertyDescriptors,He=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,Fe=(e,t,n)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ae=(e,t)=>{for(var n in t||(t={}))Me.call(t,n)&&Fe(e,n,t[n]);if(He)for(var n of He(t))je.call(t,n)&&Fe(e,n,t[n]);return e},Ne=(e,t)=>Ce(e,xe(t));function Re({activeTableColumns:e,activeFilters:t,activeSort:n}){const i=(0,m.I0)(),[a]=(0,l.c9)(),o=(0,m.v9)(ge),s=(0,m.v9)((0,W.Z)(a.machineIdentifier)),{items:c,totalSize:u,isPopulated:y,error:p}=o,{isPopulated:d,error:v}=s,f=(0,r.useCallback)((e=>{i(K.Z.actions.fetchRangeRequested(Ne(Ae({},e),{server:a,filters:t,sort:n})))}),[i,a,t,n]),Z=(0,r.useMemo)((()=>t=>r.createElement(Te,Ne(Ae({},t),{activeTableColumns:e}))),[e]);return y&&u&&(d||v)?r.createElement(ve.Z,{cellComponentFactory:Z,className:"PlayHistoryList-playHistoryListPageContent-ebUqYI PageContent-pageContentScroller-dvaH3C Scroller-scroller-S6_dko",items:c,layout:ye,totalSize:u,onPageRequest:f}):y&&!u?r.createElement(pe.Z,{description:(0,_.Z)("Snuggle up on the couch and play something!"),title:(0,_.Z)("Nothing to see here")}):p?r.createElement(de.Z,null):r.createElement(pe.Z,null,r.createElement(fe.Z,null))}var De=n(42313),Le=n(17282),Ue=n(54768),qe=n(23574),ze=n(8235),Ke=Object.defineProperty,Xe=Object.defineProperties,_e=Object.getOwnPropertyDescriptors,Qe=Object.getOwnPropertySymbols,Ve=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable,We=(e,t,n)=>t in e?Ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ge=(e,t)=>{for(var n in t||(t={}))Ve.call(t,n)&&We(e,n,t[n]);if(Qe)for(var n of Qe(t))Ye.call(t,n)&&We(e,n,t[n]);return e};function $e(e,t,n){if(null==n)return e.filter((e=>e.key!==t));const r=[...e];let i=r.length;for(;i-- >0;){const e=r[i],o=e.key,s=e.value;if(t===o&&n===s)r.splice(i,1);else if(t===o&&Array.isArray(s)){const t=s.indexOf(n);t>-1&&(s.splice(t,1),1===s.length?r.splice(i,1,(l=Ge({},e),a={value:s[0]},Xe(l,_e(a)))):s.length||r.splice(i,1))}}var l,a;return r}var Be=Object.defineProperty,Je=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable,nt=(e,t,n)=>t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function rt(e,t,n){const r=[...e],i=r.findIndex((e=>e.key===t)),l=-1===i?0:i,a=((e,t)=>{for(var n in t||(t={}))et.call(t,n)&&nt(e,n,t[n]);if(Je)for(var n of Je(t))tt.call(t,n)&&nt(e,n,t[n]);return e})({key:t},n);return-1===i?r.push(a):r.splice(l,1,a),r}var it=n(10125),lt=n(14580),at=n(83782),ot=n(631),st=n(55319),ct=n(1550),ut=Object.defineProperty,mt=Object.defineProperties,yt=Object.getOwnPropertyDescriptors,pt=Object.getOwnPropertySymbols,dt=Object.prototype.hasOwnProperty,vt=Object.prototype.propertyIsEnumerable,ft=(e,t,n)=>t in e?ut(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;let Zt,gt;function bt(e,t=window.location.hash){const n=function(e){if(Zt===e)return gt;const t=e.split("?"),n=t.length>1?t[1]:void 0,r=n?F.Z.parseParams(n):{};return Zt=e,gt={url:t[0],params:r},gt}(t);return F.Z.join(n.url,(r=((e,t)=>{for(var n in t||(t={}))dt.call(t,n)&&ft(e,n,t[n]);if(pt)for(var n of pt(t))vt.call(t,n)&&ft(e,n,t[n]);return e})({},n.params),i={filters:(0,ct.Z)(e.filters),activeTimePeriod:e.activeTimePeriod,sort:e.sort},mt(r,yt(i))));var r,i}var Pt=n(84332);function ht({activeFilters:e,activeTimePeriod:t,activeSort:n}){const[i]=(0,l.c9)(),a=(0,at.Z)(),o=(0,st.Z)(),s=(0,r.useMemo)((()=>({key:"",title:(0,_.Z)("All Users")})),[]),c=(0,m.v9)((0,ot.Z)(i.machineIdentifier)),u=(0,r.useMemo)((()=>c.reduce(((e,t)=>(e.push({key:String(t.id),title:t.name}),e)),[s])),[c,s]),y=(0,r.useMemo)((()=>{const t=e.find((e=>"accountID"===e.key));return t?u.find((e=>e.key===t.value)):s}),[e,u,s]),p=(0,r.useCallback)((r=>{let i;i=r?rt(e,J.F.AccountID,{value:String(r),type:f}):$e(e,J.F.AccountID),window.location.hash=bt({filters:i,activeTimePeriod:t,sort:n})}),[e,t,n]);return y&&u.length?r.createElement(r.Fragment,null,r.createElement(Le.Z,{hasMenu:!0,id:a,isMenuOpen:o.isOpen,onPress:o.onToggle},y.title),r.createElement(it.Z,{isOpen:o.isOpen,target:a,onMenuClose:o.onClose},u.map((e=>r.createElement(Pt.Z,{key:e.key,isSelected:y.key===e.key,value:e.key,onSelect:(0,lt.Z)(p,o.onClose)},e.title))))):null}var Et=n(33434),It=n(85687);const kt=(0,Et.Z)((function(e,t){return(0,V.P1)((0,It.Z)(e,t),(e=>e.filter((e=>{const t=e.type?G.getMetadataType(e.type):null;return t&&t.typeString!==G.PLAYLIST}))))}));function Ot({activeFilters:e,activeTimePeriod:t,activeSort:n}){const[i,a]=(0,l.c9)(),o=(0,at.Z)(),s=(0,st.Z)(),c=(0,m.v9)(kt(i.machineIdentifier,a.identifier)),u=(0,r.useMemo)((()=>({key:"all",title:(0,_.Z)("All Libraries")})),[]),y=(0,r.useMemo)((()=>c.reduce(((e,t)=>(e.push({key:t.id,title:t.title}),e)),[u])),[c,u]),p=(0,r.useMemo)((()=>{const t=e.find((e=>"librarySectionID"===e.key));return t&&y.length?y.find((e=>String(e.key)===t.value)):u}),[e,y,u]),d=(0,r.useCallback)((r=>{let i;i="all"!==r?rt(e,J.F.LibrarySectionID,{value:r,type:f}):$e(e,J.F.LibrarySectionID),window.location.hash=bt({filters:i,activeTimePeriod:t,sort:n})}),[e,t,n]);return p&&c.length?r.createElement(r.Fragment,null,r.createElement(Le.Z,{hasMenu:!0,id:o,isMenuOpen:s.isOpen,onPress:s.onToggle},p.title),r.createElement(it.Z,{isOpen:s.isOpen,target:o,onMenuClose:s.onClose},y.map((e=>r.createElement(Pt.Z,{key:e.key,isSelected:p.key===e.key,value:e.key,onSelect:(0,lt.Z)(d,s.onClose)},e.title))))):null}var wt=n(78557);function Tt(){const[e]=(0,l.c9)(),t=(0,at.Z)(),n=(0,st.Z)(),i=(0,m.v9)(wt.Z),a=(0,r.useMemo)((()=>i.reduce(((e,t)=>(t.isFullOwnedServer&&t.isConnected&&e.push({key:t.machineIdentifier,title:t.friendlyName}),e)),[])),[i]),o=(0,r.useMemo)((()=>a.find((t=>t.key===e.machineIdentifier))),[e,a]),s=(0,r.useCallback)((e=>{window.location.hash=(0,ze.Z)(e)}),[]);return o?r.createElement(r.Fragment,null,r.createElement(Le.Z,{hasMenu:!0,id:t,isMenuOpen:n.isOpen,onPress:n.onToggle},o.title),r.createElement(it.Z,{isOpen:n.isOpen,target:t,onMenuClose:n.onClose},a.map((e=>r.createElement(Pt.Z,{key:e.key,isSelected:o.key===e.key,value:e.key,onSelect:(0,lt.Z)(s,n.onClose)},e.title))))):null}function St({activeFilters:e,activeTimePeriod:t,activeSort:n}){const i=(0,at.Z)(),l=(0,st.Z)(),a=[se.XH.Week,se.XH.Month,se.XH.NinetyDays,se.XH.Year,se.XH.AllTime],o=(0,r.useCallback)((t=>{const r=rt(e,J.F.ViewedAt,{value:String((0,se.xP)(t)),type:f});window.location.hash=bt({filters:r,activeTimePeriod:t,sort:n})}),[e,n]);return r.createElement(r.Fragment,null,r.createElement(Le.Z,{hasMenu:!0,id:i,isMenuOpen:l.isOpen,onPress:l.onToggle},(0,se.dZ)(t)),r.createElement(it.Z,{isOpen:l.isOpen,target:i,onMenuClose:l.onClose},a.map((e=>r.createElement(Pt.Z,{key:e,isSelected:t===e,value:e,onSelect:(0,lt.Z)(o,l.onClose)},(0,se.dZ)(e))))))}const Ct=(0,V.P1)(ge,(e=>e.totalSize));function xt({activeFilters:e,activeFilterTitle:t,activeTimePeriod:n,activeSort:i}){const[a]=(0,l.c9)(),o=(0,m.v9)(Ct),s=!X(e,J.F.MetadataItemID);return r.createElement(qe.Z,null,r.createElement(Ue.Z,null,r.createElement(Le.Z,{to:(0,ze.Z)(a.machineIdentifier)},(0,_.Z)("Play History")),t?r.createElement(Le.Z,null,t):null,s?r.createElement(Tt,null):null,s?r.createElement(r.Fragment,null,r.createElement(Ot,{activeFilters:e,activeSort:i,activeTimePeriod:n}),r.createElement(ht,{activeFilters:e,activeSort:i,activeTimePeriod:n}),r.createElement(St,{activeFilters:e,activeSort:i,activeTimePeriod:n})):null,r.createElement(De.Z,null,o)))}var Ht=n(88467),Mt=n(83189),jt=n(5099),Ft=n(89385),At=n(23525);function Nt({activeTableColumns:e,activeFilters:t,activeTimePeriod:n,activeSort:i}){return r.createElement(Mt.Z,null,e.map((({style:e,title:l,ascKey:a,descKey:o,key:s})=>{if(!a)return r.createElement("div",{key:s,className:"PlayHistoryTableHeader-tableHeader-SpG2fq",style:e},r.createElement(jt.Z,null,r.createElement(At.Z,null,l())));const c=i===a||i===o,u=i===a;return r.createElement(Ft.Z,{key:s,style:e,to:bt({filters:t,activeTimePeriod:n,sort:u?o:a})},r.createElement(jt.Z,{isActive:c},r.createElement(At.Z,null,l()),c?r.createElement(Ht.Z,{isAscending:!u}):null))})))}function Rt(){var e;const t=(0,m.I0)(),[n]=(0,l.c9)(),i=(0,a.Z)(),o=function(e){if(!e)return[];const t=decodeURIComponent(e).match(w);return t?t.reduce(((e,t)=>{const n=t.match(T),[,r,i,l]=n||[];let a=l?p().uniq(l.split(k.OR)):"";return 1===a.length&&(a=a[0]),function(e,t,n){const r=[...e];if(n.type===v){const e=p().findIndex(r,(e=>e.key===t)),i=-1===e?0:e,l=E({key:t},n);-1===e?r.push(l):r.splice(i,1,l)}else p().findWhere(r,{key:t,value:n.value})||r.push(E({key:t},n));return r}(e,r,{value:a,type:S[r]?v:f,operator:i})}),[]):[]}(i.filters),s=(0,c.Z)(i.filterTitle),u=null!=(e=(0,ae.su)(se.XH).find((e=>e===(0,c.Z)(i.activeTimePeriod))))?e:se.XH.AllTime,y=i.sort?(0,c.Z)(i.sort):"viewedAt:desc",d=(0,oe.Z)(i.isParentType),Z=function(e,t){let n=[re,ie,...le];return!t&&X(e,J.F.MetadataItemID)||(n=[ne,...n]),X(e,J.F.LibrarySectionID)||X(e,J.F.MetadataItemID)||(n=[te,...n]),X(e,J.F.AccountID)||(n=[ee,...n]),n}(o,d);return(0,U.Z)(),(0,r.useEffect)((()=>{t(L.Z.actions.populateRequested({server:n})),t(D.Z.actions.populateRequested({server:n}))}),[t,n]),(0,r.useEffect)((()=>((0,C.c9)((()=>{t(K.Z.actions.fetchRangeRequested({server:n,filters:o,sort:y,startIndex:0,size:100}))})),()=>{t(K.Z.actions.reset())})),[o,y,t,n]),r.createElement(q.Z,{scrollDirection:z.I.None},r.createElement(xt,{activeFilterTitle:s,activeFilters:o,activeSort:y,activeTimePeriod:u}),r.createElement(Nt,{activeFilters:o,activeSort:y,activeTableColumns:Z,activeTimePeriod:u}),r.createElement(Re,{activeFilters:o,activeSort:y,activeTableColumns:Z}))}function Dt(){const{machineIdentifier:e,providerIdentifier:t}=(0,s.Z)(),n=(0,a.Z)();return r.createElement(l.ZP,{machineIdentifier:e,providerIdentifier:t},r.createElement(u.Z,{machineIdentifier:e,providerIdentifier:t},r.createElement(o.ZP,{metricsContext:(0,c.Z)(n.context),metricsPage:i.mw},r.createElement(Rt,null))))}}}]);