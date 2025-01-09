import { Text } from '@ignite-ui/react';
export default {
    title: 'Typography/Text',
    component: Text,
    args: {
        size: 'md',
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem ipsa, unde aliquid eveniet id deserunt repellat officia natus consequuntur cupiditate?',
    },
    argTypes: {
        size: {
            options: [
                'xxs',
                'xs',
                'sm',
                'md',
                'xl',
                'lg',
                '2xl',
                '4xl',
                '5xl',
                '6xl',
                '7xl',
                '8xl',
                '9xl',
            ],
            control: {
                type: 'inline-radio',
            },
        },
    },
};
export const Primary = {};
export const CustomTag = {
    args: {
        children: 'Strong text',
        as: 'strong',
    },
};
