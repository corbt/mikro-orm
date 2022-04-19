"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5367],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26570:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),i=["components"],l={title:"Using Query Builder"},s=void 0,u={unversionedId:"query-builder",id:"version-5.0/query-builder",title:"Using Query Builder",description:"or EntityRepository to have access to createQueryBuilder() method.",source:"@site/versioned_docs/version-5.0/query-builder.md",sourceDirName:".",slug:"/query-builder",permalink:"/docs/5.0/query-builder",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-5.0/query-builder.md",tags:[],version:"5.0",lastUpdatedBy:"asiFarran",lastUpdatedAt:1650369733,formattedLastUpdatedAt:"4/19/2022",frontMatter:{title:"Using Query Builder"},sidebar:"docs",previous:{title:"Deployment",permalink:"/docs/5.0/deployment"},next:{title:"Result cache",permalink:"/docs/5.0/caching"}},d={},p=[{value:"Executing the Query",id:"executing-the-query",level:2},{value:"Awaiting the QueryBuilder",id:"awaiting-the-querybuilder",level:2},{value:"Mapping Raw Results to Entities",id:"mapping-raw-results-to-entities",level:2},{value:"Implicit Joining",id:"implicit-joining",level:2},{value:"Explicit Joining",id:"explicit-joining",level:2},{value:"Mapping joined results",id:"mapping-joined-results",level:2},{value:"Complex Where Conditions",id:"complex-where-conditions",level:2},{value:"Using custom SQL fragments",id:"using-custom-sql-fragments",level:3},{value:"Custom SQL in where",id:"custom-sql-in-where",level:3},{value:"andWhere() and orWhere()",id:"andwhere-and-orwhere",level:3},{value:"Conditions Object",id:"conditions-object",level:3},{value:"Count queries",id:"count-queries",level:2},{value:"Using sub-queries",id:"using-sub-queries",level:2},{value:"Referring to column in update queries",id:"referring-to-column-in-update-queries",level:2},{value:"Locking support",id:"locking-support",level:2},{value:"Using Knex.js",id:"using-knexjs",level:2},{value:"Running Native SQL Query",id:"running-native-sql-query",level:2}],c={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Since v4, we need to make sure we are working with correctly typed ",(0,r.kt)("inlineCode",{parentName:"h5"},"EntityManager"))),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"or ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityRepository")," to have access to ",(0,r.kt)("inlineCode",{parentName:"p"},"createQueryBuilder()")," method."),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { EntityManager, EntityRepository } from '@mikro-orm/mysql'; // or any other driver package\n")))),(0,r.kt)("p",null,"When you need to execute some SQL query without all the ORM stuff involved, you can either compose the query yourself, or use the ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," helper to construct the query for you:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// since v5 we can also use `em.qb()` shortcut\nconst qb = em.createQueryBuilder(Author);\nqb.update({ name: 'test 123', type: PublisherType.GLOBAL }).where({ id: 123, type: PublisherType.LOCAL });\n\nconsole.log(qb.getQuery());\n// update `publisher2` set `name` = ?, `type` = ? where `id` = ? and `type` = ?\n\nconsole.log(qb.getParams());\n// ['test 123', PublisherType.GLOBAL, 123, PublisherType.LOCAL]\n\n// run the query\nconst res1 = await qb.execute();\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," also supports ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.0/query-conditions"},"smart query conditions"),"."),(0,r.kt)("h2",{id:"executing-the-query"},"Executing the Query"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"execute(method = 'all', mapResults = true)"),"'s parameters to control form of result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const res1 = await qb.execute('all'); // returns array of objects, default behavior\nconst res2 = await qb.execute('get'); // returns single object\nconst res3 = await qb.execute('run'); // returns object like `{ affectedRows: number, insertId: number, row: any }`\n")),(0,r.kt)("p",null,"Second argument can be used to disable mapping of database columns to property names (which is enabled by default). In following example, ",(0,r.kt)("inlineCode",{parentName:"p"},"Book")," entity has ",(0,r.kt)("inlineCode",{parentName:"p"},"createdAt")," property defined with implicit\nunderscored field name ",(0,r.kt)("inlineCode",{parentName:"p"},"created_at"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const res4 = await em.createQueryBuilder(Book).select('*').execute('get', true);\nconsole.log(res4); // `createdAt` will be defined, while `created_at` will be missing\nconst res5 = await em.createQueryBuilder(Book).select('*').execute('get', false);\nconsole.log(res5); // `created_at` will be defined, while `createdAt` will be missing\n")),(0,r.kt)("p",null,"To get entity instances from the QueryBuilder result, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"getResult()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getSingleResult()"),"\nmethods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const book = await em.createQueryBuilder(Book).select('*').where({ id: 1 }).getSingleResult();\nconsole.log(book instanceof Book); // true\nconst books = await em.createQueryBuilder(Book).select('*').getResult();\nconsole.log(books[0] instanceof Book); // true\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"qb.getResultList()")," which is alias to ",(0,r.kt)("inlineCode",{parentName:"p"},"qb.getResult()"),".")),(0,r.kt)("h2",{id:"awaiting-the-querybuilder"},"Awaiting the QueryBuilder"),(0,r.kt)("p",null,"Since v5 we can await the ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," instance, which will automatically execute the QB and return appropriate response. The QB instance is now typed based on usage\nof ",(0,r.kt)("inlineCode",{parentName:"p"},"select/insert/update/delete/truncate")," methods to one of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SelectQueryBuilder"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"awaiting yields array of entities (as ",(0,r.kt)("inlineCode",{parentName:"li"},"qb.getResultList()"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CountQueryBuilder"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"awaiting yields number (as ",(0,r.kt)("inlineCode",{parentName:"li"},"qb.getCount()"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"InsertQueryBuilder")," (extends ",(0,r.kt)("inlineCode",{parentName:"li"},"RunQueryBuilder"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"awaiting yields ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryResult")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UpdateQueryBuilder")," (extends ",(0,r.kt)("inlineCode",{parentName:"li"},"RunQueryBuilder"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"awaiting yields ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryResult")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DeleteQueryBuilder")," (extends ",(0,r.kt)("inlineCode",{parentName:"li"},"RunQueryBuilder"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"awaiting yields ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryResult")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TruncateQueryBuilder")," (extends ",(0,r.kt)("inlineCode",{parentName:"li"},"RunQueryBuilder"),")",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"awaiting yields ",(0,r.kt)("inlineCode",{parentName:"li"},"QueryResult"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const res1 = await em.qb(Publisher).insert({\n  name: 'p1',\n  type: PublisherType.GLOBAL,\n});\n// res1 is of type `QueryResult<Publisher>`\nconsole.log(res1.insertId);\n\nconst res2 = await em.qb(Publisher)\n  .select('*')\n  .where({ name: 'p1' })\n  .limit(5);\n// res2 is Publisher[]\nconsole.log(res2.map(p => p.name));\n\nconst res3 = await em.qb(Publisher).count().where({ name: 'p1' });\n// res3 is number\nconsole.log(res3 > 0);\n\nconst res4 = await em.qb(Publisher)\n  .update({ type: PublisherType.LOCAL })\n  .where({ name: 'p1' });\n// res4 is QueryResult<Publisher>\nconsole.log(res4.affectedRows > 0);\n\nconst res5 = await em.qb(Publisher).delete().where({ name: 'p1' });\n// res4 is QueryResult<Publisher>\nconsole.log(res4.affectedRows > 0);\nexpect(res5.affectedRows > 0).toBe(true); // test the type\n")),(0,r.kt)("h2",{id:"mapping-raw-results-to-entities"},"Mapping Raw Results to Entities"),(0,r.kt)("p",null,"Another way to create entity from raw results (that are not necessarily mapped to entity properties)\nis to use ",(0,r.kt)("inlineCode",{parentName:"p"},"map()")," method of ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager"),", that is basically a shortcut for mapping results via ",(0,r.kt)("inlineCode",{parentName:"p"},"IDatabaseDriver.mapResult()")," (which converts field names to property names - e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"created_at"),"\nto ",(0,r.kt)("inlineCode",{parentName:"p"},"createdAt"),") and ",(0,r.kt)("inlineCode",{parentName:"p"},"merge()")," which converts the data to entity instance and makes it managed."),(0,r.kt)("p",null,"This method comes handy when you want to use 3rd party query builders, where the result is not mapped to entity properties automatically:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const results = await knex.select('*').from('users').where(knex.raw('id = ?', [id]));\nconst users = results.map(user => em.map(User, user));\n\n// or use EntityRepository.map()\nconst repo = em.getRepository(User);\nconst users = results.map(user => repo.map(user));\n")),(0,r.kt)("h2",{id:"implicit-joining"},"Implicit Joining"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," supports automatic joining based on entity metadata:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const qb = em.createQueryBuilder(BookTag, 't');\nqb.select('*').where({ books: 123 });\n\nconsole.log(qb.getQuery());\n// select `t`.*, `e1`.`book_tag_id`, `e1`.`book_uuid_pk`\n// from `book_tag` as `t`\n// left join `book_to_book_tag` as `e1` ON `t`.`id` = `e1`.`book_tag_id`\n// where `e1`.`book_uuid_pk` = ?\n")),(0,r.kt)("p",null,"This also works for multiple levels of nesting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const qb = em.createQueryBuilder(Author);\nqb.select('*')\n  .where({ books: { tags: { name: 'Cool' } } })\n  .orderBy({ books: { tags: { createdBy: QueryOrder.DESC } } });\n\nconsole.log(qb.getQuery());\n// select `e0`.* \n// from `author` as `e0` \n// left join `book2` as `e1` on `e0`.`id` = `e1`.`author_id` \n// left join `book2_to_book_tag2` as `e3` on `e1`.`uuid_pk` = `e3`.`book2_uuid_pk` \n// left join `book_tag2` as `e2` on `e3`.`book_tag2_id` = `e2`.`id` \n// where `e2`.`name` = ? \n// order by `e1`.`tags` asc\n")),(0,r.kt)("p",null,"This is currently available only for filtering (",(0,r.kt)("inlineCode",{parentName:"p"},"where"),") and sorting (",(0,r.kt)("inlineCode",{parentName:"p"},"orderBy"),"), only the root entity will be selected. To populate its relationships, you can\nuse ",(0,r.kt)("a",{parentName:"p",href:"/docs/5.0/nested-populate"},(0,r.kt)("inlineCode",{parentName:"a"},"em.populate()")),"."),(0,r.kt)("h2",{id:"explicit-joining"},"Explicit Joining"),(0,r.kt)("p",null,"Another way is to manually specify join property via ",(0,r.kt)("inlineCode",{parentName:"p"},"join()"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"leftJoin()")," methods:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const qb = em.createQueryBuilder(BookTag, 't');\nqb.select(['b.uuid', 'b.*', 't.*'], true)\n  .join('t.books', 'b')\n  .where({ 'b.title': 'test 123' })\n  .limit(2, 1);\n\nconsole.log(qb.getQuery());\n// select distinct `b`.`uuid_pk`, `b`.*, `t`.*, `e1`.`book_tag_id`, `e1`.`book_uuid_pk` from `book_tag` as `t`\n// join `book_to_book_tag` as `e1` ON `t`.`id` = `e1`.`book_tag_id`\n// join `book` as `b` ON `e1`.`book_uuid_pk` = `b`.`uuid_pk`\n// where `b`.`title` = ?\n// limit ? offset ?\n")),(0,r.kt)("h2",{id:"mapping-joined-results"},"Mapping joined results"),(0,r.kt)("p",null,"To select multiple entities and map them from ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryBuilder"),", we can use\n",(0,r.kt)("inlineCode",{parentName:"p"},"joinAndSelect")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"leftJoinAndSelect")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// `res` will contain array of authors, with books and their tags populated\nconst res = await em.createQueryBuilder(Author, 'a')\n  .select('*')\n  .leftJoinAndSelect('a.books', 'b')\n  .leftJoinAndSelect('b.tags', 't')\n  .where({ 't.name': ['sick', 'sexy'] })\n  .getResultList();\n")),(0,r.kt)("h2",{id:"complex-where-conditions"},"Complex Where Conditions"),(0,r.kt)("p",null,"There are multiple ways to construct complex query conditions. You can either write parts of SQL manually, use ",(0,r.kt)("inlineCode",{parentName:"p"},"andWhere()"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"orWhere()"),", or provide condition object:"),(0,r.kt)("h3",{id:"using-custom-sql-fragments"},"Using custom SQL fragments"),(0,r.kt)("p",null,"It is possible to use any SQL fragment in your ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," query or ",(0,r.kt)("inlineCode",{parentName:"p"},"ORDER BY")," clause:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const users = em.createQueryBuilder(User)\n  .select('*')\n  .where({ 'lower(email)': 'foo@bar.baz' })\n  .orderBy({ [`(point(loc_latitude, loc_longitude) <@> point(0, 0))`]: 'ASC' })\n  .getResultList();\n")),(0,r.kt)("p",null,"This will produce following query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select `e0`.* \nfrom `user` as `e0`\nwhere lower(email) = 'foo@bar.baz'\norder by (point(loc_latitude, loclongitude) <@> point(0, 0)) asc\n")),(0,r.kt)("h3",{id:"custom-sql-in-where"},"Custom SQL in where"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const qb = em.createQueryBuilder(BookTag, 't');\nqb.select(['b.*', 't.*'])\n  .leftJoin('t.books', 'b')\n  .where('b.title = ? or b.title = ?', ['test 123', 'lol 321'])\n  .andWhere('1 = 1')\n  .orWhere('1 = 2')\n  .limit(2, 1);\n\nconsole.log(qb.getQuery());\n// select `b`.*, `t`.*, `e1`.`book_tag_id`, `e1`.`book_uuid_pk` from `book_tag` as `t`\n// left join `book_to_book_tag` as `e1` ON `t`.`id` = `e1`.`book_tag_id`\n// left join `book` as `b` ON `e1`.`book_uuid_pk` = `b`.`uuid_pk`\n// where (((b.title = ? or b.title = ?) and (1 = 1)) or (1 = 2))\n// limit ? offset ?\n")),(0,r.kt)("h3",{id:"andwhere-and-orwhere"},"andWhere() and orWhere()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const qb = em.createQueryBuilder(BookTag, 't');\nqb.select(['b.*', 't.*'])\n  .leftJoin('t.books', 'b')\n  .where('b.title = ? or b.title = ?', ['test 123', 'lol 321'])\n  .andWhere('1 = 1')\n  .orWhere('1 = 2')\n  .limit(2, 1);\n\nconsole.log(qb.getQuery());\n// select `b`.*, `t`.*, `e1`.`book_tag_id`, `e1`.`book_uuid_pk` from `book_tag` as `t`\n// left join `book_to_book_tag` as `e1` ON `t`.`id` = `e1`.`book_tag_id`\n// left join `book` as `b` ON `e1`.`book_uuid_pk` = `b`.`uuid_pk`\n// where (((b.title = ? or b.title = ?) and (1 = 1)) or (1 = 2))\n// limit ? offset ?\n")),(0,r.kt)("h3",{id:"conditions-object"},"Conditions Object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const qb = em.createQueryBuilder(Test);\nqb.select('*').where({ $and: [{ id: { $nin: [3, 4] } }, { id: { $gt: 2 } }] });\n\nconsole.log(qb.getQuery());\n// select `e0`.* from `test` as `e0` where (`e0`.`id` not in (?, ?) and `e0`.`id` > ?)\n")),(0,r.kt)("h2",{id:"count-queries"},"Count queries"),(0,r.kt)("p",null,"To create a count query, we can ue ",(0,r.kt)("inlineCode",{parentName:"p"},"qb.count()"),", which will intialize a select clause with ",(0,r.kt)("inlineCode",{parentName:"p"},"count()")," function. By default, it will use the primary key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const qb = em.createQueryBuilder(Test);\nqb.count().where({ $and: [{ id: { $nin: [3, 4] } }, { id: { $gt: 2 } }] });\n\nconsole.log(qb.getQuery());\n// select count(`e0`.`id`) from `test` as `e0` where (`e0`.`id` not in (?, ?) and `e0`.`id` > ?)\n\n// to get the count, we can use `qb.execute()`\nconst res = await qb.execute('get');\nconst count = res ? +res.count : 0;\n")),(0,r.kt)("p",null,"To simplify this process, we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"qb.getCount()")," method. Following code is equivalent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const qb = em.createQueryBuilder(Test);\nqb.select('*').limit(10, 20).where({ $and: [{ id: { $nin: [3, 4] } }, { id: { $gt: 2 } }] });\n\nconst count = await qb.getCount();\n")),(0,r.kt)("p",null,"This will also remove any existing limit and offset from the query (the QB will be cloned under the hood, so calling ",(0,r.kt)("inlineCode",{parentName:"p"},"getCount()")," does not mutate the original QB state)."),(0,r.kt)("h2",{id:"using-sub-queries"},"Using sub-queries"),(0,r.kt)("p",null,"You can filter using sub-queries in where conditions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const qb1 = em.createQueryBuilder(Book2, 'b').select('b.author').where({ price: { $gt: 100 } });\nconst qb2 = em.createQueryBuilder(Author2, 'a').select('*').where({ id: { $in: qb1.getKnexQuery() } });\n\nconsole.log(qb2.getQuery());\n// select `a`.* from `author2` as `a` where `a`.`id` in (select `b`.`author_id` from `book2` as `b` where `b`.`price` > ?)\n")),(0,r.kt)("p",null,"For sub-queries in selects, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"qb.as(alias)")," method:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The dynamic property (",(0,r.kt)("inlineCode",{parentName:"p"},"booksTotal"),") needs to be defined at the entity level (as ",(0,r.kt)("inlineCode",{parentName:"p"},"persist: false"),").")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const knex = em.getKnex();\nconst qb1 = em.createQueryBuilder(Book2, 'b').count('b.uuid', true).where({ author: knex.ref('a.id') }).as('Author2.booksTotal');\nconst qb2 = em.createQueryBuilder(Author2, 'a');\nqb2.select(['*', qb1]).orderBy({ booksTotal: 'desc' });\n\nconsole.log(qb2.getQuery());\n// select `a`.*, (select count(distinct `b`.`uuid_pk`) as `count` from `book2` as `b` where `b`.`author_id` = `a`.`id`) as `books_total` from `author2` as `a` order by `books_total` desc\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const knex = em.getKnex();\nconst qb3 = em.createQueryBuilder(Book2, 'b').count('b.uuid', true).where({ author: knex.ref('a.id') }).as('books_total');\nconst qb4 = em.createQueryBuilder(Author2, 'a');\nqb4.select(['*', qb3]).orderBy({ booksTotal: 'desc' });\n\nconsole.log(qb4.getQuery());\n// select `a`.*, (select count(distinct `b`.`uuid_pk`) as `count` from `book2` as `b` where `b`.`author_id` = `a`.`id`) as `books_total` from `author2` as `a` order by `books_total` desc\n")),(0,r.kt)("p",null,"When you want to filter by sub-query on the left-hand side of a predicate, you will need to register it first via ",(0,r.kt)("inlineCode",{parentName:"p"},"qb.withSubquery()"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The dynamic property (",(0,r.kt)("inlineCode",{parentName:"p"},"booksTotal"),") needs to be defined at the entity level (as ",(0,r.kt)("inlineCode",{parentName:"p"},"persist: false"),").\nYou always need to use prefix in the ",(0,r.kt)("inlineCode",{parentName:"p"},"qb.withSchema()")," (so ",(0,r.kt)("inlineCode",{parentName:"p"},"a.booksTotal"),").")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const knex = em.getKnex();\nconst qb1 = em.createQueryBuilder(Book2, 'b').count('b.uuid', true).where({ author: knex.ref('a.id') }).getKnexQuery();\nconst qb2 = em.createQueryBuilder(Author2, 'a');\nqb2.select('*').withSubQuery(qb1, 'a.booksTotal').where({ 'a.booksTotal': { $in: [1, 2, 3] } });\n\nconsole.log(qb2.getQuery());\n// select `a`.* from `author2` as `a` where (select count(distinct `b`.`uuid_pk`) as `count` from `book2` as `b` where `b`.`author_id` = `a`.`id`) in (?, ?, ?)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const knex = em.getKnex();\nconst qb3 = em.createQueryBuilder(Book2, 'b').count('b.uuid', true).where({ author: knex.ref('a.id') }).getKnexQuery();\nconst qb4 = em.createQueryBuilder(Author2, 'a');\nqb4.select('*').withSubQuery(qb3, 'a.booksTotal').where({ 'a.booksTotal': 1 });\n\nconsole.log(qb4.getQuery());\n// select `a`.* from `author2` as `a` where (select count(distinct `b`.`uuid_pk`) as `count` from `book2` as `b` where `b`.`author_id` = `a`.`id`) = ?\n")),(0,r.kt)("h2",{id:"referring-to-column-in-update-queries"},"Referring to column in update queries"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"qb.raw()")," to insert raw SQL snippets like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const qb = em.createQueryBuilder(Book);\nqb.update({ price: qb.raw('price + 1') }).where({ uuid: '123' });\n\nconsole.log(qb.getQuery());\n// update `book` set `price` = price + 1 where `uuid_pk` = ?\n")),(0,r.kt)("h2",{id:"locking-support"},"Locking support"),(0,r.kt)("p",null,"We can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"LockMode")," via ",(0,r.kt)("inlineCode",{parentName:"p"},"qb.setLockMode()"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const qb = em.createQueryBuilder(Test);\nqb.select('*').where({ name: 'Lol 321' }).setLockMode(LockMode.PESSIMISTIC_READ);\n\nconsole.log(qb.getQuery()); // for MySQL\n// select `e0`.* from `test` as `e0` where `e0`.`name` = ? lock in share mode\n")),(0,r.kt)("p",null,"Available lock modes:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Mode"),(0,r.kt)("th",{parentName:"tr",align:null},"Postgres"),(0,r.kt)("th",{parentName:"tr",align:null},"MySQL"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LockMode.PESSIMISTIC_READ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"for share")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lock in share mode"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LockMode.PESSIMISTIC_WRITE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"for update")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"for update"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LockMode.PESSIMISTIC_PARTIAL_WRITE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"for update skip locked")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"for update skip locked"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LockMode.PESSIMISTIC_WRITE_OR_FAIL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"for update nowait")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"for update nowait"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LockMode.PESSIMISTIC_PARTIAL_READ")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"for share skip locked")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lock in share mode skip locked"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LockMode.PESSIMISTIC_READ_OR_FAIL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"for share nowait")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lock in share mode nowait"))))),(0,r.kt)("p",null,"Optionally we can also pass list of table aliases we want to lock via second parameter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const qb = em.createQueryBuilder(User, \'u\');\nqb.select(\'*\')\n  .leftJoinAndSelect(\'u.identities\', \'i\')\n  .where({ name: \'Jon\' })\n  .setLockMode(LockMode.PESSIMISTIC_READ, [\'u\']);\n\nconsole.log(qb.getQuery()); // for Postgres\n// select ... \n//   from "user" as "u"\n//   left join "identity" as "i" on "u"."id" = "i"."user_id" \n//   where "u"."name" = \'Jon\' \n//   for update of "u" skip locked\n')),(0,r.kt)("h2",{id:"using-knexjs"},"Using Knex.js"),(0,r.kt)("p",null,"Under the hood, ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," uses ",(0,r.kt)("a",{parentName:"p",href:"https://knexjs.org"},(0,r.kt)("inlineCode",{parentName:"a"},"Knex.js"))," to compose and run queries. You can access configured ",(0,r.kt)("inlineCode",{parentName:"p"},"knex")," instance via ",(0,r.kt)("inlineCode",{parentName:"p"},"qb.getKnexQuery()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const qb = em.createQueryBuilder(Author);\nqb.update({ name: 'test 123', type: PublisherType.GLOBAL }).where({ id: 123, type: PublisherType.LOCAL });\nconst knex = qb.getKnexQuery(); // instance of Knex' QueryBuilder\n\n// do what ever you need with `knex`\n\nconst res = await em.getConnection().execute(knex);\nconst entities = res.map(a => em.map(Author, a));\nconsole.log(entities); // Author[]\n")),(0,r.kt)("p",null,"You can also get clear and configured knex instance from the connection via ",(0,r.kt)("inlineCode",{parentName:"p"},"getKnex()")," method. As this method is not available on the base ",(0,r.kt)("inlineCode",{parentName:"p"},"Connection")," class, you will need to either manually type\ncast the connection to ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractSqlConnection")," (or the actual implementation you are using, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"MySqlConnection"),"), or provide correct driver type hint to your ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager")," instance, which will be\nthen automatically inferred in ",(0,r.kt)("inlineCode",{parentName:"p"},"em.getConnection()")," method."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Driver and connection implementations are not directly exported from ",(0,r.kt)("inlineCode",{parentName:"p"},"@mikro-orm/core")," module.\nYou can import them from the driver packages (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"import { PostgreSqlDriver } from '@mikro-orm/postgresql'"),").")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const conn = em.getConnection() as AbstractSqlConnection;\n// you can make sure the `em` is correctly typed to `EntityManager<AbstractSqlDriver>`\n// or one of its implementations:\n// const em: EntityManager<AbstractSqlDriver> = em;\n\nconst knex = conn.getKnex();\n\n// do what ever you need with `knex`\n\nconst res = await knex;\n")),(0,r.kt)("h2",{id:"running-native-sql-query"},"Running Native SQL Query"),(0,r.kt)("p",null,"You can run native SQL via underlying connection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const connection = em.getConnection();\nconst res = await connection.execute('select 1 as count');\nconsole.log(res); // res is array of objects: `[ { count: 1 } ]`\n")),(0,r.kt)("p",null,"Since v4 we can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"em.execute()")," which will also handle logging and mapping of exceptions."))}m.isMDXComponent=!0}}]);