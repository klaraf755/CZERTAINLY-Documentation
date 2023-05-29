"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[8406],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},l="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,u=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),l=c(n),m=i,g=l["".concat(u,".").concat(m)]||l[m]||d[m]||a;return n?r.createElement(g,o(o({ref:e},p),{},{components:n})):r.createElement(g,o({ref:e},p))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s[l]="string"==typeof t?t:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59365:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],s={},u="Introduction",c={unversionedId:"signing/sam-integration/entrust-sam/sad-providers/overview",id:"signing/sam-integration/entrust-sam/sad-providers/overview",title:"Introduction",description:"Signature Activation Data (SAD) Providers are handling the activation of the signing operation by transmitting information about the Signature Activation Data (SAD) between the Signature Integration Component (SIC) and Signature Activation Module (SAM) using the Signature Activation Protocol (SAP).",source:"@site/docs/30-signing/30-sam-integration/07-entrust-sam/07-sad-providers/01-overview.md",sourceDirName:"30-signing/30-sam-integration/07-entrust-sam/07-sad-providers",slug:"/signing/sam-integration/entrust-sam/sad-providers/overview",permalink:"/docs/signing/sam-integration/entrust-sam/sad-providers/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Signing with Onetime Crypto Worker",permalink:"/docs/signing/sam-integration/entrust-sam/crypto-workers/signing-with-onetime-crypto-worker"},next:{title:"REST SAD Provider",permalink:"/docs/signing/sam-integration/entrust-sam/sad-providers/rest"}},p={},l=[{value:"SAD Metadata",id:"sad-metadata",level:2}],d={toc:l},m="wrapper";function g(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)(m,(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Signature Activation Data (SAD) Providers are handling the activation of the signing operation by transmitting information about the Signature Activation Data (SAD) between the Signature Integration Component (SIC) and Signature Activation Module (SAM) using the Signature Activation Protocol (SAP)."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SAD_PROVIDER_IMPLEMENTATION_CLASS")," property must be configured with proper implementation of the SAD Provider."),(0,a.kt)("p",null,"The following implementations are available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./rest"},"REST SAD Provider")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"./metadata"},"Metadata SAD Provider"))),(0,a.kt)("h2",{id:"sad-metadata"},"SAD Metadata"),(0,a.kt)("p",null,"Signing requests support the SAD metadata that can be provided as part of the request metadata starting with the ",(0,a.kt)("inlineCode",{parentName:"p"},"SAD_")," prefix.\nEach SAD metadata is included in the SAD request through the SAD provider. This allows to identify additional properties required for the proper SAD processing."),(0,a.kt)("p",null,"An example of such metadata can be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"REQUEST_METADATA.SAD_PROVIDED = ...\nREQUEST_METADATA.SAD_ID = 58ac6ef459bb945ab88def9963\nREQUEST_METADATA.SAD_ADDITIONAL_INFO = only for testing\n")))}g.isMDXComponent=!0}}]);