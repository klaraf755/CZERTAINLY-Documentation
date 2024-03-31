"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[485],{39419:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=e(85893),r=e(11151);const i={},o="Entrust SAM Sample Configuration",a={id:"signing/sam-integration/entrust-sam/samples/sample-configuration",title:"Entrust SAM Sample Configuration",description:"The following is a sample configuration of the EntrustSAMCryptoToken:",source:"@site/docs/30-signing/30-sam-integration/07-entrust-sam/11-samples/02-sample-configuration.md",sourceDirName:"30-signing/30-sam-integration/07-entrust-sam/11-samples",slug:"/signing/sam-integration/entrust-sam/samples/sample-configuration",permalink:"/docs/signing/sam-integration/entrust-sam/samples/sample-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/30-sam-integration/07-entrust-sam/11-samples/02-sample-configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dynamic Configuration Signer",permalink:"/docs/signing/sam-integration/entrust-sam/dynamic-config-signer-properties"},next:{title:"Entrust SAM Sample OneTime Configuration",permalink:"/docs/signing/sam-integration/entrust-sam/samples/sample-onetime-configuration"}},u={},c=[];function E(n){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"entrust-sam-sample-configuration",children:"Entrust SAM Sample Configuration"}),"\n",(0,s.jsxs)(t.p,{children:["The following is a sample configuration of the ",(0,s.jsx)(t.code,{children:"EntrustSAMCryptoToken"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"# Type of worker\nWORKERGENID1.TYPE=PROCESSABLE\n\n# Name for other workers to reference this worker\nWORKERGENID1.NAME=EntrustSAMCryptoToken\n\n# EntrustSAMCryptoToken must only be used in conjunction with EntrustSAMCryptoWorker\nWORKERGENID1.IMPLEMENTATION_CLASS=com.czertainly.signserver.module.entrustsam.EntrustSAMCryptoWorker\nWORKERGENID1.CRYPTOTOKEN_IMPLEMENTATION_CLASS=com.czertainly.signserver.module.entrustsam.EntrustSAMCryptoToken\n\n# A name of a crypto token containing private key and user certificate. Will be used to authenticate crypto token to\n# Entrust SAM.\nWORKERGENID1.OTHER_SIGNERS=EntrustClientKeyStore\nWORKERGENID1.ENTRUST_CLIENT_AUTHENTICATION_KEY_ALIAS=ed1dcb7122e666b21c36b3a81d61910a864c9d64\n\n# Entrust SAM server url\nWORKERGENID1.ENTRUST_SAM_SERVER=https://213.121.187.216:10462\nWORKERGENID1.ENTRUST_TRUST_SELF_SIGNED=true\nWORKERGENID1.ENTRUST_CONNECTION_POOL_SIZE=20\n\n# Service to authenticate signing requests\nWORKERGENID1.SAD_PROVIDER_IMPLEMENTATION_CLASS=com.czertainly.signserver.module.entrustsam.sad.RestSAMSadProvider\nWORKERGENID1.SAD_PROVIDER_URL=https://entrustsam-simulator.czertainly.com\nWORKERGENID1.SAD_PROVIDER_AUTH_TYPE=BASIC\nWORKERGENID1.SAD_PROVIDER_USERNAME=******\nWORKERGENID1.SAD_PROVIDER_PASSWORD=******\n"})})]})}function m(n={}){const{wrapper:t}={...(0,r.a)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(E,{...n})}):E(n)}},11151:(n,t,e)=>{e.d(t,{a:()=>o});var s=e(67294);const r={},i=s.createContext(r);function o(n){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}}}]);