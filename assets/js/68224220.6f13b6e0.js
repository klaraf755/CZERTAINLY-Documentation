"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5382],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||o;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},95969:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],c={},l="Enroll Device",u={unversionedId:"certificate-key/integration-guides/intune/enroll-device",id:"certificate-key/integration-guides/intune/enroll-device",title:"Enroll Device",description:"Enrollment ensures that all devices trying to access data within your organization are secure and compliant with your policies and requirements. Upon enrollment, the device gets access to resources like work email, files, VPN, and Wi-Fi.",source:"@site/docs/10-certificate-key/20-integration-guides/12-intune/09-enroll-device.md",sourceDirName:"10-certificate-key/20-integration-guides/12-intune",slug:"/certificate-key/integration-guides/intune/enroll-device",permalink:"/docs/certificate-key/integration-guides/intune/enroll-device",draft:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/20-integration-guides/12-intune/09-enroll-device.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Intune Profiles",permalink:"/docs/certificate-key/integration-guides/intune/create-intune-profiles"},next:{title:"Integration Guide",permalink:"/docs/certificate-key/integration-guides/ms-adcs-connector/integration-guide"}},s={},d=[],f={toc:d},p="wrapper";function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)(p,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"enroll-device"},"Enroll Device"),(0,o.kt)("p",null,"Enrollment ensures that all devices trying to access data within your organization are secure and compliant with your policies and requirements. Upon enrollment, the device gets access to resources like work email, files, VPN, and Wi-Fi."),(0,o.kt)("p",null,"For information how to enroll the device, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/mem/intune/enrollment/quickstart-enroll-windows-device"},"Step 5: Enroll a device")," of the Microsoft Intune evaluation guide."),(0,o.kt)("p",null,"To confirm that the device was successfully enrolled, open Computer certificate store and check:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"device certificate installed under ",(0,o.kt)("strong",{parentName:"li"},"Local Computer >> Personal >> Certificates")),(0,o.kt)("li",{parentName:"ul"},"trusted root CA certificate installed under ",(0,o.kt)("strong",{parentName:"li"},"Local Computer >> Trusted Root Certification Authorities >> Certificates")),(0,o.kt)("li",{parentName:"ul"},"trusted issuing CA certificate installed under ",(0,o.kt)("strong",{parentName:"li"},"Local Computer >> Intermediate Certification Authorities >> Certificates"))),(0,o.kt)("p",null,"Also, you can sign in to the ",(0,o.kt)("a",{parentName:"p",href:"https://go.microsoft.com/fwlink/?linkid=2109431"},"Microsoft Intune admin center")," and check that you have an additional device enrolled within Intune."),(0,o.kt)("p",null,"If you want to remove device from the Intune, refer to ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/mem/intune/user-help/unenroll-your-device-from-intune-windows"},"Remove your Windows device from management"),"."))}m.isMDXComponent=!0}}]);