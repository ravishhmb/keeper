(this.webpackJsonpkeeper=this.webpackJsonpkeeper||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n(8),i=n.n(a),o=n(9),j=n(5),s=function(){return Object(c.jsx)("header",{children:Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("h1",{children:"Keeper"})})})};var l=function(e){return Object(c.jsxs)("div",{className:"note",children:[Object(c.jsx)("h2",{children:e.title}),Object(c.jsx)("p",{children:e.content}),Object(c.jsx)("button",{className:"delete-btn",onClick:function(){e.onDelete(e.id)},children:"DELETE"})]})},u=n(4),d=n(7);var b=function(e){var t=Object(r.useState)({title:"",content:""}),n=Object(j.a)(t,2),a=n[0],i=n[1];function o(e){var t=e.target,n=t.name,c=t.value;i((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(u.a)({},n,c))}))}return Object(c.jsx)("div",{className:"area",children:Object(c.jsxs)("form",{children:[Object(c.jsx)("input",{name:"title",onChange:o,value:a.title,placeholder:"Title"}),Object(c.jsx)("textarea",{name:"content",onChange:o,value:a.content,placeholder:"Take a note...",rows:"3"}),Object(c.jsx)("button",{className:"add-btn",onClick:function(t){e.onAdd(a),i({title:"",content:""}),t.preventDefault()},children:"Add"})]})})};var O=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1];function i(e){a((function(t){return t.filter((function(t,n){return n!==e}))}))}return Object(c.jsxs)("div",{children:[Object(c.jsx)(s,{}),Object(c.jsx)(b,{onAdd:function(e){a((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return Object(c.jsx)(l,{id:t,title:e.title,content:e.content,onDelete:i},t)}))]})};i.a.render(Object(c.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e2c30ae5.chunk.js.map