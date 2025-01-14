import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { TokensGrid } from '../../../components/TokensGrid';
import { fontWeights } from '@bepenques-designsys/tokens';
import { getContrast } from 'polished';
export default {
    title: 'Tokens/FontWeights',
    component: TokensGrid,
};
export const FontWeights = () => {
    const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
    const textColor = getContrast(backgroundColor, '#FFF') < 3.5 ? '#000' : '#FFF';
    return (_jsxs(_Fragment, { children: [_jsx("div", { style: { color: textColor }, children: _jsx("h1", { children: "Font Weight" }) }), _jsx(TokensGrid, { tokens: fontWeights, hasRemValue: true })] }));
};
