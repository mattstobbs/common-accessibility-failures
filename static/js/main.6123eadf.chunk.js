(this["webpackJsonpcommon-accessibility-failures"]=this["webpackJsonpcommon-accessibility-failures"]||[]).push([[0],{299:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(7),r=a.n(i),c=(a(96),a(50)),o=a(20),m=a(340),s=a(352),u=a(42),p=a(9),b={lowContrastText:"".concat("/common-accessibility-failures","/low-contrast-text"),missingAltText:"".concat("/common-accessibility-failures","/missing-image-alt-text"),emptyLinks:"".concat("/common-accessibility-failures","/empty-links"),missingFormInputLabels:"".concat("/common-accessibility-failures","/missing-form-input-labels"),emptyButtons:"".concat("/common-accessibility-failures","/empty-buttons"),missingDocumentLanguage:"".concat("/common-accessibility-failures","/missing-document-language")},d=[{title:"Low Contrast Text",href:b.lowContrastText},{linkText:"Missing Alt Text",title:"Missing Alternative Text for Images",href:b.missingAltText},{title:"Empty Links",href:b.emptyLinks},{title:"Missing Form Input Labels",href:b.missingFormInputLabels},{title:"Empty Buttons",href:b.emptyButtons},{title:"Missing Document Language",href:b.missingDocumentLanguage}],g=a(38),E=Object(m.a)((function(e){return{title:{fontSize:40,margin:"16px 0"}}})),h=function(){var e=function(){var e=Object(p.g)().pathname;return console.log(e),d.find((function(t){return t.href===e})).title}(),t=E();return Object(n.useEffect)((function(){document.title=e}),[e]),l.a.createElement(g.a,{className:t.title,variant:"h3",component:"h1",gutterBottom:!0},e)},f=a(345),y=a(346),v=a(347),x=a(85),N=a.n(x),k=a(353),w=a(18),O=a(356),j=a(344),C=a(357),T=a(343),L=a(84),F=a.n(L),B=Object(m.a)((function(e){return{paper:{width:240,backgroundColor:e.palette.background.level1},item:{display:"flex",paddingTop:0,paddingBottom:0},button:{letterSpacing:0,justifyContent:"flex-start",textTransform:"none",width:"100%",fontWeight:e.typography.fontWeightRegular,padding:"".concat(e.spacing(.5),"px ").concat(e.spacing(3),"px")},active:{color:e.palette.primary.main,fontWeight:e.typography.fontWeightMedium}}})),W=function(e){var t=e.className,a=e.activeClassName,n=e.buttonClassName,i=e.to,r=e.children,c=Object(p.g)().pathname;return l.a.createElement(C.a,{button:!0,component:u.b,to:i,className:F()(t,Object(o.a)({},a,i===c)),disableGutters:!0},l.a.createElement(T.a,{primary:r,className:n}))},M=function(e){var t=e.className,a=e.mobileOpen,n=e.onClose,i=e.onOpen,r=e.pages,c=B(),o=l.a.createElement(j.a,null,r.map((function(e){var t=e.linkText,a=e.title,n=e.href;return l.a.createElement(W,{key:a,activeClassName:c.active,className:c.item,buttonClassName:c.button,to:n},t||a)})));return l.a.createElement("nav",{className:t,"aria-label":"Main navigation"},l.a.createElement(k.a,{lgUp:!0},l.a.createElement(O.a,{classes:{paper:c.paper},disableBackdropTransition:!0,variant:"temporary",open:a,onOpen:i,onClose:n,ModalProps:{keepMounted:!0}},o)),l.a.createElement(k.a,{mdDown:!0},l.a.createElement(w.a,{variant:"permanent",open:!0,classes:{paper:c.paper}},o)))},S=Object(m.a)((function(e){return{root:{flexGrow:1,display:"flex"},menuButton:Object(o.a)({marginRight:e.spacing(2)},e.breakpoints.up("lg"),{display:"none"}),drawer:Object(o.a)({},e.breakpoints.up("lg"),{flexShrink:0,width:240})}})),A=function(e){var t=e.pages,a=e.children,i=S(),r=Object(n.useState)(!1),o=Object(c.a)(r,2),m=o[0],s=o[1],u=function(){s(!0)};return l.a.createElement("div",{className:i.root},l.a.createElement(f.a,{position:"fixed"},l.a.createElement(y.a,null,l.a.createElement(v.a,{edge:"start",className:i.menuButton,color:"inherit","aria-label":"Open main navigation",onClick:u},l.a.createElement(N.a,null)))),l.a.createElement(M,{className:i.drawer,onClose:function(){s(!1)},onOpen:u,mobileOpen:m,pages:t}),a)},I=a(355),R=a(349),D=a(348),q=function(e){var t=e.accessibility,a=e.setAccessibility;return l.a.createElement(D.a,null,l.a.createElement(R.a,{control:l.a.createElement(I.a,{checked:t,onChange:function(e){a(e.target.checked)},"aria-label":"accessibility switch",color:"primary"}),label:"Accessibility",labelPlacement:"start"}))},z=function(){return l.a.createElement("div",null,"lct")},G=function(){return l.a.createElement("div",null,"mat")},J=function(){return l.a.createElement("div",null,"el")},P=a(49),H=Object(m.a)((function(e){return{description:Object(P.a)({},e.typography.h5,{margin:"0 0 40px"})}})),U=function(e){var t=e.children,a=H();return l.a.createElement(g.a,{className:a.description},t)},$=a(350),K=function(e){var t=e.links;return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,null,"For more information, visit: "),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(g.a,null,t.map((function(e){return l.a.createElement($.a,{key:e,href:e},e)}))))))},Q=a(354),V=a(351),X=function(e){var t=e.children;return l.a.createElement(Q.a,{customStyle:{marginBottom:"40px"},language:"html",style:V.a},t)},Y=a(22),Z=Object(m.a)((function(e){return{heading:Object(P.a)({},e.typography.h4,{fontSize:30,margin:"40px 0 16px"}),example:Object(o.a)({outline:0,margin:"auto",display:"flex",justifyContent:"center",padding:e.spacing(3),border:"1px solid ".concat(Object(Y.b)(e.palette.action.active,.12)),borderLeftWidth:0,borderRightWidth:0,background:e.palette.background.paper},e.breakpoints.up("sm"),{borderRadius:e.shape.borderRadius,borderLeftWidth:1,borderRightWidth:1})}})),_=function(e){var t=e.children,a=Z();return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.a,{variant:"h2",component:"h2",className:a.heading},"Example"),l.a.createElement("div",{className:a.example},t))},ee=Object(m.a)((function(e){return{exampleForm:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",width:"100%"},inputContainer:{display:"flex",flexDirection:"column"}}})),te=function(e){var t=e.accessibility,a=ee();return l.a.createElement(l.a.Fragment,null,l.a.createElement(U,null,"Form <input> elements must have labels."),l.a.createElement(_,null,t?l.a.createElement("div",{className:a.exampleForm},l.a.createElement("label",{className:a.inputContainer},"Name",l.a.createElement("input",null)),l.a.createElement("div",{className:a.inputContainer},l.a.createElement("label",{htmlFor:"name2"},"Name"),l.a.createElement("input",{id:"name2"})),l.a.createElement("div",{className:a.inputContainer},l.a.createElement("div",{id:"name3"},"Name"),l.a.createElement("input",{"aria-labelledby":"name3"}))):l.a.createElement("div",{className:a.exampleForm},l.a.createElement("div",{className:a.inputContainer},l.a.createElement("label",null,"Name"),l.a.createElement("input",null)),l.a.createElement("div",{className:a.inputContainer},l.a.createElement("label",null,"Name"),l.a.createElement("input",null)),l.a.createElement("div",{className:a.inputContainer},l.a.createElement("div",null,"Name"),l.a.createElement("input",null)))),l.a.createElement(X,null,t?'\n<label>Name<input /></label>\n\n<label for="name">Name</label>\n<input id="name" />\n\n<div id="name">Name</div>\n<input aria-labelledby="name" />\n':"\n<label>Name</label>\n<input />\n\n<label>Name</label>\n<input />\n\n<div>Name</div>\n<input />\n"),l.a.createElement(K,{links:["https://dequeuniversity.com/rules/axe/3.5/label"]}))},ae=a(63),ne=a.n(ae),le=function(e){var t=e.accessibility;return l.a.createElement(l.a.Fragment,null,l.a.createElement(U,null,"Buttons without text should be described using the aria-label attribute."),l.a.createElement(_,null,t?l.a.createElement(v.a,{color:"primary","aria-label":"Share on Twitter"},l.a.createElement(ne.a,null)):l.a.createElement(v.a,{color:"primary"},l.a.createElement(ne.a,null))),l.a.createElement(X,null,"\n    <button".concat(t?' aria-label="Share on Twitter"':"",">\n      <twitter-icon />\n    </button>\n    ")),l.a.createElement(K,{links:["https://dequeuniversity.com/rules/axe/3.5/button-name"]}))},ie=function(e){var t=e.accessibility;return l.a.createElement(l.a.Fragment,null,l.a.createElement(U,null,"The language of the page should be identified using the HTML lang attribute."),l.a.createElement(X,null,"\n    <html".concat(t?' lang="en"':"",">\n    </html>\n    ")),l.a.createElement(K,{links:["https://dequeuniversity.com/rules/axe/3.5/html-has-lang"]}))},re=Object(m.a)((function(e){return{root:Object(o.a)({paddingTop:e.spacing(6),outline:0,position:"relative",marginTop:e.spacing(8)},e.breakpoints.up("lg"),{paddingLeft:e.spacing(6),paddingRight:e.spacing(6)}),actions:{position:"absolute",right:16,top:16}}})),ce=function(){var e=re(),t=Object(n.useState)(!1),a=Object(c.a)(t,2),i=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement(A,{pages:d},l.a.createElement(s.a,{component:"main",maxWidth:"md",tabIndex:-1,className:e.root},l.a.createElement("div",{className:e.actions},l.a.createElement(q,{accessibility:i,setAccessibility:r})),l.a.createElement(h,null),l.a.createElement(p.d,null,l.a.createElement(p.b,{exact:!0,path:b.lowContrastText},l.a.createElement(z,{accessibility:i})),l.a.createElement(p.b,{exact:!0,path:b.missingAltText},l.a.createElement(G,{accessibility:i})),l.a.createElement(p.b,{exact:!0,path:b.emptyLinks},l.a.createElement(J,{accessibility:i})),l.a.createElement(p.b,{exact:!0,path:b.missingFormInputLabels},l.a.createElement(te,{accessibility:i})),l.a.createElement(p.b,{exact:!0,path:b.emptyButtons},l.a.createElement(le,{accessibility:i})),l.a.createElement(p.b,{exact:!0,path:b.missingDocumentLanguage},l.a.createElement(ie,{accessibility:i})),l.a.createElement(p.b,{path:"/"},l.a.createElement(p.a,{to:b.lowContrastText})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e,t,a){e.exports=a(299)},96:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.6123eadf.chunk.js.map