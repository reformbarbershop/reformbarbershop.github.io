(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3,4,5,6,7,8,9],{310:function(t,e,n){t.exports=n.p+"img/uppercut-pomade1.8eb179b.png"},311:function(t,e,n){"use strict";n.r(e);var o={props:{headerType:{type:String,default:""}},data:function(){return{scrollPosition:!1,menu_opened:!1}},mounted:function(){window.addEventListener("scroll",this.updateScroll)},methods:{updateScroll:function(){this.scrollPosition=window.scrollY}}},r=n(38),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header",class:{fixed:t.scrollPosition>100,embed:t.headerType}},[o("div",{staticClass:"image",style:{backgroundImage:"url("+n(313)+")"},attrs:{"data-aos":"fade-up","data-aos-delay":"200"}}),t._v(" "),o("div",{staticClass:"container"},[o("div",{staticClass:"header__logo",attrs:{"data-aos":"fade-down","data-aos-delay":"300"}},[o("nuxt-link",{attrs:{to:"/"}},[o("img",{attrs:{src:n(314),alt:""}})])],1),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"scroll_down",attrs:{href:"#contacts"}},[e("i",{staticClass:"icon-arrow"})])}],!1,null,null,null);e.default=component.exports},312:function(t,e,n){"use strict";n.r(e);var o=n(38),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("p",[t._v("© 2021 Reform Barbershop. Всі права захищено.")])])])}],!1,null,null,null);e.default=component.exports},313:function(t,e,n){t.exports=n.p+"img/hero_background.19f6b22.jpeg"},314:function(t,e,n){t.exports=n.p+"img/logo.0302669.svg"},315:function(t,e,n){t.exports=function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="dist/",e(0)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},a=(o(n(1)),n(6)),u=o(a),s=o(n(7)),r=o(n(8)),p=o(n(9)),b=o(n(10)),c=o(n(11)),l=o(n(14)),d=[],f=!1,m={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(f=!0),f)return d=(0,c.default)(d,m),(0,b.default)(d,m.once),d},h=function(){d=(0,l.default)(),v()},y=function(){d.forEach((function(t,e){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay")}))},w=function(t){return!0===t||"mobile"===t&&p.default.mobile()||"phone"===t&&p.default.phone()||"tablet"===t&&p.default.tablet()||"function"==typeof t&&!0===t()},_=function(t){m=i(m,t),d=(0,l.default)();var e=document.all&&!window.atob;return w(m.disable)||e?y():(m.disableMutationObserver||r.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),m.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",m.easing),document.querySelector("body").setAttribute("data-aos-duration",m.duration),document.querySelector("body").setAttribute("data-aos-delay",m.delay),"DOMContentLoaded"===m.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===m.startEvent?window.addEventListener(m.startEvent,(function(){v(!0)})):document.addEventListener(m.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,s.default)(v,m.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(v,m.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)((function(){(0,b.default)(d,m.once)}),m.throttleDelay)),m.disableMutationObserver||r.default.ready("[data-aos]",h),d)};t.exports={init:_,refresh:v,refreshHard:h}},function(t,e){},,,,,function(t,e){(function(e){"use strict";function n(t,e,n){function o(e){var n=b,o=v;return b=v=void 0,j=e,g=t.apply(o,n)}function r(t){return j=t,y=setTimeout(l,e),C?o(t):g}function a(t){var i=e-(t-w);return O?k(i,h-(t-j)):i}function c(t){var n=t-w;return void 0===w||n>=e||n<0||O&&t-j>=h}function l(){var t=x();return c(t)?d(t):void(y=setTimeout(l,a(t)))}function d(t){return y=void 0,E&&b?o(t):(b=v=void 0,g)}function f(){void 0!==y&&clearTimeout(y),j=0,b=w=v=y=void 0}function p(){return void 0===y?g:d(x())}function m(){var t=x(),n=c(t);if(b=arguments,v=this,w=t,n){if(void 0===y)return r(w);if(O)return y=setTimeout(l,e),o(w)}return void 0===y&&(y=setTimeout(l,e)),g}var b,v,h,g,y,w,j=0,C=!1,O=!1,E=!0;if("function"!=typeof t)throw new TypeError(s);return e=u(e)||0,i(n)&&(C=!!n.leading,h=(O="maxWait"in n)?_(u(n.maxWait)||0,e):h,E="trailing"in n?!!n.trailing:E),m.cancel=f,m.flush=p,m}function o(t,e,o){var r=!0,a=!0;if("function"!=typeof t)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(t,e,{leading:r,maxWait:e,trailing:a})}function i(t){var e=void 0===t?"undefined":c(t);return!!t&&("object"==e||"function"==e)}function r(t){return!!t&&"object"==(void 0===t?"undefined":c(t))}function a(t){return"symbol"==(void 0===t?"undefined":c(t))||r(t)&&w.call(t)==d}function u(t){if("number"==typeof t)return t;if(a(t))return l;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var n=m.test(t);return n||b.test(t)?v(t.slice(2),n?2:8):p.test(t)?l:+t}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s="Expected a function",l=NaN,d="[object Symbol]",f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,h="object"==(void 0===e?"undefined":c(e))&&e&&e.Object===Object&&e,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,y=h||g||Function("return this")(),w=Object.prototype.toString,_=Math.max,k=Math.min,x=function(){return y.Date.now()};t.exports=o}).call(e,function(){return this}())},function(t,e){(function(e){"use strict";function n(t,e,n){function i(e){var n=b,o=v;return b=v=void 0,j=e,g=t.apply(o,n)}function r(t){return j=t,y=setTimeout(l,e),C?i(t):g}function u(t){var i=e-(t-x);return O?_(i,h-(t-j)):i}function s(t){var n=t-x;return void 0===x||n>=e||n<0||O&&t-j>=h}function l(){var t=k();return s(t)?d(t):void(y=setTimeout(l,u(t)))}function d(t){return y=void 0,E&&b?i(t):(b=v=void 0,g)}function f(){void 0!==y&&clearTimeout(y),j=0,b=x=v=y=void 0}function p(){return void 0===y?g:d(k())}function m(){var t=k(),n=s(t);if(b=arguments,v=this,x=t,n){if(void 0===y)return r(x);if(O)return y=setTimeout(l,e),i(x)}return void 0===y&&(y=setTimeout(l,e)),g}var b,v,h,g,y,x,j=0,C=!1,O=!1,E=!0;if("function"!=typeof t)throw new TypeError(c);return e=a(e)||0,o(n)&&(C=!!n.leading,h=(O="maxWait"in n)?w(a(n.maxWait)||0,e):h,E="trailing"in n?!!n.trailing:E),m.cancel=f,m.flush=p,m}function o(t){var e=void 0===t?"undefined":u(t);return!!t&&("object"==e||"function"==e)}function i(t){return!!t&&"object"==(void 0===t?"undefined":u(t))}function r(t){return"symbol"==(void 0===t?"undefined":u(t))||i(t)&&y.call(t)==l}function a(t){if("number"==typeof t)return t;if(r(t))return s;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(d,"");var n=p.test(t);return n||m.test(t)?b(t.slice(2),n?2:8):f.test(t)?s:+t}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c="Expected a function",s=NaN,l="[object Symbol]",d=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==(void 0===e?"undefined":u(e))&&e&&e.Object===Object&&e,h="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||h||Function("return this")(),y=Object.prototype.toString,w=Math.max,_=Math.min,k=function(){return g.Date.now()};t.exports=n}).call(e,function(){return this}())},function(t,e){"use strict";function n(t){var e=void 0,o=void 0;for(e=0;e<t.length;e+=1){if((o=t[e]).dataset&&o.dataset.aos)return!0;if(o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(t,e){var n=window.document,r=new(o())(a);u=e,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(t){t&&t.forEach((function(t){var e=Array.prototype.slice.call(t.addedNodes),o=Array.prototype.slice.call(t.removedNodes);if(n(e.concat(o)))return u()}))}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){};e.default={isSupported:i,ready:r}},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function t(){n(this,t)}return i(t,[{key:"phone",value:function(){var t=o();return!(!r.test(t)&&!a.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=o();return!(!u.test(t)&&!c.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),t}();e.default=new s},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e,n){var o=t.node.getAttribute("data-aos-once");e>t.position?t.node.classList.add("aos-animate"):void 0!==o&&("false"===o||!n&&"true"!==o)&&t.node.classList.remove("aos-animate")},o=function(t,e){var o=window.pageYOffset,i=window.innerHeight;t.forEach((function(t,r){n(t,i+o,e)}))};e.default=o},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(12)),a=function(t,e){return t.forEach((function(t,n){t.node.classList.add("aos-init"),t.position=(0,r.default)(t.node,e.offset)})),t};e.default=a},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(13)),a=function(t,e){var n=0,o=0,i=window.innerHeight,a={offset:t.getAttribute("data-aos-offset"),anchor:t.getAttribute("data-aos-anchor"),anchorPlacement:t.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(t=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(t).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=t.offsetHeight/2;break;case"bottom-bottom":n+=t.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+t.offsetHeight;break;case"center-center":n+=i/2+t.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=t.offsetHeight+i;break;case"center-top":n+=t.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(e)||(o=e),n+o};e.default=a},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){for(var e=0,n=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),n+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:n,left:e}};e.default=n},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,(function(t){return{node:t}}))};e.default=n}])},316:function(t,e,n){t.exports=n.p+"img/gallery-image2.948675f.jpg"},317:function(t,e,n){t.exports=n.p+"img/gallery-image1.264af43.jpg"},318:function(t,e,n){t.exports=n.p+"img/gallery-image5.c136272.jpg"},319:function(t,e,n){t.exports=n.p+"img/gallery-image3.598154d.jpg"},320:function(t,e,n){"use strict";n.r(e);var o=n(315),r=n.n(o),c=n(311),l=n(312),d={components:{PageHeader:c.default,PageFooter:l.default},props:{headerState:{type:Boolean,default:!1},headerType:{type:String,default:""}},created:function(){setTimeout((function(){r.a.init({duration:800})}),3500)}},f=n(38),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-wrapper"},[n("page-header",{attrs:{fixedHeader:t.headerState,headerType:t.headerType}}),t._v(" "),n("main",[t._t("default")],2),t._v(" "),n("page-footer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeader:n(311).default,PageFooter:n(312).default})},321:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{dialogVisible:!1}}},r=n(38),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"tiles",attrs:{id:"contacts"}},[o("div",{staticClass:"container"},[o("h2",{attrs:{"data-aos":"fade-up","data-aos-delay":"200"}},[t._v("\n      Виберіть зручний спосіб для запису:\n    ")]),t._v(" "),o("div",{staticClass:"row"},[o("div",{staticClass:"col item",attrs:{"data-aos":"zoom-in-up","data-aos-delay":"200"}},[o("a",{attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.dialogVisible=!0}}},[o("div",{staticClass:"item__inner"},[o("div",{staticClass:"image",style:{backgroundImage:"url("+n(310)+")"}}),t._v(" "),o("i",{staticClass:"icon-booking"})])])]),t._v(" "),o("div",{staticClass:"col item",attrs:{"data-aos":"zoom-in-up","data-aos-delay":"300"}},[o("a",{attrs:{href:"tel:+380983937923"}},[o("div",{staticClass:"item__inner"},[o("div",{staticClass:"image",style:{backgroundImage:"url("+n(310)+")"}}),t._v(" "),o("i",{staticClass:"icon-phone"})])])]),t._v(" "),o("div",{staticClass:"col item",attrs:{"data-aos":"zoom-in-up","data-aos-delay":"400"}},[o("a",{attrs:{href:"https://t.me/Reformbarbershop"}},[o("div",{staticClass:"item__inner"},[o("div",{staticClass:"image",style:{backgroundImage:"url("+n(310)+")"}}),t._v(" "),o("i",{staticClass:"icon-telegram"})])])]),t._v(" "),o("div",{staticClass:"col item",attrs:{"data-aos":"zoom-in-up","data-aos-delay":"500"}},[o("a",{attrs:{href:"viber://chat?number=%2B380983937923"}},[o("div",{staticClass:"item__inner"},[o("div",{staticClass:"image",style:{backgroundImage:"url("+n(310)+")"}}),t._v(" "),o("i",{staticClass:"icon-viber"})])])])])]),t._v(" "),o("el-dialog",{attrs:{visible:t.dialogVisible,width:"35%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("section",{staticClass:"embed-yclients"},[o("iframe",{attrs:{src:"https://n525057.yclients.com/company:496644",width:"100%",height:"600"}})])])],1)}),[],!1,null,null,null);e.default=component.exports},322:function(t,e,n){"use strict";n.r(e);var o=n(38),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"map"},[n("div",{staticClass:"container"},[n("div",{staticClass:"map__text",attrs:{"data-aos":"fade-right","data-aos-delay":"200"}},[n("h2",[t._v("Де ми знаходимось:")])]),t._v(" "),n("div",{staticClass:"map__object",attrs:{"data-aos":"fade-left","data-aos-delay":"400"}},[n("iframe",{staticStyle:{border:"none"},attrs:{src:"https://snazzymaps.com/embed/317411",width:"100%",height:"600px"}})])])])}],!1,null,null,null);e.default=component.exports},323:function(t,e,n){"use strict";n.r(e);var o=n(38),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"social"},[n("div",{staticClass:"container",attrs:{"data-aos":"fade-up","data-aos-delay":"100"}},[n("h2",[n("a",{attrs:{href:"https://www.instagram.com/reform_barbershop/",target:"_blank",rel:"noopener"}},[t._v("@reform_barbershop")])])])])}],!1,null,null,null);e.default=component.exports},324:function(t,e,n){"use strict";n.r(e);var o=n(38),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"gallery"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row"},[o("div",{staticClass:"item"},[o("div",{staticClass:"image",style:{backgroundImage:"url("+n(316)+")"},attrs:{"data-aos":"fade-right","data-aos-delay":"100"}}),t._v(" "),o("div",{staticClass:"image",style:{backgroundImage:"url("+n(317)+")"},attrs:{"data-aos":"fade-left","data-aos-delay":"200"}})]),t._v(" "),o("div",{staticClass:"item"},[o("div",{staticClass:"image",style:{backgroundImage:"url("+n(318)+")"},attrs:{"data-aos":"fade-right","data-aos-delay":"300"}}),t._v(" "),o("div",{staticClass:"image",style:{backgroundImage:"url("+n(319)+")"},attrs:{"data-aos":"fade-left","data-aos-delay":"400"}})])])])])}),[],!1,null,null,null);e.default=component.exports},329:function(t,e,n){"use strict";n.r(e);var o=n(320),r=n(321),c=n(322),l=n(323),d=n(324),f={layout:"default",components:{PageWrapper:o.default,Tiles:r.default,EmbedMap:c.default,Social:l.default,Gallery:d.default},data:function(){return{fixedHeader:!0}},head:function(){return{title:"REFORM"}},mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start(),setTimeout((function(){return t.$nuxt.$loading.finish()}),3500)}))}},m=n(38),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-wrapper",{attrs:{"header-state":t.fixedHeader}},[n("tiles"),t._v(" "),n("embed-map"),t._v(" "),n("social"),t._v(" "),n("gallery")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Tiles:n(321).default,EmbedMap:n(322).default,Social:n(323).default,Gallery:n(324).default,PageWrapper:n(320).default})}}]);