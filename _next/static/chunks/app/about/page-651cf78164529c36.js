(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{2090:function(e,n,r){Promise.resolve().then(r.t.bind(r,2972,23)),Promise.resolve().then(r.t.bind(r,8862,23)),Promise.resolve().then(r.bind(r,4929)),Promise.resolve().then(r.bind(r,709)),Promise.resolve().then(r.bind(r,6066)),Promise.resolve().then(r.bind(r,4766)),Promise.resolve().then(r.bind(r,5312)),Promise.resolve().then(r.bind(r,5472)),Promise.resolve().then(r.bind(r,124)),Promise.resolve().then(r.bind(r,2477)),Promise.resolve().then(r.bind(r,2092)),Promise.resolve().then(r.bind(r,3283)),Promise.resolve().then(r.bind(r,6709)),Promise.resolve().then(r.bind(r,4330)),Promise.resolve().then(r.bind(r,6356)),Promise.resolve().then(r.bind(r,8829)),Promise.resolve().then(r.bind(r,8047)),Promise.resolve().then(r.bind(r,287)),Promise.resolve().then(r.bind(r,7547)),Promise.resolve().then(r.bind(r,7457)),Promise.resolve().then(r.bind(r,1e3)),Promise.resolve().then(r.bind(r,6749)),Promise.resolve().then(r.bind(r,3404)),Promise.resolve().then(r.bind(r,1009)),Promise.resolve().then(r.bind(r,2258)),Promise.resolve().then(r.bind(r,1162)),Promise.resolve().then(r.bind(r,911)),Promise.resolve().then(r.bind(r,5094)),Promise.resolve().then(r.bind(r,9316)),Promise.resolve().then(r.bind(r,7550)),Promise.resolve().then(r.bind(r,1177)),Promise.resolve().then(r.bind(r,7868)),Promise.resolve().then(r.bind(r,3580)),Promise.resolve().then(r.bind(r,404)),Promise.resolve().then(r.bind(r,5022)),Promise.resolve().then(r.bind(r,9678)),Promise.resolve().then(r.bind(r,5234)),Promise.resolve().then(r.bind(r,9978)),Promise.resolve().then(r.bind(r,3500)),Promise.resolve().then(r.bind(r,7451)),Promise.resolve().then(r.bind(r,8932)),Promise.resolve().then(r.bind(r,5156)),Promise.resolve().then(r.bind(r,6204)),Promise.resolve().then(r.bind(r,435)),Promise.resolve().then(r.bind(r,8663)),Promise.resolve().then(r.bind(r,4630)),Promise.resolve().then(r.bind(r,7330)),Promise.resolve().then(r.bind(r,5731)),Promise.resolve().then(r.bind(r,8780)),Promise.resolve().then(r.bind(r,1467)),Promise.resolve().then(r.bind(r,9511)),Promise.resolve().then(r.bind(r,5995)),Promise.resolve().then(r.bind(r,3088)),Promise.resolve().then(r.bind(r,18)),Promise.resolve().then(r.bind(r,6983)),Promise.resolve().then(r.bind(r,8651)),Promise.resolve().then(r.bind(r,6948)),Promise.resolve().then(r.bind(r,2060)),Promise.resolve().then(r.bind(r,6694)),Promise.resolve().then(r.bind(r,2644)),Promise.resolve().then(r.bind(r,9909)),Promise.resolve().then(r.bind(r,197)),Promise.resolve().then(r.bind(r,6995)),Promise.resolve().then(r.bind(r,3714)),Promise.resolve().then(r.bind(r,6537)),Promise.resolve().then(r.bind(r,2796)),Promise.resolve().then(r.bind(r,2468))},9376:function(e,n,r){"use strict";var s=r(5475);r.o(s,"usePathname")&&r.d(n,{usePathname:function(){return s.usePathname}}),r.o(s,"useSearchParams")&&r.d(n,{useSearchParams:function(){return s.useSearchParams}})},709:function(e,n,r){"use strict";var s=r(7437),i=r(9390),o=r(4007);r(2265),n.default=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.zx,{className:"s-flex-hide",href:window.location.origin+i.Cg.resume,prefixIcon:"ioCloudDownload",label:"Resume",download:"".concat(i.lB.name,".pdf"),size:"s",variant:"secondary"},"resume"),(0,s.jsx)(o.hU,{className:"s-flex-show",size:"l",href:i.Cg.resume,download:"".concat(i.lB.name,".pdf"),icon:"ioCloudDownload",variant:"secondary"},"resume-icon")]})},4929:function(e,n,r){"use strict";r.d(n,{default:function(){return h}});var s=r(7437),i=r(2265),o=r(4007),t=r(8862),l=r.n(t),d=r(9376),h=e=>{var n;let{structure:r,about:t}=e,h=(e,n)=>{let r=document.getElementById(e);if(r){let e=r.getBoundingClientRect().top+window.scrollY-n;window.scrollTo({top:e,behavior:"smooth"})}},a=(0,d.useSearchParams)().get("view");(0,i.useEffect)(()=>{a&&h(a,80)},[a]);let m=function(e){let[n,r]=(0,i.useState)(e.reduce((e,n)=>({...e,[n]:!1}),{})),s=(0,i.useMemo)(()=>e=>new IntersectionObserver(n=>{let[s]=n;return r(n=>({...n,[e]:s.isIntersecting}))},{threshold:.5}),[e]);return(0,i.useEffect)(()=>{let n=e.map(e=>({id:e,observer:s(e)}));return n.forEach(e=>e.observer.observe(document.getElementById(e.id))),()=>n.forEach(e=>e.observer.disconnect())},[]),n}(r.filter(e=>e.display).map(e=>e.title)),[v,b]=(0,i.useState)(null===(n=Object.entries(m).find(e=>{let[n,r]=e;return!!r}))||void 0===n?void 0:n[0]);return((0,i.useEffect)(()=>{b(e=>{var n,r;return null!==(r=null===(n=Object.entries(m).find(e=>{let[n,r]=e;return!!r}))||void 0===n?void 0:n[0])&&void 0!==r?r:e})},[m]),t.tableOfContent.display)?(0,s.jsx)(o.sg,{left:"0",style:{top:"50%",transform:"translateY(-50%)",whiteSpace:"nowrap"},position:"fixed",paddingLeft:"24",gap:"32",hide:"m",children:r.filter(e=>e.display).map((e,n)=>(0,s.jsxs)(o.sg,{gap:"12",children:[(0,s.jsxs)(o.kC,{cursor:"interactive",className:"".concat(l().hover," ").concat(v==e.title?l().active:""),gap:"8",vertical:"center",onClick:()=>h(e.title,80),children:[(0,s.jsx)(o.kC,{height:"1",minWidth:"16",background:"neutral-alpha-strong"}),(0,s.jsx)(o.xv,{children:e.title})]}),t.tableOfContent.subItems&&(0,s.jsx)(s.Fragment,{children:e.items.map((e,n)=>(0,s.jsxs)(o.kC,{hide:"l",style:{cursor:"pointer"},className:l().hover,gap:"12",paddingLeft:"24",vertical:"center",onClick:()=>h(e,80),children:[(0,s.jsx)(o.kC,{height:"1",minWidth:"8",background:"neutral-strong"}),(0,s.jsx)(o.xv,{children:e})]},n))})]},n))}):null}},8862:function(e){e.exports={hover:"about_hover__kkAOE",active:"about_active__j8r29",avatar:"about_avatar__EGXrs",textAlign:"about_textAlign__GW6yz",blockAlign:"about_blockAlign__Ur_yy"}}},function(e){e.O(0,[907,665,240,706,516,464,7,971,117,744],function(){return e(e.s=2090)}),_N_E=e.O()}]);