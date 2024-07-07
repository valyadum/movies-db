"use strict";(self.webpackChunkmovies_db=self.webpackChunkmovies_db||[]).push([[883],{8883:(e,n,t)=>{t.r(n),t.d(n,{default:()=>W});var r,a,o,s,i=t(5043),l=t(3216),c=t(5475),d=t(7528),u=t(197);const p=u.Ay.img(r||(r=(0,d.A)(["\n  width: 100%;\n"]))),x=u.Ay.li(a||(a=(0,d.A)(["\n  width: 200px;\n  border: 3px solid #104d75;\n  position: relative;\n  text-decoration: none;\n  transition: transform 0.25s;\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),h=u.Ay.ul(o||(o=(0,d.A)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  list-style: none;\n  /* padding: 60px 60px; */\n  gap: 20px;\n  margin: 16px 16px 0 0;\n\n"]))),m=u.Ay.p(s||(s=(0,d.A)(["\n  position: absolute;\n  background: linear-gradient(to top, #0c0f21, #00000040);\n  text-align: center;\n  right: 0;\n  width: 100%;\n  z-index: 2;\n  bottom: 0;\n  color: #fff;\n  padding-bottom: 10px;\n  padding-top: 10px;\n  font-weight: 600;\n"])));var g=t(579);function f(e){let{id:n,title:t,poster_path:r,popularity:a}=e;const o=(0,l.zy)();return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)(c.N_,{to:"/movies/".concat(n),state:{from:o},children:[(0,g.jsx)(p,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):"https://cannamazoo.com/assets/defaults/img/default-product-img.jpg",width:200,height:300,alt:t}),(0,g.jsx)(m,{children:t})]})})}const j=(0,i.memo)(f);var v=t(495),y=t(8903),A=t(5865),b=t(9376),w=t(950),k=t(3336),_=t(3193),C=t(8750),I=t(6034),S=t(1906),F=t(4858),L=t(9351),M=t(8043),N=t(6605),O=t(1292),q=t(7121),z=t(710),E=t(9413),R=t(4605),V=t(3217),D=t(430);const P=function(e){let{control:n}=e;const{data:t=[],isLoading:r}=(0,L.eE)();return(0,g.jsx)(_.A,{component:"fieldset",variant:"standard",sx:{m:2,display:"block"},children:(0,g.jsxs)(M.A,{children:[(0,g.jsx)(N.A,{expandIcon:(0,g.jsx)(D.A,{}),"aria-controls":"panel2-content",id:"panel2-header",children:(0,g.jsx)(O.A,{children:"Genres"})}),r?(0,g.jsx)(q.A,{}):(0,g.jsx)(z.A,{children:(0,g.jsx)(E.A,{sx:{maxHeight:500},children:(0,g.jsx)(F.xI,{control:n,name:"genres",render:e=>{let{field:n}=e;return(0,g.jsx)(g.Fragment,{children:t&&t.map((e=>(0,g.jsx)(R.A,{control:(0,g.jsx)(V.A,{value:e.id,checked:n.value.includes(e.id),onChange:(e,t)=>{const r=Number(e.target.value);t?n.onChange([...n.value,r]):n.onChange(n.value.filter((e=>e!==r)))}}),label:e.name},e.id)))})}})})})]})})};var T=t(1802);const G=function(e){let{control:n}=e;const t=1950,r=(new Date).getFullYear();function a(e){return"".concat(e)}const o=[{value:t,label:"".concat(t)},{value:r,label:"".concat(r)}];return(0,g.jsxs)(_.A,{component:"fieldset",variant:"standard",sx:{m:2,display:"block"},children:[(0,g.jsx)(O.A,{children:"Release year "}),(0,g.jsx)(F.xI,{control:n,name:"primary_release_year",render:e=>{let{field:{onChange:n,value:s}}=e;return(0,g.jsx)(T.Ay,{getAriaLabel:()=>"Release year",value:s,onChange:(e,t)=>n(t),valueLabelDisplay:"auto",getAriaValueText:a,track:!1,min:t,max:r,marks:o,step:1})}})]})};const H=function(e){let{onApply:n}=e;const[t,r]=(0,i.useState)(""),{data:a=[],isLoading:o}=(0,L.q6)(t,{skip:!t}),{handleSubmit:s,control:l}=(0,F.mN)({defaultValues:{keywords:[],primary_release_year:1900,genres:[]}}),c=(0,i.useMemo)((()=>(0,w.A)((e=>{r(e)}),1e3)),[]);return(0,g.jsx)(k.A,{sx:{m:2,p:.6},children:(0,g.jsxs)("form",{onSubmit:s(n),children:[(0,g.jsx)(_.A,{component:"fieldset",variant:"standard",sx:{m:2,display:"block"},children:(0,g.jsx)(F.xI,{control:l,name:"keywords",render:e=>{let{field:{onChange:n,value:t}}=e;return(0,g.jsx)(C.A,{multiple:!0,disablePortal:!0,loading:o,options:a,filterOptions:e=>e,getOptionLabel:e=>e.name,onChange:(e,t)=>n(t),value:t,isOptionEqualToValue:(e,n)=>e.id===n.id,renderInput:e=>(0,g.jsx)(I.A,{...e,label:"Keywords"}),onInputChange:(e,n)=>c(n)})}})}),(0,g.jsx)(P,{control:l}),(0,g.jsx)(G,{control:l}),(0,g.jsx)(S.A,{type:"submit",variant:"contained",startIcon:(0,g.jsx)(b.A,{}),sx:{m:2},children:"Apply Filter"})]})})},K={page:1,filters:{}};const W=function(){const[e,n]=(0,i.useState)(K),{data:t,isFetching:r}=(0,L.mZ)(e),[a,o]=(0,i.useState)(),s=null===t||void 0===t?void 0:t.results,l=null===t||void 0===t?void 0:t.hasMorePages,c=(0,i.useCallback)((()=>{l&&n((e=>({...e,page:e.page+1})))}),[l]),[d]=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{threshold:n=1,root:t=null,rootMargin:r="0px",onIntersect:a}=e,o=(0,i.useRef)(null),[s,l]=(0,i.useState)();return(0,i.useEffect)((()=>{const e=new IntersectionObserver((e=>{const[n]=e;n.isIntersecting&&(null===a||void 0===a||a()),l(n)}),{threshold:n,root:t,rootMargin:r});return o.current&&e.observe(o.current),function(){o.current&&e.disconnect()}}),[a,r,t,n]),[o,s]}({onIntersect:c});return(0,g.jsxs)(y.Ay,{container:!0,spacing:0,sx:{flexWrap:"nowrap",pt:3},children:[(0,g.jsx)(y.Ay,{item:!0,xs:5,children:(0,g.jsx)(H,{onApply:e=>function(e){const t={keywords:e.keywords.map((e=>e.id)),genres:e.genres,year:e.primary_release_year};n({page:1,filters:t})}(e)})}),(0,g.jsxs)(y.Ay,{item:!0,xs:12,children:[!r&&!(null!==s&&void 0!==s&&s.length)&&(0,g.jsx)(A.A,{variant:"h6",children:"No movies were found that match you query"}),(0,g.jsx)(h,{children:null===s||void 0===s?void 0:s.map(((e,n)=>(0,g.jsx)(x,{children:(0,g.jsx)(j,{id:e.id,title:e.title,poster_path:e.poster_path,popularity:e.popularity})},"".concat(e.id,"+").concat(n))))}),(0,g.jsx)("div",{ref:d,children:r&&(0,g.jsx)(v.A,{})})]})]})}}}]);
//# sourceMappingURL=883.b9e98010.chunk.js.map