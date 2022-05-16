import { Fragment } from 'react'
import { languageActions } from '../../../store/language'
import { useDispatch } from 'react-redux'

import styles from '../../../../styles/Switch.module.scss'

const Switch = () => {
	const dispatch = useDispatch()

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
