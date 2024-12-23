import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ColorsGrid } from '../../../components/ColorsGrid';
import { getContrast } from 'polished';
export default {
    title: 'Tokens/Colors',
    component: ColorsGrid,
};
export const Colors = () => {
    const backgroundColor = window.getComputedStyle(document.body).backgroundColor;
    const textColor = getContrast(backgroundColor, '#FFF') < 3.5 ? '#000' : '#FFF';
    return (_jsxs(_Fragment, { children: [_jsxs("div", { style: { color: textColor }, children: [_jsx("h1", { children: "Colors" }), _jsx("p", { children: "Essas s\u00E3o as cores utilizadas no Ignite UI" })] }), _jsx(ColorsGrid, {})] }));
};
