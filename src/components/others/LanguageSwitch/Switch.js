import { Fragment } from 'react'
import { languageActions } from '../../../store/language'
import { useDispatch } from 'react-redux'
import SwitchItem from '@mui/material/Switch'
import { styled } from '@mui/system'
import styles from '../../../../styles/Switch.module.scss'
import { useSelector } from 'react-redux'

const Switch = () => {
	const dispatch = useDispatch()
	const isEnglishSelected = useSelector(state => state.language.isEnglish)
	const toggleLanguageHandler = () => {
		dispatch(languageActions.toggleLanguage())
	}
	return (
		<Fragment>
			<label className={styles.switch}>
				<input type="checkbox" onClick={toggleLanguageHandler} />
				<span className={styles.slider}></span>
			</label>
		</Fragment>
	)
}

export default Switch
