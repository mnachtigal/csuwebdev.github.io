(function(){var t,e,n,o,r,i,u,s,a,l,c,h,d,p,f,m,v,y,g,E,w,T,_,k,b,S,H,A,C,x,L,N,R,O,q,D,F,X,I,M,P,j,G,U,B,K,$,Q,V,Y,z,J,W,Z,te,ee,ne=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},oe=function(t,e){function n(){this.constructor=t}for(var o in e)re.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},re={}.hasOwnProperty,ie=[].slice,ue=function(t,e){return function(){return t.apply(e,arguments)}};O={},d=10,J=!1,I=null,g=null,N=null,j=null,ee=null,o={BEFORE_CHANGE:"page:before-change",FETCH:"page:fetch",RECEIVE:"page:receive",CHANGE:"page:change",UPDATE:"page:update",LOAD:"page:load",RESTORE:"page:restore",BEFORE_UNLOAD:"page:before-unload",EXPIRE:"page:expire"},k=function(t){var e;return t=new n(t),$(),h(),null!=I&&I.start(),J&&(e=W(t.absolute))?(b(e),S(t,null,!1)):S(t,Y)},W=function(t){var e;return e=O[t],e&&!e.transitionCacheDisabled?e:void 0},w=function(t){return null==t&&(t=!0),J=t},E=function(t){return null==t&&(t=!0),l?t?null!=I?I:I=new i("html"):(null!=I&&I.uninstall(),I=null):void 0},S=function(t,e,n){return null==n&&(n=!0),Z(o.FETCH,{url:t.absolute}),null!=ee&&ee.abort(),ee=new XMLHttpRequest,ee.open("GET",t.withoutHashForIE10compatibility(),!0),ee.setRequestHeader("Accept","text/html, application/xhtml+xml, application/xml"),ee.setRequestHeader("X-XHR-Referer",j),ee.onload=function(){var r;return Z(o.RECEIVE,{url:t.absolute}),(r=X())?(G(t),U(),p.apply(null,_(r)),n&&null!=I&&I.done(),R(),"function"==typeof e&&e(),Z(o.LOAD)):(null!=I&&I.done(),document.location.href=y()||t.absolute)},I&&n&&(ee.onprogress=function(){return function(t){var e;return e=t.lengthComputable?t.loaded/t.total*100:I.value+(100-I.value)/10,I.advanceTo(e)}}(this)),ee.onloadend=function(){return ee=null},ee.onerror=function(){return document.location.href=t.absolute},ee.send()},b=function(t){return null!=ee&&ee.abort(),p(t.title,t.body),null!=I&&I.done(),M(t),Z(o.RESTORE)},h=function(){var t;return t=new n(g.url),O[t.absolute]={url:t.relative,body:document.body,title:document.title,positionY:window.pageYOffset,positionX:window.pageXOffset,cachedAt:(new Date).getTime(),transitionCacheDisabled:null!=document.querySelector("[data-no-transition-cache]")},m(d)},D=function(t){return null==t&&(t=d),/^[\d]+$/.test(t)?d=parseInt(t):void 0},m=function(t){var e,n,r,i,u,s;for(u=Object.keys(O),e=u.map(function(t){return O[t].cachedAt}).sort(function(t,e){return e-t}),s=[],n=0,i=u.length;i>n;n++)r=u[n],O[r].cachedAt<=e[t]&&(Z(o.EXPIRE,O[r]),s.push(delete O[r]));return s},p=function(e,n,r,i){return Z(o.BEFORE_UNLOAD),document.title=e,document.documentElement.replaceChild(n,document.body),null!=r&&t.update(r),z(),i&&T(),g=window.history.state,Z(o.CHANGE),Z(o.UPDATE)},T=function(){var t,e,n,o,r,i,u,s,a,l,c,h;for(h=Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')),n=0,r=h.length;r>n;n++)if(c=h[n],""===(a=c.type)||"text/javascript"===a){for(e=document.createElement("script"),l=c.attributes,o=0,i=l.length;i>o;o++)t=l[o],e.setAttribute(t.name,t.value);c.hasAttribute("async")||(e.async=!1),e.appendChild(document.createTextNode(c.innerHTML)),s=c.parentNode,u=c.nextSibling,s.removeChild(c),s.insertBefore(e,u)}},Q=function(t){return t.innerHTML=t.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi,""),t},z=function(){var t,e;return t=(e=document.querySelectorAll("input[autofocus], textarea[autofocus]"))[e.length-1],t&&document.activeElement!==t?t.focus():void 0},G=function(t){return(t=new n(t)).absolute!==j?window.history.pushState({turbolinks:!0,url:t.absolute},"",t.absolute):void 0},U=function(){var t,e;return(t=ee.getResponseHeader("X-XHR-Redirected-To"))?(t=new n(t),e=t.hasNoHash()?document.location.hash:"",window.history.replaceState(window.history.state,"",t.href+e)):void 0},y=function(){var t;return null!=(t=ee.getResponseHeader("Location"))&&new n(t).crossOrigin()?t:void 0},$=function(){return j=document.location.href},K=function(){return window.history.replaceState({turbolinks:!0,url:document.location.href},"",document.location.href)},B=function(){return g=window.history.state},R=function(){var t;return navigator.userAgent.match(/Firefox/)&&!(t=new n).hasNoHash()?(window.history.replaceState(g,"",t.withoutHash()),document.location.hash=t.hash):void 0},M=function(t){return window.scrollTo(t.positionX,t.positionY)},Y=function(){return document.location.hash?document.location.href=document.location.href:window.scrollTo(0,0)},f=function(t){var e,n,o;if(null==t||"object"!=typeof t)return t;e=new t.constructor;for(n in t)o=t[n],e[n]=f(o);return e},F=function(t){var e,n;return n=(null!=(e=document.cookie.match(new RegExp(t+"=(\\w+)")))?e[1].toUpperCase():void 0)||"",document.cookie=t+"=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/",n},Z=function(t,e){var n;return"undefined"!=typeof Prototype&&Event.fire(document,t,e,!0),n=document.createEvent("Events"),e&&(n.data=e),n.initEvent(t,!0,!0),document.dispatchEvent(n)},q=function(t){return!Z(o.BEFORE_CHANGE,{url:t})},X=function(){var t,e,n,o,r,i,u;return e=function(){var t;return 400<=(t=ee.status)&&600>t},u=function(){var t;return null!=(t=ee.getResponseHeader("Content-Type"))&&t.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)},o=function(){var t;return null!=(t=ee.getResponseHeader("Content-Disposition"))&&t.match(/^attachment/)},r=function(t){var e,n,o,r,i;for(r=t.querySelector("head").childNodes,i=[],e=0,n=r.length;n>e;e++)o=r[e],null!=("function"==typeof o.getAttribute?o.getAttribute("data-turbolinks-track"):void 0)&&i.push(o.getAttribute("src")||o.getAttribute("href"));return i},t=function(t){var e;return N||(N=r(document)),e=r(t),e.length!==N.length||i(e,N).length!==N.length},i=function(t,e){var n,o,r,i,u;for(t.length>e.length&&(r=[e,t],t=r[0],e=r[1]),i=[],n=0,o=t.length;o>n;n++)u=t[n],ne.call(e,u)>=0&&i.push(u);return i},e()||!u()||o()||(n=v(ee.responseText),!n||t(n))?void 0:n},_=function(e){var n;return n=e.querySelector("title"),[null!=n?n.textContent:void 0,Q(e.querySelector("body")),t.get(e).token,"runScripts"]},t={get:function(t){var e;return null==t&&(t=document),{node:e=t.querySelector('meta[name="csrf-token"]'),token:null!=e&&"function"==typeof e.getAttribute?e.getAttribute("content"):void 0}},update:function(t){var e;return e=this.get(),null!=e.token&&null!=t&&e.token!==t?e.node.setAttribute("content",t):void 0}},v=function(t){var e;return e=document.documentElement.cloneNode(),e.innerHTML=t,e.head=e.querySelector("head"),e.body=e.querySelector("body"),e},n=function(){function t(e){return this.original=null!=e?e:document.location.href,this.original.constructor===t?this.original:void this._parse()}return t.prototype.withoutHash=function(){return this.href.replace(this.hash,"").replace("#","")},t.prototype.withoutHashForIE10compatibility=function(){return this.withoutHash()},t.prototype.hasNoHash=function(){return 0===this.hash.length},t.prototype.crossOrigin=function(){return this.origin!==(new t).origin},t.prototype._parse=function(){var t;return(null!=this.link?this.link:this.link=document.createElement("a")).href=this.original,t=this.link,this.href=t.href,this.protocol=t.protocol,this.host=t.host,this.hostname=t.hostname,this.port=t.port,this.pathname=t.pathname,this.search=t.search,this.hash=t.hash,this.origin=[this.protocol,"//",this.hostname].join(""),0!==this.port.length&&(this.origin+=":"+this.port),this.relative=[this.pathname,this.search,this.hash].join(""),this.absolute=this.href},t}(),r=function(t){function e(t){return this.link=t,this.link.constructor===e?this.link:(this.original=this.link.href,this.originalElement=this.link,this.link=this.link.cloneNode(!1),void e.__super__.constructor.apply(this,arguments))}return oe(e,t),e.HTML_EXTENSIONS=["html"],e.allowExtensions=function(){var t,n,o,r;for(n=1<=arguments.length?ie.call(arguments,0):[],o=0,r=n.length;r>o;o++)t=n[o],e.HTML_EXTENSIONS.push(t);return e.HTML_EXTENSIONS},e.prototype.shouldIgnore=function(){return this.crossOrigin()||this._anchored()||this._nonHtml()||this._optOut()||this._target()},e.prototype._anchored=function(){return(this.hash.length>0||"#"===this.href.charAt(this.href.length-1))&&this.withoutHash()===(new n).withoutHash()},e.prototype._nonHtml=function(){return this.pathname.match(/\.[a-z]+$/g)&&!this.pathname.match(new RegExp("\\.(?:"+e.HTML_EXTENSIONS.join("|")+")?$","g"))},e.prototype._optOut=function(){var t,e;for(e=this.originalElement;!t&&e!==document;)t=null!=e.getAttribute("data-no-turbolink"),e=e.parentNode;return t},e.prototype._target=function(){return 0!==this.link.target.length},e}(n),e=function(){function t(t){this.event=t,this.event.defaultPrevented||(this._extractLink(),this._validForTurbolinks()&&(q(this.link.absolute)||te(this.link.href),this.event.preventDefault()))}return t.installHandlerLast=function(e){return e.defaultPrevented?void 0:(document.removeEventListener("click",t.handle,!1),document.addEventListener("click",t.handle,!1))},t.handle=function(e){return new t(e)},t.prototype._extractLink=function(){var t;for(t=this.event.target;t.parentNode&&"A"!==t.nodeName;)t=t.parentNode;return"A"===t.nodeName&&0!==t.href.length?this.link=new r(t):void 0},t.prototype._validForTurbolinks=function(){return null!=this.link&&!(this.link.shouldIgnore()||this._nonStandardClick())},t.prototype._nonStandardClick=function(){return this.event.which>1||this.event.metaKey||this.event.ctrlKey||this.event.shiftKey||this.event.altKey},t}(),i=function(){function t(t){this.elementSelector=t,this._trickle=ue(this._trickle,this),this._reset=ue(this._reset,this),this.value=0,this.content="",this.speed=300,this.opacity=n,this.install()}var e,n;return e="turbolinks-progress-bar",n=.99,t.prototype.install=function(){return this.element=document.querySelector(this.elementSelector),this.element.classList.add(e),this.styleElement=document.createElement("style"),document.head.appendChild(this.styleElement),this._updateStyle()},t.prototype.uninstall=function(){return this.element.classList.remove(e),document.head.removeChild(this.styleElement)},t.prototype.start=function(){return this.value>0&&(this._reset(),this._reflow()),this.advanceTo(5)},t.prototype.advanceTo=function(t){var e;if(t>(e=this.value)&&100>=e){if(this.value=t,this._updateStyle(),100===this.value)return this._stopTrickle();if(this.value>0)return this._startTrickle()}},t.prototype.done=function(){return this.value>0?(this.advanceTo(100),this._finish()):void 0},t.prototype._finish=function(){return this.fadeTimer=setTimeout(function(t){return function(){return t.opacity=0,t._updateStyle()}}(this),this.speed/2),this.resetTimer=setTimeout(this._reset,this.speed)},t.prototype._reflow=function(){return this.element.offsetHeight},t.prototype._reset=function(){return this._stopTimers(),this.value=0,this.opacity=n,this._withSpeed(0,function(t){return function(){return t._updateStyle(!0)}}(this))},t.prototype._stopTimers=function(){return this._stopTrickle(),clearTimeout(this.fadeTimer),clearTimeout(this.resetTimer)},t.prototype._startTrickle=function(){return this.trickleTimer?void 0:this.trickleTimer=setTimeout(this._trickle,this.speed)},t.prototype._stopTrickle=function(){return clearTimeout(this.trickleTimer),delete this.trickleTimer},t.prototype._trickle=function(){return this.advanceTo(this.value+Math.random()/2),this.trickleTimer=setTimeout(this._trickle,this.speed)},t.prototype._withSpeed=function(t,e){var n,o;return n=this.speed,this.speed=t,o=e(),this.speed=n,o},t.prototype._updateStyle=function(t){return null==t&&(t=!1),t&&this._changeContentToForceRepaint(),this.styleElement.textContent=this._createCSSRule()},t.prototype._changeContentToForceRepaint=function(){return this.content=""===this.content?" ":""},t.prototype._createCSSRule=function(){return this.elementSelector+"."+e+"::before {\n  content: '"+this.content+"';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: "+this.opacity+";\n  width: "+this.value+"%;\n  transition: width "+this.speed+"ms ease-out, opacity "+this.speed/2+"ms ease-in;\n  transform: translate3d(0,0,0);\n}"},t}(),c=function(t){return setTimeout(t,500)},C=function(){return document.addEventListener("DOMContentLoaded",function(){return Z(o.CHANGE),Z(o.UPDATE)},!0)},L=function(){return"undefined"!=typeof jQuery?jQuery(document).on("ajaxSuccess",function(t,e){return jQuery.trim(e.responseText)?Z(o.UPDATE):void 0}):void 0},x=function(t){var e,o;return(null!=(o=t.state)?o.turbolinks:void 0)?(e=O[new n(t.state.url).absolute])?(h(),b(e)):te(t.target.location.href):void 0},A=function(){return K(),B(),document.addEventListener("click",e.installHandlerLast,!0),window.addEventListener("hashchange",function(){return K(),B()},!1),c(function(){return window.addEventListener("popstate",x,!1)})},H=void 0!==window.history.state||navigator.userAgent.match(/Firefox\/2[6|7]/),a=window.history&&window.history.pushState&&window.history.replaceState&&H,u=!navigator.userAgent.match(/CriOS\//),V="GET"===(P=F("request_method"))||""===P,l=a&&u&&V,s=document.addEventListener&&document.createEvent,s&&(C(),L()),l?(te=k,A()):te=function(t){return document.location.href=t},this.Turbolinks={visit:te,pagesCached:D,cacheCurrentPage:h,enableTransitionCache:w,enableProgressBar:E,allowLinkExtensions:r.allowExtensions,supported:l,EVENTS:f(o)}}).call(this);