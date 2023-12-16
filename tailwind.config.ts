import typographyPlugin from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors(utils) {
        return {
          primary: '#74D680',
        }
      },
    },
  },
  plugins: [typographyPlugin],
}
export default config
