(this["webpackJsonpfile-directory-app"]=this["webpackJsonpfile-directory-app"]||[]).push([[0],{29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},34:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){"use strict";c.r(t);var i=c(1),a=c.n(i),s=c(8),n=c.n(s),r=(c(29),c(30),c(31),c(5)),l=c.n(r),o=c(9),d=c(4),j=c(22),b=c.n(j),m=c(3),u=(c(34),c(0)),h=function(e){return Object(u.jsx)("input",{type:"text",className:"search-bar",value:e.value,onChange:e.onChange,placeholder:e.placeholder})},p="/directories",O=c(23),f=c.n(O),x=function(e){return f.a.get(e)},y=(c(54),function(e){var t=e.directory,c=e.onClick;return Object(u.jsxs)("button",{onClick:c,className:"grid-item link",children:[Object(u.jsx)("div",{className:"grid-item-icon-wrapper",children:t.isDirectory?Object(u.jsx)(m.b,{size:48}):Object(u.jsx)(m.a,{color:"#c1cad2",size:48})}),Object(u.jsx)("p",{className:"grid-item-text",children:t.name})]})}),v=(c(55),function(e){var t=e.directory,c=e.onClick;return Object(u.jsxs)("button",{onClick:c,className:"list-item link",children:[Object(u.jsx)("div",{className:"list-item-icon-wrapper",children:t.isDirectory?Object(u.jsx)(m.b,{size:16}):Object(u.jsx)(m.a,{color:"#c1cad2",size:16})}),Object(u.jsx)("div",{className:"list-item-name-wrapper",children:t.name}),Object(u.jsx)("div",{className:"list-item-path-wrapper",children:t.path}),Object(u.jsxs)("div",{className:"list-item-modified-wrapper",children:["Last Modified: ",t.lastModified]}),Object(u.jsxs)("div",{className:"list-item-size-wrapper",children:["Size: ",t.size," Bytes"]})]})}),N=function(e){return 0===e.viewType?e.directories.filter((function(t){switch(e.fileType){case 1:return!t.isDirectory;case 2:return t.isDirectory;default:return t}})).map((function(t){return Object(u.jsx)(y,{directory:t,onClick:function(){e.handleDirectoryClick(t)}})})):e.directories.map((function(t){return Object(u.jsx)(v,{directory:t,onClick:function(){e.handleDirectoryClick(t)}})}))},g=c(24),k=c.n(g),C=(c(67),{content:{top:"40%",left:"auto",right:"0%",marginLeft:"-20%",bottom:"auto",transform:"translate(-50%, -50%)",overflowY:"auto",padding:0,minWidth:300,minHeight:500},overlay:{backgroundColor:"rgba(0, 0, 0, 0.5)"}}),w=function(e){var t=e.open,c=e.directory,i=e.onModalClose;return Object(u.jsx)(k.a,{isOpen:t,onRequestClose:i,style:C,children:Object(u.jsxs)("div",{className:"modal-wrapper",children:[Object(u.jsx)("div",{className:"modal-header",children:Object(u.jsx)("h1",{className:"",children:"File Details"})}),Object(u.jsx)("div",{className:"modal-image",children:Object(u.jsx)(m.a,{size:64,color:"#c1cad2"})}),Object(u.jsxs)("div",{className:"modal-body",children:[Object(u.jsxs)("div",{className:"modal-body-item",children:[Object(u.jsx)("p",{className:"modal-body-item-title",children:"Name:"}),Object(u.jsx)("p",{className:"modal-body-item-content",children:c?c.name:""})]}),Object(u.jsxs)("div",{className:"modal-body-item",children:[Object(u.jsx)("p",{className:"modal-body-item-title",children:"Path:"}),Object(u.jsx)("p",{className:"modal-body-item-content",children:c?c.path:""})]}),Object(u.jsxs)("div",{className:"modal-body-item",children:[Object(u.jsx)("p",{className:"modal-body-item-title",children:"Size:"}),Object(u.jsx)("p",{className:"modal-body-item-content",children:c?c.size+" Bytes":""})]}),Object(u.jsxs)("div",{className:"modal-body-item",children:[Object(u.jsx)("p",{className:"modal-body-item-title",children:"Last Accessed:"}),Object(u.jsx)("p",{className:"modal-body-item-content",children:c?Date(c.lastAccessed):""})]}),Object(u.jsxs)("div",{className:"modal-body-item",children:[Object(u.jsx)("p",{className:"modal-body-item-title",children:"Last Modified:"}),Object(u.jsx)("p",{className:"modal-body-item-content",children:c?Date(c.lastModified):""})]})]})]})})},D=(c(68),function(e){var t=e.fileType,c=e.setFileType;return Object(u.jsxs)("div",{className:"sidebar",children:[Object(u.jsx)("h1",{children:"filters"}),Object(u.jsxs)("div",{className:"filter-directory-type",children:[Object(u.jsx)("label",{className:"filter-directory-type-label",children:"Directory Type:"}),Object(u.jsxs)("div",{className:"filter-wrapper",children:[Object(u.jsxs)("div",{className:"filter-item",children:[Object(u.jsx)("label",{children:"All"}),Object(u.jsx)("input",{type:"radio",name:"file-type",className:"filter-radio",checked:0===t,onChange:function(){c(0)}})]}),Object(u.jsxs)("div",{className:"filter-item",children:[Object(u.jsx)("label",{children:"Files"}),Object(u.jsx)("input",{type:"radio",name:"file-type",className:"filter-radio",checked:1===t,onChange:function(){c(1)}})]}),Object(u.jsxs)("div",{className:"filter-item",children:[Object(u.jsx)("label",{children:"Folders"}),Object(u.jsx)("input",{type:"radio",name:"file-type",className:"filter-radio",checked:2===t,onChange:function(){c(2)}})]})]})]})]})}),z=function(){var e=Object(i.useState)("/"),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)([]),n=Object(d.a)(s,2),r=n[0],j=n[1],O=Object(i.useState)(0),f=Object(d.a)(O,2),y=f[0],v=f[1],g=Object(i.useState)(!1),k=Object(d.a)(g,2),C=k[0],z=k[1],S=Object(i.useState)(null),T=Object(d.a)(S,2),F=T[0],M=T[1],L=Object(i.useState)(0),B=Object(d.a)(L,2),A=B[0],P=B[1];Object(i.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("".concat("https://jungroit-node-dir-server.herokuapp.com").concat(p,"?directory=").concat(c));case 3:t=e.sent,i=t.data,j(i.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),j([]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var E=Object(i.useCallback)(b()(function(){var e=Object(o.a)(l.a.mark((function e(t){var c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("".concat("https://jungroit-node-dir-server.herokuapp.com").concat(p,"?directory=").concat(t));case 3:c=e.sent,i=c.data,j(i.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),j([]);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),1e3),[]);return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("div",{className:"header-left",children:Object(u.jsx)("h1",{children:"Server Directory"})}),Object(u.jsx)("div",{className:"header-center",children:Object(u.jsx)(h,{placeholder:"Search Directory:",value:c,onChange:function(e){a(e.target.value),E(e.target.value)}})}),Object(u.jsxs)("div",{className:"header-right",children:[Object(u.jsx)("button",{onClick:function(){v(0)},className:"link select-view-icon",children:Object(u.jsx)(m.c,{color:0===y?"#309bed":"#fff",size:22})}),Object(u.jsx)("button",{className:"link select-view-icon",children:Object(u.jsx)(m.d,{onClick:function(){v(1)},color:1===y?"#309bed":"#fff",size:22})})]})]}),Object(u.jsxs)("div",{className:"content",children:[Object(u.jsx)(D,{fileType:A,setFileType:P}),Object(u.jsx)("div",{className:"main",children:Object(u.jsx)(N,{handleDirectoryClick:function(e){if(e.isDirectory){var t="".concat(c,"/").concat(e.name);a(t),E(t)}else M(e),z(!0)},directories:r,viewType:y,fileType:A})})]}),Object(u.jsx)(w,{open:C,onModalClose:function(){z(!1)},directory:F})]})};var S=function(){return Object(u.jsx)(z,{})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,70)).then((function(t){var c=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),i(e),a(e),s(e),n(e)}))};n.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(S,{})}),document.getElementById("root")),T()}},[[69,1,2]]]);
//# sourceMappingURL=main.5d777ddf.chunk.js.map