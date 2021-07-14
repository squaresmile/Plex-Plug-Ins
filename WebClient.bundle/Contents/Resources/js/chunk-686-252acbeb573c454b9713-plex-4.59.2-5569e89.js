(self.webpackChunkplex_web_client=self.webpackChunkplex_web_client||[]).push([[686],{63686:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Z});var n=r(67294),i=r(81123),s=r(16475),o=r(96242),a=r(32377),c=r(19755),l=r.n(c),d=r(15633);const u=new Map;var h=r(96840);const p=function(e){let t=!1;return function(...e){if(!t)return t=!0,(e=>{e.polyfill.installAll()})(...e)}}();var f=r(5562),m=Object.defineProperty,E=Object.prototype.hasOwnProperty,g=Object.getOwnPropertySymbols,y=Object.prototype.propertyIsEnumerable,C=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;class v extends n.Component{constructor(){super(...arguments),this.onTimeout=()=>{const{positionSeconds:e,durationSeconds:t,onEnd:r}=this.props,n=t-e;h.Z.warn("[Player] Manually ending while stalled within the last %ss.",n),this.props.onBufferingChange&&this.props.onBufferingChange(!1),r()}}componentDidUpdate(e){const{healthCheckSecondsFromEnd:t,positionSeconds:r,durationSeconds:n,paused:i,onEnd:s}=this.props;let o=!1;s&&n>0&&r>=n&&(o=!0,s());const a=r!==e.positionSeconds,c=i&&i!==e.paused,l=o||a||c;this._timeoutID&&l&&window.clearTimeout(this._timeoutID);const d=n-r;if(n>0&&s&&!o&&!i&&d>=0&&d<t){const e=Math.round(1e3*d)+250;window.clearTimeout(this._timeoutID),this._timeoutID=window.setTimeout(this.onTimeout,e)}}componentWillUnmount(){this._timeoutID&&window.clearTimeout(this._timeoutID)}render(){const e=this.props,{mediaComponent:t}=e,r=((e,t)=>{var r={};for(var n in e)E.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&g)for(var n of g(e))t.indexOf(n)<0&&y.call(e,n)&&(r[n]=e[n]);return r})(e,["mediaComponent"]);return n.createElement(t,((e,t)=>{for(var r in t||(t={}))E.call(t,r)&&C(e,r,t[r]);if(g)for(var r of g(t))y.call(t,r)&&C(e,r,t[r]);return e})({},r))}}const R=v;var w=r(54611),_=Object.defineProperty,b=Object.prototype.hasOwnProperty,T=Object.getOwnPropertySymbols,A=Object.prototype.propertyIsEnumerable,P=(e,t,r)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,S=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&P(e,r,t[r]);if(T)for(var r of T(t))A.call(t,r)&&P(e,r,t[r]);return e};const{Category:O,Code:I,Severity:M}=i.util.Error;let L;function k(e){switch(e){case O.NETWORK:return(0,f.Z)("Network");case O.TEXT:return(0,f.Z)("Text");case O.MEDIA:return(0,f.Z)("Media");case O.MANIFEST:return(0,f.Z)("Manifest");case O.STREAMING:return(0,f.Z)("Streaming");case O.DRM:return(0,f.Z)("DRM");case O.PLAYER:return(0,f.Z)("Player");case O.CAST:return(0,f.Z)("Cast");case O.STORAGE:return(0,f.Z)("Storage");default:return(0,f.Z)("Unknown")}}function D(e,t){const r={},n=s.Z[e.drm];let i;return n===a.FAIRPLAY&&(r.fairPlayTransform=!1,r.advanced={[n]:{serverCertificate:t}}),n&&(i=S(S({},r),{servers:{[n]:e.license}})),i}class N extends n.Component{constructor(e,t){super(e,t),this.onNetworkEngineRequest=(e,t)=>{if(e===i.net.NetworkingEngine.RequestType.LICENSE)switch(this.props.drm){case o.PLAYREADY:delete t.headers.SOAPAction}},this.onFetchCertificateResolved=e=>{const{url:t,certificate:r}=e;this._serverCertificate=r,h.Z.warn("[Player] Server certificate request succeeded: %s",t),this.tryLoadMedia()},this.onFetchCertificateRejected=e=>{const{isCanceled:t,url:r,status:n}=e;t||(h.Z.warn("[Player] Server certificate request failed (%d): %s",n,r),this._serverCertificate="invalid",this.tryLoadMedia())},this.onElementChange=e=>{this._mediaElement=e,this.tryLoadMedia()},this.onHTMLError=()=>{},this.onBufferingChange=({buffering:e})=>{},this.onError=({detail:e={}})=>{if(this._hasUnmounted)return;const{category:t,code:r,severity:n}=e,i=function(e){return[`s${e.code} (${k(e.category)})`].concat(function(e){const{code:t,data:r}=e;switch(t){case I.BAD_HTTP_STATUS:return[`URI: ${r[0]}`,r[1]?`Status code: ${r[1]}`:null,r[2]?`Response text: ${r[2]}`:null,r[3]?`Response headers: ${JSON.stringify(r[3],null,2)}`:null,r[4]?`NetworkingEngine.RequestType: ${r[4]}`:null];case I.MEDIA_SOURCE_OPERATION_FAILED:return[`MediaError code: ${r[0]}`];case I.MEDIA_SOURCE_OPERATION_THREW:return[`DOMException ${r[0].name}: ${r[0].message}`];case I.VIDEO_ERROR:return[`MediaError code: ${r[0]}`,r[1]?`Edge/IE Error code: ${r[1]}`:null,r[2]?`Chrome error details: ${r[2]}`:null];case I.INIT_DATA_TRANSFORM_ERROR:return[`Exception ${r[0].name}: ${r[0].message}`]}}(e)).filter((e=>e)).join(" – ")}(e);let s=n;t===O.DRM&&r===I.INIT_DATA_TRANSFORM_ERROR&&n===M.CRITICAL&&(s=M.RECOVERABLE),s===M.CRITICAL?(h.Z.warn(`[Player] A critical Shaka error occurred: ${i}; the player cannot recover`),this.props.onError&&this.props.onError({code:`s${r}`,category:k(t)})):s===M.RECOVERABLE?h.Z.warn(`[Player] A Shaka error occurred: ${i}; the player will attempt to recover`):h.Z.warn(`[Player] A Shaka error occurred: ${i}; the severity is unknown`)},p(i),L||(L=new i.Player),this.state={isReadyToPlay:!1},this._mediaElement,this._serverCertificate,this._serverCertificateCancelable}componentDidMount(){const{certificate:e}=this.props;e&&(this._serverCertificateCancelable=function({url:e}){const t=l().Deferred();if(u.has(e))t.resolve({url:e,certificate:u.get(e)});else{const r=new window.XMLHttpRequest,n=()=>{r.removeEventListener("error",i,!1),r.removeEventListener("load",s,!1)},i=r=>{const{status:i}=r.target;n(),t.reject({url:e,status:i})},s=r=>{const{response:i,status:s}=r.target;if(n(),200===s){const r=new Uint8Array(i);t.resolve({url:e,certificate:r})}else t.reject({url:e,status:s})};r.responseType="arraybuffer",r.addEventListener("error",i,!1),r.addEventListener("load",s,!1),r.open("GET",e,!0),r.send()}return(0,d.Z)(t.promise())}({url:e}),this._serverCertificateCancelable.promise.then(this.onFetchCertificateResolved,this.onFetchCertificateRejected))}componentWillUnmount(){this._hasUnmounted=!0,this._resetPrePlaybackFields(),L&&(L.getNetworkingEngine().unregisterRequestFilter(this.onNetworkEngineRequest),L.resetConfiguration(),L.removeEventListener("buffering",this.onBufferingChange),L.removeEventListener("error",this.onError),L.detach(),L.unload())}_resetPrePlaybackFields(){this._serverCertificateCancelable&&(this._serverCertificateCancelable.cancel(),delete this._serverCertificateCancelable),delete this._mediaElement,delete this._serverCertificate}tryLoadMedia(){const{_mediaElement:e,_serverCertificate:t}=this,r=this.props.drm===o.FAIRPLAY;!e||r&&!t||(this._resetPrePlaybackFields(),this.loadMedia({mediaElement:e,serverCertificate:t}))}loadMedia({mediaElement:e,serverCertificate:t}){const r={streaming:{bufferingGoal:this.props.bufferingGoal,jumpLargeGaps:!0,retryParameters:{maxAttempts:1/0,timeout:1e4},stallSkip:.1},abr:{defaultBandwidthEstimate:this.props.defaultBandwidthEstimate},drm:D(this.props,t)};L.configure(r),L.attach(e),L.addEventListener("buffering",this.onBufferingChange),L.addEventListener("error",this.onError),L.getNetworkingEngine().registerRequestFilter(this.onNetworkEngineRequest),L.load(this.props.src,this.props.positionSeconds).then((()=>{L&&this.setState({isReadyToPlay:!0})}),(e=>{L&&this.onError({detail:e})}))}render(){return n.createElement(R,S(S({},this.props),{healthCheckSecondsFromEnd:this.props.bufferingGoal,mediaComponent:w.Z,isReadyToPlay:this.state.isReadyToPlay,onElementChange:this.onElementChange,onError:this.onHTMLError}))}}N.displayName="ShakaMedia",N.defaultProps=S(S({},w.Z.defaultProps),{bufferingGoal:70});const Z=N}}]);