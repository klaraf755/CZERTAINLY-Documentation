"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[7416],{42065:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>s});var i=r(85893),n=r(11151);const d={},c="Credential Provider",o={id:"certificate-key/connectors/credential-provider",title:"Credential Provider",description:"Overview",source:"@site/docs/10-certificate-key/12-connectors/18-credential-provider.md",sourceDirName:"10-certificate-key/12-connectors",slug:"/certificate-key/connectors/credential-provider",permalink:"/docs/certificate-key/connectors/credential-provider",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/12-connectors/18-credential-provider.md",tags:[],version:"current",sidebarPosition:18,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Compliance Provider",permalink:"/docs/certificate-key/connectors/compliance-provider"},next:{title:"Cryptography Provider",permalink:"/docs/certificate-key/connectors/cryptography-provider"}},a={},s=[{value:"Overview",id:"overview",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Provider objects",id:"provider-objects",level:2},{value:"Processes",id:"processes",level:2},{value:"Add <code>Credential</code>",id:"add-credential",level:3},{value:"Get <code>Credential</code> details",id:"get-credential-details",level:3},{value:"Update <code>Credential</code>",id:"update-credential",level:3},{value:"Remove <code>Credential</code>",id:"remove-credential",level:3},{value:"Change state of the <code>Credential</code>",id:"change-state-of-the-credential",level:3},{value:"Specification and example",id:"specification-and-example",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",object:"object",p:"p",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"credential-provider",children:"Credential Provider"}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Typically, when we need to access some service, we need to be properly authenticated and authorized. For this purpose we need to provide information to the service that can be used for this purpose. This is the purpose of the Credential Provider that defines the credential and its properties that are needed to securely access required service."}),"\n",(0,i.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,i.jsx)(t.p,{children:"The Credential Provider defines specific configuration of the credentials that can be used across the platform for authentication and authorization."}),"\n",(0,i.jsx)(t.h2,{id:"provider-objects",children:"Provider objects"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"../concept-design/core-components/credential",children:(0,i.jsx)(t.code,{children:"Credential"})})," objects are managed in the platform through the Credential Provider implementation."]}),"\n",(0,i.jsx)(t.h2,{id:"processes",children:"Processes"}),"\n",(0,i.jsxs)(t.p,{children:["The following processes are associated with the Credential Provider and management of the ",(0,i.jsx)(t.code,{children:"Credential"})," objects."]}),"\n",(0,i.jsxs)(t.h3,{id:"add-credential",children:["Add ",(0,i.jsx)(t.code,{children:"Credential"})]}),"\n",(0,i.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/TL4xRm8n3DxxAonrxP6T0O6kIuTsQ4KNn60IKo9oJkGuzF7hgplkfOfcYftF_Xu105XdHT7IX3i002mQkJG7agxCPyy91HlGc8e4EAccl3J6HPiNzeT4qNFuNjZO64pUT5FjgOCdrcfLHo7OxMmKggoG8rQFmTmhVfXwhAjdPFoWXbXDJ2IeFhAnGgWqeVRx9MoSWwapqhr49OWNafxueUNzYuPFhoV8YQm_UWiRLV67efJXW9aSH0Oz4VWcXKvAfs9or5fONVVM9x9de2-VbTWIn2FKaPciHW7acnA7-G7MXjBVPybKIUB5Ev9hH9F6MIuN3DwXqlJO9lFUTm77zenxO1eSl98MOUXN-SWWb4lGctRVjFt5_pnLgslcuz9PujljqsE7NXExqeHV"}),"\n",(0,i.jsxs)(t.h3,{id:"get-credential-details",children:["Get ",(0,i.jsx)(t.code,{children:"Credential"})," details"]}),"\n",(0,i.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/LO-nRiCm34JtViK1dHtj7e80xjgYQCOW0oDVRA6oP53Ka7vzOHkeKsu7lkFn0E1KJDJg55y0GAhbLASRTPNbEwHPL2POdgj6Z6PpQPthioy7_qCr2Ia-3ZvFJkRWLjSoNGnCrXoxhCJbuhEoySgUoO94zseokEvFD--IPE34P2xFLB6GanjeEtAzjdYZIOW5-Gx1lYfxwXApPhRurEnP2WgzqdRc8nkXOHXjkREnvus1A1U-AkC3ytQ0FMwyBpLiv5CgGe7IgYRs_nzeZblx5b_h_jdKRnLMmucfhrFy1G00"}),"\n",(0,i.jsxs)(t.h3,{id:"update-credential",children:["Update ",(0,i.jsx)(t.code,{children:"Credential"})]}),"\n",(0,i.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/XL4zJmCn3Dtv5PQOhzaxL4Ktio31KdLm4zD6pTcHurJ0hqTtlIy919dYbsU_znm0W7qnLAjTUW00m6h2jJkH3cMvHiwes859hfhWOfRBrhaWlcpy5wbXvFIvyT8vpD4DNVrfKoIsPjUA4XmENfGQhnI8BM9oZuPdryvryuoCP-g8pKacHOl2ZaAqXNCyRk4r1pI21LpqUe51RGljXVmLw2CM8_O4yWwjC9CtKK0EV_LFjDxoU5_vRhBABGRIUu0dCusdQbHMhc-OOkzoUUoTluqeu0olj2UbAS4BMLM6SLGK1gLIa_qQzv-bDBlxNynJwy3_iOKzSQXT-WO0"}),"\n",(0,i.jsxs)(t.h3,{id:"remove-credential",children:["Remove ",(0,i.jsx)(t.code,{children:"Credential"})]}),"\n",(0,i.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/XOynQmCn38Nt_ee7dI_URmY1cxjq3HaKMysPsBAHvKBxwyivaEjGgBOdlgSF0S2f6Qdrd5u0WBeLwVdAEcAxHwcab66bTarOpMgRdGl5juF_PZMAahuElcH7DRhHscP9aSMcurAKSJxxeZnvvS1YaP9xDRgvvPcdDnAwSMOnLoehMIpY0YSstgdBPSOxv_B9s9UxSLCCtunbPNz7_82jlrbu4bmPEew4Fwl_2ARZuxCDjAu2vTQJ3UZ44dfEFm00"}),"\n",(0,i.jsxs)(t.h3,{id:"change-state-of-the-credential",children:["Change state of the ",(0,i.jsx)(t.code,{children:"Credential"})]}),"\n",(0,i.jsx)(t.object,{type:"image/svg+xml",data:"https://www.plantuml.com/plantuml/svg/hKyzJyGm3Dtv5KzYxcNlS3gfCBAmdcvmKzD6bpYLumpmwr5RrEC4R7Yn_Vm-P00u5IErck83052rB3NrhEjQha5cKagmF5UDcCpcqZetP5yE_eFLA4XyF_YS7Ct1hQhLA1fOg8_iXb2Mlf-Mwc9WiUROPMMSppuhDrvvOB50qJqQZQxRz-Q5X4PEBERop4eMihZD_iQwN5eyhnXkuB-dVdrp7_kqWR_biWpxlEHkwIswYVqLuGqsVTUX61d3aw1d-8bavByCbjiFwJstEMu_jtXbgofGBZNQIZgn33N5Jm00"}),"\n",(0,i.jsx)(t.h2,{id:"specification-and-example",children:"Specification and example"}),"\n",(0,i.jsxs)(t.p,{children:["The Credential Provider implements ",(0,i.jsx)(t.a,{href:"common-interfaces/overview",children:"Common Interfaces"}),".\nThere are no additional interfaces needed for the Credential Provider."]}),"\n",(0,i.jsxs)(t.p,{children:["The OpenAPI specification of the Credential Provider can be found here: ",(0,i.jsx)(t.a,{href:"/api/connector-credential-provider/",children:"Connector API - Credential Provider"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,r)=>{r.d(t,{a:()=>c});var i=r(67294);const n={},d=i.createContext(n);function c(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);