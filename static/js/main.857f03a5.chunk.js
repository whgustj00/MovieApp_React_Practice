(this["webpackJsonpreact-for-beginners"]=this["webpackJsonpreact-for-beginners"]||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a.n(r),m=a(3),i=a(2);var u=function(e){let{coverImage:t,title:a,year:n,rating:r,runtime:c,genres:m,descriptionFull:i}=e;return l.a.createElement("div",null,l.a.createElement("img",{src:t,alt:a}),l.a.createElement("h2",null,a," (",n,")"),l.a.createElement("hr",null),l.a.createElement("p",null,"\ud3c9\uc810 : ",r),l.a.createElement("p",null,"\uc0c1\uc601 \uc2dc\uac04 : ",c,"\ubd84"),l.a.createElement("ul",null,"\uc7a5\ub974",m.map(e=>l.a.createElement("li",{key:e},e))),l.a.createElement("hr",null),l.a.createElement("p",null,"\uc904\uac70\ub9ac",l.a.createElement("br",null),l.a.createElement("br",null),i))};var s=function(){const{id:e}=Object(i.q)(),[t,a]=Object(n.useState)("true"),[r,c]=Object(n.useState)("");return Object(n.useEffect)(()=>{(async()=>{const t=await(await fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(e))).json();c(t.data.movie),a(!1)})()},[]),l.a.createElement("div",null,t?l.a.createElement("h2",null,"Loading..."):l.a.createElement(u,{key:r.id,coverImage:r.large_cover_image,title:r.title,year:r.year,rating:r.rating,runtime:r.runtime,genres:r.genres,descriptionFull:r.description_full}))};var o=function(e){let{id:t,coverImg:a,title:n,summary:r,genres:c}=e;return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("img",{src:a,alt:n}),l.a.createElement("h2",null,l.a.createElement(m.b,{to:"/movie/".concat(t)},n)),l.a.createElement("p",null,r),l.a.createElement("ul",null,c.map(e=>l.a.createElement("li",{key:e},e))),l.a.createElement("hr",null))};var E=function(){const[e,t]=Object(n.useState)(!0),[a,r]=Object(n.useState)([]);return Object(n.useEffect)(()=>{(async()=>{const e=await(await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")).json();r(e.data.movies),t(!1)})()},[]),l.a.createElement("div",null,e?l.a.createElement("h1",null,"Loading..."):l.a.createElement("div",null,a.map(e=>l.a.createElement(o,{key:e.id,id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres}))))};var v=function(){return l.a.createElement(m.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/movie/:id",element:l.a.createElement(s,null)}),l.a.createElement(i.a,{path:"/",element:l.a.createElement(E,null)})))};c.a.createRoot(document.getElementById("root")).render(l.a.createElement("div",null,l.a.createElement(v,null)))},7:function(e,t,a){e.exports=a(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.857f03a5.chunk.js.map