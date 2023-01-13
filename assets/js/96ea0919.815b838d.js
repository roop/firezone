"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[3889],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,k=u["".concat(o,".").concat(m)]||u[m]||c[m]||i;return t?a.createElement(k,l(l({ref:n},p),{},{components:t})):a.createElement(k,l({ref:n},p))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9884:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const i={title:"Users",sidebar_position:2,toc_max_heading_level:4},l=void 0,s={unversionedId:"reference/api/users",id:"reference/api/users",title:"Users",description:"This endpoint allows an administrator to manage Users.",source:"@site/docs/reference/api/users.mdx",sourceDirName:"reference/api",slug:"/reference/api/users",permalink:"/reference/api/users",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/reference/api/users.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Users",sidebar_position:2,toc_max_heading_level:4},sidebar:"tutorialSidebar",previous:{title:"REST API",permalink:"/reference/api/"},next:{title:"Configurations",permalink:"/reference/api/configurations"}},o={},d=[{value:"Auto-Create Users from OpenID or SAML providers",id:"auto-create-users-from-openid-or-saml-providers",level:2},{value:"API Documentation",id:"api-documentation",level:2},{value:"List all Users GET /v0/users",id:"list-all-users-get-v0users",level:3},{value:"Example",id:"example",level:4},{value:"Create a User POST /v0/users",id:"create-a-user-post-v0users",level:3},{value:"User Attributes",id:"user-attributes",level:4},{value:"Example",id:"example-1",level:4},{value:"Provision an unprivileged OpenID User",id:"provision-an-unprivileged-openid-user",level:4},{value:"Provision an admin OpenID User",id:"provision-an-admin-openid-user",level:4},{value:"Error due to invalid parameters",id:"error-due-to-invalid-parameters",level:4},{value:"GET /v0/users/{id}",id:"get-v0usersid",level:3},{value:"An email can be used instead of ID.",id:"an-email-can-be-used-instead-of-id",level:4},{value:"Update a User PATCH /v0/users/{id}",id:"update-a-user-patch-v0usersid",level:3},{value:"Update by email",id:"update-by-email",level:4},{value:"Update by ID",id:"update-by-id",level:4},{value:"DELETE /v0/users/{id}",id:"delete-v0usersid",level:3},{value:"Example",id:"example-2",level:4},{value:"An email can be used instead of ID.",id:"an-email-can-be-used-instead-of-id-1",level:4}],p={toc:d};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This endpoint allows an administrator to manage Users."),(0,r.kt)("h2",{id:"auto-create-users-from-openid-or-saml-providers"},"Auto-Create Users from OpenID or SAML providers"),(0,r.kt)("p",null,"You can set Configuration option ",(0,r.kt)("inlineCode",{parentName:"p"},"auto_create_users")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to automatically create users\nfrom OpenID or SAML providers. Use it with care as anyone with access to the provider will be\nable to log-in to Firezone."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"auto_create_users")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", then you need to provision users with ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," attribute,\notherwise they will have no means to log in."),(0,r.kt)("h2",{id:"api-documentation"},"API Documentation"),(0,r.kt)("h3",{id:"list-all-users-get-v0users"},"List all Users ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"GET /v0/users"),"]"),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i \\\n  -X GET "https://{firezone_host}/v0/users" \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Authorization: Bearer {api_token}\' \\\n\nHTTP/1.1 200\nContent-Type: application/json; charset=utf-8\n\n{\n  "data": [\n    {\n      "disabled_at": null,\n      "email": "test-2886@test",\n      "id": "9f0ce70d-d9e6-4610-ad3b-e5758318c016",\n      "inserted_at": "2023-01-13T06:30:47.076850Z",\n      "last_signed_in_at": null,\n      "last_signed_in_method": null,\n      "role": "admin",\n      "updated_at": "2023-01-13T06:30:47.076850Z"\n    },\n    {\n      "disabled_at": null,\n      "email": "test-2918@test",\n      "id": "36479416-7099-46f9-b9b9-3ad4411eef7d",\n      "inserted_at": "2023-01-13T06:30:47.079115Z",\n      "last_signed_in_at": null,\n      "last_signed_in_method": null,\n      "role": "admin",\n      "updated_at": "2023-01-13T06:30:47.079115Z"\n    },\n    {\n      "disabled_at": null,\n      "email": "test-3045@test",\n      "id": "232c2358-5132-4fc7-8e42-cd8464fcae02",\n      "inserted_at": "2023-01-13T06:30:47.081138Z",\n      "last_signed_in_at": null,\n      "last_signed_in_method": null,\n      "role": "admin",\n      "updated_at": "2023-01-13T06:30:47.081138Z"\n    },\n    {\n      "disabled_at": null,\n      "email": "test-2950@test",\n      "id": "b15b274b-751e-4ca6-9c3e-3a798299ec86",\n      "inserted_at": "2023-01-13T06:30:47.083059Z",\n      "last_signed_in_at": null,\n      "last_signed_in_method": null,\n      "role": "admin",\n      "updated_at": "2023-01-13T06:30:47.083059Z"\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"create-a-user-post-v0users"},"Create a User ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"POST /v0/users"),"]"),(0,r.kt)("p",null,"Create a new User."),(0,r.kt)("p",null,"This endpoint is useful in two cases:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"When ",(0,r.kt)("a",{parentName:"li",href:"/authenticate/local-auth/"},"Local Authentication")," is enabled (discouraged in\nproduction deployments), it allows an administrator to provision users with their passwords;"),(0,r.kt)("li",{parentName:"ol"},"When ",(0,r.kt)("inlineCode",{parentName:"li"},"auto_create_users")," in the associated OpenID or SAML configuration is disabled,\nit allows an administrator to provision users with their emails beforehand, effectively\nwhitelisting specific users for authentication.")),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"auto_create_users")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in the associated OpenID or SAML configuration, there is no need\nto provision users; they will be created automatically when they log in for the first time using\nthe associated OpenID or SAML provider."),(0,r.kt)("h4",{id:"user-attributes"},"User Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"role")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"admin")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"unprivileged")," (default)"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"User role.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"email")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"Email which will be used to identify the user.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"password")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"A password that can be used for login-password authentication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"password_confirmation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"->"),(0,r.kt)("td",{parentName:"tr",align:null},"Is required when the ",(0,r.kt)("inlineCode",{parentName:"td"},"password")," is set.")))),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i \\\n  -X POST "https://{firezone_host}/v0/users" \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Authorization: Bearer {api_token}\' \\\n  --data-binary @- << EOF\n{\n  "user": {\n    "email": "new-user@test",\n    "password": "test1234test",\n    "password_confirmation": "test1234test",\n    "role": "unprivileged"\n  }\n}\'\nEOF\n\nHTTP/1.1 201\nContent-Type: application/json; charset=utf-8\nLocation: /v0/users/86616e3e-13f0-4177-bc8e-1a0e588f0be8\n\n{\n  "data": {\n    "disabled_at": null,\n    "email": "new-user@test",\n    "id": "86616e3e-13f0-4177-bc8e-1a0e588f0be8",\n    "inserted_at": "2023-01-13T06:30:47.047550Z",\n    "last_signed_in_at": null,\n    "last_signed_in_method": null,\n    "role": "unprivileged",\n    "updated_at": "2023-01-13T06:30:47.047550Z"\n  }\n}\n')),(0,r.kt)("h4",{id:"provision-an-unprivileged-openid-user"},"Provision an unprivileged OpenID User"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i \\\n  -X POST "https://{firezone_host}/v0/users" \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Authorization: Bearer {api_token}\' \\\n  --data-binary @- << EOF\n{\n  "user": {\n    "email": "new-user@test",\n    "role": "unprivileged"\n  }\n}\'\nEOF\n\nHTTP/1.1 201\nContent-Type: application/json; charset=utf-8\nLocation: /v0/users/6e7962a7-c183-4afb-8569-9001bdfd0d87\n\n{\n  "data": {\n    "disabled_at": null,\n    "email": "new-user@test",\n    "id": "6e7962a7-c183-4afb-8569-9001bdfd0d87",\n    "inserted_at": "2023-01-13T06:30:47.282412Z",\n    "last_signed_in_at": null,\n    "last_signed_in_method": null,\n    "role": "unprivileged",\n    "updated_at": "2023-01-13T06:30:47.282412Z"\n  }\n}\n')),(0,r.kt)("h4",{id:"provision-an-admin-openid-user"},"Provision an admin OpenID User"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i \\\n  -X POST "https://{firezone_host}/v0/users" \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Authorization: Bearer {api_token}\' \\\n  --data-binary @- << EOF\n{\n  "user": {\n    "email": "new-user@test",\n    "role": "admin"\n  }\n}\'\nEOF\n\nHTTP/1.1 201\nContent-Type: application/json; charset=utf-8\nLocation: /v0/users/dedc4dcc-0f65-4110-ad7f-9c354e36e5e5\n\n{\n  "data": {\n    "disabled_at": null,\n    "email": "new-user@test",\n    "id": "dedc4dcc-0f65-4110-ad7f-9c354e36e5e5",\n    "inserted_at": "2023-01-13T06:30:47.166645Z",\n    "last_signed_in_at": null,\n    "last_signed_in_method": null,\n    "role": "admin",\n    "updated_at": "2023-01-13T06:30:47.166645Z"\n  }\n}\n')),(0,r.kt)("h4",{id:"error-due-to-invalid-parameters"},"Error due to invalid parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i \\\n  -X POST "https://{firezone_host}/v0/users" \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Authorization: Bearer {api_token}\' \\\n  --data-binary @- << EOF\n{\n  "user": {\n    "email": "test@test.com",\n    "password": "test1234"\n  }\n}\'\nEOF\n\nHTTP/1.1 422\nContent-Type: application/json; charset=utf-8\n\n{\n  "errors": {\n    "password": [\n      "should be at least 12 character(s)",\n      "does not match password confirmation."\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"get-v0usersid"},"GET /v0/users/{id}"),(0,r.kt)("h4",{id:"an-email-can-be-used-instead-of-id"},"An email can be used instead of ID."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"URI Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"test-1481@test"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i \\\n  -X GET "https://{firezone_host}/v0/users/{id}" \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Authorization: Bearer {api_token}\' \\\n\nHTTP/1.1 200\nContent-Type: application/json; charset=utf-8\n\n{\n  "data": {\n    "disabled_at": null,\n    "email": "test-1481@test",\n    "id": "b19a929d-fd84-4f11-a799-23416c8efaf8",\n    "inserted_at": "2023-01-13T06:30:47.050304Z",\n    "last_signed_in_at": null,\n    "last_signed_in_method": null,\n    "role": "admin",\n    "updated_at": "2023-01-13T06:30:47.050304Z"\n  }\n}\n')),(0,r.kt)("h3",{id:"update-a-user-patch-v0usersid"},"Update a User ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"PATCH /v0/users/{id}"),"]"),(0,r.kt)("p",null,"For details please see ",(0,r.kt)("a",{parentName:"p",href:"#create-a-user-post-v0users"},"Create a User")," section."),(0,r.kt)("h4",{id:"update-by-email"},"Update by email"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"URI Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"test-3618@test"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i \\\n  -X PUT "https://{firezone_host}/v0/users/{id}" \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Authorization: Bearer {api_token}\' \\\n  --data-binary @- << EOF\n{\n  "user": {}\n}\'\nEOF\n\nHTTP/1.1 200\nContent-Type: application/json; charset=utf-8\n\n{\n  "data": {\n    "disabled_at": null,\n    "email": "test-3618@test",\n    "id": "54d4de57-21f3-4adc-a9a9-a3ee642da76e",\n    "inserted_at": "2023-01-13T06:30:47.285730Z",\n    "last_signed_in_at": null,\n    "last_signed_in_method": null,\n    "role": "unprivileged",\n    "updated_at": "2023-01-13T06:30:47.285730Z"\n  }\n}\n')),(0,r.kt)("h4",{id:"update-by-id"},"Update by ID"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"URI Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"8dd4eff5-3d2f-4868-94cd-73abb6f130dc"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -i \\\n  -X PUT "https://{firezone_host}/v0/users/{id}" \\\n  -H \'Content-Type: application/json\' \\\n  -H \'Authorization: Bearer {api_token}\' \\\n  --data-binary @- << EOF\n{\n  "user": {}\n}\'\nEOF\n\nHTTP/1.1 200\nContent-Type: application/json; charset=utf-8\n\n{\n  "data": {\n    "disabled_at": null,\n    "email": "test-3235@test",\n    "id": "8dd4eff5-3d2f-4868-94cd-73abb6f130dc",\n    "inserted_at": "2023-01-13T06:30:47.265280Z",\n    "last_signed_in_at": null,\n    "last_signed_in_method": null,\n    "role": "unprivileged",\n    "updated_at": "2023-01-13T06:30:47.265280Z"\n  }\n}\n')),(0,r.kt)("h3",{id:"delete-v0usersid"},"DELETE /v0/users/{id}"),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"URI Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"fc0b513f-bd4b-4015-ac71-29b59c678a20"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -i \\\n  -X DELETE \"https://{firezone_host}/v0/users/{id}\" \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer {api_token}' \\\n\nHTTP/1.1 204\n")),(0,r.kt)("h4",{id:"an-email-can-be-used-instead-of-id-1"},"An email can be used instead of ID."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"URI Parameters:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"test-3816@test"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -i \\\n  -X DELETE \"https://{firezone_host}/v0/users/{id}\" \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer {api_token}' \\\n\nHTTP/1.1 204\n")))}u.isMDXComponent=!0}}]);