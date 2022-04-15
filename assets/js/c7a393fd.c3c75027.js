"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8827],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return t?a.createElement(h,s(s({ref:n},c),{},{components:t})):a.createElement(h,s({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},32396:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=t(83117),i=t(80102),r=(t(67294),t(3905)),s=["components"],o={title:"Inheritance Mapping"},l=void 0,p={unversionedId:"inheritance-mapping",id:"version-5.1/inheritance-mapping",title:"Inheritance Mapping",description:"Mapped Superclasses",source:"@site/versioned_docs/version-5.1/inheritance-mapping.md",sourceDirName:".",slug:"/inheritance-mapping",permalink:"/docs/inheritance-mapping",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.1/inheritance-mapping.md",tags:[],version:"5.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1650038387,formattedLastUpdatedAt:"4/15/2022",frontMatter:{title:"Inheritance Mapping"},sidebar:"docs",previous:{title:"Transactions and Concurrency",permalink:"/docs/transactions"},next:{title:"Cascading",permalink:"/docs/cascading"}},c={},d=[{value:"Mapped Superclasses",id:"mapped-superclasses",level:2},{value:"Single Table Inheritance",id:"single-table-inheritance",level:2},{value:"Using <code>discriminatorValue</code> instead of <code>discriminatorMap</code>",id:"using-discriminatorvalue-instead-of-discriminatormap",level:3},{value:"Explicit discriminator column",id:"explicit-discriminator-column",level:3},{value:"Design-time considerations",id:"design-time-considerations",level:3},{value:"Performance impact",id:"performance-impact",level:3},{value:"SQL Schema considerations",id:"sql-schema-considerations",level:3}],m={toc:d};function u(e){var n=e.components,t=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"mapped-superclasses"},"Mapped Superclasses"),(0,r.kt)("p",null,"A mapped superclass is an abstract or concrete class that provides persistent entity state and mapping information for its subclasses, but which is not itself an entity. Typically, the purpose of such\na mapped superclass is to define state and mapping information that is common to multiple entity classes."),(0,r.kt)("p",null,"Mapped superclasses, just as regular, non-mapped classes, can appear in the middle of an otherwise mapped inheritance hierarchy (through Single Table Inheritance)."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A mapped superclass cannot be an entity, it is not query-able and persistent relationships defined\nby a mapped superclass must be unidirectional (with an owning side only). This means that One-To-Many\nassociations are not possible on a mapped superclass at all. Furthermore Many-To-Many associations\nare only possible if the mapped superclass is only used in exactly one entity at the moment. For\nfurther support of inheritance, the single table inheritance features have to be used.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Also note that we can't use generics to define any relations. This means that we cannot have a generic type argument in the base entity that would be used as a target of some relation. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// do not use @Entity decorator on base classes (mapped superclasses)\n// we can also use @Entity({ abstract: true })\nexport abstract class Person {\n\n  @Property()\n  mapped1!: number;\n\n  @Property()\n  mapped2!: string;\n\n  @OneToOne()\n  toothbrush!: Toothbrush;\n\n  // ... more fields and methods\n}\n\n@Entity()\nexport class Employee extends Person {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  // ... more fields and methods\n\n}\n\n@Entity()\nexport class Toothbrush {\n\n  @PrimaryKey()\n  id!: number;\n\n  // ... more fields and methods\n\n}\n")),(0,r.kt)("p",null,"The DDL for the corresponding database schema would look something like this (this is for SQLite):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table `employee` (\n  `id` int unsigned not null auto_increment primary key,\n  `name` varchar(255) not null, `mapped1` integer not null,\n  `mapped2` varchar(255) not null,\n  `toothbrush_id` integer not null\n);\n")),(0,r.kt)("p",null,"As we can see from this DDL snippet, there is only a single table for the entity subclass. All the mappings from the mapped superclass were inherited to the subclass as if they had been defined on\nthat class directly."),(0,r.kt)("h2",{id:"single-table-inheritance"},"Single Table Inheritance"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Support for STI was added in version 4.0")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://martinfowler.com/eaaCatalog/singleTableInheritance.html"},"Single Table Inheritance"),"\nis an inheritance mapping strategy where all classes of a hierarchy are mapped to a single database table. In order to distinguish which row represents which type in the hierarchy a so-called\ndiscriminator column is used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity({\n  discriminatorColumn: 'discr',\n  discriminatorMap: { person: 'Person', employee: 'Employee' },\n})\nexport class Person {\n  // ...\n}\n\n@Entity()\nexport class Employee extends Person {\n  // ...\n}\n")),(0,r.kt)("p",null,"Things to note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"discriminatorColumn")," option must be specified on the topmost class that is part of the mapped entity hierarchy."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"discriminatorMap")," specifies which values of the discriminator column identify a row as being of a certain type. In the case above a value of ",(0,r.kt)("inlineCode",{parentName:"li"},"person")," identifies a row as being of type ",(0,r.kt)("inlineCode",{parentName:"li"},"Person"),"\nand ",(0,r.kt)("inlineCode",{parentName:"li"},"employee")," identifies a row as being of type\n",(0,r.kt)("inlineCode",{parentName:"li"},"Employee"),"."),(0,r.kt)("li",{parentName:"ul"},"All entity classes that are part of the mapped entity hierarchy (including the topmost class) should be specified in the ",(0,r.kt)("inlineCode",{parentName:"li"},"discriminatorMap"),". In the case above ",(0,r.kt)("inlineCode",{parentName:"li"},"Person")," class included."),(0,r.kt)("li",{parentName:"ul"},"We can use abstract class as the root entity - then the root class should not be part of the discriminator map"),(0,r.kt)("li",{parentName:"ul"},"If no discriminator map is provided, then the map is generated automatically. The automatically generated discriminator map contains the table names that would be otherwise used in case of regular\nentities.")),(0,r.kt)("h3",{id:"using-discriminatorvalue-instead-of-discriminatormap"},"Using ",(0,r.kt)("inlineCode",{parentName:"h3"},"discriminatorValue")," instead of ",(0,r.kt)("inlineCode",{parentName:"h3"},"discriminatorMap")),(0,r.kt)("p",null,"As noted above, the discriminator map can be auto-generated. In that case, we might want to control the tokens that will be used in the map. To do so, we can use\n",(0,r.kt)("inlineCode",{parentName:"p"},"discriminatorValue")," on the child entities:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity({\n  discriminatorColumn: 'discr',\n  discriminatorValue: 'person',\n})\nexport class Person {\n  // ...\n}\n\n@Entity({\n  discriminatorValue: 'employee',\n})\nexport class Employee extends Person {\n  // ...\n}\n")),(0,r.kt)("h3",{id:"explicit-discriminator-column"},"Explicit discriminator column"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"discriminatorColumn")," specifies the name of special column that will be used to define what type of class should given row be represented with. It will be defined automatically for us and it will\nstay hidden (it won't be hydrated as a regular property)."),(0,r.kt)("p",null,"On the other hand, it is perfectly fine to define the column explicitly. Doing so, we will be able to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"querying by the type, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"em.find(Person, { type: { $ne: 'employee' } }")),(0,r.kt)("li",{parentName:"ul"},"the column will be part of the serialized response")),(0,r.kt)("p",null,"Following example shows how we can define the discriminator explicitly, as well as a version where root entity is abstract class."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity({\n  discriminatorColumn: 'type',\n  discriminatorMap: { person: 'Person', employee: 'Employee' },\n})\nexport abstract class BasePerson {\n\n  @Enum()\n  type!: 'person' | 'employee';\n\n}\n\n@Entity()\nexport class Person extends BasePerson {\n  // ...\n}\n\n@Entity()\nexport class Employee extends Person {\n  // ...\n}\n")),(0,r.kt)("p",null,"If we wanted to use ",(0,r.kt)("inlineCode",{parentName:"p"},"discriminatorValue")," with abstract entities, we need to mark the entity as ",(0,r.kt)("inlineCode",{parentName:"p"},"abstract: true")," so it can be skipped from the discriminator map:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity({\n  discriminatorColumn: 'type',\n  abstract: true,\n})\nexport abstract class BasePerson {\n\n  @Enum()\n  type!: 'person' | 'employee';\n\n}\n\n@Entity({ discriminatorValue: 'person' })\nexport class Person extends BasePerson {\n  // ...\n}\n\n@Entity({ discriminatorValue: 'employee' })\nexport class Employee extends Person {\n  // ...\n}\n")),(0,r.kt)("h3",{id:"design-time-considerations"},"Design-time considerations"),(0,r.kt)("p",null,"This mapping approach works well when the type hierarchy is fairly simple and stable. Adding a new type to the hierarchy and adding fields to existing supertypes simply involves adding new columns to\nthe table, though in large deployments this may have an adverse impact on the index and column layout inside the database."),(0,r.kt)("h3",{id:"performance-impact"},"Performance impact"),(0,r.kt)("p",null,"This strategy is very efficient for querying across all types in the hierarchy or for specific types. No table joins are required, only a WHERE clause listing the type identifiers. In particular,\nrelationships involving types that employ this mapping strategy are very performant."),(0,r.kt)("h3",{id:"sql-schema-considerations"},"SQL Schema considerations"),(0,r.kt)("p",null,"For Single-Table-Inheritance to work in scenarios where we are using either a legacy database schema or a self-written database schema we have to make sure that all columns that are not in the root\nentity but in any of the different sub-entities has to allow null values. Columns that have NOT NULL constraints have to be on the root entity of the single-table inheritance hierarchy."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This part of documentation is highly inspired by ",(0,r.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-orm/en/latest/reference/inheritance-mapping.html"},"doctrine docs"),"\nas the behaviour here is pretty much the same.")))}u.isMDXComponent=!0}}]);