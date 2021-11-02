(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[636],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(t),f=a,k=m["".concat(c,".").concat(f)]||m[f]||d[f]||i;return t?r.createElement(k,l(l({ref:n},s),{},{components:t})):r.createElement(k,l({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},51234:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=t(74034),a=t(79973),i=(t(67294),t(3905)),l=["components"],o={id:"knex.SchemaDifference",title:"Interface: SchemaDifference",sidebar_label:"SchemaDifference",custom_edit_url:null},c=void 0,p={unversionedId:"api/interfaces/knex.SchemaDifference",id:"api/interfaces/knex.SchemaDifference",isDocsHomePage:!1,title:"Interface: SchemaDifference",description:"knex.SchemaDifference",source:"@site/docs/api/interfaces/knex.SchemaDifference.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.SchemaDifference",permalink:"/docs/next/api/interfaces/knex.SchemaDifference",editUrl:null,tags:[],version:"current",frontMatter:{id:"knex.SchemaDifference",title:"Interface: SchemaDifference",sidebar_label:"SchemaDifference",custom_edit_url:null},sidebar:"API",previous:{title:"JoinOptions",permalink:"/docs/next/api/interfaces/knex.JoinOptions"},next:{title:"Table",permalink:"/docs/next/api/interfaces/knex.Table"}},s=[{value:"Properties",id:"properties",children:[{value:"changedTables",id:"changedtables",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"fromSchema",id:"fromschema",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"newNamespaces",id:"newnamespaces",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"newTables",id:"newtables",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"orphanedForeignKeys",id:"orphanedforeignkeys",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"removedNamespaces",id:"removednamespaces",children:[{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"removedTables",id:"removedtables",children:[{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3}],level:2}],d={toc:s};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../modules/knex"},"knex"),".SchemaDifference"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"changedtables"},"changedTables"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"changedTables"),": ",(0,i.kt)("a",{parentName:"p",href:"../modules/core#dictionary"},(0,i.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,i.kt)("a",{parentName:"p",href:"knex.TableDifference"},(0,i.kt)("inlineCode",{parentName:"a"},"TableDifference")),">"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/105dede/packages/knex/src/typings.ts#L96"},"packages/knex/src/typings.ts:96")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fromschema"},"fromSchema"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"fromSchema"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"DatabaseSchema")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/105dede/packages/knex/src/typings.ts#L100"},"packages/knex/src/typings.ts:100")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"newnamespaces"},"newNamespaces"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"newNamespaces"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/105dede/packages/knex/src/typings.ts#L94"},"packages/knex/src/typings.ts:94")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"newtables"},"newTables"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"newTables"),": ",(0,i.kt)("a",{parentName:"p",href:"../modules/core#dictionary"},(0,i.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"DatabaseTable"),">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/105dede/packages/knex/src/typings.ts#L95"},"packages/knex/src/typings.ts:95")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"orphanedforeignkeys"},"orphanedForeignKeys"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"orphanedForeignKeys"),": ",(0,i.kt)("a",{parentName:"p",href:"knex.ForeignKey"},(0,i.kt)("inlineCode",{parentName:"a"},"ForeignKey")),"[]"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/105dede/packages/knex/src/typings.ts#L99"},"packages/knex/src/typings.ts:99")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"removednamespaces"},"removedNamespaces"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"removedNamespaces"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Set"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/105dede/packages/knex/src/typings.ts#L98"},"packages/knex/src/typings.ts:98")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"removedtables"},"removedTables"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"removedTables"),": ",(0,i.kt)("a",{parentName:"p",href:"../modules/core#dictionary"},(0,i.kt)("inlineCode",{parentName:"a"},"Dictionary")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"DatabaseTable"),">"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/105dede/packages/knex/src/typings.ts#L97"},"packages/knex/src/typings.ts:97")))}m.isMDXComponent=!0}}]);