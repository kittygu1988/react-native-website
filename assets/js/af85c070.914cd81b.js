"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[72444],{35318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),k=r,s=c["".concat(p,".").concat(k)]||c[k]||d[k]||l;return n?a.createElement(s,i(i({ref:t},u),{},{components:n})):a.createElement(s,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},44666:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return k},default:function(){return g},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return N}});var a=n(35318),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(o)for(var n of o(t))m.call(t,n)&&u(e,n,t[n]);return e};const c={id:"datepickerios",title:"\ud83d\udea7 DatePickerIOS"},k=void 0,s={unversionedId:"datepickerios",id:"version-0.63/datepickerios",title:"\ud83d\udea7 DatePickerIOS",description:"\u5df2\u8fc7\u65f6\u3002 Use @react-native-community/datetimepicker instead.",source:"@site/versioned_docs/version-0.63/datepickerios.md",sourceDirName:".",slug:"/datepickerios",permalink:"/docs/0.63/datepickerios",draft:!1,editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/datepickerios.md",tags:[],version:"0.63",frontMatter:{id:"datepickerios",title:"\ud83d\udea7 DatePickerIOS"}},h={},N=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"Props",id:"props",level:2},{value:"<code>date</code>",id:"date",level:3},{value:"<code>onChange</code>",id:"onchange",level:3},{value:"<code>onDateChange</code>",id:"ondatechange",level:3},{value:"<code>maximumDate</code>",id:"maximumdate",level:3},{value:"<code>minimumDate</code>",id:"minimumdate",level:3},{value:"<code>minuteInterval</code>",id:"minuteinterval",level:3},{value:"<code>mode</code>",id:"mode",level:3},{value:"<code>locale</code>",id:"locale",level:3},{value:"<code>timeZoneOffsetInMinutes</code>",id:"timezoneoffsetinminutes",level:3},{value:"<code>initialDate</code>",id:"initialdate",level:3},{value:"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1asunnylqm(98.31%), sunnylqm(1.69%)",id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9831-sunnylqm169",level:5}],b={toc:N};function g(e){var t,r=e,{components:u}=r,c=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(r,["components"]);return(0,a.kt)("wrapper",(t=d(d({},b),c),l(t,i({components:u,mdxType:"MDXLayout"}))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u5df2\u8fc7\u65f6\u3002")," Use ",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/react-native-community/react-native-datetimepicker"}),"@react-native-community/datetimepicker")," instead.")),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"DatePickerIOS"),"\u6765\u5728 iOS \u5e73\u53f0\u4e0a\u6e32\u67d3\u4e00\u4e2a\u65e5\u671f/\u65f6\u95f4\u9009\u62e9\u5668\u3002\u8fd9\u662f\u4e00\u4e2a\u53d7\u7ea6\u675f\u7684(Controlled)\u7ec4\u4ef6\uff0c\u6240\u4ee5\u4f60\u5fc5\u987b\u76d1\u542c",(0,a.kt)("inlineCode",{parentName:"p"},"onDateChange"),"\u56de\u8c03\u51fd\u6570\u5e76\u4e14\u53ca\u65f6\u66f4\u65b0",(0,a.kt)("inlineCode",{parentName:"p"},"date"),"\u5c5e\u6027\u6765\u4f7f\u5f97\u7ec4\u4ef6\u66f4\u65b0\uff0c\u5426\u5219\u7528\u6237\u7684\u4fee\u6539\u4f1a\u7acb\u523b\u88ab\u64a4\u9500\u6765\u786e\u4fdd\u5f53\u524d\u663e\u793a\u503c\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"props.date"),"\u4e00\u81f4\u3002"),(0,a.kt)("h3",d({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"import React, { Component } from 'react'\nimport {\n  DatePickerIOS,\n  View,\n  StyleSheet,\n} from 'react-native'\n\nexport default class App extends Component {\n  constructor(props) {\n    super(props);\n    this.state = { chosenDate: new Date() };\n\n    this.setDate = this.setDate.bind(this);\n  }\n\n  setDate(newDate) {\n    this.setState({chosenDate: newDate})\n  }\n\n  render() {\n    return (\n      <View style={styles.container}>\n        <DatePickerIOS\n          date={this.state.chosenDate}\n          onDateChange={this.setDate}\n        />\n      </View>\n    )\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    justifyContent: 'center'\n  },\n})\n")),(0,a.kt)("center",null,(0,a.kt)("img",{src:"assets/DatePickerIOS/example.gif",width:"360"})),(0,a.kt)("hr",null),(0,a.kt)("h1",d({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,a.kt)("h2",d({},{id:"props"}),"Props"),(0,a.kt)("h3",d({},{id:"date"}),(0,a.kt)("inlineCode",{parentName:"h3"},"date")),(0,a.kt)("p",null,"\u5f53\u524d\u88ab\u9009\u4e2d\u7684\u65e5\u671f\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Date"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u662f")))),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"onchange"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onChange")),(0,a.kt)("p",null,"Date change handler."),(0,a.kt)("p",null,"This is called when the user changes the date or time in the UI. The first and only argument is an Event. For getting the date the picker was changed to, use onDateChange instead."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"ondatechange"}),(0,a.kt)("inlineCode",{parentName:"h3"},"onDateChange")),(0,a.kt)("p",null,"\u65e5\u671f/\u65f6\u95f4\u53d8\u5316\u7684\u76d1\u542c\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u5f53\u7528\u6237\u4fee\u6539\u65e5\u671f\u6216\u65f6\u95f4\u65f6\u8c03\u7528\u6b64\u56de\u8c03\u51fd\u6570\u3002\u552f\u4e00\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u65e5\u671f\u5bf9\u8c61\uff0c\u8868\u793a\u65b0\u7684\u65e5\u671f\u548c\u65f6\u95f4\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"function"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u662f")))),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"maximumdate"}),(0,a.kt)("inlineCode",{parentName:"h3"},"maximumDate")),(0,a.kt)("p",null,"\u53ef\u9009\u7684\u6700\u5927\u65e5\u671f\u3002"),(0,a.kt)("p",null,"\u9650\u5236\u53ef\u9009\u7684\u65e5\u671f/\u65f6\u95f4\u8303\u56f4\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Date"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("p",null,"Example with ",(0,a.kt)("inlineCode",{parentName:"p"},"maximumDate")," set to December 31, 2017:"),(0,a.kt)("center",null,(0,a.kt)("img",{src:"assets/DatePickerIOS/maximumDate.gif",width:"360"})),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"minimumdate"}),(0,a.kt)("inlineCode",{parentName:"h3"},"minimumDate")),(0,a.kt)("p",null,"\u53ef\u9009\u7684\u6700\u5c0f\u65e5\u671f\u3002"),(0,a.kt)("p",null,"\u9650\u5236\u53ef\u9009\u7684\u65e5\u671f/\u65f6\u95f4\u8303\u56f4\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Date"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("p",null,"See ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/0.63/datepickerios#maximumdate"}),(0,a.kt)("inlineCode",{parentName:"a"},"maximumDate"))," for an example image."),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"minuteinterval"}),(0,a.kt)("inlineCode",{parentName:"h3"},"minuteInterval")),(0,a.kt)("p",null,"\u53ef\u9009\u7684\u6700\u5c0f\u7684\u5206\u949f\u5355\u4f4d\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"enum(1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30)"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("p",null,"Example with ",(0,a.kt)("inlineCode",{parentName:"p"},"minuteInterval")," set to ",(0,a.kt)("inlineCode",{parentName:"p"},"10"),":"),(0,a.kt)("center",null,(0,a.kt)("img",{src:"assets/DatePickerIOS/minuteInterval.png",width:"360"})),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"mode"}),(0,a.kt)("inlineCode",{parentName:"h3"},"mode")),(0,a.kt)("p",null,"\u9009\u62e9\u5668\u6a21\u5f0f\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"enum('date', 'time', 'datetime', 'countdown')"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("p",null,"Example with ",(0,a.kt)("inlineCode",{parentName:"p"},"mode")," set to ",(0,a.kt)("inlineCode",{parentName:"p"},"date"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"time"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"datetime"),": ",(0,a.kt)("img",{src:n(79630).Z,width:"2154",height:"382"})),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"locale"}),(0,a.kt)("inlineCode",{parentName:"h3"},"locale")),(0,a.kt)("p",null,"The locale for the date picker. Value needs to be a ",(0,a.kt)("a",d({parentName:"p"},{href:"https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPInternational/LanguageandLocaleIDs/LanguageandLocaleIDs.html"}),"Locale ID"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"String"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"timezoneoffsetinminutes"}),(0,a.kt)("inlineCode",{parentName:"h3"},"timeZoneOffsetInMinutes")),(0,a.kt)("p",null,"\u65f6\u533a\u5dee\uff0c\u5355\u4f4d\u662f\u5206\u949f\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u9009\u62e9\u5668\u4f1a\u9009\u62e9\u8bbe\u5907\u7684\u9ed8\u8ba4\u65f6\u533a\u3002\u901a\u8fc7\u6b64\u53c2\u6570\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u65f6\u533a\u3002\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u8981\u4f7f\u7528\u5317\u4eac\u65f6\u95f4\uff08\u4e1c\u516b\u533a\uff09\uff0c\u53ef\u4ee5\u4f20\u9012 8 ","*"," 60\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u5fc5\u9700"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"number"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5426")))),(0,a.kt)("hr",null),(0,a.kt)("h3",d({},{id:"initialdate"}),(0,a.kt)("inlineCode",{parentName:"h3"},"initialDate")),(0,a.kt)("p",null,"Provides an initial value that will change when the user starts selecting a date. It is useful for simple use-cases where you do not want to deal with listening to events and updating the date prop to keep the controlled state in sync. The controlled state has known bugs which causes it to go out of sync with native. The initialDate prop is intended to allow you to have native be source of truth."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Date"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"No")))),(0,a.kt)("hr",null),(0,a.kt)("h5",d({},{id:"\u672c\u6587\u6863\u8d21\u732e\u8005sunnylqm9831-sunnylqm169"}),"\u672c\u6587\u6863\u8d21\u732e\u8005\uff1a",(0,a.kt)("a",d({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(98.31%), ",(0,a.kt)("a",d({parentName:"h5"},{href:"https://github.com/search?q=sunnylqm&type=Users"}),"sunnylqm"),"(1.69%)"))}g.isMDXComponent=!0},79630:function(e,t,n){t.Z=n.p+"assets/images/mode-089618b034a4d64bad0b39c4be929f4a.png"}}]);