"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[9767],{12262:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(85893),i=n(11151);const o={},s="Certbot",c={id:"certificate-key/protocols/acme/certbot",title:"Certbot",description:"Certbot can be used to issue and manage the certificates on manually administered servers. It allows requesting and downloading certificate from ACME enabled servers.",source:"@site/docs/10-certificate-key/07-protocols/02-acme/13-certbot.md",sourceDirName:"10-certificate-key/07-protocols/02-acme",slug:"/certificate-key/protocols/acme/certbot",permalink:"/docs/certificate-key/protocols/acme/certbot",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/07-protocols/02-acme/13-certbot.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kubernetes cert-manager",permalink:"/docs/certificate-key/protocols/acme/cert-manager"},next:{title:"IIS win-acme",permalink:"/docs/certificate-key/protocols/acme/win-acme"}},a={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"HTTP-01",id:"http-01",level:2},{value:"DNS-01",id:"dns-01",level:2},{value:"Revoke Certificate",id:"revoke-certificate",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"certbot",children:"Certbot"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://certbot.eff.org/",children:(0,r.jsx)(t.code,{children:"Certbot"})})," can be used to issue and manage the certificates on manually administered servers. It allows requesting and downloading certificate from ACME enabled servers."]}),"\n",(0,r.jsxs)(t.p,{children:["For more information about ",(0,r.jsx)(t.code,{children:"Certbot"}),", refer to the ",(0,r.jsx)(t.a,{href:"https://eff-certbot.readthedocs.io/en/stable/",children:"Certbot documentation"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["CZERTAINLY platform supports ACME implementation according to the ",(0,r.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc8555",children:"RFC 8555"}),". This guide shows, how you can use ",(0,r.jsx)(t.code,{children:"Certbot"})," to manage certificates using ACME protocol and certificate management services controlled by the platform."]}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.p,{children:["Before configuring ",(0,r.jsx)(t.code,{children:"Certbot"})," with CZERTAINLY, you need to have the following:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Certbot installed in the host server"}),"\n",(0,r.jsxs)(t.li,{children:["Configured at least one ",(0,r.jsx)(t.code,{children:"RA Profile"})," certificate service in CZERTAINLY"]}),"\n",(0,r.jsx)(t.li,{children:"Access to HTTP or DNS resources, that will be used to validate ACME challenges"}),"\n",(0,r.jsxs)(t.li,{children:["ACME protocol enabled according to the ",(0,r.jsx)(t.a,{href:"enable-acme",children:"Enable ACME"})]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["To install ",(0,r.jsx)(t.code,{children:"Certbot"}),", follow the ",(0,r.jsx)(t.a,{href:"https://certbot.eff.org/",children:"installation guide"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"http-01",children:"HTTP-01"}),"\n",(0,r.jsxs)(t.p,{children:["Issuing certificate using ",(0,r.jsx)(t.code,{children:"Certbot"})," for is an easy step. ",(0,r.jsx)(t.code,{children:"http-01"})," challenge type is considered by default for the request. We are going to use ",(0,r.jsx)(t.code,{children:"Apache"})," HTTP server as an example of the web server for which we would like to manage SSL/TLS certificate using ",(0,r.jsx)(t.code,{children:"Certbot"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Once the ",(0,r.jsx)(t.code,{children:"Apache"})," server is ready, you can use the following command to request certificate:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"certbot -n --apache ** \\\n  -d www.example.com \\\n  --server https://[domain]:[port]/api/v1/protocols/acme/raProfile/czertainly/directory\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In the example above, we are asking the ACME server represented by CZERTAINLY platform to issue SSL/TLS certificate for the domain ",(0,r.jsx)(t.code,{children:"www.example.com"}),". Once the certificate is successfully downloaded, ",(0,r.jsx)(t.code,{children:"Certbot"})," will automatically assign it to the ",(0,r.jsx)(t.code,{children:"Apache"})," configuration."]}),"\n",(0,r.jsxs)(t.p,{children:["More command line options can be found in the ",(0,r.jsx)(t.a,{href:"https://eff-certbot.readthedocs.io/en/stable/using.html#certbot-command-line-options",children:"Certbot documentation"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Note that URL of the server and host should be updated before running the previous command."})}),"\n",(0,r.jsxs)(t.p,{children:["The issued certificate is also included in the certificate inventory of the platform. From now on, the ",(0,r.jsx)(t.code,{children:"Certbot"})," will renew the certificate automatically."]}),"\n",(0,r.jsx)(t.h2,{id:"dns-01",children:"DNS-01"}),"\n",(0,r.jsxs)(t.p,{children:["To use ",(0,r.jsx)(t.code,{children:"dns-01"})," challenge type, ",(0,r.jsx)(t.code,{children:"Certbot"})," offers various DNS plugins based on the technology you would like to use. The list of DNS plugins supported by Certbot can be found at ",(0,r.jsx)(t.a,{href:"https://eff-certbot.readthedocs.io/en/stable/using.html#dns-plugins",children:"DNS Plugins"}),". In this example, we will see how to use ",(0,r.jsx)(t.code,{children:"Certbot"})," with ",(0,r.jsx)(t.a,{href:"https://www.isc.org/bind/",children:"Bind9 DNS"})," and ",(0,r.jsxs)(t.a,{href:"https://certbot-dns-rfc2136.readthedocs.io/en/stable/",children:[(0,r.jsx)(t.code,{children:"dns_rfc2136"})," plugin"]}),"."]}),"\n",(0,r.jsxs)(t.admonition,{type:"note",children:[(0,r.jsx)(t.p,{children:"The installation and configuration of the DNS resolver in out of scope of this guide. The dynamic DNS should support the configuration of so-called Transaction SIGnatures (TSIG) to sign the a request that is being sent to the DNS server. You can follow good tutorials with that topic:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://www.cyberciti.biz/faq/unix-linux-bind-named-configuring-tsig",children:"Bind Security: Transaction Signatures (TSIG) Configuration"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://tomthorp.me/blog/using-tsig-enable-secure-zone-transfers-between-bind-9x-servers",children:"Using TSIG to enable secure Zone Transfers between Bind 9.x servers"})}),"\n"]})]}),"\n",(0,r.jsxs)(t.p,{children:["Let's create a file called ",(0,r.jsx)(t.code,{children:"dns.ini"})," and insert the configuration of our DNS resolver including the TSIG secret:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"dns_rfc2136_server = <your DNS resolver IP address>\ndns_rfc2136_port = <your DNS resolver port>>\ndns_rfc2136_name = example.com\ndns_rfc2136_secret = <your DNS TSIG secret>\ndns_rfc2136_algorithm = <algorithm for the signatures>\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Once the the ",(0,r.jsx)(t.code,{children:"dns.ini"})," is created, you can request the certificate with the ",(0,r.jsx)(t.code,{children:"dns-01"})," challenge type validation using the following command:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"certbot certonly -n \\\n  -d www.example.com \\\n  --dns-rfc2136 \\\n  --dns-rfc2136-credentials dns.ini \\\n  --server https://[domain]:[port]/api/v1/protocols/acme/raProfile/czertainly/directory\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The issued certificate is also included in the certificate inventory of the platform. From now on, the ",(0,r.jsx)(t.code,{children:"Certbot"})," will renew the certificate automatically."]}),"\n",(0,r.jsx)(t.h2,{id:"revoke-certificate",children:"Revoke Certificate"}),"\n",(0,r.jsxs)(t.p,{children:["Certificate can be revoked using the ",(0,r.jsx)(t.code,{children:"Certbot"}),". To revoke certificate, run the following command:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"certbot revoke \\\n  --cert-name www.example.com  \\\n  --server https://[domain]:[port]/api/v1/protocols/acme/raProfile/czertainly/directory\n"})}),"\n",(0,r.jsx)(t.p,{children:"You can check the certificate status also in the certificate inventory of the platform, after it was successfully revoked."})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>s});var r=n(67294);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);