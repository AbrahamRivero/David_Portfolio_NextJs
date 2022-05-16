import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
	projectId: 'ju85dhjd',
	dataset: 'production',
	apiVersion: '2022-03-11',
	useCdn: true,
	token:
		'skKXFq3dqlkXDFrO2Sem4B023YROwlrA14KEhpCKflyzWyJlgm61s9UStlLRMZjRa1JSgP6demW50Vmstvql97TJY3hehofnzSsn2hVoK9wpMrYWbn15ymBoA3ScYl2iznBlJR1wY6jVLCcH2NmY7w5456w63INTWChXnQ2xuLdjK4d0PDFL',
})

const builder = imageUrlBuilder(client)

export const urlFor = source => builder.image(source)
