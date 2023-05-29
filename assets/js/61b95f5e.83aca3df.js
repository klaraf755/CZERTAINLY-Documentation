"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[9560],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,g=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return t?r.createElement(g,a(a({ref:n},s),{},{components:t})):r.createElement(g,a({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[f]="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},90878:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return f}});var r=t(83117),o=t(80102),i=(t(67294),t(3905)),a=["components"],c={},l="Configure OIDC",u={unversionedId:"certificate-key/integration-guides/keycloak/configure-oidc",id:"certificate-key/integration-guides/keycloak/configure-oidc",title:"Configure OIDC",description:"CZERTAINLY supports the configuration of the OIDC through the configuration of Helm chart values.",source:"@site/docs/10-certificate-key/20-integration-guides/10-keycloak/05-configure-oidc.md",sourceDirName:"10-certificate-key/20-integration-guides/10-keycloak",slug:"/certificate-key/integration-guides/keycloak/configure-oidc",permalink:"/docs/certificate-key/integration-guides/keycloak/configure-oidc",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create Realm and Client",permalink:"/docs/certificate-key/integration-guides/keycloak/create-realm"},next:{title:"Create User and Login",permalink:"/docs/certificate-key/integration-guides/keycloak/create-user-login"}},s={},f=[{value:"Configure OIDC Client",id:"configure-oidc-client",level:2},{value:"Configure CORS",id:"configure-cors",level:2}],p={toc:f},d="wrapper";function g(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-oidc"},"Configure OIDC"),(0,i.kt)("p",null,"CZERTAINLY supports the configuration of the OIDC through the configuration of Helm chart values.\nApply the following settings to enable OIDC and CORS."),(0,i.kt)("h2",{id:"configure-oidc-client"},"Configure OIDC Client"),(0,i.kt)("p",null,"To enable OIDC client, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"oidc.enabled")," value to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and configure the following values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiGateway:\n  # kong-oidc plugin: https://github.com/revomatico/kong-oidc\n  # this plugin inserts user data into X-USERINFO header\n  oidc:\n    # if oidc is enabled, all client values must be present\n    enabled: false\n    client:\n      # oidc client id\n      id: czertainly\n      # oidc client secret\n      secret: s0qKH5qItTWoxpBt7Zrj348ZhZ7woAbk\n      # realm used in www-authenticate response header\n      realm: czertainly\n      # oidc discovery endpoint\n      discovery: https://<KEYCLOKA_SERVER>/.well-known/openid-configuration\n")),(0,i.kt)("h2",{id:"configure-cors"},"Configure CORS"),(0,i.kt)("p",null,"To enable CORS, set the ",(0,i.kt)("inlineCode",{parentName:"p"},"cors.enabled")," value to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," and configure the following values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiGateway:\n  # kong cors plugin: https://docs.konghq.com/hub/kong-inc/cors\n  cors:\n    enabled: false\n    # list of allowed domains for the Access-Control-Allow-Origin header\n    origins:\n      - '*'\n    # list of values for the Access-Control-Expose-Headers header\n    exposedHeaders:\n      - X-Auth-Token\n")))}g.isMDXComponent=!0}}]);