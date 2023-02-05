"use strict";(self.webpackChunkserver_manager=self.webpackChunkserver_manager||[]).push([[274],{53274:(e,t,n)=>{n.d(t,{d:()=>L});var r,i=[],o="ResizeObserver loop completed with undelivered notifications.";!function(e){e.BORDER_BOX="border-box",e.CONTENT_BOX="content-box",e.DEVICE_PIXEL_CONTENT_BOX="device-pixel-content-box"}(r||(r={}));var s,a=function(){function e(e,t,n,r){return this.x=e,this.y=t,this.width=n,this.height=r,this.top=this.y,this.left=this.x,this.bottom=this.top+this.height,this.right=this.left+this.width,Object.freeze(this)}return e.prototype.toJSON=function(){var e=this;return{x:e.x,y:e.y,top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.width,height:e.height}},e.fromRect=function(t){return new e(t.x,t.y,t.width,t.height)},e}(),c=function(e){return e instanceof SVGElement&&"getBBox"in e},u=function(e){if(c(e)){var t=e.getBBox(),n=t.width,r=t.height;return!n&&!r}var i=e,o=i.offsetWidth,s=i.offsetHeight;return!(o||s||e.getClientRects().length)},h=function(e){var t,n,r=null===(n=null===(t=e)||void 0===t?void 0:t.ownerDocument)||void 0===n?void 0:n.defaultView;return!!(r&&e instanceof r.Element)},f="undefined"!=typeof window?window:{},d=new WeakMap,v=/auto|scroll/,l=/^tb|vertical/,p=/msie|trident/i.test(f.navigator&&f.navigator.userAgent),g=function(e){return parseFloat(e||"0")},b=function(e,t,n){return void 0===e&&(e=0),void 0===t&&(t=0),void 0===n&&(n=!1),Object.freeze({inlineSize:(n?t:e)||0,blockSize:(n?e:t)||0})},w=Object.freeze({devicePixelContentBoxSize:b(),borderBoxSize:b(),contentBoxSize:b(),contentRect:new a(0,0,0,0)}),x=function(e,t){if(void 0===t&&(t=!1),d.has(e)&&!t)return d.get(e);if(u(e))return d.set(e,w),w;var n=getComputedStyle(e),r=c(e)&&e.ownerSVGElement&&e.getBBox(),i=!p&&"border-box"===n.boxSizing,o=l.test(n.writingMode||""),s=!r&&v.test(n.overflowY||""),h=!r&&v.test(n.overflowX||""),f=r?0:g(n.paddingTop),x=r?0:g(n.paddingRight),E=r?0:g(n.paddingBottom),T=r?0:g(n.paddingLeft),m=r?0:g(n.borderTopWidth),z=r?0:g(n.borderRightWidth),y=r?0:g(n.borderBottomWidth),B=T+x,S=f+E,O=(r?0:g(n.borderLeftWidth))+z,R=m+y,k=h?e.offsetHeight-R-e.clientHeight:0,C=s?e.offsetWidth-O-e.clientWidth:0,N=i?B+O:0,D=i?S+R:0,_=r?r.width:g(n.width)-N-C,M=r?r.height:g(n.height)-D-k,P=_+B+C+O,F=M+S+k+R,I=Object.freeze({devicePixelContentBoxSize:b(Math.round(_*devicePixelRatio),Math.round(M*devicePixelRatio),o),borderBoxSize:b(P,F,o),contentBoxSize:b(_,M,o),contentRect:new a(T,f,_,M)});return d.set(e,I),I},E=function(e,t,n){var i=x(e,n),o=i.borderBoxSize,s=i.contentBoxSize,a=i.devicePixelContentBoxSize;switch(t){case r.DEVICE_PIXEL_CONTENT_BOX:return a;case r.BORDER_BOX:return o;default:return s}},T=function(e){var t=x(e);this.target=e,this.contentRect=t.contentRect,this.borderBoxSize=[t.borderBoxSize],this.contentBoxSize=[t.contentBoxSize],this.devicePixelContentBoxSize=[t.devicePixelContentBoxSize]},m=function(e){if(u(e))return 1/0;for(var t=0,n=e.parentNode;n;)t+=1,n=n.parentNode;return t},z=function(){var e=1/0,t=[];i.forEach((function(n){if(0!==n.activeTargets.length){var r=[];n.activeTargets.forEach((function(t){var n=new T(t.target),i=m(t.target);r.push(n),t.lastReportedSize=E(t.target,t.observedBox),i<e&&(e=i)})),t.push((function(){n.callback.call(n.observer,r,n.observer)})),n.activeTargets.splice(0,n.activeTargets.length)}}));for(var n=0,r=t;n<r.length;n++)(0,r[n])();return e},y=function(e){i.forEach((function(t){t.activeTargets.splice(0,t.activeTargets.length),t.skippedTargets.splice(0,t.skippedTargets.length),t.observationTargets.forEach((function(n){n.isActive()&&(m(n.target)>e?t.activeTargets.push(n):t.skippedTargets.push(n))}))}))},B=[],S=0,O={attributes:!0,characterData:!0,childList:!0,subtree:!0},R=["resize","load","transitionend","animationend","animationstart","animationiteration","keyup","keydown","mouseup","mousedown","mouseover","mouseout","blur","focus"],k=function(e){return void 0===e&&(e=0),Date.now()+e},C=!1,N=new(function(){function e(){var e=this;this.stopped=!0,this.listener=function(){return e.schedule()}}return e.prototype.run=function(e){var t=this;if(void 0===e&&(e=250),!C){C=!0;var n,r=k(e);n=function(){var n=!1;try{n=function(){var e,t=0;for(y(t);i.some((function(e){return e.activeTargets.length>0}));)t=z(),y(t);return i.some((function(e){return e.skippedTargets.length>0}))&&("function"==typeof ErrorEvent?e=new ErrorEvent("error",{message:o}):((e=document.createEvent("Event")).initEvent("error",!1,!1),e.message=o),window.dispatchEvent(e)),t>0}()}finally{if(C=!1,e=r-k(),!S)return;n?t.run(1e3):e>0?t.run(e):t.start()}},function(e){if(!s){var t=0,n=document.createTextNode("");new MutationObserver((function(){return B.splice(0).forEach((function(e){return e()}))})).observe(n,{characterData:!0}),s=function(){n.textContent=""+(t?t--:t++)}}B.push(e),s()}((function(){requestAnimationFrame(n)}))}},e.prototype.schedule=function(){this.stop(),this.run()},e.prototype.observe=function(){var e=this,t=function(){return e.observer&&e.observer.observe(document.body,O)};document.body?t():f.addEventListener("DOMContentLoaded",t)},e.prototype.start=function(){var e=this;this.stopped&&(this.stopped=!1,this.observer=new MutationObserver(this.listener),this.observe(),R.forEach((function(t){return f.addEventListener(t,e.listener,!0)})))},e.prototype.stop=function(){var e=this;this.stopped||(this.observer&&this.observer.disconnect(),R.forEach((function(t){return f.removeEventListener(t,e.listener,!0)})),this.stopped=!0)},e}()),D=function(e){!S&&e>0&&N.start(),!(S+=e)&&N.stop()},_=function(){function e(e,t){this.target=e,this.observedBox=t||r.CONTENT_BOX,this.lastReportedSize={inlineSize:0,blockSize:0}}return e.prototype.isActive=function(){var e,t=E(this.target,this.observedBox,!0);return e=this.target,c(e)||function(e){switch(e.tagName){case"INPUT":if("image"!==e.type)break;case"VIDEO":case"AUDIO":case"EMBED":case"OBJECT":case"CANVAS":case"IFRAME":case"IMG":return!0}return!1}(e)||"inline"!==getComputedStyle(e).display||(this.lastReportedSize=t),this.lastReportedSize.inlineSize!==t.inlineSize||this.lastReportedSize.blockSize!==t.blockSize},e}(),M=function(e,t){this.activeTargets=[],this.skippedTargets=[],this.observationTargets=[],this.observer=e,this.callback=t},P=new WeakMap,F=function(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1},I=function(){function e(){}return e.connect=function(e,t){var n=new M(e,t);P.set(e,n)},e.observe=function(e,t,n){var r=P.get(e),o=0===r.observationTargets.length;F(r.observationTargets,t)<0&&(o&&i.push(r),r.observationTargets.push(new _(t,n&&n.box)),D(1),N.schedule())},e.unobserve=function(e,t){var n=P.get(e),r=F(n.observationTargets,t),o=1===n.observationTargets.length;r>=0&&(o&&i.splice(i.indexOf(n),1),n.observationTargets.splice(r,1),D(-1))},e.disconnect=function(e){var t=this,n=P.get(e);n.observationTargets.slice().forEach((function(n){return t.unobserve(e,n.target)})),n.activeTargets.splice(0,n.activeTargets.length)},e}(),L=function(){function e(e){if(0===arguments.length)throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");if("function"!=typeof e)throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");I.connect(this,e)}return e.prototype.observe=function(e,t){if(0===arguments.length)throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!h(e))throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");I.observe(this,e,t)},e.prototype.unobserve=function(e){if(0===arguments.length)throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");if(!h(e))throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");I.unobserve(this,e)},e.prototype.disconnect=function(){I.disconnect(this)},e.toString=function(){return"function ResizeObserver () { [polyfill code] }"},e}()}}]);