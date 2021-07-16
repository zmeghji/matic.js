(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[573],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2830:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:6},s="Transfer with Signature",p={unversionedId:"plasma/transferWithSignature",id:"plasma/transferWithSignature",isDocsHomePage:!1,title:"Transfer with Signature",description:"`js",source:"@site/docs/plasma/transferWithSignature.md",sourceDirName:"plasma",slug:"/plasma/transferWithSignature",permalink:"/matic.js/docs/plasma/transferWithSignature",editUrl:"https://github.com/maticnetwork/matic.js/edit/master/docs/docs/plasma/transferWithSignature.md",version:"current",lastUpdatedBy:"fuzious",lastUpdatedAt:1626451072,formattedLastUpdatedAt:"7/16/2021",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Get Transfer Signature",permalink:"/matic.js/docs/plasma/getTransferSignature"},next:{title:"Process Exit",permalink:"/matic.js/docs/plasma/processExits"}},u=[],c={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transfer-with-signature"},"Transfer with Signature"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"matic.transferWithSignature(sig, toSell, toBuy, orderFiller);\n")),(0,i.kt)("p",null,"Executes ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/maticnetwork/contracts/blob/a9b77252ece25adcd3f74443411821883bb970e6/contracts/child/BaseERC20.sol#L35"},"transferWithSig")," on child token (erc20/721). Takes input as signature generated from ",(0,i.kt)("inlineCode",{parentName:"p"},"matic.getTransferSignature")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sig"),": signature generated with matic.getTransferSignature"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"toSell"),": object",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"token"),": address of token owned,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amount"),": amount/tokenId of the token to sell,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expiry"),": expiry (block number after which the signature should be invalid),"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"orderId"),": a random 32 byte hex string,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spender"),": the address approved to execute this transaction"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"toBuy"),": object",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"token"),": address of token to buy"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amount"),": amount/tokenId of token to buy"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"orderFiller"),": address of user to transfer the tokens to"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," see ",(0,i.kt)("a",{parentName:"li",href:"#approveERC20TokensForDeposit"},"more infomation here"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"from"),": the approved spender in the ",(0,i.kt)("inlineCode",{parentName:"li"},"toSell")," object by the token owner")))),(0,i.kt)("p",null,"transfers ",(0,i.kt)("inlineCode",{parentName:"p"},"toSell.token")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenOwner")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"orderFiller")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// sell order\nlet toSell = {\n  token: token2,\n  amount: value2,\n  expiry: expire,\n  orderId: orderId,\n  spender: spender,\n};\n\n// buy order\nlet toBuy = {\n  token: token1,\n  amount: value1,\n};\n\nlet sig = await matic.getTransferSignature(toSell, toBuy, { from: tokenOwner });\n\nconst tx = await matic.transferWithSignature(\n  sig, // signature with the intent to buy tokens\n  toSell, // sell order\n  toBuy, // buy order\n  orderFiller, // order fulfiller\n  {\n    from: spender, // approved spender\n  }\n);\n")),(0,i.kt)("hr",null))}m.isMDXComponent=!0}}]);