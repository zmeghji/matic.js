(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[510],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7900:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},l=void 0,c={unversionedId:"pos/ERC1155/burnERC1155",id:"pos/ERC1155/burnERC1155",isDocsHomePage:!1,title:"burnERC1155",description:"Burn ERC1155 tokens(deposited using POS Portal) on Matic chain and retrieve the Transaction hash",source:"@site/docs/pos/ERC1155/burnERC1155.md",sourceDirName:"pos/ERC1155",slug:"/pos/ERC1155/burnERC1155",permalink:"/matic.js/docs/pos/ERC1155/burnERC1155",editUrl:"https://github.com/maticnetwork/matic.js/edit/master/docs/docs/pos/ERC1155/burnERC1155.md",version:"current",lastUpdatedBy:"fuzious",lastUpdatedAt:1626451072,formattedLastUpdatedAt:"7/16/2021",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docs",previous:{title:"Deposit ERC1155",permalink:"/matic.js/docs/pos/ERC1155/depositERC1155ForUser"},next:{title:"Exit ERC1155",permalink:"/matic.js/docs/pos/ERC1155/exitERC1155"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Burn ERC1155 tokens(deposited using POS Portal) on Matic chain and retrieve the Transaction hash"),(0,a.kt)("h1",{id:"burn-single-erc721"},"Burn Single ERC721"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"await maticPOSClient.burnSingleERC1155(\n  childToken, // ChildToken address\n  tokenId, // tokenId to burn\n  amount, // amount of tokenId to burn\n  options // transaction fields, can be skipped if default options are set\n)\n")),(0,a.kt)("h1",{id:"burn-batch-erc1155"},"Burn Batch ERC1155"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"await maticPOSClient.burnBatchERC1155(\n  childToken, // ChildToken address\n  tokenIds, // array of tokenIds to burn\n  amounts, // array of amounts corresponding to to each tokenId\n  options // transaction fields, can be skipped if default options are set\n)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"childToken")," must be valid ERC1155 token address"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tokenId")," tokenId for approval (string, not in Number)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"amounts")," array of amounts corresponding to to each tokenId"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"options")," transaction fields, can be skipped if default options are set",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"from")," must be boolean value. For Byte code of transaction, use ",(0,a.kt)("inlineCode",{parentName:"li"},"from: true")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"encodeAbi")," must be boolean value. For Byte code of transaction, use ",(0,a.kt)("inlineCode",{parentName:"li"},"encodeAbi: true"))))),(0,a.kt)("p",null,"This returns ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," object, which will be fulfilled when transaction gets confirmed (when receipt is generated)."),(0,a.kt)("hr",null))}d.isMDXComponent=!0}}]);