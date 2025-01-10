import{j as o}from"./jsx-runtime-BjgbQsUx.js";import{T as s}from"./TokensGrid-DIHNdXTb.js";import{g as a,f as c}from"./polished.esm-DsatP9Gy.js";import"./index-D2MAbzvX.js";const p={title:"Tokens/FontSizes",component:s},e=()=>{const d=window.getComputedStyle(document.body).backgroundColor,i=a(d,"#FFF")<3.5?"#000":"#FFF";return o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{color:i},children:o.jsx("h1",{children:"Font size"})}),o.jsx(s,{tokens:c,hasRemValue:!0})]})};e.__docgenInfo={description:"",methods:[],displayName:"FontSizes"};var t,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
  const textColor = getContrast(backgroundColor, '#FFF') < 3.5 ? '#000' : '#FFF';
  return <>\r
      <div style={{
      color: textColor
    }}>\r
        <h1>Font size</h1>\r
      </div>\r
      <TokensGrid tokens={fontSizes} hasRemValue />\r
    </>;
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const g=["FontSizes"];export{e as FontSizes,g as __namedExportsOrder,p as default};
