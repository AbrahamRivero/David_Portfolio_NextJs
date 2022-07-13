import { Fragment, useEffect, useState } from 'react'
import { works } from '../../constants/data-works'
import { useSelector } from 'react-redux'
import { theme } from '../../theme'
import Page from '../../components/others/Page/Page'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import Carousel from '../../components/others/Carousel/Carousel'
import { useRouter } from 'next/router'
import { styled } from '@mui/system'

const PortfolioWorkPage = ({ selectedWork }) => {
	const isEnglishSelected = useSelector(state => state.language.isEnglish)
	const [fetchedWork, setFetchedWorkWork] = useState(selectedWork)

	return (
		<Page pageTitle="Selected Work Page" backgroundColorPage="#4A4E65">
			<Fragment>
				<Box
					display="flex"
					flexDirection="column"
					alignItems="center"
					marginTop={20}
					marginBottom={5}
				>
					<Carousel images={fetchedWork?.imagesUrls} />
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
							<Typography
								variant="h2"
								marginTop={2}
								marginBottom={4}
								fontWeight={800}
							>
								{isEnglishSelected ? fetchedWork?.title : fetchedWork?.titleEsp}
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
								{isEnglishSelected ? fetchedWork?.tag : fetchedWork?.tagEsp}
							</Typography>
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
							height=""
							marginTop="50px"
							marginLeft="50px"
							bgcolor="#00000017"
							padding={5}
							color={theme.palette.primary.contrastText}
						>
							<Typography variant="h3" fontWeight={600}>
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

const ToolsChip = styled(Chip)(({ theme }) => ({
	color: theme.palette.white,
	margin: '3px',
	padding: '5px',
}))
