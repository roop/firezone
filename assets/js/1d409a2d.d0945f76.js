"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[5673],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(t),f=r,m=s["".concat(p,".").concat(f)]||s[f]||c[f]||l;return t?a.createElement(m,i(i({ref:n},d),{},{components:t})):a.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=f;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8182:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=t(7462),r=(t(7294),t(3905));const l={title:"Rules",group:"Rules"},i=void 0,o={unversionedId:"reference/api/rules",id:"reference/api/rules",title:"Rules",description:"This endpoint allows an adminisrator to manage Rules.",source:"@site/docs/reference/api/rules.mdx",sourceDirName:"reference/api",slug:"/reference/api/rules",permalink:"/reference/api/rules",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/reference/api/rules.mdx",tags:[],version:"current",frontMatter:{title:"Rules",group:"Rules"},sidebar:"tutorialSidebar",previous:{title:"Devices",permalink:"/reference/api/devices"},next:{title:"Security Controls",permalink:"/reference/security-controls"}},p={},u=[{value:"API Documentation",id:"api-documentation",level:2},{value:"GET /v0/rules",id:"get-v0rules",level:3},{value:"Example",id:"example",level:4},{value:"POST /v0/rules",id:"post-v0rules",level:3},{value:"Example",id:"example-1",level:4},{value:"GET /v0/rules/{id}",id:"get-v0rulesid",level:3},{value:"Example",id:"example-2",level:4},{value:"PATCH /v0/rules/{id}",id:"patch-v0rulesid",level:3},{value:"Example",id:"example-3",level:4},{value:"DELETE /v0/rules/{id}",id:"delete-v0rulesid",level:3},{value:"Example",id:"example-4",level:4}],d={toc:u};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This endpoint allows an adminisrator to manage Rules."),(0,r.kt)("h2",{id:"api-documentation"},"API Documentation"),(0,r.kt)("h3",{id:"get-v0rules"},"GET /v0/rules"),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i \\\n  -X GET "https://{firezone_host}/v0/rules" \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Authorization: Bearer {api_token}\' \\\n\nHTTP/1.1 200\nContent-Type: application/json; charset=utf-8\n\n{\n  "data": [\n    {\n      "action": "drop",\n      "destination": "10.3.2.1",\n      "id": "fdcf2ca8-1871-4aac-bc01-591b3e18578e",\n      "inserted_at": "2023-01-13T06:30:46.079209Z",\n      "port_range": null,\n      "port_type": null,\n      "updated_at": "2023-01-13T06:30:46.079209Z",\n      "user_id": null\n    },\n    {\n      "action": "drop",\n      "destination": "10.3.2.2",\n      "id": "2e544ab0-0ca5-432e-9a31-b5feb982f50a",\n      "inserted_at": "2023-01-13T06:30:46.087033Z",\n      "port_range": null,\n      "port_type": null,\n      "updated_at": "2023-01-13T06:30:46.087033Z",\n      "user_id": null\n    },\n    {\n      "action": "drop",\n      "destination": "10.3.2.3",\n      "id": "02df6455-65f1-406b-a3dd-7c223af04f9b",\n      "inserted_at": "2023-01-13T06:30:46.088443Z",\n      "port_range": null,\n      "port_type": null,\n      "updated_at": "2023-01-13T06:30:46.088443Z",\n      "user_id": null\n    },\n    {\n      "action": "drop",\n      "destination": "10.3.2.4",\n      "id": "e0c4e652-e3a2-4a69-a8f3-265e07515938",\n      "inserted_at": "2023-01-13T06:30:46.090111Z",\n      "port_range": null,\n      "port_type": null,\n      "updated_at": "2023-01-13T06:30:46.090111Z",\n      "user_id": null\n    },\n    {\n      "action": "drop",\n      "destination": "10.3.2.5",\n      "id": "a7c2bfb2-3e09-48d8-b038-c69c84b777b1",\n      "inserted_at": "2023-01-13T06:30:46.091623Z",\n      "port_range": null,\n      "port_type": null,\n      "updated_at": "2023-01-13T06:30:46.091623Z",\n      "user_id": null\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"post-v0rules"},"POST /v0/rules"),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i \\\n  -X POST "https://{firezone_host}/v0/rules" \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Authorization: Bearer {api_token}\' \\\n  --data-binary @- << EOF\n{\n  "rule": {\n    "action": "accept",\n    "destination": "1.1.1.1/24",\n    "port_range": "1 - 2",\n    "port_type": "udp",\n    "user_id": "9f4d207a-90d8-4cc9-800c-accefe9f90cf"\n  }\n}\'\nEOF\n\nHTTP/1.1 201\nContent-Type: application/json; charset=utf-8\nLocation: /v0/rules/cc374f84-b003-4858-8772-516ea3f098a1\n\n{\n  "data": {\n    "action": "accept",\n    "destination": "1.1.1.1/24",\n    "id": "cc374f84-b003-4858-8772-516ea3f098a1",\n    "inserted_at": "2023-01-13T06:30:47.193190Z",\n    "port_range": "1 - 2",\n    "port_type": "udp",\n    "updated_at": "2023-01-13T06:30:47.193190Z",\n    "user_id": "9f4d207a-90d8-4cc9-800c-accefe9f90cf"\n  }\n}\n')),(0,r.kt)("h3",{id:"get-v0rulesid"},"GET /v0/rules/{id}"),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"URI Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"49a9ae27-74f2-45dd-a324-d47a7581205c"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i \\\n  -X GET "https://{firezone_host}/v0/rules/{id}" \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Authorization: Bearer {api_token}\' \\\n\nHTTP/1.1 200\nContent-Type: application/json; charset=utf-8\n\n{\n  "data": {\n    "action": "drop",\n    "destination": "10.10.10.0/24",\n    "id": "49a9ae27-74f2-45dd-a324-d47a7581205c",\n    "inserted_at": "2023-01-13T06:30:46.993421Z",\n    "port_range": null,\n    "port_type": null,\n    "updated_at": "2023-01-13T06:30:46.993421Z",\n    "user_id": null\n  }\n}\n')),(0,r.kt)("h3",{id:"patch-v0rulesid"},"PATCH /v0/rules/{id}"),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"URI Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"b8231fa6-1df2-4b1b-8687-61a72a8031b1"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i \\\n  -X PUT "https://{firezone_host}/v0/rules/{id}" \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Authorization: Bearer {api_token}\' \\\n  --data-binary @- << EOF\n{\n  "rule": {\n    "action": "accept",\n    "destination": "1.1.1.1/24",\n    "port_range": "1 - 2",\n    "port_type": "udp"\n  }\n}\'\nEOF\n\nHTTP/1.1 200\nContent-Type: application/json; charset=utf-8\n\n{\n  "data": {\n    "action": "accept",\n    "destination": "1.1.1.1/24",\n    "id": "b8231fa6-1df2-4b1b-8687-61a72a8031b1",\n    "inserted_at": "2023-01-13T06:30:47.244050Z",\n    "port_range": "1 - 2",\n    "port_type": "udp",\n    "updated_at": "2023-01-13T06:30:47.254788Z",\n    "user_id": null\n  }\n}\n')),(0,r.kt)("h3",{id:"delete-v0rulesid"},"DELETE /v0/rules/{id}"),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"URI Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"05c0342c-984c-43df-855b-32e88ea8ee08"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -i \\\n  -X DELETE \"https://{firezone_host}/v0/rules/{id}\" \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer {api_token}' \\\n\nHTTP/1.1 204\n")))}s.isMDXComponent=!0}}]);