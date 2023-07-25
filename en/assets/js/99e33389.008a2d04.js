"use strict";(self.webpackChunkstoragebag_wiki=self.webpackChunkstoragebag_wiki||[]).push([[353],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),p=c(t),g=r,f=p["".concat(l,".").concat(g)]||p[g]||u[g]||i;return t?a.createElement(f,o(o({ref:n},s),{},{components:t})):a.createElement(f,o({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=g;var m={};for(var l in n)hasOwnProperty.call(n,l)&&(m[l]=n[l]);m.originalType=e,m[p]="string"==typeof e?e:r,o[1]=m;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:2,hide_title:!0},o=void 0,m={unversionedId:"\u5f00\u59cb/\u9ed8\u8ba4\u914d\u7f6e",id:"\u5f00\u59cb/\u9ed8\u8ba4\u914d\u7f6e",title:"\u9ed8\u8ba4\u914d\u7f6e",description:"config.yml",source:"@site/docs/\u5f00\u59cb/\u9ed8\u8ba4\u914d\u7f6e.md",sourceDirName:"\u5f00\u59cb",slug:"/\u5f00\u59cb/\u9ed8\u8ba4\u914d\u7f6e",permalink:"/StorageBag-Wiki/en/\u5f00\u59cb/\u9ed8\u8ba4\u914d\u7f6e",draft:!1,editUrl:"https://github.com/Neige7/StorageBag-Wiki/blob/main/docs/\u5f00\u59cb/\u9ed8\u8ba4\u914d\u7f6e.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,hide_title:!0},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u88c5",permalink:"/StorageBag-Wiki/en/\u5f00\u59cb/\u5b89\u88c5"},next:{title:"\u6307\u4ee4",permalink:"/StorageBag-Wiki/en/category/\u6307\u4ee4"}},l={},c=[{value:"config.yml",id:"configyml",level:2},{value:"items.yml",id:"itemsyml",level:2}],s={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"configyml"},"config.yml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"Command:\n  Name: storagebag\n  Aliases:\n  - sb\n  - sbag\n  Permission: storagebag.command\n  PermissionMessage: \u6743\u9650\u4e0d\u8db3\nMessages:\n  Prefix: '\xa7bStorage\xa73Bag \xa77> '\n  InvalidGameMode: \xa77\u7981\u6b62\u521b\u9020\u6a21\u5f0f\u73a9\u5bb6\u5b58\u50a8\u7269\u54c1\n  InvalidStorageBagAmount: \xa77\u7981\u6b62\u64cd\u4f5c\u5806\u53e0\u72b6\u6001\u7684\u50a8\u7269\u888b\n  NestedStorageBag: \xa77\u7981\u6b62\u5c06\u50a8\u7269\u888b\u5b58\u5165\u50a8\u7269\u888b\n  InvalidPackedItem: \xa77\u65e0\u6cd5\u5c06\u4e0d\u540c\u79cd\u7c7b\u7684\u7269\u54c1\u5b58\u5165\u540c\u4e00\u4e2a\u50a8\u7269\u888b\n  SuccessfulPackItem: \xa7a\u6210\u529f\u5c06 \xa7f{amount} \xa7a\u4e2a \xa7f{name} \xa7a\u5b58\u5165\u50a8\u7269\u888b\n  SuccessfulUnPackItem: \xa7a\u6210\u529f\u53d6\u51fa \xa7f{amount} \xa7a\u4e2a \xa7f{name}\n  InvalidPlayer: \xa77\u73a9\u5bb6\u4e0d\u5728\u7ebf\u6216\u4e0d\u5b58\u5728\n  InvalidNumber: \xa77\u65e0\u6cd5\u8bc6\u522b\u7684\u6570\u5b57 {number}\n  InvalidStorageBag: \xa77\u8be5\u7269\u54c1\u4e0d\u5c5e\u4e8e\u50a8\u7269\u888b\n  StorageBagNotPacked: \xa77\u8be5\u50a8\u7269\u888b\u672a\u5b58\u50a8\u4efb\u4f55\u7269\u54c1\n  SuccessfulSetAmount: \xa7a\u6210\u529f\u5c06\u50a8\u7269\u888b\u50a8\u5b58\u6570\u91cf\u8bbe\u7f6e\u4e3a \xa7f{amount}\n  InvalidStorageBagId: \xa77\u4e0d\u5b58\u5728ID\u4e3a \xa7f{id} \xa77\u7684\u50a8\u7269\u888b\n  SuccessfulGiveStorageBag: \xa7a\u6210\u529f\u7ed9\u4e88\u73a9\u5bb6 \xa7f{player} \xa7f{amount} \xa7a\u4e2a \xa7f{name}\n  ReachStorageLimit: \xa77\u5df2\u8fbe\u5b58\u50a8\u4e0a\u9650 \xa7f{limit}\n  SuccessfulReload: \xa7a\u91cd\u8f7d\u5b8c\u6bd5\n\n")),(0,r.kt)("h2",{id:"itemsyml"},"items.yml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"StorageBagA:\n  inherit: StorageBagTemplate\n  sections:\n    # \u6700\u5927\u9650\u5236\u5b58\u50a81000\u4e2a\u7269\u54c1(-1\u4ee3\u8868\u4e0d\u9650\u5236)\n    limit: 1000\n    # \u4e0d\u5b58\u5728\u9650\u5236\u65f6\u7684\u663e\u793a\u6587\u672c\n    noLimitString: \u65e0\u9650\u5236\n    # \u5b58\u5728\u9650\u5236\u65f6\u7684\u663e\u793a\u6587\u672c\n    LimitedString: <limit>\n    # \u4e0d\u5b58\u5728\u9650\u5236\u65f6\u7684\u6570\u91cf\u663e\u793a\u6587\u672c\n    noLimitAmountString: <packedItemAmount>\n    # \u5b58\u5728\u9650\u5236\u65f6\u7684\u6570\u91cf\u663e\u793a\u6587\u672c\n    LimitedAmountString: <packedItemAmount>/<limit>\n    # \u672a\u5b58\u50a8\u7269\u54c1\u65f6\u7684\u7269\u54c1\u6750\u8d28\n    preMaterial: BUCKET\n    # \u5df2\u5b58\u50a8\u7269\u54c1\u65f6\u7684\u7269\u54c1\u6750\u8d28\n    postMaterial: WATER_BUCKET\n    # \u672a\u5b58\u50a8\u7269\u54c1\u65f6\u7684\u7269\u54c1\u540d\u79f0\n    preName: \xa7f\u538b\u7f29\u888b\n    # \u5df2\u5b58\u50a8\u7269\u54c1\u65f6\u7684\u7269\u54c1\u540d\u79f0, packedItemName\u4ee3\u8868\u88ab\u5b58\u50a8\u7269\u54c1\u7684\u7269\u54c1\u540d\n    postName: '\xa7f\u538b\u7f29\u888b: <packedItemName>'\n    # \u672a\u5b58\u50a8\u7269\u54c1\u65f6\u7684\u7269\u54c1Lore\n    preLore:\n      type: join\n      list:\n      - '\xa7b\u5b58\u50a8\u4e0a\u9650: \xa7f<limitString>'\n      - ' '\n      - \xa7a\u80cc\u5305\u4e2d\u70b9\u51fb\u538b\u7f29\u888b\n      - \xa7a\u518d\u70b9\u51fb\u5f85\u5b58\u50a8\u7269\u54c1\n      - \xa7a\u5373\u53ef\u5b58\u50a8\u5bf9\u5e94\u7269\u54c1\n      separator: \"\\\\n\"\n      prefix: '\"'\n      postfix: '\"'\n    # \u672a\u5b58\u50a8\u7269\u54c1\u65f6\u7684\u7269\u54c1Lore, packedItemName\u4ee3\u8868\u88ab\u5b58\u50a8\u7269\u54c1\u7684\u7269\u54c1\u540d, packedItemAmount\u4ee3\u8868\u88ab\u5b58\u50a8\u7269\u54c1\u7684\u6570\u91cf\n    postLore:\n      type: join\n      list:\n      - \xa7f<packedItemName> \xa7f<amountString>\n      - '\xa7e\xa7m                     '\n      - \xa7e\u5de6\u952e \xa7a\u53d6\u51fa\u4e00\u4e2a\u7269\u54c1             \n      - \xa7e\u53f3\u952e \xa7a\u53d6\u51fa\u4e00\u7ec4\u7269\u54c1\n      - \xa7eShift+\u53f3\u952e \xa7a\u586b\u6ee1\u80cc\u5305\n      separator: \"\\\\n\"\n      prefix: '\"'\n      postfix: '\"'\nStorageBagB:\n  inherit: StorageBagTemplate\n  sections:\n    limit: 1000\n  custommodeldata: 10000\n  nbt:\n    itemsadder:\n      namespace: strengthen\n      id: bloodruby\nStorageBagC:\n  inherit: StorageBagTemplate\n  sections:\n    preName: \xa7b\u8d85\u7ea7\u538b\u7f29\u888b\n    postName: '\xa7b\u8d85\u7ea7\u538b\u7f29\u888b: <packedItemName>'\n\n")))}u.isMDXComponent=!0}}]);