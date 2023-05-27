(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[76],{9510:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2023/cloud-run-vs-cloud-functions",function(){return o(7390)}])},7390:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return r}});var n=o(5893);o(7294);var s=o(7037),i=o(4187);function r(){return(0,n.jsxs)(s.Z,{children:[(0,n.jsxs)("p",{children:[(0,n.jsx)(i.Z,{href:"https://cloud.google.com/run",text:"Cloud Run",externalIcon:!0})," ","and"," ",(0,n.jsx)(i.Z,{href:"https://cloud.google.com/functions",text:"Cloud Function",externalIcon:!0})," ","are two comparable cloud computing services offered by"," ",(0,n.jsx)(i.Z,{href:"https://cloud.google.com",text:"Google Cloud Platform",externalIcon:!0}),". When I first started using GCP, the"," ",(0,n.jsx)(i.Z,{href:"https://cloud.google.com/appengine",text:"App Engine",externalIcon:!0})," ","platform was being replaced by Cloud Run. So I initially used Cloud Run to build a lot of services. Over time, I also started to utilize Cloud Functions, primarily for responding to Pub/Sub messages."]}),(0,n.jsx)("p",{children:"I have a personal preference for Cloud Run after using both technologies. I'll try to explain what kinds of use cases these technologies are most suited for."}),(0,n.jsx)("h4",{children:"Cloud Functions"}),(0,n.jsx)("p",{children:"It's a very nice piece of technology. Recently, I sent notifications to a certain chat group using Cloud Functions. Messages were being generated by various services and pushed to Cloud Pub/Sub topics. A Cloud Function would be started via a Cloud Pub/Sub subscription, which would then transmit those messages to a chat room."}),(0,n.jsx)("p",{children:"Use Cloud Functions, in my opinion, when :-"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Simple and self-contained task. It can be so basic that there won't be any tests."}),(0,n.jsx)("li",{children:"The task will be carried out irregularly and a variable number of times."}),(0,n.jsx)("li",{children:"There won't be many updates to the task."})]}),(0,n.jsx)("h4",{children:"What was the issue?"}),(0,n.jsx)("p",{children:"As we are discussing Google Cloud Platform, I think I will explain various issues I faced in that regard. As there are similar offerings from other providers, I think this discussion may not apply to them."}),(0,n.jsx)("p",{children:"In the previous section, I laid out some use cases for Cloud Functions. So you understand, for Cloud Functions, I am advocating for use cases that don't change very often. This is mainly because of three reasons."}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"There is zero flexibility in image production. You always end up with a large image that is roughly 300 MB or more in size as a price for simplicity."}),(0,n.jsx)("li",{children:"Deployment times are incredibly lengthy as compared to Cloud Run. You might have to wait for 2 to 5 minutes only to deploy."}),(0,n.jsx)("li",{children:"My deployments tends to be inexpensive, and Cloud Function will maintain a minimum of two versions at once. This adds to the cost of Cloud Storage."})]}),(0,n.jsx)("h4",{children:"Cloud Run"}),(0,n.jsx)("p",{children:'This innovation was provided as an App Engine upgrade. It can be described as "Managed Kubernetes". Web services benefit most from this. Everything else will be taken care of for you; all you have to do is design a container for your web service.'}),(0,n.jsx)("p",{children:"Most of my services are running on top of Cloud Run. I will now lay out some use cases for this technology."}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Web service like Next.JS, Express.JS, GraphQL or TRPC servers"}),(0,n.jsx)("li",{children:"Any code that can be exposed as a web service through container"})]}),(0,n.jsx)("p",{children:"Now let's discuss what the major plus points are for Cloud Run."}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"You get full control over the image generation process. Some of my production backend services are just around 60 MB."}),(0,n.jsx)("li",{children:"Although a pre-GA offering, the Cloud Run service can be linked to a domain (or subdomain) really easily."}),(0,n.jsx)("li",{children:"After deployment, you can delete the Cloud Run image, as the latest revision keeps an internal copy of your container."}),(0,n.jsx)("li",{children:"There is a nice free tier offered with Cloud Run (something similar is available with Cloud Functions)."}),(0,n.jsx)("li",{children:"Cloud Build based deployment takes less time than Cloud Functions."})]}),(0,n.jsx)("p",{children:"So if your service can be wrapped as a container and it is handling serious production logic, I would recommend Cloud Run instead of Cloud Functions."})]})}},7037:function(e,t,o){"use strict";o.d(t,{Z:function(){return p}});var n=o(5893),s=o(7294),i=o(3944),r=o(1163),a=o(3197),l=o(4217),c=o(794);function d(e){let{date:t}=e;return(0,n.jsxs)("span",{children:[(0,n.jsx)("span",{className:"badge bg-info me-2 p-2 text-uppercase",children:"Posted on "}),(0,n.jsx)("span",{className:"badge bg-secondary me-2 p-2",children:new Date(t).toDateString()})]})}var u=o(5154),h=o(8994);function p(e){let{children:t}=e,o=s.useRef(null),p=s.useRef(null),f=e=>{e.current&&e.current.scrollIntoView({behavior:"smooth",block:"start"})},m=(0,r.useRouter)(),g=h.find(e=>e.href===m.pathname);return(0,n.jsxs)(c.Z,{title:g.name,children:[(0,n.jsxs)("div",{ref:p,children:[(0,n.jsx)("span",{className:"float-start",children:(0,n.jsx)(d,{date:g.createdAt})}),(0,n.jsx)("span",{className:"float-end",children:(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(l.Z,{onClick:()=>r.push("/blog"),size:"sm",variant:"primary",children:(0,n.jsx)(u.x_l,{})}),(0,n.jsx)(l.Z,{onClick:()=>f(o),size:"sm",variant:"primary",children:(0,n.jsx)(u.NWQ,{})})]})}),(0,n.jsx)("span",{className:"clearfix"})]}),(0,n.jsx)("br",{}),t,(0,n.jsx)("br",{ref:o}),(0,n.jsx)(l.Z,{onClick:()=>f(p),variant:"primary",size:"sm",children:(0,n.jsx)(u.ZTc,{})}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(i.qw,{shortname:"sushantdhiman-github-io",config:{title:g.name}})]})}},794:function(e,t,o){"use strict";o.d(t,{Z:function(){return a}});var n=o(5893);o(7294);var s=o(4184),i=o(9008),r=o(2891);function a(e){let{title:t,children:o,className:a}=e;return(0,n.jsxs)("div",{className:s("my-3",a),children:[(0,n.jsx)(i,{children:(0,n.jsx)("title",{children:"Sushant Dhiman | ".concat(r(t))})}),(0,n.jsx)("h2",{className:"my-3 text-center text-primary",children:r(t)}),o]})}},8994:function(e){"use strict";e.exports=JSON.parse('[{"href":"/blog/2023/ignore-import-of-css-file-with-node.js","name":"Ignore import of css file with node.js","createdAt":"2023-05-27T13:03:53.000Z","updatedAt":"2023-05-27T13:02:07.668Z","tags":["technology"]},{"href":"/blog/2023/cloud-run-vs-cloud-functions","name":"Cloud run vs cloud functions","createdAt":"2023-04-11T11:35:24.000Z","updatedAt":"2023-05-27T12:47:22.490Z","tags":["technology"]},{"href":"/blog/2023/how-to-remove-all-text-box-from-pdf","name":"How to remove all text box from pdf","createdAt":"2023-04-09T12:46:12.000Z","updatedAt":"2023-04-09T12:44:52.681Z","tags":["technology"]},{"href":"/blog/2022/blind-city-of-the-blind-king","name":"Blind city of the blind king","createdAt":"2022-08-13T11:19:13.000Z","updatedAt":"2022-08-13T11:09:13.401Z","tags":["story"]},{"href":"/blog/2022/continuous-deployment-of-google-cloud-functions-written-with-typescript","name":"Continuous deployment of google cloud functions written with typescript","createdAt":"2022-06-08T03:31:18.000Z","updatedAt":"2023-04-09T12:06:53.955Z","tags":["technology"]},{"href":"/blog/2021/odoo-dual-currency-invoice","name":"Odoo dual currency invoice","createdAt":"2021-12-30T13:22:04.000Z","updatedAt":"2021-12-30T13:20:15.278Z","tags":["technology"]},{"href":"/blog/2021/how-to-backup-imap-emails","name":"How to backup imap emails","createdAt":"2021-02-26T13:44:28.000Z","updatedAt":"2021-03-11T09:43:55.938Z","tags":["technology"]},{"href":"/blog/2020/vscode-to-neovim","name":"Vscode to neovim","createdAt":"2020-05-09T17:46:54.000Z","updatedAt":"2020-08-22T08:01:10.739Z","tags":["technology"]},{"href":"/blog/price","name":"Price","createdAt":"2018-06-24T10:30:00.000Z","updatedAt":"2020-08-22T08:01:10.739Z","tags":["story"]},{"href":"/blog/diminishing-capability","name":"Diminishing capability","createdAt":"2018-02-11T08:30:00.000Z","updatedAt":"2020-08-22T08:01:10.739Z","tags":["thoughts"]},{"href":"/blog/parabel-of-onion","name":"Parabel of onion","createdAt":"2016-05-16T07:30:00.000Z","updatedAt":"2020-08-22T08:01:10.739Z","tags":["story"]}]')}},function(e){e.O(0,[530,774,888,179],function(){return e(e.s=9510)}),_N_E=e.O()}]);