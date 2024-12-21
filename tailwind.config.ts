import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            screens: {
                mo: { max: '600px' },
                tablet: { max: '1024px' }
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                main100: '#FED7B3',
                main200: '#FEBC81',
                main400: '#FC861C',
                main600: '#F55A00',
                main800: '#C93E03',
                sub200: '#98C9E1',
                sub600: '#3997C6',
                sub800: '#2E799E'
            }
        }
    },
    plugins: []
};
export default config;
