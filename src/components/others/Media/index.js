import { styled } from '@mui/system'
import Box from '@mui/material/Box'

export const MediaDesktop = styled(Box)(({ theme }) => ({
	[theme.breakpoints.down('lg')]: {
		display: 'none',
	},
}))

export const MediaMobile = styled(Box)(({ theme }) => ({
	[theme.breakpoints.up('lg')]: {
		display: 'none',
	},
}))
