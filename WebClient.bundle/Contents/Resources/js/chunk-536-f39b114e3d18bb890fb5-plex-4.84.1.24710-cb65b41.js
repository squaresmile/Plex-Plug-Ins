"use strict";(self.webpackChunkplex_web_client=self.webpackChunkplex_web_client||[]).push([[536],{39536:(r,e,t)=>{t.r(e),t.d(e,{default:()=>T});var s=t(67631),a=t.n(s),E=t(67294),o=t(86832),i=t(73788),R=t(75463),l=Object.defineProperty,c=Object.defineProperties,_=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,D=(r,e,t)=>e in r?l(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;function A(r){switch(r.details){case a().ErrorDetails.MANIFEST_LOAD_ERROR:case a().ErrorDetails.MANIFEST_LOAD_TIMEOUT:case a().ErrorDetails.MANIFEST_PARSING_ERROR:return(0,i.Z)("Manifest");case a().ErrorDetails.LEVEL_EMPTY_ERROR:case a().ErrorDetails.LEVEL_LOAD_ERROR:case a().ErrorDetails.LEVEL_LOAD_TIMEOUT:case a().ErrorDetails.AUDIO_TRACK_LOAD_ERROR:case a().ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:case a().ErrorDetails.FRAG_LOAD_ERROR:case a().ErrorDetails.FRAG_LOAD_TIMEOUT:case a().ErrorDetails.KEY_LOAD_ERROR:case a().ErrorDetails.KEY_LOAD_TIMEOUT:return(0,i.Z)("Network");case a().ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR:case a().ErrorDetails.FRAG_DECRYPT_ERROR:case a().ErrorDetails.FRAG_PARSING_ERROR:case a().ErrorDetails.BUFFER_ADD_CODEC_ERROR:case a().ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR:case a().ErrorDetails.BUFFER_APPEND_ERROR:case a().ErrorDetails.BUFFER_APPENDING_ERROR:case a().ErrorDetails.BUFFER_STALLED_ERROR:case a().ErrorDetails.BUFFER_FULL_ERROR:case a().ErrorDetails.BUFFER_SEEK_OVER_HOLE:case a().ErrorDetails.BUFFER_NUDGE_ON_STALL:return(0,i.Z)("Media");case a().ErrorDetails.REMUX_ALLOC_ERROR:case a().ErrorDetails.LEVEL_SWITCH_ERROR:case a().ErrorDetails.INTERNAL_EXCEPTION:return(0,i.Z)("Player")}}class L extends E.Component{constructor(r,e){super(r,e),this.onElementChange=r=>{this._hls=new(a())({maxMaxBufferLength:30}),this._hls.on(a().Events.MEDIA_ATTACHED,this.onMediaAttached),this._hls.on(a().Events.MANIFEST_PARSED,this.onManifestParsed),this._hls.on(a().Events.ERROR,this.onError),this._hls.attachMedia(r)},this.onHTMLError=()=>{},this.onMediaAttached=()=>{this._hls.loadSource(this.props.src)},this.onManifestParsed=()=>{this.setState({isReadyToPlay:!0})},this.onError=(r,e)=>{const{type:t,details:s,fatal:E}=e,i=s;E&&t===a().ErrorTypes.NETWORK_ERROR?(o.Z.warn(`[Player] A critical HLSjs network error occurred: ${i}; the player will restart the load`),this._hls.startLoad()):E&&t===a().ErrorTypes.MEDIA_ERROR?(o.Z.warn(`[Player] A critical HLSjs media error occurred: ${i}; the player will attempt to recover`),this._hls.recoverMediaError()):E?(o.Z.warn(`[Player] A critical HLSjs error occurred: ${i}; the player cannot recover`),this.props.onError&&this.props.onError({category:A(e)})):o.Z.warn(`[Player] A non-critical HLSjs error occurred: ${i}`)},this.state={isReadyToPlay:!1}}componentWillUnmount(){this._hls.detachMedia(),this._hls.destroy(),this._hls=null}render(){return E.createElement(R.Z,(r=((r,e)=>{for(var t in e||(e={}))O.call(e,t)&&D(r,t,e[t]);if(n)for(var t of n(e))h.call(e,t)&&D(r,t,e[t]);return r})({},this.props),e={isReadyToPlay:this.state.isReadyToPlay,onElementChange:this.onElementChange,onHTMLError:this.onHTMLError},c(r,_(e))));var r,e}}const T=L}}]);