"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8017],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(67294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(83117),a=n(67294),o=n(72389),i=n(59553),l=n(86010),s="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.duplicates)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==g&&!y.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,i.useTabGroupChoice)(),v=b.tabGroupChoices,w=b.setTabGroupChoices,N=(0,a.useState)(g),T=N[0],R=N[1],O=[],I=(0,i.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=v[m];null!=C&&C!==T&&y.some((function(e){return e.value===C}))&&R(C)}var E=function(e){var t=e.currentTarget,n=O.indexOf(t),r=y[n].value;r!==T&&(I(t),R(r),null!=m&&w(m,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=O.indexOf(e.currentTarget)+1;n=O[r]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;n=O[a]||O[O.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},f)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(h.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},58477:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=n(9877),l=n(58215),s=["components"],u={title:"Entity References",sidebar_label:"Entity References and Reference<T> Wrapper"},c=void 0,p={unversionedId:"entity-references",id:"version-4.5/entity-references",title:"Entity References",description:"Every single entity relation is mapped to an entity reference. Reference is an entity that has",source:"@site/versioned_docs/version-4.5/entity-references.md",sourceDirName:".",slug:"/entity-references",permalink:"/docs/4.5/entity-references",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.5/entity-references.md",tags:[],version:"4.5",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1648221104,formattedLastUpdatedAt:"3/25/2022",frontMatter:{title:"Entity References",sidebar_label:"Entity References and Reference<T> Wrapper"},sidebar:"version-4.5/docs",previous:{title:"Identity Map and Request Context",permalink:"/docs/4.5/identity-map"},next:{title:"Collections",permalink:"/docs/4.5/collections"}},d={},m=[{value:"Better Type-safety with <code>Reference&lt;T&gt;</code> Wrapper",id:"better-type-safety-with-referencet-wrapper",level:2},{value:"Assigning to Reference Properties",id:"assigning-to-reference-properties",level:3},{value:"What is IdentifiedReference?",id:"what-is-identifiedreference",level:3}],f={toc:m};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Every single entity relation is mapped to an entity reference. Reference is an entity that has\nonly its identifier. This reference is stored in identity map so you will get the same object\nreference when fetching the same document from database."),(0,o.kt)("p",null,"You can call ",(0,o.kt)("inlineCode",{parentName:"p"},"await wrap(entity).init()")," to initialize the entity. This will trigger database call\nand populate itself, keeping the same reference in identity map. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = orm.em.getReference('...id...');\nconsole.log(author.id); // accessing the id will not trigger any db call\nconsole.log(author.isInitialized()); // false\nconsole.log(author.name); // undefined\n\nawait wrap(author).init(); // this will trigger db call\nconsole.log(author.isInitialized()); // true\nconsole.log(author.name); // defined\n")),(0,o.kt)("h2",{id:"better-type-safety-with-referencet-wrapper"},"Better Type-safety with ",(0,o.kt)("inlineCode",{parentName:"h2"},"Reference<T>")," Wrapper"),(0,o.kt)("p",null,"When you define ",(0,o.kt)("inlineCode",{parentName:"p"},"@ManyToOne")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"@OneToOne")," properties on your entity, TypeScript compiler\nwill think that desired entities are always loaded:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number;\n\n  @ManyToOne()\n  author!: Author;\n\n  constructor(author: Author) {\n    this.author = author;\n  }\n\n}\n\nconst book = await orm.em.findOne(Book, 1);\nconsole.log(book.author instanceof Author); // true\nconsole.log(book.author.isInitialized()); // false\nconsole.log(book.author.name); // undefined as `Author` is not loaded yet\n")),(0,o.kt)("p",null,"You can overcome this issue by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reference<T>")," wrapper. It simply wraps the entity,\ndefining ",(0,o.kt)("inlineCode",{parentName:"p"},"load(): Promise<T>")," method that will first lazy load the association if not already\navailable. You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"unwrap(): T")," method to access the underlying entity without loading\nit."),(0,o.kt)("p",null,"You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"load<K extends keyof T>(prop: K): Promise<T[K]>"),", which works like ",(0,o.kt)("inlineCode",{parentName:"p"},"load()"),"\nbut returns the specified property."),(0,o.kt)(i.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"import { Entity, IdentifiedReference, ManyToOne, PrimaryKey, Reference } from '@mikro-orm/core';\n\n@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number;\n\n  @ManyToOne(() => Author, { wrappedReference: true })\n  author: IdentifiedReference<Author>;\n\n  constructor(author: Author) {\n    this.author = Reference.create(author);\n  }\n\n}\n"))),(0,o.kt)(l.Z,{value:"ts-morph",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"import { Entity, IdentifiedReference, ManyToOne, PrimaryKey, Reference } from '@mikro-orm/core';\n\n@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number;\n\n  @ManyToOne()\n  author: IdentifiedReference<Author>;\n\n  constructor(author: Author) {\n    this.author = Reference.create(author);\n  }\n\n}\n"))),(0,o.kt)(l.Z,{value:"entity-schema",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"export interface IBook {\n  id: number;\n  author: IdentifiedReference<Author>;\n}\n\nexport const Book = new EntitySchema<IBook>({\n  name: 'Book',\n  properties: {\n    id: { type: Number, primary: true },\n    author: { entity: () => Author, wrappedReference: true },\n  },\n});\n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const book = await orm.em.findOne(Book, 1);\nconsole.log(book.author instanceof Reference); // true\nconsole.log(book.author.isInitialized()); // false\nconsole.log(book.author.name); // type error, there is no `name` property\nconsole.log(book.author.unwrap().name); // undefined as author is not loaded\nconsole.log((await book.author.load('name'))); // ok, loading the author first\nconsole.log((await book.author.load()).name); // ok, author already loaded\nconsole.log(book.author.unwrap().name); // ok, author already loaded\n")),(0,o.kt)("p",null,"There are also ",(0,o.kt)("inlineCode",{parentName:"p"},"getEntity()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"getProperty()")," methods that are synchronous getters,\nthat will first check if the wrapped entity is initialized, and if not, it will throw\nand error."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const book = await orm.em.findOne(Book, 1);\nconsole.log(book.author instanceof Reference); // true\nconsole.log(book.author.isInitialized()); // false\nconsole.log(book.author.getEntity()); // Error: Reference<Author> 123 not initialized\nconsole.log(book.author.getProperty('name')); // Error: Reference<Author> 123 not initialized\nconsole.log((await book.author.load('name'))); // ok, loading the author first\nconsole.log(book.author.getProperty('name')); // ok, author already loaded\n")),(0,o.kt)("p",null,"If you use different metadata provider than ",(0,o.kt)("inlineCode",{parentName:"p"},"TsMorphMetadataProvider"),"\n(e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"ReflectMetadataProvider"),"), you will also need to explicitly set ",(0,o.kt)("inlineCode",{parentName:"p"},"wrappedReference"),"\nparameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@ManyToOne(() => Author, { wrappedReference: true })\nauthor!: IdentifiedReference<Author>;\n")),(0,o.kt)("h3",{id:"assigning-to-reference-properties"},"Assigning to Reference Properties"),(0,o.kt)("p",null,"When you define the property as ",(0,o.kt)("inlineCode",{parentName:"p"},"Reference")," wrapper, you will need to assign the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reference"),"\nto it instead of the entity. You can create it via ",(0,o.kt)("inlineCode",{parentName:"p"},"Reference.create()")," factory, or use ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapped"),"\nparameter of ",(0,o.kt)("inlineCode",{parentName:"p"},"em.getReference()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const book = await orm.em.findOne(Book, 1);\nconst repo = orm.em.getRepository(Author);\n\nbook.author = repo.getReference(2, true);\n\n// same as:\nbook.author = Reference.create(repo.getReference(2));\nawait orm.em.flush();\n")),(0,o.kt)("p",null,"Another way is to use ",(0,o.kt)("inlineCode",{parentName:"p"},"toReference()")," method available as part of\n",(0,o.kt)("a",{parentName:"p",href:"/docs/4.5/entity-helper#wrappedentity-and-wrap-helper"},(0,o.kt)("inlineCode",{parentName:"a"},"WrappedEntity")," interface"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const author = new Author(...)\nbook.author = wrap(author).toReference();\n")),(0,o.kt)("p",null,"If the reference already exist, you can also re-assign to it via ",(0,o.kt)("inlineCode",{parentName:"p"},"set()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"book.author.set(new Author(...));\n")),(0,o.kt)("h3",{id:"what-is-identifiedreference"},"What is IdentifiedReference?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IdentifiedReference")," is an intersection type that adds primary key property to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Reference"),"\ninterface. It allows to get the primary key from ",(0,o.kt)("inlineCode",{parentName:"p"},"Reference")," instance directly."),(0,o.kt)("p",null,"By default, we try to detect the PK by checking if a property with a known name exists.\nWe check for those in order: ",(0,o.kt)("inlineCode",{parentName:"p"},"_id"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"uuid"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," - with a way to manually set the property\nname via ",(0,o.kt)("inlineCode",{parentName:"p"},"PrimaryKeyProp")," symbol (",(0,o.kt)("inlineCode",{parentName:"p"},"[PrimaryKeyProp]?: 'foo';"),"). "),(0,o.kt)("p",null,"We can also override this via second generic type argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const book = await orm.em.findOne(Book, 1);\nconsole.log(book.author.id); // ok, returns the PK\n")),(0,o.kt)("p",null,"You can also have non-standard primary key:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"author: IdentifiedReference<Author, 'myPrimaryKey'>;\n\nconst book = await orm.em.findOne(Book, 1);\nconsole.log(book.author.myPrimaryKey); // ok, returns the PK\n")),(0,o.kt)("p",null,"For MongoDB, define the PK generic type argument as ",(0,o.kt)("inlineCode",{parentName:"p"},"'id' | '_id'")," to access both ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"ObjectId")," PK values:"),(0,o.kt)(i.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  _id!: ObjectId;\n\n  @SerializedPrimaryKey()\n  id!: string;\n\n  @ManyToOne(() => Author, { wrappedReference: true })\n  author!: IdentifiedReference<Author, 'id' | '_id'>;\n\n}\n"))),(0,o.kt)(l.Z,{value:"ts-morph",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  _id!: ObjectId;\n\n  @SerializedPrimaryKey()\n  id!: string;\n\n  @ManyToOne()\n  author!: IdentifiedReference<Author, 'id' | '_id'>;\n\n}\n"))),(0,o.kt)(l.Z,{value:"entity-schema",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"export interface IBook {\n  _id: ObjectId;\n  id: string;\n  author: IdentifiedReference<IAuthor, 'id' | '_id'>;\n}\n\nexport const Book = new EntitySchema<IBook>({\n  name: 'Book',\n  properties: {\n    _id: { type: 'ObjectId', primary: true },\n    id: { type: String, serializedPrimaryKey: true },\n    author: { entity: 'Author', wrappedReference: true },\n  },\n});\n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const book = await orm.em.findOne(Book, 1);\nconsole.log(book.author.id); // ok, returns string PK\nconsole.log(book.author._id); // ok, returns ObjectId PK\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"As opposed to ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityHelper.init()")," which always refreshes the entity, ",(0,o.kt)("inlineCode",{parentName:"p"},"Reference.load()"),"\nmethod will query the database only if the entity is not already loaded in Identity Map.")))}h.isMDXComponent=!0}}]);