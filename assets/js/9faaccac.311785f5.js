"use strict";(self.webpackChunkfirezone_docs=self.webpackChunkfirezone_docs||[]).push([[6627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3351:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"SAML 2.0",sidebar_position:11,description:"Enforce single sign-on with your identity provider. Integrate providers like Okta, Google, OneLogin, and JumpCloud using Firezone's SAML 2.0 connector."},i="Integrate your identity provider using SAML 2.0",l={unversionedId:"authenticate/saml/README",id:"authenticate/saml/README",title:"SAML 2.0",description:"Enforce single sign-on with your identity provider. Integrate providers like Okta, Google, OneLogin, and JumpCloud using Firezone's SAML 2.0 connector.",source:"@site/docs/authenticate/saml/README.mdx",sourceDirName:"authenticate/saml",slug:"/authenticate/saml/",permalink:"/authenticate/saml/",draft:!1,editUrl:"https://github.com/firezone/firezone/tree/master/docs/docs/authenticate/saml/README.mdx",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"SAML 2.0",sidebar_position:11,description:"Enforce single sign-on with your identity provider. Integrate providers like Okta, Google, OneLogin, and JumpCloud using Firezone's SAML 2.0 connector."},sidebar:"tutorialSidebar",previous:{title:"Zitadel",permalink:"/authenticate/oidc/zitadel"},next:{title:"Okta",permalink:"/authenticate/saml/okta"}},p={},s=[{value:"Supported identity providers",id:"supported-identity-providers",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"General setup instructions",id:"general-setup-instructions",level:2},{value:"IdP metadata document",id:"idp-metadata-document",level:3},{value:"ACS URL",id:"acs-url",level:3},{value:"Entity ID",id:"entity-id",level:3}],d=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},u=d("Tabs"),c=d("TabItem"),m={toc:s};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"integrate-your-identity-provider-using-saml-20"},"Integrate your identity provider using SAML 2.0"),(0,a.kt)("p",null,"Firezone supports Single Sign-On (SSO) via SAML 2.0."),(0,a.kt)("h2",{id:"supported-identity-providers"},"Supported identity providers"),(0,a.kt)("p",null,"In general, most identity providers that support SAML 2.0 should work with\nFirezone."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Provider"),(0,a.kt)("th",{parentName:"tr",align:null},"Support Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"okta"},"Okta")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Tested and supported")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"google"},"Google Workspace")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Tested and supported")),(0,a.kt)("td",{parentName:"tr",align:null},"Uncheck ",(0,a.kt)("inlineCode",{parentName:"td"},"Require signed envelopes"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"onelogin"},"OneLogin")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Tested and supported")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"jumpcloud"},"JumpCloud")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Tested and supported")),(0,a.kt)("td",{parentName:"tr",align:null},"Uncheck ",(0,a.kt)("inlineCode",{parentName:"td"},"Require signed envelopes"))))),(0,a.kt)("p",null,"Occasionally, providers that don't implement the full SAML 2.0 standard or use\nuncommon configurations may be problematic. If this is the case, ",(0,a.kt)("a",{parentName:"p",href:"https://www.firezone.dev/contact/sales?utm_source=docs.firezone.dev"},"contact us")," about a custom integration."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before using SAML 2.0 in Firezone, you'll first need to generate a set of\nprivate and public keys using the RSA or DSA algorithms along with an X.509\ncertificate that contains the public key. This can be generated with ",(0,a.kt)("inlineCode",{parentName:"p"},"openssl"),"\nusing the following one-liner:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout saml.key -out saml.crt\n")),(0,a.kt)("p",null,"Now, configure your Firezone portal to use these:"),(0,a.kt)(u,{mdxType:"Tabs"},(0,a.kt)(c,{value:"docker",label:"Docker",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"SAML_KEY_PATH")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SAML_CERT_PATH")," environment variables to\nthe path containing your ",(0,a.kt)("inlineCode",{parentName:"p"},"saml.key")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"saml.crt")," above. If using our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/firezone/firezone/blob/master/docker-compose.prod.yml"},"example\ndocker compose file"),",\nwhich includes a volume for mapping configuration,\nsave these files to ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.firezone/firezone")," on the Docker host and set the\n",(0,a.kt)("inlineCode",{parentName:"p"},"SAML_KEY_PATH=/var/firezone/saml.key")," and\n",(0,a.kt)("inlineCode",{parentName:"p"},"SAML_CERT_PATH=/var/firezone/saml.crt")," environment variables for the Firezone\ncontainer.")),(0,a.kt)(c,{value:"omnibus",label:"Omnibus",mdxType:"TabItem"},(0,a.kt)("p",null,"Set the following attributes in your ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/firezone/firezone.rb"),"\nconfiguration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"default['firezone']['authentication']['saml']['key'] = '/path/to/your/saml.key'\ndefault['firezone']['authentication']['saml']['cert'] = '/path/to/your/saml.crt'\n")),(0,a.kt)("p",null,"and run ",(0,a.kt)("inlineCode",{parentName:"p"},"firezone-ctl reconfigure")," to pick up the changes."))),(0,a.kt)("h2",{id:"general-setup-instructions"},"General setup instructions"),(0,a.kt)("p",null,"Once you've configured Firezone with an X.509 certificate and corresponding\nprivate key as shown above, you'll need a few more things to set up a generic\nSAML integration."),(0,a.kt)("p",null,"Use these general instructions to configure a SAML connector for a provider not listed\nabove."),(0,a.kt)("h3",{id:"idp-metadata-document"},"IdP metadata document"),(0,a.kt)("p",null,"You'll need to get the SAML Metadata XML document from your identity provider. In most\ncases this can be downloaded from your IdP's SAML App configuration dashboard."),(0,a.kt)("h3",{id:"acs-url"},"ACS URL"),(0,a.kt)("p",null,"Firezone constructs the ACS URL based on the Base URL and Configuration ID entered\nin the Firezone SAML configuration, defaulting to: ",(0,a.kt)("inlineCode",{parentName:"p"},"EXTERNAL_URL/auth/saml/sp/consume/:config_id"),",\ne.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"https://firezone.company.com/auth/saml/sp/consume/okta"),"."),(0,a.kt)("h3",{id:"entity-id"},"Entity ID"),(0,a.kt)("p",null,"The Firezone Entity ID can be configured with the ",(0,a.kt)("inlineCode",{parentName:"p"},"SAML_ENTITY_ID")," environment variable\nand defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"urn:firezone.dev:firezone-app")," if not set."),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"/reference/env-vars"},"environment variable reference")," for more information."))}k.isMDXComponent=!0}}]);