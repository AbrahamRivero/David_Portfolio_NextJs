import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'
import Box from '@mui/material/Box'
import Image from 'next/image'

import styles from '../../../styles/Header.module.scss'

const Header = () => {
	const isEnglishSelected = useSelector(state => state.language.isEnglish)
	return (
		<Fragment>
			<Box className={`${styles.app__header} app__flex`}>
				<motion.div
					whileInView={{ opacity: [0, 1] }}
					transition={{ duration: 0.85, ease: 'easeOut', damping: 50 }}
				>
					{isEnglishSelected ? (
						<Image
							src="/assets/logoENG.png"
							width={420}
							height={260}
							loading="lazy"
						/>
					) : (
						<Image
							src="/assets/logo.png"
							width={420}
							height={260}
							loading="lazy"
						/>
					)}
				</motion.div>
			</Box>
		</Fragment>
	)
}

export default AppWrap(Header, 'home', 'home')
