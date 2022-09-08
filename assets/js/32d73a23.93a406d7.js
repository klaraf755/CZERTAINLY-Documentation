"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[6345],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3762:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),l=["components"],o={},s="Database Setup",u={unversionedId:"installation-guide/database-setup",id:"installation-guide/database-setup",title:"Database Setup",description:"The platform is developed and tested in the PostgreSQL relational database.",source:"@site/docs/03-installation-guide/02-database-setup.md",sourceDirName:"03-installation-guide",slug:"/installation-guide/database-setup",permalink:"/docs/installation-guide/database-setup",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/installation-guide/introduction"},next:{title:"Deployment Options",permalink:"/docs/installation-guide/deployment/deployment-options"}},p={},c=[{value:"Setup database manually",id:"setup-database-manually",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"database-setup"},"Database Setup"),(0,i.kt)("p",null,"The platform is developed and tested in the PostgreSQL relational database."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"From the ",(0,i.kt)("inlineCode",{parentName:"p"},"Core")," version ",(0,i.kt)("inlineCode",{parentName:"p"},"2.0.3"),", database migrations are controlled by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Core")," itself. If you need to split the database administrator responsibility, it is always possible using the provided schema and migration scripts.")),(0,i.kt)("h2",{id:"setup-database-manually"},"Setup database manually"),(0,i.kt)("p",null,"The database must be setup before the platform can be used. Depending on your setup, you should initialize the database using the following steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create the database user")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER czertainlyuser WITH PASSWORD 'your-strong-password';\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create the database and grant the user access to it")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE czertainly ENCODING 'UTF8' LC_COLLATE='en_US.UTF-8' LC_CTYPE='en_US.UTF-8' TEMPLATE=template0;\nGRANT ALL PRIVILEGES ON DATABASE czertainly to czertainlyuser;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create the tables using the schema file located in the ",(0,i.kt)("inlineCode",{parentName:"li"},"db")," directory")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"psql -h localhost -U czertainlyuser -d czertainly < ./core/01_tables.sql\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Load initial data required by the platform using the file located in the ",(0,i.kt)("inlineCode",{parentName:"li"},"db")," directory")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"psql -h localhost -U czertainlyuser -d czertainly < ./core/02_data.sql\n")),(0,i.kt)("p",null,"Once the tables and data are created, you can deploy the platform and start using it."))}m.isMDXComponent=!0}}]);