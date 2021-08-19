"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[28548],{35318:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(27378);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),c=l,A=m["".concat(d,".").concat(c)]||m[c]||p[c]||r;return a?n.createElement(A,i(i({ref:t},u),{},{components:a})):n.createElement(A,i({ref:t},u))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},45981:function(e,t,a){var n=a(161),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=l?"ios":"android",o=l?"macos":r?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},70517:function(e,t,a){var n=a(27378);t.Z=function(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},64535:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(27378),l=a(84956);var r=function(){var e=(0,n.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(38944),o="tabItem_c0e5",d="tabItemActive_28AG";var s=37,u=39;var p=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,p=e.values,m=e.groupId,c=e.className,A=r(),k=A.tabGroupChoices,h=A.setTabGroupChoices,b=(0,n.useState)(l),C=b[0],g=b[1],N=n.Children.toArray(e.children),y=[];if(null!=m){var f=k[m];null!=f&&f!==C&&p.some((function(e){return e.value===f}))&&g(f)}var v=function(e){var t=e.currentTarget,a=y.indexOf(t),n=p[a].value;g(n),null!=m&&(h(m,n),setTimeout((function(){var e,a,n,l,r,i,o,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,l=e.bottom,r=e.right,i=window,o=i.innerHeight,s=i.innerWidth,a>=0&&r<=s&&l<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(d),setTimeout((function(){return t.classList.remove(d)}),2e3))}),150))},D=function(e){var t,a;switch(e.keyCode){case u:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case s:var l=y.indexOf(e.target)-1;a=y[l]||y[y.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},c)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":C===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:D,onFocus:v,onClick:v},a)}))),t?(0,n.cloneElement)(N.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}},84956:function(e,t,a){var n=(0,a(27378).createContext)(void 0);t.Z=n},72403:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return c},default:function(){return k}});var n=a(25773),l=a(30808),r=(a(27378),a(35318)),i=a(64535),o=a(70517),d=a(45981),s=["components"],u={id:"modal",title:"Modal"},p=void 0,m={unversionedId:"modal",id:"modal",isDocsHomePage:!1,title:"Modal",description:"Modal \u7ec4\u4ef6\u662f\u4e00\u79cd\u7b80\u5355\u7684\u8986\u76d6\u5728\u5176\u4ed6\u89c6\u56fe\u4e4b\u4e0a\u663e\u793a\u5185\u5bb9\u7684\u65b9\u5f0f\u3002",source:"@site/../cndocs/modal.md",sourceDirName:".",slug:"/modal",permalink:"/docs/next/modal",editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/modal.md",version:"current",frontMatter:{id:"modal",title:"Modal"},sidebar:"\u7ec4\u4ef6",previous:{title:"KeyboardAvoidingView",permalink:"/docs/next/keyboardavoidingview"},next:{title:"Pressable",permalink:"/docs/next/pressable"}},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Props",id:"props",children:[{value:"<code>visible</code>",id:"visible",children:[]},{value:"<code>supportedOrientations</code>",id:"supportedorientations",children:[]},{value:"<code>onRequestClose</code>",id:"onrequestclose",children:[]},{value:"<code>onShow</code>",id:"onshow",children:[]},{value:"<code>transparent</code>",id:"transparent",children:[]},{value:"<code>animationType</code>",id:"animationtype",children:[]},{value:"<code>hardwareAccelerated</code>",id:"hardwareaccelerated",children:[]},{value:"<code>statusBarTranslucent</code>",id:"statusbartranslucent",children:[]},{value:"<code>onDismiss</code>",id:"ondismiss",children:[]},{value:"<code>onOrientationChange</code>",id:"onorientationchange",children:[]},{value:"<code>presentationStyle</code>",id:"presentationstyle",children:[]}]}],A={toc:c};function k(e){var t=e.components,a=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},A,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Modal \u7ec4\u4ef6\u662f\u4e00\u79cd\u7b80\u5355\u7684\u8986\u76d6\u5728\u5176\u4ed6\u89c6\u56fe\u4e4b\u4e0a\u663e\u793a\u5185\u5bb9\u7684\u65b9\u5f0f\u3002"),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)(i.Z,{groupId:"syntax",defaultValue:d.Z.defaultSyntax,values:d.Z.syntax,mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"functional",mdxType:"TabItem"},(0,r.kt)("div",{className:"snack-player","data-snack-name":"Modal","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Alert%2C%0A%20%20Modal%2C%0A%20%20StyleSheet%2C%0A%20%20Text%2C%0A%20%20TouchableHighlight%2C%0A%20%20View%0A%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BmodalVisible%2C%20setModalVisible%5D%20%3D%20useState(false)%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%0A%20%20%20%20%20%20%3CModal%0A%20%20%20%20%20%20%20%20animationType%3D%22slide%22%0A%20%20%20%20%20%20%20%20transparent%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20visible%3D%7BmodalVisible%7D%0A%20%20%20%20%20%20%20%20onRequestClose%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20Alert.alert(%22Modal%20has%20been%20closed.%22)%3B%0A%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.modalView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.modalText%7D%3EHello%20World!%3C%2FText%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableHighlight%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20...styles.openButton%2C%20backgroundColor%3A%20%22%232196F3%22%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EHide%20Modal%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FModal%3E%0A%0A%20%20%20%20%20%20%3CTouchableHighlight%0A%20%20%20%20%20%20%20%20style%3D%7Bstyles.openButton%7D%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setModalVisible(true)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EShow%20Modal%3C%2FText%3E%0A%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20centeredView%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20marginTop%3A%2022%0A%20%20%7D%2C%0A%20%20modalView%3A%20%7B%0A%20%20%20%20margin%3A%2020%2C%0A%20%20%20%20backgroundColor%3A%20%22white%22%2C%0A%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20padding%3A%2035%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20shadowColor%3A%20%22%23000%22%2C%0A%20%20%20%20shadowOffset%3A%20%7B%0A%20%20%20%20%20%20width%3A%200%2C%0A%20%20%20%20%20%20height%3A%202%0A%20%20%20%20%7D%2C%0A%20%20%20%20shadowOpacity%3A%200.25%2C%0A%20%20%20%20shadowRadius%3A%203.84%2C%0A%20%20%20%20elevation%3A%205%0A%20%20%7D%2C%0A%20%20openButton%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22%23F194FF%22%2C%0A%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20elevation%3A%202%0A%20%20%7D%2C%0A%20%20textStyle%3A%20%7B%0A%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20modalText%3A%20%7B%0A%20%20%20%20marginBottom%3A%2015%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})),(0,r.kt)(o.Z,{value:"classical",mdxType:"TabItem"},(0,r.kt)("div",{className:"snack-player","data-snack-name":"Modal","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%0A%20%20Alert%2C%0A%20%20Modal%2C%0A%20%20StyleSheet%2C%0A%20%20Text%2C%0A%20%20TouchableHighlight%2C%0A%20%20View%0A%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20state%20%3D%20%7B%0A%20%20%20%20modalVisible%3A%20false%0A%20%20%7D%3B%0A%0A%20%20setModalVisible%20%3D%20(visible)%20%3D%3E%20%7B%0A%20%20%20%20this.setState(%7B%20modalVisible%3A%20visible%20%7D)%3B%0A%20%20%7D%0A%0A%20%20render()%20%7B%0A%20%20%20%20const%20%7B%20modalVisible%20%7D%20%3D%20this.state%3B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%0A%20%20%20%20%20%20%20%20%3CModal%0A%20%20%20%20%20%20%20%20%20%20animationType%3D%22slide%22%0A%20%20%20%20%20%20%20%20%20%20transparent%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20%20%20visible%3D%7BmodalVisible%7D%0A%20%20%20%20%20%20%20%20%20%20onRequestClose%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20Alert.alert(%22Modal%20has%20been%20closed.%22)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.centeredView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.modalView%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.modalText%7D%3EHello%20World!%3C%2FText%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CTouchableHighlight%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20...styles.openButton%2C%20backgroundColor%3A%20%22%232196F3%22%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20this.setModalVisible(!modalVisible)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EHide%20Modal%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%20%20%3C%2FModal%3E%0A%0A%20%20%20%20%20%20%20%20%3CTouchableHighlight%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.openButton%7D%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20this.setModalVisible(true)%3B%0A%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3EShow%20Modal%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FTouchableHighlight%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20centeredView%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20marginTop%3A%2022%0A%20%20%7D%2C%0A%20%20modalView%3A%20%7B%0A%20%20%20%20margin%3A%2020%2C%0A%20%20%20%20backgroundColor%3A%20%22white%22%2C%0A%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20padding%3A%2035%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20shadowColor%3A%20%22%23000%22%2C%0A%20%20%20%20shadowOffset%3A%20%7B%0A%20%20%20%20%20%20width%3A%200%2C%0A%20%20%20%20%20%20height%3A%202%0A%20%20%20%20%7D%2C%0A%20%20%20%20shadowOpacity%3A%200.25%2C%0A%20%20%20%20shadowRadius%3A%203.84%2C%0A%20%20%20%20elevation%3A%205%0A%20%20%7D%2C%0A%20%20openButton%3A%20%7B%0A%20%20%20%20backgroundColor%3A%20%22%23F194FF%22%2C%0A%20%20%20%20borderRadius%3A%2020%2C%0A%20%20%20%20padding%3A%2010%2C%0A%20%20%20%20elevation%3A%202%0A%20%20%7D%2C%0A%20%20textStyle%3A%20%7B%0A%20%20%20%20color%3A%20%22white%22%2C%0A%20%20%20%20fontWeight%3A%20%22bold%22%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20modalText%3A%20%7B%0A%20%20%20%20marginBottom%3A%2015%2C%0A%20%20%20%20textAlign%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"\u6587\u6863"},"\u6587\u6863"),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("h3",{id:"visible"},(0,r.kt)("inlineCode",{parentName:"h3"},"visible")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"visible"),"\u5c5e\u6027\u51b3\u5b9a modal \u662f\u5426\u663e\u793a\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"supportedorientations"},(0,r.kt)("inlineCode",{parentName:"h3"},"supportedOrientations")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"supportedOrientations"),"\u7528\u4e8e\u6307\u5b9a\u5728\u8bbe\u5907\u5207\u6362\u6a2a\u7ad6\u5c4f\u65b9\u5411\u65f6\uff0cmodal \u4f1a\u5728\u54ea\u4e9b\u5c4f\u5e55\u671d\u5411\u4e0b\u8ddf\u968f\u65cb\u8f6c\u3002\u5728 iOS \u4e0a\uff0c\u9664\u4e86\u672c\u5c5e\u6027\u5916\uff0c\u8fd8\u4f1a\u53d7\u5230\u5e94\u7528\u7684 Info.plist \u6587\u4ef6\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"UISupportedInterfaceOrientations"),"\u7684\u9650\u5236\u3002\u5982\u679c\u8fd8\u8bbe\u7f6e\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"presentationStyle"),"\u5c5e\u6027\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"pageSheet"),"\u6216",(0,r.kt)("inlineCode",{parentName:"p"},"formSheet"),"\uff0c\u5219\u5728 iOS \u4e0a\u672c\u5c5e\u6027\u5c06\u88ab\u5ffd\u7565\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"array of enum('portrait', 'portrait-upside-down', 'landscape', 'landscape-left', 'landscape-right')"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"iOS")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onrequestclose"},(0,r.kt)("inlineCode",{parentName:"h3"},"onRequestClose")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"onRequestClose"),"\u56de\u8c03\u4f1a\u5728\u7528\u6237\u6309\u4e0b Android \u8bbe\u5907\u4e0a\u7684\u540e\u9000\u6309\u952e\u6216\u662f Apple TV \u4e0a\u7684\u83dc\u5355\u952e\u65f6\u89e6\u53d1\u3002\u8bf7\u52a1\u5fc5\u6ce8\u610f\u672c\u5c5e\u6027\u5728 Android \u5e73\u53f0\u4e0a\u4e3a\u5fc5\u9700\uff0c\u4e14\u4f1a\u5728 modal \u5904\u4e8e\u5f00\u542f\u72b6\u6001\u65f6\u963b\u6b62",(0,r.kt)("inlineCode",{parentName:"p"},"BackHandler"),"\u4e8b\u4ef6\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"Android, Platform.isTVOS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"(Others)")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onshow"},(0,r.kt)("inlineCode",{parentName:"h3"},"onShow")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"onShow"),"\u56de\u8c03\u51fd\u6570\u4f1a\u5728 modal \u663e\u793a\u65f6\u8c03\u7528\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"transparent"},(0,r.kt)("inlineCode",{parentName:"h3"},"transparent")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"transparent")," \u5c5e\u6027\u662f\u6307\u80cc\u666f\u662f\u5426\u900f\u660e\uff0c\u9ed8\u8ba4\u4e3a\u767d\u8272\uff0c\u5c06\u8fd9\u4e2a\u5c5e\u6027\u8bbe\u4e3a\uff1atrue \u7684\u65f6\u5019\u5f39\u51fa\u4e00\u4e2a\u900f\u660e\u80cc\u666f\u5c42\u7684 modal\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"animationtype"},(0,r.kt)("inlineCode",{parentName:"h3"},"animationType")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"animationType"),"\u6307\u5b9a\u4e86 modal \u7684\u52a8\u753b\u7c7b\u578b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"slide")," \u4ece\u5e95\u90e8\u6ed1\u5165\u6ed1\u51fa\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fade")," \u6de1\u5165\u6de1\u51fa\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"none")," \u6ca1\u6709\u52a8\u753b\uff0c\u76f4\u63a5\u8e66\u51fa\u6765\u3002")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"none"),"\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enum('none', 'slide', 'fade')"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hardwareaccelerated"},(0,r.kt)("inlineCode",{parentName:"h3"},"hardwareAccelerated")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"hardwareAccelerated"),"\u5c5e\u6027\u51b3\u5b9a\u662f\u5426\u5f3a\u5236\u542f\u7528\u786c\u4ef6\u52a0\u901f\u6765\u7ed8\u5236\u5f39\u51fa\u5c42\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"Android")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"statusbartranslucent"},(0,r.kt)("inlineCode",{parentName:"h3"},"statusBarTranslucent")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"statusBarTranslucent")," prop determines whether your modal should go under the system statusbar."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"Android")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"ondismiss"},(0,r.kt)("inlineCode",{parentName:"h3"},"onDismiss")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"onDismiss"),"\u56de\u8c03\u4f1a\u5728 modal \u88ab\u5173\u95ed\u65f6\u8c03\u7528\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"iOS")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"onorientationchange"},(0,r.kt)("inlineCode",{parentName:"h3"},"onOrientationChange")),(0,r.kt)("p",null,"\u6a21\u6001\u7a97\u663e\u793a\u7684\u65f6\u5019\uff0c\u5f53\u8bbe\u5907\u65b9\u5411\u53d1\u751f\u66f4\u6539\u65f6\uff0c\u5c06\u8c03\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"onOrientationChange"),"\u56de\u8c03\u65b9\u6cd5\u3002 \u63d0\u4f9b\u7684\u8bbe\u5907\u65b9\u5411\u4ec5\u4e3a\u201c\u7ad6\u5c4f\u201d\u6216\u201c\u6a2a\u5c4f\u201d\u3002 \u65e0\u8bba\u5f53\u524d\u65b9\u5411\u5982\u4f55\uff0c\u4e5f\u4f1a\u5728\u521d\u59cb\u6e32\u67d3\u65f6\u8c03\u7528\u6b64\u56de\u8c03\u65b9\u6cd5\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"function"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"iOS")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"presentationstyle"},(0,r.kt)("inlineCode",{parentName:"h3"},"presentationStyle")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"presentationStyle"),"\u51b3\u5b9a modal\uff08\u5728\u8f83\u5927\u5c4f\u5e55\u7684\u8bbe\u5907\u6bd4\u5982 iPad \u6216\u662f Plus \u673a\u578b\uff09\u5982\u4f55\u5c55\u73b0\u3002\u66f4\u591a\u7ec6\u8282\u8bf7\u53c2\u9605",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/reference/uikit/uimodalpresentationstyle"},"https://developer.apple.com/reference/uikit/uimodalpresentationstyle"),"\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fullScreen"),"\u5b8c\u5168\u76d6\u6ee1\u5c4f\u5e55\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pageSheet"),"\u7ad6\u76f4\u65b9\u5411\u51e0\u4e4e\u76d6\u6ee1\uff0c\u6c34\u5e73\u5c45\u4e2d\uff0c\u5de6\u53f3\u7559\u51fa\u4e00\u5b9a\u7a7a\u767d\uff08\u4ec5\u7528\u4e8e\u5927\u5c4f\u8bbe\u5907\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"formSheet"),"\u7ad6\u76f4\u548c\u6c34\u5e73\u90fd\u5c45\u4e2d\uff0c\u56db\u5468\u90fd\u7559\u51fa\u4e00\u5b9a\u7a7a\u767d\uff08\u4ec5\u7528\u4e8e\u5927\u5c4f\u8bbe\u5907\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"overFullScreen"),"\u5b8c\u5168\u76d6\u6ee1\u5c4f\u5e55\uff0c\u540c\u65f6\u5141\u8bb8\u900f\u660e\u3002")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u4f1a\u6839\u636e",(0,r.kt)("inlineCode",{parentName:"p"},"transparent"),"\u5c5e\u6027\u800c\u8bbe\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"overFullScreen"),"\u6216\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"fullScreen"),"\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9700"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5e73\u53f0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"enum('fullScreen', 'pageSheet', 'formSheet', 'overFullScreen')"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"iOS")))))}k.isMDXComponent=!0}}]);