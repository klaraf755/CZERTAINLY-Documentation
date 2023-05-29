"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[3499],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(n),k=o,s=u["".concat(c,".").concat(k)]||u[k]||m[k]||a;return n?r.createElement(s,i(i({ref:t},d),{},{components:n})):r.createElement(s,i({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65823:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return m}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],p={},c="Token",l={unversionedId:"certificate-key/concept-design/core-components/token",id:"certificate-key/concept-design/core-components/token",title:"Token",description:"Token holds information about the connection to specific cryptographic technology that can be used to manage keys and request cryptographic operations.",source:"@site/docs/10-certificate-key/02-concept-design/04-core-components/15-token.md",sourceDirName:"10-certificate-key/02-concept-design/04-core-components",slug:"/certificate-key/concept-design/core-components/token",permalink:"/docs/certificate-key/concept-design/core-components/token",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Group",permalink:"/docs/certificate-key/concept-design/core-components/group"},next:{title:"Key",permalink:"/docs/certificate-key/concept-design/core-components/key"}},d={},m=[{value:"<code>Cryptography Provider</code>",id:"cryptography-provider",level:3},{value:"<code>Token Profile</code>",id:"token-profile",level:3}],u={toc:m};function k(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"token"},"Token"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Token")," holds information about the connection to specific cryptographic technology that can be used to manage keys and request cryptographic operations."),(0,a.kt)("p",null,"The information held by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Token")," varies depending on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Kind")," of the underneath ",(0,a.kt)("inlineCode",{parentName:"p"},"Cryptography Provider")," and is defined by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Connector"),".\n",(0,a.kt)("inlineCode",{parentName:"p"},"Cryptography Provider")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"Attributes")," to get the data needed to establish the connection with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Token"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Token")," has the following parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the ",(0,a.kt)("inlineCode",{parentName:"td"},"Token"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Cryptography Provider")),(0,a.kt)("td",{parentName:"tr",align:null},"Identification of ",(0,a.kt)("inlineCode",{parentName:"td"},"Connector")," implementing the ",(0,a.kt)("inlineCode",{parentName:"td"},"Cryptography Provider")," ",(0,a.kt)("inlineCode",{parentName:"td"},"Function Group"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Kind")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Kind")," of the technology implemented by the ",(0,a.kt)("inlineCode",{parentName:"td"},"Connector"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Attributes")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Attributes")," defined by ",(0,a.kt)("inlineCode",{parentName:"td"},"Connector")," implementation and the specific ",(0,a.kt)("inlineCode",{parentName:"td"},"Kind"))))),(0,a.kt)("h3",{id:"cryptography-provider"},(0,a.kt)("inlineCode",{parentName:"h3"},"Cryptography Provider")),(0,a.kt)("p",null,"For more information, refer to ",(0,a.kt)("a",{parentName:"p",href:"../../connectors/cryptography-provider"},"Cryptography Provider")," description."),(0,a.kt)("h3",{id:"token-profile"},(0,a.kt)("inlineCode",{parentName:"h3"},"Token Profile")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Token Profile")," is created on top of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Token"),". For more information, refer to ",(0,a.kt)("a",{parentName:"p",href:"./token-profile"},"Token Profile"),"."))}k.isMDXComponent=!0}}]);