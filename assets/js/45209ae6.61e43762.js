"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[43163],{35318:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(h,a(a({ref:t},d),{},{components:r})):n.createElement(h,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},38286:(e,t,r)=>{r.d(t,{ZP:()=>m});var n=r(35318),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&d(e,r,t[r]);return e};const u={toc:[]};function m(e){var t,r=e,{components:o}=r,d=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=p(p({},u),d),i(t,a({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("admonition",p({},{title:"\u6ce8\u610f",type:"caution"}),(0,n.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2a\u6587\u6863\u4ecd\u7136\u662f",(0,n.kt)("strong",{parentName:"p"},"\u5b9e\u9a8c\u6027"),"\u7684\uff0c\u968f\u7740\u6211\u4eec\u7684\u8fed\u4ee3\uff0c\u7ec6\u8282\u4f1a\u6709\u53d8\u5316\u3002\u6b22\u8fce\u5728",(0,n.kt)("a",p({parentName:"p"},{href:"https://github.com/reactwg/react-native-new-architecture/discussions/8"}),"\u5de5\u4f5c\u5c0f\u7ec4\u5185\u7684\u8ba8\u8bba"),"\u4e2d\u5206\u4eab\u4f60\u7684\u53cd\u9988\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u6b64\u5916\uff0c\u5b83\u8fd8\u5305\u542b\u51e0\u4e2a",(0,n.kt)("strong",{parentName:"p"},"\u624b\u52a8\u6b65\u9aa4"),"\u3002\u8bf7\u6ce8\u610f\u65b0\u67b6\u6784\u5c1a\u672a\u7a33\u5b9a\u4e0b\u6765\uff0c\u6700\u7ec8\u7684\u5f00\u53d1\u8005\u4f53\u9a8c\u4f1a\u7ee7\u7eed\u8fed\u4ee3\u6539\u5584\u3002\u6211\u4eec\u6b63\u5728\u52aa\u529b\u5f00\u53d1\u5de5\u5177\u3001\u6a21\u677f\u548c\u5e93\uff0c\u4ee5\u5e2e\u52a9\u4f60\u5728\u65b0\u67b6\u6784\u4e0a\u5feb\u901f\u5165\u95e8\uff0c\u800c\u4e0d\u9700\u8981\u7ecf\u5386\u6574\u4e2a\u8bbe\u7f6e\u8fc7\u7a0b\u3002")))}m.isMDXComponent=!0},19861:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>k,frontMatter:()=>m,metadata:()=>f,toc:()=>b});var n=r(35318),o=r(38286),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))d.call(t,r)&&p(e,r,t[r]);return e};const m={id:"new-architecture-troubleshooting",title:"Troubleshooting"},h=void 0,f={unversionedId:"new-architecture-troubleshooting",id:"new-architecture-troubleshooting",title:"Troubleshooting",description:"This page contains resolutions to common problem you might face when migrating to the New Architecture.",source:"@site/../cndocs/new-architecture-troubleshooting.md",sourceDirName:".",slug:"/new-architecture-troubleshooting",permalink:"/docs/next/new-architecture-troubleshooting",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/new-architecture-troubleshooting.md",tags:[],version:"current",frontMatter:{id:"new-architecture-troubleshooting",title:"Troubleshooting"},sidebar:"docs",previous:{title:"React 18 \u4e0e React Native",permalink:"/docs/next/react-18-and-react-native"},next:{title:"Appendix",permalink:"/docs/next/new-architecture-appendix"}},y={},b=[{value:"Xcode Build Issues",id:"xcode-build-issues",level:2},{value:"CocoaPods and Node Reset",id:"cocoapods-and-node-reset",level:2},{value:"Folly Version",id:"folly-version",level:2},{value:"Android build is failing with <code>OutOfMemoryException</code>",id:"android-build-is-failing-with-outofmemoryexception",level:2},{value:"Android NDK and Mac with M1 Apple Silicon CPUs",id:"android-ndk-and-mac-with-m1-apple-silicon-cpus",level:2}],g={toc:b};function k(e){var t,r=e,{components:i}=r,p=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=u(u({},g),p),a(t,l({components:i,mdxType:"MDXLayout"}))),(0,n.kt)(o.ZP,{mdxType:"NewArchitectureWarning"}),(0,n.kt)("p",null,"This page contains resolutions to common problem you might face when migrating to the New Architecture."),(0,n.kt)("h2",u({},{id:"xcode-build-issues"}),"Xcode Build Issues"),(0,n.kt)("p",null,"Should the XCode Build fail with:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Command PhaseScriptExecution failed with a nonzero exit code")),(0,n.kt)("p",null,"This error indicates that the codegen script that is injected into the Xcode build pipeline has exited early. You may get this for either your own library, or one of the core RN libraries (FBReactNativeSpec, rncore)."),(0,n.kt)("p",null,"Open ",(0,n.kt)("inlineCode",{parentName:"p"},"~/Library/Developer/Xcode/DerivedData"),". and look for a folder named after your Xcode workspace (\u201cRNTesterPods-AAAA\u201d where \u201cAAAA\u201d is a string of characters). Within that folder, go to Build \u2192 Intermediates.noindex \u2192 Pods.build \u2192 Debug-iphonesimulator (or the equivalent for your iOS device, if applicable). Inside, look for the folder named after the codegen library has the script error. The logs for the script phase can be found within the DerivedSources folder, in a file named ",(0,n.kt)("inlineCode",{parentName:"p"},"codegen-LibraryName.log"),". This log output should provide clarity on the source of the error."),(0,n.kt)("h2",u({},{id:"cocoapods-and-node-reset"}),"CocoaPods and Node Reset"),(0,n.kt)("p",null,"The CocoaPods integration will see frequent updates as we rollout the New Architecture, and it is possible to end up with your workspace in a broken state after one of these changes. You may clean up any changes related to the codegen by performing some of these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Run ",(0,n.kt)("inlineCode",{parentName:"li"},"pod deintegrate")," in your ios directory (or wherever your Podfile is located) and re-run ",(0,n.kt)("inlineCode",{parentName:"li"},"pod install")," (or ",(0,n.kt)("inlineCode",{parentName:"li"},"arch -x86_64 pod install"),", in case of a Mac M1)."),(0,n.kt)("li",{parentName:"ol"},"Delete ",(0,n.kt)("inlineCode",{parentName:"li"},"Podfile.lock")," and re-run ",(0,n.kt)("inlineCode",{parentName:"li"},"pod install")," (or ",(0,n.kt)("inlineCode",{parentName:"li"},"arch -x86_64 pod install"),", in case of a Mac M1)."),(0,n.kt)("li",{parentName:"ol"},"Delete ",(0,n.kt)("inlineCode",{parentName:"li"},"node_modules")," and re-run ",(0,n.kt)("inlineCode",{parentName:"li"},"yarn install"),"."),(0,n.kt)("li",{parentName:"ol"},"Delete your codegen artifacts and re-run ",(0,n.kt)("inlineCode",{parentName:"li"},"pod install")," (or ",(0,n.kt)("inlineCode",{parentName:"li"},"arch -x86_64 pod install"),", in case of a Mac M1), then clean and build your Xcode project.")),(0,n.kt)("h2",u({},{id:"folly-version"}),"Folly Version"),(0,n.kt)("p",null,"As it happens, the Folly version used in your podspec must match whatever version is used in React Native at this time. If you see the following error after running ",(0,n.kt)("inlineCode",{parentName:"p"},"pod install"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),'[!] CocoaPods could not find compatible versions for pod "RCT-Folly":\n')),(0,n.kt)("p",null,"...you may have a version-mismatch. Take a look at your ",(0,n.kt)("inlineCode",{parentName:"p"},"node_modules/react-native/React/FBReactNativeSpec/FBReactNativeSpec.podspec")," file and make note of the ",(0,n.kt)("inlineCode",{parentName:"p"},"folly_version")," used there. Go back to your own podspec and set your ",(0,n.kt)("inlineCode",{parentName:"p"},"folly_version")," to match."),(0,n.kt)("h2",u({},{id:"android-build-is-failing-with-outofmemoryexception"}),"Android build is failing with ",(0,n.kt)("inlineCode",{parentName:"h2"},"OutOfMemoryException")),(0,n.kt)("p",null,"If your Android Gradle builds are failing with: ",(0,n.kt)("inlineCode",{parentName:"p"},"OutOfMemoryException: Out of memory: Java heap space.")," or similar errors related to low memory, you might need to increase the memory allocated to the JVM."),(0,n.kt)("p",null,"You can do that by editing the ",(0,n.kt)("inlineCode",{parentName:"p"},"gradle.properties")," file in your ",(0,n.kt)("inlineCode",{parentName:"p"},"android/gradle.properties")," folder:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-diff"})," # Specifies the JVM arguments used for the daemon process.\n # The setting is particularly useful for tweaking memory settings.\n # Default value: -Xmx1024m -XX:MaxPermSize=256m\n-# org.gradle.jvmargs=-Xmx2048m -XX:MaxPermSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8\n+org.gradle.jvmargs=-Xmx4g -XX:MaxPermSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8\n")),(0,n.kt)("p",null,"Make sure to uncomment the line and set the preferred memory size with the ",(0,n.kt)("inlineCode",{parentName:"p"},"-Xmx")," parameter. 2Gb should be the minimum required and 4Gb is recommended."),(0,n.kt)("h2",u({},{id:"android-ndk-and-mac-with-m1-apple-silicon-cpus"}),"Android NDK and Mac with M1 Apple Silicon CPUs"),(0,n.kt)("p",null,"We're aware of a series of incompatibilities between the Android NDK and Macs on M1 CPUs (",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/android/ndk/issues/1299"}),"here")," and ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/android/ndk/issues/1410"}),"here"),").\nAs you need to enable the NDK when building from source, you might face problems during your build."),(0,n.kt)("p",null,"The workaround at this stage is ",(0,n.kt)("a",u({parentName:"p"},{href:"https://github.com/android/ndk/issues/1299"}),"suggested here"),".\nAs newer version of the Android SDK/NDK are released, we will update the documentation with the necessary steps."))}k.isMDXComponent=!0}}]);