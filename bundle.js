!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/example/",t(t.s=5)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(7),c=r(l),p=n(6),f=r(p),d=n(0),h=r(d),m=n(1),y=r(m),v=n(13),x=r(v),g=function(e){function t(){var e,n,r,i;o(this,t);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.getClientPosition=function(e){var t=e.touches;if(t&&t.length){var n=t[0];return{x:n.clientX,y:n.clientY}}return{x:e.clientX,y:e.clientY}},r.getPosition=function(){var e=(r.props.y-r.props.ymin)/(r.props.ymax-r.props.ymin)*100,t=(r.props.x-r.props.xmin)/(r.props.xmax-r.props.xmin)*100;return e>100&&(e=100),e<0&&(e=0),"x"===r.props.axis&&(e=0),e+="%",t>100&&(t=100),t<0&&(t=0),"y"===r.props.axis&&(t=0),t+="%",{top:e,left:t}},r.change=function(e,t){if(r.props.onChange){var n=y.default.findDOMNode(r).getBoundingClientRect(),o=n.width,a=n.height,i=r.props,s=i.axis,u=i.xstep,l=i.ystep,c=i.xmax,p=i.xmin,f=i.ymax,d=i.ymin,h=e.top,m=e.left,v=0,x=0;m<0&&(m=0),m>o&&(m=o),h<0&&(h=0),h>a&&(h=a),"x"!==s&&"xy"!==s||(v=m/o*(c-p)),"y"!==s&&"xy"!==s||(x=h/a*(f-d));var g=(0!==v?parseInt(v/u,10)*u:0)+p,b=(0!==x?parseInt(x/l,10)*l:0)+d;r.props.onChange({x:g,y:b})}},r.handleMouseDown=function(e){e.preventDefault();var t=r.refs.handle,n=r.getClientPosition(e);r.start={x:t.offsetLeft,y:t.offsetTop},r.offset={x:n.x,y:n.y},document.addEventListener("mousemove",r.handleDrag),document.addEventListener("mouseup",r.handleDragEnd),document.addEventListener("touchmove",r.handleDrag,{passive:!1}),document.addEventListener("touchend",r.handleDragEnd),document.addEventListener("touchcancel",r.handleDragEnd)},r.getPos=function(e){var t=r.getClientPosition(e);y.default.findDOMNode(r).getBoundingClientRect();return{left:t.x+r.start.x-r.offset.x,top:t.y+r.start.y-r.offset.y}},r.handleDrag=function(e){e.preventDefault(),r.change(r.getPos(e))},r.handleDragEnd=function(e){e.preventDefault(),document.removeEventListener("mousemove",r.handleDrag),document.removeEventListener("mouseup",r.handleDragEnd),document.removeEventListener("touchmove",r.handleDrag),document.removeEventListener("touchend",r.handleDragEnd),document.removeEventListener("touchcancel",r.handleDragEnd),r.props.onDragEnd&&r.props.onDragEnd()},r.handleClick=function(e){var t=r.getClientPosition(e),n=y.default.findDOMNode(r).getBoundingClientRect();r.change({left:t.x-n.left,top:t.y-n.top},!0)},i=n,a(r,i)}return i(t,e),u(t,[{key:"render",value:function(){var e=this.props.axis,t=(0,f.default)(this.props,"axis","x","y","xmin","xmax","ymin","ymax","xstep","ystep","onChange","onDragEnd","className","onClick"),n=this.getPosition(),r={};return"x"===e&&(r.width=n.left),"y"===e&&(r.height=n.top),t.className=(0,c.default)("u-slider","u-slider-"+e,this.props.className),h.default.createElement("div",s({},t,{onClick:this.handleClick}),h.default.createElement("div",{className:"value",style:r}),h.default.createElement("div",{className:"handle",ref:"handle",onTouchStart:this.handleMouseDown,onMouseDown:this.handleMouseDown,onClick:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},style:n}))}}]),t}(d.Component);g.propTypes={axis:x.default.string,x:x.default.number,xmax:x.default.number,xmin:x.default.number,y:x.default.number,ymax:x.default.number,ymin:x.default.number,xstep:x.default.number,ystep:x.default.number},g.defaultProps={axis:"x",xmin:0,ymin:0,xstep:1,ystep:1},e.exports=g},function(e,t,n){var r=n(8);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;n(15)(r,o);r.locals&&(e.exports=r.locals)},function(e,t){e.exports={name:"react-input-slider",version:"3.0.0",description:"React input slider component",main:"index.js",scripts:{start:"webpack-dev-server -c --port=8080",build:"make",deploy:"rm -rf .publish && npm run build && github-pages-deploy",test:'echo "Error: no test specified" && exit 1',prepublish:"npm run build"},"github-pages-deploy":{src:"example"},repository:{type:"git",url:"https://github.com/wangzuo/react-input-slider.git"},keywords:["input","react","react-component","slider"],author:"Wang Zuo",license:"MIT",bugs:{url:"https://github.com/wangzuo/react-input-slider/issues"},homepage:"https://github.com/wangzuo/react-input-slider",peerDependencies:{react:"^15.0.0","react-dom":"^15.0.0"},devDependencies:{"babel-cli":"^6.24.1","babel-core":"^6.24.1","babel-loader":"^7.0.0","babel-preset-es2015":"^6.24.1","babel-preset-react":"^6.24.1","babel-preset-stage-0":"^6.24.1","css-loader":"^0.28.4","github-pages-deploy":"0.0.3",less:"^2.7.2","less-loader":"^4.0.3","style-loader":"^0.18.1",webpack:"^2.6.1"},dependencies:{blacklist:"^1.1.2",classnames:"^2.2.0","prop-types":"^15.5.10"}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(3);var u=n(0),l=r(u),c=n(1),p=r(c),f=n(2),d=r(f),h=n(4),m=r(h),y=function(e){function t(){var e,n,r,i;o(this,t);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return n=r=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),r.state={x:21,y:73,left:120,top:120},r.handleDragEnd=function(){console.log("handleDragEnd")},r.handleChange=function(e){r.setState({x:e.x,y:e.y})},r.handleChangeX=function(e){r.setState({left:e.x})},r.handleChangeY=function(e){r.setState({top:e.y})},i=n,a(r,i)}return i(t,e),s(t,[{key:"render",value:function(){return l.default.createElement("div",{className:"app"},l.default.createElement("h1",null,"react-input-slider",l.default.createElement("span",{className:"version"},m.default.version)),l.default.createElement("div",{className:"wrap"},l.default.createElement("div",{className:"example example-xy"},l.default.createElement("h3",null,"axis='xy', xmax=100, ymax=100"),l.default.createElement("div",null,"x: "+this.state.x),l.default.createElement("div",null,"y: "+this.state.y),l.default.createElement(d.default,{className:"slider",axis:"xy",x:this.state.x,xmax:100,y:this.state.y,ymax:100,onDragEnd:this.handleDragEnd,onChange:this.handleChange})),l.default.createElement("div",{className:"example example-x"},l.default.createElement("h3",null,"axis='x', xstep=10, xmin=100, xmax=360"),l.default.createElement("div",null,"x: "+this.state.left),l.default.createElement(d.default,{className:"slider",axis:"x",x:this.state.left,xmin:100,xmax:360,xstep:10,onDragEnd:this.handleDragEnd,onChange:this.handleChangeX})),l.default.createElement("div",{className:"example example-y"},l.default.createElement("h3",null,"axis='y', ymin=100, ymax=360"),l.default.createElement("div",null,"y: "+this.state.top),l.default.createElement(d.default,{className:"slider",axis:"y",y:this.state.top,ymin:100,ymax:360,onDragEnd:this.handleDragEnd,onChange:this.handleChangeY}))))}}]),t}(u.Component);p.default.render(l.default.createElement(y,null),document.getElementById("app"))},function(e,t){e.exports=function(e){var t={},n=arguments[1];if("string"==typeof n){n={};for(var r=1;r<arguments.length;r++)n[arguments[r]]=!0}for(var o in e)n[o]||(t[o]=e[o]);return t}},function(e,t,n){var r,o;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r))e.push(n.apply(null,r));else if("object"===o)for(var i in r)a.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}var a={}.hasOwnProperty;void 0!==e&&e.exports?e.exports=n:(r=[],void 0!==(o=function(){return n}.apply(t,r))&&(e.exports=o))}()},function(e,t,n){t=e.exports=n(9)(void 0),t.push([e.i,'.u-slider{position:relative;display:inline-block;background-color:#ddd;border-radius:3px}.u-slider .value{position:absolute;background-color:#2e8ece;border-radius:3px}.u-slider .handle{position:absolute;width:20px;height:20px}.u-slider .handle:after{position:relative;display:block;content:""}.u-slider-x .handle:after,.u-slider-y .handle:after{width:24px;height:24px;background-color:#fff;border:3px solid #2e8ece;border-radius:50%}.u-slider-x{height:20px}.u-slider-x .handle{height:100%}.u-slider-x .handle:after{top:-2px;left:-12px}.u-slider-x .value{top:0;height:100%}.u-slider-y{width:20px}.u-slider-y .handle{width:100%}.u-slider-y .handle:after{top:-12px;left:-2px}.u-slider-y .value{left:0;width:100%}.u-slider-xy{position:relative;width:100%;height:100%;background-color:#2e8ece;border-radius:0}.u-slider-xy .handle{position:absolute}.u-slider-xy .handle:after{position:relative;display:block;top:-10px;left:-10px;width:20px;height:20px;background-color:transparent;border:2px solid #fff;border-radius:50%;content:""}',""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var a=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<e.length;o++){var i=e[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";function r(e,t,n,r,a,i,s,u){if(o(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,r,a,i,s,u],p=0;l=new Error(t.replace(/%s/g,function(){return c[p++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}var o=function(e){};e.exports=r},function(e,t,n){"use strict";var r=n(10),o=n(11),a=n(14);e.exports=function(){function e(e,t,n,r,i,s){s!==a&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){e.exports=n(12)()},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=h[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(c(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(c(r.parts[a],t));h[r.id]={id:r.id,refs:1,parts:i}}}}function o(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],s=a[1],u=a[2],l=a[3],c={css:s,media:u,sourceMap:l};r[i]?r[i].parts.push(c):n.push(r[i]={id:i,parts:[c]})}return n}function a(e,t){var n=y(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function s(e){var t=document.createElement("style");return e.attrs.type="text/css",l(t,e.attrs),a(e,t),t}function u(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",l(t,e.attrs),a(e,t),t}function l(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function c(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var l=x++;n=v||(v=s(t)),r=p.bind(null,n,l,!1),o=p.bind(null,n,l,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(t),r=d.bind(null,n,t),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=f.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function p(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=E(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=b(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}var h={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),y=function(e){var t={};return function(n){return void 0===t[n]&&(t[n]=e.call(this,n)),t[n]}}(function(e){return document.querySelector(e)}),v=null,x=0,g=[],b=n(16);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=o(e,t);return r(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var s=n[i],u=h[s.id];u.refs--,a.push(u)}if(e){r(o(e,t),t)}for(var i=0;i<a.length;i++){var u=a[i];if(0===u.refs){for(var l=0;l<u.parts.length;l++)u.parts[l]();delete h[u.id]}}}};var E=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o))return e;var a;return a=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}}]);
//# sourceMappingURL=bundle.js.map