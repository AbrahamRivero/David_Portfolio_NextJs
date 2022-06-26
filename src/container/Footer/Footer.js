import { Fragment } from 'react'
import { AppWrap, MotionWrap } from '../../wrapper'
import { theme } from '../../theme'
import { FaDiscord } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import {
	DISCORD_URL,
	LINKEDIN_URL,
	TELEGRAM_URL,
	WHATSAPP_URL,
} from '../../constants/urls'
import styles from '../../../styles/Footer.module.scss'
import Contact from '../Contact'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import TelegramIcon from '@mui/icons-material/Telegram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {
	const isEnglishSelected = useSelector(state => state.language.isEnglish)
	return (
		<Fragment>
			{isEnglishSelected ? (
				<h2 className="head-text">
					<span>Take a coffee & chat with me</span>
				</h2>
			) : (
				<h2 className="head-text">
					<span>Tomemos un café y hablemos</span>
				</h2>
			)}

			{/* 			<div className={`${styles.app__footer_cards}`}>
				<div className={`${styles.app__footer_card}`}>
					<img src="/assets/email.png" alt="email" />
					<a href="mailto:davmar1995@gmail.com" className="p-text">
						davmar1995@gmail.com
					</a>
				</div>
				<div className={`${styles.app__footer_card}`}>
					<img src="/assets/mobile.png" alt="phone" />
					<a href="tel:+34 (677) 167-665" className="p-text">
						+34 (677) 167-665
					</a>
				</div>
			</div> */}
			<Contact />
			<Box marginTop="20px">
				<IconButton
					size="large"
					href={TELEGRAM_URL}
					target="_blank"
					rel="noreferrer"
				>
					<TelegramIcon fontSize="large" htmlColor={theme.palette.white} />
				</IconButton>
				<IconButton
					size="large"
					href={WHATSAPP_URL}
					target="_blank"
					rel="noreferrer"
				>
					<WhatsAppIcon fontSize="large" htmlColor={theme.palette.white} />
				</IconButton>
				<IconButton
					size="large"
					href={DISCORD_URL}
					target="_blank"
					rel="noreferrer"
				>
					<FaDiscord size="35px" color={theme.palette.white} />
				</IconButton>
				<IconButton
					size="large"
					href={LINKEDIN_URL}
					target="_blank"
					rel="noreferrer"
				>
					<LinkedInIcon fontSize="large" htmlColor={theme.palette.white} />
				</IconButton>
			</Box>
		</Fragment>
	)
}

export default AppWrap(
	MotionWrap(Footer, `${styles.app__footer}`),
	'contact',
	'app__contactBg'
)
