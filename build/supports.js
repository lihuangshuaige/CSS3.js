(function(f){typeof define==="function"?define("supports",f):f()})(function(require,exports,module){!function(){"use strict";function e(e,t){return t.toUpperCase()}function t(e){var t;if(e){e=e.replace(/[\s\r\n\t]+/g," ").replace(/\bhttps?:(\/\/)/gi,"$1").replace(/\bnot\b/gi,"!").replace(/\band\b/gi,"&&").replace(/\bor\b/gi,"||").replace(/\(([\w\-]+)\s*:\s*(([^\(\):]+(\(([^\(\):]+(\([^\(\):]+\))*)+\))*)+)\s*\)/g,function(e,t,r){return t&&r?c(t,r):e});try{t=eval.call({},e)}catch(r){}}return t||!1}var r=window,n=r.CSS||(r.CSS={}),c=n.supports;if("function"==typeof c)try{return void c.call(n,"(a:a)")}catch(o){}else if(r.supportsCSS)c=function(){return r.supportsCSS.apply(r,arguments)};else{var s,i=r.document,p=i.createElement("_"),u={},a=p.style,l=i.documentElement;c=function(t,r){var n,c=t+"\\/"+r;if(c in u)return u[c];var o=t&&r&&(n=t.replace(/-(\w)/g,e))in a;return o&&(a.setProperty&&a.getPropertyValue?(a.setProperty(t,r),o=a.getPropertyValue(t)===r):p.currentStyle?(a.cssText="top:-99999px;left:-99999px;position:absolute;"+t+":"+r,l.appendChild(p),o=p.currentStyle[n]===r,l.removeChild(p)):(a.cssText=t+":"+r,o=a[n],o=o===r||o&&a.length>0)),a.cssText="",u[c]=!!o};try{s=r.stylefix||require("stylefix")}catch(f){}s&&s.register(function(e,r){return r?e.replace(/@supports\s+([^\{]+)/g,function(e,r){try{r&&t(r)&&(e="@media all ")}catch(n){}return e}):void 0})}n.supports=function(e,r){var n=arguments.length;if(n)return 1===n?t(e):c(e,r);throw new Error("WRONG_ARGUMENTS_ERR")}}();});