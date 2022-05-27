(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{25:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n(17),r=n.n(a),s=n(3),o=n(0),l=n.n(o),i=(n(25),n(1)),j=function(){return Object(i.jsx)("h2",{children:"HomePage"})},d=n(7),b=n(18),h=n.n(b),m=n(19),u=n.n(m),p=(n(38),l.a.memo((function(e){var t=e.person,n=Object(s.e)().search;return Object(i.jsx)(c.b,{to:{pathname:"/people/".concat(t.slug),search:n},className:"m"===t.sex?"Person__blue":"Person__red",children:t.name})}))),O=(n(39),l.a.memo((function(e){var t=e.person,n=e.people,c=Object(s.g)().slug,a=n.find((function(e){return e.name===t.fatherName})),r=n.find((function(e){return e.name===t.motherName}));return Object(i.jsxs)("tr",{className:"Person ".concat(t.slug===c?"Person__light":""),children:[Object(i.jsx)("td",{children:Object(i.jsx)(p,{person:t})}),Object(i.jsx)("td",{children:t.sex}),Object(i.jsx)("td",{children:t.born}),Object(i.jsx)("td",{children:t.died}),Object(i.jsx)("td",{children:a?Object(i.jsx)(p,{person:a}):t.fatherName||"unknown"}),Object(i.jsx)("td",{children:r?Object(i.jsx)(p,{person:r}):t.motherName||"unknown"})]})}))),x=(n(40),l.a.createContext({people:[],setPeople:function(){}})),f=function(e){var t=e.children,n=Object(o.useState)([]),c=Object(d.a)(n,2),a=c[0],r=c[1],s=Object(o.useMemo)((function(){return{people:a,setPeople:r}}),[a]);return Object(o.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then(r)}),[]),Object(i.jsx)(x.Provider,{value:s,children:t})},v=l.a.memo((function(){var e=Object(s.e)(),t=Object(s.f)(),n=new URLSearchParams(e.search),a=Object(o.useContext)(x).people,r=n.get("query")||"",l=Object(o.useState)(r),j=Object(d.a)(l,2),b=j[0],m=j[1],p=Object(o.useCallback)(u()((function(e){e?n.set("query",e):n.delete("query"),t("?".concat(n.toString()))}),500),[]),f=n.get("sortBy")||"",v=n.get("sortOrder")||"",g=r.toLowerCase(),_=a.filter((function(e){return e.name.toLowerCase().includes(g)||(null!==e.fatherName?e.fatherName.toLowerCase().includes(g):"")||(null!==e.motherName?e.motherName.toLowerCase().includes(g):"")}));return _.sort((function(e,t){return"name"===f||"sex"===f?"asc"===v?t[f].localeCompare(e[f]):e[f].localeCompare(t[f]):"born"===f||"died"===f?"asc"===v?+t[f]-+e[f]:+e[f]-+t[f]:0})),Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"table-navigation",children:[Object(i.jsx)("input",{className:"table-navigation__input",placeholder:"Find People",type:"text",value:b,onChange:function(e){return function(e){m(e),p(e)}(e.target.value)}}),Object(i.jsx)(c.b,{className:"table-navigation__addPersonButton",to:"/people/new",children:"Add Person"})]}),Object(i.jsxs)("table",{className:"PeopleTable",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{className:"PeopleTable__thead",children:[["Name","Sex","Born","Died"].map((function(e){return Object(i.jsx)("th",{className:h()("PeopleTable__sort",{"PeopleTable__sort--asc":"asc"===v&&f===e.toLowerCase(),"PeopleTable__sort--desc":"desc"===v&&f===e.toLowerCase()}),onClick:function(){return function(e){n.set("sortOrder","asc"===v?"desc":"asc"),e?n.set("sortBy",e):n.delete("sortBy"),t("?".concat(n.toString()))}(e.toLowerCase())},children:e},e)})),Object(i.jsx)("th",{children:"Father"}),Object(i.jsx)("th",{children:"Mother"})]})}),Object(i.jsx)("tbody",{children:_.map((function(e){return Object(i.jsx)(O,{people:_,person:e},e.slug)}))})]})]})})),g=n(4),_=n(2),N=n(20),y=(n(41),l.a.memo((function(){var e=Object(o.useContext)(x),t=e.people,n=e.setPeople,c=Object(N.a)({mode:"onChange"}),a=c.register,r=c.handleSubmit,l=c.getValues,j=c.formState,d=j.errors,b=j.isValid,h=(new Date).getFullYear(),m=Object(s.f)(),u=l(),p=t.filter((function(e){return"m"===e.sex&&e.died>u.born&&e.born<u.born})),O=t.filter((function(e){return"f"===e.sex&&e.died>u.born&&e.born<u.born}));return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"Create new Person"}),Object(i.jsxs)("div",{className:"form",children:[Object(i.jsx)("button",{className:"form__goBackButton",type:"button",onClick:function(){return m(-1)},children:"Back"}),Object(i.jsxs)("form",{autoComplete:"off",onSubmit:r((function(e){var c=e,a="".concat(c.name.toLowerCase(),"-").concat(c.born);c=Object(_.a)(Object(_.a)({},c),{},{slug:a}),n([].concat(Object(g.a)(t),[c])),m("/people")})),children:[Object(i.jsx)("input",Object(_.a)(Object(_.a)({type:"text",className:"form__field"},a("name",{required:!0,pattern:/^[A-Za-z\s]+$/})),{},{placeholder:"Enter a name"})),Object(i.jsx)("div",{style:{height:20},children:Object(i.jsx)("p",{className:"p",children:d.name&&"Name is required!"})}),Object(i.jsxs)("div",{className:"form__field--radio",children:[Object(i.jsx)("input",Object(_.a)(Object(_.a)({type:"radio",id:"choiseSex1"},a("sex",{required:"Select a gender!"})),{},{value:"m"})),Object(i.jsx)("label",{htmlFor:"choiseSex1",children:"Male"}),Object(i.jsx)("input",Object(_.a)(Object(_.a)({type:"radio",id:"choiseSex2"},a("sex")),{},{value:"f"})),Object(i.jsx)("label",{htmlFor:"choiseSex2",children:"Female"}),d.sex&&"Choose a sex!"]}),Object(i.jsxs)("div",{children:[Object(i.jsx)("input",Object(_.a)(Object(_.a)({type:"number",className:"form__field bornDied"},a("born",{required:"Enter birth day!",min:{value:1400,message:"Birth day beetwen 1400 and ".concat(h)},max:{value:h,message:"Birth day beetwen 1400 and ".concat(h)}})),{},{placeholder:"Enter birth day"})),Object(i.jsx)("div",{style:{height:20},children:Object(i.jsx)("p",{className:"p",children:d.born&&d.born.message})}),Object(i.jsx)("input",Object(_.a)(Object(_.a)({type:"number",className:"form__field bornDied",disabled:!u.born},a("died",{required:"Enter death day!",min:{value:u.born,message:"Death day beetwen ".concat(u.born," and ").concat(h)},max:{value:+u.born+150,message:"Too old"}})),{},{placeholder:"Enter death day",min:"1400",max:"2022"})),Object(i.jsx)("div",{style:{height:20},children:Object(i.jsx)("p",{className:"p",children:d.died&&d.died.message})})]}),Object(i.jsxs)("div",{className:"form__field",children:[Object(i.jsxs)("select",Object(_.a)(Object(_.a)({},a("fatherName")),{},{placeholder:"Select fathers name",disabled:!u.born,id:"father",children:[Object(i.jsx)("option",{value:"",children:"Select fathers name"}),p.map((function(e){return Object(i.jsx)("option",{value:e.name,children:e.name},e.name)}))]})),Object(i.jsxs)("select",Object(_.a)(Object(_.a)({},a("motherName")),{},{placeholder:"Select mothers name",id:"mother",disabled:!u.born,children:[Object(i.jsx)("option",{value:"",children:"Select mothers name"}),O.map((function(e){return Object(i.jsx)("option",{value:e.name,children:e.name},e.name)}))]}))]}),Object(i.jsx)("input",{type:"submit",className:"form__addButton",disabled:!b,value:"Add"})]})]})]})}))),P=(n(43),function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("nav",{children:Object(i.jsxs)("div",{className:"nav",children:[Object(i.jsx)(c.c,{className:"nav__link",to:"/",children:"Home Page"}),Object(i.jsx)(c.c,{className:"nav__link",to:"/people",children:"People Page"})]})}),Object(i.jsx)("h1",{children:"People table"}),Object(i.jsx)(f,{children:Object(i.jsxs)(s.c,{children:[Object(i.jsx)(s.a,{path:"/",element:Object(i.jsx)(j,{})}),Object(i.jsx)(s.a,{path:"/people",element:Object(i.jsx)(v,{})}),Object(i.jsx)(s.a,{path:"/people/new",element:Object(i.jsx)(y,{})}),Object(i.jsx)(s.a,{path:"/people/:slug",element:Object(i.jsx)(v,{})})]})})]})});r.a.render(Object(i.jsx)(c.a,{children:Object(i.jsx)(P,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.799fdd64.chunk.js.map