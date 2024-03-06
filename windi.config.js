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
        p50: '50%',
        p70: '70%',
        p60: '60%',
        p80: '80%',
        r54: '54rem',
      }
    },
  },
})