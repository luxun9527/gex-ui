export default {
  theme: {
    textColor: {
      primary: '#3490dc',
      secondary: '#ffed4a',
      'light-ok': '#ffffff',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#3490dc',
      secondary: '#ffed4a',
      'dark-ok': '#121212',
    }),
  },
}