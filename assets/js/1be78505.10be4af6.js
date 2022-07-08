"use strict";(self.webpackChunkreact_native_website=self.webpackChunkreact_native_website||[]).push([[29514,9742],{59593:function(e,t,n){n.r(t),n.d(t,{default:function(){return Qe}});var a=n(27378),r=n(38944),l=n(87532),o=n(66127),i=n(88120),c=n(41149),s=n(92180),d=n(39901),m=n(1554),u=n(56381),b=n(12112),p=n(83947);var f="backToTopButton_iEvu",v="backToTopButtonShow_DO8w";function h(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,n]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:l,cancelScroll:o}=(0,b.Ct)();return(0,b.RF)((({scrollY:t},a)=>{const l=null==a?void 0:a.scrollY;l&&(r.current?r.current=!1:t>=l?(o(),n(!1)):t<e?n(!1):t+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,p.S)((e=>{e.location.hash&&(r.current=!0,n(!1))})),{shown:t,scrollToTop:()=>l(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",c.k.common.backToTopButton,f,e&&v),type:"button",onClick:t})}var E=n(35331),g=n(29453),y=n(87371),_=n(75778),k=Object.defineProperty,C=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,S=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function w(e){return a.createElement("svg",((e,t)=>{for(var n in t||(t={}))I.call(t,n)&&S(e,n,t[n]);if(C)for(var n of C(t))O.call(t,n)&&S(e,n,t[n]);return e})({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var N="collapseSidebarButton_oTwn",x="collapseSidebarButtonIcon_pMEX";function P({onClick:e}){return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",N),onClick:e},a.createElement(w,{className:x}))}var T=n(98127),Z=n(75071);const j=Symbol("EmptyContext"),L=a.createContext(j);function A({children:e}){const[t,n]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:t,setExpandedItem:n})),[t]);return a.createElement(L.Provider,{value:r},e)}var M=n(12181),B=n(7310),F=n(13067),H=n(14185),R=Object.defineProperty,D=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,z=(e,t,n)=>t in e?R(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function V({categoryLabel:e,onClick:t}){return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:e}),type:"button",className:"clean-btn menu__caret",onClick:t})}function G(e){var t=e,{item:n,onItemClick:o,activePath:i,level:s,index:d}=t,m=((e,t)=>{var n={};for(var a in e)W.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&D)for(var a of D(e))t.indexOf(a)<0&&Y.call(e,a)&&(n[a]=e[a]);return n})(t,["item","onItemClick","activePath","level","index"]);const{items:u,label:b,collapsible:p,className:f,href:v}=n,{docs:{sidebar:{autoCollapseCategories:h}}}=(0,y.L)(),E=function(e){const t=(0,H.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,l.Wl)(e):void 0),[e,t])}(n),g=(0,l._F)(n,i),_=(0,M.Mg)(v,i),{collapsed:k,setCollapsed:C}=(0,B.u)({initialState:()=>!!p&&(!g&&n.collapsed)}),{expandedItem:I,setExpandedItem:O}=function(){const e=(0,a.useContext)(L);if(e===j)throw new Z.i6("DocSidebarItemsExpandedStateProvider");return e}(),S=(e=!k)=>{O(e?null:d),C(e)};return function({isActive:e,collapsed:t,updateCollapsed:n}){const r=(0,Z.D9)(e);(0,a.useEffect)((()=>{e&&!r&&t&&n(!1)}),[e,r,t,n])}({isActive:g,collapsed:k,updateCollapsed:S}),(0,a.useEffect)((()=>{p&&I&&I!==d&&h&&C(!0)}),[p,I,d,C,h]),a.createElement("li",{className:(0,r.Z)(c.k.docs.docSidebarItemCategory,c.k.docs.docSidebarItemCategoryLevel(s),"menu__list-item",{"menu__list-item--collapsed":k},f)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":_})},a.createElement(F.Z,((e,t)=>{for(var n in t||(t={}))W.call(t,n)&&z(e,n,t[n]);if(D)for(var n of D(t))Y.call(t,n)&&z(e,n,t[n]);return e})({className:(0,r.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!v&&p,"menu__link--active":g}),onClick:p?e=>{null==o||o(n),v?S(!1):(e.preventDefault(),S())}:()=>{null==o||o(n)},"aria-current":_?"page":void 0,"aria-expanded":p?!k:void 0,href:p?null!=E?E:"#":E},m),b),v&&p&&a.createElement(V,{categoryLabel:b,onClick:e=>{e.preventDefault(),S()}})),a.createElement(B.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:k},a.createElement(he,{items:u,tabIndex:k?-1:0,onItemClick:o,activePath:i,level:s+1})))}var K=n(84513),q=n(88829),U="menuExternalLink_BiEj",J=Object.defineProperty,Q=Object.getOwnPropertySymbols,X=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,ee=(e,t,n)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,te=(e,t)=>{for(var n in t||(t={}))X.call(t,n)&&ee(e,n,t[n]);if(Q)for(var n of Q(t))$.call(t,n)&&ee(e,n,t[n]);return e};function ne(e){var t=e,{item:n,onItemClick:o,activePath:i,level:s,index:d}=t,m=((e,t)=>{var n={};for(var a in e)X.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&Q)for(var a of Q(e))t.indexOf(a)<0&&$.call(e,a)&&(n[a]=e[a]);return n})(t,["item","onItemClick","activePath","level","index"]);const{href:u,label:b,className:p}=n,f=(0,l._F)(n,i),v=(0,K.Z)(u);return a.createElement("li",{className:(0,r.Z)(c.k.docs.docSidebarItemLink,c.k.docs.docSidebarItemLinkLevel(s),"menu__list-item",p),key:b},a.createElement(F.Z,te(te({className:(0,r.Z)("menu__link",!v&&U,{"menu__link--active":f}),"aria-current":f?"page":void 0,to:u},v&&{onClick:o?()=>o(n):void 0}),m),b,!v&&a.createElement(q.Z,null)))}var ae="menuHtmlItem_OniL";function re({item:e,level:t,index:n}){const{value:l,defaultStyle:o,className:i}=e;return a.createElement("li",{className:(0,r.Z)(c.k.docs.docSidebarItemLink,c.k.docs.docSidebarItemLinkLevel(t),o&&[ae,"menu__list-item"],i),key:n,dangerouslySetInnerHTML:{__html:l}})}var le=Object.defineProperty,oe=Object.getOwnPropertySymbols,ie=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable,se=(e,t,n)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,de=(e,t)=>{for(var n in t||(t={}))ie.call(t,n)&&se(e,n,t[n]);if(oe)for(var n of oe(t))ce.call(t,n)&&se(e,n,t[n]);return e};function me(e){var t=e,{item:n}=t,r=((e,t)=>{var n={};for(var a in e)ie.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&oe)for(var a of oe(e))t.indexOf(a)<0&&ce.call(e,a)&&(n[a]=e[a]);return n})(t,["item"]);switch(n.type){case"category":return a.createElement(G,de({item:n},r));case"html":return a.createElement(re,de({item:n},r));default:return a.createElement(ne,de({item:n},r))}}var ue=Object.defineProperty,be=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,ve=(e,t,n)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var he=(0,a.memo)((function(e){var t=e,{items:n}=t,r=((e,t)=>{var n={};for(var a in e)pe.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&be)for(var a of be(e))t.indexOf(a)<0&&fe.call(e,a)&&(n[a]=e[a]);return n})(t,["items"]);return a.createElement(A,null,n.map(((e,t)=>a.createElement(me,((e,t)=>{for(var n in t||(t={}))pe.call(t,n)&&ve(e,n,t[n]);if(be)for(var n of be(t))fe.call(t,n)&&ve(e,n,t[n]);return e})({key:t,item:e,index:t},r)))))})),Ee="menu_jmj1",ge="menuWithAnnouncementBar_YufC";function ye({path:e,sidebar:t,className:n}){const l=function(){const{isActive:e}=(0,T.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}();return a.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",Ee,l&&ge,n)},a.createElement("ul",{className:(0,r.Z)(c.k.docs.docSidebarMenu,"menu__list")},a.createElement(he,{items:t,activePath:e,level:1})))}var _e="sidebar_CUen",ke="sidebarWithHideableNavbar_w4KB",Ce="sidebarHidden_k6VE",Ie="sidebarLogo_CYvI";var Oe=a.memo((function({path:e,sidebar:t,onCollapse:n,isHidden:l}){const{navbar:{hideOnScroll:o},docs:{sidebar:{hideable:i}}}=(0,y.L)();return a.createElement("div",{className:(0,r.Z)(_e,o&&ke,l&&Ce)},o&&a.createElement(_.Z,{tabIndex:-1,className:Ie}),a.createElement(ye,{path:e,sidebar:t}),i&&a.createElement(P,{onClick:n}))})),Se=n(31273),we=n(68561);const Ne=({sidebar:e,path:t})=>{const n=(0,Se.e)();return a.createElement("ul",{className:(0,r.Z)(c.k.docs.docSidebarMenu,"menu__list")},a.createElement(he,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1}))};var xe=a.memo((function(e){return a.createElement(we.Zo,{component:Ne,props:e})})),Pe=Object.defineProperty,Te=Object.getOwnPropertySymbols,Ze=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable,Le=(e,t,n)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ae=(e,t)=>{for(var n in t||(t={}))Ze.call(t,n)&&Le(e,n,t[n]);if(Te)for(var n of Te(t))je.call(t,n)&&Le(e,n,t[n]);return e};function Me(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(Oe,Ae({},e)),r&&a.createElement(xe,Ae({},e)))}var Be="expandButton_YOoA",Fe="expandButtonIcon_GZLG";function He({toggleSidebar:e}){return a.createElement("div",{className:Be,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e},a.createElement(w,{className:Fe}))}var Re="docSidebarContainer_y0RQ",De="docSidebarContainerHidden_uArb";function We({children:e}){var t;const n=(0,d.V)();return a.createElement(a.Fragment,{key:null!=(t=null==n?void 0:n.name)?t:"noSidebar"},e)}function Ye({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:n}){const{pathname:l}=(0,E.TH)(),[o,i]=(0,a.useState)(!1),s=(0,a.useCallback)((()=>{o&&i(!1),n((e=>!e))}),[n,o]);return a.createElement("aside",{className:(0,r.Z)(c.k.docs.docSidebarContainer,Re,t&&De),onTransitionEnd:e=>{e.currentTarget.classList.contains(Re)&&t&&i(!0)}},a.createElement(We,null,a.createElement(Me,{sidebar:e,path:l,onCollapse:s,isHidden:o})),o&&a.createElement(He,{toggleSidebar:s}))}var ze={docMainContainer:"docMainContainer_sTIZ",docMainContainerEnhanced:"docMainContainerEnhanced_iSjt",docItemWrapperEnhanced:"docItemWrapperEnhanced_PxMR"};function Ve({hiddenSidebarContainer:e,children:t}){const n=(0,d.V)();return a.createElement("main",{className:(0,r.Z)(ze.docMainContainer,(e||!n)&&ze.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",ze.docItemWrapper,e&&ze.docItemWrapperEnhanced)},t))}var Ge="docPage_KLoz",Ke="docsWrapper_ct1J";function qe({children:e}){const t=(0,d.V)(),[n,r]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:Ke},a.createElement(h,null),a.createElement("div",{className:Ge},t&&a.createElement(Ye,{sidebar:t.items,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}),a.createElement(Ve,{hiddenSidebarContainer:n},e)))}var Ue=n(9742),Je=n(90512);function Qe(e){const{versionMetadata:t}=e,n=(0,l.hI)(e);if(!n)return a.createElement(Ue.default,null);const{docElement:m,sidebarName:u,sidebarItems:b}=n;return a.createElement(a.Fragment,null,a.createElement(Je.Z,{version:t.version,tag:(0,o.os)(t.pluginId,t.version)}),a.createElement(i.FG,{className:(0,r.Z)(c.k.wrapper.docsPages,c.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:u,items:b},a.createElement(qe,null,m)))))}},9742:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=n(27378),r=n(56381),l=n(88120),o=n(1554);function i(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},92180:function(e,t,n){n.d(t,{E:function(){return i},q:function(){return o}});var a=n(27378),r=n(75071);const l=a.createContext(null);function o({children:e,version:t}){return a.createElement(l.Provider,{value:t},e)}function i(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);