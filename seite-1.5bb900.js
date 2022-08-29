(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
!function(){if("Promise"in window&&void 0!==window.performance){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),i=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),s=location.href.replace(/#[^#]+$/,"");o.add(s);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(i){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var s=new XMLHttpRequest;s.open("GET",t,s.withCredentials=!0),s.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},d={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},d),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},d)}}();

$(function(){
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){var e=document.querySelector('.un25');e.setAttribute('src',(dpi>1)?'images/internet-seite-blace-1920.png':'images/internet-seite-blace-960-1.png');
var e=document.querySelector('.un26');e.setAttribute('src',(dpi>1)?'images/blace-t-shirtblace-396.png':'images/blace-t-shirtblace-198-1.png');
var e=document.querySelector('.un27');e.setAttribute('src',(dpi>1)?'images/img_20220827_180042-668.jpg':'images/img_20220827_180042-334-1.jpg');
var e=document.querySelector('.un28');e.setAttribute('src',(dpi>1)?'images/img-20220827-wa0003-960.jpg':'images/img-20220827-wa0003-480-1.jpg');
var e=document.querySelector('.un29');e.setAttribute('src',(dpi>1)?'images/internet-seite-blace-1920-1.png':'images/internet-seite-blace-960-3.png');
var e=document.querySelector('.un30');e.setAttribute('src','images/img_20220827_184249-885.jpg');}else if($(window).width()>=768){var e=document.querySelector('.un25');e.setAttribute('src',(dpi>1)?'images/internet-seite-blace-1536.png':'images/internet-seite-blace-768.png');
var e=document.querySelector('.un26');e.setAttribute('src',(dpi>1)?'images/blace-t-shirtblace-316.png':'images/blace-t-shirtblace-158.png');
var e=document.querySelector('.un27');e.setAttribute('src',(dpi>1)?'images/img_20220827_180042-534.jpg':'images/img_20220827_180042-267.jpg');
var e=document.querySelector('.un28');e.setAttribute('src',(dpi>1)?'images/img-20220827-wa0003-768.jpg':'images/img-20220827-wa0003-384.jpg');
var e=document.querySelector('.un29');e.setAttribute('src',(dpi>1)?'images/internet-seite-blace-1536-1.png':'images/internet-seite-blace-768-1.png');
var e=document.querySelector('.un30');e.setAttribute('src',(dpi>1)?'images/img_20220827_184249-1416.jpg':'images/img_20220827_184249-708.jpg');}else if($(window).width()>=480){var e=document.querySelector('.un25');e.setAttribute('src',(dpi>1)?'images/internet-seite-blace-960.png':'images/internet-seite-blace-480.png');
var e=document.querySelector('.un26');e.setAttribute('src',(dpi>1)?'images/blace-t-shirtblace-198.png':'images/blace-t-shirtblace-99.png');
var e=document.querySelector('.un27');e.setAttribute('src',(dpi>1)?'images/img_20220827_180042-334.jpg':'images/img_20220827_180042-167.jpg');
var e=document.querySelector('.un28');e.setAttribute('src',(dpi>1)?'images/img-20220827-wa0003-480.jpg':'images/img-20220827-wa0003-240-1.jpg');
var e=document.querySelector('.un29');e.setAttribute('src',(dpi>1)?'images/internet-seite-blace-960-2.png':'images/internet-seite-blace-480-1.png');
var e=document.querySelector('.un30');e.setAttribute('src',(dpi>1)?'images/img_20220827_184249-886.jpg':'images/img_20220827_184249-443.jpg');}else{var e=document.querySelector('.un25');e.setAttribute('src',(dpi>1)?'images/internet-seite-blace-640.png':'images/internet-seite-blace-320.png');
var e=document.querySelector('.un26');e.setAttribute('src',(dpi>1)?'images/blace-t-shirtblace-132.png':'images/blace-t-shirtblace-66.png');
var e=document.querySelector('.un27');e.setAttribute('src',(dpi>1)?'images/img_20220827_180042-222.jpg':'images/img_20220827_180042-111.jpg');
var e=document.querySelector('.un28');e.setAttribute('src',(dpi>1)?'images/img-20220827-wa0003-320.jpg':'images/img-20220827-wa0003-160.jpg');
var e=document.querySelector('.un29');e.setAttribute('src',(dpi>1)?'images/internet-seite-blace-640-1.png':'images/internet-seite-blace-320-1.png');
var e=document.querySelector('.un30');e.setAttribute('src',(dpi>1)?'images/img_20220827_184249-590.jpg':'images/img_20220827_184249-295.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
if(location.hash){var e=location.hash.replace("#",""),o=function(){var t=document.querySelectorAll('[name="'+e+'"]')[0];t&&t.scrollIntoView(),"complete"!=document.readyState&&setTimeout(o,100)};o()}

});