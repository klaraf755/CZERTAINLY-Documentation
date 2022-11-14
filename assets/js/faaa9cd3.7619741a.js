"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[184],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},76021:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=["components"],o={},p="Initialization",s={unversionedId:"installation-guide/deployment/deployment-appliance/initialization",id:"installation-guide/deployment/deployment-appliance/initialization",title:"Initialization",description:"To make initial configuration of virtual appliance, you must log into virtual console using SSH and default credentials:",source:"@site/docs/03-installation-guide/03-deployment/06-deployment-appliance/03-initialization.md",sourceDirName:"03-installation-guide/03-deployment/06-deployment-appliance",slug:"/installation-guide/deployment/deployment-appliance/initialization",permalink:"/docs/installation-guide/deployment/deployment-appliance/initialization",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/installation-guide/deployment/deployment-appliance/overview"},next:{title:"Operations",permalink:"/docs/installation-guide/deployment/deployment-appliance/operations"}},u={},d=[{value:"Change hostname and networking parameters",id:"change-hostname-and-networking-parameters",level:2},{value:"Update system and packages",id:"update-system-and-packages",level:2},{value:"Prepare configuration values",id:"prepare-configuration-values",level:2},{value:"Prepare TLS configuration",id:"prepare-tls-configuration",level:2},{value:"Deploy CZERTAINLY",id:"deploy-czertainly",level:2}],c={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"initialization"},"Initialization"),(0,i.kt)("p",null,"To make initial configuration of virtual appliance, you must log into virtual console using SSH and default credentials:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"username"),": czertainly"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"password"),": newgenerationtrustcare")),(0,i.kt)("admonition",{title:"Change default credentials",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The default credentials for the virtual appliance should be changed by the user.")),(0,i.kt)("p",null,"The following steps need to be done to initialize the virtual appliance:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Change hostname and networking parameters (if needed)"),(0,i.kt)("li",{parentName:"ol"},"Update the system"),(0,i.kt)("li",{parentName:"ol"},"Prepare configuration and prepare server certificate sign request"),(0,i.kt)("li",{parentName:"ol"},"Deploy CZERTAINLY")),(0,i.kt)("h2",{id:"change-hostname-and-networking-parameters"},"Change hostname and networking parameters"),(0,i.kt)("p",null,"By default, virtual appliance is configured to use dynamically assigned IP addresses from DHCP server with hostname ",(0,i.kt)("inlineCode",{parentName:"p"},"czertainly"),", domain ",(0,i.kt)("inlineCode",{parentName:"p"},"local")," and no proxy applied. To change the networking configuration, execute the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -s czertainly-manager.sh changenet\n")),(0,i.kt)("admonition",{title:"Default networking configuration",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The default configuration may be useful for development and testing purposes. For production, it is recommended to adjust the setting and proxy configuration.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reboot the virtual appliance when asked before doing any other changes.")),(0,i.kt)("h2",{id:"update-system-and-packages"},"Update system and packages"),(0,i.kt)("p",null,"Ensure that you have the latest patches installed. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"apt")," to update list of Debian packages and upgrade:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt -y update && sudo apt -y upgrade\n")),(0,i.kt)("h2",{id:"prepare-configuration-values"},"Prepare configuration values"),(0,i.kt)("p",null,"The configuration values are the values that are applied for the Helm chart installation and upgrade operations.\nFor all available parameters, see ",(0,i.kt)("a",{parentName:"p",href:"../deployment-helm/configurable-parameters"},"Helm chart configurable parameters"),"."),(0,i.kt)("p",null,"There are few mandatory parameters that must be configured before installation. These are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"global.database.host")),(0,i.kt)("td",{parentName:"tr",align:null},"PostgreSQL server host IP address that should be set to IP address of the virtual appliance")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hostName")),(0,i.kt)("td",{parentName:"tr",align:null},"Current hostname including domain name, for example ",(0,i.kt)("inlineCode",{parentName:"td"},"czertainly.local"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ingress.enabled")),(0,i.kt)("td",{parentName:"tr",align:null},"Set to ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," to enable authenticated access to platform from outside the virtual appliance")))),(0,i.kt)("p",null,"Optionally, configure proxy settings:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"global.httpProxy")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"http")," proxy")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"global.httpsProxy")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"https")," proxy")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"global.noProxy")),(0,i.kt)("td",{parentName:"tr",align:null},"Resources that should not use proxy")))),(0,i.kt)("p",null,"Use your favorite editor to edit default values file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nano /home/czertainly/czertainly-values.yaml\n")),(0,i.kt)("admonition",{title:"CZERTAINLY Helm chart",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can also find parameters to update in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/tree/develop/charts/czertainly#configurable-parameters"},"Configurable parameters"),", part of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/tree/develop/charts/czertainly"},"CZERTAINLY Helm Chart")," git repository, that also contains ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/3KeyCompany/CZERTAINLY-Helm-Charts/blob/develop/charts/czertainly/values.yaml"},"sample values file"),".")),(0,i.kt)("h2",{id:"prepare-tls-configuration"},"Prepare TLS configuration"),(0,i.kt)("p",null,"The server certificate needs to be issued and configured to access the platform. It should be issued by trusted certification authority.\nCertificate signing request is prepared and should be submitted to CA. The certification authority is out of scope of this document."),(0,i.kt)("p",null,"To prepare the certificate signing request, edit the OpenSSL configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nano /home/czertainly/openssl.cnf\n")),(0,i.kt)("p",null,"Generate the CSR using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -s czertainly-manager.sh generatecsr\n")),(0,i.kt)("p",null,"The CSR and the private key will be stored in the following locations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/home/czertainly/czertainly.csr\n/home/czertainly/czertainly.key\n")),(0,i.kt)("p",null,"Once the server certificate is issued by the CA of your choice, it should be uploaded into the following location:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/home/czertainly/czertainly.crt\n")),(0,i.kt)("admonition",{title:"Certificate installation",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The server certificate will be installed during the first deployment of the CZERTAINLY. Certificate can be changed later. For more information about how to change the certificate in already deployed platform, see ",(0,i.kt)("a",{parentName:"p",href:"operations#import-tls-server-certificate"},"Import TLS server certificate"),".")),(0,i.kt)("h2",{id:"deploy-czertainly"},"Deploy CZERTAINLY"),(0,i.kt)("p",null,"Once the initial configuration is prepared, CZERTAINLY can be deployed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -s czertainly-manager.sh install \n")),(0,i.kt)("p",null,"During the installation process, all configured containers and images are downloaded.\nYou will be asked to enter username and password for private container repository. Enter the credential when you need to access private containers."),(0,i.kt)("p",null,"After successful installation, administrator web interface is available on address:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://[hostName]/administrator/\n")),(0,i.kt)("p",null,"where ",(0,i.kt)("inlineCode",{parentName:"p"},"hostName")," is the value configured in the previous step."))}m.isMDXComponent=!0}}]);