(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14113],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return d},kt:function(){return p}});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?u(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},u=Object.keys(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},d=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,u=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),y=s(n),p=i,f=y["".concat(l,".").concat(p)]||y[p]||c[p]||u;return n?t.createElement(f,o(o({ref:r},d),{},{components:n})):t.createElement(f,o({ref:r},d))}));function p(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var u=n.length,o=new Array(u);o[0]=y;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var s=2;s<u;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},66313:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return y}});var t=n(74034),i=n(79973),u=(n(67294),n(3905)),o=["components"],a={title:"Query Builder API"},l=void 0,s={unversionedId:"query-builder-api",id:"version-4.5/query-builder-api",isDocsHomePage:!1,title:"Query Builder API",description:"QueryBuilder provides fluent interface with these methods:",source:"@site/versioned_docs/version-4.5/query-builder-api.md",sourceDirName:".",slug:"/query-builder-api",permalink:"/docs/query-builder-api",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.5/query-builder-api.md",tags:[],version:"4.5",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1635843405,formattedLastUpdatedAt:"11/2/2021",frontMatter:{title:"Query Builder API"}},d=[],c={toc:d};function y(e){var r=e.components,n=(0,i.Z)(e,o);return(0,u.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"QueryBuilder")," provides fluent interface with these methods:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-typescript"},"select(fields: Field<T> | Field<T>[], distinct?: boolean): QueryBuilder;\naddSelect(fields: string | string[]): QueryBuilder;\ninsert(data: any): QueryBuilder;\nupdate(data: any): QueryBuilder;\ndelete(cond?: QBFilterQuery): QueryBuilder;\ntruncate(): QueryBuilder;\ncount(field?: string | string[], distinct?: boolean): QueryBuilder;\njoin(field: string, alias: string, cond?: QBFilterQuery, type?: 'leftJoin' | 'innerJoin' | 'pivotJoin', path?: string): QueryBuilder;\nleftJoin(field: string, alias: string, cond?: QBFilterQuery): QueryBuilder;\nwithSubQuery(subQuery: KnexQueryBuilder, alias: string): QueryBuilder;\nwhere(cond: QBFilterQuery<T>, operator?: keyof typeof GroupOperator): QueryBuilder;\nwhere(cond: string, params?: any[], operator?: keyof typeof GroupOperator): QueryBuilder;\nandWhere(cond: QBFilterQuery<T>): QueryBuilder;\nandWhere(cond: string, params?: any[]): QueryBuilder;\norWhere(cond: QBFilterQuery<T>): QueryBuilder;\norWhere(cond: string, params?: any[]): QueryBuilder;\norderBy(orderBy: QueryOrderMap): QueryBuilder;\ngroupBy(fields: (string | keyof T) | (string | keyof T)[]): QueryBuilder;\nhaving(cond?: QBFilterQuery | string, params?: any[]): QueryBuilder;\nraw(sql: string): Raw;\nlimit(limit?: number, offset?: number): QueryBuilder;\noffset(offset?: number): QueryBuilder;\nwithSchema(schema?: string): QueryBuilder;\nsetLockMode(mode?: LockMode): QueryBuilder;\nsetFlag(flag: QueryFlag): QueryBuilder;\nunsetFlag(flag: QueryFlag): QueryBuilder;\ngetKnexQuery(): KnexQueryBuilder;\ngetQuery(): string;\ngetParams(): readonly Value[];\ngetAliasForJoinPath(path: string): string | undefined;\ngetNextAlias(prefix?: string): string;\nexecute<U = any>(method?: 'all' | 'get' | 'run', mapResults?: boolean): Promise<U>;\ngetResult(): Promise<T[]>;\ngetResultList(): Promise<T[]>;\ngetSingleResult(): Promise<T | null>;\n/**\n * Returns knex instance with sub-query aliased with given alias.\n * You can provide `EntityName.propName` as alias, then the field name will be used based on the metadata\n */\nas(alias: string): KnexQueryBuilder;\nclone(): QueryBuilder<T>;\ngetKnex(): KnexQueryBuilder;\n")))}y.isMDXComponent=!0}}]);