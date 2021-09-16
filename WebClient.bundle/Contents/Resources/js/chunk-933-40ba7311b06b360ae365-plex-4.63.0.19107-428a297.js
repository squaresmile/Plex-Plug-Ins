"use strict";(self.webpackChunkplex_web_client=self.webpackChunkplex_web_client||[]).push([[933],{63312:(e,t,o)=>{o.d(t,{Z:()=>b});var l=o(67294),a=o(6103),n=o(27271),r=o(66088);const s={toolbarButton:"ToolbarButton-toolbarButton-2dJJTj",bottomLeft:"ToolbarButton-bottomLeft-17QEI5 Tooltip-bottomLeft-xa9F7D Tooltip-tooltip-3mpwtQ Tooltip-tooltipArrow-2SOf0S Tooltip-tooltipTopArrow-3fp6qd Tooltip-tooltipLeftAlignArrow-2ez4MX",bottomCenter:"ToolbarButton-bottomCenter-3ecYxP Tooltip-bottomCenter-XGNe9E Tooltip-tooltip-3mpwtQ Tooltip-tooltipArrow-2SOf0S Tooltip-tooltipTopArrow-3fp6qd Tooltip-tooltipCenterAlignArrow-1EoXo6",bottomRight:"ToolbarButton-bottomRight-18tS7A Tooltip-bottomRight-Yie4tu Tooltip-tooltip-3mpwtQ Tooltip-tooltipArrow-2SOf0S Tooltip-tooltipTopArrow-3fp6qd Tooltip-tooltipRightAlignArrow-3CRTW4",hasFocus:"ToolbarButton-hasFocus-2GYx3R"};var i=Object.defineProperty,c=Object.prototype.hasOwnProperty,p=Object.getOwnPropertySymbols,m=Object.prototype.propertyIsEnumerable,d=(e,t,o)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;class u extends l.Component{render(){const e=this.props,{children:t,tooltip:o,className:r,hasLabel:i,tooltipAttachment:u,hideOnPress:b,onPress:v}=e,h=((e,t)=>{var o={};for(var l in e)c.call(e,l)&&t.indexOf(l)<0&&(o[l]=e[l]);if(null!=e&&p)for(var l of p(e))t.indexOf(l)<0&&m.call(e,l)&&(o[l]=e[l]);return o})(e,["children","tooltip","className","hasLabel","tooltipAttachment","hideOnPress","onPress"]),w=s[u],y=`${w} ${s.hasFocus}`;return l.createElement(n.Z,((e,t)=>{for(var o in t||(t={}))c.call(t,o)&&d(e,o,t[o]);if(p)for(var o of p(t))m.call(t,o)&&d(e,o,t[o]);return e})({"aria-label":o,className:r,component:a.Z,hideOnPress:b,tooltip:o,tooltipClassName:w,tooltipFocusedClassName:y,onPress:v},h),t)}}u.defaultProps={className:s.toolbarButton,tooltipAttachment:r.eO};const b=u},5612:(e,t,o)=>{o.d(t,{Z:()=>n});var l=o(67294);function a({className:e}){return l.createElement("div",{className:e})}a.defaultProps={className:"PageHeaderDivider-pageHeaderDivider-jzaQDd"};const n=a},59370:(e,t,o)=>{o.d(t,{Z:()=>n});var l=o(67294),a=o(6103);const n=function(e){const{title:t,detail:o,route:n}=e,r=n?a.Z:"div";return l.createElement(r,{className:n?"PageHeaderTitle-containerWithRoute-3Xp7hf PageHeaderTitle-container-F5IPwS":"PageHeaderTitle-container-F5IPwS",to:n},l.createElement("div",{className:"PageHeaderTitle-title-1aJsbX"},t),o?l.createElement("div",{className:"PageHeaderTitle-detail-2X3UHB"},o):null)}},70007:(e,t,o)=>{o.d(t,{Z:()=>d});var l=o(67294),a=o(63312),n=o(47636),r=Object.defineProperty,s=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,c=Object.prototype.propertyIsEnumerable,p=(e,t,o)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o;class m extends l.Component{shouldComponentUpdate(e,t){return(0,n.Z)(this,e,t)}render(){const e=this.props,{children:t,iconComponent:o,label:n,isMenuOpen:r}=e,m=((e,t)=>{var o={};for(var l in e)s.call(e,l)&&t.indexOf(l)<0&&(o[l]=e[l]);if(null!=e&&i)for(var l of i(e))t.indexOf(l)<0&&c.call(e,l)&&(o[l]=e[l]);return o})(e,["children","iconComponent","label","isMenuOpen"]);return l.createElement(a.Z,((e,t)=>{for(var o in t||(t={}))s.call(t,o)&&p(e,o,t[o]);if(i)for(var o of i(t))c.call(t,o)&&p(e,o,t[o]);return e})({"aria-haspopup":!0,"data-qa-id":"toolbarMore",hideOnPress:!1,tooltip:r?void 0:n},m),l.createElement(o,null),t)}}const d=m},98378:(e,t,o)=>{o.d(t,{Z:()=>r});var l,a,n=o(30492);function r(e,t){return t.isCloud?null==e?void 0:e.providerSourceTitle:t.isEmbedded?void 0:t.isFullOwnedServer?e?e.serverFriendlyName:void 0:e?`${e.serverSourceTitle} • ${e.serverFriendlyName}`:(0,n.Z)(t)}(a=l||(l={})).Dvr="dvr",a.Episode="episode",a.Home="home",a.Movies="movies",a.Music="music",a.Photos="photos",a.Playlists="playlists",a.Podcasts="podcasts",a.Tv="tv",a.Videos="videos",a.Webshows="webShows",a.Shared="shared"},24334:(e,t,o)=>{o.d(t,{Z:()=>n});var l=o(67294),a=o(75534);function n(){const e=(0,a.Z)(),[t,o]=(0,l.useState)(!1),n=(0,l.useCallback)((()=>{o(!t)}),[t,o]),r=(0,l.useCallback)((()=>{o(!1)}),[o]);return{menuButtonID:e,isMenuOpen:t,onMenuButtonPress:n,onMenuClose:r}}},74319:(e,t,o)=>{o.d(t,{Z:()=>i});var l=o(45697),a=o.n(l),n=o(67294),r=o(17845);function s(e){const t=e["aria-label"],o=e.className,l=e.style,a={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",id:"plex-icon-toolbar-add-to-watchlist-560"};a["aria-hidden"]=!t,a.style=l,a.className=r.Z.plexIcon+(o?" "+o:"");const s=[n.createElement.apply(n,["path",{d:"M22.2 12H25.8V16.2H30V19.8H25.8V24H22.2V19.8H18V16.2H22.2V12Z"}].concat([])),n.createElement.apply(n,["path",{clipRule:"evenodd",d:"M42 6.15892C42 4.72113 40.8409 3.59998 39.411 3.59998H8.58903C7.15701 3.59998 6 4.74565 6 6.15892V42.9571C6 44.3949 6.90879 44.8173 8.02984 43.9554L21.9702 33.2377C23.0826 32.3824 24.9088 32.3758 26.0298 33.2377L39.9702 43.9554C41.0826 44.8107 42 44.3704 42 42.9571V6.15892ZM19.7759 30.3837L9.6 38.2073V7.19998H38.4V38.2073L28.2241 30.3837C26.9296 29.3885 25.382 28.9922 23.9927 28.9938C22.6046 28.9953 21.0627 29.3944 19.7759 30.3837Z"}].concat([]))];return t&&s.unshift(n.createElement("title",null,t)),n.createElement.apply(n,["svg",a].concat(s))}s.propTypes={"aria-label":a().string,className:a().string,style:a().object};const i=s},19164:(e,t,o)=>{o.d(t,{Z:()=>i});var l=o(45697),a=o.n(l),n=o(67294),r=o(17845);function s(e){const t=e["aria-label"],o=e.className,l=e.style,a={viewBox:"0 0 560 560",xmlns:"http://www.w3.org/2000/svg",strokeMiterlimit:"1.414",strokeLinejoin:"round",id:"plex-icon-toolbar-artwork-560"};a["aria-hidden"]=!t,a.style=l,a.className=r.Z.plexIcon+(o?" "+o:"");const s=[n.createElement.apply(n,["path",{d:"m56 504h448v-448h-448v448m336-252l-106.2 106.2 103.8 103.8h-39.598l-126-126-126 126v-364h364v224l-70-70m-168-112c30.907 0 56 25.09 56 56 0 30.907-25.09 56-56 56-30.907 0-56-25.09-56-56 0-30.907 25.09-56 56-56"}].concat([]))];return t&&s.unshift(n.createElement("title",null,t)),n.createElement.apply(n,["svg",a].concat(s))}s.propTypes={"aria-label":a().string,className:a().string,style:a().object};const i=s},67633:(e,t,o)=>{o.d(t,{Z:()=>i});var l=o(45697),a=o.n(l),n=o(67294),r=o(17845);function s(e){const t=e["aria-label"],o=e.className,l=e.style,a={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 560 560",id:"plex-icon-toolbar-more-vertical-560"};a["aria-hidden"]=!t,a.style=l,a.className=r.Z.plexIcon+(o?" "+o:"");const s=[n.createElement.apply(n,["path",{d:"M280 168c-30.897 0-56-25.103-56-56 0-30.896 25.103-56 56-56s56 25.104 56 56c-.965 31.862-25.103 56-56 56zm56 112c0 30.897-25.103 56-56 56s-56-25.103-56-56 25.103-56 56-56 56 25.103 56 56zm0 168c0 30.897-25.103 56-56 56s-56-25.103-56-56 25.103-56 56-56 56 25.103 56 56z"}].concat([]))];return t&&s.unshift(n.createElement("title",null,t)),n.createElement.apply(n,["svg",a].concat(s))}s.propTypes={"aria-label":a().string,className:a().string,style:a().object};const i=s},15410:(e,t,o)=>{o.d(t,{Z:()=>i});var l=o(45697),a=o.n(l),n=o(67294),r=o(17845);function s(e){const t=e["aria-label"],o=e.className,l=e.style,a={viewBox:"0 0 560 560",xmlns:"http://www.w3.org/2000/svg",id:"plex-icon-toolbar-play-radio-560"};a["aria-hidden"]=!t,a.style=l,a.className=r.Z.plexIcon+(o?" "+o:"");const s=[n.createElement.apply(n,["path",{d:"M110.261 141.816c10.962-9.751 23.79-2.335 27.765 1.703 6.308 6.406 5.837 12.744 4.377 15.806-1.084 2.277-2.431 4.378-5.35 8.026-14.104 16.536-24.074 34.046-31.37 53.986-11.672 32.101-13.132 68.334-4.377 101.894 6.809 24.804 18.724 47.42 35.505 67.362 3.89 4.377 4.863 5.836 5.836 8.997.486 1.703.486 6.566-.244 8.755-1.459 4.62-4.863 8.269-9.727 9.97-1.216.487-14.377 4.39-23.144-2.43-1.46-.974-6.81-7.055-10.7-12.16-22.617-28.94-36.964-63.472-41.342-100.191-1.944-15.32-1.944-32.587-.243-47.908 4.621-39.639 20.67-76.846 46.448-107.243 3.892-4.621 4.657-4.867 6.566-6.566v-.001zm64.42 62.012c7.215-8.421 19.942-12.966 29.868-4.504 9.925 8.46 6.895 19.095 2.76 24.445-10.942 13.132-17.265 27.48-19.697 44.503-.486 3.89-.729 13.131-.243 17.509 1.459 18.725 8.511 35.262 20.67 49.61 3.162 3.647 4.62 6.322 4.864 10.455.486 7.054-4.395 13.258-11.186 15.565-14.348 4.871-23.388-2.675-28.494-8.754-20.671-25.778-29.426-58.608-24.562-91.681 3.161-20.914 12.067-40.863 26.02-57.148zM277.67 323.667c-11.548-.562-21.407-5.058-29.575-12.926-8.732-8.992-12.957-19.389-12.957-31.753 0-12.363 4.225-22.762 12.957-31.753 9.012-8.711 19.435-12.927 31.828-12.927 12.394 0 22.814 4.216 31.828 12.927 8.731 8.991 12.957 19.389 12.957 31.753s-4.226 22.76-12.957 31.753c-8.45 8.15-18.308 12.645-30.138 12.926-1.408.28-3.38.28-3.943 0zm172.069-181.852c1.91 1.7 2.675 1.946 6.566 6.566 25.777 30.399 41.827 67.606 46.448 107.244 1.701 15.321 1.701 32.587-.243 47.908-4.378 36.72-18.726 71.252-41.342 100.19-3.89 5.107-9.24 11.187-10.7 12.16-8.767 6.821-21.928 2.919-23.144 2.432-4.863-1.702-8.268-5.35-9.727-9.97-.73-2.19-.73-7.054-.244-8.755.973-3.162 1.946-4.621 5.836-8.998 16.78-19.941 28.696-42.557 35.505-67.361 8.755-33.56 7.295-69.794-4.376-101.894-7.297-19.941-17.267-37.451-31.372-53.987-2.918-3.648-4.265-5.748-5.35-8.026-1.459-3.062-1.93-9.4 4.378-15.806 3.975-4.037 16.802-11.454 27.765-1.703zm-64.576 62.013c13.953 16.284 22.86 36.234 26.021 57.148 4.864 33.073-3.89 65.902-24.561 91.68-5.107 6.079-14.147 13.626-28.495 8.754-6.792-2.306-11.672-8.511-11.186-15.564.243-4.134 1.702-6.81 4.863-10.456 12.16-14.348 19.212-30.885 20.67-49.61.487-4.378.244-13.618-.242-17.509-2.431-17.023-8.755-31.37-19.698-44.503-4.134-5.35-7.163-15.984 2.761-24.445 9.926-8.461 22.652-3.917 29.867 4.505z"}].concat([]))];return t&&s.unshift(n.createElement("title",null,t)),n.createElement.apply(n,["svg",a].concat(s))}s.propTypes={"aria-label":a().string,className:a().string,style:a().object};const i=s},26861:(e,t,o)=>{o.d(t,{Z:()=>i});var l=o(45697),a=o.n(l),n=o(67294),r=o(17845);function s(e){const t=e["aria-label"],o=e.className,l=e.style,a={viewBox:"0 0 560 560",xmlns:"http://www.w3.org/2000/svg",strokeMiterlimit:"1.414",strokeLinejoin:"round",id:"plex-icon-toolbar-play-trailer-560"};a["aria-hidden"]=!t,a.style=l,a.className=r.Z.plexIcon+(o?" "+o:"");const s=[n.createElement.apply(n,["path",{d:"m225.671 503.994c-.557.004-1.114.006-1.671.006-123.629 0-224-100.371-224-224 0-123.629 100.371-224 224-224 123.629 0 224 100.371 224 224 0 50.138-16.508 96.451-44.381 133.794 18.895-11.081 36.634-24.143 52.605-39.141 9.395-8.823 18.171-18.311 26.162-28.425 8.67-10.973 16.416-22.684 23.006-35.021 4.995-9.352 12.891-29.047 12.891-29.047l41.717 12.492c0 0-9.027 23.185-14.752 34.221-7.693 14.83-16.785 28.923-27.015 42.128-9.197 11.871-19.311 23.024-30.164 33.401-8.779 8.393-18.041 16.28-27.702 23.641-8.554 6.519-17.421 12.626-26.548 18.316-4.487 2.797-9.037 5.493-13.644 8.088-32.896 18.526-68.648 31.851-105.499 39.964-29.172 6.423-59.044 9.582-89.005 9.589l0-.006m-64.671-104.994c0 34.771 28.229 63 63 63 34.771 0 63-28.229 63-63 0-34.771-28.229-63-63-63-34.771 0-63 28.229-63 63m119-119c0 34.771 28.229 63 63 63 34.771 0 63-28.229 63-63 0-34.771-28.229-63-63-63-34.771 0-63 28.229-63 63m-238 0c0 34.771 28.229 63 63 63 34.771 0 63-28.229 63-63 0-34.771-28.229-63-63-63-34.771 0-63 28.229-63 63m154 0c0 15.454 12.546 28 28 28 15.454 0 28-12.546 28-28 0-15.454-12.546-28-28-28-15.454 0-28 12.546-28 28m-35-119c0 34.771 28.229 63 63 63 34.771 0 63-28.229 63-63 0-34.771-28.229-63-63-63-34.771 0-63 28.229-63 63"}].concat([]))];return t&&s.unshift(n.createElement("title",null,t)),n.createElement.apply(n,["svg",a].concat(s))}s.propTypes={"aria-label":a().string,className:a().string,style:a().object};const i=s},10444:(e,t,o)=>{o.d(t,{Z:()=>i});var l=o(45697),a=o.n(l),n=o(67294),r=o(17845);function s(e){const t=e["aria-label"],o=e.className,l=e.style,a={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",id:"plex-icon-toolbar-remove-from-watchlist-560"};a["aria-hidden"]=!t,a.style=l,a.className=r.Z.plexIcon+(o?" "+o:"");const s=[n.createElement.apply(n,["path",{clipRule:"evenodd",d:"M42 6.15892C42 4.72113 40.8409 3.59998 39.411 3.59998H8.58903C7.15701 3.59998 6 4.74565 6 6.15892V42.9571C6 44.3949 6.90879 44.8173 8.02984 43.9554L21.9702 33.2377C23.0826 32.3824 24.9088 32.3758 26.0298 33.2377L39.9702 43.9554C41.0826 44.8107 42 44.3704 42 42.9571V6.15892ZM21.4545 18L17.6361 14.1816L20.1817 11.636L24.0001 15.4544L27.8184 11.636L30.364 14.1816L26.5456 18L30.364 21.8183L27.8184 24.3639L24.0001 20.5456L20.1817 24.3639L17.6361 21.8184L21.4545 18Z"}].concat([]))];return t&&s.unshift(n.createElement("title",null,t)),n.createElement.apply(n,["svg",a].concat(s))}s.propTypes={"aria-label":a().string,className:a().string,style:a().object};const i=s},26984:(e,t,o)=>{o.d(t,{Z:()=>i});var l=o(45697),a=o.n(l),n=o(67294),r=o(17845);function s(e){const t=e["aria-label"],o=e.className,l=e.style,a={viewBox:"0 0 560 560",xmlns:"http://www.w3.org/2000/svg",strokeMiterlimit:"1.414",strokeLinejoin:"round",id:"plex-icon-toolbar-shuffle-560"};a["aria-hidden"]=!t,a.style=l,a.className=r.Z.plexIcon+(o?" "+o:"");const s=[n.createElement.apply(n,["path",{d:"m448 441l-44.423 0c-65.833 0-103.843-28.598-141.383-96.109 5.44-10.89 10.99-22.734 16.727-35.594 3.556-7.986 4.181-9.387 5.622-12.617 36.245 74.928 65.419 102.32 119.034 102.32l44.423 0 0-77 112 98-112 98 0-77m0-322l0-77 112 98-112 98 0-77-44.423 0c-59.257 0-88.657 33.459-130.747 127.573-1.427 3.191-3.342 7.493-6.695 15.02-44.459 99.657-75.473 137.407-142.558 137.407l-95.577 0 0-42 95.577 0c43.602 0 66.367-27.71 104.202-112.518 3.333-7.485 5.267-11.827 6.711-15.055 48.4-108.225 87.24-152.427 169.087-152.427l44.423 0m-324.423 0c56.809 0 87.751 27.071 122.897 95.883-7.743 14.34-15.519 30.301-23.497 48.005-35.031-76.511-57.674-101.888-99.4-101.888l-95.577 0 0-42 95.577 0"}].concat([]))];return t&&s.unshift(n.createElement("title",null,t)),n.createElement.apply(n,["svg",a].concat(s))}s.propTypes={"aria-label":a().string,className:a().string,style:a().object};const i=s},39543:(e,t,o)=>{o.d(t,{Z:()=>i});var l=o(45697),a=o.n(l),n=o(67294),r=o(17845);function s(e){const t=e["aria-label"],o=e.className,l=e.style,a={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 560 560",id:"plex-icon-toolbar-sync-filled-560"};a["aria-hidden"]=!t,a.style=l,a.className=r.Z.plexIcon+(o?" "+o:"");const s=[n.createElement.apply(n,["path",{d:"M280 518C148.6 518 42 411.4 42 280S148.6 42 280 42s238 106.6 238 238-106.6 238-238 238m0-112l112-112h-89.6V154h-44.8v140H168l112 112"}].concat([]))];return t&&s.unshift(n.createElement("title",null,t)),n.createElement.apply(n,["svg",a].concat(s))}s.propTypes={"aria-label":a().string,className:a().string,style:a().object};const i=s}}]);