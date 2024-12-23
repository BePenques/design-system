import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { TokensGrid } from '../../../components/TokensGrid';
import { fontSizes } from '@ignite-ui/tokens';
import { getContrast } from 'polished';
export default {
    title: 'Tokens/FontSizes',
    component: TokensGrid,
};
export const FontSizes = () => {
    const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
    const textColor = getContrast(backgroundColor, '#FFF') < 3.5 ? '#000' : '#FFF';
    return (_jsxs(_Fragment, { children: [_jsx("div", { style: { color: textColor }, children: _jsx("h1", { children: "Font size" }) }), _jsx(TokensGrid, { tokens: fontSizes, hasRemValue: true })] }));
};
