/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			screens: {
				sm: '480px',
				md: '768px',
				lg: '1028px',
				xl: '1200px'
			},
			colors: {
				"main-dark":'#454545',
				"main-light":'#FAF8F1',
				"font-dark":'#FFE6C7',
				"font-light":'#27374D',
				"button":'#2E4F4F',
				"stroke-dark":'FFFFFF',
				// FOR THEME BUTTON
				"xl-elipse-light":'#FF9A62',
				"sm-elipse-light":'#FFC8A9',
				"xl-elipse-dark":'#FFFFFF',
				"sm-elipse-dark":'#2E4F4F',
				"stroke-light-theme":'#868686',
				"stroke-dark-theme":'#161535',
				"dark-theme-btn":"#2E4F4F",
				"dark-transparency":'rgba(69, 69, 69, 0.1)',
			},
			fontSize: {
				'logo-bg': ['2.625rem', {
					lineHeight: '46px',
					fontWeight: '400',
				}],
				'logo-md': ['2.125rem', {
					lineHeight: '42px',
					fontWeight: '400',
				}],
				'logo-sm': ['1.5rem', {
					lineHeight: '30px',
					fontWeight: '400',
				}],
				'text-lg': ['1.5rem', {
					lineHeight: '30px',
					fontWeight: '400',
				}],
				'text-bg': ['1rem', {
					lineHeight: '19px',
					fontWeight: '400',
				}],
				'text-md': ['0.9375rem', {
					lineHeight: '18px',
					fontWeight: '400',
				}],
				'text-sm': ['0.875rem', {
					lineHeight: '17px',
					fontWeight: '400',
				}],
				'text-xsm': ['0.75rem', {
					lineHeight: '15px',
					fontWeight: '400',
				}],
				'title-bg': ['40px', {
					lineHeight: '60px',
					fontWeight: '400',
				}],
				'title-md': ['2.125rem', {
					lineHeight: '42px',
					fontWeight: '400',
				}],
				'title-xbg': ['3.75rem', {
					lineHeight: '76px',
					fontWeight: '400',
				}],
				'subtitle-bg': ['1.875rem', {
					lineHeight: '37px',
					fontWeight: '400',
				}],
				'subtitle-md': ['1.625rem', {
					lineHeight: '31px',
					fontWeight: '400',
				}],
				'subtitle-sm': ['1.5rem', {
					lineHeight: '30px',
					fontWeight: '400',
				}],
				'navbar': ['1.625rem', {
					lineHeight: '31px',
					fontWeight: '400',
				}],
			},
			boxShadow: {
				'images': '590px 0px 5px 0px #00000080 inset',
			},
			animation: {
                bounce200: 'bounce 1s infinite 200ms',
                bounce400: 'bounce 1s infinite 400ms',
            },
		},
	},
	plugins: [],
}

