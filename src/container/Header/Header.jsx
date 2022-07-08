import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'
import Box from '@mui/material/Box'

import styles from '../../../styles/Header.module.scss'

const Header = () => {
	const isEnglishSelected = useSelector(state => state.language.isEnglish)
	return (
		<Fragment>
			<Box className={`${styles.app__header} app__flex`}>
				<Box>
					{isEnglishSelected ? (
						<img src="/assets/logoENG.png" width={420} height={260} />
					) : (
						<img src="/assets/logo.png" width={420} height={260} />
					)}
				</Box>
			</Box>
		</Fragment>
	)
}

export default AppWrap(Header, 'home', 'home')
