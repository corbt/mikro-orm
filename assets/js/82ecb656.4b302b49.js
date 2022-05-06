"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5456],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77955:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(83117),o=n(80102),i=(n(67294),n(3905)),a=["components"],l={title:"Smart query conditions"},c=void 0,u={unversionedId:"query-conditions",id:"version-2.7/query-conditions",title:"Smart query conditions",description:"When you want to make complex queries, you can easily end up with a lot of boilerplate code",source:"@site/versioned_docs/version-2.7/query-conditions.md",sourceDirName:".",slug:"/query-conditions",permalink:"/docs/2.7/query-conditions",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/query-conditions.md",tags:[],version:"2.7",lastUpdatedBy:"William W. Doyle",lastUpdatedAt:1651854038,formattedLastUpdatedAt:"5/6/2022",frontMatter:{title:"Smart query conditions"},sidebar:"version-2.7/docs",previous:{title:"Smart Nested Populate",permalink:"/docs/2.7/nested-populate"},next:{title:"Using QueryBuilder",permalink:"/docs/2.7/query-builder"}},s={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When you want to make complex queries, you can easily end up with a lot of boilerplate code\nfull of curly brackets:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, { $and: [\n  { id: { $in: [1, 2, 7] }, },\n  { id: { $nin: [3, 4] }, },\n  { id: { $gt: 5 }, },\n  { id: { $lt: 10 }, },\n  { id: { $gte: 7 }, },\n  { id: { $lte: 8 }, },\n  { id: { $ne: 9 }, },\n] });\n")),(0,i.kt)("p",null,"For AND condition with single field, you can also do this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, { \n  id: { \n    $in: [1, 2, 7],\n    $nin: [3, 4],\n    $gt: 5,\n    $lt: 10,\n    $gte: 7,\n    $lte: 8,\n    $ne: 9,\n  },\n});\n")),(0,i.kt)("p",null,"Another way to do this by including the operator in your keys:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, { $and: [\n  { 'id:in': [1, 2, 7] },\n  { 'id:nin': [3, 4] },\n  { 'id:gt': 5 },\n  { 'id:lt': 10 },\n  { 'id:gte': 7 },\n  { 'id:lte': 8 },\n  { 'id:ne': 9 },\n] });\n")),(0,i.kt)("p",null,"For comparison operators, you can also use their mathematical symbols:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, { $and: [\n  { 'id >': 5 },\n  { 'id <': 10 },\n  { 'id >=': 7 },\n  { 'id <=': 8 },\n  { 'id !=': 9 },\n] });\n")),(0,i.kt)("p",null,"There is also shortcut for ",(0,i.kt)("inlineCode",{parentName:"p"},"$in")," - simply provide array as value and it\nwill be converted automatically:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, { favouriteBook: [1, 2, 7] });\n")),(0,i.kt)("p",null,"For primary key lookup, you can provide the array directly to ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager.find()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const res = await orm.em.find(Author, [1, 2, 7]);\n")))}m.isMDXComponent=!0}}]);