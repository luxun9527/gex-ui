// @ts-check - enable TS check for js file
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      minWidth: {
        p45: '45%',
        vw30: '30vw',
      },
      minHeight: {
        p45: '45%',
        vw30: '20vw',
        p20: '20%',
        p30: '30%',
        p80: '80%',
      }
    },
  },
})