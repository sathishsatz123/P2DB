!function(n){function e(e){for(var o,i,c=e[0],l=e[1],f=e[2],d=0,b=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(n[o]=l[o]);for(s&&s(e);b.length;)b.shift()();return a.push.apply(a,f||[]),t()}function t(){for(var n,e=0;e<a.length;e++){for(var t=a[e],o=!0,c=1;c<t.length;c++){var l=t[c];0!==r[l]&&(o=!1)}o&&(a.splice(e--,1),n=i(i.s=t[0]))}return n}var o={},r={17:0},a=[];function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(n){var e=[],t=r[n];if(0!==t)if(t)e.push(t[2]);else{var o=new Promise((function(e,o){t=r[n]=[e,o]}));e.push(t[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(n){return i.p+""+({0:"vendors~ChannelControls~ChannelMessages",1:"AlphaDisclaimer",2:"App",3:"BackgroundAnimation",4:"Channel",5:"ChannelControls",6:"ChannelHeader",7:"ChannelMessages",8:"ChannelView",9:"ControlPanel",10:"DropZone",11:"IndexView",12:"LoginForm",13:"LoginView",14:"LogoutView",15:"MessageUserProfilePanel",16:"SettingsView",18:"vendors~App",19:"vendors~ChannelMessages"}[n]||n)+".ff23128b195814e62456.js"}(n);var l=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(f);var t=r[n];if(0!==t){if(t){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+n+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,t[1](l)}r[n]=void 0}};var f=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},i.m=n,i.c=o,i.d=function(n,e,t){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},i.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)i.d(t,o,function(e){return n[e]}.bind(null,o));return t},i.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="./",i.oe=function(n){throw console.error(n),n};var c=this.webpackJsonp=this.webpackJsonp||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var s=l;a.push([137,20]),t()}({133:function(n,e,t){n.exports=t.p+"fonts/flaticon.5b9ab89830240d5160fe.eot"},134:function(n,e,t){"use strict";(function(n){var o;t.d(e,"a",(function(){return i})),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(n);var r,a;"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function i(){var n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];n&&window.location.href.match("http:")&&(window.location.href=window.location.href.replace("http","https"))}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&r.register(i,"redirectToHttps","/home/theia/orbit-web/src/utils/https.js"),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&a(n)}).call(this,t(52)(n))},135:function(n,e,t){"use strict";(function(n){var o,r=t(10),a=t.n(r),i=t(18),c=t.n(i),l=t(136),f=t.n(l),s=t(65),d=t.n(s);(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(n);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var b={"100%":{transform:"rotate(360deg)"}},p=f()(b);function u(n){return{width:n,height:n,borderRadius:"100%"}}function h(){return{animation:[p,"0.8s","0s","infinite","linear"].join(" "),animationFillMode:"forwards"}}function m(n,e,t){var o=parseInt(n),r=o/7;switch(t){case 1:return d()(Object.assign(u(r),h(),{backgroundColor:e,opacity:"0.8",position:"absolute",top:o/2-r/2}));case 2:return d()(Object.assign(u(o),{border:r+"px solid "+e,opacity:.1}));default:return d()(Object.assign(h(),{position:"relative"}))}}function g(n){var e=n.className,t=n.color,o=n.size,r=[0,1,2].map(m.bind(null,o,t));return a.a.createElement("div",{className:e},a.a.createElement("div",{style:r[0]},a.a.createElement("div",{style:r[1]}),a.a.createElement("div",{style:r[2]})))}g.propTypes={className:c.a.string,color:c.a.string,size:c.a.string},g.defaultProps={color:"#ffffff",size:"60px"};var y,v,w=g;e.a=w,(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(y.register(b,"keyframes","/home/theia/orbit-web/src/components/Spinner/MoonLoader.js"),y.register(p,"animationName","/home/theia/orbit-web/src/components/Spinner/MoonLoader.js"),y.register(u,"getBallStyle","/home/theia/orbit-web/src/components/Spinner/MoonLoader.js"),y.register(h,"getAnimationStyle","/home/theia/orbit-web/src/components/Spinner/MoonLoader.js"),y.register(m,"getStyle","/home/theia/orbit-web/src/components/Spinner/MoonLoader.js"),y.register(g,"MoonLoader","/home/theia/orbit-web/src/components/Spinner/MoonLoader.js"),y.register(w,"default","/home/theia/orbit-web/src/components/Spinner/MoonLoader.js")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(n)}).call(this,t(52)(n))},137:function(n,e,t){t(138),n.exports=t(324)},324:function(n,e,t){"use strict";t.r(e),function(n){var e,o=t(10),r=t.n(o),a=t(96),i=t(97),c=t(134),l=t(95);t(337),t(339),t(347),t(349);(e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&e(n);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;Object(c.a)(!("localhost"===window.location.hostname||"127.0.0.1"===window.location.hostname||"orbit.chat.ipns.localhost"===window.location.hostname));var f,s,d=r.a.lazy((function(){return Promise.all([t.e(18),t.e(2)]).then(t.bind(null,354))}));Object(a.render)(r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(l.a,null)},r.a.createElement(d,null)),document.getElementById("root")),console.info("Version ".concat(i.a," running in ").concat("production"," mode")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&f.register(d,"App","/home/theia/orbit-web/src/index.js"),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(n)}.call(this,t(52)(n))},335:function(n,e,t){var o=t(336);"string"==typeof o&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};t(47)(o,r);o.locals&&(n.exports=o.locals)},336:function(n,e,t){(n.exports=t(46)(!1)).push([n.i,".spinner{position:relative;box-sizing:border-box;display:flex;justify-content:center;align-items:center}.spinner.spinner-fixed{position:fixed;top:0;left:0;height:100%;width:100%;z-index:-1}\n",""])},337:function(n,e,t){var o=t(338);"string"==typeof o&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};t(47)(o,r);o.locals&&(n.exports=o.locals)},338:function(n,e,t){(n.exports=t(46)(!1)).push([n.i,'/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}',""])},339:function(n,e,t){var o=t(340);"string"==typeof o&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};t(47)(o,r);o.locals&&(n.exports=o.locals)},340:function(n,e,t){e=n.exports=t(46)(!1);var o=t(132),r=o(t(341)),a=o(t(342)),i=o(t(343)),c=o(t(344)),l=o(t(345)),f=o(t(346));e.push([n.i,"@font-face{font-family:'Lato';src:url("+r+') format("woff2"),url("https://fonts.googleapis.com/css?family=Lato"),url('+a+") format(\"truetype\")}@font-face{font-family:'LatoBold';src:url("+i+') format("woff2"),url("https://fonts.googleapis.com/css?family=Lato"),url('+c+") format(\"truetype\")}@font-face{font-family:'Roboto Mono';src:url("+l+') format("woff2"),url("https://fonts.googleapis.com/css?family=Roboto+Mono"),url('+f+') format("truetype")}\n',""])},341:function(n,e,t){n.exports=t.p+"fonts/Lato-Thin.7f4082a83b5889076d26.woff2"},342:function(n,e,t){n.exports=t.p+"fonts/Lato-Thin.3bb12767045b23fb72bd.ttf"},343:function(n,e,t){n.exports=t.p+"fonts/Lato-Light.adf6d5b55a2fe034953b.woff2"},344:function(n,e,t){n.exports=t.p+"fonts/Lato-Light.c8aec28487a8897701ec.ttf"},345:function(n,e,t){n.exports=t.p+"fonts/RobotoMono-Light.e87be289f8cead6d0386.woff2"},346:function(n,e,t){n.exports=t.p+"fonts/RobotoMono-Light.9b4c4c06ac376ebef3ae.ttf"},347:function(n,e,t){var o=t(348);"string"==typeof o&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};t(47)(o,r);o.locals&&(n.exports=o.locals)},348:function(n,e,t){(n.exports=t(46)(!1)).push([n.i,"html,body{font-family:'Lato';font-weight:normal;background:#222222;color:white;height:100%}h1{color:#e4e4e4;font-weight:normal;margin:auto;font-size:3em;text-align:center;padding:0.5em}#root{width:100%;height:100%}\n",""])},349:function(n,e,t){var o=t(350);"string"==typeof o&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};t(47)(o,r);o.locals&&(n.exports=o.locals)},350:function(n,e,t){e=n.exports=t(46)(!1);var o=t(132),r=o(t(133)),a=o(t(133)+"#iefix"),i=o(t(351)),c=o(t(352)),l=o(t(353));e.push([n.i,'@font-face {\n\tfont-family: "Flaticon";\n\tsrc: url('+r+");\n\tsrc: url("+a+') format("embedded-opentype"),\n\turl('+i+') format("woff"),\n\turl('+c+') format("truetype"),\n\turl('+l+') format("svg");\n\tfont-weight: normal;\n\tfont-style: normal;\n}\n[class^="flaticon-"]:before, [class*=" flaticon-"]:before,\n[class^="flaticon-"]:after, [class*=" flaticon-"]:after {\n\tfont-family: Flaticon;\n        /*font-size: 20px;*/\nfont-style: normal;\n/*margin-left: 20px;*/\n}.flaticon-access38:before {\n\tcontent: "\\e000";\n}\n.flaticon-accessory79:before {\n\tcontent: "\\e001";\n}\n.flaticon-agenda34:before {\n\tcontent: "\\e002";\n}\n.flaticon-alarm12:before {\n\tcontent: "\\e003";\n}\n.flaticon-alcohol85:before {\n\tcontent: "\\e004";\n}\n.flaticon-audio99:before {\n\tcontent: "\\e005";\n}\n.flaticon-avatar93:before {\n\tcontent: "\\e006";\n}\n.flaticon-battery-status61:before {\n\tcontent: "\\e007";\n}\n.flaticon-bookmarks10:before {\n\tcontent: "\\e008";\n}\n.flaticon-check-mark16:before {\n\tcontent: "\\e009";\n}\n.flaticon-chemistry44:before {\n\tcontent: "\\e00a";\n}\n.flaticon-christmas14:before {\n\tcontent: "\\e00b";\n}\n.flaticon-cinema13:before {\n\tcontent: "\\e00c";\n}\n.flaticon-clocks27:before {\n\tcontent: "\\e00d";\n}\n.flaticon-clothing293:before {\n\tcontent: "\\e00e";\n}\n.flaticon-clothing294:before {\n\tcontent: "\\e00f";\n}\n.flaticon-computer331:before {\n\tcontent: "\\e010";\n}\n.flaticon-computer71:before {\n\tcontent: "\\e011";\n}\n.flaticon-direction246:before {\n\tcontent: "\\e012";\n}\n.flaticon-directional35:before {\n\tcontent: "\\e013";\n}\n.flaticon-down-arrow83:before {\n\tcontent: "\\e014";\n}\n.flaticon-eyeglasses36:before {\n\tcontent: "\\e015";\n}\n.flaticon-file268:before {\n\tcontent: "\\e016";\n}\n.flaticon-filming19:before {\n\tcontent: "\\e017";\n}\n.flaticon-gear94:before {\n\tcontent: "\\e018";\n}\n.flaticon-graphics-editor79:before {\n\tcontent: "\\e019";\n}\n.flaticon-hanging4:before {\n\tcontent: "\\e01a";\n}\n.flaticon-hot-drink46:before {\n\tcontent: "\\e01b";\n}\n.flaticon-house287:before {\n\tcontent: "\\e01c";\n}\n.flaticon-info45:before {\n\tcontent: "\\e01d";\n}\n.flaticon-jewel29:before {\n\tcontent: "\\e01e";\n}\n.flaticon-label51:before {\n\tcontent: "\\e01f";\n}\n.flaticon-light201:before {\n\tcontent: "\\e020";\n}\n.flaticon-lines18:before {\n\tcontent: "\\e021";\n}\n.flaticon-linked1:before {\n\tcontent: "\\e022";\n}\n.flaticon-loving40:before {\n\tcontent: "\\e023";\n}\n.flaticon-mail22:before {\n\tcontent: "\\e024";\n}\n.flaticon-medals12:before {\n\tcontent: "\\e025";\n}\n.flaticon-message57:before {\n\tcontent: "\\e026";\n}\n.flaticon-microphone140:before {\n\tcontent: "\\e027";\n}\n.flaticon-monarchy53:before {\n\tcontent: "\\e028";\n}\n.flaticon-mouse16:before {\n\tcontent: "\\e029";\n}\n.flaticon-multimedia-option174:before {\n\tcontent: "\\e02a";\n}\n.flaticon-music-player86:before {\n\tcontent: "\\e02b";\n}\n.flaticon-music-player87:before {\n\tcontent: "\\e02c";\n}\n.flaticon-music-player88:before {\n\tcontent: "\\e02d";\n}\n.flaticon-music-player89:before {\n\tcontent: "\\e02e";\n}\n.flaticon-nation8:before {\n\tcontent: "\\e02f";\n}\n.flaticon-office-material37:before {\n\tcontent: "\\e030";\n}\n.flaticon-optical4:before {\n\tcontent: "\\e031";\n}\n.flaticon-orientation65:before {\n\tcontent: "\\e032";\n}\n.flaticon-phone-call37:before {\n\tcontent: "\\e033";\n}\n.flaticon-photograph16:before {\n\tcontent: "\\e034";\n}\n.flaticon-photography113:before {\n\tcontent: "\\e035";\n}\n.flaticon-pin133:before {\n\tcontent: "\\e036";\n}\n.flaticon-printer100:before {\n\tcontent: "\\e037";\n}\n.flaticon-prohibition35:before {\n\tcontent: "\\e038";\n}\n.flaticon-quaver50:before {\n\tcontent: "\\e039";\n}\n.flaticon-rectangle32:before {\n\tcontent: "\\e03a";\n}\n.flaticon-reload22:before {\n\tcontent: "\\e03b";\n}\n.flaticon-road-sign24:before {\n\tcontent: "\\e03c";\n}\n.flaticon-road-sign25:before {\n\tcontent: "\\e03d";\n}\n.flaticon-saving10:before {\n\tcontent: "\\e03e";\n}\n.flaticon-school-material20:before {\n\tcontent: "\\e03f";\n}\n.flaticon-screen11:before {\n\tcontent: "\\e040";\n}\n.flaticon-setup9:before {\n\tcontent: "\\e041";\n}\n.flaticon-sharing7:before {\n\tcontent: "\\e042";\n}\n.flaticon-shelter2:before {\n\tcontent: "\\e043";\n}\n.flaticon-speech-bubble109:before {\n\tcontent: "\\e044";\n}\n.flaticon-speed3:before {\n\tcontent: "\\e045";\n}\n.flaticon-sports-ball43:before {\n\tcontent: "\\e046";\n}\n.flaticon-square51:before {\n\tcontent: "\\e047";\n}\n.flaticon-squares119:before {\n\tcontent: "\\e048";\n}\n.flaticon-stars83:before {\n\tcontent: "\\e049";\n}\n.flaticon-stats123:before {\n\tcontent: "\\e04a";\n}\n.flaticon-storage13:before {\n\tcontent: "\\e04b";\n}\n.flaticon-storage75:before {\n\tcontent: "\\e04c";\n}\n.flaticon-suitcase90:before {\n\tcontent: "\\e04d";\n}\n.flaticon-sunny78:before {\n\tcontent: "\\e04e";\n}\n.flaticon-supermarket72:before {\n\tcontent: "\\e04f";\n}\n.flaticon-telephone287:before {\n\tcontent: "\\e050";\n}\n.flaticon-time103:before {\n\tcontent: "\\e051";\n}\n.flaticon-time104:before {\n\tcontent: "\\e052";\n}\n.flaticon-tool490:before {\n\tcontent: "\\e053";\n}\n.flaticon-tool491:before {\n\tcontent: "\\e054";\n}\n.flaticon-tool492:before {\n\tcontent: "\\e055";\n}\n.flaticon-tool493:before {\n\tcontent: "\\e056";\n}\n.flaticon-tool494:before {\n\tcontent: "\\e057";\n}\n.flaticon-tool495:before {\n\tcontent: "\\e058";\n}\n.flaticon-tool496:before {\n\tcontent: "\\e059";\n}\n.flaticon-tool497:before {\n\tcontent: "\\e05a";\n}\n.flaticon-tool498:before {\n\tcontent: "\\e05b";\n}\n.flaticon-tool499:before {\n\tcontent: "\\e05c";\n}\n.flaticon-tool500:before {\n\tcontent: "\\e05d";\n}\n.flaticon-tv10:before {\n\tcontent: "\\e05e";\n}\n.flaticon-uploading37:before {\n\tcontent: "\\e05f";\n}\n.flaticon-winner61:before {\n\tcontent: "\\e060";\n}\n.flaticon-wireless-connectivity44:before {\n\tcontent: "\\e061";\n}\n.flaticon-wireless-connectivity45:before {\n\tcontent: "\\e062";\n}\n.flaticon-writing144:before {\n\tcontent: "\\e063";\n}\n',""])},351:function(n,e,t){n.exports=t.p+"fonts/flaticon.267024f74d2fffcb67c7.woff"},352:function(n,e,t){n.exports=t.p+"fonts/flaticon.2a755d345821a02a2809.ttf"},353:function(n,e,t){n.exports=t.p+"images/flaticon.3617de7799412be93c09.svg"},95:function(n,e,t){"use strict";(function(n){t.d(e,"a",(function(){return h}));var o,r=t(10),a=t.n(r),i=t(18),c=t.n(i),l=t(135);t(335);function f(){return(f=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}function s(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(n);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;function d(n){var e=n.className,t=n.theme,o=n.loading,r=s(n,["className","theme","loading"]);return o?a.a.createElement("div",{className:e,style:t},a.a.createElement(l.a,f({className:"spinnerIcon"},r))):null}d.defaultProps={className:"spinner",color:"rgba(255, 255, 255, 0.7)",loading:!0,size:"16px"},d.propTypes={className:c.a.string,theme:c.a.object,loading:c.a.bool,color:c.a.string,size:c.a.string};var b=d;e.b=b;var p,u,h=function(){return a.a.createElement(d,{className:"spinner spinner-fixed",size:"64px"})};(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(p.register(d,"Spinner","/home/theia/orbit-web/src/components/Spinner/index.js"),p.register(h,"BigSpinner","/home/theia/orbit-web/src/components/Spinner/index.js"),p.register(b,"default","/home/theia/orbit-web/src/components/Spinner/index.js")),(u="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&u(n)}).call(this,t(52)(n))},97:function(n){n.exports=JSON.parse('{"a":"1.0.0-alpha-15"}')}});