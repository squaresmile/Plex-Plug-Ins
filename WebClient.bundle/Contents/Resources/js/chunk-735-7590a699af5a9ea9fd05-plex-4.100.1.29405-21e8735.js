"use strict";(self.webpackChunkplex_web_client=self.webpackChunkplex_web_client||[]).push([[735],{43735:(e,n,r)=>{r.r(n),r.d(n,{default:()=>F});var t=r(67294),a=r(4844),l=r(15042),s=r(1346),o=r(20500),i=r(28216),c=r(22222),d=r(43045),m=r(2375),v=r(74253),p=r(70716),u=r(30566),E=r(29313),Z=r(23540),N=r(80974),D=r(90117),g=r(5562),f=r(65671),w=r(85291),y=r(91008),I=r(85479),S=r(26893),O=r(60528),k=r(82378),b=r(78766),L=r(58593),U=r(81071),P=r(69605),R=r(73363),h=r(2675),x=r(46013),C=r(38506);function V(e,n){const r=n?n.split("\n"):[];return r.length>0?t.createElement(t.Fragment,null,t.createElement("div",{className:"ReleaseNotesModal-listTitle-SQlt8b"},e),t.createElement("ul",null,r.map(((e,n)=>t.createElement("li",{key:n},e))))):null}const _=function(e){const{version:n,added:r,fixed:a,isOpen:l,onClose:s}=e;return t.createElement(x.Z,{isOpen:l,metricsPage:P.Bc,onModalClose:s},t.createElement(C.Z,{onModalClose:s},t.createElement(h.Z,null,(0,g.Z)("{product} Release Notes",{product:"Plex Media Server"})),t.createElement(R.Z,null,t.createElement("div",{className:"ReleaseNotesModal-version-OtNvrC"},(0,g.Z)("Version {version}",{version:n})),V((0,g.Z)("New"),r),V((0,g.Z)("Fixes"),a))))},A=function({progress:e}){return t.createElement("div",{className:"ServerDownloadProgressBar-progress-eaqGoq"},t.createElement("div",{className:"ServerDownloadProgressBar-emptyBar-tqRFTg"}),t.createElement("div",{className:"ServerDownloadProgressBar-bar-LSLH7G",style:{transform:`translate3d(-${100-e}%, 0, 0)`}}))};var T=r(92885);const B="ServerUpdatePage-actionContainer-d6gTRB EmptyPageDescription-description-X4KZlh",M=(0,i.$j)((function(){return(0,c.P1)(v.Z,m.Z,(0,d.Z)(),((e,n,r)=>{const t=r.update;return{serverEntityID:e.entityID,friendlyName:e.friendlyName,state:t.state,error:t.error,progress:t.progress,availableVersion:(0,p.Z)(t.version),currentVersion:(0,p.Z)(e.version),downloadURL:t.downloadURL||n.appsUrl,added:t.added,fixed:t.fixed}}))}),(function(e,n){const{serverEntityID:r}=n;return{onDismissServerUpdate(n){e((0,E.xx)({serverEntityID:r,version:n}))},onInstallServerUpdate(){e((0,E.wR)({serverEntityID:r}))},onDownloadServerUpdate(){e((0,E.Or)({serverEntityID:r}))},onRedirectToHome(){e((0,u.im)({route:"home"}))}}}))((function(e){const{serverEntityID:n,friendlyName:r,state:a,error:l,progress:s,availableVersion:o,currentVersion:i,downloadURL:c,added:d,fixed:m,onDismissServerUpdate:v,onInstallServerUpdate:p,onDownloadServerUpdate:u,onRedirectToHome:E}=e,P=a===D.NONE||a===D.DONE,R=(0,T.Z)(),h=(0,t.useCallback)((()=>{v(o)}),[o,v]);if((0,S.Z)((()=>{E()}),P),P)return null;if(a===D.INSTALLING)return t.createElement(U.Z,{serverEntityID:n});const x=(0,g.Z)("Update available for {product}",{product:"Plex Media Server"});let C=(0,g.Z)('You are currently running version {currentVersion} on the server "{friendlyName}". Version {availableVersion} is now available.',{availableVersion:o,currentVersion:i,friendlyName:r});const V="number"==typeof s&&s>=0&&s<=100;return a===D.NOTIFY&&(C=C+" "+(0,g.Z)("This update will need to be installed manually after download.")),a===D.ERROR?t.createElement(b.Z,{description:l||(0,g.Z)("Something went wrong, please try again later."),iconSrc:N,title:x}):t.createElement(b.Z,{description:d||m?t.createElement(f.Z,{message:C+" "+(0,g.Z)("{openLink}Show release notes{closeLink}."),tags:[{open:"openLink",close:"closeLink",component:I.Z,onPress:R.onOpen,kind:O._8}]}):C,iconSrc:N,title:(0,g.Z)("Update available for {product}",{product:"Plex Media Server"})},a===D.AVAILABLE?t.createElement("div",{className:B},t.createElement(y.Z,{kind:O._8,size:k.ln,onPress:u},(0,g.Z)("Download now"))):null,a===D.DOWNLOADING?t.createElement("div",{className:B},t.createElement("div",null,V?(0,g.Z)("Downloading Update ({progress}%)",{progress:s}):(0,g.Z)("Downloading Update")),t.createElement(Z.gI,{align:"center",verticalAlign:"center",width:"100%"},V?t.createElement(A,{progress:s}):t.createElement(w.Z,{size:"small"}))):null,a===D.DOWNLOADED?t.createElement("div",{className:B},t.createElement(y.Z,{kind:O._8,size:k.ln,onPress:p},(0,g.Z)("Install now"))):null,a===D.NOTIFY?t.createElement("div",{className:B},t.createElement(y.Z,{kind:O._8,size:k.ln,target:"_blank",to:c,onPress:h},(0,g.Z)("Download now"))):null,a!==D.DOWNLOADING&&a!==D.DOWNLOADED?t.createElement(L.Z,null,t.createElement(I.Z,{className:"ServerUpdatePage-link-OvaQUF",kind:O._8,size:k.HC,to:"#",onPress:h},(0,g.Z)("Skip this version"))):null,t.createElement(_,{added:d,fixed:m,isOpen:R.isOpen,version:o,onClose:R.onClose}))}));function F(){const{machineIdentifier:e}=(0,s.Z)(),n=(0,a.Z)(l.cN,e);return t.createElement(o.Z,{serverEntityID:n},t.createElement(M,{serverEntityID:n}))}}}]);