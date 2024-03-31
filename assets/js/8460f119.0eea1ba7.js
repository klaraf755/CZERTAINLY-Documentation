"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5206],{51166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=n(85893),c=n(11151);const a={},o="Externalized Authentication",r={id:"certificate-key/concept-design/architecture/access-control/externalized-authentication",title:"Externalized Authentication",description:"Platform relies on the externalized authentication of the users.",source:"@site/docs/10-certificate-key/02-concept-design/02-architecture/05-access-control/03-externalized-authentication.md",sourceDirName:"10-certificate-key/02-concept-design/02-architecture/05-access-control",slug:"/certificate-key/concept-design/architecture/access-control/externalized-authentication",permalink:"/docs/certificate-key/concept-design/architecture/access-control/externalized-authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/02-concept-design/02-architecture/05-access-control/03-externalized-authentication.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/certificate-key/concept-design/architecture/access-control/overview"},next:{title:"Identification",permalink:"/docs/certificate-key/concept-design/architecture/access-control/identification"}},s={},d=[];function l(e){const t={a:"a",admonition:"admonition",h1:"h1",li:"li",p:"p",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"externalized-authentication",children:"Externalized Authentication"}),"\n",(0,i.jsx)(t.p,{children:"Platform relies on the externalized authentication of the users."}),"\n",(0,i.jsx)(t.p,{children:"Platform expects to get authenticated user data, meaning that the authentication was already performed by the external server."}),"\n",(0,i.jsx)(t.p,{children:"External authentication can be performed using various mechanisms, including, but not limited to (depending on the technology):"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"certificate-based authentication"}),"\n",(0,i.jsx)(t.li,{children:"single-sign on using SAML 2.0 or OAuth 2.0"}),"\n",(0,i.jsx)(t.li,{children:"OpenID Connect"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The identity of authenticated user is forwarded to the identification service."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Based on the technology being used for externalized authentication, multi-factor authentication (MFA) or risk-based authentication (RBA), and any other modern authentication methods may be applied."})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["One of the tested authentication servers is ",(0,i.jsx)(t.a,{href:"https://www.keycloak.org/",children:"Keycloak"}),". Keycloak can integrate with the API gateway using OIDC and supports integration to various identity providers including various authentication flows."]})})]})}function h(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{a:()=>o});var i=n(67294);const c={},a=i.createContext(c);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);