"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[355],{474:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>A,frontMatter:()=>u,metadata:()=>b,toc:()=>c});var a=r(85893),i=r(11151),n=r(74866),s=r(85162);const u={},o="Examples",b={id:"contributors/attributes/examples",title:"Examples",description:"You can find here various examples of how to create and use attributes in different programming languages.",source:"@site/docs/60-contributors/10-attributes/13-examples.mdx",sourceDirName:"60-contributors/10-attributes",slug:"/contributors/attributes/examples",permalink:"/docs/contributors/attributes/examples",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/60-contributors/10-attributes/13-examples.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Attributes",permalink:"/docs/contributors/attributes/attributes"},next:{title:"Database control",permalink:"/docs/contributors/database"}},d={},c=[{value:"Create <code>DataAttribute</code>",id:"create-dataattribute",level:2},{value:"Create <code>DataAttribute</code> with <code>AttributeCallback</code>",id:"create-dataattribute-with-attributecallback",level:2},{value:"Create <code>DataAttribute</code> with <code>STRING</code> content",id:"create-dataattribute-with-string-content",level:2},{value:"Create <code>DataAttribute</code> with <code>REGEXP</code> constraint",id:"create-dataattribute-with-regexp-constraint",level:2},{value:"Create <code>InfoAttribute</code> with <code>TEXT</code> content",id:"create-infoattribute-with-text-content",level:2},{value:"Create <code>GroupAttribute</code> with <code>INFO</code> and <code>DATA</code> attributes",id:"create-groupattribute-with-info-and-data-attributes",level:2},{value:"Create <code>MetadataAttribute</code> with <code>STRING</code> content",id:"create-metadataattribute-with-string-content",level:2},{value:"Create <code>CustomAttribute</code>",id:"create-customattribute",level:2}];function l(t){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(e.p,{children:"You can find here various examples of how to create and use attributes in different programming languages."}),"\n",(0,a.jsxs)(e.h2,{id:"create-dataattribute",children:["Create ",(0,a.jsx)(e.code,{children:"DataAttribute"})]}),"\n",(0,a.jsxs)(e.p,{children:["This example shows how to create ",(0,a.jsx)(e.code,{children:"DataAttribute"})," which is the attribute of type ",(0,a.jsx)(e.code,{children:"DATA"}),"."]}),"\n",(0,a.jsx)(n.Z,{children:(0,a.jsx)(s.Z,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'// Create DataAttribute\nDataAttribute dataAttribute = new DataAttribute();\ndataAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");\ndataAttribute.setName("myAttribute");\ndataAttribute.setContentType(AttributeContentType.STRING);\ndataAttribute.setType(AttributeType.DATA);\ndataAttribute.setDescription("This is my attribute");\n\n// Create DataAttributeProperties\nDataAttributeProperties dataAttributeProperties = new DataAttributeProperties();\ndataAttributeProperties.setRequired(true);\ndataAttributeProperties.setReadOnly(false);\ndataAttributeProperties.setVisible(true);\ndataAttributeProperties.setLabel("My Attribute");\ndataAttributeProperties.setMultiSelect(false);\ndataAttributeProperties.setGroup("My Group");\ndataAttributeProperties.setList(false);\n\n// Add DataAttributeProperties to DataAttribute\ndataAttribute.setProperties(dataAttributeProperties);\n'})})})}),"\n",(0,a.jsxs)(e.h2,{id:"create-dataattribute-with-attributecallback",children:["Create ",(0,a.jsx)(e.code,{children:"DataAttribute"})," with ",(0,a.jsx)(e.code,{children:"AttributeCallback"})]}),"\n",(0,a.jsxs)(e.p,{children:["This example shows how to create ",(0,a.jsx)(e.code,{children:"DataAttribute"})," with ",(0,a.jsx)(e.code,{children:"AttributeCallback"}),"."]}),"\n",(0,a.jsx)(n.Z,{children:(0,a.jsx)(s.Z,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'// Create DataAttribute\nDataAttribute dataAttribute = new DataAttribute();\ndataAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");\ndataAttribute.setName("myAttribute");\ndataAttribute.setType(AttributeType.DATA);\ndataAttribute.setContentType(AttributeContentType.STRING);\ndataAttribute.setDescription("This is my attribute");\n\n// Create DataAttributeProperties\nDataAttributeProperties dataAttributeProperties = new DataAttributeProperties();\ndataAttributeProperties.setRequired(true);\ndataAttributeProperties.setReadOnly(false);\ndataAttributeProperties.setVisible(true);\ndataAttributeProperties.setLabel("My Attribute");\ndataAttributeProperties.setMultiSelect(false);\ndataAttributeProperties.setGroup("My Group");\ndataAttributeProperties.setList(false);\n\n// Add DataAttributeProperties to DataAttribute\ndataAttribute.setProperties(dataAttributeProperties);\n\n// Create AttributeCallback\nAttributeCallback attributeCallback = new AttributeCallback();\nattributeCallback.setCallbackContext("/api/test");\nattributeCallback.setCallbackMethod("GET");\nSet<AttributeCallbackMapping> mappings = new HashSet<>();\nmappings.add(new AttributeCallbackMapping(\n        "credentialKind",\n        AttributeValueTarget.PATH_VARIABLE,\n        "SoftKeyStore"));\nlistCredentialCallback.setMappings(mappings);\n\n// Add AttributeCallback to DataAttribute\ndataAttribute.setAttributeCallback(listCredentialCallback);\n'})})})}),"\n",(0,a.jsxs)(e.h2,{id:"create-dataattribute-with-string-content",children:["Create ",(0,a.jsx)(e.code,{children:"DataAttribute"})," with ",(0,a.jsx)(e.code,{children:"STRING"})," content"]}),"\n",(0,a.jsxs)(e.p,{children:["This example shows how to create ",(0,a.jsx)(e.code,{children:"DataAttribute"})," with content of type ",(0,a.jsx)(e.code,{children:"STRING"}),"."]}),"\n",(0,a.jsx)(n.Z,{children:(0,a.jsx)(s.Z,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'// Cretae DataAttribute\nDataAttribute dataAttribute = new DataAttribute();\ndataAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");\ndataAttribute.setName("myAttribute");\ndataAttribute.setType(AttributeType.DATA);\ndataAttribute.setContentType(AttributeContentType.STRING);\ndataAttribute.setDescription("This is my attribute");\n\n// Create DataAttributeProperties\nDataAttributeProperties dataAttributeProperties = new DataAttributeProperties();\ndataAttributeProperties.setRequired(true);\ndataAttributeProperties.setReadOnly(false);\ndataAttributeProperties.setVisible(true);\ndataAttributeProperties.setLabel("My Attribute");\ndataAttributeProperties.setMultiSelect(false);\ndataAttributeProperties.setGroup("My Group");\ndataAttributeProperties.setList(true);\n\n// Add DataAttributeProperties to DataAttribute\ndataAttribute.setProperties(dataAttributeProperties);\n\n// Create StringAttributeContent\nList<StringAttributeContent> content = new ArrayList<>();\ncontent.add(new StringAttributeContent("sampleReference1", "sampleData1"));\ncontent.add(new StringAttributeContent("sampleReference2", "sampleData2"));\ncontent.add(new StringAttributeContent("sampleReference3", "sampleData3"));\n\n// Add StringAttributeContent to DataAttribute\ndataAttribute.setContent(content);\n'})})})}),"\n",(0,a.jsxs)(e.h2,{id:"create-dataattribute-with-regexp-constraint",children:["Create ",(0,a.jsx)(e.code,{children:"DataAttribute"})," with ",(0,a.jsx)(e.code,{children:"REGEXP"})," constraint"]}),"\n",(0,a.jsxs)(e.p,{children:["This example shows how to create ",(0,a.jsx)(e.code,{children:"DataAttribute"})," with the ",(0,a.jsx)(e.code,{children:"RegExpAttributeConstraint"})," for validation of the content."]}),"\n",(0,a.jsx)(n.Z,{children:(0,a.jsx)(s.Z,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'// Create DataAttribute\nDataAttribute dataAttribute = new DataAttribute();\ndataAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");\ndataAttribute.setName("myAttribute");\ndataAttribute.setType(AttributeType.DATA);\ndataAttribute.setContentType(AttributeContentType.STRING);\ndataAttribute.setDescription("This is my attribute");\n\n// Create DataAttributeProperties\nDataAttributeProperties dataAttributeProperties = new DataAttributeProperties();\ndataAttributeProperties.setRequired(true);\ndataAttributeProperties.setReadOnly(false);\ndataAttributeProperties.setVisible(true);\ndataAttributeProperties.setLabel("My Attribute");\ndataAttributeProperties.setMultiSelect(false);\ndataAttributeProperties.setGroup("My Group");\ndataAttributeProperties.setList(false);\n\n// Add DataAttributeProperties to DataAttribute\ndataAttribute.setProperties(dataAttributeProperties);\n\n// Create RegExpAttributeConstraint\nRegExpAttributeConstraint regExpAttributeConstraint = new RegExpAttributeConstraint();\nregExpAttributeConstraint.setDescription("This is a regular expression constraint");\nregExpAttributeConstraint.setErrorMessage("This is a sample error message");\nregExpAttributeConstraint.setType(AttributeConstraintType.REGEXP);\nregExpAttributeConstraint.setData("^[a-zA-Z0-9]*$");\n\n// Add RegExpAttributeConstraint to DataAttribute\ndataAttribute.setConstraint(List.of(regExpAttributeConstraint));\n'})})})}),"\n",(0,a.jsxs)(e.h2,{id:"create-infoattribute-with-text-content",children:["Create ",(0,a.jsx)(e.code,{children:"InfoAttribute"})," with ",(0,a.jsx)(e.code,{children:"TEXT"})," content"]}),"\n",(0,a.jsxs)(e.p,{children:["This example shows how to create ",(0,a.jsx)(e.code,{children:"InfoAttribute"})," which is attribute of type ",(0,a.jsx)(e.code,{children:"INFO"}),"."]}),"\n",(0,a.jsx)(n.Z,{children:(0,a.jsx)(s.Z,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'// Create InfoAttribute\nInfoAttribute infoAttribute = new InfoAttribute();\ninfoAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");\ninfoAttribute.setName("myAttribute");\ninfoAttribute.setType(AttributeType.INFO);\ninfoAttribute.setContentType(AttributeContentType.STRING);\ninfoAttribute.setDescription("This is my attribute");\n\n// Create InfoAttributeProperties\nInfoAttributeProperties infoAttributeProperties = new InfoAttributeProperties();\ninfoAttributeProperties.setLabel("My Attribute");\ninfoAttributeProperties.setGroup("My Group");\ninfoAttributeProperties.setVisible(true);\n\n// Add InfoAttributeProperties to InfoAttribute\ninfoAttribute.setProperties(infoAttributeProperties);\n\n// Create TextAttributeContent\nTextAttributeContent textAttributeContent = new TextAttributeContent();\ntextAttributeContent.setReference("Sample Reference Data");\ntextAttributeContent.setData("This is a sample text that has to be displayed in the user interface. This attribute data contains additional information that helps the user to understand the context of the request.");\n\n// Add TextAttributeContent to InfoAttribute\ninfoAttribute.setContent(List.of(textAttributeContent));\n'})})})}),"\n",(0,a.jsxs)(e.h2,{id:"create-groupattribute-with-info-and-data-attributes",children:["Create ",(0,a.jsx)(e.code,{children:"GroupAttribute"})," with ",(0,a.jsx)(e.code,{children:"INFO"})," and ",(0,a.jsx)(e.code,{children:"DATA"})," attributes"]}),"\n",(0,a.jsxs)(e.p,{children:["This example shows how to create ",(0,a.jsx)(e.code,{children:"GroupAttribute"})," that is of type ",(0,a.jsx)(e.code,{children:"GROUP"})," with ",(0,a.jsx)(e.code,{children:"DataAttribute"})," and ",(0,a.jsx)(e.code,{children:"InfoAtrribute"}),"."]}),"\n",(0,a.jsx)(n.Z,{children:(0,a.jsx)(s.Z,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'// Cretae DataAttribute\nDataAttribute dataAttribute = new DataAttribute();\ndataAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");\ndataAttribute.setName("myAttribute");\ndataAttribute.setType(AttributeType.DATA);\ndataAttribute.setContentType(AttributeContentType.STRING);\ndataAttribute.setDescription("This is my attribute");\n\n// Create DataAttributeProperties\nDataAttributeProperties dataAttributeProperties = new DataAttributeProperties();\ndataAttributeProperties.setRequired(true);\ndataAttributeProperties.setReadOnly(false);\ndataAttributeProperties.setVisible(true);\ndataAttributeProperties.setLabel("My Attribute");\ndataAttributeProperties.setMultiSelect(false);\ndataAttributeProperties.setGroup("My Group");\ndataAttributeProperties.setList(false);\n\n// Add DataAttributeProperties to DataAttribute\ndataAttribute.setProperties(dataAttributeProperties);\n\n// Create InfoAttribute\nInfoAttribute infoAttribute = new InfoAttribute();\ninfoAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120003");\ninfoAttribute.setName("myAttribute1");\ninfoAttribute.setType(AttributeType.INFO);\ninfoAttribute.setContentType(AttributeContentType.STRING);\ninfoAttribute.setDescription("This is my attribute 1");\n\n// Create InfoAttributeProperties\nInfoAttributeProperties infoAttributeProperties = new InfoAttributeProperties();\ninfoAttributeProperties.setLabel("My Attribute");\ninfoAttributeProperties.setGroup("My Group");\ninfoAttributeProperties.setVisible(true);\n\n// Add InfoAttributeProperties to InfoAttribute\ninfoAttribute.setProperties(infoAttributeProperties);\n\n// Create TextAttributeContent\nTextAttributeContent textAttributeContent = new TextAttributeContent();\ntextAttributeContent.setReference("Sample Reference Data");\ntextAttributeContent.setData("Reference data for info attribute");\n\n// Add TextAttributeContent to InfoAttribute\ninfoAttribute.setContent(List.of(textAttributeContent));\n\n// Create GroupAttribute\nGroupAttribute groupAttribute = new GroupAttribute();\ngroupAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120004");\ngroupAttribute.setName("groupAttribute");\ngroupAttribute.setType(AttributeType.GROUP);\ngroupAttribute.setContentType(AttributeContentType.STRING);\ngroupAttribute.setDescription("Sample Group Attribute");\n\n// Add DataAttribute and InfoAttribute to GroupAttribute\ngroupAttribute.setContent(List.of(dataAttribute, infoAttribute));\n'})})})}),"\n",(0,a.jsxs)(e.h2,{id:"create-metadataattribute-with-string-content",children:["Create ",(0,a.jsx)(e.code,{children:"MetadataAttribute"})," with ",(0,a.jsx)(e.code,{children:"STRING"})," content"]}),"\n",(0,a.jsxs)(e.p,{children:["This example shows how to create ",(0,a.jsx)(e.code,{children:"MetadataAttribute"})," that is of type ",(0,a.jsx)(e.code,{children:"META"}),"."]}),"\n",(0,a.jsx)(n.Z,{children:(0,a.jsx)(s.Z,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'// Create MetadataAttribute\nMetadataAttribute metadataAttribute = new MetadataAttribute();\nmetadataAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");\nmetadataAttribute.setName("discoverySource");\nmetadataAttribute.setType(AttributeType.METADATA);\nmetadataAttribute.setContentType(AttributeContentType.STRING);\nmetadataAttribute.setDescription("Metadata describing the source of the certificate discovered");\n\n// Create MetadataAttributeProperties\nMetadataAttributeProperties metadataAttributeProperties = new MetadataAttributeProperties();\nmetadataAttributeProperties.setLabel("Discovery Source");\nmetadataAttributeProperties.setGroup("Discovery");\nmetadataAttributeProperties.setVisible(true);\n//Setting the metadata as global metadata\nmetadataAttributeProperties.setGlobal(true);\n\n// Add MetadataAttributeProperties to MetadataAttribute\nmetadataAttribute.setProperties(metadataAttributeProperties);\n\n// Create StringAttributeContent\nStringAttributeContent stringAttributeContent = new StringAttributeContent();\nstringAttributeContent.setReference("google.com");\nstringAttributeContent.setData("google.com");\n\n// Add StringAttributeContent to MetadataAttribute\nmetadataAttribute.setContent(List.of(stringAttributeContent));\n'})})})}),"\n",(0,a.jsxs)(e.h2,{id:"create-customattribute",children:["Create ",(0,a.jsx)(e.code,{children:"CustomAttribute"})]}),"\n",(0,a.jsxs)(e.p,{children:["This example shows how to create ",(0,a.jsx)(e.code,{children:"CustomAttribute"})," of attribute type ",(0,a.jsx)(e.code,{children:"CUSTOM"}),"."]}),"\n",(0,a.jsx)(n.Z,{children:(0,a.jsx)(s.Z,{value:"java",label:"Java",children:(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'// Create CustomAttribute\nCustomAttribute customAttribute = new CustomAttribute();\ncustomAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");\ncustomAttribute.setName("myAttribute");\ncustomAttribute.setType(AttributeType.DATA);\ncustomAttribute.setContentType(AttributeContentType.STRING);\ncustomAttribute.setDescription("This is my attribute");\n\n// Create CustomAttributeProperties\nCustomAttributeProperties customAttributeProperties = new CustomAttributeProperties();\ncustomAttributeProperties.setRequired(true);\ncustomAttributeProperties.setReadOnly(false);\ncustomAttributeProperties.setVisible(true);\ncustomAttributeProperties.setLabel("My Attribute");\ncustomAttributeProperties.setMultiSelect(false);\ncustomAttributeProperties.setGroup("My Group");\ncustomAttributeProperties.setList(false);\n\n// Add CustomAttributeProperties to CustomAttribute\ncustomAttribute.setProperties(customAttributeProperties);\n'})})})})]})}function A(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(l,{...t})}):l(t)}},85162:(t,e,r)=>{r.d(e,{Z:()=>s});r(67294);var a=r(86010);const i={tabItem:"tabItem_Ymn6"};var n=r(85893);function s(t){let{children:e,hidden:r,className:s}=t;return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,s),hidden:r,children:e})}},74866:(t,e,r)=>{r.d(e,{Z:()=>T});var a=r(67294),i=r(86010),n=r(12466),s=r(16550),u=r(20469),o=r(91980),b=r(67392),d=r(50012);function c(t){return a.Children.toArray(t).filter((t=>"\n"!==t)).map((t=>{if(!t||(0,a.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function l(t){const{values:e,children:r}=t;return(0,a.useMemo)((()=>{const t=e??function(t){return c(t).map((t=>{let{props:{value:e,label:r,attributes:a,default:i}}=t;return{value:e,label:r,attributes:a,default:i}}))}(r);return function(t){const e=(0,b.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,r])}function A(t){let{value:e,tabValues:r}=t;return r.some((t=>t.value===e))}function p(t){let{queryString:e=!1,groupId:r}=t;const i=(0,s.k6)(),n=function(t){let{queryString:e=!1,groupId:r}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:e,groupId:r});return[(0,o._X)(n),(0,a.useCallback)((t=>{if(!n)return;const e=new URLSearchParams(i.location.search);e.set(n,t),i.replace({...i.location,search:e.toString()})}),[n,i])]}function h(t){const{defaultValue:e,queryString:r=!1,groupId:i}=t,n=l(t),[s,o]=(0,a.useState)((()=>function(t){let{defaultValue:e,tabValues:r}=t;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!A({value:e,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const a=r.find((t=>t.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:e,tabValues:n}))),[b,c]=p({queryString:r,groupId:i}),[h,m]=function(t){let{groupId:e}=t;const r=function(t){return t?`docusaurus.tab.${t}`:null}(e),[i,n]=(0,d.Nk)(r);return[i,(0,a.useCallback)((t=>{r&&n.set(t)}),[r,n])]}({groupId:i}),f=(()=>{const t=b??h;return A({value:t,tabValues:n})?t:null})();(0,u.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((t=>{if(!A({value:t,tabValues:n}))throw new Error(`Can't select invalid tab value=${t}`);o(t),c(t),m(t)}),[c,m,n]),tabValues:n}}var m=r(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(85893);function C(t){let{className:e,block:r,selectedValue:a,selectValue:s,tabValues:u}=t;const o=[],{blockElementScrollPositionUntilNextRender:b}=(0,n.o5)(),d=t=>{const e=t.currentTarget,r=o.indexOf(e),i=u[r].value;i!==a&&(b(e),s(i))},c=t=>{let e=null;switch(t.key){case"Enter":d(t);break;case"ArrowRight":{const r=o.indexOf(t.currentTarget)+1;e=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(t.currentTarget)-1;e=o[r]??o[o.length-1];break}}e?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},e),children:u.map((t=>{let{value:e,label:r,attributes:n}=t;return(0,x.jsx)("li",{role:"tab",tabIndex:a===e?0:-1,"aria-selected":a===e,ref:t=>o.push(t),onKeyDown:c,onClick:d,...n,className:(0,i.Z)("tabs__item",f.tabItem,n?.className,{"tabs__item--active":a===e}),children:r??e},e)}))})}function P(t){let{lazy:e,children:r,selectedValue:i}=t;const n=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){const t=n.find((t=>t.props.value===i));return t?(0,a.cloneElement)(t,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:n.map(((t,e)=>(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==i})))})}function y(t){const e=h(t);return(0,x.jsxs)("div",{className:(0,i.Z)("tabs-container",f.tabList),children:[(0,x.jsx)(C,{...t,...e}),(0,x.jsx)(P,{...t,...e})]})}function T(t){const e=(0,m.Z)();return(0,x.jsx)(y,{...t,children:c(t.children)},String(e))}},11151:(t,e,r)=>{r.d(e,{Z:()=>u,a:()=>s});var a=r(67294);const i={},n=a.createContext(i);function s(t){const e=a.useContext(n);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function u(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),a.createElement(n.Provider,{value:e},t.children)}}}]);