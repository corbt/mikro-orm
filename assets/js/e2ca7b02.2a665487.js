"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4429],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22500:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),i=["components"],l={title:"Usage with Babel"},s=void 0,u={unversionedId:"usage-with-babel",id:"version-5.0/usage-with-babel",title:"Usage with Babel",description:"When compiling TS via babel, decorators are by default handled different implementation",source:"@site/versioned_docs/version-5.0/usage-with-babel.md",sourceDirName:".",slug:"/usage-with-babel",permalink:"/docs/5.0/usage-with-babel",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.0/usage-with-babel.md",tags:[],version:"5.0",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1650026711,formattedLastUpdatedAt:"4/15/2022",frontMatter:{title:"Usage with Babel"},sidebar:"docs",previous:{title:"Usage with Vanilla JS",permalink:"/docs/5.0/usage-with-js"},next:{title:"Usage with AdminJS",permalink:"/docs/5.0/usage-with-adminjs"}},p={},c=[],m={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When compiling TS via babel, decorators are by default handled different implementation\nthan what ",(0,a.kt)("inlineCode",{parentName:"p"},"tsc")," uses. To make the metadata extraction from decorators via Babel work,\nwe need to do use following plugins:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": [\n    "babel-plugin-transform-typescript-metadata",\n    ["@babel/plugin-proposal-decorators", { "legacy": true }],\n    ["@babel/plugin-proposal-class-properties", { "loose": true  }]\n  ]\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Make sure to install the plugins first: ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add -D babel-plugin-transform-typescript-metadata @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties"))),(0,a.kt)("p",null,"Lastly we need to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"BABEL_DECORATORS_COMPAT")," environment variable to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to\nadjust the return value of decorators. "),(0,a.kt)("p",null,"More information about this topic can be found here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mikro-orm/mikro-orm/issues/840"},"https://github.com/mikro-orm/mikro-orm/issues/840")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://jonahallibonetech.medium.com/next-js-9-mikroorm-eb6f6e08e1a1"},"https://jonahallibonetech.medium.com/next-js-9-mikroorm-eb6f6e08e1a1"))))}d.isMDXComponent=!0}}]);