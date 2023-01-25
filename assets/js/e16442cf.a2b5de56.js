"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[92113],{35318:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(b,i(i({ref:t},s),{},{components:n})):a.createElement(b,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11674:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(63445);const r=!!a.Z.canUseDOM&&navigator.platform.startsWith("Mac"),o=!!a.Z.canUseDOM&&navigator.platform.startsWith("Win"),i={defaultGuide:"native",defaultOs:r?"macos":o?"windows":"linux",defaultPackageManager:"npm",defaultPlatform:r?"ios":"android",defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(27378),r=n(38944);const o="tabItem_wHwb";var i=Object.defineProperty,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function p({children:e,hidden:t,className:n}){return a.createElement("div",((e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&s(e,n,t[n]);return e})({role:"tabpanel",className:(0,r.Z)(o,n)},{hidden:t}),e)}},27789:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(27378),r=n(38944),o=n(14185),i=n(27886),l=n(77184),c=n(12112);const u="tabList_J5MA",s="tabItem_l0OV";var p=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,h=(e,t,n)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))v.call(t,n)&&h(e,n,t[n]);if(b)for(var n of b(t))f.call(t,n)&&h(e,n,t[n]);return e};function y(e){var t,n;const{lazy:o,block:p,defaultValue:b,values:v,groupId:f,className:h}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=null!=v?v:y.map((({props:{value:e,label:t,attributes:n}})=>({value:e,label:t,attributes:n}))),N=(0,i.l)(w,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===b?b:null!=(n=null!=b?b:null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)?n:y[0].props.value;if(null!==k&&!w.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:R,setTabGroupChoices:O}=(0,l.U)(),[E,C]=(0,a.useState)(k),A=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=f){const e=R[f];null!=e&&e!==E&&w.some((t=>t.value===e))&&C(e)}const j=e=>{const t=e.currentTarget,n=A.indexOf(t),a=w[n].value;a!==E&&(T(t),C(a),null!=f&&O(f,String(a)))},P=e=>{var t,n;let a=null;switch(e.key){case"Enter":j(e);break;case"ArrowRight":{const n=A.indexOf(e.currentTarget)+1;a=null!=(t=A[n])?t:A[0];break}case"ArrowLeft":{const t=A.indexOf(e.currentTarget)-1;a=null!=(n=A[t])?n:A[A.length-1];break}}null==a||a.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":p},h)},w.map((({value:e,label:t,attributes:n})=>{return a.createElement("li",(o=g({role:"tab",tabIndex:E===e?0:-1,"aria-selected":E===e,key:e,ref:e=>A.push(e),onKeyDown:P,onClick:j},n),i={className:(0,r.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":E===e})},d(o,m(i))),null!=t?t:e);var o,i}))),o?(0,a.cloneElement)(y.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function w(e){const t=(0,o.Z)();return a.createElement(y,g({key:String(t)},e))}},31043:(e,t,n)=>{n.d(t,{ZP:()=>m});var a=n(35318),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))u.call(t,n)&&s(e,n,t[n]);return e};const d={toc:[]};function m(e){var t,n=e,{components:r}=n,s=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},d),s),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,a.kt)("admonition",p({},{title:"\u6ce8\u610f",type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2a\u6587\u6863\u4ecd\u7136\u662f",(0,a.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u6027"),"\u7684\uff0c\u968f\u7740\u6211\u4eec\u7684\u8fed\u4ee3\uff0c\u7ec6\u8282\u4f1a\u6709\u53d8\u5316\u3002\u6b22\u8fce\u5728",(0,a.kt)("a",p({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"\u5de5\u4f5c\u5c0f\u7ec4\u5185\u7684\u8ba8\u8bba"),"\u4e2d\u5206\u4eab\u4f60\u7684\u53cd\u9988\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u6b64\u5916\uff0c\u5b83\u8fd8\u5305\u542b\u51e0\u4e2a",(0,a.kt)("strong",{parentName:"p"},"\u624b\u52a8\u6b65\u9aa4"),"\u3002\u8bf7\u6ce8\u610f\u65b0\u67b6\u6784\u5c1a\u672a\u7a33\u5b9a\u4e0b\u6765\uff0c\u6700\u7ec8\u7684\u5f00\u53d1\u8005\u4f53\u9a8c\u4f1a\u7ee7\u7eed\u8fed\u4ee3\u6539\u5584\u3002\u6211\u4eec\u6b63\u5728\u52aa\u529b\u5f00\u53d1\u5de5\u5177\u3001\u6a21\u677f\u548c\u5e93\uff0c\u4ee5\u5e2e\u52a9\u4f60\u5728\u65b0\u67b6\u6784\u4e0a\u5feb\u901f\u5165\u95e8\uff0c\u800c\u4e0d\u9700\u8981\u7ecf\u5386\u6574\u4e2a\u8bbe\u7f6e\u8fc7\u7a0b\u3002")))}m.isMDXComponent=!0},96100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>k,frontMatter:()=>f,metadata:()=>g,toc:()=>w});var a=n(35318),r=n(27789),o=n(86386),i=n(11674),l=n(31043),c=Object.defineProperty,u=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&b(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&b(e,n,t[n]);return e};const f={id:"react-18-and-react-native",title:"React 18 \u4e0e React Native"},h=void 0,g={unversionedId:"react-18-and-react-native",id:"version-0.71/react-18-and-react-native",title:"React 18 \u4e0e React Native",description:"This page describes how to use React 18 with React Native using the React Native's New Architecture.",source:"@site/versioned_docs/version-0.71/react-18-and-react-native.md",sourceDirName:".",slug:"/react-18-and-react-native",permalink:"/docs/react-18-and-react-native",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/react-18-and-react-native.md",tags:[],version:"0.71",frontMatter:{id:"react-18-and-react-native",title:"React 18 \u4e0e React Native"},sidebar:"docs",previous:{title:"\u5728 iOS \u4e0a\u542f\u7528 Fabric",permalink:"/docs/new-architecture-app-renderer-ios"},next:{title:"Troubleshooting",permalink:"/docs/new-architecture-troubleshooting"}},y={},w=[{value:"React 18 \u4e0e React Native \u7684\u65b0\u67b6\u6784",id:"react-18-\u4e0e-react-native-\u7684\u65b0\u67b6\u6784",level:2},{value:"React 18 \u9ed8\u8ba4\u542f\u7528",id:"react-18-\u9ed8\u8ba4\u542f\u7528",level:2},{value:"Opt-ing out of React 18 on Android",id:"opt-ing-out-of-react-18-on-android",level:3},{value:"Opt-ing out of React 18 on iOS",id:"opt-ing-out-of-react-18-on-ios",level:3},{value:"Users on React Native 0.69 not yet migrated to the New Architecture",id:"users-on-react-native-069-not-yet-migrated-to-the-new-architecture",level:3}],N={toc:w};function k(e){var t,n=e,{components:c}=n,b=((e,t)=>{var n={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=v(v({},N),b),u(t,s({components:c,mdxType:"MDXLayout"}))),(0,a.kt)(l.ZP,{mdxType:"NewArchitectureWarning"}),(0,a.kt)("p",null,"This page describes how to use React 18 with React Native using the React Native's New Architecture."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"\u7b80\u800c\u8a00\u4e4b\uff1a")," \u7b2c\u4e00\u4e2a\u548c React 18 \u517c\u5bb9\u7684 React Native \u7248\u672c\u662f ",(0,a.kt)("strong",{parentName:"p"},"0.69.0"),". In order to use the new features in React 18 including automatic batching, ",(0,a.kt)("inlineCode",{parentName:"p"},"startTransition"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"useDeferredValue"),", you must migrate your React Native app to the New Architecture.")),(0,a.kt)("h2",v({},{id:"react-18-\u4e0e-react-native-\u7684\u65b0\u67b6\u6784"}),"React 18 \u4e0e React Native \u7684\u65b0\u67b6\u6784"),(0,a.kt)("p",null,"React 18 \u5f15\u5165\u4e86 ",(0,a.kt)("a",v({parentName:"p"},{href:"https://reactjs.org/blog/2022/03/29/react-v18.html"}),"\u591a\u4e2a\u5168\u65b0\u7279\u6027"),"\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u6279\u5904\u7406\u72b6\u6001\u53d8\u66f4 (Automatic batching)"),(0,a.kt)("li",{parentName:"ul"},"\u65b0\u7684\u4e25\u683c\u6a21\u5f0f (Strict Mode)"),(0,a.kt)("li",{parentName:"ul"},"\u65b0\u7684 hooks (",(0,a.kt)("inlineCode",{parentName:"li"},"useId"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"useSyncExternalStore"),")")),(0,a.kt)("p",null,"\u540c\u65f6\u4e5f\u5305\u542b\u4e86\u4e00\u4e9b\u65b0\u7684\u5e76\u53d1\u7279\u6027\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"startTransition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useTransition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useDeferredValue")),(0,a.kt)("li",{parentName:"ul"},"Full Suspense support")),(0,a.kt)("p",null,"The concurrent features in React 18 are built on top of the new concurrent rendering engine. Concurrent rendering is a new behind-the-scenes mechanism that enables React to prepare multiple versions of your UI at the same time."),(0,a.kt)("p",null,"Previous versions of React Native built on the old architecture ",(0,a.kt)("strong",{parentName:"p"},"cannot")," support concurrent rendering or concurrent features. This is because the old architecture relied on mutating the native trees, which doesn\u2019t allow for React to prepare multiple versions of the tree at the same time."),(0,a.kt)("p",null,"Fortunately, the New Architecture was written bottom-up with concurrent rendering in mind, and is fully compatible with React 18. This means, in order to upgrade to React 18 in your React Native app, your application needs to be migrated to the React Native's New Architecture including Fabric and TurboModules."),(0,a.kt)("h2",v({},{id:"react-18-\u9ed8\u8ba4\u542f\u7528"}),"React 18 \u9ed8\u8ba4\u542f\u7528"),(0,a.kt)("p",null,"Starting in React Native 0.69, React 18 is ",(0,a.kt)("strong",{parentName:"p"},"enabled by default")," when you enable the New Architecture."),(0,a.kt)("p",null,"The means you\u2019re able to use the new features in React 18 as soon as you migrate. Since the new concurrent features are opt-in by using features like ",(0,a.kt)("inlineCode",{parentName:"p"},"startTransition")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Suspense"),", we expect React 18 to work out-of-the-box with minimal changes for users who migrate to the New Architecture or create a new app with the New Architecture enabled."),(0,a.kt)("p",null,"However, if you do hit any issues, we provide an option to opt-out of the new root in React 18. Opt-ing out means your app will run in React 17 mode, and none of the features of React 18 will be accessible."),(0,a.kt)("h3",v({},{id:"opt-ing-out-of-react-18-on-android"}),"Opt-ing out of React 18 on Android"),(0,a.kt)("p",null,"On Android, you will be able to override the ",(0,a.kt)("inlineCode",{parentName:"p"},"isConcurrentRootEnabled")," in your ActivityDelegate (in the ",(0,a.kt)("inlineCode",{parentName:"p"},"MainActivity")," file), and enable/disable Concurrent React."),(0,a.kt)(r.Z,{groupId:"android-language",defaultValue:i.Z.defaultAndroidLanguage,values:i.Z.androidLanguages,mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-diff"}),"public class MainActivity extends ReactActivity {\n\n  public static class MainActivityDelegate extends ReactActivityDelegate {\n    public MainActivityDelegate(ReactActivity activity, String mainComponentName) {\n      super(activity, mainComponentName);\n    }\n\n    @Override\n    protected ReactRootView createRootView() {\n      ReactRootView reactRootView = new ReactRootView(getContext());\n      // If you opted-in for the New Architecture, we enable the Fabric Renderer.\n      reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);\n      return reactRootView;\n    }\n\n+   @Override\n+   protected boolean isConcurrentRootEnabled() {\n+     // If you opted-in for the New Architecture, we enable Concurrent Root (i.e. React 18).\n+     // More on this on https://reactjs.org/blog/2022/03/29/react-v18.html\n+     return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;\n+   }\n  }\n}\n"))),(0,a.kt)(o.Z,{value:"kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-diff"}),"class MainActivity : ReactActivity() {\n\n    open class MainActivityDelegate(activity: ReactActivity?, mainComponentName: String?) : ReactActivityDelegate(activity, mainComponentName) {\n        override fun createRootView(): ReactRootView = ReactRootView(context).apply {\n            // If you opted-in for the New Architecture, we enable the Fabric Renderer.\n            setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED)\n        }\n\n+       // If you opted-in for the New Architecture, we enable Concurrent Root (i.e. React 18).\n+       // More on this on https://reactjs.org/blog/2022/03/29/react-v18.html\n+       override fun isConcurrentRootEnabled() = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED\n    }\n}\n")))),(0,a.kt)("h3",v({},{id:"opt-ing-out-of-react-18-on-ios"}),"Opt-ing out of React 18 on iOS"),(0,a.kt)("p",null,"On iOS, you'll have access to the ",(0,a.kt)("inlineCode",{parentName:"p"},"concurrentRootEnabled")," method on your ",(0,a.kt)("inlineCode",{parentName:"p"},"AppDelegate.mm")," file. You should change the returned value to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"NO"),") to disable the feature."),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-objc"}),"/// This method controls whether the `concurrentRoot`feature of React18 is turned on or off.\n///\n/// @see: https://reactjs.org/blog/2022/03/29/react-v18.html\n/// @note: This requires to be rendering on Fabric (i.e. on the New Architecture).\n/// @return: `true` if the `concurrentRoot` feture is enabled. Otherwise, it returns `false`.\n- (BOOL)concurrentRootEnabled\n{\n  // Switch this bool to turn on and off the concurrent root\n  return true;\n}\n")),(0,a.kt)("h3",v({},{id:"users-on-react-native-069-not-yet-migrated-to-the-new-architecture"}),"Users on React Native 0.69 not yet migrated to the New Architecture"),(0,a.kt)("p",null,"Note: Users on React Native 0.69, but still on the Old Architecture will still use React 17 mode even if React 18 is installed in the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file."),(0,a.kt)("p",null,"Overriding the ",(0,a.kt)("inlineCode",{parentName:"p"},"isConcurrentRootEnabled")," method will have no effect on your app."))}k.isMDXComponent=!0}}]);