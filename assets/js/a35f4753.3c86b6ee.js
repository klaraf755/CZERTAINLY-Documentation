"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[5711],{46506:(e,i,c)=>{c.r(i),c.d(i,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var o=c(85893),n=c(11151);const r={},t="Compliance Provider",a={id:"certificate-key/connectors/compliance-provider",title:"Compliance Provider",description:"Overview",source:"@site/docs/10-certificate-key/12-connectors/16-compliance-provider.md",sourceDirName:"10-certificate-key/12-connectors",slug:"/certificate-key/connectors/compliance-provider",permalink:"/docs/certificate-key/connectors/compliance-provider",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/12-connectors/16-compliance-provider.md",tags:[],version:"current",sidebarPosition:16,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Authority Provider v2",permalink:"/docs/certificate-key/connectors/authority-provider-v2"},next:{title:"Credential Provider",permalink:"/docs/certificate-key/connectors/credential-provider"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Provider objects",id:"provider-objects",level:2},{value:"Processes",id:"processes",level:2},{value:"Add Compliance Provider",id:"add-compliance-provider",level:3},{value:"Check Certificate Compliance",id:"check-certificate-compliance",level:3},{value:"Specification and example",id:"specification-and-example",level:2}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",object:"object",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"compliance-provider",children:"Compliance Provider"}),"\n",(0,o.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(i.p,{children:"Each certificate and cryptographic key can contain various attributes and can be based on different algorithms. There are also various standards and regulations that require specific behavior of the certificate, for example to be able to react on algorithm deprecation or vulnerabilities. The compliance checking helps to monitor the compliance status of each certificate that is included in the inventory of the platform."}),"\n",(0,o.jsxs)(i.p,{children:["Compliance Provider implements the functionality of compliance settings and checking for the certificates available in the platform. it applies specific compliance rules and group of compliance rules to ",(0,o.jsx)(i.code,{children:"Certificate"})," and informs about the compliance status. Based on the compliance check, the ",(0,o.jsx)(i.code,{children:"Certificate"})," will either be determined as compliant or not compliant."]}),"\n",(0,o.jsx)(i.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,o.jsxs)(i.p,{children:["Compliance Provider have a set of applicable compliance rules and groups that can be configured as part of the ",(0,o.jsx)(i.code,{children:"Compliance Profile"}),". This defines the set of compliance requirements. To check for the compliance status, ",(0,o.jsx)(i.code,{children:"Compliance Profile"})," should be associated with ",(0,o.jsx)(i.code,{children:"RA Profile"}),". After that every ",(0,o.jsx)(i.code,{children:"Certificate"})," managed by such ",(0,o.jsx)(i.code,{children:"RA Profile"})," will be checked against compliance rules configured in the ",(0,o.jsx)(i.code,{children:"Compliance Profile"}),"."]}),"\n",(0,o.jsxs)(i.p,{children:["Compliance checking can be executed on ",(0,o.jsx)(i.code,{children:"RA Profile"})," level (for all ",(0,o.jsx)(i.code,{children:"Certificates"}),"), for every specific ",(0,o.jsx)(i.code,{children:"Certificate"})," in the inventory, or for each ",(0,o.jsx)(i.code,{children:"Compliance Profile"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"provider-objects",children:"Provider objects"}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.a,{href:"../concept-design/core-components/compliance-profile",children:(0,o.jsx)(i.code,{children:"Compliance Profiles"})})," objects are managed in the platform through the Compliance Provider implementation.\nEach ",(0,o.jsx)(i.code,{children:"Compliance Profile"})," contains a list of available compliance rules and groups that can be applied for a compliance checking.\nMany different ",(0,o.jsx)(i.code,{children:"Compliance Profiles"})," with differenty compliance requirements can be managed and applied on certificates."]}),"\n",(0,o.jsx)(i.h2,{id:"processes",children:"Processes"}),"\n",(0,o.jsxs)(i.p,{children:["The following processes are associated with the Compliance Provider and management of the ",(0,o.jsx)(i.code,{children:"Compliance Profile"})," objects and checking compliance status of ",(0,o.jsx)(i.code,{children:"Certificate"})," object."]}),"\n",(0,o.jsx)(i.h3,{id:"add-compliance-provider",children:"Add Compliance Provider"}),"\n",(0,o.jsx)(i.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/jLFBQiCm4BptAnPwTdJteGHS6aBRIq9E8GTLtZYYygwGLYtjrzSISMBI1vHINyJEx6fc91a0O1v51qczkneAq4cOKl-4ePJnsPBNGVSWx5DmS13niLQgPHDdvXs3Q4lkRMQuLzfRLQRorpYB953TGCC1ORirmr8P9a8Z7DIrw4urOrazQj8TziE8Oez1YsLI9g0MF3NjTZKq1G8DXAzmOiwgMQje7faYF8eC9hspcWnMFl2BRV7eOqbxdkWw6sMTlESWsDubCXcDMVvXO22E5En73dWFSa0mNpWQdLJ7iwXXt18MWPC7JItSMsh_cg8v4wlaC4uITIW5oXaMA90JPiyXWpzwBOdFEyFgOk8Vd9PJ-MIrA-Yll2ukHqQpkNajkIpovGQ-Qoxlk8OLIWeqaTribhUbUuxK3h_F1m00"}),"\n",(0,o.jsx)(i.h3,{id:"check-certificate-compliance",children:"Check Certificate Compliance"}),"\n",(0,o.jsx)(i.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/VPC_RuCm4CNtVegJEXFl35KYr5RPgdQCChZE0LQCxPxFIEcdho6KVqh20cVUx-xnZ040je4bSMpCKof0HdOsDjz8VHdEsdf9iW5sFfA1cjc7N8YJKs6ZVf5OQcik6-KQ8RqMFTLTXT5e6R8NA1mX70ugtJAL05rg9Hd5CyjA5DD2jhTjGXnTXFD8ahMpGjMepeLhlD7IAZmUSzXRpJhfOSR2986YGoOVtVIiiz4Rok4JEPA5NRXO1OJ1Enjm9R-Qpk4TUTxvWrof3O8hWUl5_3lyMqeEqv2VY853ol3ABJgs-eGKnWR6EG-b8q2fwblIKRaSPosgb5qVzF2SgP7E_40FgOyl7aVTHmcpJOEfvSh7__nixYQ7rrQQs87zvr0qZxakj663rZkQraCqFE9eJtTItrKLORNwArRqalZYhhojtgP1wNJy0G00"}),"\n",(0,o.jsx)(i.admonition,{type:"info",children:(0,o.jsxs)(i.p,{children:["When a request is made to check the compliance of the ",(0,o.jsx)(i.code,{children:"Certificate"}),", the ",(0,o.jsx)(i.code,{children:"Core"})," gathers list of rules configure in the associated ",(0,o.jsx)(i.code,{children:"Compliance Profile"})," and request each Compliance Profiles for the specific compliance rule result. After all compliance rules are evaluated, the ",(0,o.jsx)(i.code,{children:"Core"})," then computes the overall compliance status."]})}),"\n",(0,o.jsx)(i.h2,{id:"specification-and-example",children:"Specification and example"}),"\n",(0,o.jsxs)(i.p,{children:["The Compliance Provider implements ",(0,o.jsx)(i.a,{href:"common-interfaces/overview",children:"Common Interfaces"})," and the following additional interfaces:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/api/connector-compliance-provider/#tag/Compliance-Rules",children:"Compliance Rules"})}),"\n",(0,o.jsx)(i.li,{children:(0,o.jsx)(i.a,{href:"/api/connector-compliance-provider/#tag/Compliance",children:"Compliance"})}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["The OpenAPI specification of the Compliance Provider can be found here: ",(0,o.jsx)(i.a,{href:"/api/connector-compliance-provider/",children:"Connector API - Compliance Provider"}),"."]})]})}function p(e={}){const{wrapper:i}={...(0,n.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,i,c)=>{c.d(i,{Z:()=>a,a:()=>t});var o=c(67294);const n={},r=o.createContext(n);function t(e){const i=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),o.createElement(r.Provider,{value:i},e.children)}}}]);