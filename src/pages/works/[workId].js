import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { works } from '../../constants/data-works'
import { useSelector } from 'react-redux'
import { theme } from '../../theme'
import Page from '../../components/others/Page/Page'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import styles from '../../../styles/Work.module.scss'

const PortfolioWorkPage = () => {
	const router = useRouter()
	const isEnglishSelected = useSelector(state => state.language.isEnglish)
	const selectedWork = works.find(work => work.id === router.query.workId)
	return (
		<Page pageTitle="Selected Work Page" backgroundColorPage="#4A4E65">
			<Fragment>
				<Box
					display="flex"
					flexDirection="column"
					alignItems="center"
					marginTop={15}
				>
					<Box height="400px" width="70%" bgcolor="#2e3171"></Box>
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
							<Typography variant="body1" marginBottom={4}>
								{isEnglishSelected
									? selectedWork?.title
									: selectedWork?.titleEsp}
							</Typography>
							<Typography variant="h4">
								{isEnglishSelected ? 'Tag:' : 'Tipo de Proyecto:'}
							</Typography>
							<Typography variant="body1" marginBottom={4}>
								{isEnglishSelected ? selectedWork?.tag : selectedWork?.tag}
							</Typography>
							<Typography variant="h4">
								{isEnglishSelected ? 'Tools:' : 'Herramientas:'}
							</Typography>
							<Box display="flex" flexWrap="wrap">
								{selectedWork?.tools.map((tool, index) => {
									return (
										<Fragment key={index}>
											<div className={`${styles.app__work_tag} app__flex`}>
												<Typography
													variant="body2"
													bgcolor="#fff"
													borderRadius="13px"
													padding="3px"
													margin="5px"
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
							<Typography variant="h3">Description:</Typography>
							<Typography variant="body1">
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
