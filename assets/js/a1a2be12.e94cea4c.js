"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[392],{33904:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=t(85893),s=t(11151);const i={},r="Database control",o={id:"contributors/database",title:"Database control",description:"The platform is using Flyway as a version control for the database and all related migration scripts.",source:"@site/docs/60-contributors/03-database.md",sourceDirName:"60-contributors",slug:"/contributors/database",permalink:"/docs/contributors/database",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/60-contributors/03-database.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/docs/contributors/attributes/examples"},next:{title:"Access control",permalink:"/docs/contributors/access-control"}},c={},l=[{value:"Database changes rules",id:"database-changes-rules",level:2},{value:"Migration scripts naming conventions",id:"migration-scripts-naming-conventions",level:2},{value:"Database schema",id:"database-schema",level:2},{value:"Complex migrations using Java",id:"complex-migrations-using-java",level:2},{value:"Migration scripts location",id:"migration-scripts-location",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"database-control",children:"Database control"}),"\n",(0,a.jsxs)(n.p,{children:["The platform is using ",(0,a.jsx)(n.a,{href:"https://flywaydb.org/",children:"Flyway"})," as a version control for the database and all related migration scripts."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Flyway is an open-source database migration tool. It is used to manage the database schema and data.\nIt is applied from the ",(0,a.jsx)(n.code,{children:"Core"})," version ",(0,a.jsx)(n.code,{children:"2.0.3"})," and above."]})}),"\n",(0,a.jsxs)(n.p,{children:["To learn more about the Flyway, its concept, and how to start, visit the ",(0,a.jsx)(n.a,{href:"https://flywaydb.org/documentation/",children:"Flyway documentation"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"database-changes-rules",children:"Database changes rules"}),"\n",(0,a.jsx)(n.p,{children:"Because each contributor works independently on different features, we need to follow process when implementing database migrations and resolving any potential conflicts. To make sure that it works smoothly, you need to follow these rules:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Work on your own database copy or instance to not break any other contributor's code."}),"\n",(0,a.jsx)(n.li,{children:"Use your own branch to maintain code changes and database migration scripts. In case your work depends on the work of another contributor, work together in the same branch."}),"\n",(0,a.jsx)(n.li,{children:"You are responsible for all database migration scripts related to your changes, including the rollbacks in case of any errors."}),"\n",(0,a.jsx)(n.li,{children:"Follow naming conventions for the migration scripts."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"migration-scripts-naming-conventions",children:"Migration scripts naming conventions"}),"\n",(0,a.jsx)(n.p,{children:"Flyway recognizes integer numbers as version of the migration script. Increased number in the version means migration that should be applied, if not done yet.\nSQL migrations must comply with the following naming pattern:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:" Prefix            Separator            Suffix\n   |                   |                  |\n |[VUR]|[YYYYMMDDHHMM]|__|[description]|.sql|\n              |                |\n           Version        Description\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Prefix:"})," V for versioned, U for undo and R for repeatable migrations"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Version:"})," Version in the format YYYYMMDDHHMM, where YYYY represent current year, MM current month, DD current day, HH current hour, MM current minute (Not for repeatable migrations)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Separator"}),": __ (two underscores)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Description"}),": Underscores or spaces separate the words that describes the migration"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Suffix"}),": .sql"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"database-schema",children:"Database schema"}),"\n",(0,a.jsx)(n.p,{children:"The schema of the database is managed by the configuration of the Flyway and JPA.\nYou should not include the database schema in the migration scripts."}),"\n",(0,a.jsxs)(n.p,{children:["Database schema can be configured by the ",(0,a.jsx)(n.code,{children:"DB_SCHEMA"})," environment variable. Default value is ",(0,a.jsx)(n.code,{children:"core"}),". See the ",(0,a.jsx)(n.a,{href:"https://github.com/3KeyCompany/CZERTAINLY-Core/blob/develop/src/main/resources/application.properties",children:"Core properties"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"complex-migrations-using-java",children:"Complex migrations using Java"}),"\n",(0,a.jsxs)(n.p,{children:["In case the database migration cannot be expressed using the SQL or it is not easy to migrate the database using the SQL, Java-based migration can be implemented.\nFor more information, see ",(0,a.jsx)(n.a,{href:"https://flywaydb.org/documentation/concepts/migrations.html#java-based-migrations",children:"Flyway Java-based migrations"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"migration-scripts-location",children:"Migration scripts location"}),"\n",(0,a.jsxs)(n.p,{children:["All migration scripts must be saved in the ",(0,a.jsx)(n.code,{children:"src/main/resources/db/migration"})," directory."]}),"\n",(0,a.jsxs)(n.p,{children:["All Java-based migrations must be located in ",(0,a.jsx)(n.code,{children:"src/main/java/db/migration"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{a:()=>r});var a=t(67294);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}}}]);