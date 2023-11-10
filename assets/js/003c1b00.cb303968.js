"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[8385],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(t),d=o,g=s["".concat(c,".").concat(d)]||s[d]||f[d]||a;return t?r.createElement(g,i(i({ref:n},u),{},{components:t})):r.createElement(g,i({ref:n},u))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[s]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},12837:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s}});var r=t(83117),o=t(80102),a=(t(67294),t(3905)),i=["components"],p={},c="From 1.0.13 To 1.14.0",l={unversionedId:"signing/upgrade-information/upgrade-1.0.13-1.14.0",id:"signing/upgrade-information/upgrade-1.0.13-1.14.0",title:"From 1.0.13 To 1.14.0",description:"In release version 1.14.0 the following changes were made as part of the integration efforts with the CZERTAINLY platform:",source:"@site/docs/30-signing/99-upgrade-information/03-upgrade-1.0.13-1.14.0.md",sourceDirName:"30-signing/99-upgrade-information",slug:"/signing/upgrade-information/upgrade-1.0.13-1.14.0",permalink:"/docs/signing/upgrade-information/upgrade-1.0.13-1.14.0",draft:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/99-upgrade-information/03-upgrade-1.0.13-1.14.0.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"From 1.14.0 To 1.15.1",permalink:"/docs/signing/upgrade-information/upgrade-1.14.0-1.15.1"},next:{title:"From 1.0.12 To 1.0.13",permalink:"/docs/signing/upgrade-information/upgrade-1.0.12-1.0.13"}},u={},s=[{value:"Change of the base package",id:"change-of-the-base-package",level:2},{value:"Example of the change",id:"example-of-the-change",level:2}],f={toc:s},d="wrapper";function g(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)(d,(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"from-1013-to-1140"},"From 1.0.13 To 1.14.0"),(0,a.kt)("p",null,"In release version ",(0,a.kt)("inlineCode",{parentName:"p"},"1.14.0")," the following changes were made as part of the integration efforts with the CZERTAINLY platform:"),(0,a.kt)("h2",{id:"change-of-the-base-package"},"Change of the base package"),(0,a.kt)("p",null,"The base package was changed from ",(0,a.kt)("inlineCode",{parentName:"p"},"company.threekey")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"com.czertainly"),". This change was made in accordance with the roadmap and integration efforts of the CZERTAINLY Signing with the platform and to prepare for next major release."),(0,a.kt)("p",null,"Each configuration consisting of the ",(0,a.kt)("inlineCode",{parentName:"p"},"company.threekey")," module needs to be updated to ",(0,a.kt)("inlineCode",{parentName:"p"},"com.czertainly")," in order to work with this new version."),(0,a.kt)("h2",{id:"example-of-the-change"},"Example of the change"),(0,a.kt)("p",null,"The following example shows the change of the base package from ",(0,a.kt)("inlineCode",{parentName:"p"},"company.threekey")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"com.czertainly")," on the PAdES Signer sample configuration. See the change in the ",(0,a.kt)("inlineCode",{parentName:"p"},"AUTHTYPE")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"IMPLEMENTATION_CLASS")," properties."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"WORKER1003.TYPE=PROCESSABLE\nWORKER1003.TSA_USERNAME=test\nWORKER1003.EMBED_CRL=true\nWORKER1003.CRYPTOTOKEN=EntrustSAMCryptoToken\nWORKER1003.DISABLEKEYUSAGECOUNTER=true\nWORKER1003.DIGESTALGORITHM=SHA256\nWORKER1003.AUTHTYPE=com.czertainly.signserver.module.extendedjws.ExtendedJwsAuthorizer <-- Change\nWORKER1003.NAME=PAdES-Baseline-LTA\nWORKER1003.TSA_PASSWORD=test\nWORKER1003.TSA_URL=https\\://freetsa.org/tsr\nWORKER1003.DEFAULTKEY=testKey\nWORKER1003.IMPLEMENTATION_CLASS=com.czertainly.signserver.module.pades.signer.PAdESSigner <-- Change\nWORKER1003.SIGNATURE_LEVEL=PAdES-BASELINE-LTA\nWORKER1003.ADD_VISIBLE_SIGNATURE=false\nWORKER1003.ACCEPT_ALL_USERNAMES=true\n")))}g.isMDXComponent=!0}}]);