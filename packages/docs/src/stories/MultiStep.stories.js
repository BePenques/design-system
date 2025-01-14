import { jsx as _jsx } from "react/jsx-runtime";
import { Box, MultiStep } from '@bepenques-designsys/react';
export default {
    title: 'Form/Multi Step',
    component: MultiStep,
    args: {
        size: 4,
        currentStep: 1,
    },
    decorators: [
        (Story) => {
            return (_jsx(Box, { as: "label", css: { display: 'flex', flexDirection: 'column', gap: '$2' }, children: Story() }));
        },
    ],
};
export const Primary = {};
export const Full = {
    args: {
        currentStep: 4,
    },
};
