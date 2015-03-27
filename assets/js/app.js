$(function(){$(".pl-sub-pattern-markup").each(function(){$(this).before('<div class="pl-sub-pattern-sample"><div class="pl-sub-pattern-sample-toggle-controls"><span class="show">&#43; Show HTML</span><span class="hide">&#45; Hide HTML</span></div><div class="pl-sub-pattern-sample-toggle-target"><pre class="language-markup"><code><script type="prism-html-markup">'+$(this).html()+"</script></code></pre></div></div>")}),$(".pl-sub-pattern").on("click",".pl-sub-pattern-sample-toggle-controls",function(){$(this).parent(".pl-sub-pattern-sample").toggleClass("visible")})});
self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var Prism=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=t.util.clone(e[r]));return a;case"Array":return e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var r in n)a[r]=n[r];return a},insertBefore:function(e,n,a,r){r=r||t.languages;var i=r[e];if(2==arguments.length){a=arguments[1];for(var s in a)a.hasOwnProperty(s)&&(i[s]=a[s]);return i}var l={};for(var o in i)if(i.hasOwnProperty(o)){if(o==n)for(var s in a)a.hasOwnProperty(s)&&(l[s]=a[s]);l[o]=i[o]}return t.languages.DFS(t.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=l)}),r[e]=l},DFS:function(e,n,a){for(var r in e)e.hasOwnProperty(r)&&(n.call(e,r,e[r],a||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],n):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],n,r))}},highlightAll:function(e,n){for(var a,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),i=0;a=r[i++];)t.highlightElement(a,e===!0,n)},highlightElement:function(a,r,i){for(var s,l,o=a;o&&!e.test(o.className);)o=o.parentNode;if(o&&(s=(o.className.match(e)||[,""])[1],l=t.languages[s]),l){a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+s,o=a.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+s);var u=a.textContent;if(u){u=u.replace(/^(?:\r?\n|\r)/,"");var g={element:a,language:s,grammar:l,code:u};if(t.hooks.run("before-highlight",g),r&&self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){g.highlightedCode=n.stringify(JSON.parse(e.data),s),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,i&&i.call(g.element),t.hooks.run("after-highlight",g)},c.postMessage(JSON.stringify({language:g.language,code:g.code}))}else g.highlightedCode=t.highlight(g.code,g.grammar,g.language),t.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,i&&i.call(a),t.hooks.run("after-highlight",g)}}},highlight:function(e,a,r){var i=t.tokenize(e,a);return n.stringify(t.util.encode(i),r)},tokenize:function(e,n){var a=t.Token,r=[e],i=n.rest;if(i){for(var s in i)n[s]=i[s];delete n.rest}e:for(var s in n)if(n.hasOwnProperty(s)&&n[s]){var l=n[s];l="Array"===t.util.type(l)?l:[l];for(var o=0;o<l.length;++o){var u=l[o],g=u.inside,c=!!u.lookbehind,f=0,p=u.alias;u=u.pattern||u;for(var h=0;h<r.length;h++){var d=r[h];if(r.length>e.length)break e;if(!(d instanceof a)){u.lastIndex=0;var m=u.exec(d);if(m){c&&(f=m[1].length);var y=m.index-1+f,m=m[0].slice(f),v=m.length,w=y+v,k=d.slice(0,y+1),b=d.slice(w+1),O=[h,1];k&&O.push(k);var P=new a(s,g?t.tokenize(m,g):m,p);O.push(P),b&&O.push(b),Array.prototype.splice.apply(r,O)}}}}}return r},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var r,i=0;r=a[i++];)r(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,a,r){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return n.stringify(t,a,e)}).join("");var i={type:e.type,content:n.stringify(e.content,a,r),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:r};if("comment"==i.type&&(i.attributes.spellcheck="true"),e.alias){var s="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(i.classes,s)}t.hooks.run("wrap",i);var l="";for(var o in i.attributes)l+=o+'="'+(i.attributes[o]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+l+">"+i.content+"</"+i.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,r=n.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(r,t.languages[a])))),self.close()},!1),self.Prism):self.Prism;var a=document.getElementsByTagName("script");return a=a[a.length-1],a&&(t.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/g,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&#?[\da-z]{1,8};/gi},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});
$(function(){$(".remove-rtl").click(function(){return $(this).parent().addClass("hidden"),$(this).parent().siblings("li").removeClass("hidden"),$("body").removeClass("rtl"),!1})}),$(function(){$(".add-rtl").click(function(){return $(this).parent().addClass("hidden"),$(this).parent().siblings("li").removeClass("hidden"),$("body").addClass("rtl"),!1})});
function setActiveStyleSheet(e){var t,i;for(t=0;i=document.getElementsByTagName("link")[t];t++)-1!=i.getAttribute("rel").indexOf("style")&&i.getAttribute("title")&&(i.disabled=!0,i.getAttribute("title")==e&&(i.disabled=!1))}function getActiveStyleSheet(){var e,t;for(e=0;t=document.getElementsByTagName("link")[e];e++)if(-1!=t.getAttribute("rel").indexOf("style")&&t.getAttribute("title")&&!t.disabled)return t.getAttribute("title");return null}function getPreferredStyleSheet(){var e,t;for(e=0;t=document.getElementsByTagName("link")[e];e++)if(-1!=t.getAttribute("rel").indexOf("style")&&-1==t.getAttribute("rel").indexOf("alt")&&t.getAttribute("title"))return t.getAttribute("title");return null}function createCookie(e,t,i){if(i){var r=new Date;r.setTime(r.getTime()+24*i*60*60*1e3);var n="; expires="+r.toGMTString()}else n="";document.cookie=e+"="+t+n+"; path=/"}function readCookie(e){for(var t=e+"=",i=document.cookie.split(";"),r=0;r<i.length;r++){for(var n=i[r];" "==n.charAt(0);)n=n.substring(1,n.length);if(0==n.indexOf(t))return n.substring(t.length,n.length)}return null}window.onload=function(){var e=readCookie("style"),t=e?e:getPreferredStyleSheet();setActiveStyleSheet(t)},window.onunload=function(){var e=getActiveStyleSheet();createCookie("style",e,365)};var cookie=readCookie("style"),title=cookie?cookie:getPreferredStyleSheet();setActiveStyleSheet(title);
$(window).scroll(function(){var l=$(window).scrollTop();l>=130?($(".pl-jump-nav").addClass("pl-fixed"),$(".pl").addClass("sticky-nav")):($(".pl-jump-nav").removeClass("pl-fixed"),$(".pl").removeClass("sticky-nav"))});
$(".button-toggle").click(function(){$(this).toggleClass("open")});
headerScrollReact=function(e,a,r){$(window).scroll(function(){var d=$(this).scrollTop();if(d>=e&&e+75>d)$(".header").removeClass("header-full header-compact"),d>a?$(".header").delay(1500).addClass("header-transition"):$(".header").addClass("header-transition");else if(d>=e+75)$(".header").removeClass("header-transition header-full").addClass("header-compact");else if($(".header").removeClass("header-transition header-compact").addClass("header-full"),1==r){var l=d-a;$(".parallax").css({bottom:"-="+l/4.5,opacity:"-="+l/200}),a=d}})},$(document).ready(function(){if(!$(".header").hasClass("no-dynamic")){var e=$(".header-full").outerHeight(),a=$(window).scrollTop();$(".parallax").hide().fadeIn(400),0!=a?($(".header").removeClass("header-transition header-full").addClass("header-compact"),headerScrollReact(e,a,!1)):($(".header").height(e),headerScrollReact(e,a,!0))}$(".nav-icon-js").click(function(){$("body").toggleClass("navigation-open")})});
$("#map").length&&($(".filters").find(".filters-wrapper").children(".filter-button-js").addClass("open"),$(".filters").find(".filters-container").addClass("open")),$(".filter-button-js").click(function(){$(".tabs-menu-list").hasClass("open")&&($(".tabs-menu-button-js").toggleClass("open"),$(".tabs-menu-list").removeClass("open")),$(this).parent().siblings(".filters-container").toggleClass("open")}),$(".filters-container a").click(function(t){t.preventDefault()}),$(".filters-container .tabs .tabs-menu ul li").click(function(){var t=$(this).find("a").attr("href");$(this).closest(".tabs").find("div.tab-content.active").removeClass("active"),$(t).addClass("active")});
$(".main-nav").find("li a").not(".hidden-content-trigger").click(function(){$(".main-nav").find("li a").removeClass("active"),$(this).addClass("active")});var url=window.location.href;$(".main-nav li a").filter(function(){this.href==url&&$(this).addClass("active")}),$(".main-nav li .hidden-content").find("li a").filter(function(){this.href==url&&($(this).addClass("active"),$(this).parent().parent().addClass("visible").siblings(".trigger-container").children(".hidden-content-trigger").addClass("open active"))});
if(popupActions=function(){$(".post-popup .toggle-js").click(function(){$(this).toggleClass("open"),$(this).parent().siblings(".toggle-content").toggleClass("visible"),$(this).parent().find(".toggle-content").toggleClass("visible")}),$(".toggle-content-secondary ul li a").click(function(){$(this).closest(".toggle-content").removeClass("visible"),$(this).parents("ul, li, .toggle-content").siblings(".toggle-js").removeClass("open")})},$("#map").length){$(".post-popup").hasClass("has-image")&&$(".post-popup").parents(".leaflet-popup-content-wrapper").siblings(".leaflet-popup-tip-container").children(".leaflet-popup-tip").addClass("black-arrow");var map=L.map("map",{center:[30.267153,-97.743061],zoom:5,scrollWheelZoom:!1});mapLink='<a href="http://openstreetmap.org">OpenStreetMap</a>',L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; "+mapLink+" Contributors",maxZoom:18}).addTo(map);var popup='<div class="post-popup">\n        <span class="meta-data"><span class="date">January 10, 2015</span>10AM, via SMS</span>\n        <h3 class="gamma"><a href="">Unstable building due to explosion next to road</a></h3>\n        <p>\n            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...\n        </p>\n        <div class="actions-inline">\n            <button type="button" class="button-secondary dropdown toggle-js button-hide">\n                <span>Options</span>\n            </button>\n        </div>\n        <div class="toggle-content">\n            <ul class="dropdown-menu" role="menu">\n                <li>\n                    <button type="button" class="button-secondary edit">\n                        <a href="#!">Edit</a>\n                    </button>\n                </li>\n                <li>\n                    <button type="button" class="button-secondary dropdown toggle-js">\n                        <a href="#!">Add to Set</a>\n                    </button>\n                    <div class="toggle-content toggle-content-secondary">\n                        <ul class="dropdown-menu" role="menu">\n                            <li><a href="#!">Set #1</a></li>\n                            <li><a href="#!">Set #2</a></li>\n                        </ul>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    </div>',popupHasImage='<div class="post-popup has-image">\n    <span class="meta-data"><span class="date">January 10, 2015</span>10AM, via SMS</span>\n    <h3 class="gamma"><a href="">Unstable building due to explosion next to road</a></h3>\n    <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation...\n    </p>\n    <div class="actions-inline">\n        <button type="button" class="button-secondary dropdown toggle-js button-hide">\n            <span>Options</span>\n        </button>\n    </div>\n    <div class="toggle-content">\n        <ul class="dropdown-menu" role="menu">\n            <li>\n                <button type="button" class="button-secondary edit">\n                    <a href="#!">Edit</a>\n                </button>\n            </li>\n            <li>\n                <button type="button" class="button-secondary dropdown toggle-js">\n                    <a href="#!">Add to Set</a>\n                </button>\n                <div class="toggle-content toggle-content-secondary">\n                    <ul class="dropdown-menu" role="menu">\n                        <li><a href="#!">Set #1</a></li>\n                        <li><a href="#!">Set #2</a></li>\n                    </ul>\n                </div>\n            </li>\n        </ul>\n        <img src="https://photos.travelblog.org/Photos/11053/262872/f/2165432-Deserted-main-road-of-Quneitra-Syria-1.jpg">\n    </div>\n    </div>',popupOptions={minWidth:"400",maxWidth:"400",className:"pl-popup",offset:new L.Point(14,15)},customIcon=L.divIcon({className:"custom-map-marker",html:'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 200"><ellipse class="map-marker-shadow" cx="59.7" cy="178.7" rx="46.3" ry="14.6"/><path class="map-marker-icon" d="M101.9,18.4C90.3,6.8,76.3,1,60,1C43.6,1,29.7,6.8,18.1,18.4C6.4,30,0.6,44,0.6,60.4\n        c0,10.7,2.5,20.4,7.6,29.1l48.4,87.8c0.7,1.2,1.8,1.9,3.3,1.9c1.5,0,2.6-0.6,3.3-1.9l48.4-87.8c5.1-9.1,7.6-18.8,7.6-29.1\n        C119.4,44,113.6,30,101.9,18.4z M59.7,90.3c-16.2,0-29.3-13.1-29.3-29.3c0-16.2,13.1-29.3,29.3-29.3C75.9,31.7,89,44.8,89,61\n        C89,77.2,75.9,90.3,59.7,90.3z"/></svg>',iconSize:null,iconAnchor:null}),marker=L.marker([30.267153,-97.743061],{icon:customIcon}).addTo(map).bindPopup(popupHasImage,popupOptions).on("popupopen",popupActions),marker=L.marker([36.072635,-79.791975],{icon:customIcon}).addTo(map).bindPopup(popup,popupOptions).on("popupopen",popupActions)}
$(".hidden-content-trigger").click(function(){$(this).toggleClass("open"),$(this).parents().siblings(".hidden-content").toggleClass("visible")});
$(".star").click(function(){$(this).toggleClass("yellow")});
$(".tabs-menu ul li").click(function(){$(this).parent().find("li.active").removeClass("active"),$(this).addClass("active")}),$(".tabs-menu-button-js").click(function(){$(".filters-container").hasClass("open")&&($(".filter-button-js").toggleClass("open"),$(".filters-container").removeClass("open")),$(this).siblings(".tabs-menu-list").toggleClass("open")}),$("ul.tabs-menu-list li").click(function(){$(this).parent().prev("#tabs-menu-selection").html($(this).text()),$(this).parent().toggleClass("open"),$(this).parent().siblings(".tabs-menu-button-js").toggleClass("open")});
$(".toggle-js").click(function(){$(this).toggleClass("open"),$(this).parent().siblings(".toggle-content").toggleClass("visible"),$(this).parent().find(".toggle-content").toggleClass("visible")}),$(".toggle-content-secondary ul li a").click(function(){$(this).closest(".toggle-content").removeClass("visible"),$(this).parents("ul, li, .toggle-content").siblings(".toggle-js").removeClass("open")});
$(".user-admin .toggle-wrapper").click(function(t){$(t.target).hasClass("button-toggle")||$(this).children(".button-toggle").toggleClass("open"),$(this).siblings(".dropdown-menu").toggleClass("open")});