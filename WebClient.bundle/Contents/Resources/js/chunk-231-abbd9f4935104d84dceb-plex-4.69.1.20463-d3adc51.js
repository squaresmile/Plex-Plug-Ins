"use strict";(self.webpackChunkplex_web_client=self.webpackChunkplex_web_client||[]).push([[231],{58730:(e,t,r)=>{r.d(t,{I:()=>l,w:()=>n});const l="boolean",n="other"},52331:(e,t,r)=>{r.d(t,{Z:()=>g});var l=r(13469),n=r.n(l),a=r(96638),i=(r(11133),r(58730)),o=Object.defineProperty,c=Object.prototype.hasOwnProperty,s=Object.getOwnPropertySymbols,u=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&m(e,r,t[r]);if(s)for(var r of s(t))u.call(t,r)&&m(e,r,t[r]);return e},y=r(70560),d=r(23736);const f=`([^&!=<>]+)(${y.ZP.sort(((e,t)=>t.length-e.length)).map(a.Z).join("|")})([^&]+)?`,v=new RegExp(f,"g"),b=new RegExp(f),Z={unwatched:!0,unwatchedLeaves:!0,unmatched:!0,duplicate:!0,inProgress:!0,hdonly:!0,hdr:!0};function g(e){if(!e)return[];const t=decodeURIComponent(e).match(v);return t?t.reduce(((e,t)=>{const r=t.match(b),[,l,a,o]=r||[];let c=o?n().uniq(o.split(d.OR)):"";return 1===c.length&&(c=c[0]),function(e,t,r){const l=[...e];if(r.type===i.I){const e=n().findIndex(l,(e=>e.key===t)),a=-1===e?0:e,i=p({key:t},r);-1===e?l.push(i):l.splice(a,1,i)}else n().findWhere(l,{key:t,value:r.value})||l.push(p({key:t},r));return l}(e,l,{value:c,type:Z[l]?i.I:i.w,operator:a})}),[]):[]}},96015:(e,t,r)=>{r.d(t,{Z:()=>s}),r(13469),r(11133);var l=Object.defineProperty,n=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,i=Object.prototype.propertyIsEnumerable,o=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&o(e,r,t[r]);if(a)for(var r of a(t))i.call(t,r)&&o(e,r,t[r]);return e};function s(e,t,r){if(null==r)return e.filter((e=>e.key!==t));const l=[...e];let n=l.length;for(;n-- >0;){const e=l[n],a=e.key,i=e.value;if(t===a&&r===i)l.splice(n,1);else if(t===a&&Array.isArray(i)){const t=i.indexOf(r);t>-1&&(i.splice(t,1),1===i.length?l.splice(n,1,c(c({},e),{value:i[0]})):i.length||l.splice(n,1))}}return l}},45318:(e,t,r)=>{r.d(t,{Z:()=>m});var l=r(67294),n=r(39409),a=Object.defineProperty,i=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function u(e){return l.createElement(n.Z,((e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&s(e,r,t[r]);return e})({},e))}u.defaultProps={className:"PageHeaderBadge-badge-1St9OR"};const m=u},99517:(e,t,r)=>{r.d(t,{Z:()=>o});var l=r(22222),n=r(18409),a=r(70617),i=r(38992);const o=(0,a.Z)((function(e){return(0,l.P1)((0,i.Z)(e),(e=>e.accounts.slice().sort(n.Z)))}))},18409:(e,t,r)=>{function l(e,t){if(1===e.id)return-1;if(1===t.id)return 1;const r=e.name.trim().toUpperCase(),l=t.name.trim().toUpperCase();return r<l?-1:r>l?1:0}r.d(t,{Z:()=>l})},70449:(e,t,r)=>{r.d(t,{Z:()=>i});var l=r(67294),n=r(50710),a=r(5562);function i({isAscending:e=!0}){const t=e?n.J$u:n.Oob;return l.createElement("div",{className:"IconTableHeaderSortDirection-sortDirectionIcon-2M6Vgj"},l.createElement(t,{"aria-label":e?(0,a.Z)("Ascending"):(0,a.Z)("Descending")}))}},58050:(e,t,r)=>{r.d(t,{Z:()=>m});var l=r(67294);const n={tableCell:"TableCell-tableCell-3eVBRq",activeTableCell:"TableCell-activeTableCell-3P4hyD TableCell-tableCell-3eVBRq",title:"TableCell-title-2drZcu"};var a=Object.defineProperty,i=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&s(e,r,t[r]);return e};function m(e){var t=e,{className:r=n.title,cellClassName:a=n.tableCell,activeCellClassName:s=n.activeTableCell,style:m,component:p,type:y,isActiveSort:d}=t,f=((e,t)=>{var r={};for(var l in e)i.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&o)for(var l of o(e))t.indexOf(l)<0&&c.call(e,l)&&(r[l]=e[l]);return r})(t,["className","cellClassName","activeCellClassName","style","component","type","isActiveSort"]);return l.createElement("div",{className:d?s:a,style:m},l.createElement(p,u(u({},f),{className:r})))}},25369:(e,t,r)=>{r.d(t,{Z:()=>m});var l=r(67294);const n={tableHeader:"TableHeader-tableHeader-1uylmm"};var a=Object.defineProperty,i=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&s(e,r,t[r]);return e};function m(e){var t=e,{className:r=n.tableHeader}=t,a=((e,t)=>{var r={};for(var l in e)i.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&o)for(var l of o(e))t.indexOf(l)<0&&c.call(e,l)&&(r[l]=e[l]);return r})(t,["className"]);return l.createElement("div",u(u({},a),{className:r}))}},76764:(e,t,r)=>{r.d(t,{Z:()=>m});var l=r(67294);const n={tableHeaderCell:"TableHeaderCell-tableHeaderCell-36KGxp TableCell-tableCell-3eVBRq",activeTableHeaderCell:"TableHeaderCell-activeTableHeaderCell-3TbDPT TableHeaderCell-tableHeaderCell-36KGxp TableCell-tableCell-3eVBRq"};var a=Object.defineProperty,i=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&s(e,r,t[r]);return e};function m(e){var t=e,{className:r=n.tableHeaderCell,activeClassName:a=n.activeTableHeaderCell,children:s,isActive:m=!1}=t,p=((e,t)=>{var r={};for(var l in e)i.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&o)for(var l of o(e))t.indexOf(l)<0&&c.call(e,l)&&(r[l]=e[l]);return r})(t,["className","activeClassName","children","isActive"]);const y=m?a:r;return l.createElement("span",u(u({},p),{className:y}),s)}},5718:(e,t,r)=>{r.d(t,{Z:()=>p});var l=r(67294),n=r(17331);const a={tableHeaderLink:"TableHeaderLink-tableHeaderLink-3yiPl7 Link-link-1Kt-hA"};var i=Object.defineProperty,o=Object.prototype.hasOwnProperty,c=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&u(e,r,t[r]);return e};function p(e){var t=e,{className:r=a.tableHeaderLink,children:i}=t,u=((e,t)=>{var r={};for(var l in e)o.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&c)for(var l of c(e))t.indexOf(l)<0&&s.call(e,l)&&(r[l]=e[l]);return r})(t,["className","children"]);return l.createElement(n.Z,m(m({},u),{className:r}),i)}},90317:(e,t,r)=>{r.d(t,{Z:()=>m});var l=r(67294);const n={tableHeaderTitle:"TableHeaderTitle-tableHeaderTitle-2qvD3G"};var a=Object.defineProperty,i=Object.prototype.hasOwnProperty,o=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&s(e,r,t[r]);return e};function m(e){var t=e,{className:r=n.tableHeaderTitle,children:a}=t,s=((e,t)=>{var r={};for(var l in e)i.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&o)for(var l of o(e))t.indexOf(l)<0&&c.call(e,l)&&(r[l]=e[l]);return r})(t,["className","children"]);return l.createElement("span",u(u({},s),{className:r}),a)}},17231:(e,t,r)=>{r.r(t),r.d(t,{default:()=>mt});var l=r(67294),n=r(69605),a=r(31235),i=r(74309),o=r(2200),c=r(1346),s=r(75989),u=r(31446),m=r(28216),p=r(52331),y=r(27082),d=r(53334),f=r(14408),v=r(93683),b=r(56442),Z=r(84936),g=r(12634);const O=d.Z.extend({name:"PlayHistoryListItemModel",syncedAttrs:{key:f.Z.string,parentKey:f.Z.string,grandparentKey:f.Z.string,title:f.Z.string,parentTitle:f.Z.string,grandparentTitle:f.Z.string,type:f.Z.string,thumb:f.Z.string,parentThumb:f.Z.string,grandparentThumb:f.Z.string,grandparentArt:f.Z.string,index:f.Z.integer,parentIndex:f.Z.integer,originallyAvailableAt:f.Z.string,viewedAt:f.Z.integer,accountID:f.Z.integer,deviceID:f.Z.integer},derivedAttrs:{itemKey(){return this.get("key")},id(){return this.cid}}}),P=g.Z.extend({name:"PlayHistoryListItemCollection",context:["server"],model:O});d.Z.extend({mixins:[v.Z],collectionName:"items",name:"PlayHistoryListModel",context:["server","accountID","filters","sort","limit"],responseType:b.AV,url(){const e=this.filters.reduce(((e,t)=>(e[t.key]=t.value,e)),{});null!=this.accountID&&(e.accountID=this.accountID),null!=this.sort&&(e.sort=this.sort),null!=this.limit&&(e.limit=this.limit);let t=Z.Z.join("/status/sessions/history/all",e);return t=t.replace("viewedAt=","viewedAt>="),this.getPaginatedUrl(t)},sessionAttrs:{currentPageStart:f.Z.integer,currentPageSize:f.Z.integer,populatedRange:f.Z.object},syncedAttrs:{totalSize:f.Z.integer},syncedRelations:{items:{relationClass:P,rootPropertyName:"Metadata",setOptions:e=>({remove:e.remove,at:e.at})}},defaults:()=>({populatedRange:{start:0,end:0,size:0}}),initialize(){this.startPopulatedRangeMonitor()}});var h=r(74395),E=r(23306),I=r(19595),T=r(24906),w=r(57138),k=r(5623);function C(e,t){return!!e&&e.some((e=>e.key===t))}var H=r(5562),S=r(13550);var N=r(22222),j=r(38992);var x=r(86626),A=r(69881),M=r(31212),R=r(48903),F=r(96051);const D={key:"user",title:()=>(0,H.Z)("User"),component:function({className:e,playHistoryItem:t}){const[r]=(0,a.c9)(),{accountID:n}=t,i=(0,l.useMemo)((()=>((e,t)=>(0,N.P1)((0,j.Z)(e),(e=>e.accounts.find((e=>e.id===t)))))(r.machineIdentifier,n)),[n,r.machineIdentifier]),o=(0,m.v9)(i);return o?l.createElement("span",{className:e,title:o.name},o.name):l.createElement("span",{className:e},(0,H.Z)("Unknown User"))},style:{flex:"1 1 250px"}},L={key:"type",title:()=>(0,H.Z)("Type"),component:function({className:e,playHistoryItem:t}){const{type:r}=t,n=(0,A.getMetadataType)(r);return n?l.createElement("span",{className:e,title:n.title},n.title):null},style:{flex:"0 1 120px"}},q={key:"title",title:()=>(0,H.Z)("Title"),component:function({className:e,playHistoryItem:t}){const r=(0,S.Z)(t);return l.createElement("span",{className:e},l.createElement("div",{className:"PlayHistoryTableTitle-titleContainer-3bvNXD"},l.createElement("span",{className:"PlayHistoryTableTitle-title-3B9T6x",title:r},r)))},style:{flex:"2 0 350px"}},K={key:"player",title:()=>(0,H.Z)("Player"),component:function({className:e,playHistoryItem:t}){const[r]=(0,a.c9)(),{deviceID:n}=t,i=(0,m.v9)((0,x.Z)(r.machineIdentifier)).devices.find((e=>e.id===n));return i?l.createElement("span",{className:e,title:i.name},i.name):l.createElement("span",{className:e},(0,H.Z)("Unknown"))},style:{flex:"1 1 150px"}},U={key:"platform",title:()=>(0,H.Z)("Platform"),component:function({className:e,playHistoryItem:t}){const[r]=(0,a.c9)(),{deviceID:n}=t,i=(0,m.v9)((0,x.Z)(r.machineIdentifier)).devices.find((e=>e.id===n));return i?l.createElement("span",{className:e,title:i.platform},i.platform):l.createElement("span",{className:e},(0,H.Z)("Unknown"))},style:{flex:"1 1 150px"}},z=[{key:"viewedAt",ascKey:"viewedAt",descKey:"viewedAt:desc",title:()=>(0,H.Z)("Played"),component:function({className:e,playHistoryItem:t}){const{viewedAt:r}=t,n=(0,m.v9)(R.Z),a=(0,M.Z)(1e3*r,`${n} MMM d, yyyy`);return l.createElement("span",{className:e,title:a},a)},style:{flex:"1 1 150px"}}];var B=r(20272),V=r(38770),X=r(75157),_=r(7796),G=r(14146);const $=parseInt(_.Z.tableRowHeight,10),W=(0,G.Z)({rowHeight:$,overscan:20});var Y=r(68809),J=r(80367),Q=r(63919),ee=r(7203),te=r(49228);const re=(0,N.P1)(te.Z,(e=>e.playHistory));var le=r(17331),ne=r(58050),ae=r(54778),ie=r(6638);const oe=l.forwardRef((({style:e,cellIndex:t},r)=>l.createElement("div",{ref:r,className:t%2?"PlayHistoryTableRowLoading-alternateLoadingItem-2p-Vys PlayHistoryTableRowLoading-loadingItem-3MSn-_":"PlayHistoryTableRowLoading-loadingItem-3MSn-_",style:e},(0,H.Z)("Loading..."))));var ce=Object.prototype.hasOwnProperty,se=Object.getOwnPropertySymbols,ue=Object.prototype.propertyIsEnumerable;function me(e){var t=e,{item:r,activeTableColumns:n}=t,i=((e,t)=>{var r={};for(var l in e)ce.call(e,l)&&t.indexOf(l)<0&&(r[l]=e[l]);if(null!=e&&se)for(var l of se(e))t.indexOf(l)<0&&ue.call(e,l)&&(r[l]=e[l]);return r})(t,["item","activeTableColumns"]);const[o]=(0,a.c9)(),c=(0,ae.Z)(i);let s;if(null==r?void 0:r.key){const e=n.some((e=>"title"===e.key)),t=r.type===A.TRACK?r.parentKey:r.key;s=e?(0,ie.Z)(o,{isLibraryProvider:!0},t):void 0}return r?l.createElement("div",{ref:c.cellRef,className:i.cellIndex%2?"PlayHistoryTableRow-alternateItem-2QSxpw PlayHistoryTableRow-item-BqkCrH":"PlayHistoryTableRow-item-BqkCrH",style:c.style},l.createElement(le.Z,{"aria-label":r.title,className:"PlayHistoryTableRow-columns-2m6HT6 Link-link-1Kt-hA",isDisabled:!s,to:s},n.map((({style:e,component:t},n)=>l.createElement(ne.Z,{key:n,component:t,playHistoryItem:r,style:e}))))):l.createElement(oe,{ref:c.cellRef,cellIndex:i.cellIndex,style:c.style})}var pe=Object.defineProperty,ye=Object.prototype.hasOwnProperty,de=Object.getOwnPropertySymbols,fe=Object.prototype.propertyIsEnumerable,ve=(e,t,r)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,be=(e,t)=>{for(var r in t||(t={}))ye.call(t,r)&&ve(e,r,t[r]);if(de)for(var r of de(t))fe.call(t,r)&&ve(e,r,t[r]);return e};function Ze({activeTableColumns:e,activeFilters:t,activeSort:r}){const n=(0,m.I0)(),[i]=(0,a.c9)(),o=(0,m.v9)(re),c=(0,m.v9)((0,x.Z)(i.machineIdentifier)),{items:s,totalSize:u,isPopulated:p,error:y}=o,{isPopulated:d,error:f}=c,v=(0,l.useCallback)((e=>{n(k.Z.actions.fetchRangeRequested(be(be({},e),{server:i,filters:t,sort:r})))}),[n,i,t,r]),b=(0,l.useMemo)((()=>t=>l.createElement(me,be(be({},t),{activeTableColumns:e}))),[e]);return p&&u&&(d||f)?l.createElement(Q.Z,{cellComponentFactory:b,className:"PlayHistoryList-playHistoryListPageContent-2RIN3O PageContent-pageContentScroller-2dar0i Scroller-scroller-HAUFpl",items:s,layout:W,totalSize:u,onPageRequest:v}):p&&!u?l.createElement(Y.Z,{description:(0,H.Z)("Snuggle up on the couch and play something!"),title:(0,H.Z)("Nothing to see here")}):y?l.createElement(J.Z,null):l.createElement(Y.Z,null,l.createElement(ee.Z,null))}var ge=r(45318),Oe=r(41859),Pe=r(24351),he=r(24754),Ee=r(7118),Ie=r(58730),Te=r(96015),we=(r(11133),Object.defineProperty),ke=Object.prototype.hasOwnProperty,Ce=Object.getOwnPropertySymbols,He=Object.prototype.propertyIsEnumerable,Se=(e,t,r)=>t in e?we(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function Ne(e,t,r){const l=[...e],n=l.findIndex((e=>e.key===t)),a=-1===n?0:n,i=((e,t)=>{for(var r in t||(t={}))ke.call(t,r)&&Se(e,r,t[r]);if(Ce)for(var r of Ce(t))He.call(t,r)&&Se(e,r,t[r]);return e})({key:t},r);return-1===n?l.push(i):l.splice(a,1,i),l}var je=r(74287),xe=r(9119),Ae=r(75534),Me=r(99517),Re=r(46905),Fe=r(46525),De=Object.defineProperty,Le=Object.prototype.hasOwnProperty,qe=Object.getOwnPropertySymbols,Ke=Object.prototype.propertyIsEnumerable,Ue=(e,t,r)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ze=(e,t)=>{for(var r in t||(t={}))Le.call(t,r)&&Ue(e,r,t[r]);if(qe)for(var r of qe(t))Ke.call(t,r)&&Ue(e,r,t[r]);return e};let Be,Ve;function Xe(e,t=window.location.hash){const r=function(e){if(Be===e)return Ve;const t=e.split("?"),r=t.length>1?t[1]:void 0,l=r?Z.Z.parseParams(r):{};return Be=e,Ve={url:t[0],params:l},Ve}(t);return Z.Z.join(r.url,ze(ze({},r.params),{filters:(0,Fe.Z)(e.filters),activeTimePeriod:e.activeTimePeriod,sort:e.sort}))}var _e=r(55278);function Ge({activeFilters:e,activeTimePeriod:t,activeSort:r}){const[n]=(0,a.c9)(),i=(0,Ae.Z)(),o=(0,Re.Z)(),c=(0,l.useMemo)((()=>({key:"",title:(0,H.Z)("All Users")})),[]),s=(0,m.v9)((0,Me.Z)(n.machineIdentifier)),u=(0,l.useMemo)((()=>s.reduce(((e,t)=>(e.push({key:String(t.id),title:t.name}),e)),[c])),[s,c]),p=(0,l.useMemo)((()=>{const t=e.find((e=>"accountID"===e.key));return t?u.find((e=>e.key===t.value)):c}),[e,u,c]),y=(0,l.useCallback)((l=>{let n;n=l?Ne(e,F.F.AccountID,{value:String(l),type:Ie.w}):(0,Te.Z)(e,F.F.AccountID),window.location.hash=Xe({filters:n,activeTimePeriod:t,sort:r})}),[e,t,r]);return p&&u.length?l.createElement(l.Fragment,null,l.createElement(Oe.Z,{hasMenu:!0,id:i,isMenuOpen:o.isOpen,onPress:o.onToggle},p.title),l.createElement(je.Z,{isOpen:o.isOpen,target:i,onMenuClose:o.onClose},u.map((e=>l.createElement(_e.Z,{key:e.key,isSelected:p.key===e.key,value:e.key,onSelect:(0,xe.Z)(y,o.onClose)},e.title))))):null}var $e=r(70617),We=r(84389);const Ye=(0,$e.Z)((function(e,t){return(0,N.P1)((0,We.Z)(e,t),(e=>e.filter((e=>{const t=e.type?A.getMetadataType(e.type):null;return t&&t.typeString!==A.PLAYLIST}))))}));function Je({activeFilters:e,activeTimePeriod:t,activeSort:r}){const[n,i]=(0,a.c9)(),o=(0,Ae.Z)(),c=(0,Re.Z)(),s=(0,m.v9)(Ye(n.machineIdentifier,i.identifier)),u=(0,l.useMemo)((()=>({key:"all",title:(0,H.Z)("All Libraries")})),[]),p=(0,l.useMemo)((()=>s.reduce(((e,t)=>(e.push({key:t.id,title:t.title}),e)),[u])),[s,u]),y=(0,l.useMemo)((()=>{const t=e.find((e=>"librarySectionID"===e.key));return t&&p.length?p.find((e=>String(e.key)===t.value)):u}),[e,p,u]),d=(0,l.useCallback)((l=>{let n;n="all"!==l?Ne(e,F.F.LibrarySectionID,{value:l,type:Ie.w}):(0,Te.Z)(e,F.F.LibrarySectionID),window.location.hash=Xe({filters:n,activeTimePeriod:t,sort:r})}),[e,t,r]);return y&&s.length?l.createElement(l.Fragment,null,l.createElement(Oe.Z,{hasMenu:!0,id:o,isMenuOpen:c.isOpen,onPress:c.onToggle},y.title),l.createElement(je.Z,{isOpen:c.isOpen,target:o,onMenuClose:c.onClose},p.map((e=>l.createElement(_e.Z,{key:e.key,isSelected:y.key===e.key,value:e.key,onSelect:(0,xe.Z)(d,c.onClose)},e.title))))):null}var Qe=r(47192);function et(){const[e]=(0,a.c9)(),t=(0,Ae.Z)(),r=(0,Re.Z)(),n=(0,m.v9)(Qe.Z),i=(0,l.useMemo)((()=>n.reduce(((e,t)=>(t.isFullOwnedServer&&t.isConnected&&e.push({key:t.machineIdentifier,title:t.friendlyName}),e)),[])),[n]),o=(0,l.useMemo)((()=>i.find((t=>t.key===e.machineIdentifier))),[e,i]),c=(0,l.useCallback)((e=>{window.location.hash=(0,Ee.Z)(e)}),[]);return o?l.createElement(l.Fragment,null,l.createElement(Oe.Z,{hasMenu:!0,id:t,isMenuOpen:r.isOpen,onPress:r.onToggle},o.title),l.createElement(je.Z,{isOpen:r.isOpen,target:t,onMenuClose:r.onClose},i.map((e=>l.createElement(_e.Z,{key:e.key,isSelected:o.key===e.key,value:e.key,onSelect:(0,xe.Z)(c,r.onClose)},e.title))))):null}function tt({activeFilters:e,activeTimePeriod:t,activeSort:r}){const n=(0,Ae.Z)(),a=(0,Re.Z)(),i=[X.XH.Week,X.XH.Month,X.XH.NinetyDays,X.XH.Year,X.XH.AllTime],o=(0,l.useCallback)((t=>{const l=Ne(e,F.F.ViewedAt,{value:String((0,X.xP)(t)),type:Ie.w});window.location.hash=Xe({filters:l,activeTimePeriod:t,sort:r})}),[e,r]);return l.createElement(l.Fragment,null,l.createElement(Oe.Z,{hasMenu:!0,id:n,isMenuOpen:a.isOpen,onPress:a.onToggle},(0,X.dZ)(t)),l.createElement(je.Z,{isOpen:a.isOpen,target:n,onMenuClose:a.onClose},i.map((e=>l.createElement(_e.Z,{key:e,isSelected:t===e,value:e,onSelect:(0,xe.Z)(o,a.onClose)},(0,X.dZ)(e))))))}const rt=(0,N.P1)(re,(e=>e.totalSize));function lt({activeFilters:e,activeFilterTitle:t,activeTimePeriod:r,activeSort:n}){const[i]=(0,a.c9)(),o=(0,m.v9)(rt),c=!C(e,F.F.MetadataItemID);return l.createElement(he.Z,null,l.createElement(Pe.Z,null,l.createElement(Oe.Z,{to:(0,Ee.Z)(i.machineIdentifier)},(0,H.Z)("Play History")),t?l.createElement(Oe.Z,null,t):null,c?l.createElement(et,null):null,c?l.createElement(l.Fragment,null,l.createElement(Je,{activeFilters:e,activeSort:n,activeTimePeriod:r}),l.createElement(Ge,{activeFilters:e,activeSort:n,activeTimePeriod:r}),l.createElement(tt,{activeFilters:e,activeSort:n,activeTimePeriod:r})):null,l.createElement(ge.Z,null,o)))}var nt=r(70449),at=r(25369),it=r(76764),ot=r(5718),ct=r(90317);function st({activeTableColumns:e,activeFilters:t,activeTimePeriod:r,activeSort:n}){return l.createElement(at.Z,null,e.map((({style:e,title:a,ascKey:i,descKey:o,key:c})=>{if(!i)return l.createElement("div",{key:c,className:"PlayHistoryTableHeader-tableHeader-18tg8-",style:e},l.createElement(it.Z,null,l.createElement(ct.Z,null,a())));const s=n===i||n===o,u=n===i;return l.createElement(ot.Z,{key:c,style:e,to:Xe({filters:t,activeTimePeriod:r,sort:u?o:i})},l.createElement(it.Z,{isActive:s},l.createElement(ct.Z,null,a()),s?l.createElement(nt.Z,{isAscending:!u}):null))})))}function ut(){var e;const t=(0,m.I0)(),[r]=(0,a.c9)(),n=(0,i.Z)(),o=(0,p.Z)(n.filters),c=(0,s.Z)(n.filterTitle),u=null!=(e=(0,B.su)(X.XH).find((e=>e===(0,s.Z)(n.activeTimePeriod))))?e:X.XH.AllTime,d=n.sort?(0,s.Z)(n.sort):"viewedAt:desc",f=(0,V.Z)(n.isParentType),v=function(e,t){let r=[K,U,...z];return!t&&C(e,F.F.MetadataItemID)||(r=[q,...r]),C(e,F.F.LibrarySectionID)||C(e,F.F.MetadataItemID)||(r=[L,...r]),C(e,F.F.AccountID)||(r=[D,...r]),r}(o,f);return(0,I.Z)(),(0,l.useEffect)((()=>{t(E.Z.actions.populateRequested({server:r})),t(h.Z.actions.populateRequested({server:r}))}),[t,r]),(0,l.useEffect)((()=>((0,y.c9)((()=>{t(k.Z.actions.fetchRangeRequested({server:r,filters:o,sort:d,startIndex:0,size:100}))})),()=>{t(k.Z.actions.reset())})),[o,d,t,r]),l.createElement(T.Z,{scrollDirection:w.I.None},l.createElement(lt,{activeFilterTitle:c,activeFilters:o,activeSort:d,activeTimePeriod:u}),l.createElement(st,{activeFilters:o,activeSort:d,activeTableColumns:v,activeTimePeriod:u}),l.createElement(Ze,{activeFilters:o,activeSort:d,activeTableColumns:v}))}function mt(){const{machineIdentifier:e,providerIdentifier:t}=(0,c.Z)(),r=(0,i.Z)();return l.createElement(a.ZP,{machineIdentifier:e,providerIdentifier:t},l.createElement(u.Z,{machineIdentifier:e,providerIdentifier:t},l.createElement(o.ZP,{metricsContext:(0,s.Z)(r.context),metricsPage:n.mw},l.createElement(ut,null))))}},38770:(e,t,r)=>{r.d(t,{Z:()=>l});const l=function(e){return 1===Number(e)||"true"===e}}}]);