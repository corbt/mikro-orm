(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3866],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,f=s["".concat(c,".").concat(m)]||s[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},15373:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),o=["components"],l={id:"knex.knex-1.onconflictquerybuilder",title:"Interface: OnConflictQueryBuilder<TRecord, TResult>",sidebar_label:"OnConflictQueryBuilder",custom_edit_url:null,hide_title:!0},c="Interface: OnConflictQueryBuilder<TRecord, TResult>",u={unversionedId:"api/interfaces/knex.knex-1.onconflictquerybuilder",id:"version-4.5/api/interfaces/knex.knex-1.onconflictquerybuilder",isDocsHomePage:!1,title:"Interface: OnConflictQueryBuilder<TRecord, TResult>",description:"knex.Knex.OnConflictQueryBuilder",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.onconflictquerybuilder.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.onconflictquerybuilder",permalink:"/docs/api/interfaces/knex.knex-1.onconflictquerybuilder",editUrl:null,tags:[],version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1635843405,formattedLastUpdatedAt:"11/2/2021",frontMatter:{id:"knex.knex-1.onconflictquerybuilder",title:"Interface: OnConflictQueryBuilder<TRecord, TResult>",sidebar_label:"OnConflictQueryBuilder",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"MySqlConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.mysqlconnectionconfig"},next:{title:"OracleDbConnectionConfig",permalink:"/docs/api/interfaces/knex.knex-1.oracledbconnectionconfig"}},d=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"ignore",id:"ignore",children:[],level:3},{value:"merge",id:"merge",children:[{value:"Parameters:",id:"parameters",children:[],level:4}],level:3}],level:2}],p={toc:d};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-onconflictquerybuildertrecord-tresult"},"Interface: OnConflictQueryBuilder<TRecord, TResult",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".OnConflictQueryBuilder"),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TRecord"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TResult"))))),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"ignore"},"ignore"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"ignore"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,i.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,i.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:456"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"merge"},"merge"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"merge"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"data?"),": ",(0,i.kt)("em",{parentName:"p"},"Readonly"),"<Partial<AnyOrUnknownToOther<",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#mayberawrecord"},(0,i.kt)("em",{parentName:"a"},"MaybeRawRecord")),"<TRecord",">",", {}",">",">",">","): ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,i.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"Readonly"),"<Partial<AnyOrUnknownToOther<",(0,i.kt)("a",{parentName:"td",href:"/docs/api/modules/knex.knex-1#mayberawrecord"},(0,i.kt)("em",{parentName:"a"},"MaybeRawRecord")),"<TRecord",">",", {}",">",">",">")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/classes/knex.knex-1.querybuilder"},(0,i.kt)("em",{parentName:"a"},"QueryBuilder")),"<TRecord, TResult",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:457"))}s.isMDXComponent=!0}}]);