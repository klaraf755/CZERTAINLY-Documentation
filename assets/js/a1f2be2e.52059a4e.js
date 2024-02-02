"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[7299],{49528:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(85893),o=i(11151);const s={},r="SSH Configuration",a={id:"certificate-key/integration-guides/adcs/ssh-configuration",title:"SSH Configuration",description:"SSH is available for Linux and Windows platforms and allows PowerShell remoting.",source:"@site/docs/10-certificate-key/20-integration-guides/14-adcs/07-ssh-configuration.md",sourceDirName:"10-certificate-key/20-integration-guides/14-adcs",slug:"/certificate-key/integration-guides/adcs/ssh-configuration",permalink:"/docs/certificate-key/integration-guides/adcs/ssh-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/3KeyCompany/CZERTAINLY-Documentation/edit/documentation/docs/10-certificate-key/20-integration-guides/14-adcs/07-ssh-configuration.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WinRM Configuration",permalink:"/docs/certificate-key/integration-guides/adcs/winrm-configuration"},next:{title:"Firewall Configuration",permalink:"/docs/certificate-key/integration-guides/adcs/firewall-configuration"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation of the SSH service on Windows",id:"installation-of-the-ssh-service-on-windows",level:2},{value:"Limitations",id:"limitations",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"ssh-configuration",children:"SSH Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["SSH is available for Linux and Windows platforms and allows PowerShell remoting.\nSSH-based remoting doesn't support remote endpoint configuration and ",(0,t.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/powershell/scripting/learn/remoting/jea/overview",children:"Just Enough Administration (JEA)"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"SSH remoting creates a PowerShell host process on the target computer as an SSH subsystem. According to Microsoft, SSH will implement a general hosting model, similar to WinRM, to support endpoint configuration and JEA, however, it is not yet available and there is no ETA when it will be available."}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"There are couple of prerequisites that need to be met before the SSH remoting can be used:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"PowerShell 7 or higher must be installed on all computers"}),"\n",(0,t.jsx)(n.li,{children:"Windows Server 2019 or Windows 10 1809 or higher is required"}),"\n",(0,t.jsx)(n.li,{children:"You need local administrator rights on the computer you want to remote to"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"installation-of-the-ssh-service-on-windows",children:"Installation of the SSH service on Windows"}),"\n",(0,t.jsxs)(n.p,{children:["Follow the ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse",children:"official documentation"})," to install the SSH service on Windows. For more information on the Powershell remoting over SSH, see the ",(0,t.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/powershell/scripting/learn/remoting/ssh-remoting-in-powershell",children:"official documentation"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Install OpenSSH Server for Windows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:'Get-WindowsCapability -Online | ?{$_.Name -like "OpenSSH.Server*"} | Add-WindowsCapability -Online\n'})}),"\n",(0,t.jsx)(n.p,{children:"Open elevated PowerShell console and start the SSH service:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"Start-Service sshd\n\n# OPTIONAL but recommended:\nSet-Service -Name sshd -StartupType 'Automatic'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Edit the ",(0,t.jsx)(n.code,{children:"sshd_config"})," file located at ",(0,t.jsx)(n.code,{children:"$env:ProgramData\\ssh"})," and enable password and public key authentication:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"PasswordAuthentication yes\nPubkeyAuthentication yes\n"})}),"\n",(0,t.jsx)(n.p,{children:"Create the SSH subsystem that hosts a PowerShell process on the remote computer:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"Subsystem powershell c:/progra~1/powershell/7/pwsh.exe -sshs -nologo\n"})}),"\n",(0,t.jsx)(n.p,{children:"Restart the SSH service:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"Restart-Service sshd\n"})}),"\n",(0,t.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,t.jsx)(n.p,{children:"There are couple of limitations that need to be considered when using SSH remoting:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The sudo command doesn't work in a remote session to a Linux computer."}),"\n",(0,t.jsxs)(n.li,{children:["PowerShell remoting over SSH doesn't support Profiles and doesn't have access to ",(0,t.jsx)(n.code,{children:"$PROFILE"}),". Once in a session, you can load a profile by dot sourcing the profile with the full filepath. This isn't related to SSH profiles. You can configure the SSH server to use PowerShell as the default shell and to load a profile through SSH."]}),"\n",(0,t.jsx)(n.li,{children:"Prior to PowerShell 7.1, remoting over SSH didn't support second-hop remote sessions. This capability was limited to sessions using WinRM. PowerShell 7.1 allows Enter-PSSession and Enter-PSHostProcess to work from within any interactive remote session."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var t=i(67294);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);