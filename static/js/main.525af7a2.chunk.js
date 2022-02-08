(this.webpackJsonpmy_pokemon_app=this.webpackJsonpmy_pokemon_app||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(18),i=c.n(s),r=(c(25),c(16)),o=c(7),j=(c(26),c(8)),l=c(0);function d(e){var t=e.data,c=Object(n.useState)(),a=Object(o.a)(c,2),s=a[0],i=a[1];return Object(n.useEffect)((function(){fetch(t.url).then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsx)("div",{className:"pokemon-card",children:s&&Object(l.jsx)(j.b,{to:"/pokemon/".concat(s.id,"/about"),children:s&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"pokemon-card__image",children:Object(l.jsx)("img",{src:s.sprites.other.dream_world.front_default,width:"84",height:"84",alt:s.name})}),Object(l.jsx)("div",{className:"pokemon-card__id",children:s.id}),Object(l.jsx)("div",{className:"pokemon-card__name pokemon-card__text-box",children:s.name}),Object(l.jsx)("ul",{className:"pokemon-card__char pokemon-card__text-box",children:s.abilities.map((function(e,t){return Object(l.jsxs)("li",{children:[e.ability.name,t===s.abilities.length-1?"":", "]},e.ability.name)}))})]})})})}function b(e,t){var c=e.pokemonsData,n=e.searchValue,a=function(e){return""===n||e.name.toLowerCase().startsWith(n)};return Object(l.jsx)("section",{className:"pokemons-list container",ref:t,children:c&&c.map((function(e){return Object(l.jsx)("div",{style:{display:a(e)?"block":"none"},children:Object(l.jsx)(d,{data:e})},e.name)}))})}var h=Object(n.forwardRef)(b),u=c(2);function O(e){var t=e.pokemonData;return Object(l.jsxs)("div",{className:"pokemon-page__about",children:[Object(l.jsxs)("div",{className:"about__column",children:[Object(l.jsx)("div",{children:"Id"}),Object(l.jsx)("div",{children:"Name"}),Object(l.jsx)("div",{children:"Height"}),Object(l.jsx)("div",{children:"Weight"}),Object(l.jsx)("div",{children:"Abilities"})]}),Object(l.jsxs)("div",{className:"about__column",children:[Object(l.jsx)("div",{children:t.id}),Object(l.jsx)("div",{children:t.name}),Object(l.jsx)("div",{children:t.height}),Object(l.jsx)("div",{children:t.weight}),Object(l.jsx)("div",{children:t.abilities.map((function(e,c){return Object(l.jsxs)("span",{children:[e.ability.name,c===t.abilities.length-1?"":", "]},e.ability.name)}))})]})]})}function m(e){var t=e.pokemonDataSpecies;return Object(l.jsx)(l.Fragment,{children:t&&Object(l.jsxs)("div",{className:"pokemon-page__about",children:[Object(l.jsxs)("div",{className:"about__column",children:[Object(l.jsx)("div",{children:"Base happines:"}),Object(l.jsx)("div",{children:"Capture rate:"}),Object(l.jsx)("div",{children:"Color:"}),Object(l.jsx)("div",{children:"Egg groups:"})]}),Object(l.jsxs)("div",{className:"about__column",children:[Object(l.jsx)("div",{children:t.base_happiness}),Object(l.jsx)("div",{children:t.capture_rate}),Object(l.jsx)("div",{children:t.color.name}),Object(l.jsx)("div",{children:t.egg_groups.map((function(e,c){return Object(l.jsxs)("span",{children:[e.name,c===t.egg_groups.length-1?"":", "]},e.name)}))})]})]})})}function p(){return Object(l.jsx)("div",{children:"Page doesn't exists"})}function x(){var e=Object(n.useState)(),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(),i=Object(o.a)(s,2),r=i[0],d=i[1],b=Object(u.h)(),h=Object(u.g)();return Object(n.useEffect)((function(){Promise.all([fetch("https://pokeapi.co/api/v2/pokemon/".concat(h.id)).then((function(e){return e.json()})),fetch("https://pokeapi.co/api/v2/pokemon-species/".concat(h.id)).then((function(e){return e.json()}))]).then((function(e){var t=Object(o.a)(e,2),c=t[0],n=t[1];a(c),d(n)})).catch((function(e){return console.log("ERROR: ",e)}))}),[]),Object(l.jsx)(l.Fragment,{children:c&&Object(l.jsxs)("div",{className:"pokemon-page__wrapper",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:c.sprites.other.dream_world.front_default,width:"250",height:"auto",alt:c.name+" image"})}),Object(l.jsxs)("div",{className:"pokemon-page__right-box",children:[Object(l.jsxs)("div",{className:"pokemon-page__sub-pages",children:[Object(l.jsx)(j.c,{to:"".concat(b.url),exact:!0,className:"sub-pages__non-active",activeClassName:"sub-pages__active",children:"About"}),Object(l.jsx)(j.c,{to:"".concat(b.url,"/more"),exact:!0,className:"sub-pages__non-active",activeClassName:"sub-pages__active",children:"More"})]}),Object(l.jsxs)(u.c,{children:[Object(l.jsx)(u.a,{exact:!0,path:"".concat(b.path),children:Object(l.jsx)(O,{pokemonData:c})}),Object(l.jsx)(u.a,{exact:!0,path:"".concat(b.path,"/more"),children:Object(l.jsx)(m,{pokemonDataSpecies:r})}),Object(l.jsx)(u.a,{children:Object(l.jsx)(p,{})})]})]})]})})}function v(){var e="/"===Object(u.f)().pathname;return Object(l.jsx)("div",{className:"navigation container",children:e?Object(l.jsx)("div",{className:"navigation__logo",children:"Pokemons"}):Object(l.jsx)(j.b,{to:"/",className:"navigation__logo",children:"Pokemons"})})}function f(e){var t=e.value,c=e.name,n=e.placeholder,a=e.type,s=e.onChange,i=e.className;return Object(l.jsx)("input",{type:a,value:t,name:c,placeholder:n,onChange:s,className:i,autoComplete:"off"})}var g=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(o.a)(s,2),d=i[0],b=i[1],O=Object(n.useState)(0),m=Object(o.a)(O,2),g=m[0],_=m[1],k=Object(n.useRef)(),N=Object(n.useState)(null),y=Object(o.a)(N,2),S=y[0],C=y[1];return Object(n.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon/?offset=".concat(g,"&limit=20")).then((function(e){return e.json()})).then((function(e){a((function(t){return[].concat(Object(r.a)(t),Object(r.a)(e.results))}))})).catch((function(e){return console.log(e)}))}),[g]),Object(n.useEffect)((function(){S&&S.scrollHeight<k.current.clientHeight&&_((function(e){return e+20}))}),[c,S]),Object(l.jsx)("div",{className:"App",onScroll:function(e){e.target.scrollHeight-e.target.scrollTop===e.target.clientHeight&&_((function(e){return e+20}))},ref:k,children:Object(l.jsx)(j.a,{children:Object(l.jsxs)(u.c,{children:[Object(l.jsxs)(u.a,{exact:!0,path:"/",children:[Object(l.jsxs)("div",{className:"page_header",children:[Object(l.jsx)(v,{}),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(f,{type:"text",name:"search",onChange:function(e){b(e.target.value)},placeholder:"Search by name",className:"search",value:d})})]}),Object(l.jsx)(h,{pokemonsData:c,searchValue:d,ref:C})]}),Object(l.jsxs)(u.a,{path:"/pokemon/:id/about",children:[Object(l.jsx)("div",{className:"page_header",children:Object(l.jsx)(v,{})}),Object(l.jsx)(x,{})]}),Object(l.jsxs)(u.a,{children:[Object(l.jsx)(v,{}),Object(l.jsx)(p,{})]})]})})})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root")),_()}},[[33,1,2]]]);
//# sourceMappingURL=main.525af7a2.chunk.js.map