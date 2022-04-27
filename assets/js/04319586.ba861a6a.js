"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[280],{3905:function(e,n,t){t.d(n,{Zo:function(){return g},kt:function(){return p}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),m=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=m(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=m(t),p=a,c=d["".concat(s,".").concat(p)]||d[p]||u[p]||i;return t?r.createElement(c,o(o({ref:n},g),{},{components:t})):r.createElement(c,o({ref:n},g))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},98688:function(e,n,t){t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),o=["components"],l={title:"Naming Strategy"},s=void 0,m={unversionedId:"naming-strategy",id:"version-5.0/naming-strategy",title:"Naming Strategy",description:"When mapping our entities to database tables and columns, their names will be defined by naming",source:"@site/versioned_docs/version-5.0/naming-strategy.md",sourceDirName:".",slug:"/naming-strategy",permalink:"/docs/5.0/naming-strategy",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.0/naming-strategy.md",tags:[],version:"5.0",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1651046409,formattedLastUpdatedAt:"4/27/2022",frontMatter:{title:"Naming Strategy"},sidebar:"docs",previous:{title:"Entity Generator",permalink:"/docs/5.0/entity-generator"},next:{title:"Property Validation",permalink:"/docs/5.0/property-validation"}},g={},u=[{value:"Naming Strategy in mongo driver",id:"naming-strategy-in-mongo-driver",level:2},{value:"Naming Strategy in SQL drivers",id:"naming-strategy-in-sql-drivers",level:2},{value:"NamingStrategy API",id:"namingstrategy-api",level:2},{value:"<code>NamingStrategy.getClassName(file: string, separator?: string): string</code>",id:"namingstrategygetclassnamefile-string-separator-string-string",level:4},{value:"<code>NamingStrategy.classToTableName(entityName: string): string</code>",id:"namingstrategyclasstotablenameentityname-string-string",level:4},{value:"<code>NamingStrategy.propertyToColumnName(propertyName: string): string</code>",id:"namingstrategypropertytocolumnnamepropertyname-string-string",level:4},{value:"<code>NamingStrategy.referenceColumnName(): string</code>",id:"namingstrategyreferencecolumnname-string",level:4},{value:"<code>NamingStrategy.joinColumnName(propertyName: string): string</code>",id:"namingstrategyjoincolumnnamepropertyname-string-string",level:4},{value:"<code>NamingStrategy.joinTableName(sourceEntity: string, targetEntity: string, propertyName: string): string</code>",id:"namingstrategyjointablenamesourceentity-string-targetentity-string-propertyname-string-string",level:4},{value:"<code>NamingStrategy.joinKeyColumnName(entityName: string, referencedColumnName?: string): string</code>",id:"namingstrategyjoinkeycolumnnameentityname-string-referencedcolumnname-string-string",level:4},{value:"<code>NamingStrategy.indexName(tableName: string, columns: string[], type: &#39;primary&#39; | &#39;foreign&#39; | &#39;unique&#39; | &#39;index&#39; | &#39;sequence&#39;): string</code>",id:"namingstrategyindexnametablename-string-columns-string-type-primary--foreign--unique--index--sequence-string",level:4},{value:"<code>NamingStrategy.aliasName(entityName: string, index: number): string</code>",id:"namingstrategyaliasnameentityname-string-index-number-string",level:4}],d={toc:u};function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When mapping our entities to database tables and columns, their names will be defined by naming\nstrategy. There are 3 basic naming strategies we can choose from:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"UnderscoreNamingStrategy")," - default of all SQL drivers"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MongoNamingStrategy")," - default of ",(0,i.kt)("inlineCode",{parentName:"li"},"MongoDriver")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EntityCaseNamingStrategy")," - uses unchanged entity and property names")),(0,i.kt)("p",null,"You can override this when initializing ORM. You can also provide our own naming strategy, just\nimplement ",(0,i.kt)("inlineCode",{parentName:"p"},"NamingStrategy")," interface and provide our implementation when bootstrapping ORM:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class MyCustomNamingStrategy implements NamingStrategy {\n  ...\n}\n\nconst orm = await MikroORM.init({\n  ...\n  namingStrategy: MyCustomNamingStrategy,\n  ...\n});\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can also extend ",(0,i.kt)("inlineCode",{parentName:"p"},"AbstractNamingStrategy")," which implements one method for we - ",(0,i.kt)("inlineCode",{parentName:"p"},"getClassName()"),"\nthat is used to map entity file name to class name.")),(0,i.kt)("h2",{id:"naming-strategy-in-mongo-driver"},"Naming Strategy in mongo driver"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MongoNamingStrategy")," will simply use all field names as they are defined. Collection names will\nbe translated into lower-cased dashed form:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MyCoolEntity")," will be translated into ",(0,i.kt)("inlineCode",{parentName:"p"},"my-cool-entity")," collection name."),(0,i.kt)("h2",{id:"naming-strategy-in-sql-drivers"},"Naming Strategy in SQL drivers"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MySqlDriver")," defaults to ",(0,i.kt)("inlineCode",{parentName:"p"},"UnderscoreNamingStrategy"),", which means our all our database tables and\ncolumns will be lower-cased and words divided by underscored:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `author` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\n  `created_at` datetime(3) DEFAULT NULL,\n  `updated_at` datetime(3) DEFAULT NULL,\n  `terms_accepted` tinyint(1) DEFAULT NULL,\n  `name` varchar(255) DEFAULT NULL,\n  `email` varchar(255) DEFAULT NULL,\n  `born` datetime DEFAULT NULL,\n  `favourite_book_id` int(11) DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n")),(0,i.kt)("h2",{id:"namingstrategy-api"},"NamingStrategy API"),(0,i.kt)("h4",{id:"namingstrategygetclassnamefile-string-separator-string-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"NamingStrategy.getClassName(file: string, separator?: string): string")),(0,i.kt)("p",null,"Return a name of the class based on its file name."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"namingstrategyclasstotablenameentityname-string-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"NamingStrategy.classToTableName(entityName: string): string")),(0,i.kt)("p",null,"Return a table name for an entity class."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"namingstrategypropertytocolumnnamepropertyname-string-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"NamingStrategy.propertyToColumnName(propertyName: string): string")),(0,i.kt)("p",null,"Return a column name for a property."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"namingstrategyreferencecolumnname-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"NamingStrategy.referenceColumnName(): string")),(0,i.kt)("p",null,"Return the default reference column name."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"namingstrategyjoincolumnnamepropertyname-string-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"NamingStrategy.joinColumnName(propertyName: string): string")),(0,i.kt)("p",null,"Return a join column name for a property."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"namingstrategyjointablenamesourceentity-string-targetentity-string-propertyname-string-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"NamingStrategy.joinTableName(sourceEntity: string, targetEntity: string, propertyName: string): string")),(0,i.kt)("p",null,"Return a join table name. This is used as default value for ",(0,i.kt)("inlineCode",{parentName:"p"},"pivotTable"),". "),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"namingstrategyjoinkeycolumnnameentityname-string-referencedcolumnname-string-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"NamingStrategy.joinKeyColumnName(entityName: string, referencedColumnName?: string): string")),(0,i.kt)("p",null,"Return the foreign key column name for the given parameters."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"namingstrategyindexnametablename-string-columns-string-type-primary--foreign--unique--index--sequence-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"NamingStrategy.indexName(tableName: string, columns: string[], type: 'primary' | 'foreign' | 'unique' | 'index' | 'sequence'): string")),(0,i.kt)("p",null,"Returns key/constraint name for given type. Some drivers might not support all\nthe types (e.g. mysql and sqlite enforce the PK name)."),(0,i.kt)("hr",null),(0,i.kt)("h4",{id:"namingstrategyaliasnameentityname-string-index-number-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"NamingStrategy.aliasName(entityName: string, index: number): string")),(0,i.kt)("p",null,"Returns alias name for given entity. The alias needs to be unique across the\nquery, which is by default ensured via appended index parameter. It is optional\nto use it as long as we ensure it will be unique."),(0,i.kt)("hr",null))}p.isMDXComponent=!0}}]);