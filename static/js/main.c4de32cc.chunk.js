(this["webpackJsonpimgur-app"]=this["webpackJsonpimgur-app"]||[]).push([[0],{46:function(e,t,c){},47:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(0),i=c(27),n=c.n(i),l=c(12),r=c(2),o=c(18),d=c(17),j=c(22),m=c.n(j),h=c(28),b=function(){var e=Object(h.a)(m.a.mark((function e(t){var c,a,s,i,n,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="https://api.imgur.com/3/gallery/".concat(encodeURI(t.radioSection),"/viral/0.json?showViral=").concat(encodeURI(t.showViral)),a={Authorization:"Client-ID eabefd66b1cee3d"},e.next=4,fetch(c,{headers:a});case 4:return s=e.sent,e.next=7,s.json();case 7:return i=e.sent,n=i.data,l=n.map((function(e){var t="",c="",a=!1;return void 0!==e.images?(t=e.images,c=e.images[0].link,e.images[0].link.includes("mp4")&&(a=!0)):(e.link.includes("mp4")&&(a=!0),t=e.link,c=e.link),{id:e.id,title:e.title,urlPresentation:c,url:t,boolGif:a,likes:e.ups,dislikes:e.downs,score:e.score,description:e.description?e.description:"Description is empty"}})),e.abrupt("return",l);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=c(33),p=function(e){var t=e.setSection,c=Object(u.a)({initialValues:{radioSection:"hot",showViral:"false"},onSubmit:function(e){t(e)}});return Object(a.jsxs)("form",{onSubmit:c.handleSubmit,children:[Object(a.jsxs)("div",{className:"form-check",children:[Object(a.jsx)("input",{className:"form-check-input",type:"radio",name:"radioSection",onChange:c.handleChange,id:"radioHot",value:"hot",defaultChecked:!0}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"radioHot",children:"Hot"})]}),Object(a.jsxs)("div",{className:"form-check",children:[Object(a.jsx)("input",{className:"form-check-input",type:"radio",name:"radioSection",onChange:c.handleChange,id:"radioTop",value:"top"}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"radioTop",children:"Top"})]}),Object(a.jsxs)("div",{className:"form-check",children:[Object(a.jsx)("input",{className:"form-check-input",type:"radio",name:"radioSection",onChange:c.handleChange,id:"radioUser",value:"user"}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"radioUser",children:"User"})]}),Object(a.jsxs)("div",{className:"form-check",children:[Object(a.jsx)("input",{className:"form-check-input",type:"checkbox",name:"showViral",onChange:c.handleChange,id:"checkViral",value:"true"}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"checkViral",children:"ShowViral"})]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-outline-info",children:"Submit"})]})},x=function(e){var t=e.title,c=e.urlPresentation,s=e.url,i=e.boolGif,n=e.likes,r=e.dislikes,o=e.score,d=e.description;return Object(a.jsx)("div",{className:"card animate__animated animate__fadeIn",style:{maxWidth:250,maxHeight:500},children:Object(a.jsxs)("div",{className:"row no-gutters",children:[Object(a.jsx)("div",{className:"col-md-12",children:i?Object(a.jsx)("video",{src:c,type:"video/mp4",alt:t,className:"card-img",width:"250",height:"250",autoPlay:!0,controls:!0,muted:!0}):Object(a.jsx)("img",{src:c,alt:t,className:"card-img",width:"250",height:"250"})}),Object(a.jsx)("div",{className:"col-md-8",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("h5",{className:"card-title",children:[" ",t.length>30?t.substring(0,27)+"...":t," "]}),Object(a.jsx)(l.b,{to:{pathname:"./details",state:{urlValue:s,titleValue:t,boolVideo:i,likes:n,dislikes:r,score:o,description:d}},children:"Details"})]})})]})})},O=(c(46),function(){var e=Object(s.useState)({radioSection:"hot",showViral:"false"}),t=Object(d.a)(e,2),c=t[0],i=t[1],n=function(e){var t=Object(s.useState)({data:[],loading:!0}),c=Object(d.a)(t,2),a=c[0],i=c[1];return Object(s.useEffect)((function(){b(e).then((function(e){i({data:e,loading:!1})}))}),[e]),a}(c),l=n.data,r=n.loading;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("button",{className:"btn btn-outline-info",style:{marginBottom:"5%"},type:"button","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample",children:"Show Filters"}),Object(a.jsx)("div",{className:"collapse",id:"collapseExample",children:Object(a.jsx)(p,{setSection:i})}),Object(a.jsx)("br",{}),r&&Object(a.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(a.jsx)("div",{className:"card-columns d-flex justify-content-center",children:l.map((function(e){return Object(a.jsx)(x,Object(o.a)({},e),e.id)}))})]})}),f=c(31),g=c(32),v=c(35),k=c(34),N=function(e){var t=e.type,c=e.link,s=e.description;return Object(a.jsxs)(a.Fragment,{children:[t.includes("image")&&Object(a.jsx)("img",{style:{"margin-bottom":"3%"},src:c,alt:s,className:"card-img"}),t.includes("video")&&Object(a.jsx)("video",{style:{"margin-bottom":"3%"},src:c,alt:s,type:t,className:"card-img",autoPlay:!0,controls:!0,muted:!0}),Object(a.jsx)("p",{children:s})]})},y=function(e){Object(v.a)(c,e);var t=Object(k.a)(c);function c(){return Object(f.a)(this,c),t.apply(this,arguments)}return Object(g.a)(c,[{key:"render",value:function(){var e=this,t=this.props.location.state,c=t.urlValue,s=t.titleValue,i=t.boolVideo,n=t.likes,l=t.dislikes,r=t.score,d=t.description;return Object(a.jsxs)("div",{className:"row mt-5",children:[Object(a.jsx)("div",{className:"col-4",children:Array.isArray(c)?c.map((function(e){return Object(a.jsx)(N,Object(o.a)({},e),e.id)})):[i?Object(a.jsx)("video",{src:c,type:"video/mp4",alt:s,className:"card-img",autoPlay:!0,controls:!0,muted:!0}):Object(a.jsx)("img",{src:c,alt:s,className:"card-img"})]}),Object(a.jsxs)("div",{className:"col-8 animate__animated animate__fadeIn",children:[Object(a.jsxs)("h3",{style:{"margin-left":"20%"},children:[" ",s," "]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)("h4",{style:{"margin-left":"20%"},children:[" ",d," "]}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"d-flex align-items-stretch",children:[Object(a.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/889/889221.svg",alt:"likes",style:{"margin-left":"20%"},width:"30",height:"30"}),Object(a.jsx)("h5",{style:{"margin-left":"3%"},children:n}),Object(a.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/889/889220.svg",alt:"dislikes",width:"30",style:{"margin-left":"5%"},height:"30"}),Object(a.jsx)("h5",{style:{"margin-left":"3%"},children:l}),Object(a.jsxs)("h5",{style:{"margin-left":"8%"},children:[Object(a.jsx)("b",{children:"Score"}),": ",r]})]}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-8 pull-right",style:{"margin-left":"20%"},children:Object(a.jsx)("button",{className:"btn btn-outline-info  d-flex align-items-end",onClick:function(){return e.props.history.goBack()},children:"Return"})})})]})]})}}]),c}(s.Component),w=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"container mt-2",children:Object(a.jsxs)(r.c,{children:[Object(a.jsx)(r.a,{exact:!0,path:"/",component:O}),Object(a.jsx)(r.a,{exact:!0,path:"/details/",component:y})]})})})},S=function(){return Object(a.jsx)(l.a,{children:Object(a.jsx)("div",{children:Object(a.jsx)(r.c,{children:Object(a.jsx)(r.a,{path:"/",component:w})})})})},V=function(){return Object(a.jsx)(S,{})};c(47),c(26),c(48);n.a.render(Object(a.jsx)(V,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.c4de32cc.chunk.js.map