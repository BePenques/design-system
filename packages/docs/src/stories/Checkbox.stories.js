import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Text, CheckBox } from '@bepenques-designsys/react';
export default {
    title: 'Form/Checkbox',
    component: CheckBox,
    decorators: [
        (Story) => {
            return (_jsxs(Box, { as: "label", css: { display: 'flex', flexDirection: 'row', gap: '$2' }, children: [Story(), _jsx(Text, { size: "sm", children: "Accept terms and privacy" })] }));
        },
    ],
};
export const Primary = {};
