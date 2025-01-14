import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { TokensGrid } from '../../../components/TokensGrid';
import { space } from '@bepenques-designsys/tokens';
import { getContrast } from 'polished';
export default {
    title: 'Tokens/Spaces',
    component: TokensGrid,
};
export const Spaces = () => {
    const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
    const textColor = getContrast(backgroundColor, '#FFF') < 3.5 ? '#000' : '#FFF';
    return (_jsxs(_Fragment, { children: [_jsx("div", { style: { color: textColor }, children: _jsx("h1", { children: "Space" }) }), _jsx(TokensGrid, { tokens: space, hasRemValue: true })] }));
};
