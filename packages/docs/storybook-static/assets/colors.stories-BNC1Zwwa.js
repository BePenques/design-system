import{j as o}from"./jsx-runtime-z8MfsBtr.js";import{c as a,g as l}from"./polished.esm-CYzU22sc.js";import"./index-C9rmetsa.js";function c(){return Object.entries(a).map(([e,r])=>o.jsx("div",{style:{backgroundColor:r,padding:"2rem"},children:o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontFamily:"monorepo",color:l(r,"#FFF")<3.5?"#000":"#fff"},children:[o.jsxs("strong",{children:["$",e]}),o.jsx("span",{children:r})]})},e))}const u={title:"Tokens/Colors",component:c},s=()=>{const e=window.getComputedStyle(document.body).backgroundColor,r=l(e,"#FFF")<3.5?"#000":"#FFF";return o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{color:r},children:[o.jsx("h1",{children:"Colors"}),o.jsx("p",{children:"Essas são as cores utilizadas no Ignite UI"})]}),o.jsx(c,{})]})};s.__docgenInfo={description:"",methods:[],displayName:"Colors"};var n,t,d;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
  const textColor = getContrast(backgroundColor, '#FFF') < 3.5 ? '#000' : '#FFF';
  return <>\r
      <div style={{
      color: textColor
    }}>\r
        <h1>Colors</h1>\r
        <p>Essas são as cores utilizadas no Ignite UI</p>\r
      </div>\r
      <ColorsGrid />\r
    </>;
}`,...(d=(t=s.parameters)==null?void 0:t.docs)==null?void 0:d.source}}};const C=["Colors"];export{s as Colors,C as __namedExportsOrder,u as default};
