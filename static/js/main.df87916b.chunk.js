(this["webpackJsonpcommon-accessibility-failures"]=this["webpackJsonpcommon-accessibility-failures"]||[]).push([[0],{102:function(e,t,a){},308:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),i=a.n(r),c=(a(102),a(51)),o=a(16),s=a(349),m=a(361),u=a(44),p=a(9),d={lowContrastText:"".concat("/common-accessibility-failures","/low-contrast-text"),missingAltText:"".concat("/common-accessibility-failures","/missing-image-alt-text"),emptyLinks:"".concat("/common-accessibility-failures","/empty-links"),missingFormInputLabels:"".concat("/common-accessibility-failures","/missing-form-input-labels"),emptyButtons:"".concat("/common-accessibility-failures","/empty-buttons"),missingDocumentLanguage:"".concat("/common-accessibility-failures","/missing-document-language")},g=[{title:"Low Contrast Text",href:d.lowContrastText},{linkText:"Missing Alt Text",title:"Missing Alternative Text for Images",href:d.missingAltText},{title:"Empty Links",href:d.emptyLinks},{title:"Missing Form Input Labels",href:d.missingFormInputLabels},{title:"Empty Buttons",href:d.emptyButtons},{title:"Missing Document Language",href:d.missingDocumentLanguage}],b=a(92),h=Object(s.a)((function(e){return{title:{fontSize:40,margin:"16px 0"}}})),E=function(){var e=function(){var e=Object(p.g)().pathname,t=g.find((function(t){return t.href===e}));return t?t.title:""}(),t=h();return Object(n.useEffect)((function(){document.title=e}),[e]),l.a.createElement(b.a,{className:t.title,variant:"h3",component:"h1",gutterBottom:!0},e)},f=a(354),y=a(355),v=a(356),x=a(87),k=a.n(x),w=a(362),N=a(20),j=a(365),O=a(353),T=a(366),C=a(352),F=a(33),_=a.n(F),B=Object(s.a)((function(e){return{paper:{width:240,backgroundColor:e.palette.background.level1},item:{display:"flex",paddingTop:0,paddingBottom:0},button:{letterSpacing:0,justifyContent:"flex-start",textTransform:"none",width:"100%",fontSize:e.typography.body1.fontSize,fontWeight:e.typography.fontWeightRegular,padding:"".concat(e.spacing(.5),"px ").concat(e.spacing(3),"px")},active:{color:e.palette.primary.main,fontWeight:e.typography.fontWeightMedium}}})),L=function(e){var t=e.to,a=e.children,n=Object(p.g)().pathname,r=B();return l.a.createElement(T.a,{disableGutters:!0,className:r.item},l.a.createElement(C.a,{component:u.b,to:t,className:_()(r.button,Object(o.a)({},r.active,t===n)),disableTouchRipple:!0},a))},W=function(e){var t=e.className,a=e.mobileOpen,n=e.onClose,r=e.onOpen,i=e.pages,c=B(),o=l.a.createElement(O.a,null,i.map((function(e){var t=e.linkText,a=e.title,n=e.href;return l.a.createElement(L,{key:a,to:n},t||a)})));return l.a.createElement("nav",{className:t,"aria-label":"Main navigation"},l.a.createElement(w.a,{lgUp:!0},l.a.createElement(j.a,{classes:{paper:c.paper},disableBackdropTransition:!0,variant:"temporary",open:a,onOpen:r,onClose:n,ModalProps:{keepMounted:!0}},o)),l.a.createElement(w.a,{mdDown:!0},l.a.createElement(N.a,{variant:"permanent",open:!0,classes:{paper:c.paper}},o)))},S=Object(s.a)((function(e){return{root:{flexGrow:1,display:"flex"},menuButton:Object(o.a)({marginRight:e.spacing(2)},e.breakpoints.up("lg"),{display:"none"}),drawer:Object(o.a)({},e.breakpoints.up("lg"),{flexShrink:0,width:240})}})),I=function(e){var t=e.pages,a=e.children,r=S(),i=Object(n.useState)(!1),o=Object(c.a)(i,2),s=o[0],m=o[1],u=function(){m(!0)};return l.a.createElement("div",{className:r.root},l.a.createElement(f.a,{position:"fixed"},l.a.createElement(y.a,null,l.a.createElement(v.a,{edge:"start",className:r.menuButton,color:"inherit","aria-label":"Open main navigation",onClick:u},l.a.createElement(k.a,null)))),l.a.createElement(W,{className:r.drawer,onClose:function(){m(!1)},onOpen:u,mobileOpen:s,pages:t}),a)},M=a(364),A=a(358),D=a(357),R=function(e){var t=e.accessibility,a=e.setAccessibility;return l.a.createElement(D.a,null,l.a.createElement(A.a,{control:l.a.createElement(M.a,{checked:t,onChange:function(e){a(e.target.checked)},"aria-label":"accessibility switch",color:"primary"}),label:"Accessibility",labelPlacement:"start"}))},q=a(29),z=Object(s.a)((function(e){return{description:Object(q.a)({},e.typography.h5,{margin:"0 0 40px"})}})),P=function(e){var t=e.children,a=z();return l.a.createElement(b.a,{className:a.description},t)},H=a(359),J=Object(s.a)({link:{wordWrap:"break-word"}}),G=function(e){var t=e.links,a=J();return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,null,"For more information, visit: "),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(b.a,null,t.map((function(e){return l.a.createElement(H.a,{className:a.link,key:e,href:e},e)}))))))},U=a(363),V=a(360),$=function(e){var t=e.children;return l.a.createElement(U.a,{customStyle:{marginBottom:"40px"},language:"html",style:V.a},t)},K=a(13),Q=Object(s.a)((function(e){return{heading:Object(q.a)({},e.typography.h4,{fontSize:30,margin:"40px 0 16px"}),example:Object(o.a)({outline:0,margin:"auto",display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",padding:e.spacing(3),border:"1px solid ".concat(Object(K.b)(e.palette.action.active,.12)),borderLeftWidth:0,borderRightWidth:0,background:e.palette.background.paper},e.breakpoints.up("sm"),{borderRadius:e.shape.borderRadius,borderLeftWidth:1,borderRightWidth:1})}})),X=function(e){var t=e.className,a=e.children,n=Q();return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,{variant:"h2",component:"h2",className:n.heading},"Example"),l.a.createElement("div",{className:_()(n.example,t)},a))},Y=Object(s.a)((function(e){return{highContrastBackground:{background:e.palette.primary.main,color:e.palette.primary.contrastText},lowContrastBackground:{background:"#808DD1",color:"#F2F2F2"},exampleText:Object(q.a)({},e.typography.h4,{fontSize:30})}})),Z=function(e){var t=e.accessibility,a=Y();return l.a.createElement(l.a.Fragment,null,l.a.createElement(P,null,"Text elements should have a high colour contrast against the background."),l.a.createElement(X,{className:_()(a.background,Object(o.a)({},a.highContrastBackground,t),Object(o.a)({},a.lowContrastBackground,!t))},l.a.createElement(b.a,{variant:"h2",component:"h2",className:a.exampleText},"Hello World")),l.a.createElement($,null,"\n    <style>\n        .hello-world {\n          ".concat(t?"color: #fff;\n          background: #3f51b5;":"color: #f2f2f2;\n          background: #808dd1;",'\n        }\n    <style>\n\n    <div class="hello-world">Hello World</div>\n    ')),l.a.createElement(G,{links:["https://dequeuniversity.com/rules/axe/3.5/color-contrast"]}))},ee=a(91),te=(a(305),a(306),a(307),a(64)),ae=a.n(te),ne=a(90),le=a.n(ne),re=a(65),ie=a.n(re),ce=Object(s.a)((function(e){return{image:{display:"block",width:"100%",maxWidth:200,height:"auto"},backgroundImage:{display:"block",width:"100%",maxWidth:200,backgroundImage:"url(".concat(le.a,")"),backgroundSize:"contain","&::before":{paddingBottom:"100%",content:"close-quote",display:"inline-block"}},tippy:Object(q.a)({},e.typography.body2,{padding:e.spacing(.5)})}})),oe=function(e){var t=e.children,a=e.by,n=e.unsplash,r=ce();return l.a.createElement(ee.a,{className:r.tippy,content:l.a.createElement("span",null,"Photo by ",l.a.createElement(H.a,{href:a.url},a.name)," on"," ",l.a.createElement(H.a,{href:n},"Unsplash")),interactive:!0,theme:"light-border",duration:"500",animation:"shift-away"},t)},se=function(e){var t=e.accessibility,a=ce();return l.a.createElement(l.a.Fragment,null,l.a.createElement(P,null,"Images should have alternative text."),l.a.createElement(X,null,l.a.createElement(oe,{by:{name:"Alvan Nee",url:"https://unsplash.com/@alvannee?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},unsplash:"https://unsplash.com/s/photos/dog?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},t?l.a.createElement("img",{className:a.image,src:ae.a,alt:"white and brown corgi besides brown dog"}):l.a.createElement("img",{className:a.image,src:ae.a})),l.a.createElement(oe,{by:{name:"Mark de Jong",url:"https://unsplash.com/@mrmarkdejong?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},unsplash:"https://unsplash.com/s/photos/highland-cattle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},t?l.a.createElement("div",{className:a.backgroundImage,"aria-label":"a highland cattle licking its nose"}):l.a.createElement("div",{className:a.backgroundImage})),l.a.createElement(oe,{by:{name:"Patrick Tomasso",url:"https://unsplash.com/@impatrickt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},unsplash:"https://unsplash.com/s/photos/background?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"},t?l.a.createElement("img",{id:"decorative-image",className:a.image,src:ie.a,alt:""}):l.a.createElement("img",{id:"decorative-image",className:a.image,src:ie.a}))),l.a.createElement($,null,"\n    <img".concat(t?' alt="white and brown corgi besides brown dog"':"",' />\n\n    <div class="cool-background-image"').concat(t?' aria-label="a highland cattle licking its nose"':"",' />\n\n    <img id="decorative-image"').concat(t?' alt=""':""," />\n    ")),l.a.createElement(G,{links:["https://dequeuniversity.com/rules/axe/3.5/image-alt"]}))},me=a(40),ue=a.n(me),pe=function(e){var t=e.accessibility;return l.a.createElement(l.a.Fragment,null,l.a.createElement(P,null,"Links without text should be described using the aria-label attribute."),l.a.createElement(X,null,t?l.a.createElement("a",{href:"https://twitter.com/matt_stobbs","aria-label":"Visit our twitter page"},l.a.createElement(ue.a,null)):l.a.createElement("a",{href:"https://twitter.com/matt_stobbs"},l.a.createElement(ue.a,null))),l.a.createElement($,null,'\n    <a href="..."'.concat(t?' aria-label="Visit our twitter page"':"",">\n      <twitter-icon />\n    </a>\n    ")),l.a.createElement(G,{links:["https://dequeuniversity.com/rules/axe/3.5/link-name"]}))},de=Object(s.a)({inputContainer:{display:"flex",flexDirection:"column"}}),ge=function(e){var t=e.accessibility,a=de();return l.a.createElement(l.a.Fragment,null,l.a.createElement(P,null,"Form <input> elements must have labels."),l.a.createElement(X,null,t?l.a.createElement(l.a.Fragment,null,l.a.createElement("label",{className:a.inputContainer},"Name",l.a.createElement("input",null)),l.a.createElement("div",{className:a.inputContainer},l.a.createElement("label",{htmlFor:"name2"},"Name"),l.a.createElement("input",{id:"name2"})),l.a.createElement("div",{className:a.inputContainer},l.a.createElement("div",{id:"name3"},"Name"),l.a.createElement("input",{"aria-labelledby":"name3"}))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:a.inputContainer},l.a.createElement("label",null,"Name"),l.a.createElement("input",null)),l.a.createElement("div",{className:a.inputContainer},l.a.createElement("label",null,"Name"),l.a.createElement("input",null)),l.a.createElement("div",{className:a.inputContainer},l.a.createElement("div",null,"Name"),l.a.createElement("input",null)))),l.a.createElement($,null,t?'\n<label>Name<input /></label>\n\n<label for="name">Name</label>\n<input id="name" />\n\n<div id="name">Name</div>\n<input aria-labelledby="name" />\n':"\n<label>Name</label>\n<input />\n\n<label>Name</label>\n<input />\n\n<div>Name</div>\n<input />\n"),l.a.createElement(G,{links:["https://dequeuniversity.com/rules/axe/3.5/label"]}))},be=function(e){var t=e.accessibility;return l.a.createElement(l.a.Fragment,null,l.a.createElement(P,null,"Buttons without text should be described using the aria-label attribute."),l.a.createElement(X,null,t?l.a.createElement(v.a,{color:"primary","aria-label":"Share on Twitter"},l.a.createElement(ue.a,null)):l.a.createElement(v.a,{color:"primary"},l.a.createElement(ue.a,null))),l.a.createElement($,null,"\n    <button".concat(t?' aria-label="Share on Twitter"':"",">\n      <twitter-icon />\n    </button>\n    ")),l.a.createElement(G,{links:["https://dequeuniversity.com/rules/axe/3.5/button-name"]}))},he=function(e){var t=e.accessibility;return l.a.createElement(l.a.Fragment,null,l.a.createElement(P,null,"The language of the page should be identified using the HTML lang attribute."),l.a.createElement($,null,"\n    <html".concat(t?' lang="en"':"",">\n    </html>\n    ")),l.a.createElement(G,{links:["https://dequeuniversity.com/rules/axe/3.5/html-has-lang"]}))},Ee=Object(s.a)((function(e){return{root:Object(o.a)({paddingTop:e.spacing(6),outline:0,position:"relative",marginTop:e.spacing(8)},e.breakpoints.up("lg"),{paddingLeft:e.spacing(6),paddingRight:e.spacing(6)}),actions:{position:"absolute",right:16,top:16}}})),fe=function(){var e=Ee(),t=Object(n.useState)(!1),a=Object(c.a)(t,2),r=a[0],i=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement(I,{pages:g},l.a.createElement(m.a,{component:"main",maxWidth:"md",tabIndex:-1,className:e.root},l.a.createElement("div",{className:e.actions},l.a.createElement(R,{accessibility:r,setAccessibility:i})),l.a.createElement(E,null),l.a.createElement(p.d,null,l.a.createElement(p.b,{exact:!0,path:d.lowContrastText},l.a.createElement(Z,{accessibility:r})),l.a.createElement(p.b,{exact:!0,path:d.missingAltText},l.a.createElement(se,{accessibility:r})),l.a.createElement(p.b,{exact:!0,path:d.emptyLinks},l.a.createElement(pe,{accessibility:r})),l.a.createElement(p.b,{exact:!0,path:d.missingFormInputLabels},l.a.createElement(ge,{accessibility:r})),l.a.createElement(p.b,{exact:!0,path:d.emptyButtons},l.a.createElement(be,{accessibility:r})),l.a.createElement(p.b,{exact:!0,path:d.missingDocumentLanguage},l.a.createElement(he,{accessibility:r})),l.a.createElement(p.b,{path:"/"},l.a.createElement(p.a,{to:d.lowContrastText})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(fe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},64:function(e,t,a){e.exports=a.p+"static/media/running-dogs.1c7f10c9.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/brick-wall.d5fb98b7.jpg"},90:function(e,t,a){e.exports=a.p+"static/media/highland-cattle.a87d3a7b.jpg"},97:function(e,t,a){e.exports=a(308)}},[[97,1,2]]]);
//# sourceMappingURL=main.df87916b.chunk.js.map