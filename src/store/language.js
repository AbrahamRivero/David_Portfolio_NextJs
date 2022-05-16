import { createSlice } from '@reduxjs/toolkit'

const initialLanguageState = { isEnglish: true }

const languageSlice = createSlice({
	name: 'language',
	initialState: initialLanguageState,
	reducers: {
		toggleLanguage(state) {
			state.isEnglish = !state.isEnglish
			console.log(state.isEnglish)
		},
	},
})

export const languageActions = languageSlice.actions

export default languageSlice.reducer
