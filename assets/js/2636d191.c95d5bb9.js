"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6732],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7693:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),i=["components"],s={title:"Unit of Work and Transactions",sidebar_label:"Unit of Work"},l=void 0,c={unversionedId:"unit-of-work",id:"version-3.6/unit-of-work",title:"Unit of Work and Transactions",description:"MikroORM uses the Identity Map pattern to track objects. Whenever you fetch an object from",source:"@site/versioned_docs/version-3.6/unit-of-work.md",sourceDirName:".",slug:"/unit-of-work",permalink:"/docs/3.6/unit-of-work",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-3.6/unit-of-work.md",tags:[],version:"3.6",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1647170940,formattedLastUpdatedAt:"3/13/2022",frontMatter:{title:"Unit of Work and Transactions",sidebar_label:"Unit of Work"},sidebar:"version-3.6/docs",previous:{title:"Collections",permalink:"/docs/3.6/collections"},next:{title:"Transactions and Concurrency",permalink:"/docs/3.6/transactions"}},p={},u=[{value:"Persisting Managed Entities",id:"persisting-managed-entities",level:2},{value:"How MikroORM Detects Changes",id:"how-mikroorm-detects-changes",level:2},{value:"Implicit Transactions",id:"implicit-transactions",level:2},{value:"Beware: Auto-flushing and Transactions",id:"beware-auto-flushing-and-transactions",level:3}],d={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"MikroORM uses the Identity Map pattern to track objects. Whenever you fetch an object from\nthe database, MikroORM will keep a reference to this object inside its ",(0,r.kt)("inlineCode",{parentName:"p"},"UnitOfWork"),". "),(0,r.kt)("p",null,"This allows MikroORM room for optimizations. If you call the EntityManager and ask for an\nentity with a specific ID twice, it will return the same instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const authorRepository = orm.em.getRepository(Author);\nconst jon1 = await authorRepository.findOne(1);\nconst jon2 = await authorRepository.findOne(1);\n\n// identity map in action\nconsole.log(jon1 === jon2); // true\n")),(0,r.kt)("p",null,"Only one SELECT query will be fired against the database here. In the second ",(0,r.kt)("inlineCode",{parentName:"p"},"findOne()"),"\ncall MikroORM will check the identity map first and will skip the database round trip as\nit will find the entity already loaded."),(0,r.kt)("p",null,"The identity map being indexed by primary keys only allows shortcuts when you ask for objects\nby primary key. When you query by other properties, you will still get the same reference,\nbut two separate database calls will be made:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const authorRepository = orm.em.getRepository(Author);\nconst jon1 = await authorRepository.findOne({ name: 'Jon Snow' });\nconst jon2 = await authorRepository.findOne({ name: 'Jon Snow' });\n\n// identity map in action\nconsole.log(jon1 === jon2); // true\n")),(0,r.kt)("p",null,"MikroORM only knows objects by id, so a query for different criteria has to go to the database,\neven if it was executed just before. But instead of creating a second ",(0,r.kt)("inlineCode",{parentName:"p"},"Author")," object MikroORM\nfirst gets the primary key from the row and checks if it already has an object inside the\n",(0,r.kt)("inlineCode",{parentName:"p"},"UnitOfWork")," with that primary key. "),(0,r.kt)("h2",{id:"persisting-managed-entities"},"Persisting Managed Entities"),(0,r.kt)("p",null,"The identity map has a second use-case. When you call ",(0,r.kt)("inlineCode",{parentName:"p"},"em.flush()"),", MikroORM will\nask the identity map for all objects that are currently managed. This means you don't have to\ncall ",(0,r.kt)("inlineCode",{parentName:"p"},"em.persistLater()")," over and over again to pass known objects to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"EntityManager"),". This is a NO-OP for known entities, but leads to much code written that is\nconfusing to other developers."),(0,r.kt)("p",null,"The following code WILL update your database with the changes made to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Author")," object,\neven if you did not call ",(0,r.kt)("inlineCode",{parentName:"p"},"em.persistLater()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const authorRepository = orm.em.getRepository(Author);\nconst jon = await authorRepository.findOne(1);\njon.email = 'foo@bar.com';\nawait authorRepository.flush(); // calling orm.em.flush() has same effect\n")),(0,r.kt)("h2",{id:"how-mikroorm-detects-changes"},"How MikroORM Detects Changes"),(0,r.kt)("p",null,'MikroORM is a data-mapper that tries to achieve persistence-ignorance (PI). This means you\nmap JS objects into a relational database that do not necessarily know about the database at\nall. A natural question would now be, "how does MikroORM even detect objects have changed?".'),(0,r.kt)("p",null,"For this MikroORM keeps a second map inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"UnitOfWork"),". Whenever you fetch an object\nfrom the database MikroORM will keep a copy of all the properties and associations inside\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"UnitOfWork"),". "),(0,r.kt)("p",null,"Now whenever you call ",(0,r.kt)("inlineCode",{parentName:"p"},"em.flush()")," MikroORM will iterate over all entities you\npreviously marked for persisting via ",(0,r.kt)("inlineCode",{parentName:"p"},"em.persistLater()"),". For each object it will\ncompare the original property and association values with the values that are currently set\non the object. If changes are detected then the object is queued for a UPDATE operation.\nOnly the fields that actually changed are updated."),(0,r.kt)("h2",{id:"implicit-transactions"},"Implicit Transactions"),(0,r.kt)("p",null,"First and most important implication of having Unit of Work is that it allows handling\ntransactions automatically. "),(0,r.kt)("p",null,"When you call ",(0,r.kt)("inlineCode",{parentName:"p"},"em.flush()"),", all computed changes are queried inside a database\ntransaction (if supported by given driver). This means that you can control the boundaries\nof transactions simply by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"em.persistLater()")," and once all your changes\nare ready, simply calling ",(0,r.kt)("inlineCode",{parentName:"p"},"flush()")," will run them inside a transaction. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also control the transaction boundaries manually via ",(0,r.kt)("inlineCode",{parentName:"p"},"em.transactional(cb)"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const user = await em.findOne(User, 1);\nuser.email = 'foo@bar.com';\nconst car = new Car();\nuser.cars.add(car);\n\n// thanks to bi-directional cascading we only need to persist user entity\n// flushing will create a transaction, insert new car and update user with new email\nawait em.persistAndFlush(user);\n")),(0,r.kt)("p",null,"You can find more information about transactions in ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.6/transactions"},"Transactions and concurrency"),"\npage."),(0,r.kt)("h3",{id:"beware-auto-flushing-and-transactions"},"Beware: Auto-flushing and Transactions"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Since MikroORM v3, default value for ",(0,r.kt)("inlineCode",{parentName:"p"},"autoFlush")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),". That means you need to call\n",(0,r.kt)("inlineCode",{parentName:"p"},"em.flush()")," yourself to persist changes into database. You can still change this via ORM's\noptions to ease the transition but generally it is not recommended. ")),(0,r.kt)("p",null,"Originally there was only ",(0,r.kt)("inlineCode",{parentName:"p"},"em.persist(entity, flush = true)")," method, that was\nautomatically flushing changes to database, if not given second ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," parameter. This\nbehaviour can be now changed via ",(0,r.kt)("inlineCode",{parentName:"p"},"autoFlush")," option when initializing the ORM:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const orm = await MikroORM.init({\n  autoFlush: false, // defaults to false in v3, was true in v2\n  // ...\n});\norm.em.persist(new Entity()); // no auto-flushing now\nawait orm.em.flush();\nawait orm.em.persist(new Entity(), true); // you can still use second parameter to auto-flush\n")),(0,r.kt)("p",null,"When using driver that supports transactions (all SQL drivers), you should either keep auto-flushing\ndisabled, or use ",(0,r.kt)("inlineCode",{parentName:"p"},"persistLater()")," method instead, as otherwise each ",(0,r.kt)("inlineCode",{parentName:"p"},"persist()")," call will immediately\ncreate new transaction to run the query."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This part of documentation is highly inspired by ",(0,r.kt)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-orm/en/2.6/reference/unitofwork.html"},"doctrine internals docs"),"\nas the behaviour here is pretty much the same.")))}h.isMDXComponent=!0}}]);