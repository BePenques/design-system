import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Text, TextArea } from '@bepenques-designsys/react';
export default {
    title: 'Form/TextArea',
    component: TextArea,
    decorators: [
        (Story) => {
            return (_jsxs(Box, { as: "label", css: { display: 'flex', flexDirection: 'column', gap: '$2' }, children: [_jsx(Text, { size: "sm", children: "Observations:" }), Story()] }));
        },
    ],
};
export const Primary = {
    args: {
        placeholder: 'Add any  observations...',
    },
};
export const Disabled = {
    args: {
        disabled: true,
    },
};
