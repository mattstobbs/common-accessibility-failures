(this["webpackJsonpcommon-accessibility-failures"]=this["webpackJsonpcommon-accessibility-failures"]||[]).push([[0],{101:function(e,t,a){},307:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(7),r=a.n(i),c=(a(101),a(51)),s=a(20),m=a(349),o=a(361),u=a(44),p=a(9),d={lowContrastText:"".concat("/common-accessibility-failures","/low-contrast-text"),missingAltText:"".concat("/common-accessibility-failures","/missing-image-alt-text"),emptyLinks:"".concat("/common-accessibility-failures","/empty-links"),missingFormInputLabels:"".concat("/common-accessibility-failures","/missing-form-input-labels"),emptyButtons:"".concat("/common-accessibility-failures","/empty-buttons"),missingDocumentLanguage:"".concat("/common-accessibility-failures","/missing-document-language")},g=[{title:"Low Contrast Text",href:d.lowContrastText},{linkText:"Missing Alt Text",title:"Missing Alternative Text for Images",href:d.missingAltText},{title:"Empty Links",href:d.emptyLinks},{title:"Missing Form Input Labels",href:d.missingFormInputLabels},{title:"Empty Buttons",href:d.emptyButtons},{title:"Missing Document Language",href:d.missingDocumentLanguage}],b=a(40),h=Object(m.a)((function(e){return{title:{fontSize:40,margin:"16px 0"}}})),E=function(){var e=function(){var e=Object(p.g)().pathname,t=g.find((function(t){return t.href===e}));return t?t.title:""}(),t=h();return Object(n.useEffect)((function(){document.title=e}),[e]),l.a.createElement(b.a,{className:t.title,variant:"h3",component:"h1",gutterBottom:!0},e)},f=a(354),y=a(355),v=a(356),x=a(88),k=a.n(x),N=a(362),w=a(18),j=a(365),O=a(353),C=a(366),T=a(352),_=a(87),L=a.n(_),F=Object(m.a)((function(e){return{paper:{width:240,backgroundColor:e.palette.background.level1},item:{display:"flex",paddingTop:0,paddingBottom:0},button:{letterSpacing:0,justifyContent:"flex-start",textTransform:"none",width:"100%",fontWeight:e.typography.fontWeightRegular,padding:"".concat(e.spacing(.5),"px ").concat(e.spacing(3),"px")},active:{color:e.palette.primary.main,fontWeight:e.typography.fontWeightMedium}}})),W=function(e){var t=e.className,a=e.activeClassName,n=e.buttonClassName,i=e.to,r=e.children,c=Object(p.g)().pathname;return l.a.createElement(C.a,{button:!0,component:u.b,to:i,className:L()(t,Object(s.a)({},a,i===c)),disableGutters:!0},l.a.createElement(T.a,{primary:r,className:n}))},B=function(e){var t=e.className,a=e.mobileOpen,n=e.onClose,i=e.onOpen,r=e.pages,c=F(),s=l.a.createElement(O.a,null,r.map((function(e){var t=e.linkText,a=e.title,n=e.href;return l.a.createElement(W,{key:a,activeClassName:c.active,className:c.item,buttonClassName:c.button,to:n},t||a)})));return l.a.createElement("nav",{className:t,"aria-label":"Main navigation"},l.a.createElement(N.a,{lgUp:!0},l.a.createElement(j.a,{classes:{paper:c.paper},disableBackdropTransition:!0,variant:"temporary",open:a,onOpen:i,onClose:n,ModalProps:{keepMounted:!0}},s)),l.a.createElement(N.a,{mdDown:!0},l.a.createElement(w.a,{variant:"permanent",open:!0,classes:{paper:c.paper}},s)))},I=Object(m.a)((function(e){return{root:{flexGrow:1,display:"flex"},menuButton:Object(s.a)({marginRight:e.spacing(2)},e.breakpoints.up("lg"),{display:"none"}),drawer:Object(s.a)({},e.breakpoints.up("lg"),{flexShrink:0,width:240})}})),S=function(e){var t=e.pages,a=e.children,i=I(),r=Object(n.useState)(!1),s=Object(c.a)(r,2),m=s[0],o=s[1],u=function(){o(!0)};return l.a.createElement("div",{className:i.root},l.a.createElement(f.a,{position:"fixed"},l.a.createElement(y.a,null,l.a.createElement(v.a,{edge:"start",className:i.menuButton,color:"inherit","aria-label":"Open main navigation",onClick:u},l.a.createElement(k.a,null)))),l.a.createElement(B,{className:i.drawer,onClose:function(){o(!1)},onOpen:u,mobileOpen:m,pages:t}),a)},M=a(364),A=a(358),R=a(357),D=function(e){var t=e.accessibility,a=e.setAccessibility;return l.a.createElement(R.a,null,l.a.createElement(A.a,{control:l.a.createElement(M.a,{checked:t,onChange:function(e){a(e.target.checked)},"aria-label":"accessibility switch",color:"primary"}),label:"Accessibility",labelPlacement:"start"}))},q=function(){return l.a.createElement("div",null,"lct")},z=a(34),P=a(359),J=a(91),G=(a(106),a(107),a(108),Object(m.a)((function(e){return{description:Object(z.a)({},e.typography.h5,{margin:"0 0 40px"})}}))),U=function(e){var t=e.children,a=G();return l.a.createElement(b.a,{className:a.description},t)},V=Object(m.a)({link:{wordWrap:"break-word"}}),H=function(e){var t=e.links,a=V();return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,null,"For more information, visit: "),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(b.a,null,t.map((function(e){return l.a.createElement(P.a,{className:a.link,key:e,href:e},e)}))))))},$=a(363),K=a(360),Q=function(e){var t=e.children;return l.a.createElement($.a,{customStyle:{marginBottom:"40px"},language:"html",style:K.a},t)},X=a(22),Y=Object(m.a)((function(e){return{heading:Object(z.a)({},e.typography.h4,{fontSize:30,margin:"40px 0 16px"}),example:Object(s.a)({outline:0,margin:"auto",display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",padding:e.spacing(3),border:"1px solid ".concat(Object(X.b)(e.palette.action.active,.12)),borderLeftWidth:0,borderRightWidth:0,background:e.palette.background.paper},e.breakpoints.up("sm"),{borderRadius:e.shape.borderRadius,borderLeftWidth:1,borderRightWidth:1})}})),Z=function(e){var t=e.children,a=Y();return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{variant:"h2",component:"h2",className:a.heading},"Example"),l.a.createElement("div",{className:a.example},t))},ee=a(64),te=a.n(ee),ae=a(65),ne=a.n(ae),le=a(66),ie=a.n(le),re=Object(m.a)((function(e){return{image:{display:"block",width:"100%",maxWidth:200,height:"auto"},backgroundImage:{display:"block",width:"100%",maxWidth:200,paddingBottom:"100%"},tippy:Object(z.a)({},e.typography.body2,{padding:e.spacing(.5)})}})),ce=function(e){var t=e.children,a=e.by,n=e.unsplash,i=re();return l.a.createElement(J.a,{className:i.tippy,content:l.a.createElement("span",null,"Photo by ",l.a.createElement(P.a,{href:a.url},a.name)," on"," ",l.a.createElement(P.a,{href:n},"Unsplash")),interactive:!0,theme:"light-border",duration:"500",animation:"shift-away"},t)},se=function(e){var t=e.accessibility,a=re();return l.a.createElement(l.a.Fragment,null,l.a.createElement(U,null,"Images should have alternative text."),l.a.createElement(Z,null,l.a.createElement(ce,{by:{name:"Alvan Nee",url:"https://unsplash.com/@alvannee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},unsplash:"https://unsplash.com/s/photos/dog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},t?l.a.createElement("img",{className:a.image,src:te.a,alt:"white and brown corgi besides brown dog"}):l.a.createElement("img",{className:a.image,src:te.a})),l.a.createElement(ce,{by:{name:"Mark de Jong",url:"https://unsplash.com/@mrmarkdejong?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},unsplash:"https://unsplash.com/s/photos/highland-cattle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},t?l.a.createElement("div",{className:a.backgroundImage,style:{backgroundImage:"url(".concat(ne.a,")"),backgroundSize:"contain"},"aria-label":"a highland cattle licking its nose"}):l.a.createElement("div",{className:a.backgroundImage,style:{backgroundImage:"url(".concat(ne.a,")"),backgroundSize:"contain"}})),l.a.createElement(ce,{by:{name:"Patrick Tomasso",url:"https://unsplash.com/@impatrickt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},unsplash:"https://unsplash.com/s/photos/background?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},t?l.a.createElement("img",{id:"decorative-image",className:a.image,src:ie.a,alt:""}):l.a.createElement("img",{id:"decorative-image",className:a.image,src:ie.a}))),l.a.createElement(Q,null,"\n    <img".concat(t?' alt="white and brown corgi besides brown dog"':"",' />\n\n    <div class="cool-background-image"').concat(t?' aria-label="a highland cattle licking its nose"':"",' />\n\n    <img id="decorative-image"').concat(t?' alt=""':""," />\n    ")),l.a.createElement(H,{links:["https://dequeuniversity.com/rules/axe/3.5/image-alt"]}))},me=a(39),oe=a.n(me),ue=function(e){var t=e.accessibility;return l.a.createElement(l.a.Fragment,null,l.a.createElement(U,null,"Links without text should be described using the aria-label attribute."),l.a.createElement(Z,null,t?l.a.createElement("a",{href:"https://twitter.com/matt_stobbs","aria-label":"Visit our twitter page"},l.a.createElement(oe.a,null)):l.a.createElement("a",{href:"https://twitter.com/matt_stobbs"},l.a.createElement(oe.a,null))),l.a.createElement(Q,null,'\n    <a href="..."'.concat(t?' aria-label="Visit our twitter page"':"",">\n      <twitter-icon />\n    </a>\n    ")),l.a.createElement(H,{links:["https://dequeuniversity.com/rules/axe/3.5/link-name"]}))},pe=Object(m.a)({inputContainer:{display:"flex",flexDirection:"column"}}),de=function(e){var t=e.accessibility,a=pe();return l.a.createElement(l.a.Fragment,null,l.a.createElement(U,null,"Form <input> elements must have labels."),l.a.createElement(Z,null,t?l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{className:a.inputContainer},"Name",l.a.createElement("input",null)),l.a.createElement("div",{className:a.inputContainer},l.a.createElement("label",{htmlFor:"name2"},"Name"),l.a.createElement("input",{id:"name2"})),l.a.createElement("div",{className:a.inputContainer},l.a.createElement("div",{id:"name3"},"Name"),l.a.createElement("input",{"aria-labelledby":"name3"}))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:a.inputContainer},l.a.createElement("label",null,"Name"),l.a.createElement("input",null)),l.a.createElement("div",{className:a.inputContainer},l.a.createElement("label",null,"Name"),l.a.createElement("input",null)),l.a.createElement("div",{className:a.inputContainer},l.a.createElement("div",null,"Name"),l.a.createElement("input",null)))),l.a.createElement(Q,null,t?'\n<label>Name<input /></label>\n\n<label for="name">Name</label>\n<input id="name" />\n\n<div id="name">Name</div>\n<input aria-labelledby="name" />\n':"\n<label>Name</label>\n<input />\n\n<label>Name</label>\n<input />\n\n<div>Name</div>\n<input />\n"),l.a.createElement(H,{links:["https://dequeuniversity.com/rules/axe/3.5/label"]}))},ge=function(e){var t=e.accessibility;return l.a.createElement(l.a.Fragment,null,l.a.createElement(U,null,"Buttons without text should be described using the aria-label attribute."),l.a.createElement(Z,null,t?l.a.createElement(v.a,{color:"primary","aria-label":"Share on Twitter"},l.a.createElement(oe.a,null)):l.a.createElement(v.a,{color:"primary"},l.a.createElement(oe.a,null))),l.a.createElement(Q,null,"\n    <button".concat(t?' aria-label="Share on Twitter"':"",">\n      <twitter-icon />\n    </button>\n    ")),l.a.createElement(H,{links:["https://dequeuniversity.com/rules/axe/3.5/button-name"]}))},be=function(e){var t=e.accessibility;return l.a.createElement(l.a.Fragment,null,l.a.createElement(U,null,"The language of the page should be identified using the HTML lang attribute."),l.a.createElement(Q,null,"\n    <html".concat(t?' lang="en"':"",">\n    </html>\n    ")),l.a.createElement(H,{links:["https://dequeuniversity.com/rules/axe/3.5/html-has-lang"]}))},he=Object(m.a)((function(e){return{root:Object(s.a)({paddingTop:e.spacing(6),outline:0,position:"relative",marginTop:e.spacing(8)},e.breakpoints.up("lg"),{paddingLeft:e.spacing(6),paddingRight:e.spacing(6)}),actions:{position:"absolute",right:16,top:16}}})),Ee=function(){var e=he(),t=Object(n.useState)(!1),a=Object(c.a)(t,2),i=a[0],r=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement(S,{pages:g},l.a.createElement(o.a,{component:"main",maxWidth:"md",tabIndex:-1,className:e.root},l.a.createElement("div",{className:e.actions},l.a.createElement(D,{accessibility:i,setAccessibility:r})),l.a.createElement(E,null),l.a.createElement(p.d,null,l.a.createElement(p.b,{exact:!0,path:d.lowContrastText},l.a.createElement(q,{accessibility:i})),l.a.createElement(p.b,{exact:!0,path:d.missingAltText},l.a.createElement(se,{accessibility:i})),l.a.createElement(p.b,{exact:!0,path:d.emptyLinks},l.a.createElement(ue,{accessibility:i})),l.a.createElement(p.b,{exact:!0,path:d.missingFormInputLabels},l.a.createElement(de,{accessibility:i})),l.a.createElement(p.b,{exact:!0,path:d.emptyButtons},l.a.createElement(ge,{accessibility:i})),l.a.createElement(p.b,{exact:!0,path:d.missingDocumentLanguage},l.a.createElement(be,{accessibility:i})),l.a.createElement(p.b,{path:"/"},l.a.createElement(p.a,{to:d.lowContrastText})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,t,a){e.exports=a.p+"static/media/running-dogs.1c7f10c9.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/highland-cattle.a87d3a7b.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/brick-wall.d5fb98b7.jpg"},96:function(e,t,a){e.exports=a(307)}},[[96,1,2]]]);
//# sourceMappingURL=main.2c2b8f80.chunk.js.map