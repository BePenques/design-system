import{j as o}from"./jsx-runtime-BjgbQsUx.js";import{T as s}from"./TokensGrid-DIHNdXTb.js";import{g as i,a as c}from"./polished.esm-DsatP9Gy.js";import"./index-D2MAbzvX.js";const F={title:"Tokens/FontWeights",component:s},t=()=>{const a=window.getComputedStyle(document.body).backgroundColor,d=i(a,"#FFF")<3.5?"#000":"#FFF";return o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{color:d},children:o.jsx("h1",{children:"Font Weight"})}),o.jsx(s,{tokens:c,hasRemValue:!0})]})};t.__docgenInfo={description:"",methods:[],displayName:"FontWeights"};var e,r,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
  const textColor = getContrast(backgroundColor, '#FFF') < 3.5 ? '#000' : '#FFF';
  return <>\r
      <div style={{
      color: textColor
    }}>\r
        <h1>Font Weight</h1>\r
      </div>\r
      <TokensGrid tokens={fontWeights} hasRemValue />\r
    </>;
}`,...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const h=["FontWeights"];export{t as FontWeights,h as __namedExportsOrder,F as default};
