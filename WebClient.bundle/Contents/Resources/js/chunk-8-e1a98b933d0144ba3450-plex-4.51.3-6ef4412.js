(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{redb:function(r,a,e){"use strict";e.r(a);var s=e("pVnL"),t=e.n(s),E=e("ulZh"),o=e.n(E),i=e("q1tI"),R=e.n(i),l=e("0jae"),n=e("66GW"),_=e("nHuJ");const c=R.a.createElement,{Component:h}=R.a;function D(r){switch(r.details){case o.a.ErrorDetails.MANIFEST_LOAD_ERROR:case o.a.ErrorDetails.MANIFEST_LOAD_TIMEOUT:case o.a.ErrorDetails.MANIFEST_PARSING_ERROR:return Object(n.default)("Manifest");case o.a.ErrorDetails.LEVEL_LOAD_ERROR:case o.a.ErrorDetails.LEVEL_LOAD_TIMEOUT:case o.a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:case o.a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:case o.a.ErrorDetails.FRAG_LOAD_ERROR:case o.a.ErrorDetails.FRAG_LOAD_TIMEOUT:case o.a.ErrorDetails.KEY_LOAD_ERROR:case o.a.ErrorDetails.KEY_LOAD_TIMEOUT:return Object(n.default)("Network");case o.a.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR:case o.a.ErrorDetails.FRAG_DECRYPT_ERROR:case o.a.ErrorDetails.FRAG_PARSING_ERROR:case o.a.ErrorDetails.BUFFER_ADD_CODEC_ERROR:case o.a.ErrorDetails.BUFFER_APPEND_ERROR:case o.a.ErrorDetails.BUFFER_APPENDING_ERROR:case o.a.ErrorDetails.BUFFER_STALLED_ERROR:case o.a.ErrorDetails.BUFFER_FULL_ERROR:case o.a.ErrorDetails.BUFFER_SEEK_OVER_HOLE:case o.a.ErrorDetails.BUFFER_NUDGE_ON_STALL:return Object(n.default)("Media");case o.a.ErrorDetails.REMUX_ALLOC_ERROR:case o.a.ErrorDetails.LEVEL_SWITCH_ERROR:case o.a.ErrorDetails.INTERNAL_EXCEPTION:return Object(n.default)("Player")}}a.default=class extends h{constructor(r,a){super(r,a),this._hls=void 0,this.onElementChange=r=>{this._hls=new o.a({maxMaxBufferLength:30}),this._hls.on(o.a.Events.MEDIA_ATTACHED,this.onMediaAttached),this._hls.on(o.a.Events.MANIFEST_PARSED,this.onManifestParsed),this._hls.on(o.a.Events.ERROR,this.onError),this._hls.attachMedia(r)},this.onHTMLError=()=>{},this.onMediaAttached=()=>{this._hls.loadSource(this.props.src)},this.onManifestParsed=()=>{this.setState({isReadyToPlay:!0})},this.onError=(r,a)=>{const{type:e,details:s,fatal:t}=a,E=s;t&&e===o.a.ErrorTypes.NETWORK_ERROR?(l.a.warn("[Player] A critical HLSjs network error occurred: "+E+"; the player will restart the load"),this._hls.startLoad()):t&&e===o.a.ErrorTypes.MEDIA_ERROR?(l.a.warn("[Player] A critical HLSjs media error occurred: "+E+"; the player will attempt to recover"),this._hls.recoverMediaError()):t?(l.a.warn("[Player] A critical HLSjs error occurred: "+E+"; the player cannot recover"),this.props.onError&&this.props.onError({category:D(a)})):l.a.warn("[Player] A non-critical HLSjs error occurred: "+E)},this.state={isReadyToPlay:!1}}componentWillUnmount(){this._hls.destroy(),this._hls=null}render(){return c(_.a,t()({},this.props,{isReadyToPlay:this.state.isReadyToPlay,onElementChange:this.onElementChange,onHTMLError:this.onHTMLError}))}}}}]);