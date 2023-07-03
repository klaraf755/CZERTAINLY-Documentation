"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[7098],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||o;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60080:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],c={},l="Token Profile",p={unversionedId:"certificate-key/concept-design/core-components/token-profile",id:"certificate-key/concept-design/core-components/token-profile",title:"Token Profile",description:"What is Token Profile?",source:"@site/docs/10-certificate-key/02-concept-design/04-core-components/18-token-profile.md",sourceDirName:"10-certificate-key/02-concept-design/04-core-components",slug:"/certificate-key/concept-design/core-components/token-profile",permalink:"/docs/certificate-key/concept-design/core-components/token-profile",draft:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/02-concept-design/04-core-components/18-token-profile.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Key",permalink:"/docs/certificate-key/concept-design/core-components/key"},next:{title:"Certificate Management",permalink:"/docs/certificate-key/concept-design/modules/certificate-management"}},s={},u=[{value:"What is <code>Token Profile</code>?",id:"what-is-token-profile",level:2},{value:"Characteristics",id:"characteristics",level:3}],f={toc:u},m="wrapper";function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"token-profile"},"Token Profile"),(0,o.kt)("h2",{id:"what-is-token-profile"},"What is ",(0,o.kt)("inlineCode",{parentName:"h2"},"Token Profile"),"?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Token Profile")," is a representation of attributes that collectively provides a complete configuration of the cryptographic key management service which can be used by users and applications in a consistent and convenient way."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Token Profile")," provides an abstraction of the key management service configuration attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Token and its related information"),(0,o.kt)("li",{parentName:"ul"},"Technology-specific attributes"),(0,o.kt)("li",{parentName:"ul"},"Service-related configuration"),(0,o.kt)("li",{parentName:"ul"},"Access control configuration"),(0,o.kt)("li",{parentName:"ul"},"Global configuration of key usages")),(0,o.kt)("p",null,"Additionally, ",(0,o.kt)("inlineCode",{parentName:"p"},"Token Profile")," uses the following attributes to identify the service:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Token Profile")," Name"),(0,o.kt)("li",{parentName:"ul"},"Optional description")),(0,o.kt)("h3",{id:"characteristics"},"Characteristics"),(0,o.kt)("p",null,"Characteristics of ",(0,o.kt)("inlineCode",{parentName:"p"},"Token Profile")," are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Binds the ",(0,o.kt)("inlineCode",{parentName:"li"},"Token")," and act as a specific key management service"),(0,o.kt)("li",{parentName:"ul"},"Configures specific attributes and defines the behavior of the key management service"),(0,o.kt)("li",{parentName:"ul"},"Provide rules for the lifecycle and operations with cryptographic keys")))}d.isMDXComponent=!0}}]);