import { Fragment, useState } from 'react'
import { works } from '../../constants/data-works'
import { useSelector } from 'react-redux'
import { theme } from '../../theme'
import Page from '../../components/others/Page/Page'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import styled from '@mui/system/styled'
import ImageSlider from '../../components/others/Slider/ImageSlider'

const PortfolioWorkBooksPage = ({ selectedWork }) => {
	const isEnglishSelected = useSelector(state => state.language.isEnglish)
	const [fetchedWork, setFetchedWorkWork] = useState(selectedWork)

	return (
		<Page pageTitle="Selected Book Page" backgroundColorPage="#4A4E65">
			<Fragment>
				<Box
					display="flex"
					flexDirection="column"
					alignItems="center"
					marginTop={15}
					marginBottom={5}
				>
					<ImageSlider
						images={fetchedWork?.imagesUrls}
						title={fetchedWork?.title}
						titleEsp={fetchedWork?.titleEsp}
					/>
					<Box display="flex" flexDirection="row" width="70%">
						<Box
							height="auto"
							width="40%"
							marginTop="50px"
							marginRight="50px"
							bgcolor="#00000028"
							borderRadius="13px"
							padding={1.5}
							color={theme.palette.primary.contrastText}
						>
							<Box marginBottom={1.5}>
								<Typography variant="h2" marginBottom={0.5}>
									{isEnglishSelected ? 'Tag:' : 'Tipo de Proyecto:'}
								</Typography>
								<Typography variant="h3" fontSize="1em">
									{isEnglishSelected ? fetchedWork?.tag : fetchedWork?.tagEsp}
								</Typography>
							</Box>

							<Typography variant="h4">
								{isEnglishSelected ? 'Tools:' : 'Herramientas:'}
							</Typography>
							<Box display="flex" flexWrap="wrap" marginTop={1}>
								{fetchedWork?.tools?.map((tool, index) => {
									return (
										<Fragment key={index}>
											<ToolsChip
												avatar={<Avatar src={tool?.toolImage} />}
												label={tool?.toolName}
											/>
										</Fragment>
									)
								})}
							</Box>
						</Box>
						<Box
							width="60%"
							marginTop="50px"
							marginLeft="50px"
							bgcolor="#00000028"
							borderRadius="13px"
							padding={5}
							color={theme.palette.primary.contrastText}
						>
							<Typography variant="h3">
								{isEnglishSelected
									? fetchedWork?.description
									: fetchedWork?.descriptionEsp}
							</Typography>
						</Box>
					</Box>
				</Box>
			</Fragment>
		</Page>
	)
}

export default PortfolioWorkBooksPage

export async function getStaticProps() {
	return {
		props: {
			selectedWork: works.find(work => work.title === 'Books'),
		}, // will be passed to the page component as props
	}
}

const ToolsChip = styled(Chip)(({ theme }) => ({
	color: theme.palette.white,
	margin: '3px',
	padding: '5px',
}))
