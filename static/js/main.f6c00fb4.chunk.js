(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{16:function(e,c,t){},18:function(e,c,t){"use strict";t.r(c);var a=t(1),s=t(9),n=t.n(s),i=(t(14),t(15),t(7)),r=t(4),l=t(8),d=(t(16),t(2)),o=t.n(d),j=[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}],h=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],b=t(0),u=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var c=h.find((function(c){return c.id===e.categoryId}))||null,t=j.find((function(e){return e.id===c.ownerId}))||null;return Object(l.a)(Object(l.a)({},e),{},{category:c,user:t})})),x=function(){var e=Object(a.useState)(u),c=Object(r.a)(e,1)[0],t=Object(a.useState)(0),s=Object(r.a)(t,2),n=s[0],l=s[1],d=Object(a.useState)(""),x=Object(r.a)(d,2),m=x[0],O=x[1],f=Object(a.useState)([]),p=Object(r.a)(f,2),y=p[0],N=p[1],g=c.filter((function(e){var c=e.user,t=e.name,a=e.category;return(c.id===n||!n)&&t.toLowerCase().includes(m.toLowerCase())&&(y.includes(a.title)||0===y.length)}));return Object(b.jsx)("div",{className:"section",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"title",children:"Product Categories"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsxs)("nav",{className:"panel",children:[Object(b.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(b.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(b.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",className:o()({"is-active":!n}),onClick:function(){return l(0)},children:"All"}),j.map((function(e){return Object(b.jsx)("a",{"data-cy":"FilterUser",href:"#/".concat(e.id),className:o()({"is-active":e.id===n}),onClick:function(){return l(e.id)},children:e.name})}))]}),Object(b.jsx)("div",{className:"panel-block",children:Object(b.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:m,onChange:function(e){return O(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(b.jsx)("span",{className:"icon is-right",children:m&&Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){return O("")}})})]})}),Object(b.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(b.jsx)("a",{href:"#/","data-cy":"AllCategories",className:o()("button is-success mr-6",{"is-outlined":y.length}),onClick:function(){return N([])},children:"All"}),h.map((function(e){var c=e.title;return Object(b.jsx)("a",{"data-cy":"Category",className:o()("button mr-2 my-1",{"is-info":y.includes(c)}),href:"#/",onClick:function(){if(y.includes(c)){var e=Object(i.a)(y);return e.splice(y.indexOf(c),1),void N(e)}N([].concat(Object(i.a)(y),[c]))},children:c})}))]}),Object(b.jsx)("div",{className:"panel-block",children:Object(b.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){l(0),O("")},children:"Reset all filters"})})]})}),Object(b.jsx)("div",{className:"box table-container",children:0!==g.length?Object(b.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(b.jsx)("tbody",{children:g.map((function(e){var c=e.id,t=e.name,a=e.category,s=e.user,n=a.title,i=a.icon;return Object(b.jsxs)("tr",{"data-cy":"Product",children:[Object(b.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:c}),Object(b.jsx)("td",{"data-cy":"ProductName",children:t}),Object(b.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(i," - ").concat(n)}),Object(b.jsx)("td",{"data-cy":"ProductUser",className:o()({"has-text-link":"m"===s.sex,"has-text-danger":"f"===s.sex}),children:s.name})]})}))})]}):Object(b.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"})})]})})};n.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.f6c00fb4.chunk.js.map