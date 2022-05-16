
const mobileMediaQuery = `@media (max-width:900px)` // Careful, this needs to match md breakpoint

const typography = {
	fontFamily: ['"Public Sans"', 'sans-serif'].join(','),
	h1: {
		fontSize: '2.125rem',
		[mobileMediaQuery]: {
			fontSize: '1.65rem',
		},
	},
	h2: {
		fontSize: '1.5rem',
		[mobileMediaQuery]: {
			fontSize: '1.275rem',
		},
	},
	h3: {
		fontSize: '1.2rem',
		[mobileMediaQuery]: {
			fontSize: '1rem',
		},
	},
	h4: undefined,
	h5: undefined,
	h6: undefined,
}

export default typography
