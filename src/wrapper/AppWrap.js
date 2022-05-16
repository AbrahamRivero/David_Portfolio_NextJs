import React from 'react'
import NavigationDots from '../components/others/UserLayout/NavigationDots'
import SocialMedia from '../components/others/UserLayout/SocialMedia'

const AppWrap = (Component, idName, classNames) =>
	function HOC() {
		return (
			<div id={idName} className={`app__container ${classNames}`}>
				<SocialMedia />
				<div className="app__wrapper app__flex">
					<Component />
				</div>
				<NavigationDots active={idName} />
			</div>
		)
	}

export default AppWrap
