(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"7qL+":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return S}));var n=a("TSYQ"),r=a.n(n),o=a("q1tI"),i=a.n(o),s=a("/MKj"),d=a("0jae"),g=a("wAGh"),l=a("Vx1m"),c=a("rfp9"),u=a("G4qV");var A=Object(u.a)((function(e){return e.deviceSettings}),e=>e.remotePlayer,(e,t)=>t?t.volume:e.volume),E=a("dz8L"),f=a("//Cn"),m=a("ffMF");const p=["af","am","ar","ar_eg","ar_sa","eu","be","bn","bg","ca","zh","zh_cn","zh_hk","zh_tw","hr","cs","da","nl","en","en_au","en_ca","en_gb","en_ie","en_in","en_sg","en_za","et","fa","fil","fi","fr","fr_ca","fr_ch","gl","de","de_at","el","gu","he","hi","hu","is","id","it","ja","kn","ko","lo","lv","ln","lt","ms","ml","mr","no","pl","pt","pt_br","pt_pt","ro","ru","sr","sk","sl","es","es_419","es_ar","es_cl","es_co","es_cr","es_do","es_ec","es_sv","es_gt","es_hn","es_mx","es_ni","es_pa","es_pe","es_pr","es_py","es_us","es_uy","es_ve","sw","sv","gsw","tl","ta","te","th","tr","uk","ur","vi","zu"];var O=Object(u.a)(m.a,e=>function(e){const t=e.toLowerCase().replace(/-/g,"_");return p.includes(t)?t:"en"}(e)),v=a("dsvT"),w=a("tRmQ");var b=a("+X4A");function y(e){const t=Math.round(e%3600),a=Math.floor(e/3600),n=Math.floor(t/60),r=t%60;return`${String(a).padStart(2,"0")}:${String(n).padStart(2,"0")}:${String(r).padStart(2,"0")} (${e}s)`}function j(e){return t=>{var a,n;const r=t,o=t;try{const e=null==(a=r.getAdData)?void 0:a.call(r),t=(null==e?void 0:e.adError)||(null==(n=o.getError)?void 0:n.call(o));if(t){const e={message:t.getMessage(),errorCode:t.getErrorCode(),vastErrorCode:t.getVastErrorCode()};d.a.error("[IMA SDK] Error: %s from event %s: %o",t.getType(),r.type,e)}else Object(w.a)()&&function(e){var t,a;const n=null==(t=e.getAd)?void 0:t.call(e),r=null==(a=e.getAdData)?void 0:a.call(e),o=null==n?void 0:n.getAdPodInfo();if(o)try{const t={adPosition:o.getAdPosition(),isBumper:o.getIsBumper(),maxDuration:o.getMaxDuration(),podIndex:o.getPodIndex(),timeOffset:o.getTimeOffset(),totalAds:o.getTotalAds()};Object(d.a)("[IMA SDK] Event %s (adPodInfo): %o",e.type,t)}catch(e){d.a.warn("[IMA SDK] Cannot log adPodInfo",null==e?void 0:e.message)}if(r&&Object(d.a)("[IMA SDK] Event %s (adData): %o",e.type,r),n)try{const t={adSystem:n.getAdSystem(),advertiserName:n.getAdvertiserName(),apiFramework:n.getApiFramework(),contentType:n.getContentType(),creativeAdId:n.getCreativeAdId(),creativeId:n.getCreativeId(),dealId:n.getDealId(),description:n.getDescription(),duration:n.getDuration(),height:n.getHeight(),mediaUrl:n.getMediaUrl(),minSuggestedDuration:n.getMinSuggestedDuration(),skipTimeOffset:n.getSkipTimeOffset(),surveyUrl:n.getSurveyUrl(),title:n.getTitle(),traffickingParameters:n.getTraffickingParameters(),traffickingParametersString:n.getTraffickingParametersString(),uiElements:n.getUiElements(),universalAdIdRegistry:n.getUniversalAdIdRegistry(),universalAdIdValue:n.getUniversalAdIdValue(),vastMediaHeight:n.getVastMediaHeight(),vastMediaWidth:n.getVastMediaWidth(),width:n.getWidth(),wrapperAdIds:n.getWrapperAdIds(),wrapperAdSystems:n.getWrapperAdSystems(),wrapperCreativeIds:n.getWrapperCreativeIds(),isLinear:n.isLinear()};Object(d.a)("[IMA SDK] Event %s (ad):",e.type,t)}catch(e){d.a.warn("[IMA SDK] Cannot log ad info",null==e?void 0:e.message)}}(r)}catch(e){d.a.warn("[IMA SDK] Event:",null==r?void 0:r.type,null==e?void 0:e.message)}e(t)}}var T=a("Rg7N"),M=a.n(T);function S({edgeGutterX:e,edgeGutterY:t,height:a,isFullscreen:n,isIdle:u,isMiniPlayer:m,isStackedAbove:p,placement:T,playerType:S,statusOverlayClassName:h,url:I,width:D,onAdChange:_,onPositionMillisecondsChange:L}){const C=Object(s.c)(),[R,P]=Object(o.useState)(void 0),[k,N]=Object(o.useState)(),[U,V]=Object(o.useState)(null),[G,F]=Object(E.a)(),[W,x]=Object(o.useState)(l.b),[z,K]=Object(o.useState)(l.c),[B,$]=Object(o.useState)(l.d),q=Object(s.d)(Object(f.a)(S,"durationSeconds")),H=Object(s.d)(Object(f.a)(S,"isPaused")),Q=Object(s.d)(O),J=Object(s.d)(Object(f.a)(S,"positionSeconds")),Y=Object(s.d)(A),X=function(e,t,a=!0){const n=Object(o.useRef)({currentTime:e,duration:t});return Object(o.useEffect)(()=>{a&&e>=0&&(n.current.currentTime=e)},[a,e]),Object(o.useEffect)(()=>{a&&t>=0&&(n.current.duration=t)},[a,t]),n.current}(J,q,!u),Z=function(e,t,a,n){const[r,i]=Object(o.useState)();return Object(o.useEffect)(()=>{if(!t)return;const r=j(e=>{const t=e.getError();n(new Error(t.getMessage()))}),o=j(e=>{Object(w.a)()&&Object(d.a)("[IMA] Creating AdsManager"),i(e.getAdsManager(a))}),s=new window.google.ima.AdsRequest;return s.adTagUrl=b.default.join(e,{vpaid:1}),s.forceNonLinearFullSlot=!0,s.linearAdSlotWidth=1280,s.linearAdSlotHeight=720,s.setAdWillAutoPlay(!0),s.setAdWillPlayMuted(!1),t.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR,r),t.addEventListener(window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,o),Object(w.a)()&&Object(d.a)("[IMA] Loading ads:",s.adTagUrl),t.requestAds(s),()=>{t.removeEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR,r),t.removeEventListener(window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,o)}},[t,a,e,n]),Object(o.useEffect)(()=>{if(!r)return;const e=j(t=>{r.removeEventListener(t.type,e),Object(w.a)()&&Object(d.a)("[IMA] Enabling preloading");const a=new window.google.ima.AdsRenderingSettings;a.enablePreloading=!0,r.updateAdsRenderingSettings(a)});return Object(w.a)()&&Object(d.a)("[IMA] Starting AdsManager"),Object(w.a)()&&Object(d.a)("[IMA] CuePoints:",r.getCuePoints().map(y).join(", ")),r.addEventListener(window.google.ima.AdEvent.Type.LOADED,e),r.init(1280,720,window.google.ima.ViewMode.NORMAL),r.start(),()=>{r.removeEventListener(window.google.ima.AdEvent.Type.LOADED,e),Object(w.a)()&&Object(d.a)("[IMA] Destroying AdsManager"),r.destroy()}},[r]),r}(I,function(e){const[t,a]=Object(o.useState)();return Object(o.useEffect)(()=>{e&&(Object(w.a)()&&Object(d.a)("[IMA] Creating AdsLoader"),a(new window.google.ima.AdsLoader(e)))},[e]),Object(o.useEffect)(()=>()=>{t&&(Object(w.a)()&&Object(d.a)("[IMA] Destroying AdsLoader"),t.destroy())},[t]),t}(function(e){const[t,a]=Object(o.useState)();return Object(o.useEffect)(()=>{e&&(Object(w.a)()&&Object(d.a)("[IMA] Creating AdDisplayContainer"),a(new window.google.ima.AdDisplayContainer(e)))},[e]),Object(o.useEffect)(()=>(t&&(Object(w.a)()&&Object(d.a)("[IMA] Initializing AdDisplayContainer"),t.initialize()),()=>{t&&(Object(w.a)()&&Object(d.a)("[IMA] Destroying AdDisplayContainer"),t.destroy())}),[t]),t}(U)),X,N),ee=Object(o.useCallback)(e=>{V(e)},[]);Object(o.useEffect)(()=>{Object(w.a)()&&Object(d.a)("[IMA] Setting locale",Q),window.google.ima.settings.setLocale(Q)},[Q]),Object(o.useEffect)(()=>{void 0!==R&&(null===R?(x(l.b),K(l.c),N(void 0),$(l.d)):(x(R.displayIndex),K(R.displayTotal)),Object(w.a)()&&Object(d.a)("[IMA] Changing ad to",R),_(R))},[R,_]),Object(o.useEffect)(()=>{k&&(d.a.error("[IMA] Error",...function(e){if(function(e){const t=e;return!!(t.getMessage||t.getErrorCode||t.getVastErrorCode)}(e)){const t=e;let a,n,r;try{n=t.getMessage()}catch(e){d.a.error("[IMA] error getting message from AdError",e.message)}try{a=t.getErrorCode()}catch(e){d.a.error("[IMA] error getting error code from AdError",e.message)}try{r=t.getVastErrorCode()}catch(e){d.a.error("[IMA] error getting VAST error code from AdError",e.message)}return[n||"Unknown error",`(IMA:${a}, VAST:${r})`]}return[e.message]}(k)),null===R?_(null):P(null))},[R,k,_]),Object(o.useEffect)(()=>{null==Z||Z.setVolume(Y/100)},[Z,Y]),Object(o.useEffect)(()=>{null==Z||Z.resize(F.width||1280,F.height||720,n?google.ima.ViewMode.FULLSCREEN:google.ima.ViewMode.NORMAL)},[Z,n,F]),Object(o.useEffect)(()=>{H?null==Z||Z.pause():null==Z||Z.resume()},[Z,H]),Object(o.useEffect)(()=>{const e=j(e=>{var t;const a=e.getAd(),n=null==a?void 0:a.getAdPodInfo();switch(e.type){case window.google.ima.AdEvent.Type.AD_BUFFERING:C(Object(g.N)({playerType:S,isBuffering:!0}));break;case window.google.ima.AdEvent.Type.AD_PROGRESS:C(Object(g.N)({playerType:S,isBuffering:!1})),L(1e3*e.getAdData().currentTime);break;case window.google.ima.AdEvent.Type.ALL_ADS_COMPLETED:case window.google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:P(null);break;case window.google.ima.AdEvent.Type.LOADED:$(null!=(t=null==n?void 0:n.getTimeOffset())?t:-1);break;case window.google.ima.AdEvent.Type.STARTED:H&&(null==Z||Z.pause()),P(function(e){if(!e)return null;const t=e.getAdPodInfo();return{clicksThrough:!0,displayIndex:t.getAdPosition(),displayTotal:t.getTotalAds(),duration:e.getDuration(),height:e.getHeight(),mimeType:e.getContentType(),timeOffset:t.getTimeOffset(),width:e.getWidth()}}(a));break;case window.google.ima.AdEvent.Type.LOG:{const t=e.getAdData().adError;t&&1009===t.getErrorCode()&&(d.a.warn("[IMA] Manually handling empty VAST"),N(t));break}}}),t=[window.google.ima.AdEvent.Type.AD_BUFFERING,window.google.ima.AdEvent.Type.AD_PROGRESS,window.google.ima.AdEvent.Type.ALL_ADS_COMPLETED,window.google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,window.google.ima.AdEvent.Type.LOADED,window.google.ima.AdEvent.Type.LOG,window.google.ima.AdEvent.Type.STARTED,window.google.ima.AdEvent.Type.COMPLETE,window.google.ima.AdEvent.Type.IMPRESSION];return t.forEach(t=>{null==Z||Z.addEventListener(t,e)}),()=>{t.forEach(t=>{null==Z||Z.removeEventListener(t,e)})}},[Z,C,H,L,S]),Object(o.useEffect)(()=>{const e=j(e=>{N(e.getError())});return null==Z||Z.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR,e),()=>{null==Z||Z.removeEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR,e)}},[Z]);const te=Object(c.a)(a,D,T,e,t,p);return i.a.createElement("div",{style:te},i.a.createElement("div",{className:r()(M.a.adContainer,null===R?M.a.hasNoAd:M.a.hasAd),ref:Object(v.a)(ee,G)}),m?null:i.a.createElement(l.a,{className:h,displayIndex:W,displayTotal:z,secondsUntilAd:B-J}))}},Rg7N:function(e,t,a){e.exports={adContainer:"ImaPlayer-adContainer-3TV3nf",hasAd:"ImaPlayer-hasAd-2F2ApA",hasNoAd:"ImaPlayer-hasNoAd-1hWYtJ"}}}]);