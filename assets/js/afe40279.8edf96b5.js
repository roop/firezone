"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[3510],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(t),m=a,f=s["".concat(p,".").concat(m)]||s[m]||c[m]||l;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5515:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=t(7462),a=(t(7294),t(3905));const l={title:"Rules",group:"Rules"},i=void 0,o={unversionedId:"reference/rest-api/rules",id:"reference/rest-api/rules",title:"Rules",description:"This endpoint allows an adminisrator to manage Rules.",source:"@site/docs/reference/rest-api/rules.mdx",sourceDirName:"reference/rest-api",slug:"/reference/rest-api/rules",permalink:"/docs/reference/rest-api/rules",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/www/docs/docs/reference/rest-api/rules.mdx",tags:[],version:"current",frontMatter:{title:"Rules",group:"Rules"},sidebar:"tutorialSidebar",previous:{title:"Devices",permalink:"/docs/reference/rest-api/devices"},next:{title:"Security Controls",permalink:"/docs/reference/security-controls"}},p={},d=[{value:"API Documentation",id:"api-documentation",level:2},{value:"GET /v0/rules",id:"get-v0rules",level:3},{value:"Example",id:"example",level:4},{value:"POST /v0/rules",id:"post-v0rules",level:3},{value:"Example",id:"example-1",level:4},{value:"GET /v0/rules/{id}",id:"get-v0rulesid",level:3},{value:"Example",id:"example-2",level:4},{value:"PATCH /v0/rules/{id}",id:"patch-v0rulesid",level:3},{value:"Example",id:"example-3",level:4},{value:"DELETE /v0/rules/{id}",id:"delete-v0rulesid",level:3},{value:"Example",id:"example-4",level:4}],u={toc:d},s="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(s,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This endpoint allows an adminisrator to manage Rules."),(0,a.kt)("h2",{id:"api-documentation"},"API Documentation"),(0,a.kt)("h3",{id:"get-v0rules"},"GET /v0/rules"),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i \\\n  -X GET "https://{firezone_host}/v0/rules" \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Authorization: Bearer {api_token}\' \\\n\nHTTP/1.1 200\nContent-Type: application/json; charset=utf-8\n\n{\n  "data": [\n    {\n      "action": "drop",\n      "destination": "10.3.2.1",\n      "id": "db5a18ef-a033-48fb-a318-af054c8d3ace",\n      "inserted_at": "2023-02-21T19:42:16.822620Z",\n      "port_range": null,\n      "port_type": null,\n      "updated_at": "2023-02-21T19:42:16.822620Z",\n      "user_id": null\n    },\n    {\n      "action": "drop",\n      "destination": "10.3.2.2",\n      "id": "2b02c33b-4589-4912-bf38-44bc3853a611",\n      "inserted_at": "2023-02-21T19:42:16.824085Z",\n      "port_range": null,\n      "port_type": null,\n      "updated_at": "2023-02-21T19:42:16.824085Z",\n      "user_id": null\n    },\n    {\n      "action": "drop",\n      "destination": "10.3.2.3",\n      "id": "2b93d655-f870-4c2e-942d-529234f58289",\n      "inserted_at": "2023-02-21T19:42:16.825104Z",\n      "port_range": null,\n      "port_type": null,\n      "updated_at": "2023-02-21T19:42:16.825104Z",\n      "user_id": null\n    },\n    {\n      "action": "drop",\n      "destination": "10.3.2.4",\n      "id": "fb74d75b-6ce3-420b-9d15-532832110c58",\n      "inserted_at": "2023-02-21T19:42:16.826185Z",\n      "port_range": null,\n      "port_type": null,\n      "updated_at": "2023-02-21T19:42:16.826185Z",\n      "user_id": null\n    },\n    {\n      "action": "drop",\n      "destination": "10.3.2.5",\n      "id": "392cee84-07ef-4ecd-9c9f-b916e2aff155",\n      "inserted_at": "2023-02-21T19:42:16.827016Z",\n      "port_range": null,\n      "port_type": null,\n      "updated_at": "2023-02-21T19:42:16.827016Z",\n      "user_id": null\n    }\n  ]\n}\n')),(0,a.kt)("h3",{id:"post-v0rules"},"POST /v0/rules"),(0,a.kt)("h4",{id:"example-1"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i \\\n  -X POST "https://{firezone_host}/v0/rules" \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Authorization: Bearer {api_token}\' \\\n  --data-binary @- << EOF\n{\n  "rule": {\n    "action": "accept",\n    "destination": "1.1.1.1/24",\n    "port_range": "1 - 2",\n    "port_type": "udp",\n    "user_id": "a80e866c-bee5-4dfd-adc0-3847b67b9d56"\n  }\n}\'\nEOF\n\nHTTP/1.1 201\nContent-Type: application/json; charset=utf-8\nLocation: /v0/rules/c9a8a01e-d852-49c0-bcdb-5ea5f70ad932\n\n{\n  "data": {\n    "action": "accept",\n    "destination": "1.1.1.1/24",\n    "id": "c9a8a01e-d852-49c0-bcdb-5ea5f70ad932",\n    "inserted_at": "2023-02-21T19:42:16.853089Z",\n    "port_range": "1 - 2",\n    "port_type": "udp",\n    "updated_at": "2023-02-21T19:42:16.853089Z",\n    "user_id": "a80e866c-bee5-4dfd-adc0-3847b67b9d56"\n  }\n}\n')),(0,a.kt)("h3",{id:"get-v0rulesid"},"GET /v0/rules/{id}"),(0,a.kt)("h4",{id:"example-2"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URI Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"cf77ba9e-604d-408d-a444-4fcee57662d3"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i \\\n  -X GET "https://{firezone_host}/v0/rules/{id}" \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Authorization: Bearer {api_token}\' \\\n\nHTTP/1.1 200\nContent-Type: application/json; charset=utf-8\n\n{\n  "data": {\n    "action": "drop",\n    "destination": "10.10.10.0/24",\n    "id": "cf77ba9e-604d-408d-a444-4fcee57662d3",\n    "inserted_at": "2023-02-21T19:42:16.881405Z",\n    "port_range": null,\n    "port_type": null,\n    "updated_at": "2023-02-21T19:42:16.881405Z",\n    "user_id": null\n  }\n}\n')),(0,a.kt)("h3",{id:"patch-v0rulesid"},"PATCH /v0/rules/{id}"),(0,a.kt)("h4",{id:"example-3"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URI Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"21275ade-d14e-4421-8cdf-49bca4d84d63"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i \\\n  -X PUT "https://{firezone_host}/v0/rules/{id}" \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Authorization: Bearer {api_token}\' \\\n  --data-binary @- << EOF\n{\n  "rule": {\n    "action": "accept",\n    "destination": "1.1.1.1/24",\n    "port_range": "1 - 2",\n    "port_type": "udp"\n  }\n}\'\nEOF\n\nHTTP/1.1 200\nContent-Type: application/json; charset=utf-8\n\n{\n  "data": {\n    "action": "accept",\n    "destination": "1.1.1.1/24",\n    "id": "21275ade-d14e-4421-8cdf-49bca4d84d63",\n    "inserted_at": "2023-02-21T19:42:16.786969Z",\n    "port_range": "1 - 2",\n    "port_type": "udp",\n    "updated_at": "2023-02-21T19:42:16.795630Z",\n    "user_id": null\n  }\n}\n')),(0,a.kt)("h3",{id:"delete-v0rulesid"},"DELETE /v0/rules/{id}"),(0,a.kt)("h4",{id:"example-4"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URI Parameters:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"526b66e7-6433-4607-af87-9046a3c801e9"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -i \\\n  -X DELETE \"https://{firezone_host}/v0/rules/{id}\" \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer {api_token}' \\\n\nHTTP/1.1 204\n")))}c.isMDXComponent=!0}}]);