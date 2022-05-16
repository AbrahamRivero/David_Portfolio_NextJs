const components = {
	MuiButton: {
		styleOverrides: {
			root: {
				textTransform: 'capitalize',
			},
		},
		variants: [
			{
				props: { variant: 'gradient' },
				style: {
					textTransform: 'uppercase',
					backgroundImage:
						'linear-gradient(to right, #0ebedf 0%, #0ebedf 15%, #0e55df 100%)',
					color: 'white',
					textTransform: 'capitalize',
					['.MuiLoadingButton-loadingIndicator']: {
						color: 'white',
						['span.MuiCircularProgress-root']: {
							width: '20px',
						},
					},
				},
			},
		],
	},
	MuiDialog: {
		styleOverrides: {
			root: {
				['& .MuiDialog-paper:not(.MuiDialog-paperFullScreen)']: {
					margin: '10px',
					width: 'calc(100% - 10px)',
				},
			},
		},
	},
}

export default components
