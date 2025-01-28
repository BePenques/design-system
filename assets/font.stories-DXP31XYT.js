import{j as o}from"./jsx-runtime-z8MfsBtr.js";import{T as s}from"./TokensGrid-QPwoKpp8.js";import{g as d,b as c}from"./polished.esm-CYzU22sc.js";import"./index-C9rmetsa.js";const u={title:"Tokens/FontFamilies",component:s},t=()=>{const i=window.getComputedStyle(document.body).backgroundColor,a=d(i,"#FFF")<3.5?"#000":"#FFF";return o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{color:a},children:o.jsx("h1",{children:"Font Families"})}),o.jsx(s,{tokens:c})]})};t.__docgenInfo={description:"",methods:[],displayName:"FontFamilies"};var r,n,e;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
  const textColor = getContrast(backgroundColor, '#FFF') < 3.5 ? '#000' : '#FFF';
  return <>\r
      <div style={{
      color: textColor
    }}>\r
        <h1>Font Families</h1>\r
      </div>\r
      <TokensGrid tokens={fonts} />\r
    </>;
}`,...(e=(n=t.parameters)==null?void 0:n.docs)==null?void 0:e.source}}};const g=["FontFamilies"];export{t as FontFamilies,g as __namedExportsOrder,u as default};
