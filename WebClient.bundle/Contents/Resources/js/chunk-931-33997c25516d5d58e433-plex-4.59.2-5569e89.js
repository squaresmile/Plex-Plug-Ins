(self.webpackChunkplex_web_client=self.webpackChunkplex_web_client||[]).push([[931],{1780:(e,a,s)=>{const r=s(19816).Z,t=s(44213);e.exports=t(r)},42277:(e,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>c});var r=s(67294),t=s(93966),p=s(65652),n=s(44233),l=s(15314),o=s.n(l);const i=p.Z.ItemView.extend({template:o(),initialize:function(){var e=t.DB("appModel");this.listenTo(e,"change:primaryServer",this.render),this.listenTo(e.get("user"),"change:signedIn",this.render)},serializeData:function(){var e=t.DB("appModel"),a=e.get("user"),s=a.isNinja()?"4.59.2-5569e89":"4.59.2",r=e.get("primaryServer"),p={host:window.location.host,userAgent:window.navigator.userAgent,browser:n.Z,version:s,user:a.toJSON(),hasPlexPass:a.get("hasPlexSubscription"),cloudServer:a.server.toJSON(),cloudServerUrl:a.server.url()};return r&&(p.primaryServer=r.toJSON(),p.primaryServerUrl=r.url()),p}});var u=s(28888);function c(){return r.createElement(u.Z,{key:"InfoView",view:i})}},15314:(e,a,s)=>{var r=s(40202);function t(e){return e&&(e.__esModule?e.default:e)}e.exports=(r.default||r).template((function(e,a,r,p,n){this.compilerInfo=[4,">= 1.0.0"],r=this.merge(r,e.helpers),n=n||{};var l,o="",i="function",u=this.escapeExpression,c=this;return o+=' <h3>Plex Web</h3> <p><span class="text-muted">Version:</span> '+u(typeof(l=a&&a.version)===i?l.apply(a):l)+"</p> <h3>Plex Media Server</h3> ",((l=r.if.call(a,a&&a.primaryServer,{hash:{},inverse:c.program(3,(function(e,a){return' <p><span class="text-muted">none</span></p> '}),n),fn:c.program(1,(function(e,a){var s;return""+' <p><span class="text-muted">Name:</span> '+u(typeof(s=null==(s=e&&e.primaryServer)||!1===s?s:s.friendlyName)===i?s.apply(e):s)+'</p> <p><span class="text-muted">Version:</span> '+u(typeof(s=null==(s=e&&e.primaryServer)||!1===s?s:s.version)===i?s.apply(e):s)+"</p> "}),n),data:n}))||0===l)&&(o+=l),o+=' <h3>Browser</h3> <p><span class="text-muted">Host:</span> '+u(typeof(l=a&&a.host)===i?l.apply(a):l)+'</p> <p><span class="text-muted">User Agent:</span> '+u(typeof(l=a&&a.userAgent)===i?l.apply(a):l)+'</p> <p><span class="text-muted">Name:</span> '+u(typeof(l=null==(l=a&&a.browser)||!1===l?l:l.name)===i?l.apply(a):l)+'</p> <p><span class="text-muted">Version:</span> '+u(typeof(l=null==(l=a&&a.browser)||!1===l?l:l.version)===i?l.apply(a):l)+'</p> <p><span class="text-muted">Platform:</span> '+u(typeof(l=null==(l=a&&a.browser)||!1===l?l:l.platform)===i?l.apply(a):l)+'</p> <p><span class="text-muted">Mobile:</span> '+u(t(s(1780)).call(a,null==(l=a&&a.browser)||!1===l?l:l.mobile,{hash:{},data:n}))+'</p> <h3>User</h3> <p><span class="text-muted">Username:</span> '+u(typeof(l=null==(l=a&&a.user)||!1===l?l:l.username)===i?l.apply(a):l)+" ",((l=r.if.call(a,a&&a.hasPlexPass,{hash:{},inverse:c.noop,fn:c.program(5,(function(e,a){return"(Plex Pass)"}),n),data:n}))||0===l)&&(o+=l),o+'</p> <h3>plex.tv</h3> <p><span class="text-muted">URL:</span> '+u(typeof(l=a&&a.cloudServerUrl)===i?l.apply(a):l)+'</p> <p><span class="text-muted">Available:</span> '+u(t(s(1780)).call(a,null==(l=a&&a.cloudServer)||!1===l?l:l.available,{hash:{},data:n}))+'</p> <p><span class="text-muted">Authorized:</span> '+u(t(s(1780)).call(a,null==(l=a&&a.cloudServer)||!1===l?l:l.authorized,{hash:{},data:n}))+"</p> "}))}}]);