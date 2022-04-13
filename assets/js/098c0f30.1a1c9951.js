"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6540],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),y=r,c=d["".concat(p,".").concat(y)]||d[y]||m[y]||o;return n?a.createElement(c,i(i({ref:t},u),{},{components:n})):a.createElement(c,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91978:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return y},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var a=n(83117),r=n(80102),o=(n(67294),n(3905)),i=["components"],l={title:"Custom Types"},p=void 0,s={unversionedId:"custom-types",id:"version-5.1/custom-types",title:"Custom Types",description:"You can define custom types by extending Type abstract class. It has several optional methods:",source:"@site/versioned_docs/version-5.1/custom-types.md",sourceDirName:".",slug:"/custom-types",permalink:"/docs/custom-types",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.1/custom-types.md",tags:[],version:"5.1",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1649868556,formattedLastUpdatedAt:"4/13/2022",frontMatter:{title:"Custom Types"},sidebar:"docs",previous:{title:"Composite Primary Keys",permalink:"/docs/composite-keys"},next:{title:"Embeddables",permalink:"/docs/embeddables"}},u={},m=[{value:"Advanced example - PointType and WKT",id:"advanced-example---pointtype-and-wkt",level:2},{value:"Types provided by MikroORM",id:"types-provided-by-mikroorm",level:2},{value:"ArrayType",id:"arraytype",level:3},{value:"BigIntType",id:"biginttype",level:3},{value:"BlobType",id:"blobtype",level:3},{value:"JsonType",id:"jsontype",level:3},{value:"DateType",id:"datetype",level:3},{value:"TimeType",id:"timetype",level:3}],d={toc:m};function y(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can define custom types by extending ",(0,o.kt)("inlineCode",{parentName:"p"},"Type")," abstract class. It has several optional methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"convertToDatabaseValue(value: any, platform: Platform): any")),(0,o.kt)("p",{parentName:"li"},"Converts a value from its JS representation to its database representation of this type. By default returns unchanged ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"convertToJSValue(value: any, platform: Platform): any")),(0,o.kt)("p",{parentName:"li"},"Converts a value from its database representation to its JS representation of this type. By default returns unchanged ",(0,o.kt)("inlineCode",{parentName:"p"},"value"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"toJSON(value: any, platform: Platform): any")),(0,o.kt)("p",{parentName:"li"},"Converts a value from its JS representation to its serialized JSON form of this type. By default uses the runtime value.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"getColumnType(prop: EntityProperty, platform: Platform): string")),(0,o.kt)("p",{parentName:"li"},"Gets the SQL declaration snippet for a field of this type. By default returns ",(0,o.kt)("inlineCode",{parentName:"p"},"columnType")," of given property.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"convertToDatabaseValueSQL(key: string, platform: Platform): string")),(0,o.kt)("p",{parentName:"li"},"Converts a value from its JS representation to its database representation of this type.\n",(0,o.kt)("em",{parentName:"p"},"(added in v4.4.2)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"convertToJSValueSQL(key: string, platform: Platform): string")),(0,o.kt)("p",{parentName:"li"},"Modifies the SQL expression (identifier, parameter) to convert to a JS value.\n",(0,o.kt)("em",{parentName:"p"},"(added in v4.4.2)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"compareAsType(): string")),(0,o.kt)("p",{parentName:"li"},"How should the raw database values be compared? Used in ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityComparator"),".Possible values: ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," | ",(0,o.kt)("inlineCode",{parentName:"p"},"number")," | ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," | ",(0,o.kt)("inlineCode",{parentName:"p"},"date")," | ",(0,o.kt)("inlineCode",{parentName:"p"},"any")," | ",(0,o.kt)("inlineCode",{parentName:"p"},"buffer")," | ",(0,o.kt)("inlineCode",{parentName:"p"},"array"),"."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Type, Platform, EntityProperty, ValidationError } from '@mikro-orm/core';\n\nexport class DateType extends Type<Date, string> {\n\n  convertToDatabaseValue(value: Date | string | undefined, platform: Platform): string {\n    if (value instanceof Date) {\n      return value.toISOString().substr(0, 10);\n    }\n\n    if (!value || value.toString().match(/^\\d{4}-\\d{2}-\\d{2}$/)) {\n      return value as string;\n    }\n\n    throw ValidationError.invalidType(DateType, value, 'JS');\n  }\n\n  convertToJSValue(value: Date | string | undefined, platform: Platform): Date {\n    if (!value || value instanceof Date) {\n      return value as Date;\n    }\n\n    const date = new Date(value);\n\n    if (date.toString() === 'Invalid Date') {\n      throw ValidationError.invalidType(DateType, value, 'database');\n    }\n\n    return date;\n  }\n\n  getColumnType(prop: EntityProperty, platform: Platform) {\n    return `date(${prop.length})`;\n  }\n\n}\n")),(0,o.kt)("p",null,"Then you can use this type when defining your entity properties:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nexport class FooBar {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  name!: string;\n\n  @Property({ type: DateType, length: 3 })\n  born?: Date;\n\n}\n")),(0,o.kt)("p",null,"If our type implementation is stateful, e.g. if we want the type to behave differently for each property, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"customType")," option and provide an instance of the type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@Property({ customType: new MyDateType('DD-MM-YYYY') })\nborn?: string;\n")),(0,o.kt)("h2",{id:"advanced-example---pointtype-and-wkt"},"Advanced example - PointType and WKT"),(0,o.kt)("p",null,"In this example we will combine mapping values via database as well as during runtime."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Point type is part of the Spatial extension of MySQL and enables you to store\na single location in a coordinate space by using x and y coordinates. You can use\nthe Point type to store a longitude/latitude pair to represent a geographic location.")),(0,o.kt)("p",null,"First let's define the ",(0,o.kt)("inlineCode",{parentName:"p"},"Point")," class that will be used to represent the value during runtime:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export class Point {\n\n  constructor(\n    public latitude: number,\n    public longitude: number,\n  ) {\n  }\n\n}\n")),(0,o.kt)("p",null,"Then the mapping type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export class PointType extends Type<Point | undefined, string | undefined> {\n\n  convertToDatabaseValue(value: Point | undefined): string | undefined {\n    if (!value) {\n      return value;\n    }\n\n    return `point(${value.latitude} ${value.longitude})`;\n  }\n\n  convertToJSValue(value: string | undefined): Point | undefined {\n    const m = value?.match(/point\\((-?\\d+(\\.\\d+)?) (-?\\d+(\\.\\d+)?)\\)/i);\n\n    if (!m) {\n      return undefined;\n    }\n\n    return new Point(+m[1], +m[3]);\n  }\n\n  convertToJSValueSQL(key: string) {\n    return `ST_AsText(${key})`;\n  }\n\n  convertToDatabaseValueSQL(key: string) {\n    return `ST_PointFromText(${key})`;\n  }\n\n  getColumnType(): string {\n    return 'point';\n  }\n\n}\n")),(0,o.kt)("p",null,"Now let's define an entity:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@Entity()\nexport class Location {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property({ type: PointType })\n  point?: Point;\n\n}\n")),(0,o.kt)("p",null,"...and use it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const loc = new Location();\nloc.point = new Point(1.23, 4.56);\nawait em.persist(loc).flush();\nem.clear();\n\nconst loc1 = await em.findOneOrFail(Location, loc.id);\n\n// update it\nloc1.point = new Point(2.34, 9.87);\nawait em.flush();\n")),(0,o.kt)("p",null,"This will result in following queries:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"begin\ninsert into `location` (`point`) values (ST_PointFromText('point(1.23 4.56)'))\ncommit\n\nselect `e0`.*, ST_AsText(`e0`.point) as point from `location` as `e0` where `e0`.`id` = ? limit ?\n\nbegin\nupdate `location` set `point` = ST_PointFromText('point(2.34 9.87)') where `id` = ?\ncommit\n")),(0,o.kt)("p",null,"We do a 2-step conversion here. In the first step, we convert the Point object into a string representation before saving to the database (in the convertToDatabaseValue method) and back into an object\nafter fetching the value from the database (in the convertToJSValue method)."),(0,o.kt)("p",null,"The format of the string representation format is called Well-known text (WKT). The advantage of this format is, that it is both human readable and parsable by MySQL."),(0,o.kt)("p",null,"Internally, MySQL stores geometry values in a binary format that is not identical to the WKT format. So, we need to let MySQL transform the WKT representation into its internal format."),(0,o.kt)("p",null,"This is where the ",(0,o.kt)("inlineCode",{parentName:"p"},"convertToJSValueSQL")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"convertToDatabaseValueSQL")," methods come into play."),(0,o.kt)("p",null,"This methods wrap a sql expression (the WKT representation of the Point) into MySQL functions ST_PointFromText and ST_AsText which convert WKT strings to and from the internal format of MySQL."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When using DQL queries, the ",(0,o.kt)("inlineCode",{parentName:"p"},"convertToJSValueSQL")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"convertToDatabaseValueSQL")," methods\nonly apply to identification variables and path expressions in SELECT clauses. Expressions\nin WHERE clauses are not wrapped!")),(0,o.kt)("h2",{id:"types-provided-by-mikroorm"},"Types provided by MikroORM"),(0,o.kt)("p",null,"There are few types provided by MikroORM. All of them aim to provide similar experience among all the drivers, even if the particular feature is not supported out of box by the driver."),(0,o.kt)("p",null,"Since v5, we can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," map exported from the ",(0,o.kt)("inlineCode",{parentName:"p"},"core")," package. It contains a map of all mapped types provided by the ORM, allowing autocomplete."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Property, types } from '@mikro-orm/core';\n\n@Property({ type: types.bigint, nullable: true })\nlargeNumber?: string; // bigints are mapped to strings so we dont loose precision\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Same map is also exported shortcut ",(0,o.kt)("inlineCode",{parentName:"p"},"t"),".")),(0,o.kt)("p",null,"The map is defined as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const types = {\n  date: DateType,\n  time: TimeType,\n  datetime: DateTimeType,\n  bigint: BigIntType,\n  blob: BlobType,\n  array: ArrayType,\n  enumArray: EnumArrayType,\n  enum: EnumType,\n  json: JsonType,\n  integer: IntegerType,\n  smallint: SmallIntType,\n  tinyint: TinyIntType,\n  float: FloatType,\n  double: DoubleType,\n  boolean: BooleanType,\n  decimal: DecimalType,\n  string: StringType,\n  uuid: UuidType,\n  text: TextType,\n};\n")),(0,o.kt)("h3",{id:"arraytype"},"ArrayType"),(0,o.kt)("p",null,"In PostgreSQL and MongoDB, it uses native arrays, otherwise it concatenates the values into string separated by commas. This means that you can't use values that contain comma with the ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrayType")," (\nbut you can create custom array type that will handle this case, e.g. by using different separator)."),(0,o.kt)("p",null,"By default, array of strings is returned from the type. You can also have arrays of numbers or other data types - to do so, you will need to implement custom\n",(0,o.kt)("inlineCode",{parentName:"p"},"hydrate")," method that is used for converting the array values to the right type."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"ArrayType")," will be used automatically if ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"array")," (default behaviour\nof reflect-metadata) or ",(0,o.kt)("inlineCode",{parentName:"p"},"string[]")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"number[]")," (either manually or via ts-morph).\nIn case of ",(0,o.kt)("inlineCode",{parentName:"p"},"number[]")," it will automatically handle the conversion to numbers.\nThis means that the following examples would both have the ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrayType")," used\nautomatically (but with reflect-metadata we would have a string array for both\nunless we specify the type manually as `type: 'number[]')")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@Property({ type: ArrayType, nullable: true })\nstringArray?: string[];\n\n@Property({ type: new ArrayType(i => +i), nullable: true })\nnumericArray?: number[];\n")),(0,o.kt)("h3",{id:"biginttype"},"BigIntType"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"BigIntType")," to support ",(0,o.kt)("inlineCode",{parentName:"p"},"bigint"),"s. By default, it will represent the value as a ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@PrimaryKey({ type: BigIntType })\nid: string;\n")),(0,o.kt)("h3",{id:"blobtype"},"BlobType"),(0,o.kt)("p",null,"Blob type can be used to store binary data in the database."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"BlobType")," will be used automatically if you specify the type hint as ",(0,o.kt)("inlineCode",{parentName:"p"},"Buffer"),".\nThis means that the following example should work even without the explicit\n",(0,o.kt)("inlineCode",{parentName:"p"},"type: BlobType")," option (with both reflect-metadata and ts-morph providers).")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@Property({ type: BlobType, nullable: true })\nblob?: Buffer;\n")),(0,o.kt)("h3",{id:"jsontype"},"JsonType"),(0,o.kt)("p",null,"To store objects we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"JsonType"),". As some drivers are handling objects automatically and some don't, this type will handle the serialization in a driver independent way (calling ",(0,o.kt)("inlineCode",{parentName:"p"},"parse"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"stringify")," only when needed)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@Property({ type: JsonType, nullable: true })\nobject?: { foo: string; bar: number };\n")),(0,o.kt)("h3",{id:"datetype"},"DateType"),(0,o.kt)("p",null,"To store dates without time information, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"DateType"),". It does use ",(0,o.kt)("inlineCode",{parentName:"p"},"date"),"\ncolumn type and maps it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Date")," object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@Property({ type: DateType, nullable: true })\nborn?: Date;\n")),(0,o.kt)("h3",{id:"timetype"},"TimeType"),(0,o.kt)("p",null,"As opposed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"DateType"),", to store only the time information, we can use\n",(0,o.kt)("inlineCode",{parentName:"p"},"TimeType"),". It will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"time")," column type, the runtime type is string."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@Property({ type: TimeType, nullable: true })\nbornTime?: string;\n")))}y.isMDXComponent=!0}}]);