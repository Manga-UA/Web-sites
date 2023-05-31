/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"main-dark":'#454545',
				"main-light":'#FAF8F1',
				"font":'#FFE6C7',
				"button":'#2E4F4F',
				"stroke-dark":'FFFFFF'
			},
			fontSize: {
				'logo-bg': ['42px', {
					lineHeight: '46px',
					fontWeight: '400',
				}],
				'logo-md': ['34px', {
					lineHeight: '42px',
					fontWeight: '400',
				}],
				'logo-sm': ['24px', {
					lineHeight: '30px',
					fontWeight: '400',
				}],
				'text-lg': ['24px', {
					lineHeight: '30px',
					fontWeight: '400',
				}],
				'text-bg': ['16px', {
					lineHeight: '19px',
					fontWeight: '400',
				}],
				'text-md': ['15px', {
					lineHeight: '18px',
					fontWeight: '400',
				}],
				'text-sm': ['14px', {
					lineHeight: '17px',
					fontWeight: '400',
				}],
				'text-xsm': ['12px', {
					lineHeight: '15px',
					fontWeight: '400',
				}],
				'title-bg': ['40px', {
					lineHeight: '60px',
					fontWeight: '400',
				}],
				'title-md': ['34px', {
					lineHeight: '42px',
					fontWeight: '400',
				}],
				'title-xbg': ['60px', {
					lineHeight: '76px',
					fontWeight: '400',
				}],
				'subtitle-bg': ['30px', {
					lineHeight: '37px',
					fontWeight: '400',
				}],
				'subtitle-md': ['26px', {
					lineHeight: '31px',
					fontWeight: '400',
				}],
				'subtitle-sm': ['24px', {
					lineHeight: '30px',
					fontWeight: '400',
				}],
				'navbar': ['26px', {
					lineHeight: '31px',
					fontWeight: '400',
				}],
			}
		},
	},
	plugins: [],
}

