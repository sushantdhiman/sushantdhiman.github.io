(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[381],{9850:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/2022/continuous-deployment-of-google-cloud-functions-written-with-typescript",function(){return t(9723)}])},9723:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var i=t(5893);t(7294);var s=t(1304),o=t(7037),r=t(4187),c=t(7164);function l(){return(0,i.jsxs)(o.Z,{title:"Continuous deployment of google cloud functions written with typescript",createdAt:"2022-06-08T03:31:18.000Z",tags:"technology",children:[(0,i.jsx)("h4",{children:"Introduction"}),(0,i.jsx)("p",{children:"Recently, I was trying to continuously deploy a Google Cloud Function, triggered with Cloud Pub/Sub. But the catch was that this function was written in TypeScript. Every article I could find was either using plain JavaScript or recommending cloning the Github repository with Google Cloud Source. There was also the choice of keeping compiled code in the repository."}),(0,i.jsx)("p",{children:"I was looking for a simple setup like Cloud Run, which linked to my Github repository and continuously built and deployed without any hassle. Let's see how you can accomplish this with Cloud Build."}),(0,i.jsx)("h4",{children:"Using Cloud Build"}),(0,i.jsxs)("p",{children:["First, you need to grant access to your Github repo to the"," ",(0,i.jsx)("strong",{children:"Google Cloud Build"})," Github app. This can be done in"," ",(0,i.jsx)(r.Z,{href:"https://github.com/settings/apps/authorizations",text:"Github app authorizations section",externalIcon:!0}),"."]}),(0,i.jsxs)("p",{children:["The next step will be to create a ",(0,i.jsx)("strong",{children:"Cloud Build Trigger"}),". You can find this option in"," ",(0,i.jsx)(r.Z,{href:"https://console.cloud.google.com/cloud-build/triggers",text:"Google cloud console",externalIcon:!0}),"."]}),(0,i.jsxs)("p",{children:["Configure the cloud build to your liking. Set the"," ",(0,i.jsx)("strong",{children:"Source"})," to your Github repository."]}),(0,i.jsx)(c.Z,{src:"/media/2022/june/1.png",width:"699",height:"254"}),(0,i.jsxs)("p",{children:["Next, we need to define what to do when the repository is updated. This can be defined in different ways, but I have selected the"," ",(0,i.jsx)("strong",{children:"Inline cloud build configuration YAML"})," option."]}),(0,i.jsx)(c.Z,{src:"/media/2022/june/2.png",width:"583",height:"485"}),(0,i.jsxs)("p",{children:["Now click on ",(0,i.jsx)("strong",{children:"Open Editor"})," to change the configuration YAML file. I am giving the code below directly, then I will explain what is happening."]}),(0,i.jsx)(s.Z,{language:"yaml",children:"steps:\n  - name: 'node:16-slim'\n    args:\n      - '-c'\n      - |\n        npm ci &&\n        npm run build &&\n        mkdir -p /workspace/dist &&\n        cp package.json /workspace/dist/package.json &&\n        cp -r lib /workspace/dist\n    entrypoint: bash\n  - name: gcr.io/cloud-builders/gcloud-slim\n    args:\n      - functions\n      - deploy\n      - <function_name>\n      - '--region'\n      - asia-south2\n      - '--trigger-topic'\n      - <pub_sub_topic_name>\n      - '--timeout'\n      - 10s\n      - '--memory'\n      - 128mb\n      - '--runtime'\n      - nodejs16\n      - '--entry-point'\n      - <entrypoint_name>\n      - '--max-instances'\n      - '2'\n      - '--source'\n      - /workspace/dist\n"}),(0,i.jsxs)("p",{children:["In the first step, we are using the Node 16 image to install node dependencies, then building the repository using"," ",(0,i.jsx)("code",{children:"npm run build"}),". The main point to note here is that we are copying built artifacts to the ",(0,i.jsx)("code",{children:"/workspace/dist"})," directory."]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("code",{children:"/workspace"})," is a special path in Cloud Build, where different steps can keep files to share with other steps."]}),(0,i.jsxs)("p",{children:["In the second step, we are using gcloud to deploy our function from the"," ",(0,i.jsx)("code",{children:"/workspace/dist"})," directory, with the ",(0,i.jsx)("code",{children:"--source"})," ","flag. Other options can be configured to meet the needs of your function."]}),(0,i.jsx)("p",{children:"Finally, save this build trigger. Now you will have a continuously deployed cloud function written in TypeScript."})]})}},1304:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var i=t(5893);t(7294);var s=t(4329),o=t(753);function r(e){let{language:n,children:t}=e;return(0,i.jsx)(s.Z,{language:n,style:o._4,children:t})}},7164:function(e,n,t){"use strict";t.d(n,{Z:function(){return r}});var i=t(5893),s=t(5675);let o=e=>{let{src:n}=e;return"".concat(n)};function r(e){return(0,i.jsx)(s,{loader:o,src:e.src,width:e.width,height:e.height,unoptimized:!0,quality:100})}},7037:function(e,n,t){"use strict";t.d(n,{Z:function(){return p}});var i=t(5893),s=t(7294),o=t(3944),r=t(1163),c=t(3197),l=t(4217),a=t(2891),u=t(794);function d(e){let{date:n}=e;return(0,i.jsxs)("span",{children:[(0,i.jsx)("span",{className:"badge bg-info me-2 p-2 text-uppercase",children:"Posted on "}),(0,i.jsx)("span",{className:"badge bg-secondary me-2 p-2",children:new Date(n).toDateString()})]})}var h=t(5154);function p(e){let{children:n,title:t,tags:p,createdAt:g}=e,x=s.useRef(null),f=s.useRef(null),j=e=>{e.current&&e.current.scrollIntoView({behavior:"smooth",block:"start"})};return t=a(t),(0,i.jsxs)(u.Z,{title:t,children:[(0,i.jsxs)("div",{ref:f,children:[(0,i.jsx)("span",{className:"float-start",children:(0,i.jsx)(d,{date:g})}),(0,i.jsx)("span",{className:"float-end",children:(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(l.Z,{onClick:()=>r.push("/blog"),size:"sm",variant:"primary",children:(0,i.jsx)(h.x_l,{})}),(0,i.jsx)(l.Z,{onClick:()=>j(x),size:"sm",variant:"primary",children:(0,i.jsx)(h.NWQ,{})})]})}),(0,i.jsx)("span",{className:"clearfix"})]}),(0,i.jsx)("br",{}),n,(0,i.jsx)("br",{ref:x}),(0,i.jsx)(l.Z,{onClick:()=>j(f),variant:"primary",size:"sm",children:(0,i.jsx)(h.ZTc,{})}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)(o.qw,{shortname:"sushantdhiman-github-io",config:{title:t}})]})}},794:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var i=t(5893);t(7294);var s=t(4184),o=t(9008),r=t(2891);function c(e){let{title:n,children:t,className:c}=e;return(0,i.jsxs)("div",{className:s("my-3",c),children:[(0,i.jsx)(o,{children:(0,i.jsx)("title",{children:"Sushant Dhiman | ".concat(r(n))})}),(0,i.jsx)("h2",{className:"my-3 text-center text-primary",children:r(n)}),t]})}}},function(e){e.O(0,[530,753,675,774,888,179],function(){return e(e.s=9850)}),_N_E=e.O()}]);