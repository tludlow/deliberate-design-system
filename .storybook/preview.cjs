import '../src/styles/index.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: 'rgb(249 250 251)',
      },
      {
        name: 'dark',
        value: 'background-color: rgb(30 41 59)',
      },
    ],
  },
}
