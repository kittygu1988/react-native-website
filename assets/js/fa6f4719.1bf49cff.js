"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[39504],{35318:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(27378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(a),m=r,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||l;return a?n.createElement(b,i(i({ref:t},d),{},{components:a})):n.createElement(b,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},11674:function(e,t,a){var n=a(63445);const r=!!n.Z.canUseDOM&&navigator.platform.startsWith("Mac"),l=!!n.Z.canUseDOM&&navigator.platform.startsWith("Win"),i=r?"ios":"android",o=r?"macos":l?"windows":"linux";t.Z={defaultGuide:"native",defaultOs:o,defaultPackageManager:"npm",defaultPlatform:i,defaultSyntax:"functional",getDevNotesTabs:(e=["android","ios","web","windows"])=>[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean),guides:[{label:"\u5b8c\u6574\u539f\u751f\u73af\u5883",value:"native"},{label:"\u7b80\u6613\u6c99\u76d2\u73af\u5883",value:"quickstart"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"\u51fd\u6570\u5f0f\u7ec4\u4ef6",value:"functional"},{label:"Class \u7ec4\u4ef6",value:"classical"}]}},86386:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(27378),r=a(38944),l="tabItem_wHwb",i=Object.defineProperty,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function u({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))c.call(t,a)&&d(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&d(e,a,t[a]);return e})({role:"tabpanel",className:(0,r.Z)(l,a)},{hidden:t}),e)}},27789:function(e,t,a){a.d(t,{Z:function(){return A}});var n=a(27378),r=a(38944),l=a(14185),i=a(27886),o=a(77184),c=a(12112),s="tabList_J5MA",d="tabItem_l0OV",u=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))v.call(t,a)&&y(e,a,t[a]);if(b)for(var a of b(t))f.call(t,a)&&y(e,a,t[a]);return e};function h(e){var t,a;const{lazy:l,block:u,defaultValue:b,values:v,groupId:f,className:y}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),A=null!=v?v:h.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),g=(0,i.l)(A,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===b?b:null!=(a=null!=b?b:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?a:h[0].props.value;if(null!==w&&!A.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${A.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:O}=(0,o.U)(),[C,D]=(0,n.useState)(w),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=f){const e=N[f];null!=e&&e!==C&&A.some((t=>t.value===e))&&D(e)}const j=e=>{const t=e.currentTarget,a=E.indexOf(t),n=A[a].value;n!==C&&(x(t),D(n),null!=f&&O(f,String(n)))},P=e=>{var t,a;let n=null;switch(e.key){case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;n=null!=(t=E[a])?t:E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;n=null!=(a=E[t])?a:E[E.length-1];break}}null==n||n.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},y)},A.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(l=k({role:"tab",tabIndex:C===e?0:-1,"aria-selected":C===e,key:e,ref:e=>E.push(e),onKeyDown:P,onFocus:j,onClick:j},a),i={className:(0,r.Z)("tabs__item",d,null==a?void 0:a.className,{"tabs__item--active":C===e})},p(l,m(i))),null!=t?t:e);var l,i}))),l?(0,n.cloneElement)(h.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function A(e){const t=(0,l.Z)();return n.createElement(h,k({key:String(t)},e))}},134:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return g},frontMatter:function(){return v},metadata:function(){return y},toc:function(){return h}});var n=a(35318),r=a(27789),l=a(86386),i=a(11674),o=Object.defineProperty,c=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&m(e,a,t[a]);if(d)for(var a of d(t))p.call(t,a)&&m(e,a,t[a]);return e};const v={id:"activityindicator",title:"ActivityIndicator"},f=void 0,y={unversionedId:"activityindicator",id:"version-0.66/activityindicator",title:"ActivityIndicator",description:"\u663e\u793a\u4e00\u4e2a\u5706\u5f62\u7684 loading \u63d0\u793a\u7b26\u53f7\u3002",source:"@site/versioned_docs/version-0.66/activityindicator.md",sourceDirName:".",slug:"/activityindicator",permalink:"/docs/0.66/activityindicator",draft:!1,editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../cndocs/activityindicator.md",tags:[],version:"0.66",frontMatter:{id:"activityindicator",title:"ActivityIndicator"},sidebar:"\u7ec4\u4ef6",previous:{title:"\u6838\u5fc3\u7ec4\u4ef6\u548cAPI",permalink:"/docs/0.66/components-and-apis"},next:{title:"Button",permalink:"/docs/0.66/button"}},k={},h=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"Props",id:"props",level:2},{value:"View Props",id:"view-props",level:3},{value:"<code>animating</code>",id:"animating",level:3},{value:"<code>color</code>",id:"color",level:3},{value:'<code>hidesWhenStopped</code> <div class="label ios">iOS</div>',id:"hideswhenstopped-ios",level:3},{value:"<code>size</code>",id:"size",level:3}],A={toc:h};function g(e){var t,a=e,{components:o}=a,m=((e,t)=>{var a={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=b(b({},A),m),c(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"\u663e\u793a\u4e00\u4e2a\u5706\u5f62\u7684 loading \u63d0\u793a\u7b26\u53f7\u3002"),(0,n.kt)("h2",b({},{id:"\u793a\u4f8b"}),"\u793a\u4f8b"),(0,n.kt)(r.Z,{groupId:"syntax",defaultValue:i.Z.defaultSyntax,values:i.Z.syntax,mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"functional",mdxType:"TabItem"},(0,n.kt)("div",b({},{className:"snack-player","data-snack-name":"ActivityIndicator Function Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20%22react%22%3B%0Aimport%20%7B%20ActivityIndicator%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20(%0A%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20styles.horizontal%5D%7D%3E%0A%20%20%20%20%3CActivityIndicator%20%2F%3E%0A%20%20%20%20%3CActivityIndicator%20size%3D%22large%22%20%2F%3E%0A%20%20%20%20%3CActivityIndicator%20size%3D%22small%22%20color%3D%22%230000ff%22%20%2F%3E%0A%20%20%20%20%3CActivityIndicator%20size%3D%22large%22%20color%3D%22%2300ff00%22%20%2F%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20horizontal%3A%20%7B%0A%20%20%20%20flexDirection%3A%20%22row%22%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))),(0,n.kt)(l.Z,{value:"classical",mdxType:"TabItem"},(0,n.kt)("div",b({},{className:"snack-player","data-snack-name":"ActivityIndicator Class Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20ActivityIndicator%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20%22react-native%22%3B%0A%0Aclass%20App%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20return%20(%0A%20%20%20%20%20%20%3CView%20style%3D%7B%5Bstyles.container%2C%20styles.horizontal%5D%7D%3E%0A%20%20%20%20%20%20%20%20%3CActivityIndicator%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CActivityIndicator%20size%3D%22large%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CActivityIndicator%20size%3D%22small%22%20color%3D%22%230000ff%22%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CActivityIndicator%20size%3D%22large%22%20color%3D%22%2300ff00%22%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%2C%0A%20%20horizontal%3A%20%7B%0A%20%20%20%20flexDirection%3A%20%22row%22%2C%0A%20%20%20%20justifyContent%3A%20%22space-around%22%2C%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-dependencies":"","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"})))),(0,n.kt)("h1",b({},{id:"\u6587\u6863"}),"\u6587\u6863"),(0,n.kt)("h2",b({},{id:"props"}),"Props"),(0,n.kt)("h3",b({},{id:"view-props"}),(0,n.kt)("a",b({parentName:"h3"},{href:"/docs/0.66/view#props"}),"View Props")),(0,n.kt)("p",null,"\u7ee7\u627f\u4e86\u6240\u6709\u7684",(0,n.kt)("a",b({parentName:"p"},{href:"/docs/0.66/view#props"}),"View Props"),"."),(0,n.kt)("hr",null),(0,n.kt)("h3",b({},{id:"animating"}),(0,n.kt)("inlineCode",{parentName:"h3"},"animating")),(0,n.kt)("p",null,"\u662f\u5426\u8981\u663e\u793a\u6307\u793a\u5668\u52a8\u753b\uff0c\u9ed8\u8ba4\u4e3a true \u8868\u793a\u663e\u793a\uff0cfalse \u5219\u9690\u85cf\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"true"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",b({},{id:"color"}),(0,n.kt)("inlineCode",{parentName:"h3"},"color")),(0,n.kt)("p",null,"\u6eda\u8f6e\u7684\u524d\u666f\u989c\u8272\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),(0,n.kt)("a",b({parentName:"td"},{href:"colors"}),"color")),(0,n.kt)("td",b({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"null")," (\u7cfb\u7edf\u9ed8\u8ba4\u7684\u5f3a\u8c03\u8272)",(0,n.kt)("div",{class:"label android"},"Android"),(0,n.kt)("hr",null),(0,n.kt)("ins",{style:{background:"#999"},className:"color-box"}),(0,n.kt)("inlineCode",{parentName:"td"},"'#999999'")," ",(0,n.kt)("div",{className:"label ios"},"iOS"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",b({},{id:"hideswhenstopped-ios"}),(0,n.kt)("inlineCode",{parentName:"h3"},"hidesWhenStopped")," ",(0,n.kt)("div",{class:"label ios"},"iOS")),(0,n.kt)("p",null,"\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"animating"),"\u4e3a false \u7684\u65f6\u5019\uff0c\u662f\u5426\u8981\u9690\u85cf\u6307\u793a\u5668\uff08\u9ed8\u8ba4\u4e3a true\uff09\u3002\u5982\u679c",(0,n.kt)("inlineCode",{parentName:"p"},"animating"),"\u548c",(0,n.kt)("inlineCode",{parentName:"p"},"hidesWhenStopped"),"\u90fd\u4e3a false\uff0c\u5219\u663e\u793a\u4e00\u4e2a\u9759\u6b62\u7684\u6307\u793a\u5668\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"bool"),(0,n.kt)("td",b({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"true"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",b({},{id:"size"}),(0,n.kt)("inlineCode",{parentName:"h3"},"size")),(0,n.kt)("p",null,"\u6307\u793a\u5668\u7684\u5927\u5c0f\uff0c\u9ed8\u8ba4\u4e3a'small'\u3002\u76ee\u524d\u53ea\u80fd\u5728 Android \u4e0a\u8bbe\u5b9a\u5177\u4f53\u7684\u6570\u503c\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u7c7b\u578b"),(0,n.kt)("th",b({parentName:"tr"},{align:null}),"\u9ed8\u8ba4\u503c"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",b({parentName:"tr"},{align:null}),"enum(",(0,n.kt)("inlineCode",{parentName:"td"},"'small'"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"'large'"),")",(0,n.kt)("hr",null),"number ",(0,n.kt)("div",{class:"label android"},"Android")),(0,n.kt)("td",b({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"'small'"))))))}g.isMDXComponent=!0}}]);