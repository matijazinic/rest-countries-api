(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[482],{3784:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/country/[country]",function(){return r(1932)}])},1932:function(n,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return h},default:function(){return f}});var s=r(5893),a=r(7294),c=r(9008),t=r.n(c),o=r(1664),i=r.n(o),l=r(1163),u=r(5812),d=r.n(u),m=r(5675),p=r.n(m);let _=a.forwardRef(function({title:n,titleId:e,...r},s){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:s,"aria-labelledby":e},r),n?a.createElement("title",{id:e},n):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"}))});var h=!0;function f(n){var e=n.country,r=n.allCountries,a=(0,l.useRouter)(),c=e.borders?e.borders.map(function(n){return n}):"",o=r.map(function(n){return{cca3:n.cca3,name:n.name.common}}),u=c?o.filter(function(n){return c.some(function(e){return e==n.cca3})}):[],m=e.currencies?Object.values(e.currencies):[],h=e.languages?Object.values(e.languages):[];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t(),{children:[(0,s.jsxs)("title",{children:[e.name.common," - REST Countries API"]}),(0,s.jsx)("meta",{name:"description",content:"Details page of ".concat(e.name.common," - Rest Countries API")}),(0,s.jsx)("link",{rel:"icon",type:"image/png",href:"/rest-countries-api/favicon.png"})]}),(0,s.jsxs)("main",{className:d().container,children:[(0,s.jsxs)("div",{className:d().top,children:[(0,s.jsx)("button",{className:d().backButton,onClick:function(){return a.push("/")},children:"Back"}),(0,s.jsx)(_,{className:d().backIcon})]}),(0,s.jsxs)("div",{className:d().countryWrap,children:[(0,s.jsx)("div",{className:d().flag,children:(0,s.jsx)(p(),{src:e.flags.png,alt:"Flag of "+e.name.common,className:d().countryFlag,width:500,height:300})}),(0,s.jsxs)("div",{className:d().info,children:[(0,s.jsx)("h1",{children:e.name.common}),(0,s.jsxs)("div",{className:d().countryInfo,children:[(0,s.jsxs)("div",{className:d().mainInfo,children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{children:"Official name:"})," ",e.name.official]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{children:"Population:"})," ",e.population.toLocaleString("en")]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{children:"Region:"})," ",e.region?e.region:"No region"]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{children:"Sub Region:"})," ",e.subregion?e.subregion:"No sub region"]}),(0,s.jsxs)("p",{className:d().capital,children:[(0,s.jsx)("span",{children:"Capital:"})," ",e.capital?e.capital.map(function(n){return(0,s.jsx)("span",{className:d().multInfoValue,children:n},n)}):"No capital"]})]}),(0,s.jsxs)("div",{className:d().miscInfo,children:[(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{children:"Top level domain:"})," ",e.tld?e.tld.map(function(n){return(0,s.jsx)("span",{className:d().multInfoValue,children:n},n)}):"No TLD"]}),(0,s.jsxs)("p",{className:d().currencies,children:[(0,s.jsx)("span",{children:"Currencies:"})," ",m.length>0?m.map(function(n){return(0,s.jsx)("span",{className:d().multInfoValue,children:n.name},n.name)}):"No currencies"]}),(0,s.jsxs)("p",{children:[(0,s.jsx)("span",{children:"Languages:"})," ",h.length>0?h.map(function(n){return(0,s.jsx)("span",{className:d().multInfoValue,children:n},n)}):"No languages"]})]})]}),(0,s.jsxs)("div",{className:d().borders,children:[(0,s.jsx)("span",{children:"Border countries:"})," ",u.length>0?u.map(function(n){return(0,s.jsx)(i(),{href:"/country/"+n.name.toLowerCase(),children:(0,s.jsx)("button",{className:d().button,children:n.name})},n.name)}):"No borders"]})]})]})]})]})}},5812:function(n){n.exports={container:"Country_container__ACT5g",top:"Country_top__WhnQi",backButton:"Country_backButton__VM_C9",backIcon:"Country_backIcon__NLQ5B",countryWrap:"Country_countryWrap__IxNNe",countryInfo:"Country_countryInfo__AQv_E",capital:"Country_capital__U_3_o",currencies:"Country_currencies__ejAHR",borders:"Country_borders__TBQiN",multInfoValue:"Country_multInfoValue__9DLAo",button:"Country_button__RtqJO",countries:"Country_countries__fyZuo",info:"Country_info__yUGZR"}}},function(n){n.O(0,[247,774,888,179],function(){return n(n.s=3784)}),_N_E=n.O()}]);