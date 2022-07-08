"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[46695],{35318:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var o=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||n;return r?o.createElement(d,l(l({ref:t},s),{},{components:r})):o.createElement(d,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<n;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28652:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return k}});var o=r(35318),a=Object.defineProperty,n=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&s(e,r,t[r]);return e};const m={id:"platformcolor",title:"PlatformColor"},f=void 0,d={unversionedId:"platformcolor",id:"platformcolor",title:"PlatformColor",description:"You can use the PlatformColor function to access native colors on the target platform by supplying the native color\u2019s corresponding string value. You pass a string to the PlatformColor function and, provided it exists on that platform, it will return the corresponding native color, which you can apply in any part of your application.",source:"@site/../cndocs/platformcolor.md",sourceDirName:".",slug:"/platformcolor",permalink:"/docs/next/platformcolor",draft:!1,editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/platformcolor.md",tags:[],version:"current",frontMatter:{id:"platformcolor",title:"PlatformColor"},sidebar:"api",previous:{title:"Platform",permalink:"/docs/next/platform"},next:{title:"RootTag",permalink:"/docs/next/roottag"}},h={},k=[{value:"Supported colors",id:"supported-colors",level:3},{value:"Example",id:"example",level:2}],b={toc:k};function y(e){var t,r=e,{components:a}=r,s=((e,t)=>{var r={};for(var o in e)c.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&i)for(var o of i(e))t.indexOf(o)<0&&p.call(e,o)&&(r[o]=e[o]);return r})(r,["components"]);return(0,o.kt)("wrapper",(t=u(u({},b),s),n(t,l({components:a,mdxType:"MDXLayout"}))),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-js"}),"PlatformColor(color1, [color2, ...colorN]);\n")),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"PlatformColor")," function to access native colors on the target platform by supplying the native color\u2019s corresponding string value. You pass a string to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PlatformColor")," function and, provided it exists on that platform, it will return the corresponding native color, which you can apply in any part of your application."),(0,o.kt)("p",null,"If you pass more than one string value to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PlatformColor")," function, it will treat the first value as the default and the rest as fallback."),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-js"}),"PlatformColor('bogusName', 'linkColor');\n")),(0,o.kt)("p",null,"Since native colors can be sensitive to themes and/or high contrast, this platform specific logic also translates inside your components."),(0,o.kt)("h3",u({},{id:"supported-colors"}),"Supported colors"),(0,o.kt)("p",null,"For a full list of the types of system colors supported, see:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Android:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://developer.android.com/reference/android/R.attr"}),"R.attr")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"?attr")," prefix"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://developer.android.com/reference/android/R.color"}),"R.color")," - ",(0,o.kt)("inlineCode",{parentName:"li"},"@android:color")," prefix"))),(0,o.kt)("li",{parentName:"ul"},"iOS (Objective-C and Swift notations):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://developer.apple.com/documentation/uikit/uicolor/standard_colors"}),"UIColor Standard Colors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",u({parentName:"li"},{href:"https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors"}),"UIColor UI Element Colors"))))),(0,o.kt)("h2",u({},{id:"example"}),"Example"),(0,o.kt)("div",u({},{className:"snack-player","data-snack-name":"PlatformColor Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%0A%20%20Platform%2C%0A%20%20PlatformColor%2C%0A%20%20StyleSheet%2C%0A%20%20Text%2C%0A%20%20View%0A%7D%20from%20'react-native'%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CText%20style%3D%7Bstyles.label%7D%3E%0A%20%20%20%20%20%20I%20am%20a%20special%20label%20color!%0A%20%20%20%20%3C%2FText%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20label%3A%20%7B%0A%20%20%20%20padding%3A%2016%2C%0A%20%20%20%20...Platform.select(%7B%0A%20%20%20%20%20%20ios%3A%20%7B%0A%20%20%20%20%20%20%20%20color%3A%20PlatformColor('label')%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%0A%20%20%20%20%20%20%20%20%20%20PlatformColor('systemTealColor')%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20android%3A%20%7B%0A%20%20%20%20%20%20%20%20color%3A%20PlatformColor('%3Fandroid%3Aattr%2FtextColor')%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%0A%20%20%20%20%20%20%20%20%20%20PlatformColor('%40android%3Acolor%2Fholo_blue_bright')%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20default%3A%20%7B%20color%3A%20'black'%20%7D%0A%20%20%20%20%7D)%0A%20%20%7D%2C%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,o.kt)("p",null,"The string value provided to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PlatformColor")," function must match the string as it exists on the native platform where the app is running. In order to avoid runtime errors, the function should be wrapped in a platform check, either through a ",(0,o.kt)("inlineCode",{parentName:"p"},"Platform.OS === 'platform'")," or a ",(0,o.kt)("inlineCode",{parentName:"p"},"Platform.select()"),", as shown on the example above."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," You can find a complete example that demonstrates proper, intended use of ",(0,o.kt)("inlineCode",{parentName:"p"},"PlatformColor")," in ",(0,o.kt)("a",u({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/PlatformColor/PlatformColorExample.js"}),"PlatformColorExample.js"),".")))}y.isMDXComponent=!0}}]);