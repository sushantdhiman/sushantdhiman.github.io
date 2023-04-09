(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[494],{1807:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2023/how-to-remove-all-text-box-from-pdf",function(){return n(2690)}])},2690:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var o=n(5893);n(7294);var r=n(7037),a=n(1304),i=n(4187);function s(){return(0,o.jsxs)(r.Z,{children:[(0,o.jsx)("p",{children:"Recently, I needed to get a printed version of a 100-year-old book that was in the public domain. However, the pdf contained a small watermark on each page of the book. It would have looked terrible in print because the book was in Hindi and Sanskrit but the watermark was in English."}),(0,o.jsx)("p",{children:"Fortunately, the watermark was only a text frame (or text box). I could remove it one by one from each page using Libre Office Draw, but the e-book had over 400 pages. I was looking for a way to remove those text frames programmatically. I discovered two viable solutions after a long search."}),(0,o.jsx)("h3",{children:"Libre Office Draw - Macros"}),(0,o.jsxs)("p",{children:["If you are unfamiliar with bash, this may be a simpler method. You only need to run this Macro in Libre Office Draw. Thank you to the gentleman from the Libreoffice help desk who suggested"," ",(0,o.jsx)(i.Z,{href:"https://ask.libreoffice.org/t/how-to-remove-all-text-boxes-and-shapetype-trought-navigator/35721/2",text:"this macro",externalIcon:!0}),"."]}),(0,o.jsx)(a.Z,{language:"basic",children:'Sub removeAllTextShapeFromScannedDocument()\n	doc0 = ThisComponent\n	dPgs = doc0.DrawPages\n	u1   = dPgs.Count - 1\n\n	For k = 0 To u1\n	  dPg = dPgs(k)\n	  u2 = dPg.Count - 1\n\n	  For j = u2 To 0 Step -1\n	    sh = dPg(j)\n	    If sh.ShapeType = "com.sun.star.drawing.TextShape" Then dPg.remove(sh)\n	  Next j\n\n	Next k\nEnd Sub'}),(0,o.jsx)("p",{children:"But, as I previously stated, this e-book has over 400 pages, all of which are scanned images. This was simply too much for my laptop. Libre Office Draw is a heavy program itself. So I'll need something else for my case."}),(0,o.jsx)("h3",{children:"Ghost Script"}),(0,o.jsx)("p",{children:"Ghost Script is most likely included with your Linux distribution. It is a PDF interpreter. After a lengthy search on Stack Overflow, I discovered the correct question. I found the answer to my issue in that question. Here is the command:"}),(0,o.jsx)(a.Z,{language:"bash",children:"gs -o no-texts.pdf -sDEVICE=pdfwrite -dFILTERTEXT with-texts.pdf"}),(0,o.jsxs)("p",{children:["Thank you to the gentleman from Stack Overflow who asked"," ",(0,o.jsx)(i.Z,{href:"https://stackoverflow.com/q/61466712/4021724",text:"this question",externalIcon:!0}),"."]})]})}},1304:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(5893);n(7294);var r=n(4329),a=n(753);function i(e){let{language:t,children:n}=e;return(0,o.jsx)(r.Z,{language:t,style:a._4,children:n})}},7037:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var o=n(5893),r=n(7294),a=n(3944),i=n(1163),s=n(3197),c=n(4217),l=n(794);function d(e){let{date:t}=e;return(0,o.jsxs)("span",{children:[(0,o.jsx)("span",{className:"badge bg-info me-2 p-2 text-uppercase",children:"Posted on "}),(0,o.jsx)("span",{className:"text-success",children:new Date(t).toDateString()})]})}var h=n(5154),u=n(8994);function f(e){let{children:t}=e,n=r.useRef(null),f=r.useRef(null),m=e=>{e.current&&e.current.scrollIntoView({behavior:"smooth",block:"start"})},p=(0,i.useRouter)(),x=u.find(e=>e.href===p.pathname);return(0,o.jsxs)(l.Z,{title:x.name,children:[(0,o.jsxs)("div",{ref:f,children:[(0,o.jsx)("span",{className:"float-start",children:(0,o.jsx)(d,{date:x.createdAt})}),(0,o.jsx)("span",{className:"float-end",children:(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(c.Z,{onClick:()=>i.push("/blog"),size:"sm",variant:"primary",children:(0,o.jsx)(h.x_l,{})}),(0,o.jsx)(c.Z,{onClick:()=>m(n),size:"sm",variant:"primary",children:(0,o.jsx)(h.NWQ,{})})]})}),(0,o.jsx)("span",{className:"clearfix"})]}),(0,o.jsx)("br",{}),t,(0,o.jsx)("br",{ref:n}),(0,o.jsx)(c.Z,{onClick:()=>m(f),variant:"primary",size:"sm",children:(0,o.jsx)(h.ZTc,{})}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(a.qw,{shortname:"sushantdhiman-github-io",config:{title:x.name}})]})}},794:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var o=n(5893);n(7294);var r=n(4184),a=n(9008),i=n(2891);function s(e){let{title:t,children:n,className:s}=e;return(0,o.jsxs)("div",{className:r("my-3",s),children:[(0,o.jsx)(a,{children:(0,o.jsx)("title",{children:"Sushant Dhiman | ".concat(i(t))})}),(0,o.jsx)("h2",{className:"my-3 text-center text-primary",children:i(t)}),n]})}},8994:function(e){"use strict";e.exports=JSON.parse('[{"href":"/blog/2023/how-to-remove-all-text-box-from-pdf","name":"How to remove all text box from pdf","createdAt":"2023-04-09T12:46:12.000Z","updatedAt":"2023-04-09T12:44:52.681Z"},{"href":"/blog/2022/blind-city-of-the-blind-king","name":"Blind city of the blind king","createdAt":"2022-08-13T11:19:13.000Z","updatedAt":"2022-08-13T11:09:13.401Z"},{"href":"/blog/2022/continuous-deployment-of-google-cloud-functions-written-with-typescript","name":"Continuous deployment of google cloud functions written with typescript","createdAt":"2022-06-08T03:31:18.000Z","updatedAt":"2023-04-09T12:06:53.955Z"},{"href":"/blog/2021/odoo-dual-currency-invoice","name":"Odoo dual currency invoice","createdAt":"2021-12-30T13:22:04.000Z","updatedAt":"2021-12-30T13:20:15.278Z"},{"href":"/blog/2021/how-to-backup-imap-emails","name":"How to backup imap emails","createdAt":"2021-02-26T13:44:28.000Z","updatedAt":"2021-03-11T09:43:55.938Z"},{"href":"/blog/2020/vscode-to-neovim","name":"Vscode to neovim","createdAt":"2020-05-09T17:46:54.000Z","updatedAt":"2020-08-22T08:01:10.739Z"},{"href":"/blog/price","name":"Price","createdAt":"2018-06-24T10:30:00.000Z","updatedAt":"2020-08-22T08:01:10.739Z"},{"href":"/blog/diminishing-capability","name":"Diminishing capability","createdAt":"2018-02-11T08:30:00.000Z","updatedAt":"2020-08-22T08:01:10.739Z"},{"href":"/blog/parabel-of-onion","name":"Parabel of onion","createdAt":"2016-05-16T07:30:00.000Z","updatedAt":"2020-08-22T08:01:10.739Z"}]')}},function(e){e.O(0,[530,753,774,888,179],function(){return e(e.s=1807)}),_N_E=e.O()}]);