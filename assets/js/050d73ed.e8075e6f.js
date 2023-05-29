"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[1121],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=u(n),g=r,k=p["".concat(s,".").concat(g)]||p[g]||d[g]||l;return n?a.createElement(k,o(o({ref:e},c),{},{components:n})):a.createElement(k,o({ref:e},c))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[p]="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},16494:function(t,e,n){n.r(e),n.d(e,{GenTable:function(){return b},assets:function(){return p},contentTitle:function(){return u},data:function(){return g},default:function(){return y},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d},tsabasic:function(){return k},tsacertificate:function(){return m}});var a=n(83117),r=n(80102),l=n(67294),o=n(3905),i=["components"],s={},u="TSA Properties",c={unversionedId:"signing/ades-formats/common-properties/tsa-properties",id:"signing/ades-formats/common-properties/tsa-properties",title:"TSA Properties",description:"The following TSA properties are common for all AdES Signers. Each AdES Signer may have additional specific set of properties that are described in the subsequent sections.",source:"@site/docs/30-signing/05-ades-formats/07-common-properties/04-tsa-properties.mdx",sourceDirName:"30-signing/05-ades-formats/07-common-properties",slug:"/signing/ades-formats/common-properties/tsa-properties",permalink:"/docs/signing/ades-formats/common-properties/tsa-properties",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic Properties",permalink:"/docs/signing/ades-formats/common-properties/basic-properties"},next:{title:"B-level Properties",permalink:"/docs/signing/ades-formats/common-properties/blevel-properties"}},p={},d=[{value:"TSA Authentication options",id:"tsa-authentication-options",level:2},{value:"Basic authentication",id:"basic-authentication",level:3},{value:"Client certificate-based authentication",id:"client-certificate-based-authentication",level:3}],g=[{property:(0,o.kt)(l.Fragment,null,"TSA_URL",(0,o.kt)("br",null),(0,o.kt)("div",{class:"alert alert--warning"},(0,o.kt)("b",null,"TSA_URL")," can not be used together with the ",(0,o.kt)("b",null,"TSA_WORKER")," property!")),description:(0,o.kt)(l.Fragment,null,"URL to timestamping authority to include timestamp. Both HTTP and HTTPS is supported for sending the timestamping requests. Basic and certificate-based authentication is supported.",(0,o.kt)("br",null),"For basic authentication, the following additional properties must be set:",(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,"TSA_USERNAME")),(0,o.kt)("li",null,(0,o.kt)("b",null,"TSA_PASSWORD"))),"For certificate-based authentication, the following additional properties must be set:",(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)("b",null,"TSA_KEYSTORE_TYPE")),(0,o.kt)("li",null,(0,o.kt)("b",null,"TSA_KEYSTORE_FILEPATH")),(0,o.kt)("li",null,(0,o.kt)("b",null,"TSA_KEYSTORE_PASSWORD")),(0,o.kt)("li",null,(0,o.kt)("b",null,"TSA_TRUSTSTORE_TYPE")),(0,o.kt)("li",null,(0,o.kt)("b",null,"TSA_TRUSTSTORE_FILEPATH")),(0,o.kt)("li",null,(0,o.kt)("b",null,"TSA_TRUSTSTORE_PASSWORD"))),"See ",(0,o.kt)("a",{href:"#tsa-authentication-options"},"TSA Authentication options")," below."),default:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--secondary"},"NONE")),mandatory:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--danger"},"NO"))},{property:(0,o.kt)(l.Fragment,null,"TSA_WORKER",(0,o.kt)("br",null),(0,o.kt)("div",{class:"alert alert--warning"},(0,o.kt)("b",null,"TSA_WORKER")," can not be used together with the ",(0,o.kt)("b",null,"TSA_URL")," property!")),description:(0,o.kt)(l.Fragment,null,"The name of the Worker to use for the timestamping.",(0,o.kt)("b",null,"TSA_WORKER")," property should be used only when timestamping is server from the same SignServer."),default:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--secondary"},"NONE")),mandatory:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--danger"},"NO"))},{property:"TSA_DIGESTALGORITHM",description:(0,o.kt)(l.Fragment,null,"Digest algorithm to use with the timestamping."),default:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--secondary"},"SHA256")),mandatory:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--danger"},"NO"))}],k=[{property:"TSA_USERNAME",description:(0,o.kt)(l.Fragment,null,"Username for basic authentication."),default:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--secondary"},"NONE")),mandatory:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--danger"},"NO"))},{property:"TSA_PASSWORD",description:(0,o.kt)(l.Fragment,null,"Password for basic authentication."),default:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--secondary"},"NONE")),mandatory:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--danger"},"NO"))}],m=[{property:"TSA_KEYSTORE_TYPE",description:(0,o.kt)(l.Fragment,null,"Keystore type for the certificate-based authentication of the TSA. The keystore represents client authentication credentials to be used. Allowed values are:",(0,o.kt)("ul",null,(0,o.kt)("li",null,"PKCS#12"),(0,o.kt)("li",null,"JKS"))),default:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--secondary"},"NONE")),mandatory:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--danger"},"NO"))},{property:"TSA_KEYSTORE_FILEPATH",description:(0,o.kt)(l.Fragment,null,"Absolute path to the file on the file system representing the keystore."),default:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--secondary"},"NONE")),mandatory:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--danger"},"NO"))},{property:"TSA_KEYSTORE_PASSWORD",description:(0,o.kt)(l.Fragment,null,"Password for the keystore."),default:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--secondary"},"NONE")),mandatory:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--danger"},"NO"))},{property:"TSA_TRUSTSTORE_TYPE",description:(0,o.kt)(l.Fragment,null,"Truststore type for the certificate-based authentication of the TSA. The truststore represents certification authorities or server certificates that should be considered as trusted. Allowed values are:",(0,o.kt)("ul",null,(0,o.kt)("li",null,"PKCS#12"),(0,o.kt)("li",null,"JKS"))),default:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--secondary"},"NONE")),mandatory:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--danger"},"NO"))},{property:"TSA_TRUSTSTORE_FILEPATH",description:(0,o.kt)(l.Fragment,null,"Absolute path to the file on the file system representing the truststore."),default:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--secondary"},"NONE")),mandatory:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--danger"},"NO"))},{property:"TSA_TRUSTSTORE_PASSWORD",description:(0,o.kt)(l.Fragment,null,"Password for the truststore."),default:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--secondary"},"NONE")),mandatory:(0,o.kt)(l.Fragment,null,(0,o.kt)("span",{class:"badge badge--danger"},"NO"))}],b=function(t){var e=t.data;return(0,o.kt)(l.Fragment,null,e.map((function(t,e){return(0,o.kt)("tr",{key:e},(0,o.kt)("td",null,(0,o.kt)("b",null,t.property)),(0,o.kt)("td",null,t.description),(0,o.kt)("td",null,t.default),(0,o.kt)("td",null,t.mandatory))})))},f={toc:d,data:g,tsabasic:k,tsacertificate:m,GenTable:b},h="wrapper";function y(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)(h,(0,a.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tsa-properties"},"TSA Properties"),(0,o.kt)("p",null,"The following TSA properties are common for all AdES Signers. Each AdES Signer may have additional specific set of properties that are described in the subsequent sections."),(0,o.kt)("table",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Description"),(0,o.kt)("th",null,"Default Value"),(0,o.kt)("th",null,"Mandatory"),(0,o.kt)("tbody",null,(0,o.kt)(b,{data:g,mdxType:"GenTable"}))),(0,o.kt)("h2",{id:"tsa-authentication-options"},"TSA Authentication options"),(0,o.kt)("h3",{id:"basic-authentication"},"Basic authentication"),(0,o.kt)("p",null,"For ",(0,o.kt)("strong",{parentName:"p"},"TSA_URL")," basic authentication, the following properties are mandatory:"),(0,o.kt)("table",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Description"),(0,o.kt)("th",null,"Default Value"),(0,o.kt)("th",null,"Mandatory"),(0,o.kt)("tbody",null,(0,o.kt)(b,{data:k,mdxType:"GenTable"}))),(0,o.kt)("h3",{id:"client-certificate-based-authentication"},"Client certificate-based authentication"),(0,o.kt)("p",null,"For ",(0,o.kt)("strong",{parentName:"p"},"TSA_URL")," client certificate-based authentication, the following properties are mandatory:"),(0,o.kt)("table",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Description"),(0,o.kt)("th",null,"Default Value"),(0,o.kt)("th",null,"Mandatory"),(0,o.kt)("tbody",null,(0,o.kt)(b,{data:m,mdxType:"GenTable"}))))}y.isMDXComponent=!0}}]);