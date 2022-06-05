import * as React from 'react'
import PropTypes from 'prop-types'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Link from 'next/link'

function WorkCard({ imageUrl, title, url }) {
	return (
		<Link href={url} passHref>
			<Paper
				sx={{
					position: 'relative',
					backgroundColor: 'grey.800',
					color: '#fff',
					m: 2,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					backgroundImage: `url(${imageUrl})`,
					minWidth: '468px',
					minHeight: '280px',
				}}
			>
				{/* Increase the priority of the hero background image */}

				<Box
					sx={{
						position: 'absolute',
						top: 0,
						bottom: 0,
						right: 0,
						left: 0,
						backgroundColor: 'rgba(0,0,0,.3)',
					}}
				/>
				<Grid container>
					<Grid item md={8}>
						<Box
							sx={{
								position: 'relative',
								p: { xs: 3, md: 6 },
								pr: { md: 0 },
							}}
						>
							<Typography
								component="h1"
								variant="h1"
								color="inherit"
								textAlign="justify"
								gutterBottom
							>
								{title}
							</Typography>
							<Typography
								variant="body2"
								textAlign="justify"
								color="inherit"
							></Typography>
						</Box>
					</Grid>
				</Grid>
			</Paper>
		</Link>
	)
}

WorkCard.propTypes = {
	description: PropTypes.string,
	image: PropTypes.string,
	imageText: PropTypes.string,
	linkText: PropTypes.string,
	title: PropTypes.string,
}

export default WorkCard
