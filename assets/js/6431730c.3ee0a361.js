"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[3589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"Google Workspace",sidebar_position:2,description:"Enforce 2FA/MFA using Google Workspace for users of Firezone's WireGuard\xae-based secure access platform. This guide walks through integrating Google Workspace for single sign-on using the SAML 2.0 connector."},i="Enable SSO with Google Workspace (SAML 2.0)",l={unversionedId:"authenticate/saml/google",id:"authenticate/saml/google",title:"Google Workspace",description:"Enforce 2FA/MFA using Google Workspace for users of Firezone's WireGuard\xae-based secure access platform. This guide walks through integrating Google Workspace for single sign-on using the SAML 2.0 connector.",source:"@site/docs/authenticate/saml/google.mdx",sourceDirName:"authenticate/saml",slug:"/authenticate/saml/google",permalink:"/authenticate/saml/google",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/authenticate/saml/google.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Google Workspace",sidebar_position:2,description:"Enforce 2FA/MFA using Google Workspace for users of Firezone's WireGuard\xae-based secure access platform. This guide walks through integrating Google Workspace for single sign-on using the SAML 2.0 connector."},sidebar:"tutorialSidebar",previous:{title:"Okta",permalink:"/authenticate/saml/okta"},next:{title:"OneLogin",permalink:"/authenticate/saml/onelogin"}},s={},p=[{value:"Create a SAML connector",id:"create-a-saml-connector",level:2},{value:"Add SAML identity provider to Firezone",id:"add-saml-identity-provider-to-firezone",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"enable-sso-with-google-workspace-saml-20"},"Enable SSO with Google Workspace (SAML 2.0)"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This guide assumes you have completed the prerequisite steps\n(e.g. generate self-signed X.509 certificates) outlined ",(0,r.kt)("a",{parentName:"p",href:"/authenticate/saml#prerequisites"},"here"),".")),(0,r.kt)("p",null,"Firezone supports Single Sign-On (SSO) using Google through the generic SAML 2.0\nconnector. This guide will walk you through how to configure the integration."),(0,r.kt)("h2",{id:"create-a-saml-connector"},"Create a SAML connector"),(0,r.kt)("p",null,"In the Google Workspace admin portal, create a new SAML app under\nthe Application > Web and mobile apps tab. Use the following config values during setup:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App name"),(0,r.kt)("td",{parentName:"tr",align:null},"Firezone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App icon"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://user-images.githubusercontent.com/52545545/202567638-513dba14-ea8c-4da8-8f75-341310f1e456.png"},"save link as"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACS URL"),(0,r.kt)("td",{parentName:"tr",align:null},"This is your Firezone ",(0,r.kt)("inlineCode",{parentName:"td"},"EXTERNAL_URL/auth/saml/sp/consume/:config_id")," (e.g., ",(0,r.kt)("inlineCode",{parentName:"td"},"https://firezone.company.com/auth/saml/sp/consume/google"),").")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Entity ID"),(0,r.kt)("td",{parentName:"tr",align:null},"This should be the same as your Firezone ",(0,r.kt)("inlineCode",{parentName:"td"},"SAML_ENTITY_ID"),", defaults to ",(0,r.kt)("inlineCode",{parentName:"td"},"urn:firezone.dev:firezone-app"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Signed response"),(0,r.kt)("td",{parentName:"tr",align:null},"Unchecked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name ID format"),(0,r.kt)("td",{parentName:"tr",align:null},"Unspecified")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Basic Information > Primary email")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/205353768-0c8696b2-5fb2-42a7-98fa-9d68b23dfb05.png",alt:"Google SAML"})),(0,r.kt)("p",null,"Once complete, save the changes and download the SAML metadata document. You'll need\nto copy-paste the contents of this document into the Firezone portal in the next step."),(0,r.kt)("h2",{id:"add-saml-identity-provider-to-firezone"},"Add SAML identity provider to Firezone"),(0,r.kt)("p",null,"In the Firezone portal, add a SAML identity provider under the Security tab\nby filling out the following information:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Config ID"),(0,r.kt)("td",{parentName:"tr",align:null},"google"),(0,r.kt)("td",{parentName:"tr",align:null},"Firezone uses this value to construct endpoints required in the SAML authentication flow (e.g., receiving assertions, login requests).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Label"),(0,r.kt)("td",{parentName:"tr",align:null},"Google"),(0,r.kt)("td",{parentName:"tr",align:null},"Appears on the sign in button for authentication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"see note"),(0,r.kt)("td",{parentName:"tr",align:null},"Paste the contents of the SAML metadata document you downloaded in the previous step from Google.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sign assertions"),(0,r.kt)("td",{parentName:"tr",align:null},"Checked."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sign metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"Checked."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Require signed assertions"),(0,r.kt)("td",{parentName:"tr",align:null},"Checked."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Required signed envelopes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Unchecked.")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/52545545/202566502-3a06694b-249e-4330-9f6b-39004eb36406.png",alt:"Firezone SAML"})),(0,r.kt)("p",null,"After saving the SAML config, you should see a ",(0,r.kt)("inlineCode",{parentName:"p"},"Sign in with Google")," button\non your Firezone portal sign-in page."))}d.isMDXComponent=!0}}]);