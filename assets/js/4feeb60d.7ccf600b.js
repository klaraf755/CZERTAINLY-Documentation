"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[6392],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},l="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),l=u(n),g=i,h=l["".concat(c,".").concat(g)]||l[g]||d[g]||o;return n?r.createElement(h,a(a({ref:e},p),{},{components:n})):r.createElement(h,a({ref:e},p))}));function h(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[l]="string"==typeof t?t:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},72210:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],s={},c="Introduction",u={unversionedId:"signing/sam-integration/entrust-sam/overview",id:"signing/sam-integration/entrust-sam/overview",title:"Introduction",description:"The Entrust Signature Activation Module (SAM) is used to deploy a server-side endpoint that will be used by the server signing applications to get data signed (a document hash). The SAM receives the signer authentication data, the signer\u2019s signing key, and the data to be signed through a Signature Activation Protocol (SAP). It interacts with the Entrust nShield\xae Connect XC CC eIDAS (called cryptographic module or CM) to return the encrypted data with the signing key.",source:"@site/docs/30-signing/30-sam-integration/07-entrust-sam/01-overview.md",sourceDirName:"30-signing/30-sam-integration/07-entrust-sam",slug:"/signing/sam-integration/entrust-sam/overview",permalink:"/docs/signing/sam-integration/entrust-sam/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SAM Crypto Token",permalink:"/docs/signing/sam-integration/sam-cryptotoken"},next:{title:"Entrust SAM Crypto Token Properties",permalink:"/docs/signing/sam-integration/entrust-sam/properties"}},p={},l=[{value:"Entrust SAM Crypto Token vs Crypto Worker",id:"entrust-sam-crypto-token-vs-crypto-worker",level:2},{value:"Entrust SAM Dynamic Configuration Signer",id:"entrust-sam-dynamic-configuration-signer",level:2}],d={toc:l},g="wrapper";function h(t){var e=t.components,s=(0,i.Z)(t,a);return(0,o.kt)(g,(0,r.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"The Entrust Signature Activation Module (SAM) is used to deploy a server-side endpoint that will be used by the server signing applications to get data signed (a document hash). The SAM receives the signer authentication data, the signer\u2019s signing key, and the data to be signed through a Signature Activation Protocol (SAP). It interacts with the Entrust nShield\xae Connect XC CC eIDAS (called cryptographic module or CM) to return the encrypted data with the signing key."),(0,o.kt)("p",null,"The design of the Entrust SAM is based on the Trustworthy Systems Supporting Server Signing (TW4S) architecture described in the CEN EN 419 241 standards. It implements the CEN EN 419 241-2 standard to be integrated with the Server Signing Application (SSA) as described in CEN EN 419 241-1."),(0,o.kt)("p",null,"The cryptographic module used with the Entrust SAM module is the Entrust nShield Connect XC CC eIDAS HSM, which is Common Criteria certified for CEN EN 419 221-5 and FIPS 140-2 L3."),(0,o.kt)("p",null,"CZERTAINLY Signing solution acts as a server signing application that interacts with the Entrust SAM and provides a simple interface to consume the SAM services."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For more information about the Entrust SAM, please refer to official vendor's site and materials: ",(0,o.kt)("a",{parentName:"p",href:"https://www.entrust.com/digital-security/certificate-solutions/products/digital-signing/entrust-signature-activation-module"},"Entrust Signature Activation Module"))),(0,o.kt)("h2",{id:"entrust-sam-crypto-token-vs-crypto-worker"},"Entrust SAM Crypto Token vs Crypto Worker"),(0,o.kt)("p",null,"The CZERTAINLY Signing acts as a Signing Service Privileged User (SSPU) and can invoke service function of the SAM administratively. "),(0,o.kt)("p",null,"The implementation of ",(0,o.kt)("a",{parentName:"p",href:"./properties"},"Entrust SAM Crypto Token")," contains all required attributes to establish connection with the Entrust SAM interface and start consuming the SAM services."),(0,o.kt)("p",null,"The Entrust SAM Crypto Worker implementations define the behaviour of the signing process and authenticates to the Entrust SAM. ",(0,o.kt)("inlineCode",{parentName:"p"},"Signer")," contains the reference for the Entrust SAM Crypto Worker implementation that utilizes the ",(0,o.kt)("a",{parentName:"p",href:"./properties"},"Entrust SAM Crypto Token"),"."),(0,o.kt)("p",null,"The following Entrust SAM Crypto Worker implementations are available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./crypto-workers/basic-crypto-worker"},(0,o.kt)("inlineCode",{parentName:"a"},"EntrustSAMCryptoWorker"))," - this is a basic implementation of the Entrust SAM Crypto Worker that must be configured with the Entrust SAM Crypto Token to create access to the Entrust SAM interface."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"./crypto-workers/onetime-crypto-worker"},(0,o.kt)("inlineCode",{parentName:"a"},"EntrustSAMOneTimeCryptoWorker"))," - this Crypto Worker implementation is used to create a one-time signing keys with short-lived certificates to sign data.")),(0,o.kt)("p",null,"For a sample configuration of the Entrust SAM Crypto Token, see ",(0,o.kt)("a",{parentName:"p",href:"./samples/sample-configuration"},"Sample Configuration"),"."),(0,o.kt)("h2",{id:"entrust-sam-dynamic-configuration-signer"},"Entrust SAM Dynamic Configuration Signer"),(0,o.kt)("p",null,"The dynamic configuration is the part of the SAM's public configuration that is likely to change more often. It can be hot swapped, i.e., changed while the SAM is running; it does not need to be stopped."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"./dynamic-config-signer-properties"},"Dynamic Configuration Signer")," offers easy and convenient way to sign and update the dynamic configuration of the SAM."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Entrust",src:n(77963).Z,title:"Entrust",width:"610",height:"292"}))))}h.isMDXComponent=!0},77963:function(t,e,n){e.Z=n.p+"assets/images/Entrust_logo-2b1bc072323497796c0f64c2ca0b0cf6.png"}}]);