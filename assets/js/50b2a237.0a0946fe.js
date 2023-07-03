"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[7295],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(c,".").concat(m)]||p[m]||g[m]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18762:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],s={},c="SAM Crypto Token",u={unversionedId:"signing/sam-integration/sam-cryptotoken",id:"signing/sam-integration/sam-cryptotoken",title:"SAM Crypto Token",description:"Remote signing using with the SCAL2 and the CZERTAINLY Signing is possible by integrating the SAM and the signing back-end of the remote signing solution. We call it SAMCryptoToken. It is a special implementation of the of the CryptoToken for the CZERTAINLY Signing, which contains necessary functions and interfaces to communicate with the SAM and the user\u2019s device.",source:"@site/docs/30-signing/30-sam-integration/05-sam-cryptotoken.md",sourceDirName:"30-signing/30-sam-integration",slug:"/signing/sam-integration/sam-cryptotoken",permalink:"/docs/signing/sam-integration/sam-cryptotoken",draft:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/30-sam-integration/05-sam-cryptotoken.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sole Control Assurance Level",permalink:"/docs/signing/sam-integration/scal"},next:{title:"Introduction",permalink:"/docs/signing/sam-integration/entrust-sam/overview"}},l={},p=[],g={toc:p},m="wrapper";function f(e){var t=e.components,s=(0,i.Z)(e,a);return(0,o.kt)(m,(0,r.Z)({},g,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sam-crypto-token"},"SAM Crypto Token"),(0,o.kt)("p",null,"Remote signing using with the SCAL2 and the CZERTAINLY Signing is possible by integrating the SAM and the signing back-end of the remote signing solution. We call it ",(0,o.kt)("strong",{parentName:"p"},"SAMCryptoToken"),". It is a special implementation of the of the CryptoToken for the CZERTAINLY Signing, which contains necessary functions and interfaces to communicate with the SAM and the user\u2019s device."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SCAL-CZERTAINLY",src:n(75621).Z,title:"SCAL-CZERTAINLY",width:"751",height:"321"}))),(0,o.kt)("p",null,"What is happening when user would like to sign the data within the context of the CZERTAINLY Signing and SCAL2? The typical signature process is as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Request to sign the data is triggered from the the client"),(0,o.kt)("li",{parentName:"ul"},"Signer prepares the Data To Be Signed and asks the signing back-end to confirm by the user"),(0,o.kt)("li",{parentName:"ul"},"User confirms the Data To Be Signed and activates the private key for the signing operation"),(0,o.kt)("li",{parentName:"ul"},"QSCD + SAM verifies the request and produces the signature"),(0,o.kt)("li",{parentName:"ul"},"Signer completes the operation and provides the result")))}f.isMDXComponent=!0},75621:function(e,t,n){t.Z=n.p+"assets/images/SCAL-CZERTAINLY-a268d1c8c060d1aba99aef8c79cececc.png"}}]);