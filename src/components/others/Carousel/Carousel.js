import { Fragment } from 'react'
import Box from '@mui/material/Box'
import classes from '../../../../styles/Carousel.module.scss'
import Image from 'next/image'

const Carousel = ({ images }) => {
	return (
		<Fragment>
			<Box className={classes.slider}>
				{images?.map((image, index) => {
					return (
						<Fragment key={index}>
							<input type="radio" name="slider" defaultChecked />
							<Box className={classes.imgBx}>
								<Image src={image} />
							</Box>
						</Fragment>
					)
				})}
			</Box>
		</Fragment>
	)
}

export default Carousel
