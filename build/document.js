(function(f){typeof define==="function"?define("document",f):f()})(function(require,exports,module){!function(){"use strict";function r(r){console.log(r);var t,n,a,o=e.location.href;if(r){switch(n=r.substr(0,r.indexOf("(")),a=r.match(/\((.*?)\)/)[1],n){case"url":o===a&&(t=!0);break;case"url-prefix":var c=o.substr(0,o.lastIndexOf("/")+1);c===a&&(t=!0);break;case"domain":var u=e.location.hostname;u.match(a)&&(t=!0);break;case"regexp":a=a.substr(1,a.length-2),o.match(a)&&(t=!0);break;default:console.log("there no document solution like you write!")}return t||!1}}var e=window,t=e.CSS||(e.CSS={}),n=t.doc;if("function"==typeof n)try{return void n.call(t,"url()")}catch(a){}else{var o;n=function(){for(var e=!0,t=arguments.length-1;t>=0;t--)e=e&&r(arguments[t]);return e};try{o=e.stylefix||require("stylefix")}catch(c){}o&&o.register(function(r,e){return e?r.replace(/@document\s+([^\{]+)/g,function(r,e){try{e&&n(e)&&(r="@media all ")}catch(t){}return r}):void 0})}t.doc=function(e,t){var a=arguments.length;if(a)return 1===a?r(e):n(e,t);throw new Error("WRONG_ARGUMENTS_ERR")}}();});