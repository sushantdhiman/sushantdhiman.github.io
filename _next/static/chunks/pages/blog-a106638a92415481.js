(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7286:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(4254)}])},9008:function(e,t,n){e.exports=n(2636)},2891:function(e,t,n){let r=n(1439),o=n(7224),a="[^\\s'’\\(\\)!?;:\"-]",i=RegExp(`(?:(?:(\\s?(?:^|[.\\(\\)!?;:"-])\\s*)(${a}))|(${a}))(${a}*[’']*${a}*)`,"g"),c=e=>e.map(e=>[RegExp(`\\b${e}\\b`,"gi"),e]);e.exports=(e,t={})=>{e=e.toLowerCase().replace(i,(e,t="",n,o,a,i,c)=>{let s=e.length+i>=c.length,l=function(e){let t=e[0];return/\s/.test(t)?e.slice(1):/[\(\)]/.test(t)?null:e}(e);return l?!n&&r.has(o+a)&&!s?l:t+(o||n).toUpperCase()+a:e});let n=t.special||[],a=[...o,...n],s=c(a);return s.forEach(([t,n])=>{e=e.replace(t,n)}),e}},1439:function(e){e.exports=new Set(["for","and","nor","but","or","yet","so","a","an","the","aboard","about","above","across","after","against","along","amid","among","anti","around","as","at","before","behind","below","beneath","beside","besides","between","beyond","but","by","concerning","considering","despite","down","during","except","excepting","excluding","following","for","from","in","inside","into","like","minus","near","of","off","on","onto","opposite","over","past","per","plus","regarding","round","save","since","than","through","to","toward","towards","under","underneath","unlike","until","up","upon","versus","via","with","within","without"])},7224:function(e){e.exports=["ZEIT","ZEIT Inc.","Vercel","Vercel Inc.","CLI","API","HTTP","HTTPS","JSX","DNS","URL","now.sh","now.json","vercel.app","vercel.json","CI","CD","CDN","package.json","package.lock","yarn.lock","GitHub","GitLab","CSS","Sass","JS","JavaScript","TypeScript","HTML","WordPress","Next.js","Node.js","Webpack","Docker","Bash","Kubernetes","SWR","TinaCMS","UI","UX","TS","TSX","iPhone","iPad","watchOS","iOS","iPadOS","macOS","PHP","composer.json","composer.lock","CMS","SQL","C","C#","GraphQL","GraphiQL","JWT","JWTs"]},4254:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(5893),o=n(794),a=n(5613);function i(){return(0,r.jsx)(o.Z,{title:"Blog",children:(0,r.jsx)(a.Z,{})})}},5613:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r,o=n(5893),a=n(1664),i=n(2891),c=function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};function s(e,t,n){var r=e.length-t.length,o=Array.from(t);if(0===r)return e.apply(void 0,o);if(1===r){var a=function(t){return e.apply(void 0,c([t],o,!1))};return(n||e.lazy)&&(a.lazy=n||e.lazy,a.lazyArgs=t),a}throw Error("Wrong number of arguments")}function l(){return s(d(!1),arguments)}var d=function(e){return function(t,n){var r={};return t.forEach(function(o,a){var i=e?n(o,a,t):n(o);if(void 0!==i){var c=String(i);r[c]||(r[c]=[]),r[c].push(o)}}),r}};(r=l||(l={})).indexed=function(){return s(d(!0),arguments)},r.strict=r;var u=n(8994);let p=l(u,e=>new Date(e.createdAt).getFullYear()),f=Object.keys(p).sort().reverse();function h(){return(0,o.jsx)("div",{children:f.map(e=>(0,o.jsxs)("div",{className:"py-4 border-bottom",children:[(0,o.jsx)("h4",{children:(0,o.jsx)("span",{className:"badge bg-primary p-2",children:e})}),p[e].map(e=>(0,o.jsxs)("div",{className:"row align-items-center",children:[(0,o.jsx)("div",{className:"col col-1 col-md-3",children:(0,o.jsx)("span",{className:"d-none d-md-inline-block border rounded p-1 text-success",children:new Date(e.createdAt).toDateString()})}),(0,o.jsx)("div",{className:"col col-md-auto",children:(0,o.jsx)("h4",{children:(0,o.jsx)(a,{href:e.href,children:i(e.name)})})})]},e.name))]},e))})}},794:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(5893);n(7294);var o=n(4184),a=n(9008),i=n(2891);function c(e){let{title:t,children:n,className:c}=e;return(0,r.jsxs)("div",{className:o("my-3",c),children:[(0,r.jsx)(a,{children:(0,r.jsx)("title",{children:"Sushant Dhiman | ".concat(i(t))})}),(0,r.jsx)("h2",{className:"my-3 text-center text-primary",children:i(t)}),n]})}},8994:function(e){"use strict";e.exports=JSON.parse('[{"href":"/blog/2023/cloud-run-vs-cloud-functions","name":"Cloud run vs cloud functions","createdAt":"2023-04-11T11:35:24.000Z","updatedAt":"2023-04-11T11:31:50.396Z"},{"href":"/blog/2023/how-to-remove-all-text-box-from-pdf","name":"How to remove all text box from pdf","createdAt":"2023-04-09T12:46:12.000Z","updatedAt":"2023-04-09T12:44:52.681Z"},{"href":"/blog/2022/blind-city-of-the-blind-king","name":"Blind city of the blind king","createdAt":"2022-08-13T11:19:13.000Z","updatedAt":"2022-08-13T11:09:13.401Z"},{"href":"/blog/2022/continuous-deployment-of-google-cloud-functions-written-with-typescript","name":"Continuous deployment of google cloud functions written with typescript","createdAt":"2022-06-08T03:31:18.000Z","updatedAt":"2023-04-09T12:06:53.955Z"},{"href":"/blog/2021/odoo-dual-currency-invoice","name":"Odoo dual currency invoice","createdAt":"2021-12-30T13:22:04.000Z","updatedAt":"2021-12-30T13:20:15.278Z"},{"href":"/blog/2021/how-to-backup-imap-emails","name":"How to backup imap emails","createdAt":"2021-02-26T13:44:28.000Z","updatedAt":"2021-03-11T09:43:55.938Z"},{"href":"/blog/2020/vscode-to-neovim","name":"Vscode to neovim","createdAt":"2020-05-09T17:46:54.000Z","updatedAt":"2020-08-22T08:01:10.739Z"},{"href":"/blog/price","name":"Price","createdAt":"2018-06-24T10:30:00.000Z","updatedAt":"2020-08-22T08:01:10.739Z"},{"href":"/blog/diminishing-capability","name":"Diminishing capability","createdAt":"2018-02-11T08:30:00.000Z","updatedAt":"2020-08-22T08:01:10.739Z"},{"href":"/blog/parabel-of-onion","name":"Parabel of onion","createdAt":"2016-05-16T07:30:00.000Z","updatedAt":"2020-08-22T08:01:10.739Z"}]')}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7286)}),_N_E=e.O()}]);