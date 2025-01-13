import{j as o}from"./jsx-runtime-z8MfsBtr.js";import{T as s}from"./TokensGrid-QPwoKpp8.js";import{g as c,l as a}from"./polished.esm-CYzU22sc.js";import"./index-C9rmetsa.js";const p={title:"Tokens/LineHeight",component:s},e=()=>{const i=window.getComputedStyle(document.body).backgroundColor,d=c(i,"#FFF")<3.5?"#000":"#FFF";return o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{color:d},children:o.jsx("h1",{children:"Line Height"})}),o.jsx(s,{tokens:a})]})};e.__docgenInfo={description:"",methods:[],displayName:"LineHeight"};var t,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
  const textColor = getContrast(backgroundColor, '#FFF') < 3.5 ? '#000' : '#FFF';
  return <>\r
      <div style={{
      color: textColor
    }}>\r
        <h1>Line Height</h1>\r
      </div>\r
      <TokensGrid tokens={lineHeights} />\r
    </>;
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const u=["LineHeight"];export{e as LineHeight,u as __namedExportsOrder,p as default};
