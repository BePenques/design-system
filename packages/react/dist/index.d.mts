import * as _stitches_react_types_styled_component from '@stitches/react/types/styled-component';
import * as _stitches_react_types_css_util from '@stitches/react/types/css-util';
import { ComponentProps, ElementType } from 'react';

declare const Box: _stitches_react_types_styled_component.StyledComponent<"div", {}, {}, _stitches_react_types_css_util.CSS<{}, {}, {}, {}>>;
interface BoxProps extends ComponentProps<typeof Box> {
    as?: ElementType;
}

declare const Text: _stitches_react_types_styled_component.StyledComponent<"p", {}, {}, _stitches_react_types_css_util.CSS<{}, {}, {}, {}>>;
interface TextProps extends ComponentProps<typeof Text> {
    as?: ElementType;
}

export { Box, type BoxProps, Text, type TextProps };
