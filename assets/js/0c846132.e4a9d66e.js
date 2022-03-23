"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5525],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return y}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),y=i,m=c["".concat(l,".").concat(y)]||c[y]||u[y]||o;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},61529:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return y},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],s={title:"Defining entities"},l=void 0,p={unversionedId:"defining-entities",id:"version-2.7/defining-entities",title:"Defining entities",description:"Entities are simple javascript objects (so called POJO), decorated with @Entity decorator.",source:"@site/versioned_docs/version-2.7/defining-entities.md",sourceDirName:".",slug:"/defining-entities",permalink:"/docs/2.7/defining-entities",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-2.7/defining-entities.md",tags:[],version:"2.7",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1648053503,formattedLastUpdatedAt:"3/23/2022",frontMatter:{title:"Defining entities"},sidebar:"version-2.7/docs",previous:{title:"Installation & Usage",permalink:"/docs/2.7/installation"},next:{title:"Entity Manager",permalink:"/docs/2.7/entity-manager"}},d={},u=[{value:"Entity file names",id:"entity-file-names",level:2},{value:"Using BaseEntity",id:"using-baseentity",level:2},{value:"Note about SQL drivers and @PrimaryKey",id:"note-about-sql-drivers-and-primarykey",level:2}],c={toc:u};function y(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Entities are simple javascript objects (so called POJO), decorated with ",(0,o.kt)("inlineCode",{parentName:"p"},"@Entity")," decorator.\nNo real restrictions are made, you do not have to extend any base class, you are more than welcome\nto ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.7/entity-constructors"},"use entity constructors"),", just do not forget to specify primary key with\n",(0,o.kt)("inlineCode",{parentName:"p"},"@PrimaryKey")," decorator."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  _id: ObjectID;\n\n  @Property()\n  createdAt = new Date();\n\n  @Property({ onUpdate: () => new Date() })\n  updatedAt = new Date();\n\n  @Property()\n  title: string;\n\n  @ManyToOne() // when you provide correct type hint, ORM will read it for you\n  author: Author;\n\n  @ManyToOne({ entity: () => Publisher }) // or you can specify the entity as class reference or string name\n  publisher: Publisher;\n\n  @ManyToMany({ entity: () => BookTag, inversedBy: 'books' })\n  tags = new Collection<BookTag>(this);\n\n  constructor(title: string, author: Author) {\n    this.title = title;\n    this.author = author;\n  }\n\n}\n\nexport interface Book extends IEntity<string> { }\n")),(0,o.kt)("p",null,"You will need to extend Book's interface with ",(0,o.kt)("inlineCode",{parentName:"p"},"IEntity"),". The interface represents internal\nmethods added to your entity's prototype via ",(0,o.kt)("inlineCode",{parentName:"p"},"@Entity")," decorator."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"IEntity")," is generic interface, its type parameter depends on data type of normalized primary\nkey produced by used driver. SQL drivers usually use ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," and Mongo driver uses ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),".\nThis type default to union type ",(0,o.kt)("inlineCode",{parentName:"p"},"number | string"),". Keep in mind that you have to worry about\nthis only when you define your primary key as ",(0,o.kt)("inlineCode",{parentName:"p"},"_id")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),".")),(0,o.kt)("p",null,"As you can see, entity properties are decorated either with ",(0,o.kt)("inlineCode",{parentName:"p"},"@Property")," decorator, or with one\nof reference decorators: ",(0,o.kt)("inlineCode",{parentName:"p"},"@ManyToOne"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@OneToMany"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"@OneToOne")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@ManyToMany"),". "),(0,o.kt)("p",null,"Here is another example of ",(0,o.kt)("inlineCode",{parentName:"p"},"Author")," entity, that was referenced from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Book")," one:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./entities/Author.ts"',title:'"./entities/Author.ts"'},"@Entity()\nexport class Author {\n\n  @PrimaryKey()\n  _id: ObjectID;\n\n  @Property()\n  createdAt = new Date();\n\n  @Property({ onUpdate: () => new Date() })\n  updatedAt = new Date();\n\n  @Property()\n  name: string;\n\n  @Property()\n  email: string;\n\n  @Property()\n  age: number;\n\n  @Property()\n  termsAccepted = false;\n\n  @Property()\n  identities: string[];\n\n  @Property()\n  born: Date;\n\n  @OneToMany({ entity: () => Book, mappedBy: 'author' })\n  books = new Collection<Book>(this);\n\n  @ManyToOne()\n  favouriteBook: Book;\n\n  version: number;\n  versionAsString: string;\n\n  constructor(name: string, email: string) {\n    this.name = name;\n    this.email = email;\n  }\n\n}\n\nexport interface Author extends IEntity { }\n")),(0,o.kt)("p",null,"More information about how collections work can be found on ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.7/collections"},"collections page"),"."),(0,o.kt)("p",null,"If you want to define your entity in Vanilla JavaScript, take a look ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.7/usage-with-js"},"here"),"."),(0,o.kt)("h2",{id:"entity-file-names"},"Entity file names"),(0,o.kt)("p",null,"You are free to choose one of those formats for entity filename (for a ",(0,o.kt)("inlineCode",{parentName:"p"},"BookTag")," entity):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BookTag.ts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"BookTag.model.ts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"book-tag.ts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"book-tag.model.ts")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"book-tag.entity.ts"))),(0,o.kt)("p",null,"Entity name is inferred from the first part of file name before first dot occurs, so you can\nadd any suffix behind the dot, not just ",(0,o.kt)("inlineCode",{parentName:"p"},".model.ts")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".entity.ts"),". "),(0,o.kt)("h2",{id:"using-baseentity"},"Using BaseEntity"),(0,o.kt)("p",null,"You can define your own base entity with properties that you require on all entities, like\nprimary key and created/updated time. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you are initializing the ORM via ",(0,o.kt)("inlineCode",{parentName:"p"},"entities")," option, you need to specify all your\nbase entities as well.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./entities/BaseEntity.ts"',title:'"./entities/BaseEntity.ts"'},"export abstract class BaseEntity {\n\n  @PrimaryKey()\n  _id: ObjectID;\n\n  @Property()\n  createdAt = new Date();\n\n  @Property({ onUpdate: () => new Date() })\n  updatedAt = new Date();\n\n}\n")),(0,o.kt)("h2",{id:"note-about-sql-drivers-and-primarykey"},"Note about SQL drivers and @PrimaryKey"),(0,o.kt)("p",null,"All entities described above were defined with ",(0,o.kt)("inlineCode",{parentName:"p"},"_id: ObjectID")," primary key - those were Mongo\nentities. "),(0,o.kt)("p",null,"For SQL drivers, you will want to define your primary key as ",(0,o.kt)("inlineCode",{parentName:"p"},"id: number")," instead:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@PrimaryKey()\nid: number;\n")),(0,o.kt)("p",null,"With your entities set up, you can start ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.7/entity-manager"},"using entity manager")," and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/2.7/repositories"},"repositories")," as described in following sections."))}y.isMDXComponent=!0}}]);