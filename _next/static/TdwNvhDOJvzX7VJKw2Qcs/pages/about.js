(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/0+H":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery;return n||o&&(void 0!==a&&a)}t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))}},"3XHS":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("q1tI"),o=n.n(r),a=n("YFqc"),i=n.n(a),u=n("Lb80"),c=n("/r5L"),l=o.a.createElement;function s(){return l(u.a,{title:"About"},l("p",null,"Hello there, I am Sushant, currently living in"," ",l(c.a,{externalIcon:!0,href:"https://en.wikipedia.org/wiki/Chandigarh",text:"Chandigarh"})),l("p",null,"Full stack developer working with Node.JS / React / Sequelize / GraphQL mainly. ",l("br",null),"In past I have used Ember.js / Angular.js / Yii / Laravel to develop many web apps."),l("p",null,"Member of"," ",l(c.a,{externalIcon:!0,href:"https://github.com/sequelize",text:"Sequelize"})," ","team. I also contribute other"," ",l(i.a,{href:"/projects"},l("a",null,"projects")),"."),l("p",null,"If you want to discuss something, please contact me"," ",l(c.a,{href:"mailto:sushantdhiman@outlook.com",text:"via email"}),"."))}},"8Kt/":function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI")),a=r(n("Xuae")),i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=l;var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(s,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=f.length;u<c;u++){var l=f[u];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var s=o.props[l],p=r[l]||new Set;p.has(s)?a=!1:(p.add(s),r[l]=p)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}var h=a.default();function d(e){var t=e.children;return o.default.createElement(i.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(u.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(h,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:c.isInAmpMode(e)},t)}))}))}d.rewind=h.rewind,t.default=d},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.HeadManagerContext=o.createContext(null)},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},Lb80:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("q1tI"),o=n.n(r),a=n("TSYQ"),i=n.n(a),u=n("8Kt/"),c=n.n(u),l=o.a.createElement;function s(e){var t=e.title,n=e.children,r=e.className;return l("div",{className:i()("mt-3",r)},l(c.a,null,l("title",null,"Sushantdhiman.com - ",t)),l("h2",{style:{textDecoration:"underline"},className:"text-center text-primary"},t),n)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||a()}},Xuae:function(e,t,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),a=n("W8MJ"),i=n("a1gu"),u=n("Nsbk"),c=n("7W2i"),l=n("RIqP");function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var f=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(l(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(l){c(d,l);var f,h=(f=d,function(){var e,t=u(f);if(s()){var n=u(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return i(this,e)});function d(e){var a;return r(this,d),a=h.call(this,e),p&&(t.add(o(a)),n(o(a))),a}return a(d,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),a(d,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),d}(f.Component)}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("a1gu"),i=n("Nsbk"),u=n("7W2i");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var l=n("TqRt"),s=n("284h");t.__esModule=!0,t.default=void 0;var f,p=s(n("q1tI")),h=n("QmWs"),d=n("g/15"),v=l(n("nOHt"));function m(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var y=new Map,w=window.IntersectionObserver,g={};function b(){return f||(w?f=new w((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var _=function(e){u(l,e);var t,n=(t=l,function(){var e,n=i(t);if(c()){var r=i(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return a(this,e)});function l(e){var t;return r(this,l),(t=n.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var i=e(o,a);return t=o,n=a,r=i,i}}((function(e,t){return{href:m(e),as:t?m(t):t}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=t.formatUrls(t.props.href,t.props.as),i=a.href,u=a.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=(0,h.resolve)(c,i),u=u?(0,h.resolve)(c,u):i,e.preventDefault();var l=t.props.scroll;null==l&&(l=u.indexOf("#")<0),v.default[t.props.replace?"replace":"push"](i,u,{shallow:t.props.shallow}).then((function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return o(l,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,h.resolve)(e,n);return[o,r?(0,h.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&w&&e&&e.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=b();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();v.default.prefetch(t[0],t[1],e).catch((function(e){0})),g[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var a=p.Children.only(t),i={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),p.default.cloneElement(a,i)}}]),l}(p.Component);t.default=_},lwAK:function(e,t,n){"use strict";var r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("q1tI"));t.AmpStateContext=o.createContext({})},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("3XHS")}])}},[["rB5V",0,1,2,3]]]);