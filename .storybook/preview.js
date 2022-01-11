export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// workaround https://stackoverflow.com/questions/67409774/cant-properly-set-up-next-config-storybook-to-get-images-from-url
import * as nextImage from "next/image";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});
