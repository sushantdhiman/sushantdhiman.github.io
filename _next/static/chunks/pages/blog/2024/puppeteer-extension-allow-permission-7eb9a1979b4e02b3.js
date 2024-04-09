(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7],{1211:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2024/puppeteer-extension-allow-permission",function(){return s(9657)}])},5990:function(e){e.exports={externalIcon:"ExternalLink_externalIcon__gmpoW"}},9657:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return a}});var n=s(5893);s(7294);var r=s(9739),i=s(8143),o=s(5485);function a(){return(0,n.jsxs)(r.Z,{title:"Accepting chrome extension permission dialog with puppeteer",createdAt:"2024-04-08T12:29:31.520Z",tags:"technology",description:"Often, when testing Chrome extensions, you are required to accept some permission dialog. In this article, we will explore how you can do this with puppeteer",children:[(0,n.jsxs)("p",{children:[(0,n.jsx)(o.Z,{href:"https://pptr.dev/",text:"Puppeteer",externalIcon:!0})," ","is a popular tool for chromium automation, and it is often used for testing web applications. It can also be used for testing Chrome extensions. Chrome extension has a mechanism to request optional permission from users. Most often, it is host permission to access some website. We will see how to do this with puppeteer."]}),(0,n.jsx)("h4",{children:"Problem"}),(0,n.jsxs)("p",{children:["Puppeteer can only control the browser and page. Permission dialog is a native API, that is currently not accessible programmatically. So we can't use puppeteer itself to accept such dialog. There is a relevant"," ",(0,n.jsx)(o.Z,{href:"https://github.com/puppeteer/puppeteer/issues/5054",text:"issue",externalIcon:!0})," ","on Github about this."]}),(0,n.jsx)("h4",{children:"Solution"}),(0,n.jsxs)("p",{children:["To accept this dialog, we need to send keyboard events directly to the operating system. More specifically, we need to press ",(0,n.jsx)("code",{children:"Tab"})," ","and ",(0,n.jsx)("code",{children:"Enter"}),". There are many libraries for this, Github issue talk about using ",(0,n.jsx)("code",{children:"node-key-sender"}),". But this library requires full ",(0,n.jsx)("code",{children:"Java"})," setup, it is just a wrapper around a jar file. Not good enough."]}),(0,n.jsxs)("p",{children:["After some searching, I found ",(0,n.jsx)("code",{children:"robotjs"})," suitable for this. But that library is not well maintained. But luckily, there is a"," ",(0,n.jsx)(o.Z,{href:"https://github.com/hurdlegroup/robotjs",text:"fork",externalIcon:!0})," ","of this library. Below is the sample code I used for accepting permission dialog."]}),(0,n.jsx)(i.Z,{language:"javascript",children:"import Robot from '@hurdlegroup/robotjs';\n\n// some code that triggers permission dialog\n// ....\n// ....\n\n// accept permission dialog\nawait wait(1000);\nRobot.keyTap('tab');\nRobot.keyTap('enter');\nawait wait(1000);\n"})]})}},8143:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var n=s(5893);s(7294);var r=s(4767),i=s(545);function o(e){let{language:t,children:s}=e;return(0,n.jsx)(r.Z,{language:t,style:i._4,children:s})}},5485:function(e,t,s){"use strict";var n=s(5893);s(7294);var r=s(3967),i=s(4066),o=s(5990);t.Z=function(e){let{children:t,className:s,href:a,text:c,externalIcon:l}=e;return(0,n.jsxs)("a",{className:r(s),href:a,target:"_blank",children:[t,c&&(0,n.jsx)("span",{className:"me-1",children:c}),l&&(0,n.jsx)(i.CkN,{className:o.externalIcon})]})}},9739:function(e,t,s){"use strict";s.d(t,{Z:function(){return x}});var n=s(5893),r=s(7294),i=s(2962),o=s(3944),a=s(1163),c=s(7564),l=s(1832),u=s(2891),h=s(8353);function p(e){let{date:t}=e;return(0,n.jsxs)("span",{children:[(0,n.jsx)("span",{className:"badge bg-info me-2 p-2 text-uppercase",children:"Posted on "}),(0,n.jsx)("span",{className:"badge bg-dark me-2 p-2",children:new Date(t).toDateString()})]})}var d=s(4066);function x(e){let{children:t,title:s,description:x,createdAt:m}=e,{push:f,asPath:j}=(0,a.useRouter)(),g=r.useRef(null),b=r.useRef(null),w=e=>{e.current&&e.current.scrollIntoView({behavior:"smooth",block:"start"})};return s=u(s),(0,n.jsxs)(h.Z,{title:s,children:[(0,n.jsx)(i.dX,{url:"https://sushantdhiman.com".concat(j),type:"BlogPosting",title:s,description:x,datePublished:m,authorName:"Sushant Dhiman"}),(0,n.jsxs)("div",{ref:b,children:[(0,n.jsx)("span",{className:"float-start",children:(0,n.jsx)(p,{date:m})}),(0,n.jsx)("span",{className:"float-end",children:(0,n.jsxs)(c.Z,{children:[(0,n.jsx)(l.Z,{onClick:()=>f("/blog"),size:"sm",color:"primary",children:(0,n.jsx)(d.x_l,{})}),(0,n.jsx)(l.Z,{onClick:()=>w(g),size:"sm",color:"primary",children:(0,n.jsx)(d.NWQ,{})})]})}),(0,n.jsx)("span",{className:"clearfix"})]}),(0,n.jsx)("br",{}),t,(0,n.jsx)("br",{ref:g}),(0,n.jsx)(l.Z,{onClick:()=>w(b),color:"primary",size:"sm",children:(0,n.jsx)(d.ZTc,{})}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(o.qw,{shortname:"sushantdhiman-github-io",config:{title:s}})]})}},8353:function(e,t,s){"use strict";s.d(t,{Z:function(){return a}});var n=s(5893);s(7294);var r=s(3967),i=s(9008),o=s(2891);function a(e){let{title:t,headTitle:s,children:a,className:c}=e;return(0,n.jsxs)("div",{className:r("my-3",c),children:[(0,n.jsx)(i,{children:(0,n.jsx)("title",{children:"".concat(o(s||t)," | Sushant Dhiman")})}),t&&(0,n.jsx)("h1",{className:"my-5 text-center text-primary",children:o(t)}),a]})}}},function(e){e.O(0,[900,545,888,774,179],function(){return e(e.s=1211)}),_N_E=e.O()}]);