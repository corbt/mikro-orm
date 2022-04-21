"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1073],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(y,o(o({ref:t},l),{},{components:n})):r.createElement(y,o({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28462:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(83117),i=n(80102),a=(n(67294),n(3905)),o=["components"],s={title:"Using native BigInt PKs (MySQL and PostgreSQL)"},p=void 0,c={unversionedId:"using-bigint-pks",id:"version-5.0/using-bigint-pks",title:"Using native BigInt PKs (MySQL and PostgreSQL)",description:"We can use BigIntType to support bigints. By default, it will represent the value as",source:"@site/versioned_docs/version-5.0/using-bigint-pks.md",sourceDirName:".",slug:"/using-bigint-pks",permalink:"/docs/5.0/using-bigint-pks",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.0/using-bigint-pks.md",tags:[],version:"5.0",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1650545014,formattedLastUpdatedAt:"4/21/2022",frontMatter:{title:"Using native BigInt PKs (MySQL and PostgreSQL)"},sidebar:"docs",previous:{title:"Using Multiple Schemas",permalink:"/docs/5.0/multiple-schemas"},next:{title:"Using AsyncLocalStorage",permalink:"/docs/5.0/async-local-storage"}},l={},u=[],m={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We can use ",(0,a.kt)("inlineCode",{parentName:"p"},"BigIntType")," to support ",(0,a.kt)("inlineCode",{parentName:"p"},"bigint"),"s. By default, it will represent the value as\na ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Entity, PrimaryKey, t } from '@mikro-orm/core';\n\n@Entity()\nexport class Book {\n\n  @PrimaryKey({ type: t.bigint })\n  id: string;\n\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"bigint")," can fit larger numbers than JavaScript number, for this reason it\nis mapped to a string. If we want to map it to a number anyway, we can implement\n",(0,a.kt)("a",{parentName:"p",href:"/docs/5.0/custom-types"},"custom type")," that will do so. Similarly, we can define one to\nuse the native ",(0,a.kt)("inlineCode",{parentName:"p"},"bigint")," type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export class NativeBigIntType extends BigIntType {\n\n  convertToJSValue(value: any): any {\n    if (!value) {\n      return value;\n    }\n\n    return BigInt(value);\n  }\n\n}\n\n@Entity()\nexport class Book {\n\n  @PrimaryKey({ type: NativeBigIntType })\n  id: bigint;\n\n}\n")))}d.isMDXComponent=!0}}]);