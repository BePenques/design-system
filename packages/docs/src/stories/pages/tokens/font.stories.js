import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { TokensGrid } from '../../../components/TokensGrid';
import { fonts } from '@ignite-ui/tokens';
import { getContrast } from 'polished';
export default {
    title: 'Tokens/FontFamilies',
    component: TokensGrid,
};
export const FontFamilies = () => {
    const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
    const textColor = getContrast(backgroundColor, '#FFF') < 3.5 ? '#000' : '#FFF';
    return (_jsxs(_Fragment, { children: [_jsx("div", { style: { color: textColor }, children: _jsx("h1", { children: "Font Families" }) }), _jsx(TokensGrid, { tokens: fonts })] }));
};
