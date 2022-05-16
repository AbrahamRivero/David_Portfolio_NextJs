import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram'
import Link from '@mui/material/Link'
import { TELEGRAM_URL } from '../../../constants/urls'

const SocialMedia = () => (
	<div className="app__social">
		<div>
			<Link href={TELEGRAM_URL} target="_blank" rel="noreferrer">
				<TelegramIcon />
			</Link>
		</div>
	</div>
)

export default SocialMedia
