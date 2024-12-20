import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname } from "path";
import { addons } from '@storybook/addons';

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.stories.tsx", // Update path to match your stories location
    "../src/stories/pages/**/*.stories.tsx"    // Add MDX stories path
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-docs" // Add docs addon explicitly
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};


export default config;
