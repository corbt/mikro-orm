(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93874],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||s[m]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59756:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(74034),i=n(79973),a=(n(67294),n(3905)),o=["components"],p={id:"core.InitOptions",title:"Interface: InitOptions<T, P>",sidebar_label:"InitOptions",custom_edit_url:null},l=void 0,c={unversionedId:"api/interfaces/core.InitOptions",id:"api/interfaces/core.InitOptions",isDocsHomePage:!1,title:"Interface: InitOptions<T, P>",description:"core.InitOptions",source:"@site/docs/api/interfaces/core.InitOptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.InitOptions",permalink:"/docs/next/api/interfaces/core.InitOptions",editUrl:null,tags:[],version:"current",frontMatter:{id:"core.InitOptions",title:"Interface: InitOptions<T, P>",sidebar_label:"InitOptions",custom_edit_url:null},sidebar:"API",previous:{title:"IndexOptions",permalink:"/docs/next/api/interfaces/core.IndexOptions"},next:{title:"LoadedCollection",permalink:"/docs/next/api/interfaces/core.LoadedCollection"}},d=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"orderBy",id:"orderby",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"populate",id:"populate",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"where",id:"where",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],s={toc:d};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../modules/core"},"core"),".InitOptions"),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"T"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"P")),(0,a.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,a.kt)("inlineCode",{parentName:"td"},"string``never"))))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"orderby"},"orderBy"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"orderBy"),": ",(0,a.kt)("a",{parentName:"p",href:"../modules/core#queryordermap"},(0,a.kt)("inlineCode",{parentName:"a"},"QueryOrderMap")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),">"," ","|"," ",(0,a.kt)("a",{parentName:"p",href:"../modules/core#queryordermap"},(0,a.kt)("inlineCode",{parentName:"a"},"QueryOrderMap")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),">","[]"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/105dede/packages/core/src/entity/Collection.ts#L404"},"packages/core/src/entity/Collection.ts:404")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"populate"},"populate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"populate"),": ",(0,a.kt)("a",{parentName:"p",href:"../modules/core#populate"},(0,a.kt)("inlineCode",{parentName:"a"},"Populate")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"P"),">"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/105dede/packages/core/src/entity/Collection.ts#L403"},"packages/core/src/entity/Collection.ts:403")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"where"},"where"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"where"),": ",(0,a.kt)("a",{parentName:"p",href:"../modules/core#filterquery"},(0,a.kt)("inlineCode",{parentName:"a"},"FilterQuery")),"<",(0,a.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/105dede/packages/core/src/entity/Collection.ts#L405"},"packages/core/src/entity/Collection.ts:405")))}u.isMDXComponent=!0}}]);