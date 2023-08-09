(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{7466:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2023/ignore-import-of-css-file-with-node.js",function(){return t(9320)}])},8109:function(e){e.exports={navIcon:"ExternalLink_navIcon__jySiY",externalIcon:"ExternalLink_externalIcon__n4ki_"}},9320:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var s=t(5893);t(7294);var r=t(7037),i=t(1304),o=t(4187);function a(){return(0,s.jsxs)(r.Z,{title:"Ignore import of css file with node.js",createdAt:"2023-05-27T13:03:53.000Z",tags:"technology",children:[(0,s.jsxs)("p",{children:["Recently, I had to migrate a couple of web services to the Node.js 20 runtime. With Node.js 20, you get support for stable"," ",(0,s.jsx)(o.Z,{href:"https://nodejs.org/api/test.html",text:"test runner",externalIcon:!0}),". My codebase is mostly TypeScript. From my experience, ESM, TypeScript, and Mocha will always give you headaches. So I decided to migrate mocha tests to the native test runner. For the most part, everything went smoothly."]}),(0,s.jsxs)("p",{children:["There was an issue, as my React code was importing some styles and images. In old code, I used"," ",(0,s.jsx)("code",{children:"require.extensions['css'] = noop"})," to ignore require of styles in tests. So I was looking for something similar with the ESM setup. I discovered there is a stable flag called ",(0,s.jsx)("code",{children:"--loader"}),", which can be used to modify how imports are handled by Node.js."]}),(0,s.jsx)("p",{children:"After some tinkering, I ended up with the following code: This code ignores styles and images when running a script using Node.js."}),(0,s.jsx)(i.Z,{language:"javascript",children:"import { URL } from 'url';\n\nfunction test(input) {\n  return (\n    input.endsWith('.css') || input.endsWith('.svg') || input.endsWith('.png')\n  );\n}\n\nexport function resolve(specifier, context, nextResolve) {\n  const { parentURL = null } = context;\n\n  if (test(specifier)) {\n    return {\n      shortCircuit: true,\n      url: new URL(specifier, parentURL).href,\n    };\n  } else if (parentURL && test(parentURL)) {\n    return {\n      shortCircuit: true,\n      url: new URL(specifier, parentURL).href,\n    };\n  }\n\n  // Let Node.js handle all other specifiers.\n  return nextResolve(specifier);\n}\n\nexport function load(url, context, nextLoad) {\n  if (test(url)) {\n    return {\n      format: 'module',\n      shortCircuit: true,\n      source: 'export default {}',\n    };\n  }\n\n  // Let Node.js handle all other URLs.\n  return nextLoad(url);\n}"})]})}},1304:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var s=t(5893);t(7294);var r=t(4329),i=t(753);function o(e){let{language:n,children:t}=e;return(0,s.jsx)(r.Z,{language:n,style:i._4,children:t})}},4187:function(e,n,t){"use strict";var s=t(5893),r=t(7294),i=t(4184),o=t(5154),a=t(8109);let c={envelope:o.SRX,linkedin:o.ltd,github:o.hJX},l=e=>{let{children:n,className:t,href:l,text:u,icon:d,externalIcon:h}=e;return(0,s.jsxs)("a",{className:i(t),href:l,target:"_blank",children:[d&&r.createElement(c[d],{className:i("me-1",a.navIcon)}),n,u&&(0,s.jsx)("span",{className:"me-1",children:u}),h&&(0,s.jsx)(o.CkN,{className:a.externalIcon})]})};n.Z=l},7037:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var s=t(5893),r=t(7294),i=t(2962),o=t(3944),a=t(1163),c=t(3197),l=t(4217),u=t(2891),d=t(794);function h(e){let{date:n}=e;return(0,s.jsxs)("span",{children:[(0,s.jsx)("span",{className:"badge bg-info me-2 p-2 text-uppercase",children:"Posted on "}),(0,s.jsx)("span",{className:"badge bg-secondary me-2 p-2",children:new Date(n).toDateString()})]})}var p=t(5154);function x(e){let{children:n,title:t,createdAt:x}=e,{asPath:f}=(0,a.useRouter)(),m=r.useRef(null),j=r.useRef(null),g=e=>{e.current&&e.current.scrollIntoView({behavior:"smooth",block:"start"})};return t=u(t),(0,s.jsxs)(d.Z,{title:t,children:[(0,s.jsx)(i.dX,{url:"https://sushantdhiman.com".concat(f),type:"BlogPosting",title:t,datePublished:x,authorName:"Sushant Dhiman"}),(0,s.jsxs)("div",{ref:j,children:[(0,s.jsx)("span",{className:"float-start",children:(0,s.jsx)(h,{date:x})}),(0,s.jsx)("span",{className:"float-end",children:(0,s.jsxs)(c.Z,{children:[(0,s.jsx)(l.Z,{onClick:()=>a.Router.push("/blog"),size:"sm",variant:"primary",children:(0,s.jsx)(p.x_l,{})}),(0,s.jsx)(l.Z,{onClick:()=>g(m),size:"sm",variant:"primary",children:(0,s.jsx)(p.NWQ,{})})]})}),(0,s.jsx)("span",{className:"clearfix"})]}),(0,s.jsx)("br",{}),n,(0,s.jsx)("br",{ref:m}),(0,s.jsx)(l.Z,{onClick:()=>g(j),variant:"primary",size:"sm",children:(0,s.jsx)(p.ZTc,{})}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(o.qw,{shortname:"sushantdhiman-github-io",config:{title:t}})]})}},794:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var s=t(5893);t(7294);var r=t(4184),i=t(9008),o=t(2891);function a(e){let{title:n,headTitle:t,children:a,className:c}=e;return(0,s.jsxs)("div",{className:r("my-3",c),children:[(0,s.jsx)(i,{children:(0,s.jsx)("title",{children:"".concat(o(t||n)," | Sushant Dhiman")})}),n&&(0,s.jsx)("h1",{className:"my-5 text-center text-primary",children:o(n)}),a]})}}},function(e){e.O(0,[766,753,774,888,179],function(){return e(e.s=7466)}),_N_E=e.O()}]);