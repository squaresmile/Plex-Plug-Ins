(self.webpackChunkplex_web_client=self.webpackChunkplex_web_client||[]).push([[602],{49750:(e,n,t)=>{const a=t(66565).Z,s=t(83515);e.exports=s(a)},83602:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>A});var a=t(67294),s=t(81452),i=t(92450),l=t(45191),o=t(76389),r=t(73788),c=t(15770),u=t(41821),m=t(26051),d=t(97283),h=t(30622),p=t(92507),f=t.n(p);const g=m.Z.ItemView.extend({className:"announcement-list-item",template:f(),ui:{thumb:".thumb",unread:".unread"},initialize:function(){this.image=new h.Z({url:this.model.get("imageUrl")})},onRender:function(){this.image.setElement(this.ui.thumb),this.model.markAsRead()},onClose:function(){this.image.close()}}),v=d.Z.extend({className:"list announcement-list",itemView:g});var E=t(94480),b=t.n(E);const Z=m.Z.Layout.extend({className:"container",template:b(),regions:{list:".announcements-container"},initialize:function(){const e=(0,l.DB)("appModel").get("user");this.collection=e.get("desktop").get("announcements")},onRender:function(){this.list.show(new v({collection:this.collection}))}});var y=t(47532),w=t(42985),x=t(63776),_=t(62365);const k=function(){const[e,n]=(0,a.useState)({isAnnouncementsPending:!0,announcementsError:!1});return(0,c.Z)((()=>{(0,o.bg)((0,l.DB)("appModel")).get("announcements").fetch().then((()=>{n({isAnnouncementsPending:!1,announcementsError:!1})}),(()=>{n({isAnnouncementsPending:!1,announcementsError:!0})}))})),e.isAnnouncementsPending?a.createElement(x.Z,null,a.createElement(w.Z,null)):e.announcementsError?a.createElement(_.Z,{title:(0,r.Z)("Announcements are not available.")}):a.createElement(y.Z,{className:u.u,view:Z,viewOptions:{}})};function A(){return a.createElement(i.Z,null,a.createElement(s.Z,null,a.createElement(k,null)))}},92507:(e,n,t)=>{var a=t(40202);e.exports=(a.default||a).template((function(e,n,a,s,i){this.compilerInfo=[4,">= 1.0.0"],a=this.merge(a,e.helpers),i=i||{};var l,o,r="",c="function",u=this.escapeExpression,m=this;return r+='<div class="card card-announcement"> <div class="unread ',((l=a.if.call(n,n&&n.read,{hash:{},inverse:m.noop,fn:m.program(1,(function(e,n){return"hidden"}),i),data:i}))||0===l)&&(r+=l),r+='"></div> ',((l=a.if.call(n,n&&n.url,{hash:{},inverse:m.program(5,(function(e,n){var t;return""+" <h4>"+u(typeof(t=e&&e.title)===c?t.apply(e):t)+'</h4> <img class="thumb"/> '}),i),fn:m.program(3,(function(e,n){var t;return""+' <h4><a href="'+u(typeof(t=e&&e.url)===c?t.apply(e):t)+'" target="_blank">'+u(typeof(t=e&&e.title)===c?t.apply(e):t)+'</a></h4> <a href="'+u(typeof(t=e&&e.url)===c?t.apply(e):t)+'" target="_blank"> <img class="thumb"/> </a> '}),i),data:i}))||0===l)&&(r+=l),r+=' <div class="date">'+u((o=t(49750),o&&(o.__esModule?o.default:o)).call(n,n&&n.notifyAt,{hash:{},data:i}))+'</div> <div class="description">',((l=typeof(l=n&&n.content)===c?l.apply(n):l)||0===l)&&(r+=l),r+"</div> </div> "}))},94480:(e,n,t)=>{var a=t(40202);e.exports=(a.default||a).template((function(e,n,a,s,i){var l;return this.compilerInfo=[4,">= 1.0.0"],a=this.merge(a,e.helpers),i=i||{},""+"<h2>"+(0,this.escapeExpression)((l=t(66623),l&&(l.__esModule?l.default:l)).call(n,"Announcements",{hash:{},data:i}))+'</h2> <div class="announcements-container"></div> '}))}}]);