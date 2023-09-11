import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'app-white':'#ffffff',
        'app-black':'#10171d',
        'app-green':'#00d65b',
        'app-yellow':'#fbc65c',
        'app-yellow-dark':'#e1ac51',
        'app-blue':'#1b2734',
        'app-gray-dark':'#2a424e'
      }
    },
  },
  plugins: [],
}
export default config
