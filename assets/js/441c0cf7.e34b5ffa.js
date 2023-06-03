"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[3428],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=l(n),m=i,d=s["".concat(u,".").concat(m)]||s[m]||f[m]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[s]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},69955:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],c={},u="Configure Intune SCEP Profile",l={unversionedId:"certificate-key/integration-guides/intune/configure-scep-intune",id:"certificate-key/integration-guides/intune/configure-scep-intune",title:"Configure Intune SCEP Profile",description:"To integrate CZERTAINLY with registered application in Authorize CZERTAINLY, we need to create SCEP Profile that will be used to validate and process Intune requests.",source:"@site/docs/10-certificate-key/20-integration-guides/12-intune/05-configure-scep-intune.md",sourceDirName:"10-certificate-key/20-integration-guides/12-intune",slug:"/certificate-key/integration-guides/intune/configure-scep-intune",permalink:"/docs/certificate-key/integration-guides/intune/configure-scep-intune",draft:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/20-integration-guides/12-intune/05-configure-scep-intune.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authorize CZERTAINLY",permalink:"/docs/certificate-key/integration-guides/intune/authorize-czertainly"},next:{title:"Create Intune Profiles",permalink:"/docs/certificate-key/integration-guides/intune/create-intune-profiles"}},p={},s=[{value:"<code>SCEP Profile</code> certificate",id:"scep-profile-certificate",level:2}],f={toc:s},m="wrapper";function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configure-intune-scep-profile"},"Configure Intune SCEP Profile"),(0,o.kt)("p",null,"To integrate CZERTAINLY with registered application in ",(0,o.kt)("a",{parentName:"p",href:"./authorize-czertainly"},"Authorize CZERTAINLY"),", we need to create ",(0,o.kt)("inlineCode",{parentName:"p"},"SCEP Profile")," that will be used to validate and process Intune requests."),(0,o.kt)("p",null,"Please refer to ",(0,o.kt)("a",{parentName:"p",href:"../../protocols/scep/scep-profile"},(0,o.kt)("inlineCode",{parentName:"a"},"SCEP Profile"))," documentation for more information and ",(0,o.kt)("a",{parentName:"p",href:"../../protocols/scep/enable-scep-ra-profile#configuration-of-scep-profile"},"Configuration of ",(0,o.kt)("inlineCode",{parentName:"a"},"SCEP Profile")),"."),(0,o.kt)("p",null,"To enable Intune supprt in ",(0,o.kt)("inlineCode",{parentName:"p"},"SCEP Profile"),", you need to set following values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Enable Intune")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Intune Tenant")," -> Directory (tenant) ID of application"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Intune Application ID")," -> Application (client) ID"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Intune Application Key")," -> Application client secret value")),(0,o.kt)("h2",{id:"scep-profile-certificate"},(0,o.kt)("inlineCode",{parentName:"h2"},"SCEP Profile")," certificate"),(0,o.kt)("p",null,"Certificate to be used as SCEP CA certificate (for decryption and signing) must comply with the following requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"key algorithm needs to be ",(0,o.kt)("strong",{parentName:"li"},"RSA")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"issued from the same CA which will be used to issue the device certificate")),(0,o.kt)("li",{parentName:"ul"},"having either EKU ",(0,o.kt)("strong",{parentName:"li"},"Server Authentication")," or ",(0,o.kt)("strong",{parentName:"li"},"Certificate Request Agent")," (1.3.6.1.4.1.311.20.2.1)"),(0,o.kt)("li",{parentName:"ul"},"KU set to ",(0,o.kt)("strong",{parentName:"li"},"Digital Signature")," and ",(0,o.kt)("strong",{parentName:"li"},"Key Encipherment"))),(0,o.kt)("admonition",{title:"Improper configuration",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Improper configuration of the SCEP CA certificate may result in the failure of the Intune SCEP request.")))}d.isMDXComponent=!0}}]);