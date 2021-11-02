(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35255],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),g=o,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93858:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(74034),o=n(79973),i=(n(67294),n(3905)),a=["components"],c={title:"Debugging"},u=void 0,s={unversionedId:"debugging",id:"version-2.7/debugging",isDocsHomePage:!1,title:"Debugging",description:"For development purposes it might come handy to enable logging and debug mode:",source:"@site/versioned_docs/version-2.7/debugging.md",sourceDirName:".",slug:"/debugging",permalink:"/docs/2.7/debugging",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/debugging.md",tags:[],version:"2.7",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1635843405,formattedLastUpdatedAt:"11/2/2021",frontMatter:{title:"Debugging"},sidebar:"version-2.7/docs",previous:{title:"Metadata cache",permalink:"/docs/2.7/metadata-cache"},next:{title:"Schema generator",permalink:"/docs/2.7/schema-generator"}},l=[],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For development purposes it might come handy to enable logging and debug mode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"return MikroORM.init({\n  logger: console.log.bind(console),\n  debug: true,\n});\n")),(0,i.kt)("p",null,"By doing this ",(0,i.kt)("inlineCode",{parentName:"p"},"MikroORM")," will start using provided logger function to dump all queries:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[query-logger] SELECT `e0`.* FROM `author` AS `e0` WHERE `e0`.`name` = ? LIMIT ? [took 2 ms]\n[query-logger] START TRANSACTION [took 1 ms]\n[query-logger] INSERT INTO `author` (`name`, `email`, `created_at`, `updated_at`, `terms_accepted`) VALUES (?, ?, ?, ?, ?) [took 2 ms]\n[query-logger] COMMIT [took 2 ms]\n")),(0,i.kt)("p",null,"It is also useful for debugging problems with entity discovery, as you will see information\nabout every processed entity:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ORM entity discovery started\n- processing entity Author\n- using cached metadata for entity Author\n- processing entity Book\n- processing entity BookTag\n- entity discovery finished after 13 ms\n")))}d.isMDXComponent=!0}}]);