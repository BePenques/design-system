import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { colors } from '@bepenques-designsys/tokens';
import { getContrast } from 'polished';
export function ColorsGrid() {
    return Object.entries(colors).map(([key, color]) => {
        return (_jsx("div", { style: { backgroundColor: color, padding: '2rem' }, children: _jsxs("div", { style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'monorepo',
                    color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#fff',
                }, children: [_jsxs("strong", { children: ["$", key] }), _jsx("span", { children: color })] }) }, key));
    });
}
