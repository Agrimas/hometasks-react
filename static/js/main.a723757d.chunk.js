(this["webpackJsonphomeworks-react"]=this["webpackJsonphomeworks-react"]||[]).push([[0],{25:function(e,t,n){e.exports={container:"Message_container__2kPL0",avatar:"Message_avatar__g1dcu",message:"Message_message__EBBng",message__body:"Message_message__body__1aS_H",message__author:"Message_message__author__2DGEl",message__text:"Message_message__text__2T0Mw",message__time:"Message_message__time__3FfXe"}},36:function(e,t,n){e.exports={blue:"HW4_blue__1Hg_6",blueBack:"HW4_blueBack__2wnHL",column:"HW4_column__3XtIk",testSpanError:"HW4_testSpanError__1s1ac"}},46:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2qAEA",errorInput:"SuperInputText_errorInput__1_Vw5",error:"SuperInputText_error__2VZmK"}},51:function(e,t,n){e.exports={someClass:"Greeting_someClass__zXTm6",error:"Greeting_error__1Ubf7"}},52:function(e,t,n){e.exports={default:"SuperButton_default__3_s6z",red:"SuperButton_red__1xBMT"}},53:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__Tl7dq",spanClassName:"SuperCheckbox_spanClassName__Xz2z3"}},60:function(e,t,n){e.exports={App:"App_App__Vr0CR"}},65:function(e,t,n){e.exports={affair:"Affairs_affair__fV5HS"}},66:function(e,t,n){e.exports={span:"SuperEditableSpan_span__2Yb-0"}},78:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(7),s=n.n(a),o=n(35),i=(n(78),n(60)),j=n.n(i),l=n(32),u=n(6),b=n(118),d=n(116),O=n(117),h=n(119),x=n(115),f=n(9),m=n(111),p=n(113),v=n(47),_=n(1);var g=function(){var e=Object(m.a)((function(){return{fullscreen:{background:"orange",height:"100%",flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}}))();return Object(_.jsxs)(p.a,{container:!0,className:e.fullscreen,children:[Object(_.jsx)(v.a,{variant:"h1",children:"404"}),Object(_.jsx)(v.a,{variant:"h5",children:"Page not found!"}),Object(_.jsx)(v.a,{variant:"h5",children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},C=n(25),k=n.n(C);var N=function(e){return Object(_.jsxs)("div",{className:k.a.container,children:[Object(_.jsx)("img",{src:e.avatar,alt:"Avatar of ".concat(e.name),className:k.a.avatar}),Object(_.jsxs)("div",{className:k.a.message,children:[Object(_.jsxs)("div",{className:k.a.message__body,children:[Object(_.jsx)("span",{className:k.a.message__author,children:e.name}),Object(_.jsx)("p",{className:k.a.message__text,children:e.message})]}),Object(_.jsx)("time",{className:k.a.message__time,children:e.time})]})]})},y="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",S="Some Name",w="some text",I="22:00";var E=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 1",Object(_.jsx)(N,{avatar:y,name:S,message:w,time:I})]})},T=n(65),A=n.n(T);var P=function(e){return Object(_.jsxs)("div",{className:A.a.affair,children:[Object(_.jsx)("div",{children:e.affair.name}),Object(_.jsx)("div",{children:e.affair.priority}),Object(_.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var F=function(e){var t=e.data.map((function(t){return Object(_.jsx)(P,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(_.jsxs)("div",{children:[t,Object(_.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(_.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(_.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(_.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},H=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var B=function(){var e=Object(c.useState)(H),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("all"),s=Object(u.a)(a,2),o=s[0],i=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,o);return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 2",Object(_.jsx)(F,{data:j,setFilter:i,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},J=n(43),U=n(51),M=n.n(U),R=function(e){var t=e.name,n=e.setNameCallback,c=e.addUser,r=e.error,a=e.totalUsers,s=e.onKeyPressEnterHandler,o=r?M.a.error:M.a.someClass;return Object(_.jsxs)("div",{children:[Object(_.jsx)("input",{value:t,onChange:n,className:o,onKeyPress:s}),Object(_.jsx)("span",{children:r}),Object(_.jsx)("button",{onClick:c,children:"add"}),Object(_.jsx)("span",{children:a})]})},D=function(e){var t=e.users,n=e.addUserCallback,r=Object(c.useState)(""),a=Object(u.a)(r,2),s=a[0],o=a[1],i=Object(c.useState)(""),j=Object(u.a)(i,2),l=j[0],b=j[1],d=function(){s&&!s.includes(" ")?(b(""),n(s),alert("Hello  ".concat(s,"!"))):b("\u041d\u0435\u043a\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u043e\u0435 \u0438\u043c\u044f")},O=t.length;return Object(_.jsx)(R,{name:s,setNameCallback:function(e){o(e.currentTarget.value)},addUser:d,error:l,totalUsers:O,onKeyPressEnterHandler:function(e){13===e.charCode&&d()}})},W=n(41);var G=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(_.jsxs)("div",{children:["homeworks 3",Object(_.jsx)(D,{users:n,addUserCallback:function(e){r([{_id:Object(W.v1)(),name:e}].concat(Object(J.a)(n)))}})]})},K=n(10),L=n(15),X=n(46),z=n.n(X),V=function(e){e.type;var t=e.onChange,n=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=e.className,o=e.spanClassName,i=Object(L.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(z.a.error," ").concat(o||""),l="".concat(a?z.a.errorInput:z.a.superInput+" "+s);return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("input",Object(K.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r()},className:l},i)),a&&Object(_.jsx)("span",{className:j,children:a})]})},q=n(36),Y=n.n(q),Z=n(52),$=n.n(Z),Q=function(e){var t=e.red,n=e.className,c=Object(L.a)(e,["red","className"]),r="".concat(t?$.a.red:$.a.default," ").concat(n);return Object(_.jsx)("button",Object(K.a)({className:r},c))},ee=n(53),te=n.n(ee),ne=function(e){e.type;var t,n=e.onChange,r=e.onChangeChecked,a=e.className,s=(e.spanClassName,e.children),o=Object(L.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),i=Object(c.useState)(null!==(t=o.checked)&&void 0!==t&&t),j=Object(u.a)(i,2),l=j[0],b=j[1],d="".concat(te.a.checkbox," ").concat(a||"");return Object(_.jsxs)("label",{children:[Object(_.jsx)("input",Object(K.a)(Object(K.a)({type:"checkbox",onChange:function(e){r&&r(e.currentTarget.checked),n&&n(e),b(!l)},className:d},o),{},{checked:l})),s&&Object(_.jsx)("span",{className:te.a.spanClassName,children:s})]})};var ce=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],r=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},o=Object(c.useState)(!1),i=Object(u.a)(o,2),j=i[0],l=i[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 4",Object(_.jsxs)("div",{className:Y.a.column,children:[Object(_.jsx)(V,{value:n,onChangeText:r,onEnter:s,error:a,spanClassName:Y.a.testSpanError}),Object(_.jsx)(V,{className:Y.a.blue+" "+Y.a.blueBack}),Object(_.jsx)(Q,{children:"default"}),Object(_.jsx)(Q,{red:!0,onClick:s,children:"delete "}),Object(_.jsx)(Q,{disabled:!0,children:"disabled"}),Object(_.jsx)(ne,{checked:j,onChangeChecked:l,children:"some text "}),Object(_.jsx)(ne,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},re=n(66),ae=n.n(re),se=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,a=Object(L.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(c.useState)(!1),o=Object(u.a)(s,2),i=o[0],j=o[1],l=r||{},b=l.children,d=l.onDoubleClick,O=l.className,h=Object(L.a)(l,["children","onDoubleClick","className"]),x="".concat(ae.a.span," ").concat(O);return Object(_.jsx)(_.Fragment,{children:i?Object(_.jsx)(V,Object(K.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},a)):Object(_.jsx)("span",Object(K.a)(Object(K.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:x},h),{},{children:b||a.value}))})};function oe(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ie(e,t){var n=t,c=localStorage.getItem(e);return null!==c&&(n=JSON.parse(c)),n}oe("test",{x:"A",y:1});ie("test",{x:"",y:0});var je=function(){var e=Object(c.useState)(ie("editable-span-value","")),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 6",Object(_.jsx)("div",{children:Object(_.jsx)(se,{value:n,onChangeText:r,spanProps:{children:n?void 0:"enter text..."}})}),Object(_.jsx)(Q,{onClick:function(){oe("editable-span-value",n)},children:"save"}),Object(_.jsx)(Q,{onClick:function(){r("")},children:"restore"}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})};var le=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)(E,{}),Object(_.jsx)(B,{}),Object(_.jsx)(G,{}),Object(_.jsx)(ce,{}),Object(_.jsx)(je,{})]})};var ue=function(){return Object(_.jsx)("div",{children:"JuniorPlus"})},be=function(e){var t,n=e.options,c=e.onChange,r=e.onChangeOption,a=Object(L.a)(e,["options","onChange","onChangeOption"]),s=null!==(t=null===n||void 0===n?void 0:n.map((function(e){return Object(_.jsx)("option",{children:e},Object(W.v1)())})))&&void 0!==t?t:[];return Object(_.jsx)("select",Object(K.a)(Object(K.a)({onChange:function(e){r&&r(e.currentTarget.value),c&&c(e)}},a),{},{children:s}))},de=function(e){e.type;var t=e.name,n=e.options,c=e.value,r=e.onChange,a=e.onChangeOption,s=Object(L.a)(e,["type","name","options","value","onChange","onChangeOption"]),o=function(e){a&&a(e.currentTarget.checked),r&&r(e)},i=n?n.map((function(e,n){return Object(_.jsxs)("label",{children:[Object(_.jsx)("input",Object(K.a)({type:"radio",name:t,value:c,onChange:o},s)),e]},t+"-"+n)})):[];return Object(_.jsx)(_.Fragment,{children:i})},Oe=["x","y","z"];var he=function(){var e=Object(c.useState)(Oe[1]),t=Object(u.a)(e,2),n=t[0],r=t[1];return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 7",Object(_.jsx)("div",{children:Object(_.jsx)(be,{options:Oe,value:n,onChangeOption:r})}),Object(_.jsx)("div",{children:Object(_.jsx)(de,{name:"radio",options:Oe,value:n,onChangeOption:r})}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},xe=function(e,t){switch(t.type){case"sort":return Object(J.a)(e).sort((function(e,n){var c=e.name.localeCompare(n.name,"ru");return"up"===t.payload?c:-1*c}));case"check":return e.filter((function(e){return e.age>t.payload}));default:return e}},fe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var me=function(){var e=Object(c.useState)(fe),t=Object(u.a)(e,2),n=t[0],r=t[1],a=n.map((function(e){return Object(_.jsxs)("div",{children:[e.name,", ",e.age]},e._id)}));return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 8",a,Object(_.jsx)("div",{children:Object(_.jsx)(Q,{onClick:function(){return r(xe(fe,{type:"sort",payload:"up"}))},children:"sort up"})}),Object(_.jsx)("div",{children:Object(_.jsx)(Q,{onClick:function(){return r(xe(fe,{type:"sort",payload:"down"}))},children:"sort down"})}),Object(_.jsx)("div",{children:Object(_.jsx)(Q,{onClick:function(){return r(xe(fe,{type:"check",payload:18}))},children:"check 18"})}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})};var pe=function(){var e=Object(c.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(new Date),s=Object(u.a)(a,2),o=s[0],i=s[1],j=Object(c.useState)(!1),l=Object(u.a)(j,2),b=l[0],d=l[1],O=function(){clearInterval(n)},h=o.toLocaleTimeString(),x=o.toLocaleDateString();return Object(_.jsxs)("div",{children:[Object(_.jsx)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:h}),b&&Object(_.jsx)("div",{children:x}),Object(_.jsx)(Q,{onClick:function(){O();var e=window.setInterval((function(){i(new Date)}),1e3);r(e)},children:"start"}),Object(_.jsx)(Q,{onClick:O,children:"stop"})]})};var ve=function(){return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 9",Object(_.jsx)(pe,{}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})},_e="loadingReducer/SET_LOADING",ge={loading:!1},Ce=function(e){return{type:_e,loading:e}};var ke=function(){var e=Object(o.c)((function(e){return e.loading.loading})),t=Object(o.b)();return Object(_.jsxs)("div",{children:[Object(_.jsx)("hr",{}),"homeworks 10",e?Object(_.jsx)("div",{children:"\u043a\u0440\u0443\u0442\u0438\u043b\u043a\u0430..."}):Object(_.jsx)("div",{children:Object(_.jsx)(Q,{onClick:function(){t(Ce(!0)),setTimeout((function(){t(Ce(!1)),console.log("loading...")}),2e3)},children:"set loading..."})}),Object(_.jsx)("hr",{}),Object(_.jsx)("hr",{})]})};var Ne=function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("div",{children:"Junior"}),Object(_.jsx)(he,{}),Object(_.jsx)(me,{}),Object(_.jsx)(ve,{}),Object(_.jsx)(ke,{})]})},ye={PRE_JUNIOR:"/pre-junior",JUNIOR:"/junior","JUNIOR+":"/junior+"};var Se=function(){var e=Object(m.a)((function(){return{fullscreen:{minHeight:"auto",maxHeight:"100%",flexGrow:1}}}))();return Object(_.jsx)("div",{className:e.fullscreen,children:Object(_.jsxs)(f.d,{children:[Object(_.jsx)(f.b,{path:"/",exact:!0,render:function(){return Object(_.jsx)(f.a,{to:ye.PRE_JUNIOR})}}),Object(_.jsx)(f.b,{path:ye.PRE_JUNIOR,render:function(){return Object(_.jsx)(le,{})}}),Object(_.jsx)(f.b,{path:ye.JUNIOR,render:function(){return Object(_.jsx)(Ne,{})}}),Object(_.jsx)(f.b,{path:ye["JUNIOR+"],render:function(){return Object(_.jsx)(ue,{})}}),"// add routes",Object(_.jsx)(f.b,{render:function(){return Object(_.jsx)(g,{})}})]})})};var we=function(){var e=r.a.useState(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],a=Object.entries(ye).map((function(e){return Object(_.jsx)(l.b,{to:e[1],children:Object(_.jsx)(h.a,{button:!0,children:Object(_.jsx)(x.a,{primary:e[0]})})})}));return Object(_.jsxs)("div",{children:[Object(_.jsx)(d.a,{onClick:function(){return c(!0)},children:"Nav"}),Object(_.jsx)(b.a,{anchor:"right",open:n,onClose:function(){return c(!1)},children:Object(_.jsx)("div",{style:{width:250},role:"presentation",onClick:function(){return c(!1)},children:Object(_.jsx)(O.a,{children:a})})})]})};var Ie=function(){return Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(l.a,{children:[Object(_.jsx)(we,{}),Object(_.jsx)(Se,{})]})})};var Ee=function(){return Object(_.jsxs)("div",{className:j.a.App,children:[Object(_.jsx)("div",{children:"react homeworks:"}),Object(_.jsx)(Ie,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=n(56),Ae=Object(Te.a)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e:return Object(K.a)(Object(K.a)({},e),{},{loading:t.loading});default:return e}}}),Pe=Object(Te.b)(Ae),Fe=Pe;window.store=Pe,s.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(o.a,{store:Fe,children:Object(_.jsx)(Ee,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[84,1,2]]]);
//# sourceMappingURL=main.a723757d.chunk.js.map