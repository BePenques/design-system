import { Avatar } from '@ignite-ui/react';
export default {
    title: 'Data display/Avatar',
    component: Avatar,
    args: {
        src: 'http://github.com/BePenques.png',
        alt: 'Betiza Penques',
    },
    argTypes: {
        src: {
            control: {
                type: 'text',
            },
        },
    },
};
export const Primary = {};
export const WithFallback = {
    args: {
        src: undefined,
    },
};
