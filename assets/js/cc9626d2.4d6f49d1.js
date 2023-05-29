"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[7790],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=i.createContext({}),l=function(e){var t=i.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return i.createElement(o.Provider,{value:t},e.children)},f="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),p=n,m=f["".concat(o,".").concat(p)]||f[p]||d[p]||a;return r?i.createElement(m,c(c({ref:t},u),{},{components:r})):i.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=p;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[f]="string"==typeof e?e:n,c[1]=s;for(var l=2;l<a;l++)c[l]=r[l];return i.createElement.apply(null,c)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},32681:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return f}});var i=r(83117),n=r(80102),a=(r(67294),r(3905)),c=["components"],s={},o="Create Trusted Certificates",l={unversionedId:"certificate-key/installation-guide/create-trusted-certificates",id:"certificate-key/installation-guide/create-trusted-certificates",title:"Create Trusted Certificates",description:"Publicly trusted certificates are included in the system trust store by default. Such certificates do not need to be included in the trusted certificates as the system will automatically consider them as trusted.",source:"@site/docs/10-certificate-key/03-installation-guide/03-create-trusted-certificates.md",sourceDirName:"10-certificate-key/03-installation-guide",slug:"/certificate-key/installation-guide/create-trusted-certificates",permalink:"/docs/certificate-key/installation-guide/create-trusted-certificates",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Database Setup",permalink:"/docs/certificate-key/installation-guide/database-setup"},next:{title:"Deployment Options",permalink:"/docs/certificate-key/installation-guide/deployment/deployment-options"}},u={},f=[{value:"Mandatory certificates in the list",id:"mandatory-certificates-in-the-list",level:2},{value:"Changing trusted certificates",id:"changing-trusted-certificates",level:2}],d={toc:f},p="wrapper";function m(e){var t=e.components,r=(0,n.Z)(e,c);return(0,a.kt)(p,(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-trusted-certificates"},"Create Trusted Certificates"),(0,a.kt)("admonition",{title:"Publicly trusted certificates",type:"success"},(0,a.kt)("p",{parentName:"admonition"},"Publicly trusted certificates are included in the system trust store by default. Such certificates do not need to be included in the trusted certificates as the system will automatically consider them as trusted. ")),(0,a.kt)("p",null,"In order to establish trust with internal certificates, we need to create set of trusted certificates.\nThis set includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CA certificates issuing client certificates for authentication to the platform"),(0,a.kt)("li",{parentName:"ul"},"CA certificates that issued infrastructure certificates to establish authenticated TLS connection"),(0,a.kt)("li",{parentName:"ul"},"any other certificate that should be trusted between the services and integrated technologies")),(0,a.kt)("p",null,"Trusted certificates are configured in the platform through the list of PEM-encoded certificates:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"in Ingress resources to authenticate users provided client-certificate"),(0,a.kt)("li",{parentName:"ul"},"in ",(0,a.kt)("inlineCode",{parentName:"li"},"Core")," service to trust internally managed CA certificates"),(0,a.kt)("li",{parentName:"ul"},"in ",(0,a.kt)("inlineCode",{parentName:"li"},"Connectors")," to establish trust with the technology")),(0,a.kt)("admonition",{title:"Different set of trusted certificates for different services",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The list of trusted certificates is globally applied to all services that supports custom trust lists. However, it is possible to apply different sets of trusted certificates to different services. In such case, the trusted certificates should not be configured as a global parameter for the Helm chart, but instead included as a parameter for each particular chart and sub-chart. See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts"},"CZERTAINLY-Helm-Charts")," for more information.")),(0,a.kt)("h2",{id:"mandatory-certificates-in-the-list"},"Mandatory certificates in the list"),(0,a.kt)("p",null,"The list of trusted certificate must always include at least the following certificates:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CA certificates issuing client certificates for authentication to the platform")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Therefore, the set of trusted certificates must always contain at least one item.")),(0,a.kt)("h2",{id:"changing-trusted-certificates"},"Changing trusted certificates"),(0,a.kt)("p",null,"When you need to change the list of trusted certificates (add / remove trusted certificates), the changes must be applied to the deployment of the platform.\nThis is done automatically installing and upgrading using ",(0,a.kt)("a",{parentName:"p",href:"deployment/deployment-helm/overview"},"Helm chart"),"."),(0,a.kt)("admonition",{title:"Management of trusted certificates",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Be sure that all changes in the list of trusted certificates are properly propagated in the deployment when managing the list manually or externally to Helm chart.")))}m.isMDXComponent=!0}}]);