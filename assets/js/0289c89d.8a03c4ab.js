"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[4206],{82251:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var r=i(85893),n=i(11151);const s={},o="Trigger",c={id:"certificate-key/concept-design/core-components/workflow/trigger",title:"Trigger",description:"Triggers are events that initiate a workflow. They are linked to rules and actions, determining how and when a workflow starts. Triggers can be time-based, event-based, or manually initiated, providing flexibility in how workflows are activated. By defining triggers, users can automate processes and ensure that workflows are executed in response to specific events or conditions.",source:"@site/docs/10-certificate-key/02-concept-design/04-core-components/24-workflow/10-trigger.md",sourceDirName:"10-certificate-key/02-concept-design/04-core-components/24-workflow",slug:"/certificate-key/concept-design/core-components/workflow/trigger",permalink:"/docs/certificate-key/concept-design/core-components/workflow/trigger",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/02-concept-design/04-core-components/24-workflow/10-trigger.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Action",permalink:"/docs/certificate-key/concept-design/core-components/workflow/action"},next:{title:"Certificate Management",permalink:"/docs/certificate-key/concept-design/modules/certificate-management"}},d={},a=[{value:"Trigger attributes",id:"trigger-attributes",level:2},{value:"Trigger types",id:"trigger-types",level:2},{value:"Examples",id:"examples",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"trigger",children:"Trigger"}),"\n",(0,r.jsx)(t.p,{children:"Triggers are events that initiate a workflow. They are linked to rules and actions, determining how and when a workflow starts. Triggers can be time-based, event-based, or manually initiated, providing flexibility in how workflows are activated. By defining triggers, users can automate processes and ensure that workflows are executed in response to specific events or conditions."}),"\n",(0,r.jsx)(t.p,{children:"Triggers are linking components that connect rules and actions, ensuring that the workflow is initiated when the defined conditions are met. They provide the starting point for the workflow execution, enabling the automation of tasks based on predefined criteria."}),"\n",(0,r.jsx)(t.h2,{id:"trigger-attributes",children:"Trigger attributes"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Attribute"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Trigger Name"})}),(0,r.jsx)(t.td,{children:"A unique name for the trigger."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Description"})}),(0,r.jsx)(t.td,{children:"A brief explanation of the trigger's purpose."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Type"})}),(0,r.jsx)(t.td,{children:"The type of trigger."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Event Resource"})}),(0,r.jsx)(t.td,{children:"The object or entity that contains events."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Event"})}),(0,r.jsx)(t.td,{children:"The specific event that initiates the trigger."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Ignore Trigger"})}),(0,r.jsx)(t.td,{children:"A flag to indicate if the trigger should ignore processing matched object."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Resource"})}),(0,r.jsx)(t.td,{children:"The object or entity to which the trigger applies."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Rules"})}),(0,r.jsx)(t.td,{children:"The rules associated with the trigger."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Actions"})}),(0,r.jsx)(t.td,{children:"The actions triggered by the trigger."})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"trigger-types",children:"Trigger types"}),"\n",(0,r.jsx)(t.p,{children:"Triggers can be classified into various types based on how they initiate a workflow. Each trigger type has specific attributes and behaviors that determine how the workflow is started."}),"\n",(0,r.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(t.p,{children:"We would like to illustrate the concept of triggers with a few examples:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Trigger to set certificate owner on newly discovered certificates having a specific common name:"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Trigger Name:"})," Set owner for all certificates with CN containing example.com to John Doe"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Description:"}),' This trigger sets the owner of all certificates with a common name containing "example.com" to "John Doe"']}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Type:"})," Event"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Event Resource:"})," Discovery"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Event:"})," Discovery Finished"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Ignore Trigger:"})," No"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Resource:"})," Certificate"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Rules:"})," ",(0,r.jsx)(t.code,{children:'Certificates with CN containing "example.com" and Public Key Algorithm is RSA'})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Actions:"})," ",(0,r.jsx)(t.code,{children:"Update owner and category"})]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>o});var r=i(67294);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);