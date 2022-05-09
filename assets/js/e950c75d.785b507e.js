"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8433],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},82927:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(83117),i=n(80102),o=(n(67294),n(3905)),r=["components"],s={title:"Working with Entity Manager",sidebar_label:"Entity Manager"},l=void 0,p={unversionedId:"entity-manager",id:"version-5.1/entity-manager",title:"Working with Entity Manager",description:"Persist and Flush",source:"@site/versioned_docs/version-5.1/entity-manager.md",sourceDirName:".",slug:"/entity-manager",permalink:"/docs/entity-manager",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.1/entity-manager.md",tags:[],version:"5.1",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1652074322,formattedLastUpdatedAt:"5/9/2022",frontMatter:{title:"Working with Entity Manager",sidebar_label:"Entity Manager"},sidebar:"docs",previous:{title:"Modeling Entity Relationships",permalink:"/docs/relationships"},next:{title:"Unit of Work",permalink:"/docs/unit-of-work"}},d={},u=[{value:"Persist and Flush",id:"persist-and-flush",level:2},{value:"Persisting and Cascading",id:"persisting-and-cascading",level:2},{value:"Fetching Entities with EntityManager",id:"fetching-entities-with-entitymanager",level:2},{value:"Conditions Object (<code>FilterQuery&lt;T&gt;</code>)",id:"conditions-object-filterqueryt",level:3},{value:"Using custom classes in <code>FilterQuery</code>",id:"using-custom-classes-in-filterquery",level:4},{value:"Mitigating <code>Type instantiation is excessively deep and possibly infinite.ts(2589)</code> error",id:"mitigating-type-instantiation-is-excessively-deep-and-possibly-infinitets2589-error",level:4},{value:"Searching by referenced entity fields",id:"searching-by-referenced-entity-fields",level:3},{value:"Fetching Partial Entities",id:"fetching-partial-entities",level:3},{value:"Fetching Paginated Results",id:"fetching-paginated-results",level:3},{value:"Handling Not Found Entities",id:"handling-not-found-entities",level:3},{value:"Using custom SQL fragments",id:"using-custom-sql-fragments",level:3},{value:"Disabling identity map and change set tracking",id:"disabling-identity-map-and-change-set-tracking",level:2},{value:"Type of Fetched Entities",id:"type-of-fetched-entities",level:2},{value:"Entity Repositories",id:"entity-repositories",level:2},{value:"Custom Property Ordering",id:"custom-property-ordering",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"persist-and-flush"},"Persist and Flush"),(0,o.kt)("p",null,"There are 2 methods we should first describe to understand how persisting works in MikroORM:\n",(0,o.kt)("inlineCode",{parentName:"p"},"em.persist()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"em.flush()"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"em.persist(entity)")," is used to mark new entities for future persisting.\nIt will make the entity managed by given ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager")," and once ",(0,o.kt)("inlineCode",{parentName:"p"},"flush")," will be called, it\nwill be written to the database. "),(0,o.kt)("p",null,"To understand ",(0,o.kt)("inlineCode",{parentName:"p"},"flush"),", lets first define what managed entity is: An entity is managed if\nit\u2019s fetched from the database (via ",(0,o.kt)("inlineCode",{parentName:"p"},"em.find()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"em.findOne()")," or via other managed entity)\nor registered as new through ",(0,o.kt)("inlineCode",{parentName:"p"},"em.persist()"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"em.flush()")," will go through all managed entities, compute appropriate change sets and\nperform according database queries. As an entity loaded from database becomes managed\nautomatically, we do not have to call persist on those, and flush is enough to update\nthem."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const book = await em.findOne(Book, 1);\nbook.title = 'How to persist things...';\n\n// no need to persist `book` as its already managed by the EM\nawait em.flush();\n")),(0,o.kt)("h2",{id:"persisting-and-cascading"},"Persisting and Cascading"),(0,o.kt)("p",null,"To save entity state to database, we need to persist it. Persist determines\nwhether to use ",(0,o.kt)("inlineCode",{parentName:"p"},"insert")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," and computes appropriate change-set. Entity references\nthat are not persisted yet (does not have identifier) will be cascade persisted automatically. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// use constructors in our entities for required parameters\nconst author = new Author('Jon Snow', 'snow@wall.st');\nauthor.born = new Date();\n\nconst publisher = new Publisher('7K publisher');\n\nconst book1 = new Book('My Life on The Wall, part 1', author);\nbook1.publisher = publisher;\nconst book2 = new Book('My Life on The Wall, part 2', author);\nbook2.publisher = publisher;\nconst book3 = new Book('My Life on The Wall, part 3', author);\nbook3.publisher = publisher;\n\n// just persist books, author and publisher will be automatically cascade persisted\nawait em.persistAndFlush([book1, book2, book3]);\n\n// or one by one\nem.persist(book1);\nem.persist(book2);\nem.persist(book3); \nawait em.flush(); // flush everything to database at once\n")),(0,o.kt)("h2",{id:"fetching-entities-with-entitymanager"},"Fetching Entities with EntityManager"),(0,o.kt)("p",null,"To fetch entities from database we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"find()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"findOne()")," of ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager"),": "),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const author = await em.findOne(Author, '...id...');\nconst books = await em.find(Book, {});\n\nfor (const author of authors) {\n  console.log(author.name); // Jon Snow\n\n  for (const book of author.books) {\n    console.log(book.title); // initialized\n    console.log(book.author.isInitialized()); // true\n    console.log(book.author.id);\n    console.log(book.author.name); // Jon Snow\n    console.log(book.publisher); // just reference\n    console.log(book.publisher.isInitialized()); // false\n    console.log(book.publisher.id);\n    console.log(book.publisher.name); // undefined\n  }\n}\n")),(0,o.kt)("p",null,"To populate entity relations, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"populate")," parameter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const books = await em.find(Book, { foo: 1 }, { populate: ['author.friends'] });\n")),(0,o.kt)("p",null,"You can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"em.populate()")," helper to populate relations (or to ensure they\nare fully populated) on already loaded entities. This is also handy when loading\nentities via ",(0,o.kt)("inlineCode",{parentName:"p"},"QueryBuilder"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const authors = await em.createQueryBuilder(Author).select('*').getResult();\nawait em.populate(authors, { populate: ['books.tags'] });\n\n// now our Author entities will have `books` collections populated, \n// as well as they will have their `tags` collections populated.\nconsole.log(authors[0].books[0].tags[0]); // initialized BookTag\n")),(0,o.kt)("h3",{id:"conditions-object-filterqueryt"},"Conditions Object (",(0,o.kt)("inlineCode",{parentName:"h3"},"FilterQuery<T>"),")"),(0,o.kt)("p",null,"Querying entities via conditions object (",(0,o.kt)("inlineCode",{parentName:"p"},"where")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"em.find(Entity, where: FilterQuery<T>)"),")\nsupports many different ways:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// search by entity properties\nconst users = await em.find(User, { firstName: 'John' });\n\n// for searching by reference we can use primary key directly\nconst id = 1;\nconst users = await em.find(User, { organization: id });\n\n// or pass unpopulated reference (including `Reference` wrapper)\nconst ref = await em.getReference(Organization, id);\nconst users = await em.find(User, { organization: ref });\n\n// fully populated entities as also supported\nconst ent = await em.findOne(Organization, id);\nconst users = await em.find(User, { organization: ent });\n\n// complex queries with operators\nconst users = await em.find(User, { $and: [{ id: { $nin: [3, 4] } }, { id: { $gt: 2 } }] });\n\n// we can also search for array of primary keys directly\nconst users = await em.find(User, [1, 2, 3, 4, 5]);\n\n// and in findOne all of this works, plus we can search by single primary key\nconst user1 = await em.findOne(User, 1);\n")),(0,o.kt)("p",null,"As we can see in the fifth example, one can also use operators like ",(0,o.kt)("inlineCode",{parentName:"p"},"$and"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$or"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$gte"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"$gt"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$lte"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$lt"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$in"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$nin"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$eq"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$ne"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$like"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"$re"),". More about that can be found in\n",(0,o.kt)("a",{parentName:"p",href:"/docs/query-conditions"},"Query Conditions")," section."),(0,o.kt)("h4",{id:"using-custom-classes-in-filterquery"},"Using custom classes in ",(0,o.kt)("inlineCode",{parentName:"h4"},"FilterQuery")),(0,o.kt)("p",null,"If we decide to abstract the filter options in our own object then we might run into the problem that the find option does not return the results we'd expect. This is due to the fact that the ",(0,o.kt)("inlineCode",{parentName:"p"},"FilterQuery")," should be provided as a plain object (POJO), and not a class instance with prototype."),(0,o.kt)("p",null,"If we want to provide our own ",(0,o.kt)("inlineCode",{parentName:"p"},"FilterQuery")," DTO, then our DTO class should extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"PlainObject")," class. This way MikroORM knows it should be treated as such."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { PlainObject } from '@mikro-orm/core';\n\nclass Filter extends PlainObject {\n  name: string;\n}\n\nconst where = new Filter();\nwhere.name = 'Jon';\nconst res = await em.find(Author, where);\n")),(0,o.kt)("h4",{id:"mitigating-type-instantiation-is-excessively-deep-and-possibly-infinitets2589-error"},"Mitigating ",(0,o.kt)("inlineCode",{parentName:"h4"},"Type instantiation is excessively deep and possibly infinite.ts(2589)")," error"),(0,o.kt)("p",null,"Sometimes we might be facing TypeScript errors caused by too complex query for it to\nproperly infer all types. Usually it can be solved by providing the type argument\nexplicitly."),(0,o.kt)("p",null,"You can also opt in to use repository instead, as there the type inference should not be\nproblematic. "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"As a last resort, we can always type cast the query to ",(0,o.kt)("inlineCode",{parentName:"p"},"any"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const books = await em.find<Book>(Book, { ... our complex query ... });\n// or\nconst books = await em.getRepository(Book).find({ ... our complex query ... });\n// or\nconst books = await em.find<any>(Book, { ... our complex query ... }) as Book[];\n")),(0,o.kt)("p",null,"Another problem we might be facing is ",(0,o.kt)("inlineCode",{parentName:"p"},"RangeError: Maximum call stack size exceeded")," error\nthrown during TypeScript compilation (usually from file ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules/typescript/lib/typescript.js"),").\nThe solution to this is the same, just provide the type argument explicitly."),(0,o.kt)("h3",{id:"searching-by-referenced-entity-fields"},"Searching by referenced entity fields"),(0,o.kt)("p",null,"You can also search by referenced entity properties. Simply pass nested where condition like\nthis and all requested relationships will be automatically joined. Currently it will only join\nthem so we can search and sort by those. To populate entities, do not forget to pass the populate\nparameter as well. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// find author of a book that has tag specified by name\nconst author = await em.findOne(Author, { books: { tags: { name: 'Tag name' } } });\nconsole.log(author.books.isInitialized()); // false, as it only works for query and sort\n\nconst author = await em.findOne(Author, { books: { tags: { name: 'Tag name' } } }, { populate: ['books.tags'] });\nconsole.log(author.books.isInitialized()); // true, because it was populated\nconsole.log(author.books[0].tags.isInitialized()); // true, because it was populated\nconsole.log(author.books[0].tags[0].isInitialized()); // true, because it was populated\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This feature is fully available only for SQL drivers. In MongoDB always we need to\nquery from the owning side - so in the example above, first load book tag by name,\nthen associated book, then the author. Another option is to denormalize the schema.  ")),(0,o.kt)("h3",{id:"fetching-partial-entities"},"Fetching Partial Entities"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This feature is supported only for ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT_IN")," loading strategy.")),(0,o.kt)("p",null,"When fetching single entity, we can choose to select only parts of an entity via ",(0,o.kt)("inlineCode",{parentName:"p"},"options.fields"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const author = await em.findOne(Author, '...', { fields: ['name', 'born'] });\nconsole.log(author.id); // PK is always selected\nconsole.log(author.name); // Jon Snow\nconsole.log(author.email); // undefined\n")),(0,o.kt)("p",null,"From v4.4 it is also possible to specify fields for nested relations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const author = await em.findOne(Author, '...', { fields: ['name', 'books.title', 'books.author', 'books.price'] });\n")),(0,o.kt)("p",null,"Or with an alternative object syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const author = await em.findOne(Author, '...', { fields: ['name', { books: ['title', 'author', 'price'] }] });\n")),(0,o.kt)("p",null,"It is also possible to use multiple levels:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const author = await em.findOne(Author, '...', { fields: ['name', { books: ['title', 'price', 'author', { author: ['email'] }] }] });\n")),(0,o.kt)("p",null,"Primary keys are always selected even if we omit them. On the other hand, we are responsible\nfor selecting the FKs - if we omit such property, the relation might not be loaded properly.\nIn the following example the books would not be linked the author, because we did not specify\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"books.author")," field to be loaded."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// this will load both author and book entities, but they won't be connected due to the missing FK in select\nconst author = await em.findOne(Author, '...', { fields: ['name', { books: ['title', 'price'] });\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Same problem can occur in mongo with M:N collections - those are stored as array property\non the owning entity, so we need to make sure to mark such properties too.")),(0,o.kt)("h3",{id:"fetching-paginated-results"},"Fetching Paginated Results"),(0,o.kt)("p",null,"If we are going to paginate our results, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"em.findAndCount()")," that will return\ntotal count of entities before applying limit and offset."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const [authors, count] = await em.findAndCount(Author, { ... }, { limit: 10, offset: 50 });\nconsole.log(authors.length); // based on limit parameter, e.g. 10\nconsole.log(count); // total count, e.g. 1327\n")),(0,o.kt)("h3",{id:"handling-not-found-entities"},"Handling Not Found Entities"),(0,o.kt)("p",null,"When we call ",(0,o.kt)("inlineCode",{parentName:"p"},"em.findOne()")," and no entity is found based on our criteria, ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," will be\nreturned. If we rather have an ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," instance thrown, we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"em.findOneOrFail()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const author = await em.findOne(Author, { name: 'does-not-exist' });\nconsole.log(author === null); // true\n\ntry {\n  const author = await em.findOneOrFail(Author, { name: 'does-not-exist' });\n  // author will be always found here\n} catch (e) {\n  console.error('Not found', e);\n}\n")),(0,o.kt)("p",null,"You can customize the error either globally via ",(0,o.kt)("inlineCode",{parentName:"p"},"findOneOrFailHandler")," option, or locally via\n",(0,o.kt)("inlineCode",{parentName:"p"},"failHandler")," option in ",(0,o.kt)("inlineCode",{parentName:"p"},"findOneOrFail")," call."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"try {\n  const author = await em.findOneOrFail(Author, { name: 'does-not-exist' }, {\n    failHandler: (entityName: string, where: Record<string, any> | IPrimaryKey) => new Error(`Failed: ${entityName} in ${util.inspect(where)}`)\n  });\n} catch (e) {\n  console.error(e); // our custom error\n}\n")),(0,o.kt)("h3",{id:"using-custom-sql-fragments"},"Using custom SQL fragments"),(0,o.kt)("p",null,"It is possible to use any SQL fragment in our ",(0,o.kt)("inlineCode",{parentName:"p"},"WHERE")," query or ",(0,o.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"expr()")," helper is an identity function - all it does is to return its parameter.\nWe can use it to bypass the strict type checks in ",(0,o.kt)("inlineCode",{parentName:"p"},"FilterQuery"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const users = await em.find(User, { [expr('lower(email)')]: 'foo@bar.baz' }, {\n  orderBy: { [`(point(loc_latitude, loc_longitude) <@> point(0, 0))`]: 'ASC' },\n});\n")),(0,o.kt)("p",null,"This will produce following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"select `e0`.* \nfrom `user` as `e0`\nwhere lower(email) = 'foo@bar.baz'\norder by (point(loc_latitude, loclongitude) <@> point(0, 0)) asc\n")),(0,o.kt)("h2",{id:"disabling-identity-map-and-change-set-tracking"},"Disabling identity map and change set tracking"),(0,o.kt)("p",null,"Sometimes we might want to disable identity map and change set tracking for some query.\nThis is possible via ",(0,o.kt)("inlineCode",{parentName:"p"},"disableIdentityMap")," option. Behind the scenes, it will create new\ncontext, load the entities inside that, and clear it afterwards, so the main identity map\nwill stay clean."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"As opposed to ",(0,o.kt)("em",{parentName:"p"},"managed")," entities, such entities are called ",(0,o.kt)("em",{parentName:"p"},"detached"),".\nTo be able to work with them, we first need to merge them via ",(0,o.kt)("inlineCode",{parentName:"p"},"em.registerManaged()"),". ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const users = await em.find(User, { email: 'foo@bar.baz' }, {\n  disableIdentityMap: true,\n  populate: ['cars.brand'],\n});\nusers[0].name = 'changed';\nawait em.flush(); // calling flush have no effect, as the entity is not managed  \n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Keep in mind that this can also have\n",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/9259480/entity-framework-mergeoption-notracking-bad-performance"},"negative effect on the performance"),".")),(0,o.kt)("h2",{id:"type-of-fetched-entities"},"Type of Fetched Entities"),(0,o.kt)("p",null,"Both ",(0,o.kt)("inlineCode",{parentName:"p"},"em.find")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"em.findOne()")," methods have generic return types.\nAll of following examples are equal and will let typescript correctly infer the entity type:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const author1 = await em.findOne<Author>(Author.name, '...id...');\nconst author2 = await em.findOne<Author>('Author', '...id...');\nconst author3 = await em.findOne(Author, '...id...');\n")),(0,o.kt)("p",null,"As the last one is the least verbose, it should be preferred. "),(0,o.kt)("h2",{id:"entity-repositories"},"Entity Repositories"),(0,o.kt)("p",null,"Although we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager")," directly, much more convenient way is to use\n",(0,o.kt)("a",{parentName:"p",href:"https://mikro-orm.io/repositories/"},(0,o.kt)("inlineCode",{parentName:"a"},"EntityRepository")," instead"),". You can register\nour repositories in dependency injection container like ",(0,o.kt)("a",{parentName:"p",href:"http://inversify.io/"},"InversifyJS"),"\nso we do not need to get them from ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager")," each time."),(0,o.kt)("p",null,"For more examples, take a look at\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mongo.test.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"tests/EntityManager.mongo.test.ts")),"\nor ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/master/tests/EntityManager.mysql.test.ts"},(0,o.kt)("inlineCode",{parentName:"a"},"tests/EntityManager.mysql.test.ts")),"."),(0,o.kt)("h2",{id:"custom-property-ordering"},"Custom Property Ordering"),(0,o.kt)("p",null,"Entity properties provide some support for custom ordering via the ",(0,o.kt)("inlineCode",{parentName:"p"},"customOrder")," attribute. This is\nuseful for values that have a natural order that doesn't align with their underlying data representation. Consider the code below, the natural sorting order would be ",(0,o.kt)("inlineCode",{parentName:"p"},"high"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"low"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"medium"),". However we can provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"customOrder")," to indicate how the enum values should be sorted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"enum Priority { Low = 'low', Medium = 'medium', High = 'high' }\n@Entity()\nclass Task {\n  @PrimaryKey()\n  id!: number\n\n  @Property()\n  label!: string\n\n  @Enum({ \n    items: () => Priority, \n    customOrder: [Priority.Low, Priority.Medium, Priority.High] \n  })\n  priority!: Priority\n}\n\n// ...\n\nawait em.persistAndFlush([\n  em.create(Task, { label: 'A', priority: Priority.Low }),\n  em.create(Task, { label: 'B', priority: Priority.Medium }),\n  em.create(Task, { label: 'C', priority: Priority.High })\n]);\n\nconst tasks = await em.find(Task, {}, { orderBy: { priority: QueryOrder.ASC } });\nfor (const t of tasks) {\n  console.log(t.label);\n}\n// Logs A, B, C\n")))}m.isMDXComponent=!0}}]);