"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[3572],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56166:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],l={},s="Introduction",p={unversionedId:"installation-guide/introduction",id:"installation-guide/introduction",title:"Introduction",description:"One of the approaches we have adopted from the beginning of development of the platform is easy installation and deployment. We believe that you should not spend weeks or even months working on the configuration before starting to use the platform.",source:"@site/docs/03-installation-guide/01-introduction.md",sourceDirName:"03-installation-guide",slug:"/installation-guide/introduction",permalink:"/docs/installation-guide/introduction",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dashboards",permalink:"/docs/concept-design/modules/dashboards"},next:{title:"Database Setup",permalink:"/docs/installation-guide/database-setup"}},d={},u=[{value:"Kubernetes deployment",id:"kubernetes-deployment",level:2},{value:"Installation steps",id:"installation-steps",level:2}],c={toc:u};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"One of the approaches we have adopted from the beginning of development of the platform is easy installation and deployment. We believe that you should not spend weeks or even months working on the configuration before starting to use the platform."),(0,o.kt)("p",null,"Therefore, we have adopted a container-based approach and prepared a docker images and related documentation. With this you can easily and in short time deploy the platform and required connectors and services."),(0,o.kt)("h2",{id:"kubernetes-deployment"},"Kubernetes deployment"),(0,o.kt)("p",null,"The following diagram represents the deployment of the platform in Kubernetes. Because platform is composed of microservices and offers flexible approach to fit into each infrastructure, Kubernetes and containers are considered as basic implementation blocks. The deployment can be further extended by specific Kubernetes implementation supported in the target environment (for example ",(0,o.kt)("a",{parentName:"p",href:"https://istio.io/"},"Istio")," service mesh)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Kubernetes deployment diagram",src:n(79154).Z,width:"931",height:"742"})),(0,o.kt)("h2",{id:"installation-steps"},"Installation steps"),(0,o.kt)("p",null,"Independently of the installation and deployment options, you need to follow the steps below to get the platform up and running:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Step"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Reference"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1. Prepare the database"),(0,o.kt)("td",{parentName:"tr",align:null},"Install and crate a database to be used by the platform."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"database-setup"},"Database setup"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2. Create Trusted Certificates"),(0,o.kt)("td",{parentName:"tr",align:null},"Create set of trusted certificates for the platform."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"create-trusted-certificates"},"Create Trusted Certificates"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3. Deploy the platform"),(0,o.kt)("td",{parentName:"tr",align:null},"Deploy the platform using the docker images and the Kubernetes manifests."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"deployment/deployment-options"},"Deployment options"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4. Configure first Super Administrator"),(0,o.kt)("td",{parentName:"tr",align:null},"Create a Super Administrator and configure the platform."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"create-super-administrator"},"Create Super Administrator"))))),(0,o.kt)("p",null,"Once the first administrator is created, you can access the Administrator Interface.\nUse the following URL with the client certificate authentication (first administrator):\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://[domain]:[port]/administrator")),(0,o.kt)("p",null,"After successfully logging in, you can start administering and using the platform."),(0,o.kt)("admonition",{title:"Changing administrator web base URL context",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can change the base URL of the administrator web interface. By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"/administrator")," is used.")))}m.isMDXComponent=!0},79154:function(e,t,n){t.Z=n.p+"assets/images/kubernetes-deployment-diagram-23850167145478f668132c23e7938639.png"}}]);