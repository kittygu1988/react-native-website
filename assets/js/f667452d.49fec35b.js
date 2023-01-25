"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[16817],{35318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=i,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},62154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>g,frontMatter:()=>u,metadata:()=>m,toc:()=>b});var a=n(35318),i=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&p(e,n,t[n]);return e};const u={id:"build-speed",title:"\u4f18\u5316\u7f16\u8bd1\u901f\u5ea6"},h=void 0,m={unversionedId:"build-speed",id:"build-speed",title:"\u4f18\u5316\u7f16\u8bd1\u901f\u5ea6",description:"Building your React Native app could be expensive and take several minutes of developers time.",source:"@site/../cndocs/build-speed.md",sourceDirName:".",slug:"/build-speed",permalink:"/docs/next/build-speed",draft:!1,editUrl:"https://github.com/reactnativecn/react-native-website/blob/production/cnwebsite/../cndocs/build-speed.md",tags:[],version:"current",frontMatter:{id:"build-speed",title:"\u4f18\u5316\u7f16\u8bd1\u901f\u5ea6"},sidebar:"docs",previous:{title:"\u6027\u80fd\u7efc\u8ff0",permalink:"/docs/next/performance"},next:{title:"\u5217\u8868\u914d\u7f6e\u4f18\u5316",permalink:"/docs/next/optimizing-flatlist-configuration"}},f={},b=[{value:"Build only one ABI during development (Android-only)",id:"build-only-one-abi-during-development-android-only",level:2},{value:"Use a compiler cache",id:"use-a-compiler-cache",level:2},{value:"Local caches",id:"local-caches",level:3},{value:"XCode Specific Setup",id:"xcode-specific-setup",level:4},{value:"Using this approach on a CI",id:"using-this-approach-on-a-ci",level:4},{value:"Distributed caches",id:"distributed-caches",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Clean Android build with <code>--active-arch-only</code> is failing.",id:"clean-android-build-with---active-arch-only-is-failing",level:3}],k={toc:b};function g(e){var t,n=e,{components:i}=n,p=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=d(d({},k),p),o(t,r({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"Building your React Native app could be ",(0,a.kt)("strong",{parentName:"p"},"expensive")," and take several minutes of developers time.\nThis can be problematic as your project grows and generally in bigger organizations with multiple React Native developers."),(0,a.kt)("p",null,"With ",(0,a.kt)("a",d({parentName:"p"},{href:"/docs/next/new-architecture-app-modules-android"}),"the New React Native Architecture"),", this problem is becoming more critical\nas you might have to compile some native C++ code in your project with the Android NDK in addition to the native code already necessary for the iOS and Android platforms."),(0,a.kt)("p",null,"To mitigate this performance hit, this page shares some suggestions on how to ",(0,a.kt)("strong",{parentName:"p"},"improve your build time"),"."),(0,a.kt)("h2",d({},{id:"build-only-one-abi-during-development-android-only"}),"Build only one ABI during development (Android-only)"),(0,a.kt)("p",null,"When building your android app locally, by default you build all the 4 ",(0,a.kt)("a",d({parentName:"p"},{href:"https://developer.android.com/ndk/guides/abis"}),"Application Binary Interfaces (ABIs)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"armeabi-v7a"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"arm64-v8a"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"x86")," & ",(0,a.kt)("inlineCode",{parentName:"p"},"x86_64"),"."),(0,a.kt)("p",null,"However, you probably don't need to build all of them if you're building locally and testing your emulator or on a physical device."),(0,a.kt)("p",null,"This should reduce your build time by a ",(0,a.kt)("strong",{parentName:"p"},"~75% factor"),"."),(0,a.kt)("p",null,"If you're using the React Native CLI, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"--active-arch-only")," flag together with the ",(0,a.kt)("inlineCode",{parentName:"p"},"run-android")," command.\nThis flag will make sure the correct ABI is picked up from either the running emulator or the plugged in phone.\nTo confirm that this approach is working fine, you'll see a message like ",(0,a.kt)("inlineCode",{parentName:"p"},"info Detected architectures arm64-v8a")," on console."),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),'$ yarn react-native run-android --active-arch-only\n\n[ ... ]\ninfo Running jetifier to migrate libraries to AndroidX. You can disable it using "--no-jetifier" flag.\nJetifier found 1037 file(s) to forward-jetify. Using 32 workers...\ninfo JS server already running.\ninfo Detected architectures arm64-v8a\ninfo Installing the app...\n')),(0,a.kt)("p",null,"This mechanism relies on the ",(0,a.kt)("inlineCode",{parentName:"p"},"reactNativeArchitectures")," Gradle property."),(0,a.kt)("p",null,"Therefore, if you're building directly with Gradle from the command line and without the CLI, you can specify the ABI you want to build as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"$ ./gradlew :app:assembleDebug -PreactNativeArchitectures=x86,x86_64\n")),(0,a.kt)("p",null,"This can be useful if you wish to build your Android App on a CI and use a matrix to parallelize the build of the different architectures."),(0,a.kt)("p",null,"If you wish, you can also override this value locally, using the ",(0,a.kt)("inlineCode",{parentName:"p"},"gradle.properties")," file you have in the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/19cf70266eb8ca151aa0cc46ac4c09cb987b2ceb/template/android/gradle.properties#L30-L33"}),"top-level folder")," of your project:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"# Use this property to specify which architecture you want to build.\n# You can also override it from the CLI using\n# ./gradlew <task> -PreactNativeArchitectures=x86_64\nreactNativeArchitectures=armeabi-v7a,arm64-v8a,x86,x86_64\n")),(0,a.kt)("p",null,"Once you build a ",(0,a.kt)("strong",{parentName:"p"},"release version")," of your app, don't forget to remove those flags as you want to build an apk/app bundle that works for all the ABIs and not only for the one you're using in your daily development workflow."),(0,a.kt)("h2",d({},{id:"use-a-compiler-cache"}),"Use a compiler cache"),(0,a.kt)("p",null,"If you're running frequent native builds (either C++ or Objective-C), you might benefit from using a ",(0,a.kt)("strong",{parentName:"p"},"compiler cache"),"."),(0,a.kt)("p",null,"Specifically you can use two type of caches: local compiler caches and distributed compiler caches."),(0,a.kt)("h3",d({},{id:"local-caches"}),"Local caches"),(0,a.kt)("admonition",d({},{title:"\u63d0\u793a",type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"The following instructions will work for ",(0,a.kt)("strong",{parentName:"p"},"both Android & iOS"),".\nIf you're building only Android apps, you should be good to go.\nIf you're building also iOS apps, please follow the instructions in the ",(0,a.kt)("a",d({parentName:"p"},{href:"#xcode-specific-setup"}),"XCode Specific Setup")," section below.")),(0,a.kt)("p",null,"We suggest to use ",(0,a.kt)("a",d({parentName:"p"},{href:"https://ccache.dev/"}),(0,a.kt)("strong",{parentName:"a"},"ccache"))," to cache the compilation of your native builds.\nCcache works by wrapping the C++ compilers, storing the compilation results, and skipping the compilation\nif an intermediate compilation result was originally stored."),(0,a.kt)("p",null,"To install it, you can follow the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/ccache/ccache/blob/master/doc/INSTALL.md"}),"official installation instructions"),"."),(0,a.kt)("p",null,"On Mac OS, we can install ccache with ",(0,a.kt)("inlineCode",{parentName:"p"},"brew install ccache"),".\nOnce installed you can configure it as follows to cache NDK compile results:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"ln -s ccache /usr/local/bin/gcc\nln -s ccache /usr/local/bin/g++\nln -s ccache /usr/local/bin/cc\nln -s ccache /usr/local/bin/c++\nln -s ccache /usr/local/bin/clang\nln -s ccache /usr/local/bin/clang++\n")),(0,a.kt)("p",null,"This will create symbolic links to ",(0,a.kt)("inlineCode",{parentName:"p"},"ccache")," inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/")," which are called ",(0,a.kt)("inlineCode",{parentName:"p"},"gcc"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"g++"),", and so on."),(0,a.kt)("p",null,"This works as long as ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/")," comes first than ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/bin/")," inside your ",(0,a.kt)("inlineCode",{parentName:"p"},"$PATH")," variable, which is the default."),(0,a.kt)("p",null,"You can verify that it works using the ",(0,a.kt)("inlineCode",{parentName:"p"},"which")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"$ which gcc\n/usr/local/bin/gcc\n")),(0,a.kt)("p",null,"If the results is ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/gcc"),", then you're effectively calling ",(0,a.kt)("inlineCode",{parentName:"p"},"ccache")," which will wrap the ",(0,a.kt)("inlineCode",{parentName:"p"},"gcc")," calls."),(0,a.kt)("admonition",d({},{title:"\u6ce8\u610f",type:"caution"}),(0,a.kt)("p",{parentName:"admonition"},"Please note that this setup of ",(0,a.kt)("inlineCode",{parentName:"p"},"ccache")," will affect all the compilations that you're running on your machine, not only those related to React Native. Use it at your own risk. If you're failing to install/compile other software, this might be the reason. If that is the case, you can remove the symlink you created with:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",d({parentName:"pre"},{}),"unlink /usr/local/bin/gcc\nunlink /usr/local/bin/g++\nunlink /usr/local/bin/cc\nunlink /usr/local/bin/c++\nunlink /usr/local/bin/clang\nunlink /usr/local/bin/clang++\n")),(0,a.kt)("p",{parentName:"admonition"},"to revert your machine to the original status and use the default compilers.")),(0,a.kt)("p",null,"You can then do two clean builds (e.g. on Android you can first run ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn react-native run-android"),", delete the ",(0,a.kt)("inlineCode",{parentName:"p"},"android/app/build")," folder and run the first command once more). You will notice that the second build was way faster than the first one (it should take seconds rather than minutes).\nWhile building, you can verify that ",(0,a.kt)("inlineCode",{parentName:"p"},"ccache")," works correctly and check the cache hits/miss rate ",(0,a.kt)("inlineCode",{parentName:"p"},"ccache -s")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"$ ccache -s\nSummary:\n  Hits:             196 /  3068 (6.39 %)\n    Direct:           0 /  3068 (0.00 %)\n    Preprocessed:   196 /  3068 (6.39 %)\n  Misses:          2872\n    Direct:        3068\n    Preprocessed:  2872\n  Uncacheable:        1\nPrimary storage:\n  Hits:             196 /  6136 (3.19 %)\n  Misses:          5940\n  Cache size (GB): 0.60 / 20.00 (3.00 %)\n")),(0,a.kt)("p",null,"Note that ",(0,a.kt)("inlineCode",{parentName:"p"},"ccache")," aggregates the stats over all builds. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"ccache --zero-stats")," to reset them before a build to verify the cache-hit ratio."),(0,a.kt)("p",null,"Should you need to wipe your cache, you can do so with ",(0,a.kt)("inlineCode",{parentName:"p"},"ccache --clear")),(0,a.kt)("h4",d({},{id:"xcode-specific-setup"}),"XCode Specific Setup"),(0,a.kt)("p",null,"To make sure ",(0,a.kt)("inlineCode",{parentName:"p"},"ccache")," works correctly with iOS and XCode, you need to follow a couple of extra steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You must alter the way Xcode and ",(0,a.kt)("inlineCode",{parentName:"li"},"xcodebuild")," call for the compiler command. By default they use ",(0,a.kt)("em",{parentName:"li"},"fully specified paths")," to the compiler binaries, so the symbolic links installed in ",(0,a.kt)("inlineCode",{parentName:"li"},"/usr/local/bin")," will not be used. You may configure Xcode to use ",(0,a.kt)("em",{parentName:"li"},"relative")," names for the compilers using either of these two options:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"environment variables prefixed on the command line if you use a direct command line: ",(0,a.kt)("inlineCode",{parentName:"li"},"CLANG=clang CLANGPLUSPLUS=clang++ LD=clang LDPLUSPLUS=clang++ xcodebuild <rest of xcodebuild command line>")),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("inlineCode",{parentName:"li"},"post_install")," section in your ",(0,a.kt)("inlineCode",{parentName:"li"},"ios/Podfile")," that alters the compiler in your Xcode workspace during the ",(0,a.kt)("inlineCode",{parentName:"li"},"pod install")," step:")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-ruby"}),'  post_install do |installer|\n    react_native_post_install(installer)\n\n    # ...possibly other post_install items here\n\n    installer.pods_project.targets.each do |target|\n      target.build_configurations.each do |config|\n        # Using the un-qualified names means you can swap in different implementations, for example ccache\n        config.build_settings["CC"] = "clang"\n        config.build_settings["LD"] = "clang"\n        config.build_settings["CXX"] = "clang++"\n        config.build_settings["LDPLUSPLUS"] = "clang++"\n      end\n    end\n\n    __apply_Xcode_12_5_M1_post_install_workaround(installer)\n  end\n')),(0,a.kt)("ol",d({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"You need a ccache configuration that allows for a certain level of sloppiness and cache behavior such that ccache registers cache hits during Xcode compiles. The ccache configuration variables that are different from standard are as follows if configured by environment variable:")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"export CCACHE_SLOPPINESS=clang_index_store,file_stat_matches,include_file_ctime,include_file_mtime,ivfsoverlay,pch_defines,modules,system_headers,time_macros\nexport CCACHE_FILECLONE=true\nexport CCACHE_DEPEND=true\nexport CCACHE_INODECACHE=true\n")),(0,a.kt)("p",null,"The same may be configured in a ",(0,a.kt)("inlineCode",{parentName:"p"},"ccache.conf")," file or any other mechanism ccache provides. More on this can be found in the ",(0,a.kt)("a",d({parentName:"p"},{href:"https://ccache.dev/manual/4.3.html"}),"official ccache manual"),"."),(0,a.kt)("h4",d({},{id:"using-this-approach-on-a-ci"}),"Using this approach on a CI"),(0,a.kt)("p",null,"Ccache uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"/Users/$USER/Library/Caches/ccache")," folder on macOS to store the cache.\nTherefore you could save & restore the corresponding folder also on CI to speedup your builds."),(0,a.kt)("p",null,"However, there are a couple of things to be aware:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On CI, we recommend to do a full clean build, to avoid poisoned cache problems. If you follow the approach mentioned in the previous paragraph, you should be able to parallelize the native build on 4 different ABIs and you will most likely not need ",(0,a.kt)("inlineCode",{parentName:"p"},"ccache")," on CI.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"ccache")," relies on timestamps to compute a cache hit. This doesn't work well on CI as files are re-downloaded at every CI run. To overcome this, you'll need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"compiler_check content")," option which relies instead on ",(0,a.kt)("a",d({parentName:"p"},{href:"https://ccache.dev/manual/4.3.html"}),"hashing the content of the file"),"."))),(0,a.kt)("h3",d({},{id:"distributed-caches"}),"Distributed caches"),(0,a.kt)("p",null,"Similar to local caches, you might want to consider using a distributed cache for your native builds.\nThis could be specifically useful in bigger organizations that are doing frequent native builds."),(0,a.kt)("p",null,"We recommend to use ",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/mozilla/sccache"}),"sccache")," to achieve this.\nWe defer to the sccache ",(0,a.kt)("a",d({parentName:"p"},{href:"https://github.com/mozilla/sccache/blob/main/docs/DistributedQuickstart.md"}),"distributed compilation quickstart")," for instructions on how to setup and use this tool."),(0,a.kt)("h2",d({},{id:"troubleshooting"}),"Troubleshooting"),(0,a.kt)("p",null,"Please find instructions on how to solve some of the most common build performance issue in this section."),(0,a.kt)("h3",d({},{id:"clean-android-build-with---active-arch-only-is-failing"}),"Clean Android build with ",(0,a.kt)("inlineCode",{parentName:"h3"},"--active-arch-only")," is failing."),(0,a.kt)("p",null,"If you're using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--active-arch-only")," flag on a clean Android build (e.g. after having cloned a project or after having created a new project) you might experience a build failures as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{}),"Android NDK: ERROR:/.../android/app/src/main/jni/Android.mk:fb: LOCAL_SRC_FILES points to a missing file\nAndroid NDK: Check that /.../android/app/build/react-ndk/exported/armeabi-v7a/libfb.so exists or that its path is correct\n\n/.../Android/sdk/ndk/24.0.8079956/build/core/prebuilt-library.mk:51: *** Android NDK: Aborting    .  Stop.\n")),(0,a.kt)("p",null,"To overcome this, you can either:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run a full build before without ",(0,a.kt)("inlineCode",{parentName:"li"},"--active-arch-only"),". Subsequent builds with ",(0,a.kt)("inlineCode",{parentName:"li"},"--active-arch-only")," will work correctly."),(0,a.kt)("li",{parentName:"ol"},"Add an ",(0,a.kt)("inlineCode",{parentName:"li"},"abiFilter")," block inside your ",(0,a.kt)("inlineCode",{parentName:"li"},"android/app/build.gradle")," file ",(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/facebook/react-native/commit/5dff920177220ae5f4e37c662c63c27ebf696c83"}),"as follows"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-diff"}),"  android {\n    defaultConfig {\n\n      // ...\n\n+     if (!enableSeparateBuildPerCPUArchitecture) {\n+       ndk {\n+         abiFilters (*reactNativeArchitectures())\n+       }\n+     }\n    }\n  }\n")),(0,a.kt)("p",null,"Projects created with React Native 0.69 and subsequent versions already contain this fix."))}g.isMDXComponent=!0}}]);