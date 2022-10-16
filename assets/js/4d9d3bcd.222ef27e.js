"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4191],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43044:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=n(92814),c=n(51436),l=["components"],s={},p="Register Connector",u={unversionedId:"quick-start/certificate-discovery/register-connector",id:"quick-start/certificate-discovery/register-connector",title:"Register Connector",description:"In order to start using the platform with any specific technology, we must register the Connector.",source:"@site/docs/05-quick-start/01-certificate-discovery/01-register-connector.mdx",sourceDirName:"05-quick-start/01-certificate-discovery",slug:"/quick-start/certificate-discovery/register-connector",permalink:"/docs/quick-start/certificate-discovery/register-connector",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Super Administrator",permalink:"/docs/installation-guide/create-super-administrator"},next:{title:"Create Discovery",permalink:"/docs/quick-start/certificate-discovery/create-discovery"}},d={},m=[{value:"Register <code>Connector</code> using the API",id:"register-connector-using-the-api",level:2},{value:"Register <code>Connector</code> using the Web Interface",id:"register-connector-using-the-web-interface",level:2}],k={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"register-connector"},"Register Connector"),(0,i.kt)("p",null,"In order to start using the platform with any specific technology, we must register the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector"),".\nWe would like to do the certificate discovery and such ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," must therefore implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"Discovery Provider")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Function Group"),"."),(0,i.kt)("h2",{id:"register-connector-using-the-api"},"Register ",(0,i.kt)("inlineCode",{parentName:"h2"},"Connector")," using the API"),(0,i.kt)("p",null,"The connector can be registered using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "name": "Network Discovery Provider",\n    "url", "https://network-discovery-provider-service:8080",\n    "authType": "none"\n  }\' \\\n  https://[domain]:[port]/api/v1/connectors\n')),(0,i.kt)("p",null,"When there is no error, ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," is successfully registered, and its ",(0,i.kt)("inlineCode",{parentName:"p"},"uuid")," is sent back:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "ef092b12-e181-4734-8e34-73152612a945"\n}\n')),(0,i.kt)("p",null,"We can use that to get details about the ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector")," in the future API calls:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X GET \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Accept: application/json" \\\n  https://[domain]:[port]/api/v1/connectors/ef092b12-e181-4734-8e34-73152612a945\n  #https://[domain]:[port]/api/v1/connectors/{uuid}\n')),(0,i.kt)("h2",{id:"register-connector-using-the-web-interface"},"Register ",(0,i.kt)("inlineCode",{parentName:"h2"},"Connector")," using the Web Interface"),(0,i.kt)("p",null,"Follow these steps for register new ",(0,i.kt)("inlineCode",{parentName:"p"},"Network Discovery Provider"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log in to the Administration Interface ",(0,i.kt)("inlineCode",{parentName:"li"},"https://[domain]:[port]/administrator")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Connectors")," in the left menu"),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Add new connector")," (plus symbol ",(0,i.kt)("span",{style:{color:"#1473b5"}},(0,i.kt)(a.G,{icon:c.r8p,mdxType:"FontAwesomeIcon"})),")"),(0,i.kt)("li",{parentName:"ol"},"Fill in the columns with the attributes:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"URL: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://network-discovery-provider-service:8080")),(0,i.kt)("li",{parentName:"ul"},"Authentication Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"No Auth")))),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Connect"),"  ")),(0,i.kt)("p",null,"Now you can see the details of the connected ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector"),". "),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Fill in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Connector")," name: ",(0,i.kt)("inlineCode",{parentName:"li"},"Network Discovery Provider")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create")," to make the ",(0,i.kt)("inlineCode",{parentName:"li"},"Connector")," available to other components")),(0,i.kt)("p",null,"You have registered ",(0,i.kt)("inlineCode",{parentName:"p"},"Network Discovery Provider")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Connector"),"."))}f.isMDXComponent=!0}}]);