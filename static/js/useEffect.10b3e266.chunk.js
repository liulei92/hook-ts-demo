(this["webpackJsonphook-ts-demo"]=this["webpackJsonphook-ts-demo"]||[]).push([[4],{38:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var c,u=t[Symbol.iterator]();!(r=(c=u.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(e,"a",(function(){return o}))},43:function(t,e,n){"use strict";n.r(e);var r=n(38),o=n(0),a=n.n(o),c=0,u=function(t){var e=Object(o.useState)("pingm"),n=Object(r.a)(e,2),u=n[0],i=n[1];return Object(o.useEffect)((function(){c+=1}),[u]),Object(o.useEffect)((function(){var t=function(t){console.log(t)};return window.addEventListener("click",t,!0),function(){window.removeEventListener("click",t,!0)}}),[]),a.a.createElement("div",null,a.a.createElement("p",null,"Name: ",u),a.a.createElement("p",null,"Count: ",c),a.a.createElement("button",{onClick:function(){return i("Jack")}},"Jack"),a.a.createElement("button",{onClick:function(){return i("Tom")}},"Tom"))};e.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(u,null))}}}]);
//# sourceMappingURL=useEffect.10b3e266.chunk.js.map