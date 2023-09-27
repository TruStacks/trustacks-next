"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,b=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4864:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"Build",slug:"/actions/npm/build"},o="NPM - Build",l={unversionedId:"actions/npm/build",id:"actions/npm/build",title:"Build",description:"The build action creates a package build from the npm build command.",source:"@site/docs/actions/npm/build.md",sourceDirName:"actions/npm",slug:"/actions/npm/build",permalink:"/actions/npm/build",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/actions/npm/build.md",tags:[],version:"current",frontMatter:{title:"Build",slug:"/actions/npm/build"},sidebar:"tutorialSidebar",previous:{title:"Run",permalink:"/actions/golangci-lint/run"},next:{title:"Test",permalink:"/actions/npm/test"}},p={},c=[{value:"Artifacts",id:"artifacts",level:3},{value:"Outputs:",id:"outputs",level:4}],u={toc:c},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"npm---build"},"NPM - Build"),(0,a.kt)("p",null,"The build action creates a package build from the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v6/commands/npm-build"},"npm build")," command."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"This action will utilize the command provided by the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," script in the project's ",(0,a.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v10/configuring-npm/package-json"},"package.json"),"."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," will be run before the build command to ensure that dependencies are installed beforehand.")),(0,a.kt)("h3",{id:"artifacts"},"Artifacts"),(0,a.kt)("h4",{id:"outputs"},"Outputs:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dist"),(0,a.kt)("td",{parentName:"tr",align:null},"dir"),(0,a.kt)("td",{parentName:"tr",align:null},"The built application package")))))}d.isMDXComponent=!0}}]);