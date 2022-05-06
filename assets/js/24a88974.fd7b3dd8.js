"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3651],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34869:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(83117),o=n(80102),i=(n(67294),n(3905)),r=["components"],s={title:"Unit of Work and Transactions",sidebar_label:"Unit of Work"},l=void 0,c={unversionedId:"unit-of-work",id:"unit-of-work",title:"Unit of Work and Transactions",description:"MikroORM uses the Identity Map pattern to track objects. Whenever you fetch an object from",source:"@site/docs/unit-of-work.md",sourceDirName:".",slug:"/unit-of-work",permalink:"/docs/next/unit-of-work",draft:!1,editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/unit-of-work.md",tags:[],version:"current",lastUpdatedBy:"William W. Doyle",lastUpdatedAt:1651854038,formattedLastUpdatedAt:"5/6/2022",frontMatter:{title:"Unit of Work and Transactions",sidebar_label:"Unit of Work"},sidebar:"docs",previous:{title:"Entity Manager",permalink:"/docs/next/entity-manager"},next:{title:"Identity Map",permalink:"/docs/next/identity-map"}},u={},p=[{value:"Persisting Managed Entities",id:"persisting-managed-entities",level:2},{value:"How MikroORM Detects Changes",id:"how-mikroorm-detects-changes",level:2},{value:"Implicit Transactions",id:"implicit-transactions",level:2},{value:"Flush Modes",id:"flush-modes",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"MikroORM uses the Identity Map pattern to track objects. Whenever you fetch an object from\nthe database, MikroORM will keep a reference to this object inside its ",(0,i.kt)("inlineCode",{parentName:"p"},"UnitOfWork"),". "),(0,i.kt)("p",null,"This allows MikroORM room for optimizations. If you call the EntityManager and ask for an\nentity with a specific ID twice, it will return the same instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const authorRepository = orm.em.getRepository(Author);\nconst jon1 = await authorRepository.findOne(1);\nconst jon2 = await authorRepository.findOne(1);\n\n// identity map in action\nconsole.log(jon1 === jon2); // true\n")),(0,i.kt)("p",null,"Only one SELECT query will be fired against the database here. In the second ",(0,i.kt)("inlineCode",{parentName:"p"},"findOne()"),"\ncall MikroORM will check the identity map first and will skip the database round trip as\nit will find the entity already loaded."),(0,i.kt)("p",null,"The identity map being indexed by primary keys only allows shortcuts when you ask for objects\nby primary key. When you query by other properties, you will still get the same reference,\nbut two separate database calls will be made:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const authorRepository = orm.em.getRepository(Author);\nconst jon1 = await authorRepository.findOne({ name: 'Jon Snow' });\nconst jon2 = await authorRepository.findOne({ name: 'Jon Snow' });\n\n// identity map in action\nconsole.log(jon1 === jon2); // true\n")),(0,i.kt)("p",null,"MikroORM only knows objects by id, so a query for different criteria has to go to the database,\neven if it was executed just before. But instead of creating a second ",(0,i.kt)("inlineCode",{parentName:"p"},"Author")," object MikroORM\nfirst gets the primary key from the row and checks if it already has an object inside the\n",(0,i.kt)("inlineCode",{parentName:"p"},"UnitOfWork")," with that primary key. "),(0,i.kt)("h2",{id:"persisting-managed-entities"},"Persisting Managed Entities"),(0,i.kt)("p",null,"The identity map has a second use-case. When you call ",(0,i.kt)("inlineCode",{parentName:"p"},"em.flush()"),", MikroORM will\nask the identity map for all objects that are currently managed. This means you don't have to\ncall ",(0,i.kt)("inlineCode",{parentName:"p"},"em.persist()")," over and over again to pass known objects to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager"),". This is a NO-OP for known entities, but leads to much code written that is\nconfusing to other developers."),(0,i.kt)("p",null,"The following code WILL update your database with the changes made to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Author")," object,\neven if you did not call ",(0,i.kt)("inlineCode",{parentName:"p"},"em.persist()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const authorRepository = orm.em.getRepository(Author);\nconst jon = await authorRepository.findOne(1);\njon.email = 'foo@bar.com';\nawait authorRepository.flush(); // calling orm.em.flush() has same effect\n")),(0,i.kt)("h2",{id:"how-mikroorm-detects-changes"},"How MikroORM Detects Changes"),(0,i.kt)("p",null,'MikroORM is a data-mapper that tries to achieve persistence-ignorance (PI). This means you\nmap JS objects into a relational database that do not necessarily know about the database at\nall. A natural question would now be, "how does MikroORM even detect objects have changed?".'),(0,i.kt)("p",null,"For this MikroORM keeps a second map inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"UnitOfWork"),". Whenever you fetch an object\nfrom the database MikroORM will keep a copy of all the properties and associations inside\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"UnitOfWork"),". "),(0,i.kt)("p",null,"Now whenever you call ",(0,i.kt)("inlineCode",{parentName:"p"},"em.flush()")," MikroORM will iterate over all entities you\npreviously marked for persisting via ",(0,i.kt)("inlineCode",{parentName:"p"},"em.persist()"),". For each object it will\ncompare the original property and association values with the values that are currently set\non the object. If changes are detected then the object is queued for a UPDATE operation.\nOnly the fields that actually changed are updated."),(0,i.kt)("h2",{id:"implicit-transactions"},"Implicit Transactions"),(0,i.kt)("p",null,"First and most important implication of having Unit of Work is that it allows handling\ntransactions automatically. "),(0,i.kt)("p",null,"When you call ",(0,i.kt)("inlineCode",{parentName:"p"},"em.flush()"),", all computed changes are queried inside a database\ntransaction (if supported by given driver). This means that you can control the boundaries\nof transactions simply by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"em.persist()")," and once all your changes\nare ready, simply calling ",(0,i.kt)("inlineCode",{parentName:"p"},"flush()")," will run them inside a transaction. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can also control the transaction boundaries manually via ",(0,i.kt)("inlineCode",{parentName:"p"},"em.transactional(cb)"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const user = await em.findOne(User, 1);\nuser.email = 'foo@bar.com';\nconst car = new Car();\nuser.cars.add(car);\n\n// thanks to bi-directional cascading we only need to persist user entity\n// flushing will create a transaction, insert new car and update user with new email\nawait em.persistAndFlush(user);\n")),(0,i.kt)("p",null,"You can find more information about transactions in ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/transactions"},"Transactions and concurrency"),"\npage."),(0,i.kt)("h2",{id:"flush-modes"},"Flush Modes"),(0,i.kt)("p",null,"The flushing strategy is given by the ",(0,i.kt)("inlineCode",{parentName:"p"},"flushMode")," of the current running ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityManager"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FlushMode.COMMIT")," - The ",(0,i.kt)("inlineCode",{parentName:"li"},"EntityManager")," tries to delay the flush until the current Transaction is committed, although it might flush prematurely too."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FlushMode.AUTO")," - This is the default mode, and it flushes the ",(0,i.kt)("inlineCode",{parentName:"li"},"EntityManager")," only if necessary."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FlushMode.ALWAYS")," - Flushes the ",(0,i.kt)("inlineCode",{parentName:"li"},"EntityManager")," before every query.")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FlushMode.AUTO")," will try to detect changes on the entity we are querying, and flush\nif there is an overlap:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// querying for author will trigger auto-flush if we have new author persisted\nconst a1 = new Author(...);\norm.em.persist(a1);\nconst r1 = await orm.em.find(Author, {});\n\n// querying author won't trigger auto-flush if we have new book, but no changes on author\nconst b4 = new Book(...);\norm.em.persist(b4);\nconst r2 = await orm.em.find(Author, {});\n\n// but querying for book will trigger auto-flush\nconst r3 = await orm.em.find(Book, {});\n")),(0,i.kt)("p",null,"We can set the flush mode on different places:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"in the ORM config via ",(0,i.kt)("inlineCode",{parentName:"li"},"Options.flushMode")),(0,i.kt)("li",{parentName:"ul"},"for given ",(0,i.kt)("inlineCode",{parentName:"li"},"EntityManager")," instance (and its forks) via ",(0,i.kt)("inlineCode",{parentName:"li"},"em.setFlushMode()")),(0,i.kt)("li",{parentName:"ul"},"for given ",(0,i.kt)("inlineCode",{parentName:"li"},"EntityManager")," fork via ",(0,i.kt)("inlineCode",{parentName:"li"},"em.fork({ flushMode })")),(0,i.kt)("li",{parentName:"ul"},"for given QueryBuilder instance via ",(0,i.kt)("inlineCode",{parentName:"li"},"qb.setFlushMode()")),(0,i.kt)("li",{parentName:"ul"},"for given transaction scope via ",(0,i.kt)("inlineCode",{parentName:"li"},"em.transactional(..., { flushMode })"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This part of documentation is highly inspired by ",(0,i.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-orm/en/2.6/reference/unitofwork.html"},"doctrine internals docs"),"\nas the behaviour here is pretty much the same.")))}m.isMDXComponent=!0}}]);