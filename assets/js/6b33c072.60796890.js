"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4766],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),y=m(t),d=r,u=y["".concat(p,".").concat(d)]||y[d]||s[d]||o;return t?a.createElement(u,i(i({ref:n},c),{},{components:t})):a.createElement(u,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<o;m++)i[m]=t[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6620:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return s}});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),i=["components"],l={},p="Kong Gateway",m={unversionedId:"installation-guide/deployment/deployment-kubernetes/api-gateway/kong-gateway",id:"installation-guide/deployment/deployment-kubernetes/api-gateway/kong-gateway",title:"Kong Gateway",description:"Kong is a scalable, open source API Platform (also known as an API Gateway or API Middleware).",source:"@site/docs/03-installation-guide/03-deployment/10-deployment-kubernetes/02-api-gateway/01-kong-gateway.md",sourceDirName:"03-installation-guide/03-deployment/10-deployment-kubernetes/02-api-gateway",slug:"/installation-guide/deployment/deployment-kubernetes/api-gateway/kong-gateway",permalink:"/docs/installation-guide/deployment/deployment-kubernetes/api-gateway/kong-gateway",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/installation-guide/deployment/deployment-kubernetes/overview"},next:{title:"HAProxy Gateway",permalink:"/docs/installation-guide/deployment/deployment-kubernetes/api-gateway/haproxy-gateway"}},c={},s=[{value:"<code>api-gateway-configmap.yaml</code>",id:"api-gateway-configmapyaml",level:2},{value:"<code>api-gateway-deployment.yaml</code>",id:"api-gateway-deploymentyaml",level:2},{value:"<code>api-gateway-service.yaml</code>",id:"api-gateway-serviceyaml",level:2}],y={toc:s};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kong-gateway"},"Kong Gateway"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Kong")," is a scalable, open source API Platform (also known as an API Gateway or API Middleware)."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Kong")," is used as a simple API Gateway to the platform. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Kong")," is configured to forward the request to the platform. You can configure and run it using the following guide."),(0,o.kt)("p",null,"It contains the following manifests:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Manifest"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api-gateway-configmap.yaml")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"ConfigMap")," holding the ",(0,o.kt)("inlineCode",{parentName:"td"},"kong.yml")," declarative configuration")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api-gateway-deployment.yaml")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Deployment")," of the API Gateway")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api-gateway-service.yaml")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Service")," to create access for the API Gateway")))),(0,o.kt)("h2",{id:"api-gateway-configmapyaml"},(0,o.kt)("inlineCode",{parentName:"h2"},"api-gateway-configmap.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: api-gateway-configmap\n  namespace: czertainly\ndata:\n  kong.yml: |\n    _format_version: "2.1"\n    _transform: true\n\n    services:\n    - name: czertainly-core\n      host: czertainly-core-service\n      port: 8080\n      protocol: http\n      routes:\n      - name: czertainly-core_route\n        strip_path: false\n        paths:\n        - /api*\n      plugins:\n      - name: request-transformer\n        config:\n          rename:\n            headers:\n            - SSL_CLIENT_CERT:X-APP-CERTIFICATE\n    - name: czertainly-fe-administrator\n      host: czertainly-fe-administrator-service\n      port: 80\n      protocol: http\n      path: /\n      routes:\n      - name: czertainly-fe-administrator_route\n        strip_path: false\n        paths:\n        - /administrator*\n    - name: czertainly-fe-operator\n      host: czertainly-fe-operator-service\n      port: 80\n      protocol: http\n      routes:\n      - name: czertainly-fe-operator_route\n        strip_path: false\n        paths:\n        - /operator*\n')),(0,o.kt)("h2",{id:"api-gateway-deploymentyaml"},(0,o.kt)("inlineCode",{parentName:"h2"},"api-gateway-deployment.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: api-gateway-deployment\n  namespace: czertainly\n  labels:\n    app: api-gateway\nspec:\n  replicas: 1\n  revisionHistoryLimit: 3\n  selector:\n    matchLabels:\n      app: api-gateway\n  template:\n    metadata:\n      labels:\n        app: api-gateway\n    spec:\n      containers:\n        - name: api-gateway\n          image: kong:2.7.1-alpine\n          env:\n            - name: KONG_DATABASE\n              value: "off"\n            - name: KONG_PROXY_ACCESS_LOG\n              value: "/dev/stdout"\n            - name: KONG_ADMIN_ACCESS_LOG\n              value: "/dev/stdout"\n            - name: KONG_PROXY_ERROR_LOG\n              value: "/dev/stderr"\n            - name: KONG_ADMIN_ERROR_LOG\n              value: "/dev/stderr"\n            - name: KONG_ADMIN_LISTEN\n              value: "0.0.0.0:8001, 0.0.0.0:8444 ssl"\n            - name: KONG_DECLARATIVE_CONFIG\n              value: "/kong/declarative/kong.yml"\n          ports:\n            - containerPort: 8080\n              name: consumer-http\n            - containerPort: 8443\n              name: consumer-https\n            - containerPort: 8001\n              name: admin-http\n            - containerPort: 8444\n              name: admin-https\n          volumeMounts:\n            - name: api-gateway-config-volume\n              mountPath: /kong/declarative\n      volumes:\n        - name: api-gateway-config-volume\n          configMap:\n            name: api-gateway-configmap\n            items:\n              - key: kong.yml\n                path: kong.yml\n')),(0,o.kt)("h2",{id:"api-gateway-serviceyaml"},(0,o.kt)("inlineCode",{parentName:"h2"},"api-gateway-service.yaml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app: api-gateway\n  name: api-gateway-service\n  namespace: czertainly\nspec:\n  ports:\n    - port: 8000\n      protocol: "TCP"\n  selector:\n    app: api-gateway\n')))}d.isMDXComponent=!0}}]);