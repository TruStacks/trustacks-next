"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[145],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},l="mdxType",y={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),l=p(n),m=o,f=l["".concat(c,".").concat(m)]||l[m]||y[m]||a;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[l]="string"==typeof t?t:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6701:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"Run",slug:"/actions/pytest/run"},i="Pytest - run",s={unversionedId:"actions/pytest/run",id:"actions/pytest/run",title:"Run",description:"The run action runs the test suite using pytest.",source:"@site/docs/actions/pytest/run.md",sourceDirName:"actions/pytest",slug:"/actions/pytest/run",permalink:"/actions/pytest/run",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/actions/pytest/run.md",tags:[],version:"current",frontMatter:{title:"Run",slug:"/actions/pytest/run"},sidebar:"tutorialSidebar",previous:{title:"Test",permalink:"/actions/npm/test"},next:{title:"Scan",permalink:"/actions/sonar-scanner/scan"}},c={},p=[],u={toc:p},l="wrapper";function y(t){let{components:e,...n}=t;return(0,o.kt)(l,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pytest---run"},"Pytest - run"),(0,o.kt)("p",null,"The run action runs the test suite using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/7.4.x/"},"pytest"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This action uses the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/7.4.x/reference/customize.html#pytest-ini"},(0,o.kt)("inlineCode",{parentName:"a"},"pytest.ini"))," in project root.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Configuration using ",(0,o.kt)("inlineCode",{parentName:"p"},"pyproject.yaml")," is not yet supported.")))}y.isMDXComponent=!0}}]);