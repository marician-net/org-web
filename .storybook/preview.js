
import React from "react";
import { withThemesProvider } from "themeprovider-storybook";
import light from "../src/toolkitUI/theme/light";
import dark from "../src/toolkitUI/theme/dark";
import ResetCSS from "../src/toolkitUI/ResetCSS";
import { ModalProvider } from "../src/toolkitUI/widgets/Modal";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";
import { StaticStore, store, intState } from './staticstore';
import { Provider } from 'react-redux'
import addons from '@storybook/addons'
import withRedux from 'addon-redux/withRedux'
import { HelmetProvider } from 'react-helmet-async'
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from 'utils/web3React'

const withReduxSettings = {
  Provider,
  store,
  state: intState,
}

const globalDecorator = (StoryFn) => (
      <HelmetProvider>
        <MemoryRouter initialEntries={['/']}>
          <ModalProvider>
            <ResetCSS />
            <StoryFn />
          </ModalProvider>
        </MemoryRouter>
      </HelmetProvider>
);

const withReduxDecorator = withRedux(addons)(withReduxSettings)

addDecorator(withReduxDecorator);
// addDecorator(story => <StaticStore>{story()}</StaticStore>);

// export const parameters = {
//   actions: { argTypesRegex: '^on[A-Z].*' },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }

const themes = [
  {
    name: 'Light',
    backgroundColor: light.colors.background,
    ...light,
  },
  {
    name: 'Dark',
    backgroundColor: dark.colors.background,
    ...dark,
  },
]

export const decorators = [globalDecorator, withThemesProvider(themes)];

// export const decorators = [
//   (Story) => (
//     <StaticStore>
//       <ThemeContextProvider>
//         <Story />
//       </ThemeContextProvider>
//     </StaticStore>
//   ),
// ]
