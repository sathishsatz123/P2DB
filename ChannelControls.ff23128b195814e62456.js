(this.webpackJsonp=this.webpackJsonp||[]).push([[5],{500:function(e,t,n){"use strict";n.r(t),function(e){var a,r=n(10),o=n.n(r),i=n(18),l=n.n(i),c=n(360),u=n(366),s=n(359),d=n(501),f=n(502),b=n(503);function p(e,t,n,a,r,o,i){try{var l=e[o](i),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(a,r)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function i(e){p(o,a,r,i,l,"next",e)}function l(e){p(o,a,r,i,l,"throw",e)}i(void 0)}))}}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e);var h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},v=new u.a;function y(e){var t=e.channel,n=e.disabled,a=Object(r.useContext)(s.a).uiStore;function i(e){return l.apply(this,arguments)}function l(){return(l=m(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.sendMessage(n);case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e.catch(0),v.error(e.t0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}function u(e){return p.apply(this,arguments)}function p(){return(p=m(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.sendFiles(n);case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e.catch(0),v.error(e.t0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))).apply(this,arguments)}return Object(c.a)((function(){return o.a.createElement("div",{className:"Controls"},o.a.createElement(b.a,{channelName:t?t.channelName:"",onSendMessage:i,theme:a.theme,useEmojis:a.useEmojis,emojiSet:a.emojiSet,disabled:n}),o.a.createElement(d.a,{onSelectFiles:u,theme:a.theme,disabled:n}),o.a.createElement(f.a,{channel:t,theme:a.theme}))}))}h(y,"useContext{{ uiStore }}\nuseObserver{}",(function(){return[c.a]})),y.propTypes={channel:l.a.object,disabled:l.a.bool};var g,j,k=y;t.default=k,(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(g.register(v,"logger","/home/theia/orbit-web/src/containers/ChannelControls.js"),g.register(y,"ChannelControls","/home/theia/orbit-web/src/containers/ChannelControls.js"),g.register(k,"default","/home/theia/orbit-web/src/containers/ChannelControls.js")),(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&j(e)}.call(this,n(52)(e))},501:function(e,t,n){"use strict";(function(e){var a,r=n(10),o=n.n(r),i=n(18),l=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e){var t=e.onSelectFiles,n=e.theme,a=e.disabled,r=o.a.createRef(),i=o.a.useCallback((function(e){e.preventDefault(),a||r.current.click()}),[a]),l=o.a.useCallback((function(){var e=r.current.files;e&&t(e),r.current.value=null}),[t]);return o.a.createElement("div",{className:"FileUploadButton",style:c({},n)},o.a.createElement("input",{type:"file",id:"file",multiple:!0,ref:r,style:{display:"none"},onChange:l}),o.a.createElement("div",{className:"icon flaticon-tool490",onClick:i}))}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(u,"useCallback{handleClick}\nuseCallback{handleFileSelect}"),u.propTypes={onSelectFiles:l.a.func.isRequired,theme:l.a.object.isRequired,disabled:l.a.bool};var s,d,f=u;t.a=f,(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(s.register(u,"FileUploadButton","/home/theia/orbit-web/src/components/FileUploadButton.js"),s.register(f,"default","/home/theia/orbit-web/src/components/FileUploadButton.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,n(52)(e))},502:function(e,t,n){"use strict";(function(e){var a,r=n(10),o=n.n(r),i=n(18),l=n.n(i),c=n(355),u=n(360);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(e){var t=e.channel,n=e.theme,a=d(Object(c.b)(),1)[0];return Object(u.a)((function(){var e=t?t.userCount:0;return o.a.createElement("div",{className:"ChannelStatus",style:s({},n)},e," ",a("channel.status.users",{count:e}))}))}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(f,"useTranslation{[t]}\nuseObserver{}",(function(){return[c.b,u.a]})),f.propTypes={channel:l.a.object,theme:l.a.object.isRequired};var b,p,m=f;t.a=m,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(f,"ChannelStatus","/home/theia/orbit-web/src/containers/ChannelStatus.js"),b.register(m,"default","/home/theia/orbit-web/src/containers/ChannelStatus.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,n(52)(e))},503:function(e,t,n){"use strict";(function(e){var a,r=n(10),o=n.n(r),i=n(18),l=n.n(i),c=n(355),u=n(389),s=n(505);n(509);function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(e){var t=e.channelName,n=e.onSendMessage,a=e.theme,r=e.useEmojis,i=e.emojiSet,l=e.disabled,f=d(Object(c.b)(),1)[0],b=d(o.a.useState(""),2),p=b[0],m=b[1],h=d(o.a.useState([]),2),v=h[0],y=h[1],g=d(o.a.useState(!1),2),j=g[0],k=g[1],w=o.a.useRef(),S=o.a.useRef(),C=o.a.useCallback((function(){w.current&&w.current.focus()}),[]),x=o.a.useCallback((function(e){if(e.preventDefault(),w.current){var t=w.current.value.trim();m(""),y([]),k(!1),C(),n(t).catch((function(e){m(t),C()}))}}),[n,C]),H=o.a.useCallback((function(){if(w.current){var e=w.current.value,t=e.split(" ").pop().startsWith(":")&&r,n=t?e.lastIndexOf(":"):null,a=t?e.slice(n):null,o=a?u.b.search(a):[];0===o.length&&(o=a?u.b.search(a.slice(1)):[]),m(e),y(o),k(t)}}),[r]),L=o.a.useCallback((function(e){S.current&&S.current.handleKeyDown(e)}),[]),G=o.a.useCallback((function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(e&&w.current){var n=p.lastIndexOf(":"),a=p.slice(0,n)+e.colons;m(a),k(!t),w.current.focus()}}),[p]);o.a.useLayoutEffect(C,[t,l,C]);var E;return o.a.createElement("div",{className:"SendMessage"},o.a.createElement("form",{onSubmit:x},j&&v.length>0?o.a.createElement(s.a,{ref:S,emojis:v,onChange:G,emojiSize:24,emojiSet:i,style:(E=24,{maxWidth:10*(E+2),bottom:w.current?w.current.offsetHeight+10:"45px"})}):null,o.a.createElement("input",{ref:w,type:"text",placeholder:f("channel.sendMessagePlaceholder"),style:a,value:p,onKeyDown:L,onChange:H,disabled:l})))}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(f,"useTranslation{[t]}\nuseState{[inputValue, setInputValue]('')}\nuseState{[emojiResults, setEmojiResults]([])}\nuseState{[emojiPickerActive, setEmojiPickerActive](false)}\nuseRef{inputRef}\nuseRef{emojiPickerRef}\nuseCallback{focusInput}\nuseCallback{handleInputSubmit}\nuseCallback{handleInputChange}\nuseCallback{handleInputKeyDown}\nuseCallback{handleEmojiChange}\nuseLayoutEffect{}",(function(){return[c.b]})),f.propTypes={channelName:l.a.string.isRequired,onSendMessage:l.a.func.isRequired,theme:l.a.object.isRequired,useEmojis:l.a.bool.isRequired,emojiSet:l.a.string.isRequired,disabled:l.a.bool};var b,p,m=f;t.a=m,(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(b.register(f,"SendMessage","/home/theia/orbit-web/src/containers/SendMessage.js"),b.register(m,"default","/home/theia/orbit-web/src/containers/SendMessage.js")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,n(52)(e))},505:function(e,t,n){"use strict";(function(e){var a,r=n(10),o=n.n(r),i=n(389);n(394),n(507);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function s(e,t){var n=e.emojis,a=e.emojiSize,r=e.emojiSet,s=e.onChange,d=u(e,["emojis","emojiSize","emojiSet","onChange"]),f=c(o.a.useState(0),2),b=f[0],p=f[1],m=o.a.useRef(),h=o.a.useCallback((function(e){try{var t=n[b];return s(t,e)}catch(t){return s(null,e)}}),[b,n,s]),v=o.a.useCallback((function(e){p(e),h()}),[h]),y=o.a.useCallback((function(e){b>n.length&&p(0);var t=!0;switch(e.key){case"ArrowRight":p(g(!0));break;case"ArrowLeft":p(g(!1));break;case"ArrowDown":p(j(!0));break;case"ArrowUp":p(j(!1));break;case"Tab":case"Enter":h(!0);break;default:t=!1}t&&e.preventDefault()}),[b,n.length,h]);o.a.useImperativeHandle(t,(function(){return{handleKeyDown:y}}),[y]);var g=o.a.useCallback((function(e){return e?(b+1)%n.length:b>0?b-1:n.length-1}),[b,n.length]),j=o.a.useCallback((function(e){if(m.current){var t=a+2,r=(m.current.offsetWidth-10)/t;if(e)return b+r>n.length-1?b%r:b+r;if(b-r<0){var o=Math.floor(n.length/r);return n.length%r>b?b+r*o:b+r*(o-1)}return b-r}}),[b,n.length,a]);return o.a.createElement("ul",l({ref:m,className:"EmojiPicker fadeUpAnimation"},d),n.map((function(e,t){return o.a.createElement("li",{key:e.id,className:b===t?"selected":"",onClick:function(){return v(t)}},o.a.createElement(i.a,{emoji:e,size:a,set:r}))})))}(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&a(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(s,"useState{[selectedIndex, setSelectedIndex](0)}\nuseRef{listRef}\nuseCallback{handleChange}\nuseCallback{handleClick}\nuseCallback{handleKeyDown}\nuseImperativeHandle{}\nuseCallback{calculateLeftRightIndex}\nuseCallback{calculateUpDownIndex}",(function(){return[o.a.useImperativeHandle]}));var d,f,b=o.a.forwardRef(s);t.a=b,(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(d.register(s,"EmojiPicker","/home/theia/orbit-web/src/components/EmojiPicker.js"),d.register(b,"default","/home/theia/orbit-web/src/components/EmojiPicker.js")),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&f(e)}).call(this,n(52)(e))},507:function(e,t,n){var a=n(508);"string"==typeof a&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};n(47)(a,r);a.locals&&(e.exports=a.locals)},508:function(e,t,n){(e.exports=n(46)(!1)).push([e.i,"@-webkit-keyframes fadeInUp{0%{opacity:0;transform:translateY(20px)}50%{opacity:0.3}100%{opacity:1;transform:translateY(0)}}@keyframes fadeInUp{0%{opacity:0;transform:translateY(20px)}50%{opacity:0.3}100%{opacity:1;transform:translateY(0)}}.EmojiPicker{display:flex;flex-direction:row;flex-wrap:wrap;position:absolute;padding:4px;margin:0 12px 0 5px;list-style:none;background-color:#404040;border:1px solid #1c1c1c}.EmojiPicker>*{display:flex;padding:1px}.EmojiPicker>*:hover{padding:0;border:1px solid #363636}.EmojiPicker .selected{padding:0;background-color:#5c5c5c;border:1px solid #363636}.fadeUpAnimation{-webkit-animation:fadeInUp;animation:fadeInUp;-webkit-animation-duration:0.1s;animation-duration:0.1s;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}\n",""])},509:function(e,t,n){var a=n(510);"string"==typeof a&&(a=[[e.i,a,""]]);var r={insert:"head",singleton:!1};n(47)(a,r);a.locals&&(e.exports=a.locals)},510:function(e,t,n){(e.exports=n(46)(!1)).push([e.i,".SendMessage{box-sizing:border-box;font-size:0.9em;padding:0.1em;color:gray;display:flex;flex:1 1 auto;max-width:60vmax;margin-top:0}.SendMessage form{display:flex;flex:1 1 auto;margin-right:0.5em}.SendMessage input[type='text']{margin:0.25em;margin-top:0.5em;margin-bottom:0.5em;flex:1 1 100%}.SendMessage .username{display:flex;align-items:center;color:#e4e4e4;margin-right:0.5em;padding:0em 0.25em}\n",""])}}]);