(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[308,798],{3551:function(e,n,o){Promise.resolve().then(o.t.bind(o,2972,23)),Promise.resolve().then(o.bind(o,9295)),Promise.resolve().then(o.bind(o,1288)),Promise.resolve().then(o.bind(o,1214)),Promise.resolve().then(o.bind(o,9818)),Promise.resolve().then(o.bind(o,2847)),Promise.resolve().then(o.bind(o,1522)),Promise.resolve().then(o.bind(o,6066)),Promise.resolve().then(o.bind(o,4766)),Promise.resolve().then(o.bind(o,5312)),Promise.resolve().then(o.bind(o,5472)),Promise.resolve().then(o.bind(o,124)),Promise.resolve().then(o.bind(o,2477)),Promise.resolve().then(o.bind(o,2092)),Promise.resolve().then(o.bind(o,3283)),Promise.resolve().then(o.bind(o,6709)),Promise.resolve().then(o.bind(o,4330)),Promise.resolve().then(o.bind(o,6356)),Promise.resolve().then(o.bind(o,8829)),Promise.resolve().then(o.bind(o,8047)),Promise.resolve().then(o.bind(o,287)),Promise.resolve().then(o.bind(o,7547)),Promise.resolve().then(o.bind(o,7457)),Promise.resolve().then(o.bind(o,1e3)),Promise.resolve().then(o.bind(o,6749)),Promise.resolve().then(o.bind(o,3404)),Promise.resolve().then(o.bind(o,1009)),Promise.resolve().then(o.bind(o,2258)),Promise.resolve().then(o.bind(o,1162)),Promise.resolve().then(o.bind(o,911)),Promise.resolve().then(o.bind(o,5094)),Promise.resolve().then(o.bind(o,9316)),Promise.resolve().then(o.bind(o,7550)),Promise.resolve().then(o.bind(o,1177)),Promise.resolve().then(o.bind(o,7868)),Promise.resolve().then(o.bind(o,3580)),Promise.resolve().then(o.bind(o,404)),Promise.resolve().then(o.bind(o,5022)),Promise.resolve().then(o.bind(o,9678)),Promise.resolve().then(o.bind(o,5234)),Promise.resolve().then(o.bind(o,9978)),Promise.resolve().then(o.bind(o,3500)),Promise.resolve().then(o.bind(o,7451)),Promise.resolve().then(o.bind(o,8932)),Promise.resolve().then(o.bind(o,5156)),Promise.resolve().then(o.bind(o,6204)),Promise.resolve().then(o.bind(o,435)),Promise.resolve().then(o.bind(o,8663)),Promise.resolve().then(o.bind(o,4630)),Promise.resolve().then(o.bind(o,7330)),Promise.resolve().then(o.bind(o,5731)),Promise.resolve().then(o.bind(o,8780)),Promise.resolve().then(o.bind(o,1467)),Promise.resolve().then(o.bind(o,9511)),Promise.resolve().then(o.bind(o,5995)),Promise.resolve().then(o.bind(o,3088)),Promise.resolve().then(o.bind(o,18)),Promise.resolve().then(o.bind(o,6983)),Promise.resolve().then(o.bind(o,8651)),Promise.resolve().then(o.bind(o,6948)),Promise.resolve().then(o.bind(o,2060)),Promise.resolve().then(o.bind(o,6694)),Promise.resolve().then(o.bind(o,2644)),Promise.resolve().then(o.bind(o,9909)),Promise.resolve().then(o.bind(o,197)),Promise.resolve().then(o.bind(o,6995)),Promise.resolve().then(o.bind(o,3714)),Promise.resolve().then(o.bind(o,6537)),Promise.resolve().then(o.bind(o,2796)),Promise.resolve().then(o.bind(o,2468)),Promise.resolve().then(o.bind(o,9889))},1522:function(e,n,o){"use strict";o.d(n,{default:function(){return s}});var i=o(2265),r=o(9376);function s(){let e=(0,r.useRouter)();return(0,i.useEffect)(()=>{let e=window.location.hash;if(e){let n=e.replace("#",""),o=document.getElementById(n);o&&o.scrollIntoView({behavior:"smooth"})}},[e]),null}},9889:function(e,n,o){"use strict";o.d(n,{CodeBlock:function(){return b}});var i=o(7437),r=o(2265);o(5336);var s=o(5404),t=o.n(s),l=o(4007),d=o(1747),h=o.n(d);o(159),o(4473),o(6650),o(7257),o(3180);var m=o(6760),a=o.n(m);let b=e=>{let{highlight:n,codeInstances:o=[],codePreview:s,copyButton:d=!0,compact:m=!1,className:b,style:c,...v}=e,P=(0,r.useRef)(null),u=(0,r.useRef)(null),[p,f]=(0,r.useState)(0),[x,g]=(0,r.useState)(!1),{code:C,language:k,label:j}=o[p]||{code:"",language:"",label:"Select Code"},[_,y]=(0,r.useState)("clipboard");(0,r.useEffect)(()=>{P.current&&o.length>0&&h().highlightAll()},[C,o.length]);let w=()=>{o.length>0&&navigator.clipboard.writeText(C).then(()=>{y("check"),setTimeout(()=>{y("clipboard")},5e3)}).catch(e=>{console.error("Failed to copy code: ",e)})},z=e=>{let n=o.findIndex(n=>n.label===e);-1!==n&&f(n)};return(0,i.jsxs)(l.kC,{position:"relative",zIndex:0,background:"surface",radius:"l",overflow:"hidden",border:"neutral-medium",direction:"column",vertical:"center",fillWidth:!0,minHeight:3,className:b,style:c,...v,children:[(o.length>1||d&&!m)&&(0,i.jsxs)(l.kC,{borderBottom:"neutral-medium",zIndex:2,fillWidth:!0,horizontal:"space-between",children:[o.length>1?(0,i.jsx)(l.kC,{borderRight:"neutral-medium",children:(0,i.jsx)(l.Z_,{isOpen:x,onOpenChange:g,trigger:(0,i.jsx)(l.zx,{style:{border:"1px solid var(--static-transparent)",minWidth:"6rem"},radius:"none",size:"m",label:j,suffixIcon:"chevronDown",variant:"secondary"}),dropdown:(0,i.jsx)(l.kC,{direction:"column",gap:"2",padding:"4",minWidth:6,"data-surface":"filled",children:o.map((e,n)=>(0,i.jsx)(l.Wx,{value:e.label,label:e.label,selected:p===n,onClick:()=>{z(e.label),g(!1)}},n))})})}):(0,i.jsx)("div",{}),d&&!m&&(0,i.jsx)(l.kC,{borderLeft:"neutral-medium",children:(0,i.jsx)(l.hU,{style:{border:"none"},radius:"none",size:"l",tooltip:"Copy",tooltipPosition:"left",variant:"secondary",onClick:w,icon:_})})]}),s&&(0,i.jsx)(l.kC,{position:"relative",zIndex:1,fillHeight:!0,padding:"l",horizontal:"center",vertical:"center",children:Array.isArray(s)?s.map((e,n)=>(0,i.jsx)(r.Fragment,{children:e},n)):s}),o.length>0&&(0,i.jsxs)(l.kC,{borderTop:!m&&s?"neutral-medium":void 0,fillWidth:!0,position:"relative",children:[m&&d&&(0,i.jsx)(l.kC,{className:t().compactCopy,overflow:"hidden",zIndex:1,right:"8",position:"absolute",children:(0,i.jsx)(l.hU,{"aria-label":"Copy code",onClick:w,icon:_,size:"m",variant:"secondary"})}),(0,i.jsx)(l.kC,{overflowX:"auto",children:(0,i.jsx)("pre",{"data-line":n,ref:u,className:a()(t().pre,"language-".concat(k)),tabIndex:-1,children:(0,i.jsx)("code",{ref:P,className:a()(t().code,"language-".concat(k)),children:C})})})]})]})};b.displayName="CodeBlock"},5336:function(){},5404:function(e){e.exports={pre:"CodeBlock_pre__GI0hv",code:"CodeBlock_code__q_Rhr",compactCopy:"CodeBlock_compactCopy__ru9DK"}}},function(e){e.O(0,[271,546,665,240,706,516,464,835,7,102,971,117,744],function(){return e(e.s=3551)}),_N_E=e.O()}]);