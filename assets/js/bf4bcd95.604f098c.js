"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[9044],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(n),m=r,f=s["".concat(c,".").concat(m)]||s[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},64708:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={},c="Global Metadata",d={unversionedId:"concept-design/architecture/attributes/global-metadata",id:"concept-design/architecture/attributes/global-metadata",title:"Global Metadata",description:"Global Metadata is an abstraction layer to control and unite definition of specific metadata with same purpose. It allows the administrators to use already defined metadata marked as global and group all various content for different objects under one precise definition.",source:"@site/docs/02-concept-design/02-architecture/07-attributes/06-global-metadata.md",sourceDirName:"02-concept-design/02-architecture/07-attributes",slug:"/concept-design/architecture/attributes/global-metadata",permalink:"/docs/concept-design/architecture/attributes/global-metadata",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Custom Attributes",permalink:"/docs/concept-design/architecture/attributes/custom-attributes"},next:{title:"Overview",permalink:"/docs/concept-design/architecture/access-control/overview"}},u={},p=[{value:"Characteristics",id:"characteristics",level:3}],s={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"global-metadata"},"Global Metadata"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Global Metadata")," is an abstraction layer to control and unite definition of specific metadata with same purpose. It allows the administrators to use already defined metadata marked as global and group all various content for different objects under one precise definition."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Global Metadata")," can be created in 2 ways:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Defined in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Core")," and used in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Connector"),"."),(0,i.kt)("li",{parentName:"ul"},"Promote existing ",(0,i.kt)("inlineCode",{parentName:"li"},"Connector")," metadata to ",(0,i.kt)("inlineCode",{parentName:"li"},"Global Metadata"),".")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"When a metadata from the connector is set as ",(0,i.kt)("inlineCode",{parentName:"p"},"global"),", it should be defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Core"),". If not, then the value of the metadata will not be stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Core"),".")),(0,i.kt)("h3",{id:"characteristics"},"Characteristics"),(0,i.kt)("p",null,"The characteristics of ",(0,i.kt)("inlineCode",{parentName:"p"},"Global Metadata")," are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Global Metadata")," is not available for the user to create or update."),(0,i.kt)("li",{parentName:"ul"},"Any metadata from the connector can be made as ",(0,i.kt)("inlineCode",{parentName:"li"},"Global Metadata")," by enabling the property ",(0,i.kt)("inlineCode",{parentName:"li"},"global")," in the attribute property configuration."),(0,i.kt)("li",{parentName:"ul"},"Name of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Global Metadata")," should match the name of the attribute in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Connector"),"."),(0,i.kt)("li",{parentName:"ul"},"If a ",(0,i.kt)("inlineCode",{parentName:"li"},"Global Metadata")," is defined and not enabled in the connector, it will be stored as a connector metadata.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"Global Metadata")," is currently supported only in ",(0,i.kt)("inlineCode",{parentName:"p"},"Core")," through API interface.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To know more about how to work with ",(0,i.kt)("inlineCode",{parentName:"p"},"Attributes"),", see ",(0,i.kt)("a",{parentName:"p",href:"../../../contributors/attributes/overview"},"Using Attributes"),".")))}m.isMDXComponent=!0}}]);