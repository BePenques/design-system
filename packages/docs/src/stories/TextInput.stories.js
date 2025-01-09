import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Text, TextInput } from '@ignite-ui/react';
export default {
    title: 'Form/Text Input',
    component: TextInput,
    decorators: [
        (Story) => {
            return (_jsxs(Box, { as: "label", css: { display: 'flex', flexDirection: 'column', gap: '$2' }, children: [_jsx(Text, { size: "sm", children: "Nickname:" }), Story()] }));
        },
    ],
};
export const Primary = {
    args: {
        placeholder: 'Type your nickname',
    },
};
export const Disabled = {
    args: {
        disabled: true,
    },
};
export const WithPrefix = {
    args: {
        prefix: 'cal.com/',
    },
};
