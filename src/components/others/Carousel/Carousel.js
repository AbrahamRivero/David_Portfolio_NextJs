import { Box, Radio, Typography } from '@mui/material'
import { Fragment } from 'react'

import classes from '../../../../styles/Carousel.module.scss'

const Carousel = ({ images }) => {
	return (
		<Fragment>
			<Box className={classes.slider}>
				{images.map((image, index) => {
					return (
						<Fragment key={index}>
							<input type="radio" name="slider" defaultChecked />
							<Box className={classes.imgBx}>
								<img src={image} />
							</Box>
						</Fragment>
					)
				})}
			</Box>
		</Fragment>
	)
}

export default Carousel
