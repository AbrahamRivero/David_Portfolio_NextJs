import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const ImageSlider = ({ images, title, titleEsp }) => {
	const isEnglishSelected = useSelector(state => state.language.isEnglish)
	const responsive = {
		extraLargeDesktop: {
			breakpoint: { max: 4000, min: 1920 },
			items: 1,
		},
		largeDesktop: {
			breakpoint: { max: 1920, min: 1699 },
			items: 1,
		},
		desktop: {
			breakpoint: { max: 1699, min: 1024 },
			items: 1,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 1,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	}
	return (
		<Fragment>
			<section className="skill" id="skills">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="skill-bx wow zoomIn">
								<Typography variant="h2" marginBottom={1}>
									{isEnglishSelected ? title : titleEsp}
								</Typography>
								<Carousel
									responsive={responsive}
									infinite={true}
									pauseOnHover
									autoPlay
									autoPlaySpeed={10000}
									className="owl-carousel owl-theme skill-slider"
								>
									{images.map(image => (
										<Box className="item" key={image}>
											<img src={image} alt="Image" width="70vh" height="65vh" />
										</Box>
									))}
								</Carousel>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Fragment>
	)
}

export default ImageSlider
