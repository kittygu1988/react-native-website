"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[74221],{35318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},A=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),A=l(n),m=i,u=A["".concat(c,".").concat(m)]||A[m]||d[m]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=A;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}A.displayName="MDXCreateElement"},35687:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return A}});var a=n(25773),i=n(30808),r=(n(27378),n(35318)),o=["components"],s={id:"using-a-listview",title:"\u4f7f\u7528\u957f\u5217\u8868"},c=void 0,l={unversionedId:"using-a-listview",id:"version-0.64/using-a-listview",isDocsHomePage:!1,title:"\u4f7f\u7528\u957f\u5217\u8868",description:"React Native \u63d0\u4f9b\u4e86\u51e0\u4e2a\u9002\u7528\u4e8e\u5c55\u793a\u957f\u5217\u8868\u6570\u636e\u7684\u7ec4\u4ef6\uff0c\u4e00\u822c\u800c\u8a00\u6211\u4eec\u4f1a\u9009\u7528FlatList\u6216\u662fSectionList\u3002",source:"@site/versioned_docs/version-0.64/using-a-listview.md",sourceDirName:".",slug:"/using-a-listview",permalink:"/docs/0.64/using-a-listview",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/using-a-listview.md",version:"0.64",frontMatter:{id:"using-a-listview",title:"\u4f7f\u7528\u957f\u5217\u8868"},sidebar:"version-0.64/docs",previous:{title:"\u4f7f\u7528\u6eda\u52a8\u89c6\u56fe",permalink:"/docs/0.64/using-a-scrollview"},next:{title:"\u7279\u5b9a\u5e73\u53f0\u4ee3\u7801",permalink:"/docs/0.64/platform-specific-code"}},p=[],d={toc:p};function A(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"React Native \u63d0\u4f9b\u4e86\u51e0\u4e2a\u9002\u7528\u4e8e\u5c55\u793a\u957f\u5217\u8868\u6570\u636e\u7684\u7ec4\u4ef6\uff0c\u4e00\u822c\u800c\u8a00\u6211\u4eec\u4f1a\u9009\u7528",(0,r.kt)("a",{parentName:"p",href:"/docs/0.64/flatlist"},"FlatList"),"\u6216\u662f",(0,r.kt)("a",{parentName:"p",href:"/docs/0.64/sectionlist"},"SectionList"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FlatList"),"\u7ec4\u4ef6\u7528\u4e8e\u663e\u793a\u4e00\u4e2a\u5782\u76f4\u7684\u6eda\u52a8\u5217\u8868\uff0c\u5176\u4e2d\u7684\u5143\u7d20\u4e4b\u95f4\u7ed3\u6784\u8fd1\u4f3c\u800c\u4ec5\u6570\u636e\u4e0d\u540c\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FlatList"),"\u66f4\u9002\u4e8e\u957f\u5217\u8868\u6570\u636e\uff0c\u4e14\u5143\u7d20\u4e2a\u6570\u53ef\u4ee5\u589e\u5220\u3002\u548c",(0,r.kt)("a",{parentName:"p",href:"/docs/0.64/using-a-scrollview"},(0,r.kt)("inlineCode",{parentName:"a"},"ScrollView")),"\u4e0d\u540c\u7684\u662f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"FlatList"),"\u5e76\u4e0d\u7acb\u5373\u6e32\u67d3\u6240\u6709\u5143\u7d20\uff0c\u800c\u662f\u4f18\u5148\u6e32\u67d3\u5c4f\u5e55\u4e0a\u53ef\u89c1\u7684\u5143\u7d20\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"FlatList"),"\u7ec4\u4ef6\u5fc5\u987b\u7684\u4e24\u4e2a\u5c5e\u6027\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"renderItem"),"\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\u662f\u5217\u8868\u7684\u6570\u636e\u6e90\uff0c\u800c",(0,r.kt)("inlineCode",{parentName:"p"},"renderItem"),"\u5219\u4ece\u6570\u636e\u6e90\u4e2d\u9010\u4e2a\u89e3\u6790\u6570\u636e\uff0c\u7136\u540e\u8fd4\u56de\u4e00\u4e2a\u8bbe\u5b9a\u597d\u683c\u5f0f\u7684\u7ec4\u4ef6\u6765\u6e32\u67d3\u3002"),(0,r.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u521b\u5efa\u4e86\u4e00\u4e2a\u7b80\u5355\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"FlatList"),"\uff0c\u5e76\u9884\u8bbe\u4e86\u4e00\u4e9b\u6a21\u62df\u6570\u636e\u3002\u9996\u5148\u662f\u521d\u59cb\u5316",(0,r.kt)("inlineCode",{parentName:"p"},"FlatList"),"\u6240\u9700\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\uff0c\u5176\u4e2d\u7684\u6bcf\u4e00\u9879\uff08\u884c\uff09\u6570\u636e\u4e4b\u540e\u90fd\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"renderItem"),"\u4e2d\u88ab\u6e32\u67d3\u6210\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"Text"),"\u7ec4\u4ef6\uff0c\u6700\u540e\u6784\u6210\u6574\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"FlatList"),"\u3002"),(0,r.kt)("div",{className:"snack-player","data-snack-name":"FlatList Basics","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20FlatList%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20flex%3A%201%2C%0A%20%20%20paddingTop%3A%2022%0A%20%20%7D%2C%0A%20%20item%3A%20%7B%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20height%3A%2044%2C%0A%20%20%7D%2C%0A%7D)%3B%0A%0Aconst%20FlatListBasics%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CFlatList%0A%20%20%20%20%20%20%20%20data%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Devin'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Dan'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Dominic'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Jackson'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'James'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Joel'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'John'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Jillian'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Jimmy'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7Bkey%3A%20'Julie'%7D%2C%0A%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20renderItem%3D%7B(%7Bitem%7D)%20%3D%3E%20%3CText%20style%3D%7Bstyles.item%7D%3E%7Bitem.key%7D%3C%2FText%3E%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20FlatListBasics%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),(0,r.kt)("p",null,"\u5982\u679c\u8981\u6e32\u67d3\u7684\u662f\u4e00\u7ec4\u9700\u8981\u5206\u7ec4\u7684\u6570\u636e\uff0c\u4e5f\u8bb8\u8fd8\u5e26\u6709\u5206\u7ec4\u6807\u7b7e\u7684\uff0c\u90a3\u4e48",(0,r.kt)("inlineCode",{parentName:"p"},"SectionList"),"\u5c06\u662f\u4e2a\u4e0d\u9519\u7684\u9009\u62e9"),(0,r.kt)("div",{className:"snack-player","data-snack-name":"SectionList Basics","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20SectionList%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20flex%3A%201%2C%0A%20%20%20paddingTop%3A%2022%0A%20%20%7D%2C%0A%20%20sectionHeader%3A%20%7B%0A%20%20%20%20paddingTop%3A%202%2C%0A%20%20%20%20paddingLeft%3A%2010%2C%0A%20%20%20%20paddingRight%3A%2010%2C%0A%20%20%20%20paddingBottom%3A%202%2C%0A%20%20%20%20fontSize%3A%2014%2C%0A%20%20%20%20fontWeight%3A%20'bold'%2C%0A%20%20%20%20backgroundColor%3A%20'rgba(247%2C247%2C247%2C1.0)'%2C%0A%20%20%7D%2C%0A%20%20item%3A%20%7B%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20fontSize%3A%2018%2C%0A%20%20%20%20height%3A%2044%2C%0A%20%20%7D%2C%0A%7D)%0A%0Aconst%20SectionListBasics%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%20%20%3CSectionList%0A%20%20%20%20%20%20%20%20%20%20sections%3D%7B%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Btitle%3A%20'D'%2C%20data%3A%20%5B'Devin'%2C%20'Dan'%2C%20'Dominic'%5D%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7Btitle%3A%20'J'%2C%20data%3A%20%5B'Jackson'%2C%20'James'%2C%20'Jillian'%2C%20'Jimmy'%2C%20'Joel'%2C%20'John'%2C%20'Julie'%5D%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%5D%7D%0A%20%20%20%20%20%20%20%20%20%20renderItem%3D%7B(%7Bitem%7D)%20%3D%3E%20%3CText%20style%3D%7Bstyles.item%7D%3E%7Bitem%7D%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20renderSectionHeader%3D%7B(%7Bsection%7D)%20%3D%3E%20%3CText%20style%3D%7Bstyles.sectionHeader%7D%3E%7Bsection.title%7D%3C%2FText%3E%7D%0A%20%20%20%20%20%20%20%20%20%20keyExtractor%3D%7B(item%2C%20index)%20%3D%3E%20index%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%7D%0A%0Aexport%20default%20SectionListBasics%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}),(0,r.kt)("p",null,"\u5217\u8868\u7684\u4e00\u4e2a\u5e38\u7528\u573a\u666f\u5c31\u662f\u4ece\u670d\u52a1\u5668\u7aef\u53d6\u56de\u5217\u8868\u6570\u636e\u7136\u540e\u663e\u793a\uff0c\u8981\u5b9e\u73b0\u8fd9\u4e00\u8fc7\u7a0b\uff0c\u4f60\u53ef\u80fd\u8fd8\u9700\u8981\u5b66\u4e60",(0,r.kt)("a",{parentName:"p",href:"/docs/0.64/network"},"React Native \u7684\u7f51\u7edc\u76f8\u5173\u7528\u6cd5"),"."))}A.isMDXComponent=!0}}]);