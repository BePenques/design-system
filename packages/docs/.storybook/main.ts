import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname } from "path";

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
    "@storybook/addon-docs", // Add docs addon explicitly
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  viteFinal: (config)=>{

    // config.build = config.build || {};
    // config.build.outDir = 'storybook-static';

    // if(process.env.STORYBOOK_DEPLOY === 'true'){
      config.base = '/design-system/'
    // }
    return config;
  }
};


export default config;
