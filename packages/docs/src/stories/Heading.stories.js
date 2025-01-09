import { Heading } from '@ignite-ui/react';
export default {
    title: 'Typography/Heading',
    component: Heading,
    args: {
        children: 'Custom Title',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
            control: {
                type: 'inline-radio',
            },
        },
    },
};
export const Primary = {};
export const CustomTag = {
    args: {
        children: 'H1 Heading',
        as: 'h1',
    },
    parameters: {
        docs: {
            description: {
                story: 'Por padrão o heading sempre será um `h2`, mas é possivel alterar isso usando a propriedade `as`',
            },
        },
    },
};
