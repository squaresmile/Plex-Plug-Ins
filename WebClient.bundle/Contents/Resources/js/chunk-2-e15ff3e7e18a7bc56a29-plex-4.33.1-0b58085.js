(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"7qL+":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var r=a("gcR/"),n=a.n(r),o=a("q1tI"),i=a.n(o),d=a("/MKj"),s=a("bzgy"),g=a("ZwMC"),l=a("DcPB"),u=a("uKy9"),A=a("zvMH"),c=a("G4qV");var v=Object(c.a)((function(e){return e.deviceSettings}),e=>e.remotePlayer,(e,t)=>t?t.volume:e.volume),E=a("//Cn"),m=a("x5Hs"),p=["af","am","ar","ar_eg","ar_sa","eu","be","bn","bg","ca","zh","zh_cn","zh_hk","zh_tw","hr","cs","da","nl","en","en_au","en_ca","en_gb","en_ie","en_in","en_sg","en_za","et","fa","fil","fi","fr","fr_ca","fr_ch","gl","de","de_at","el","gu","he","hi","hu","is","id","it","ja","kn","ko","lo","lv","ln","lt","ms","ml","mr","no","pl","pt","pt_br","pt_pt","ro","ru","sr","sk","sl","es","es_419","es_ar","es_cl","es_co","es_cr","es_do","es_ec","es_sv","es_gt","es_hn","es_mx","es_ni","es_pa","es_pe","es_pr","es_py","es_us","es_uy","es_ve","sw","sv","gsw","tl","ta","te","th","tr","uk","ur","vi","zu"];var w=Object(c.a)(m.a,e=>function(e){var t=e.toLowerCase().replace(/-/g,"_");return p.includes(t)?t:"en"}(e)),y=a("tRmQ"),{useEffect:f,useState:O}=i.a;var{useEffect:M,useState:T}=i.a;var h=a("PW1X");function b(e){var t=Math.floor(e/3600),a=Math.round(e%3600);return t+":"+Math.floor(a/60)+":"+a%60+" ("+e+"s)"}function D(e){return t=>{try{var a,r,n,o,i=null==(a=(r=t).getAdData)?void 0:a.call(r),d=(null==i?void 0:i.adError)||(null==(n=(o=t).getError)?void 0:n.call(o));if(d){var s={message:d.getMessage(),errorCode:d.getErrorCode(),vastErrorCode:d.getVastErrorCode()};g.a.error("[IMA SDK] Error: %s from event %s: %o",d.getType(),t.type,s)}else Object(y.a)()&&function(e){var t=null==e.getAd?void 0:e.getAd(),a=null==e.getAdData?void 0:e.getAdData(),r=null==t?void 0:t.getAdPodInfo();if(r)try{var n={adPosition:r.getAdPosition(),isBumper:r.getIsBumper(),maxDuration:r.getMaxDuration(),podIndex:r.getPodIndex(),timeOffset:r.getTimeOffset(),totalAds:r.getTotalAds()};Object(g.a)("[IMA SDK] Event %s (adPodInfo): %o",e.type,n)}catch(e){g.a.warn("[IMA SDK] Cannot log adPodInfo",null==e?void 0:e.message)}if(a&&Object(g.a)("[IMA SDK] Event %s (adData): %o",e.type,a),t)try{var o={adSystem:t.getAdSystem(),advertiserName:t.getAdvertiserName(),apiFramework:t.getApiFramework(),contentType:t.getContentType(),creativeAdId:t.getCreativeAdId(),creativeId:t.getCreativeId(),dealId:t.getDealId(),description:t.getDescription(),duration:t.getDuration(),height:t.getHeight(),mediaUrl:t.getMediaUrl(),minSuggestedDuration:t.getMinSuggestedDuration(),skipTimeOffset:t.getSkipTimeOffset(),surveyUrl:t.getSurveyUrl(),title:t.getTitle(),traffickingParameters:t.getTraffickingParameters(),traffickingParametersString:t.getTraffickingParametersString(),uiElements:t.getUiElements(),universalAdIdRegistry:t.getUniversalAdIdRegistry(),universalAdIdValue:t.getUniversalAdIdValue(),vastMediaHeight:t.getVastMediaHeight(),vastMediaWidth:t.getVastMediaWidth(),width:t.getWidth(),wrapperAdIds:t.getWrapperAdIds(),wrapperAdSystems:t.getWrapperAdSystems(),wrapperCreativeIds:t.getWrapperCreativeIds(),isLinear:t.isLinear()};Object(g.a)("[IMA SDK] Event %s (ad):",e.type,o)}catch(e){g.a.warn("[IMA SDK] Cannot log ad info",null==e?void 0:e.message)}}(t)}catch(e){g.a.warn("[IMA SDK] Event:",null==t?void 0:t.type,null==e?void 0:e.message)}e(t)}}var{useEffect:I,useState:_}=i.a;var{useEffect:S,useRef:j}=i.a;var C=a("Rg7N"),L=a.n(C),{useEffect:R,useState:P}=i.a;function k({edgeGutterX:e,edgeGutterY:t,height:a,isFullscreen:r,isIdle:o,isMiniPlayer:i,isStackedAbove:c,placement:m,playerType:p,statusOverlayClassName:C,url:k,width:N,onAdChange:U,onPositionMillisecondsChange:V}){var G=Object(d.c)(),W=P(void 0),z=W[1],x=W[0],F=P(),K=F[1],B=F[0],H=P(),q=H[1],J=H[0],Q=P(),X=Q[1],Y=Q[0],Z=P(A.b),$=Z[1],ee=Z[0],te=P(A.c),ae=te[1],re=te[0],ne=P(A.d),oe=ne[1],ie=ne[0],de=Object(d.d)(Object(E.a)(p,"durationSeconds")),se=Object(d.d)(Object(E.a)(p,"isPaused")),ge=Object(d.d)(w),le=Object(d.d)(Object(E.a)(p,"positionSeconds")),ue=Object(d.d)(v),Ae=function(e,t,a=!0){var r=j({currentTime:e,duration:t});return S(()=>{a&&e>=0&&(r.current.currentTime=e)},[a,e]),S(()=>{a&&t>=0&&(r.current.duration=t)},[a,t]),r.current}(le,de,!o),ce=function(e,t,a,r){var n=_(),o=n[1],i=n[0];return I(()=>{if(t){var n=D(e=>{var t=e.getError();r(new Error(t.getMessage()))}),i=D(e=>{Object(y.a)()&&Object(g.a)("[IMA] Creating AdsManager"),o(e.getAdsManager(a))}),d=new window.google.ima.AdsRequest;return d.adTagUrl=h.join(e,{vpaid:1}),d.forceNonLinearFullSlot=!0,d.linearAdSlotWidth=1280,d.linearAdSlotHeight=720,d.setAdWillAutoPlay(!0),d.setAdWillPlayMuted(!1),t.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR,n),t.addEventListener(window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,i),Object(y.a)()&&Object(g.a)("[IMA] Loading ads:",d.adTagUrl),t.requestAds(d),()=>{t.removeEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR,n),t.removeEventListener(window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,i)}}},[t,a,e,r]),I(()=>{if(i){var e=D(t=>{i.removeEventListener(t.type,e),Object(y.a)()&&Object(g.a)("[IMA] Enabling preloading");var a=new window.google.ima.AdsRenderingSettings;a.enablePreloading=!0,i.updateAdsRenderingSettings(a)});return Object(y.a)()&&Object(g.a)("[IMA] Starting AdsManager"),Object(y.a)()&&Object(g.a)("[IMA] CuePoints:",i.getCuePoints().map(b).join(", ")),i.addEventListener(window.google.ima.AdEvent.Type.LOADED,e),i.init(1280,720,window.google.ima.ViewMode.NORMAL),i.start(),()=>{i.removeEventListener(window.google.ima.AdEvent.Type.LOADED,e),Object(y.a)()&&Object(g.a)("[IMA] Destroying AdsManager"),i.destroy()}}},[i]),i}(k,function(e){var t=T(),a=t[1],r=t[0];return M(()=>{e&&(Object(y.a)()&&Object(g.a)("[IMA] Creating AdsLoader"),a(new window.google.ima.AdsLoader(e)))},[e]),M(()=>()=>{r&&(Object(y.a)()&&Object(g.a)("[IMA] Destroying AdsLoader"),r.destroy())},[r]),r}(function(e){var t=O(),a=t[1],r=t[0];return f(()=>{e&&(Object(y.a)()&&Object(g.a)("[IMA] Creating AdDisplayContainer"),a(new window.google.ima.AdDisplayContainer(e)))},[e]),f(()=>(r&&(Object(y.a)()&&Object(g.a)("[IMA] Initializing AdDisplayContainer"),r.initialize()),()=>{r&&(Object(y.a)()&&Object(g.a)("[IMA] Destroying AdDisplayContainer"),r.destroy())}),[r]),r}(J)),Ae,K);return R(()=>{Object(y.a)()&&Object(g.a)("[IMA] Setting locale",ge),window.google.ima.settings.setLocale(ge)},[ge]),R(()=>{void 0!==x&&(null===x?($(A.b),ae(A.c),K(void 0),oe(A.d)):($(x.displayIndex),ae(x.displayTotal)),Object(y.a)()&&Object(g.a)("[IMA] Changing ad to",x),U(x))},[x,U]),R(()=>{B&&(g.a.error("[IMA] Error",...function(e){if(function(e){var t=e;return!!(t.getMessage||t.getErrorCode||t.getVastErrorCode)}(e)){var t,a,r,n=e;try{a=n.getMessage()}catch(e){g.a.error("[IMA] error getting message from AdError",e.message)}try{t=n.getErrorCode()}catch(e){g.a.error("[IMA] error getting error code from AdError",e.message)}try{r=n.getVastErrorCode()}catch(e){g.a.error("[IMA] error getting VAST error code from AdError",e.message)}return[a||"Unknown error","(IMA:"+t+", VAST:"+r+")"]}return[e.message]}(B)),null===x?U(null):z(null))},[x,B,U]),R(()=>{null==ce||ce.setVolume(ue/100)},[ce,ue]),R(()=>{var e,t;null==ce||ce.resize(null!=(e=null==Y?void 0:Y.width)?e:1280,null!=(t=null==Y?void 0:Y.height)?t:720,r?google.ima.ViewMode.FULLSCREEN:google.ima.ViewMode.NORMAL)},[ce,r,Y]),R(()=>{se?null==ce||ce.pause():null==ce||ce.resume()},[ce,se]),R(()=>{var e=D(e=>{var t,a=e.getAd(),r=null==a?void 0:a.getAdPodInfo();switch(e.type){case window.google.ima.AdEvent.Type.AD_BUFFERING:G(Object(l.D)({playerType:p,isBuffering:!0}));break;case window.google.ima.AdEvent.Type.AD_PROGRESS:G(Object(l.D)({playerType:p,isBuffering:!1})),V(1e3*e.getAdData().currentTime);break;case window.google.ima.AdEvent.Type.ALL_ADS_COMPLETED:case window.google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:z(null);break;case window.google.ima.AdEvent.Type.LOADED:oe(null!=(t=null==r?void 0:r.getTimeOffset())?t:-1);break;case window.google.ima.AdEvent.Type.STARTED:z(function(e){if(!e)return null;var t=e.getAdPodInfo();return{clicksThrough:!0,displayIndex:t.getAdPosition(),displayTotal:t.getTotalAds(),duration:e.getDuration(),height:e.getHeight(),mimeType:e.getContentType(),width:e.getWidth()}}(a));break;case window.google.ima.AdEvent.Type.LOG:var n=e.getAdData().adError;n&&1009===n.getErrorCode()&&(g.a.warn("[IMA] Manually handling empty VAST"),K(n))}}),t=[window.google.ima.AdEvent.Type.AD_BUFFERING,window.google.ima.AdEvent.Type.AD_PROGRESS,window.google.ima.AdEvent.Type.ALL_ADS_COMPLETED,window.google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,window.google.ima.AdEvent.Type.LOADED,window.google.ima.AdEvent.Type.LOG,window.google.ima.AdEvent.Type.STARTED,window.google.ima.AdEvent.Type.COMPLETE,window.google.ima.AdEvent.Type.IMPRESSION];return t.forEach(t=>{null==ce||ce.addEventListener(t,e)}),()=>{t.forEach(t=>{null==ce||ce.removeEventListener(t,e)})}},[ce,G,V,p]),R(()=>{var e=D(e=>{K(e.getError())});return null==ce||ce.addEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR,e),()=>{null==ce||ce.removeEventListener(window.google.ima.AdErrorEvent.Type.AD_ERROR,e)}},[ce]),n()(u.a,{height:a,width:N,placement:m,edgeGutterX:e,edgeGutterY:t,isStackedAbove:c},void 0,n()(s.a,{className:(L.a.adContainer||"")+" "+((null===x?L.a.hasNoAd:L.a.hasAd)||""),onContainerRef:q,onMeasure:X}),i?null:n()(A.a,{className:C,displayIndex:ee,displayTotal:re,secondsUntilAd:ie-le}))}},Rg7N:function(e,t,a){e.exports={adContainer:"ImaPlayer-adContainer-3TV3nf",hasAd:"ImaPlayer-hasAd-2F2ApA",hasNoAd:"ImaPlayer-hasNoAd-1hWYtJ"}}}]);