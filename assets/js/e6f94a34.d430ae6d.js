"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[9990],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49207:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={},p="Overview",s={unversionedId:"installation-guide/deployment/deployment-appliance/overview",id:"installation-guide/deployment/deployment-appliance/overview",title:"Overview",description:"CZERTAINLY virtual appliance is pre-built image of virtual operating system packed in Open Virtual Appliance (OVA) format for running CZERTAINLY platform.",source:"@site/docs/03-installation-guide/03-deployment/06-deployment-appliance/01-overview.md",sourceDirName:"03-installation-guide/03-deployment/06-deployment-appliance",slug:"/installation-guide/deployment/deployment-appliance/overview",permalink:"/docs/installation-guide/deployment/deployment-appliance/overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/docs/installation-guide/deployment/deployment-helm/troubleshooting"},next:{title:"Initialization",permalink:"/docs/installation-guide/deployment/deployment-appliance/initialization"}},u={},c=[{value:"Virtual appliance content",id:"virtual-appliance-content",level:2},{value:"Download and import image",id:"download-and-import-image",level:2}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"CZERTAINLY virtual appliance is pre-built image of virtual operating system packed in Open Virtual Appliance (OVA) format for running CZERTAINLY platform.\nIt is intended for the environments where no Kubernetes cluster is available or the Kubernetes cluster cannot be used for various reasons."),(0,i.kt)("h2",{id:"virtual-appliance-content"},"Virtual appliance content"),(0,i.kt)("p",null,"Virtual Appliance consist of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://www.debian.org/"},"Deblian"))," Linux operating system with amd64 architecture"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://rke2.io"},"RKE2")),", also known as RKE Government, which is Rancher's next-generation Kubernetes distribution"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://helm.sh/"},"Helm"))," package manager for Kubernetes to install and upgrade CZERTAINLY Helm charts"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://www.postgresql.org/"},"PostgreSQL"))," database server to persist platform data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CZERTAINLY Virtual Appliance Tools")," as a set of scripts to simplify operations with the virtual appliance"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SSH server")," and default system user that can be used to access console and login into virtual appliance")),(0,i.kt)("p",null,"Virtual appliance does not contain CZERTAINLY platform containers by default. Containers are downloaded and deployed after the configuration of the virtual appliance is applied."),(0,i.kt)("admonition",{title:"CZERTAINLY container access",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Because of different availability and public/private access to containers, the virtual appliance by default does not contain pre-downloaded containers and images. All required and available containers and images are downloaded once the virtual appliance is configured with the repository and access credentials.")),(0,i.kt)("h2",{id:"download-and-import-image"},"Download and import image"),(0,i.kt)("p",null,"To get the virtual appliance running in your environment for further  installation  and configuration, you must:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download virtual appliance image: ",(0,i.kt)("a",{parentName:"li",href:"https://threekeycz-my.sharepoint.com/:f:/g/personal/jakub_moravek_3key_company/EtmV8Ww2_0ZHoYP7rZrXINgBq1ammuCsjpWlSTbgxbDH9g?e=uebBhd"},"czertainly.ova"),"."),(0,i.kt)("li",{parentName:"ol"},"Import virtual appliance image to your virtual infrastructure.")),(0,i.kt)("p",null,"For testing purposes, you can use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.virtualbox.org/wiki/Downloads"},"Oracle VirtualBox")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.vmware.com/content/vmware/vmware-published-sites/us/products/workstation-player/workstation-player-evaluation.html.html"},"VMware Workstation Player")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.parallels.com/"},"Paralels Desktop")),(0,i.kt)("li",{parentName:"ul"},"or any other virtualization tools capable of importing virtual images in ",(0,i.kt)("strong",{parentName:"li"},"OVA")," format")),(0,i.kt)("admonition",{title:"Importing virtual appliance",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Import of virtual appliance is not covered by this documentation. Please refer to instructions of your virtualization SW vendor.")),(0,i.kt)("admonition",{type:"success"},(0,i.kt)("p",{parentName:"admonition"},"Access to pre-built CZERTAINLY virtual appliance is provided based on request.")))}d.isMDXComponent=!0}}]);