import { Fragment } from 'react'
import { AppWrap, MotionWrap } from '../../wrapper'
import styles from '../../../styles/Footer.module.scss'
import Contact from '../Contact'

const Footer = () => {
	return (
		<Fragment>
			<h2 className="head-text">Take a coffee & chat with me</h2>

			<div className={`${styles.app__footer_cards}`}>
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
			</div>
			<Contact />
		</Fragment>
	)
}

export default AppWrap(
	MotionWrap(Footer, `${styles.app__footer}`),
	'contact',
	'app__contactBg'
)
