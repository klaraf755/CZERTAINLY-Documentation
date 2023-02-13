"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[9087],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),r=a(34334),l="tabItem_Ymn6";function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return C}});var n=a(83117),r=a(67294),l=a(34334),i=a(76775),o=a(91980),u=a(67392),s=a(50012);function p(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,l=(0,i.k6)(),u=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,o._X)(u),(0,r.useCallback)((function(e){if(u){var t=new URLSearchParams(l.location.search);t.set(u,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[u,l])]}function f(e){var t,a,n,l,i=e.defaultValue,o=e.queryString,u=void 0!==o&&o,p=e.groupId,f=c(e),b=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:f})})),g=b[0],k=b[1],h=m({queryString:u,groupId:p}),y=h[0],N=h[1],v=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),a=(0,s.Nk)(t),n=a[0],l=a[1],[n,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),C=v[0],T=v[1],A=function(){var e=null!=y?y:C;return d({value:e,tabValues:f})?e:null}();return(0,r.useLayoutEffect)((function(){A&&k(A)}),[A]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!d({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);k(e),N(e),T(e)}),[N,T,f]),tabValues:f}}var b=a(12466),g=a(72389),k="tabList__CuJ",h="tabItem_LNqP";function y(e){var t=e.className,a=e.block,i=e.selectedValue,o=e.selectValue,u=e.tabValues,s=[],p=(0,b.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,a=s.indexOf(t),n=u[a].value;n!==i&&(p(t),o(n))},d=function(e){var t,a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,r=s.indexOf(e.currentTarget)+1;a=null!=(n=s[r])?n:s[0];break;case"ArrowLeft":var l,i=s.indexOf(e.currentTarget)-1;a=null!=(l=s[i])?l:s[s.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return s.push(e)},onKeyDown:d,onClick:c},o,{className:(0,l.Z)("tabs__item",h,null==o?void 0:o.className,{"tabs__item--active":i===t})}),null!=a?a:t)})))}function N(e){var t=e.lazy,a=e.children,n=e.selectedValue;if(a=Array.isArray(a)?a:[a],t){var l=a.find((function(e){return e.props.value===n}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function v(e){var t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",k)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function C(e){var t=(0,g.Z)();return r.createElement(v,(0,n.Z)({key:String(t)},e))}},35219:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=a(83117),r=a(80102),l=(a(67294),a(3905)),i=a(74866),o=a(85162),u=["components"],s={},p="Attributes",c={unversionedId:"contributors/attributes/attributes",id:"contributors/attributes/attributes",title:"Attributes",description:"Attribute, specifically its type is used to control different behaviour of the content and values in the platform. Some attributes defined the data that are exchanged between technologies, some of them may represent read-only information, and some of them may contain additional attributes that are grouped together or works as a wizard.",source:"@site/docs/60-contributors/10-attributes/11-attributes.mdx",sourceDirName:"60-contributors/10-attributes",slug:"/contributors/attributes/attributes",permalink:"/docs/contributors/attributes/attributes",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Callbacks",permalink:"/docs/contributors/attributes/callbacks"},next:{title:"Examples",permalink:"/docs/contributors/attributes/examples"}},d={},m=[{value:"Attribute properties",id:"attribute-properties",level:2},{value:"Attribute Types",id:"attribute-types",level:2},{value:"Attribute properties and types",id:"attribute-properties-and-types",level:2},{value:"Attribute structure samples",id:"attribute-structure-samples",level:2},{value:"<code>Attribute</code> model",id:"attribute-model",level:2}],f={toc:m};function b(e){var t=e.components,a=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"attributes"},"Attributes"),(0,l.kt)("p",null,"Attribute, specifically its type is used to control different behaviour of the content and values in the platform. Some attributes defined the data that are exchanged between technologies, some of them may represent read-only information, and some of them may contain additional attributes that are grouped together or works as a wizard."),(0,l.kt)("h2",{id:"attribute-properties"},"Attribute properties"),(0,l.kt)("p",null,"The following is a list of properties that can be used to define the behaviour of the ",(0,l.kt)("inlineCode",{parentName:"p"},"Attribute")," and extends properties of the ",(0,l.kt)("a",{parentName:"p",href:"overview#baseattribute"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseAttribute")),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"contentType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"content#supported-content-types"},(0,l.kt)("inlineCode",{parentName:"a"},"AttributeContentType"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--success"},"Yes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"constraints")),(0,l.kt)("td",{parentName:"tr",align:null},"list of ",(0,l.kt)("a",{parentName:"td",href:"constraints"},(0,l.kt)("inlineCode",{parentName:"a"},"BaseAttributeConstraint"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--danger"},"No"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"properties")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"properties"},(0,l.kt)("inlineCode",{parentName:"a"},"AttributeProperties"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--success"},"Yes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"attributeCallback")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"callbacks"},(0,l.kt)("inlineCode",{parentName:"a"},"AttributeCallback"))),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--danger"},"No"))))),(0,l.kt)("h2",{id:"attribute-types"},"Attribute Types"),(0,l.kt)("p",null,"Based on the usage and specific behaviour you want to provide, ",(0,l.kt)("inlineCode",{parentName:"p"},"Attribute")," can be one of the following defined types in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/AttributeType.java"},"AttributeType"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"AttributeType")),(0,l.kt)("th",{parentName:"tr",align:null},"Class"),(0,l.kt)("th",{parentName:"tr",align:null},"Short description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"DATA")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/DataAttribute.java"},(0,l.kt)("inlineCode",{parentName:"a"},"DataAttribute"))),(0,l.kt)("td",{parentName:"tr",align:null},"Full fledged data carriers used by in the platform for information exchange")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"INFO")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/InfoAttribute.java"},(0,l.kt)("inlineCode",{parentName:"a"},"InfoAttributes"))),(0,l.kt)("td",{parentName:"tr",align:null},"Information carriers whose primary responsibility is to provide additional helper information. The content of this attribute is not sent back to the platform, it is just informative")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"GROUP")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/GroupAttribute.java"},(0,l.kt)("inlineCode",{parentName:"a"},"GroupAttributes"))),(0,l.kt)("td",{parentName:"tr",align:null},"Advanced type of attribute that can group multiple attributes. Main use is when the attributes are dependent on the content selected from other attributes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"META")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/MetadataAttribute.java"},(0,l.kt)("inlineCode",{parentName:"a"},"MetadataAttributes"))),(0,l.kt)("td",{parentName:"tr",align:null},"Metadata representation that can be exchanged between the platform and connectors")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CUSTOM")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/blob/master/src/main/java/com/czertainly/api/model/common/attribute/v2/CustomAttribute.java"},(0,l.kt)("inlineCode",{parentName:"a"},"CustomAttributes"))),(0,l.kt)("td",{parentName:"tr",align:null},"Used defined attributes for storing additional information about the objects supported in the platform")))),(0,l.kt)("h2",{id:"attribute-properties-and-types"},"Attribute properties and types"),(0,l.kt)("p",null,"The following matrix shows which ",(0,l.kt)("inlineCode",{parentName:"p"},"Attribute")," properties are supported for each ",(0,l.kt)("inlineCode",{parentName:"p"},"Attribute")," type:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property name / Attribute type"),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"DataAttribute")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"InfoAttributeP")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"GroupAttributes")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"MetadataAttribute")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"th"},"CustomAttribute")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"contentType")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--success"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--success"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--secondary"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--success"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--success"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"constraints")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--danger"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--secondary"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--secondary"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--secondary"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--secondary"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"properties")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--success"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--success"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--secondary"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--success"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--success"}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"attributeCallback")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--danger"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--secondary"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--danger"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--secondary"})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("span",{class:"badge badge--secondary"}))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{class:"badge badge--success",size:"s"})," - the property is required"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{class:"badge badge--danger"})," - the property is optional"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("span",{class:"badge badge--secondary"})," - the property is not applicable")),(0,l.kt)("h2",{id:"attribute-structure-samples"},"Attribute structure samples"),(0,l.kt)("p",null,"The following samples show how the ",(0,l.kt)("inlineCode",{parentName:"p"},"Attribute")," can be defined in the platform for different types:"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"data",label:"DATA",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "c7a8f8f0-f8f8-4f8f-8f8f-f8f8f8f8f8f8",\n  "name": "certificateTemplate",\n  "label": "Certificate Template",\n  "type": "data",\n  "contentType": "string",\n  "content": [\n    {\n      "reference": "Template 1",\n      "data": "template1"\n    },\n    {\n      "reference": "Template 2",\n      "data": "template2"\n    },\n    {\n      "reference": "Template 3",\n      "data": "template3"\n    }\n  ],\n  "properties": {\n    "required": true,\n    "readOnly": false,\n    "visible": true,\n    "list": true,\n    "multiSelect": true,\n    "group": "Certificate Configuration"\n  },\n  "description": "Available certificate templates that can be selected for the certificate request",\n  "constraints": [\n    {\n      "description": "Certificate Template Regex",\n      "errorMessage": "Certificate Template must be a valid string",\n      "type": "regexp",\n      "data": "^[a-z\\\\s]{0,255}"\n    }\n  ]\n}\n'))),(0,l.kt)(o.Z,{value:"info",label:"INFO",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "c7a8f8f0-f8f8-4f8f-8f8f-f8f8f8f8f8f8",\n  "name": "certificateTemplate",\n  "label": "Certificate Template",\n  "type": "info",\n  "contentType": "string",\n  "content": [\n    {\n      "reference": "Template 1",\n      "data": "template1"\n    }\n  ],\n  "properties": {\n    "readOnly": false,\n    "visible": true,\n    "group": "Certificate Configuration"\n  },\n  "description": "Available certificate templates that can be selected for the certificate request",\n}\n'))),(0,l.kt)(o.Z,{value:"group",label:"GROUP",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "c7a8f8f0-f8f8-4f8f-8f8f-f8f8f8f8f8f8",\n  "name": "group1",\n  "label": "Option A Attributes",\n  "type": "group",\n  "content": [\n    {\n      "uuid": "c7a8f8f0-f8f8-4f8f-8f8f-f8f8f8f8f8f8",\n      "name": "certificateTemplate",\n      "label": "Certificate Template",\n      "type": "data",\n      "contentType": "string",\n      "content": [\n        {\n          "reference": "Template 1",\n          "data": "template1"\n        },\n        {\n          "reference": "Template 2",\n          "data": "template2"\n        },\n        {\n          "reference": "Template 3",\n          "data": "template3"\n        }\n      ],\n      "properties": {\n        "required": true,\n        "readOnly": false,\n        "visible": true,\n        "list": true,\n        "multiSelect": true,\n        "group": "Certificate Configuration"\n      },\n      "description": "Available certificate templates that can be selected for the certificate request",\n      "constraints": [\n        {\n          "description": "Certificate Template Regex",\n          "errorMessage": "Certificate Template must be a valid string",\n          "type": "regexp",\n          "data": "^[a-z\\\\s]{0,255}"\n        }\n      ]\n    }\n  ],\n  "description": "Available certificate templates that can be selected for the certificate request",\n}\n'))),(0,l.kt)(o.Z,{value:"meta",label:"META",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "c7a8f8f0-f8f8-4f8f-8f8f-f8f8f8f8f8f8",\n  "name": "discoverySource",\n  "label": "Discovery Source",\n  "type": "meta",\n  "contentType": "string",\n  "content": [\n    {\n      "reference": "Internet",\n      "data": "internet.com"\n    }\n  ],\n  "properties": {\n    "readOnly": false,\n    "visible": true,\n    "global": true,\n    "group": "Discovery"\n  },\n  \n  "description": "Source from where the certificate is discovered",\n}\n'))),(0,l.kt)(o.Z,{value:"custom",label:"CUSTOM",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "c7a8f8f0-f8f8-4f8f-8f8f-f8f8f8f8f8f8",\n  "name": "purpose",\n  "label": "Purpose",\n  "type": "custom",\n  "contentType": "string",\n  "content": [\n    {\n      "reference": "",\n      "data": "Created to test the custom attribute"\n    }\n  ],\n  "properties": {\n    "required": true,\n    "readOnly": false,\n    "visible": true,\n    "list": true,\n    "multiSelect": true,\n    "group": "Certificate Configuration"\n  },\n  "description": "Sample description for the custom attribute"\n}\n')))),(0,l.kt)("h2",{id:"attribute-model"},(0,l.kt)("inlineCode",{parentName:"h2"},"Attribute")," model"),(0,l.kt)("p",null,"Th following diagram represents the ",(0,l.kt)("inlineCode",{parentName:"p"},"Attribute")," model inherited from the ",(0,l.kt)("inlineCode",{parentName:"p"},"AbstractBaseAttribute"),". Details can be found in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Interfaces/tree/develop/src/main/java/com/czertainly/api/model/common/attribute/v2"},"CZERTAINLY Interfaces repository"),"."),(0,l.kt)("p",null,(0,l.kt)("object",{parentName:"p",type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/XL1B2W8n3DrxYbnWSA4hSU6e82uyHAOJjT2PIlCA7byfWdRiq2nA-ZuXBpi51yJ1BUXTQjW9hPRhz7Do1S5JiBSxgBT13AmV4vSUxXI13QZzD7jMQO5WkmX94kDObURm8uDB-7cy-X9-2Zu-IiH5mFtCi4DK-E6NIMHnPzesAMsJhqmRaYTax3LPfvOc3r9LP_6gwZnqLVvtYgfZSg2l_WK0"})))}b.isMDXComponent=!0}}]);