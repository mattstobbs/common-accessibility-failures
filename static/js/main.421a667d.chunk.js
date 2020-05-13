(this["webpackJsonpcommon-accessibility-failures"]=this["webpackJsonpcommon-accessibility-failures"]||[]).push([[0],{299:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(7),r=a.n(i),c=(a(96),a(50)),o=a(20),m=a(340),s=a(352),u=a(42),p=a(9),b="/low-contrast-text",d="/missing-image-alt-text",E="/empty-links",g="/missing-form-input-labels",h="/empty-buttons",f="/missing-document-language",v=[{title:"Low Contrast Text",href:b},{linkText:"Missing Alt Text",title:"Missing Alternative Text for Images",href:d},{title:"Empty Links",href:E},{title:"Missing Form Input Labels",href:g},{title:"Empty Buttons",href:h},{title:"Missing Document Language",href:f}],y=a(38),x=Object(m.a)((function(e){return{title:{fontSize:40,margin:"16px 0"}}})),N=function(){var e=function(){var e=Object(p.g)().pathname;return v.find((function(t){return t.href===e})).title}(),t=x();return Object(n.useEffect)((function(){document.title=e}),[e]),l.a.createElement(y.a,{className:t.title,variant:"h3",component:"h1",gutterBottom:!0},e)},k=a(345),O=a(346),j=a(347),w=a(85),C=a.n(w),T=a(353),F=a(18),W=a(356),B=a(344),M=a(357),S=a(343),L=a(84),R=a.n(L),A=Object(m.a)((function(e){return{paper:{width:240,backgroundColor:e.palette.background.level1},item:{display:"flex",paddingTop:0,paddingBottom:0},button:{letterSpacing:0,justifyContent:"flex-start",textTransform:"none",width:"100%",fontWeight:e.typography.fontWeightRegular,padding:"".concat(e.spacing(.5),"px ").concat(e.spacing(3),"px")},active:{color:e.palette.primary.main,fontWeight:e.typography.fontWeightMedium}}})),I=function(e){var t=e.className,a=e.activeClassName,n=e.buttonClassName,i=e.to,r=e.children,c=Object(p.g)().pathname;return l.a.createElement(M.a,{button:!0,component:u.b,to:i,className:R()(t,Object(o.a)({},a,i===c)),disableGutters:!0},l.a.createElement(S.a,{primary:r,className:n}))},q=function(e){var t=e.className,a=e.mobileOpen,n=e.onClose,i=e.onOpen,r=e.pages,c=A(),o=l.a.createElement(B.a,null,r.map((function(e){var t=e.linkText,a=e.title,n=e.href;return l.a.createElement(I,{key:a,activeClassName:c.active,className:c.item,buttonClassName:c.button,to:n},t||a)})));return l.a.createElement("nav",{className:t,"aria-label":"Main navigation"},l.a.createElement(T.a,{lgUp:!0},l.a.createElement(W.a,{classes:{paper:c.paper},disableBackdropTransition:!0,variant:"temporary",open:a,onOpen:i,onClose:n,ModalProps:{keepMounted:!0}},o)),l.a.createElement(T.a,{mdDown:!0},l.a.createElement(F.a,{variant:"permanent",open:!0,classes:{paper:c.paper}},o)))},D=Object(m.a)((function(e){return{root:{flexGrow:1,display:"flex"},menuButton:Object(o.a)({marginRight:e.spacing(2)},e.breakpoints.up("lg"),{display:"none"}),drawer:Object(o.a)({},e.breakpoints.up("lg"),{flexShrink:0,width:240})}})),z=function(e){var t=e.pages,a=e.children,i=D(),r=Object(n.useState)(!1),o=Object(c.a)(r,2),m=o[0],s=o[1],u=function(){s(!0)};return l.a.createElement("div",{className:i.root},l.a.createElement(k.a,{position:"fixed"},l.a.createElement(O.a,null,l.a.createElement(j.a,{edge:"start",className:i.menuButton,color:"inherit","aria-label":"Open main navigation",onClick:u},l.a.createElement(C.a,null)))),l.a.createElement(q,{className:i.drawer,onClose:function(){s(!1)},onOpen:u,mobileOpen:m,pages:t}),a)},G=a(355),J=a(349),P=a(348),H=function(e){var t=e.accessibility,a=e.setAccessibility;return l.a.createElement(P.a,null,l.a.createElement(J.a,{control:l.a.createElement(G.a,{checked:t,onChange:function(e){a(e.target.checked)},"aria-label":"accessibility switch",color:"primary"}),label:"Accessibility",labelPlacement:"start"}))},U=function(){return l.a.createElement("div",null,"lct")},$=function(){return l.a.createElement("div",null,"mat")},K=function(){return l.a.createElement("div",null,"el")},Q=a(49),V=Object(m.a)((function(e){return{description:Object(Q.a)({},e.typography.h5,{margin:"0 0 40px"})}})),X=function(e){var t=e.children,a=V();return l.a.createElement(y.a,{className:a.description},t)},Y=a(350),Z=function(e){var t=e.links;return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,null,"For more information, visit: "),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(y.a,null,t.map((function(e){return l.a.createElement(Y.a,{key:e,href:e},e)}))))))},_=a(354),ee=a(351),te=function(e){var t=e.children;return l.a.createElement(_.a,{customStyle:{marginBottom:"40px"},language:"html",style:ee.a},t)},ae=a(22),ne=Object(m.a)((function(e){return{heading:Object(Q.a)({},e.typography.h4,{fontSize:30,margin:"40px 0 16px"}),example:Object(o.a)({outline:0,margin:"auto",display:"flex",justifyContent:"center",padding:e.spacing(3),border:"1px solid ".concat(Object(ae.b)(e.palette.action.active,.12)),borderLeftWidth:0,borderRightWidth:0,background:e.palette.background.paper},e.breakpoints.up("sm"),{borderRadius:e.shape.borderRadius,borderLeftWidth:1,borderRightWidth:1})}})),le=function(e){var t=e.children,a=ne();return l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{variant:"h2",component:"h2",className:a.heading},"Example"),l.a.createElement("div",{className:a.example},t))},ie=Object(m.a)((function(e){return{exampleForm:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",width:"100%"},inputContainer:{display:"flex",flexDirection:"column"}}})),re=function(e){var t=e.accessibility,a=ie();return l.a.createElement(l.a.Fragment,null,l.a.createElement(X,null,"Form <input> elements must have labels."),l.a.createElement(le,null,t?l.a.createElement("div",{className:a.exampleForm},l.a.createElement("label",{className:a.inputContainer},"Name",l.a.createElement("input",null)),l.a.createElement("div",{className:a.inputContainer},l.a.createElement("label",{htmlFor:"name2"},"Name"),l.a.createElement("input",{id:"name2"})),l.a.createElement("div",{className:a.inputContainer},l.a.createElement("div",{id:"name3"},"Name"),l.a.createElement("input",{"aria-labelledby":"name3"}))):l.a.createElement("div",{className:a.exampleForm},l.a.createElement("div",{className:a.inputContainer},l.a.createElement("label",null,"Name"),l.a.createElement("input",null)),l.a.createElement("div",{className:a.inputContainer},l.a.createElement("label",null,"Name"),l.a.createElement("input",null)),l.a.createElement("div",{className:a.inputContainer},l.a.createElement("div",null,"Name"),l.a.createElement("input",null)))),l.a.createElement(te,null,t?'\n<label>Name<input /></label>\n\n<label for="name">Name</label>\n<input id="name" />\n\n<div id="name">Name</div>\n<input aria-labelledby="name" />\n':"\n<label>Name</label>\n<input />\n\n<label>Name</label>\n<input />\n\n<div>Name</div>\n<input />\n"),l.a.createElement(Z,{links:["https://dequeuniversity.com/rules/axe/3.5/label"]}))},ce=a(63),oe=a.n(ce),me=function(e){var t=e.accessibility;return l.a.createElement(l.a.Fragment,null,l.a.createElement(X,null,"Buttons without text should be described using the aria-label attribute."),l.a.createElement(le,null,t?l.a.createElement(j.a,{color:"primary","aria-label":"Share on Twitter"},l.a.createElement(oe.a,null)):l.a.createElement(j.a,{color:"primary"},l.a.createElement(oe.a,null))),l.a.createElement(te,null,"\n    <button".concat(t?' aria-label="Share on Twitter"':"",">\n      <twitter-icon />\n    </button>\n    ")),l.a.createElement(Z,{links:["https://dequeuniversity.com/rules/axe/3.5/button-name"]}))},se=function(e){var t=e.accessibility;return l.a.createElement(l.a.Fragment,null,l.a.createElement(X,null,"The language of the page should be identified using the HTML lang attribute."),l.a.createElement(te,null,"\n    <html".concat(t?' lang="en"':"",">\n    </html>\n    ")),l.a.createElement(Z,{links:["https://dequeuniversity.com/rules/axe/3.5/html-has-lang"]}))},ue=Object(m.a)((function(e){return{root:Object(o.a)({paddingTop:e.spacing(6),outline:0,position:"relative",marginTop:e.spacing(8)},e.breakpoints.up("lg"),{paddingLeft:e.spacing(6),paddingRight:e.spacing(6)}),actions:{position:"absolute",right:16,top:16}}})),pe=function(){var e=ue(),t=Object(n.useState)(!1),a=Object(c.a)(t,2),i=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{basename:"/common-accessibility-failures"},l.a.createElement(z,{pages:v},l.a.createElement(s.a,{component:"main",maxWidth:"md",tabIndex:-1,className:e.root},l.a.createElement("div",{className:e.actions},l.a.createElement(H,{accessibility:i,setAccessibility:r})),l.a.createElement(N,null),l.a.createElement(p.d,null,l.a.createElement(p.b,{exact:!0,path:b},l.a.createElement(U,{accessibility:i})),l.a.createElement(p.b,{exact:!0,path:d},l.a.createElement($,{accessibility:i})),l.a.createElement(p.b,{exact:!0,path:E},l.a.createElement(K,{accessibility:i})),l.a.createElement(p.b,{exact:!0,path:g},l.a.createElement(re,{accessibility:i})),l.a.createElement(p.b,{exact:!0,path:h},l.a.createElement(me,{accessibility:i})),l.a.createElement(p.b,{exact:!0,path:f},l.a.createElement(se,{accessibility:i})),l.a.createElement(p.b,{path:"/"},l.a.createElement(p.a,{to:b})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e,t,a){e.exports=a(299)},96:function(e,t,a){}},[[91,1,2]]]);
//# sourceMappingURL=main.421a667d.chunk.js.map