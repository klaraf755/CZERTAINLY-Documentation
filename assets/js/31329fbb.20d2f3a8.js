"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[2126],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,f=m["".concat(l,".").concat(s)]||m[s]||u[s]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58086:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],c={},l="Credential",p={unversionedId:"certificate-key/concept-design/core-components/credential",id:"certificate-key/concept-design/core-components/credential",title:"Credential",description:"Credential allows storing the authentication and authorization related information for the Connector to use when trying to communicate with an external system and technology.",source:"@site/docs/10-certificate-key/02-concept-design/04-core-components/05-credential.md",sourceDirName:"10-certificate-key/02-concept-design/04-core-components",slug:"/certificate-key/concept-design/core-components/credential",permalink:"/docs/certificate-key/concept-design/core-components/credential",draft:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/02-concept-design/04-core-components/05-credential.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Roles and Permissions",permalink:"/docs/certificate-key/concept-design/architecture/access-control/roles-permissions"},next:{title:"Authority",permalink:"/docs/certificate-key/concept-design/core-components/authority"}},d={},m=[],u={toc:m},s="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"credential"},"Credential"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Credential")," allows storing the authentication and authorization related information for the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," to use when trying to communicate with an external system and technology."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"Credential")," is only used by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"Credential")," is not used by the platform to authenticate or authorize client or administrative operations.")),(0,i.kt)("p",null,"The platform provides the ",(0,i.kt)("inlineCode",{parentName:"p"},"Credential Provider API")," which can be used to implement custom ",(0,i.kt)("inlineCode",{parentName:"p"},"Credential Provider"),"."),(0,i.kt)("p",null,"Once the ",(0,i.kt)("inlineCode",{parentName:"p"},"Credential")," is stored on the platform, it becomes available for use by every ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Credential")," has the following parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Name"),(0,i.kt)("td",{parentName:"tr",align:null},"Name of the ",(0,i.kt)("inlineCode",{parentName:"td"},"Credential"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Credential Provider")),(0,i.kt)("td",{parentName:"tr",align:null},"Name of ",(0,i.kt)("inlineCode",{parentName:"td"},"Credential Provider")," ",(0,i.kt)("inlineCode",{parentName:"td"},"Connector"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Kind")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Kind")," of the ",(0,i.kt)("inlineCode",{parentName:"td"},"Credential")," implemented by the ",(0,i.kt)("inlineCode",{parentName:"td"},"Connector"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Attributes")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Attributes")," defined by ",(0,i.kt)("inlineCode",{parentName:"td"},"Connector"),"implementation and the specific ",(0,i.kt)("inlineCode",{parentName:"td"},"Kind"),".")))))}f.isMDXComponent=!0}}]);