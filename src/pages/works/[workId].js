import { Fragment } from 'react'
import { works } from '../../constants/data-works'
import { useSelector } from 'react-redux'
import { theme } from '../../theme'
import Page from '../../components/others/Page/Page'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import styles from '../../../styles/Work.module.scss'
import Carousel from '../../components/others/Carousel/Carousel'

const PortfolioWorkPage = ({ selectedWork }) => {
	const isEnglishSelected = useSelector(state => state.language.isEnglish)

	return (
		<Page pageTitle="Selected Work Page" backgroundColorPage="#4A4E65">
			<Fragment>
				<Box
					display="flex"
					flexDirection="column"
					alignItems="center"
					marginTop={20}
					marginBottom={15}
				>
					<Carousel images={selectedWork.imagesUrls} />
					<Box display="flex" flexDirection="row" width="70%">
						<Box
							height="auto"
							width="40%"
							marginTop="50px"
							marginRight="50px"
							bgcolor="#00000017"
							padding={1.5}
							color={theme.palette.primary.contrastText}
						>
							<Typography variant="h2">
								{isEnglishSelected ? 'Title:' : 'Título:'}
							</Typography>
							<Typography variant="h4" marginTop={2} marginBottom={4}>
								{isEnglishSelected
									? selectedWork?.title
									: selectedWork?.titleEsp}
							</Typography>
							<Typography variant="h3">
								{isEnglishSelected ? 'Tag:' : 'Tipo de Proyecto:'}
							</Typography>
							<Typography
								variant="h4"
								marginTop={2}
								marginBottom={4}
								fontSize="1em"
							>
								{isEnglishSelected ? selectedWork?.tag : selectedWork?.tagEsp}
							</Typography>
							<Typography variant="h4">
								{isEnglishSelected ? 'Tools:' : 'Herramientas:'}
							</Typography>
							<Box display="flex" flexWrap="wrap" marginTop={1}>
								{selectedWork?.tools.map((tool, index) => {
									return (
										<Fragment key={index}>
											<div className={`${styles.app__work_tag} app__flex`}>
												<Typography
													variant="body2"
													bgcolor="#fff"
													borderRadius="13px"
													padding="4px"
													margin="5px"
													fontWeight={700}
													color={theme.palette.black}
												>
													{tool}
												</Typography>
											</div>
										</Fragment>
									)
								})}
							</Box>
						</Box>
						<Box
							width="60%"
							height="auto"
							marginTop="50px"
							marginLeft="50px"
							bgcolor="#00000017"
							padding={5}
							color={theme.palette.primary.contrastText}
						>
							<Typography variant="h3">
								{isEnglishSelected ? 'Description:' : 'Descripción:'}
							</Typography>
							<Typography variant="body1" marginTop={2}>
								{isEnglishSelected
									? selectedWork?.description
									: selectedWork?.descriptionEsp}
							</Typography>
						</Box>
					</Box>
				</Box>
			</Fragment>
		</Page>
	)
}

export default PortfolioWorkPage

export async function getStaticProps(context) {
	const workId = context.params.workId
	return {
		props: {
			selectedWork: works.find(work => work.id === workId),
		}, // will be passed to the page component as props
	}
}

export async function getStaticPaths() {
	return {
		paths: works.map(work => ({ params: { workId: work.id.toString() } })),
		fallback: true, // false or 'blocking'
	}
}
