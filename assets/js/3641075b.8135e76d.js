"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1693],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=o(n),c=r,b=u["".concat(d,".").concat(c)]||u[c]||p[c]||s;return n?a.createElement(b,l(l({ref:t},m),{},{components:n})):a.createElement(b,l({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<s;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(83117),r=n(67294),s=n(72389),l=n(89575),i=n(86010),d="tabItem_LplD";function o(e){var t,n,s,o=e.lazy,m=e.block,p=e.defaultValue,u=e.values,c=e.groupId,b=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=u?u:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.duplicates)(f,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(s=y[0])?void 0:s.props.value;if(null!==g&&!f.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,l.useTabGroupChoice)(),v=k.tabGroupChoices,E=k.setTabGroupChoices,T=(0,r.useState)(g),x=T[0],N=T[1],A=[],w=(0,l.useScrollPositionBlocker)().blockElementScrollPositionUntilNextRender;if(null!=c){var P=v[c];null!=P&&P!==x&&f.some((function(e){return e.value===P}))&&N(P)}var C=function(e){var t=e.currentTarget,n=A.indexOf(t),a=f[n].value;a!==x&&(w(t),N(a),null!=c&&E(c,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=A.indexOf(e.currentTarget)+1;n=A[a]||A[0];break;case"ArrowLeft":var r=A.indexOf(e.currentTarget)-1;n=A[r]||A[A.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":m},b)},f.map((function(e){var t=e.value,n=e.label,s=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:function(e){return A.push(e)},onKeyDown:I,onFocus:C,onClick:C},s,{className:(0,i.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":x===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(y.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})}))))}function m(e){var t=(0,s.Z)();return r.createElement(o,(0,a.Z)({key:String(t)},e))}},15297:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(83117),r=n(80102),s=(n(67294),n(3905)),l=n(9877),i=n(58215),d=["components"],o={title:"Separating Concerns using Embeddables",sidebar_label:"Embeddables"},m=void 0,p={unversionedId:"embeddables",id:"version-5.0/embeddables",title:"Separating Concerns using Embeddables",description:"Support for embeddables was added in version 4.0",source:"@site/versioned_docs/version-5.0/embeddables.md",sourceDirName:".",slug:"/embeddables",permalink:"/docs/5.0/embeddables",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.0/embeddables.md",tags:[],version:"5.0",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1650298591,formattedLastUpdatedAt:"4/18/2022",frontMatter:{title:"Separating Concerns using Embeddables",sidebar_label:"Embeddables"},sidebar:"docs",previous:{title:"Custom Types",permalink:"/docs/5.0/custom-types"},next:{title:"Defining Entities via EntitySchema",permalink:"/docs/5.0/entity-schema"}},u={},c=[{value:"Initializing embeddables",id:"initializing-embeddables",level:2},{value:"Column Prefixing",id:"column-prefixing",level:2},{value:"Storing embeddables as objects",id:"storing-embeddables-as-objects",level:2},{value:"Array of embeddables",id:"array-of-embeddables",level:2},{value:"Nested embeddables",id:"nested-embeddables",level:2},{value:"Polymorphic embeddables",id:"polymorphic-embeddables",level:2}],b={toc:c};function y(e){var t=e.components,n=(0,r.Z)(e,d);return(0,s.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Support for embeddables was added in version 4.0")),(0,s.kt)("p",null,"Embeddables are classes which are not entities themselves, but are embedded in\nentities and can also be queried. You'll mostly want to use them to reduce\nduplication or separating concerns. Value objects such as date range or address\nare the primary use case for this feature."),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Embeddables needs to be discovered just like regular entities, don't forget to\nadd them to the list of entities when initializing the ORM.")),(0,s.kt)("p",null,"Embeddables can contain properties with basic ",(0,s.kt)("inlineCode",{parentName:"p"},"@Property()")," mapping, nested\n",(0,s.kt)("inlineCode",{parentName:"p"},"@Embedded()")," properties or arrays of ",(0,s.kt)("inlineCode",{parentName:"p"},"@Embedded()")," properties. From version\n5.0 we can also use ",(0,s.kt)("inlineCode",{parentName:"p"},"@ManyToOne()")," properties."),(0,s.kt)("p",null,"For the purposes of this tutorial, we will assume that you have a ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," class in\nyour application and you would like to store an address in the ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," class. We will\nmodel the ",(0,s.kt)("inlineCode",{parentName:"p"},"Address")," class as an embeddable instead of simply adding the respective\ncolumns to the ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," class."),(0,s.kt)(l.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Embeddable, Embedded, Entity, PrimaryKey, Property } from '@mikro-orm/core';\n\n@Embeddable()\nexport class Address {\n\n  @Property()\n  street!: string;\n\n  @Property()\n  postalCode!: string;\n\n  @Property()\n  city!: string;\n\n  @Property()\n  country!: string;\n\n}\n\n@Entity()\nexport class User {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Embedded(() => Address)\n  address!: Address;\n\n}\n"))),(0,s.kt)(i.Z,{value:"ts-morph",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Embeddable, Embedded, Entity, PrimaryKey, Property } from '@mikro-orm/core';\n\n@Embeddable()\nexport class Address {\n\n  @Property()\n  street!: string;\n\n  @Property()\n  postalCode!: string;\n\n  @Property()\n  city!: string;\n\n  @Property()\n  country!: string;\n\n}\n\n@Entity()\nexport class User {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Embedded()\n  address!: Address;\n\n}\n"))),(0,s.kt)(i.Z,{value:"entity-schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { EntitySchema } from '@mikro-orm/core';\n\nexport class Address {\n  street!: string;\n  postalCode!: string;\n  city!: string;\n  country!: string;\n}\n\nexport class User {\n  id!: number;\n  address!: Address;\n}\n\nexport const UserSchema = new EntitySchema({\n  class: User,\n  properties: {\n    id: { primary: true, type: 'number' },\n    address: { reference: 'embedded', entity: 'Address' },\n  },\n});\n\nexport const AddressSchema = new EntitySchema({\n  class: Address,\n  embeddable: true,\n  properties: {\n    street: { type: 'string' },\n    postalCode: { type: 'string' },\n    city: { type: 'string' },\n    country: { type: 'string' },\n  },\n});\n")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"When using ReflectMetadataProvider, you might need to provide the class in decorator options:\n",(0,s.kt)("inlineCode",{parentName:"p"},"@Embedded(() => Address)")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"@Embedded({ entity: () => Address })"),".")),(0,s.kt)("p",null,"In terms of your database schema, MikroORM will automatically inline all columns from\nthe ",(0,s.kt)("inlineCode",{parentName:"p"},"Address")," class into the table of the ",(0,s.kt)("inlineCode",{parentName:"p"},"User")," class, just as if you had declared\nthem directly there."),(0,s.kt)("h2",{id:"initializing-embeddables"},"Initializing embeddables"),(0,s.kt)("p",null,"In case all fields in the embeddable are nullable, you might want to initialize the\nembeddable, to avoid getting a null value instead of the embedded object."),(0,s.kt)(l.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"@Embedded(() => Address)\naddress = new Address();\n"))),(0,s.kt)(i.Z,{value:"ts-morph",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"@Embedded()\naddress = new Address();\n"))),(0,s.kt)(i.Z,{value:"entity-schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"address: { reference: 'embedded', entity: 'Address', onCreate: () => new Address() },\n")))),(0,s.kt)("h2",{id:"column-prefixing"},"Column Prefixing"),(0,s.kt)("p",null,"By default, MikroORM names your columns by prefixing them, using the value object name."),(0,s.kt)("p",null,"Following the example above, your columns would be named as ",(0,s.kt)("inlineCode",{parentName:"p"},"address_street"),",\n",(0,s.kt)("inlineCode",{parentName:"p"},"address_postal_code"),"..."),(0,s.kt)("p",null,"You can change this behaviour to meet your needs by changing the ",(0,s.kt)("inlineCode",{parentName:"p"},"prefix")," attribute\nin the ",(0,s.kt)("inlineCode",{parentName:"p"},"@Embedded()")," notation."),(0,s.kt)("p",null,"The following example shows you how to set your prefix to ",(0,s.kt)("inlineCode",{parentName:"p"},"myPrefix_"),":"),(0,s.kt)(l.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"@Entity()\nexport class User {\n\n  @Embedded(() => Address, { prefix: 'myPrefix_' })\n  address!: Address;\n\n}\n"))),(0,s.kt)(i.Z,{value:"ts-morph",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"@Entity()\nexport class User {\n\n  @Embedded({ prefix: 'myPrefix_' })\n  address!: Address;\n\n}\n"))),(0,s.kt)(i.Z,{value:"entity-schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"address: { reference: 'embedded', entity: 'Address', prefix: 'myPrefix_' },\n")))),(0,s.kt)("p",null,"To have MikroORM drop the prefix and use the value object's property name directly,\nset ",(0,s.kt)("inlineCode",{parentName:"p"},"prefix: false"),":"),(0,s.kt)(l.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"@Embedded({ entity: () => Address, prefix: false })\naddress!: Address;\n"))),(0,s.kt)(i.Z,{value:"ts-morph",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"@Embedded({ prefix: false })\naddress!: Address;\n"))),(0,s.kt)(i.Z,{value:"entity-schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"@Entity()',title:'"./entities/User.ts"@Entity()'},"address: { reference: 'embedded', entity: 'Address', prefix: false },\n")))),(0,s.kt)("h2",{id:"storing-embeddables-as-objects"},"Storing embeddables as objects"),(0,s.kt)("p",null,"From MikroORM v4.2 we can also store the embeddable as an object instead of\ninlining its properties to the owing entity."),(0,s.kt)(l.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"@Embedded({ entity: () => Address, object: true })\naddress!: Address;\n"))),(0,s.kt)(i.Z,{value:"ts-morph",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"@Embedded({ object: true })\naddress!: Address;\n"))),(0,s.kt)(i.Z,{value:"entity-schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"address: { reference: 'embedded', entity: 'Address', object: true },\n")))),(0,s.kt)("p",null,"In SQL drivers, this will use a JSON column to store the value. "),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Only MySQL and PostgreSQL drivers support searching by JSON properties currently.")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"This part of documentation is highly inspired by ",(0,s.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-orm/en/latest/tutorials/embeddables.html"},"doctrine tutorial"),"\nas the behaviour here is pretty much the same.")),(0,s.kt)("h2",{id:"array-of-embeddables"},"Array of embeddables"),(0,s.kt)("p",null,"Embedded arrays are always stored as JSON. It is possible to use them inside\nnested embeddables. "),(0,s.kt)(l.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"@Embedded(() => Address, { array: true })\naddresses: Address[] = [];\n"))),(0,s.kt)(i.Z,{value:"ts-morph",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"@Embedded()\naddresses: Address[] = [];\n"))),(0,s.kt)(i.Z,{value:"entity-schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="./entities/User.ts"',title:'"./entities/User.ts"'},"address: { reference: 'embedded', entity: 'Address', onCreate: () => [], array: true },\n")))),(0,s.kt)("h2",{id:"nested-embeddables"},"Nested embeddables"),(0,s.kt)("p",null,"Starting with v4.4, we can also nest embeddables, both in inline mode and object mode:"),(0,s.kt)(l.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Embeddable, Embedded, Entity, PrimaryKey, Property } from '@mikro-orm/core';\n\n@Entity()\nexport class User {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  @Embedded(() => Profile, { object: true, nullable: true })\n  profile?: Profile;\n\n}\n\n@Embeddable()\nexport class Profile {\n\n  @Property()\n  username: string;\n\n  @Embedded(() => Identity)\n  identity: Identity;\n\n  constructor(username: string, identity: Identity) {\n    this.username = username;\n    this.identity = identity;\n  }\n\n}\n\n@Embeddable()\nexport class Identity {\n\n  @Property()\n  email: string;\n\n  constructor(email: string) {\n    this.email = email;\n  }\n\n}\n"))),(0,s.kt)(i.Z,{value:"ts-morph",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Embeddable, Embedded, Entity, PrimaryKey, Property } from '@mikro-orm/core';\n\n@Entity()\nexport class User {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  @Embedded({ object: true })\n  profile?: Profile;\n\n}\n\n@Embeddable()\nexport class Profile {\n\n  @Property()\n  username: string;\n\n  @Embedded()\n  identity: Identity;\n\n  constructor(username: string, identity: Identity) {\n    this.username = username;\n    this.identity = identity;\n  }\n\n}\n\n@Embeddable()\nexport class Identity {\n\n  @Property()\n  email: string;\n\n  constructor(email: string) {\n    this.email = email;\n  }\n\n}\n"))),(0,s.kt)(i.Z,{value:"entity-schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { EntitySchema } from '@mikro-orm/core';\n\nexport class User {\n  id!: number;\n  name!: string;\n  profile?: Profile;\n}\n\nexport class Profile {\n  constructor(\n    public username: string,\n    public identity: Identity,\n  ) {}\n}\n\nexport class Identity {\n  constructor(public email: string) {}\n}\n\nexport const UserSchema = new EntitySchema({\n  class: User,\n  properties: {\n    id: { primary: true, type: 'number' },\n    name: { type: 'string' },\n    address: { reference: 'embedded', entity: 'Address' },\n  },\n});\n\nexport const ProfileSchema = new EntitySchema({\n  class: Profile,\n  embeddable: true,\n  properties: {\n    username: { type: 'string' },\n    identity: { reference: 'embedded', entity: 'Identity' },\n  },\n});\n\nexport const IdentitySchema = new EntitySchema({\n  class: Identity,\n  embeddable: true,\n  properties: {\n    email: { type: 'string' },\n  },\n});\n")))),(0,s.kt)("h2",{id:"polymorphic-embeddables"},"Polymorphic embeddables"),(0,s.kt)("p",null,"Since v5, it is also possible to use polymorphic embeddables. This means we\ncan define multiple classes for a single embedded property and the right one\nwill be used based on the discriminator column, similar to how single table\ninheritance work."),(0,s.kt)(l.Z,{groupId:"entity-def",defaultValue:"reflect-metadata",values:[{label:"reflect-metadata",value:"reflect-metadata"},{label:"ts-morph",value:"ts-morph"},{label:"EntitySchema",value:"entity-schema"}],mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"reflect-metadata",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Embeddable, Embedded, Entity, Enum, PrimaryKey, Property } from '@mikro-orm/core';\n\nexport enum AnimalType {\n  CAT,\n  DOG,\n}\n\n@Embeddable({ abstract: true, discriminatorColumn: 'type' })\nexport abstract class Animal {\n\n  @Enum(() => AnimalType)\n  type!: AnimalType;\n\n  @Property()\n  name!: string;\n\n}\n\n@Embeddable({ discriminatorValue: AnimalType.CAT })\nexport class Cat extends Animal {\n\n  @Property({ nullable: true })\n  canMeow?: boolean = true;\n\n  constructor(name: string) {\n    super();\n    this.type = AnimalType.CAT;\n    this.name = name;\n  }\n\n}\n\n@Embeddable({ discriminatorValue: AnimalType.DOG })\nexport class Dog extends Animal {\n\n  @Property({ nullable: true })\n  canBark?: boolean = true;\n\n  constructor(name: string) {\n    super();\n    this.type = AnimalType.DOG;\n    this.name = name;\n  }\n\n}\n\n@Entity()\nexport class Owner {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  @Embedded(() => [Cat, Dog])\n  pet!: Cat | Dog;\n\n}\n"))),(0,s.kt)(i.Z,{value:"ts-morph",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { Embeddable, Embedded, Entity, Enum, PrimaryKey, Property } from '@mikro-orm/core';\n\nexport enum AnimalType {\n  CAT,\n  DOG,\n}\n\n@Embeddable({ abstract: true, discriminatorColumn: 'type' })\nexport abstract class Animal {\n\n  @Enum()\n  type!: AnimalType;\n\n  @Property()\n  name!: string;\n\n}\n\n@Embeddable({ discriminatorValue: AnimalType.CAT })\nexport class Cat extends Animal {\n\n  @Property()\n  canMeow? = true;\n\n  constructor(name: string) {\n    super();\n    this.type = AnimalType.CAT;\n    this.name = name;\n  }\n\n}\n\n@Embeddable({ discriminatorValue: AnimalType.DOG })\nexport class Dog extends Animal {\n\n  @Property()\n  canBark? = true;\n\n  constructor(name: string) {\n    super();\n    this.type = AnimalType.DOG;\n    this.name = name;\n  }\n\n}\n\n@Entity()\nexport class Owner {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  @Embedded()\n  pet!: Cat | Dog;\n\n}\n"))),(0,s.kt)(i.Z,{value:"entity-schema",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"import { EntitySchema } from '@mikro-orm/core';\n\nexport enum AnimalType {\n  CAT,\n  DOG,\n}\n\nexport abstract class Animal {\n  type!: AnimalType;\n  name!: string;\n}\n\nexport class Cat extends Animal {\n  canMeow? = true;\n\n  constructor(name: string) {\n    super();\n    this.type = AnimalType.CAT;\n    this.name = name;\n  }\n}\n\nexport class Dog extends Animal {\n  canBark? = true;\n\n  constructor(name: string) {\n    super();\n    this.type = AnimalType.DOG;\n    this.name = name;\n  }\n}\n\n@Entity()\nexport class Owner {\n  id!: number;\n  name!: string;\n  pet!: Cat | Dog;\n}\n\nexport const AnimalSchema = new EntitySchema({\n  class: Animal,\n  embeddable: true,\n  abstract: true,\n  discriminatorColumn: 'type',\n  properties: {\n    username: { type: 'string' },\n    identity: { reference: 'embedded', entity: 'Identity' },\n  },\n});\n\nexport const CatSchema = new EntitySchema({\n  class: Cat,\n  embeddable: true,\n  extends: 'Animal',\n  discriminatorValue: AnimalType.CAT,\n  properties: {\n    canMeow: { type: 'boolean', nullable: true },\n  },\n});\n\nexport const DogSchema = new EntitySchema({\n  class: Dog,\n  embeddable: true,\n  extends: 'Animal',\n  discriminatorValue: AnimalType.DOG,\n  properties: {\n    canBark: { type: 'boolean', nullable: true },\n  },\n});\n\nexport const OwnerSchema = new EntitySchema({\n  class: Owner,\n  properties: {\n    id: { primary: true, type: 'number' },\n    name: { type: 'string' },\n    address: { reference: 'embedded', entity: 'Cat | Dog' },\n  },\n});\n")))))}y.isMDXComponent=!0}}]);