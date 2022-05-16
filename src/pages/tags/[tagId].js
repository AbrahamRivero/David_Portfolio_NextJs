import Page from 'components/others/Page'
import { rawFetchAPI } from 'helpers/graphQL'
import TagLandingPage from 'components/others/TagLandingPage/TagLandingPage'

const Tags = ({ tag }) => (
	<Page pageTitle="Tag Landing Page">
		<TagLandingPage tag={tag} />
	</Page>
)

export async function getStaticPaths() {
	const { searchTags } = await rawFetchAPI({
		query: searchTagsQuery,
		variables: { searchTerm: '' },
	})
	// Get the paths we want to pre-render
	const paths = searchTags.map(({ id: tagId }) => ({
		params: { tagId },
	}))

	return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	// Call an external API endpoint to get posts
	const { getTag: tag } = await rawFetchAPI({
		query: getTagQuery,
		variables: { tagId: params.tagId },
	})
	return { props: { tag } }
}

export default Tags

const getTagQuery = `
	query getTag($tagId: ID!) {
		getTag(tagId: $tagId) {
			id
			tagName
			tagShortDescription
			tagLongDescription
			searchTerms
			createdAt
			lastUpdatedAt
			tagFields {
				id
				fieldName
				fieldIcon
				fieldDescription
				fieldValueProps {
					... on TagNumberFieldValueProps {
						type
						regex
						allowRange
					}
					... on TagMoneyFieldValueProps {
						type
						regex
						allowRange
					}
					... on TagBooleanFieldValueProps {
						type
					}
					... on TagListFieldValueProps {
						type
						options {
							id
							label
						}
					}
					... on TagHoursFieldValueProps {
						type
					}
					... on TagTextFieldValueProps {
						type
						regex
					}
					... on TagVariantsFieldValueProps {
						type
					}
				}
			}
		}
	}
`

const searchTagsQuery = `
	query searchTags($searchTerm: String!) {
		searchTags(searchTerm: $searchTerm) {
			id
		}
	}
`
