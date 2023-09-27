"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Quickstart",sidebar_position:2},i=void 0,l={unversionedId:"quickstart",id:"quickstart",title:"Quickstart",description:"Installation",source:"@site/docs/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/quickstart",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Quickstart",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/"},next:{title:"CI/CD",permalink:"/cicd"}},p={},c=[{value:"Installation",id:"installation",level:3},{value:"Plan",id:"plan",level:3},{value:"Input",id:"input",level:3},{value:"Run",id:"run",level:2}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Download the cli ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TruStacks/trustacks/releases"},"here")),(0,a.kt)("h3",{id:"plan"},"Plan"),(0,a.kt)("p",null,"Run the following command to build an action plan from your project source."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tsctl plan --name <plan_name> --source <path_to_source>\n")),(0,a.kt)("p",null,"This will generate a plan file in the working directory named ",(0,a.kt)("inlineCode",{parentName:"p"},"<plan_name>.plan")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"tsctl explain <plan_name>.plan")," to get a detailed description of the action plan")),(0,a.kt)("h3",{id:"input"},"Input"),(0,a.kt)("p",null,"Run the following command to generate stack inputs from the plan. The inputs contain credentials and parameters for your software delivery stack that will be used by actions in the action plan."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tsctl stack init --from-plan <plan_name>.plan\n")),(0,a.kt)("p",null,"This will generate an input file in the working directory named ",(0,a.kt)("inlineCode",{parentName:"p"},"inputs.env")," with unix exports and empty variables."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Do not modify the varaible names")),(0,a.kt)("h2",{id:"run"},"Run"),(0,a.kt)("p",null,"Action plans require ",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"docker"),"."),(0,a.kt)("p",null,"Run the following in a docker environment (local or CI/CD) from the root of your source."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tsctl run <plan_file> --source <path_to_source> --inputs <path_to_encrypted_inputs> --stages feedback\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"--stages")," option to run the complete plan")))}d.isMDXComponent=!0}}]);