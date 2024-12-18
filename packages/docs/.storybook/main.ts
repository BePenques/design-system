// import type { StorybookConfig } from "@storybook/react-vite";

// import { join, dirname } from "path";

// /**
//  * This function is used to resolve the absolute path of a package.
//  * It is needed in projects that use Yarn PnP or are set up within a monorepo.
//  */
// function getAbsolutePath(value: string): any {
//   return dirname(require.resolve(join(value, "package.json")));
// }
// const config: StorybookConfig = {
//   stories: ["../src/stories/pages/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

//   addons: [
//     getAbsolutePath("@storybook/addon-onboarding"),
//     getAbsolutePath("@storybook/addon-essentials"),
//     getAbsolutePath("@chromatic-com/storybook"),
//     getAbsolutePath("@storybook/addon-interactions"),
//     getAbsolutePath("@storybook/addon-mdx-gfm")
//   ],

//   framework: {
//     name: getAbsolutePath("@storybook/react-vite"),
//     options: {},
//   },

//   docs: {
//     autodocs: true
//   },

//   typescript: {
//     reactDocgen: "react-docgen-typescript"
//   }
// };
// export default config;

import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname } from "path";

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.stories.tsx", // Update path to match your stories location
    "../src/pages/**/*.stories.mdx"    // Add MDX stories path
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
