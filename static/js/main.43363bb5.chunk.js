(this["webpackJsonprandom-quote-machine"]=this["webpackJsonprandom-quote-machine"]||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),o=n(4),s=n.n(o),u=(n(9),n(2)),r=(n(10),n(1));var b=function(){var t=Object(c.useState)(null),e=Object(u.a)(t,2),n=(e[0],e[1]),a=Object(c.useState)(!1),o=Object(u.a)(a,2),s=(o[0],o[1]),b=Object(c.useState)(""),i=Object(u.a)(b,2),f=i[0],h=i[1],j=Object(c.useState)(""),l=Object(u.a)(j,2),d=l[0],O=l[1];Object(c.useEffect)((function(){fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json").then((function(t){return t.json()})).then((function(t){s(!0);var e=Math.floor(Math.random()*t.length);O(t[e].quote),h(t[e].author)}),(function(t){s(!0),n(t)}))}),[]);var m=Object(c.useRef)(),g=Object(c.useRef)();Object(c.useEffect)((function(){m.current=d,g.current=f}),[f]);var p=m.current,v=g.current;return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{className:"title",children:"Rndom Quote Machine"}),Object(r.jsxs)("div",{className:"quote",children:[Object(r.jsxs)("p",{className:"quote__text",children:["\u201e",d,"\u201d"]}),Object(r.jsxs)("p",{className:"quote__author",children:["~",f]}),Object(r.jsx)("button",{className:"btn",onClick:function(){fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json").then((function(t){return t.json()})).then((function(t){s(!0);var e=Math.floor(Math.random()*t.length);O(t[e].quote),h(t[e].author)}),(function(t){s(!0),n(t)}))},children:"New quote"}),Object(r.jsx)("button",{className:"btn",onClick:function(){O(p),h(v)},children:"Back to previous"})]})]})},i=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,o=e.getLCP,s=e.getTTFB;n(t),c(t),a(t),o(t),s(t)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),i()},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.43363bb5.chunk.js.map