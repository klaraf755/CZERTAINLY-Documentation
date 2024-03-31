"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[3575],{95921:(e,s,n)=>{n.r(s),n.d(s,{GenTable:()=>h,assets:()=>c,contentTitle:()=>d,data:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>o,toc:()=>p,visible:()=>g});var r=n(85893),a=n(11151),t=n(67294);const i={},d="PAdES Signer Properties",o={id:"signing/ades-formats/pades-signer/pades",title:"PAdES Signer Properties",description:"See the Common Properties for configuration options of the AdES Signer.",source:"@site/docs/30-signing/05-ades-formats/10-pades-signer/02-pades.mdx",sourceDirName:"30-signing/05-ades-formats/10-pades-signer",slug:"/signing/ades-formats/pades-signer/pades",permalink:"/docs/signing/ades-formats/pades-signer/pades",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/30-signing/05-ades-formats/10-pades-signer/02-pades.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"B-level Properties",permalink:"/docs/signing/ades-formats/common-properties/blevel-properties"},next:{title:"PAdES Signer Sample Configuration",permalink:"/docs/signing/ades-formats/pades-signer/pades-sample"}},c={},l=[{property:"SIGNATURE_SIZE",description:(0,r.jsx)(r.Fragment,{children:"Configuration option for the signature size in case the default size is not enough for larger PDF files. You can set the custom signature size in bytes."}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"18944"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"ADD_VISIBLE_SIGNATURE",description:(0,r.jsxs)(r.Fragment,{children:["Include visible signature in the signed PDF file. For more information about the configuration options for visible signatures, see the section ",(0,r.jsx)("a",{href:"#visible-signature-properties",children:"Visible signature properties"})," below."]}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"false"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"REASON",description:(0,r.jsx)(r.Fragment,{children:"Sets the reason."}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"LOCATION",description:(0,r.jsx)(r.Fragment,{children:"Sets location (The CPU host name or physical location of the signing)."}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"CONTACT_INFO",description:(0,r.jsx)(r.Fragment,{children:"Sets the contact information."}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"SIGNER_NAME",description:(0,r.jsx)(r.Fragment,{children:"Sets the name of the signed entity."}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"SIGNATURE_FIELD_ID",description:(0,r.jsx)(r.Fragment,{children:"Sets a signature field id/name to place a signature into."}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})})}],g=[{property:"VISIBLE_SIGNATURE_PAGE",description:(0,r.jsx)(r.Fragment,{children:"Sets a page number where the signature field should be placed. The counting starts from 1 (one) for the first page of the document."}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"1"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--success",children:"YES"})})},{property:"VISIBLE_SIGNATURE_RECTANGLE",description:(0,r.jsxs)(r.Fragment,{children:["Sets location and size of the signature field. It contains four comma separated values ",(0,r.jsx)("span",{class:"badge badge--secondary",children:"X,Y,W,H"}),":",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"X"})," - Sets a upper left X coordinate of the signature field"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"Y"})," - Sets a upper left Y coordinate of the signature field"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"W"})," - Sets a width of the signature field"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("b",{children:"H"})," - Sets a height of the signature field"]})]})]}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"400,700,500,800"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--success",children:"YES"})})},{property:"VISIBLE_SIGNATURE_CUSTOM_IMAGE_BASE64",description:(0,r.jsx)(r.Fragment,{children:"Sets the custom image for signature field from Base64 encoded custom data."}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"VISIBLE_SIGNATURE_CUSTOM_IMAGE_PATH",description:(0,r.jsx)(r.Fragment,{children:"Sets the custom image for signature field from path."}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"NONE"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"VISIBLE_SIGNATURE_CUSTOM_IMAGE_MIME_TYPE",description:(0,r.jsx)(r.Fragment,{children:"Sets the MIME type of the custom image used for signature field."}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"image/png"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})})},{property:"VISIBLE_SIGNATURE_CUSTOM_IMAGE_RESIZE_TO_RECTANGLE",description:(0,r.jsx)(r.Fragment,{children:"Resize image to fit to rectangle specified for the signature field."}),default:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--secondary",children:"false"})}),mandatory:(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("span",{class:"badge badge--danger",children:"NO"})})}],h=({data:e})=>{const s={b:"b",td:"td",tr:"tr",...(0,a.a)()};return(0,r.jsx)(t.Fragment,{children:e.map(((e,n)=>(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.b,{children:e.property})}),(0,r.jsx)(s.td,{children:e.description}),(0,r.jsx)(s.td,{children:e.default}),(0,r.jsx)(s.td,{children:e.mandatory})]},n)))})},p=[{value:"Visible signature properties",id:"visible-signature-properties",level:2}];function m(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"pades-signer-properties",children:"PAdES Signer Properties"}),"\n",(0,r.jsx)(s.admonition,{type:"info",children:(0,r.jsxs)(s.p,{children:["See the ",(0,r.jsx)(s.a,{href:"../common-properties/basic-properties",children:"Common Properties"})," for configuration options of the AdES Signer."]})}),"\n",(0,r.jsx)(s.p,{children:"The implementation class of the PAdES Signer is:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"com.czertainly.signserver.module.pades.signer.PAdESSigner\n"})}),"\n",(0,r.jsx)(s.p,{children:"It contains the integration with the DSS framework and extends the Worker interface of the SignServer. If you want to use the PAdES Signer, you must specify this property. The PAdES Signer will check the following configuration properties."}),"\n","\n","\n","\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("th",{children:"Property"}),(0,r.jsx)("th",{children:"Description"}),(0,r.jsx)("th",{children:"Default Value"}),(0,r.jsx)("th",{children:"Mandatory"}),(0,r.jsx)("tbody",{children:(0,r.jsx)(h,{data:l})})]}),"\n",(0,r.jsx)(s.h2,{id:"visible-signature-properties",children:"Visible signature properties"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("th",{children:"Property"}),(0,r.jsx)("th",{children:"Description"}),(0,r.jsx)("th",{children:"Default Value"}),(0,r.jsx)("th",{children:"Mandatory"}),(0,r.jsx)("tbody",{children:(0,r.jsx)(h,{data:g})})]})]})}function x(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},11151:(e,s,n)=>{n.d(s,{a:()=>i});var r=n(67294);const a={},t=r.createContext(a);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}}}]);