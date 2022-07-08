"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[38896],{35318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},490:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return g}});var r=n(35318),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(p)for(var n of p(t))s.call(t,n)&&c(e,n,t[n]);return e};const m={id:"typescript",title:"\u4f7f\u7528 TypeScript"},d=void 0,y={unversionedId:"typescript",id:"version-0.64/typescript",title:"\u4f7f\u7528 TypeScript",description:"TypeScript is a language which extends JavaScript by adding type definitions, much like Flow. While React Native is built in Flow, it supports both TypeScript and Flow by default.",source:"@site/versioned_docs/version-0.64/typescript.md",sourceDirName:".",slug:"/typescript",permalink:"/docs/0.64/typescript",draft:!1,editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/typescript.md",tags:[],version:"0.64",frontMatter:{id:"typescript",title:"\u4f7f\u7528 TypeScript"},sidebar:"version-0.64/docs",previous:{title:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93",permalink:"/docs/0.64/libraries"},next:{title:"\u66f4\u65b0",permalink:"/docs/0.64/upgrading"}},h={},g=[{value:"Getting Started with TypeScript",id:"getting-started-with-typescript",level:2},{value:"\u5728\u5df2\u6709\u7684\u9879\u76ee\u4e2d\u6dfb\u52a0 TypeScript",id:"\u5728\u5df2\u6709\u7684\u9879\u76ee\u4e2d\u6dfb\u52a0-typescript",level:2},{value:"TypeScript \u548c React Native \u662f\u5982\u4f55\u5de5\u4f5c\u7684",id:"typescript-\u548c-react-native-\u662f\u5982\u4f55\u5de5\u4f5c\u7684",level:2},{value:"What does React Native + TypeScript look like",id:"what-does-react-native--typescript-look-like",level:2},{value:"Where to Find Useful Advice",id:"where-to-find-useful-advice",level:2},{value:"Using Custom Path Aliases with TypeScript",id:"using-custom-path-aliases-with-typescript",level:2}],f={toc:g};function k(e){var t,n=e,{components:a}=n,c=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=u(u({},f),c),i(t,o({components:a,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,(0,r.kt)("a",u({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript")," is a language which extends JavaScript by adding type definitions, much like ",(0,r.kt)("a",u({parentName:"p"},{href:"https://flow.org"}),"Flow"),". While React Native is built in Flow, it supports both TypeScript ",(0,r.kt)("em",{parentName:"p"},"and")," Flow by default."),(0,r.kt)("h2",u({},{id:"getting-started-with-typescript"}),"Getting Started with TypeScript"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u8981\u5f00\u59cb\u4e00\u4e2a\u65b0\u9879\u76ee\uff0c\u5219\u6709\u51e0\u79cd\u4e0d\u540c\u7684\u4e0a\u624b\u65b9\u6cd5\u3002 \u60a8\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("a",u({parentName:"p"},{href:"https://github.com/react-native-community/react-native-template-typescript"}),"TypeScript \u6a21\u677f"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-sh"}),"npx react-native init MyApp --template react-native-template-typescript\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note")," \u5982\u679c\u4ee5\u4e0a\u547d\u4ee4\u5931\u8d25\uff0c\u5219\u53ef\u80fd\u662f\u60a8\u7684 PC \u4e0a\u5168\u5c40\u5b89\u88c5\u4e86\u65e7\u7248\u672c\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"react-native"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-cli"),"\u3002 \u5c1d\u8bd5\u5378\u8f7d cli \u5e76\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"npx"),"\u8fd0\u884c cli.")),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528\u5177\u6709\u4e24\u4e2a TypeScript \u6a21\u677f\u7684",(0,r.kt)("a",u({parentName:"p"},{href:"https://expo.io"}),"Expo"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-sh"}),"npm install -g expo-cli\nexpo init MyTSProject\n")),(0,r.kt)("p",null,"\u6216\u8005\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("a",u({parentName:"p"},{href:"https://infinite.red/ignite"}),"Ignite"),"\uff0c\u5b83\u4e5f\u5177\u6709 TypeScript \u6a21\u677f:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-sh"}),"npm install -g ignite-cli\nignite new MyTSProject\n")),(0,r.kt)("h2",u({},{id:"\u5728\u5df2\u6709\u7684\u9879\u76ee\u4e2d\u6dfb\u52a0-typescript"}),"\u5728\u5df2\u6709\u7684\u9879\u76ee\u4e2d\u6dfb\u52a0 TypeScript"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5c06 TypeScript \u4ee5\u53ca React Native \u548c Jest \u7684\u4f9d\u8d56\u6dfb\u52a0\u5230\u60a8\u7684\u9879\u76ee\u4e2d\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-sh"}),"yarn add --dev typescript @types/jest @types/react @types/react-native @types/react-test-renderer\n# or for npm\nnpm install --save-dev typescript @types/jest @types/react @types/react-native @types/react-test-renderer\n")),(0,r.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a TypeScript \u914d\u7f6e\u6587\u4ef6\u3002 \u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e2d\u521b\u5efa\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "allowJs": true,\n    "allowSyntheticDefaultImports": true,\n    "esModuleInterop": true,\n    "isolatedModules": true,\n    "jsx": "react",\n    "lib": ["es6"],\n    "moduleResolution": "node",\n    "noEmit": true,\n    "strict": true,\n    "target": "esnext"\n  },\n  "exclude": [\n    "node_modules",\n    "babel.config.js",\n    "metro.config.js",\n    "jest.config.js"\n  ]\n}\n')),(0,r.kt)("ol",u({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"li"},"jest.config.js"),"\u6587\u4ef6\u6765\u914d\u7f6e Jest \u4ee5\u4f7f\u7528 TypeScript:")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  preset: 'react-native',\n  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']\n};\n")),(0,r.kt)("ol",u({},{start:4}),(0,r.kt)("li",{parentName:"ol"},"\u5c06 JavaScript \u6587\u4ef6\u91cd\u547d\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"li"},"* .tsx"),":")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bf7\u4fdd\u7559",(0,r.kt)("inlineCode",{parentName:"p"},"./index.js"),"\u5165\u53e3\u6587\u4ef6\uff0c\u5426\u5219\u5c06\u5728\u6253\u5305\u751f\u4ea7\u7248\u672c\u65f6\u9047\u5230\u95ee\u9898\u3002")),(0,r.kt)("ol",u({},{start:5}),(0,r.kt)("li",{parentName:"ol"},"\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"yarn tsc")," \u5bf9 TypeScript \u6587\u4ef6\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5\u3002")),(0,r.kt)("h2",u({},{id:"typescript-\u548c-react-native-\u662f\u5982\u4f55\u5de5\u4f5c\u7684"}),"TypeScript \u548c React Native \u662f\u5982\u4f55\u5de5\u4f5c\u7684"),(0,r.kt)("p",null,"\u65e0\u9700\u989d\u5916\u914d\u7f6e\uff0c\u548c\u975e TypeScript \u7684 React Native \u9879\u76ee\u4e00\u6837\u90fd\u662f\u76f4\u63a5\u901a\u8fc7 ",(0,r.kt)("a",u({parentName:"p"},{href:"javascript-environment#javascript-syntax-transformers"}),"Babel \u4f53\u7cfb")," \u5c06\u60a8\u7684\u6587\u4ef6\u8f6c\u6362\u4e3a JavaScript\u3002\u6211\u4eec\u5efa\u8bae\u60a8\u53ea\u4f7f\u7528 TypeScript \u7f16\u8bd1\u5668\u7684\u7c7b\u578b\u68c0\u67e5\u529f\u80fd\uff08\u800c\u4e0d\u662f\u7f16\u8bd1\uff09\u3002\u5982\u679c\u60a8\u6709\u5df2\u7ecf\u5b58\u5728\u7684 TypeScript \u4ee3\u7801\u9700\u8981\u8fc1\u79fb\u5230 React Native\uff0c\u8fd9\u91cc\u6709\u4e00\u4e9b\u5173\u4e8e\u4f7f\u7528 Babel \u800c\u4e0d\u662f TypeScript \u7f16\u8bd1\u5668\u7684",(0,r.kt)("a",u({parentName:"p"},{href:"https://babeljs.io/docs/en/next/babel-plugin-transform-typescript"}),"\u6ce8\u610f\u4e8b\u9879"),"\u3002"),(0,r.kt)("h2",u({},{id:"what-does-react-native--typescript-look-like"}),"What does React Native + TypeScript look like"),(0,r.kt)("p",null,"You can provide an interface for a React Component's ",(0,r.kt)("a",u({parentName:"p"},{href:"props"}),"Props")," and ",(0,r.kt)("a",u({parentName:"p"},{href:"state"}),"State")," via ",(0,r.kt)("inlineCode",{parentName:"p"},"React.Component<Props, State>")," which will provide type-checking and editor auto-completing when working with that component in JSX."),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-tsx"}),"// components/Hello.tsx\nimport React from 'react';\nimport { Button, StyleSheet, Text, View } from 'react-native';\n\nexport interface Props {\n  name: string;\n  enthusiasmLevel?: number;\n}\n\nconst Hello: React.FC<Props> = (props) => {\n  const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(\n    props.enthusiasmLevel\n  );\n\n  const onIncrement = () =>\n    setEnthusiasmLevel((enthusiasmLevel || 0) + 1);\n  const onDecrement = () =>\n    setEnthusiasmLevel((enthusiasmLevel || 0) - 1);\n\n  const getExclamationMarks = (numChars: number) =>\n    Array(numChars + 1).join('!');\n  return (\n    <View style={styles.root}>\n      <Text style={styles.greeting}>\n        Hello{' '}\n        {props.name + getExclamationMarks(enthusiasmLevel || 0)}\n      </Text>\n\n      <View style={styles.buttons}>\n        <View style={styles.button}>\n          <Button\n            title=\"-\"\n            onPress={onDecrement}\n            accessibilityLabel=\"decrement\"\n            color=\"red\"\n          />\n        </View>\n\n        <View style={styles.button}>\n          <Button\n            title=\"+\"\n            onPress={onIncrement}\n            accessibilityLabel=\"increment\"\n            color=\"blue\"\n          />\n        </View>\n      </View>\n    </View>\n  );\n};\n\n// styles\nconst styles = StyleSheet.create({\n  root: {\n    alignItems: 'center',\n    alignSelf: 'center'\n  },\n  buttons: {\n    flexDirection: 'row',\n    minHeight: 70,\n    alignItems: 'stretch',\n    alignSelf: 'center',\n    borderWidth: 5\n  },\n  button: {\n    flex: 1,\n    paddingVertical: 0\n  },\n  greeting: {\n    color: '#999',\n    fontWeight: 'bold'\n  }\n});\n\nexport default Hello;\n")),(0,r.kt)("p",null,"You can explore the syntax more in the ",(0,r.kt)("a",u({parentName:"p"},{href:"https://www.typescriptlang.org/play/?strictNullChecks=false&esModuleInterop=true&jsx=3#code/JYWwDg9gTgLgBAJQKYEMDG8BmUIjgcilQ3wG4BYAKFEljgG8AhAVxhggDsAaOAZRgCeAGyS8AFkiQweAFSQAPaXABqwJAHcAvnGy4CRdDAC0HFDGAA3JGSpUFteMA4wkUTOiRwACjjABnBio4YLhTECQALjg-GCgnAHMKShC4JGcxZj9gFD8QABkkKyEAfiiOZhAAI1ckzVtKNE4YuAAJJCEhCCjkQwA6ADEAYQAeHwh-AD44AF44AAowXz8AShmp+iCQxo5mgG00mAysnPzC9p4-KQBRdMzs3IKigF0ZxGIYXszRGDMkBaXegcjvdTkVlklNsFts1OABJDhoIjhZyvOaraZTS4wG6HO4nR7tOZzIF4h5nIRwAA+lLgAAZVgBqOAARnBkLg0PgnAAIkhEUhkfBZmi1tFrrdjmSikSSZLQe0qTT6XAjCy2ZR2Zy4PFrvI0EIUCAzMBOABZFBQADWAWF5RAgzEFr8ZQq1Sg6KmAEEoFAUAI5naHU64EzWb0AFYQJxzfAAQnw6pSRBgzCgHHm7JSw1UGmighE03oMWESD8vRwEBgmgmmZCwzkijzJcLxZEZfiRCkCWrtZSwTaHQg9HwBDqyT7E-oi3GZbCniZOuxeoNRvMZot1uJEpBBIp1LpyzHE+CwwA9A2YDWNeOJ9m1OomwWi-nS71Kqx2Dsezfjyecw-WyQFsXzLd82E4b9fyzFhwI4XsoPMGACwAIiMZD4N-TgfFLPxCx5PkkQOI8oIndA0Bw4BKmAIRgEEPIUGqIRpmQgATAiBQOdCfxIqEIE6KBmKIFiuJ4uBTyvUSz3-K8MLrf9HyA58S1Aj8IIknjhhgz9ZInRCUIZETRJCLCiD8XD6DhBFCOcYijLgMiKKomi6IY9pmKcflBUMuzGn45jKiEZgkG8qDxJ0uApPvdTb1PaT4MijRorgRMQjHMcqFPU8FL8KgtUAm0+BfcRJA+flfjmDYfwrGAokq38UBo+IOFhFwQGdAhyOcVx8C4eCGuAJreHaTAonwTqXCgHr2U0XqfzAz92rqidMBEeRuWAIgMBNDhRpwdQpu4kIQCcNoBrEGq4AAdlpWb6sa5rWva-AYmTNAxAOu6Bo4IahBGjqDm627j0qaA2KgAB1YAWMOKIAFYgeCGb2XmzhavglaFCiZkEb7MAUBYliEmUVxzDQBqohu6acY7EqEjRw7eP40aAGIAE52Y+49ME4GBwaQM6LvwEGhBYznEdmzRwSAA"}),"TypeScript playground"),"."),(0,r.kt)("h2",u({},{id:"where-to-find-useful-advice"}),"Where to Find Useful Advice"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"http://www.typescriptlang.org/docs/home.html"}),"TypeScript Handbook")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://zh-hans.reactjs.org/docs/static-type-checking.html#typescript"}),"React's documentation on TypeScript")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/typescript-cheatsheets/react-typescript-cheatsheet#reacttypescript-cheatsheets"}),"React + TypeScript Cheatsheets")," has a good overview on how to use React with TypeScript")),(0,r.kt)("h2",u({},{id:"using-custom-path-aliases-with-typescript"}),"Using Custom Path Aliases with TypeScript"),(0,r.kt)("p",null,"To use custom path aliases with TypeScript, you need to set the path aliases to work from both Babel and TypeScript. Here's how:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Edit your ",(0,r.kt)("inlineCode",{parentName:"li"},"tsconfig.json")," to have your ",(0,r.kt)("a",u({parentName:"li"},{href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping"}),"custom path mappings"),". Set anything in the root of ",(0,r.kt)("inlineCode",{parentName:"li"},"src")," to be available with no preceding path reference, and allow any test file to be accessed by using ",(0,r.kt)("inlineCode",{parentName:"li"},"test/File.tsx"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-diff"}),'    "target": "esnext",\n+     "baseUrl": ".",\n+     "paths": {\n+       "*": ["src/*"],\n+       "tests": ["tests/*"],\n+       "@components/*": ["src/components/*"],\n+     },\n    }\n')),(0,r.kt)("ol",u({},{start:2}),(0,r.kt)("li",{parentName:"ol"},"Configure the Babel side done by adding a new dependency, ",(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/tleunen/babel-plugin-module-resolver"}),(0,r.kt)("inlineCode",{parentName:"a"},"babel-plugin-module-resolver")),":")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-sh"}),"yarn add --dev babel-plugin-module-resolver\n# or\nnpm install --save-dev babel-plugin-module-resolver\n")),(0,r.kt)("ol",u({},{start:3}),(0,r.kt)("li",{parentName:"ol"},"Finally, configure your ",(0,r.kt)("inlineCode",{parentName:"li"},"babel.config.js")," (note that the syntax for your ",(0,r.kt)("inlineCode",{parentName:"li"},"babel.config.js")," is different from your ",(0,r.kt)("inlineCode",{parentName:"li"},"tsconfig.json"),"):")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-diff"}),"{\n  plugins: [\n+    [\n+       'module-resolver',\n+       {\n+         root: ['./src'],\n+         extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],\n+         alias: {\n+           \"tests\": [\"./tests/\"],\n+           \"@components\": \"./src/components\",\n+         }\n+       }\n+     ]\n  ]\n}\n")))}k.isMDXComponent=!0}}]);