import React from 'react'

const NavigationDots = ({ active }) => (
	<div className="app__navigation">
		{['home', 'work', 'skills', 'experiences', 'contact'].map((item, index) => (
			<a
				href={`#${item}`}
				key={item + index}
				className="app__navigation-dot"
				style={active === item ? { backgroundColor: '#ffd5a4' } : {}}
			/>
		))}
	</div>
)

export default NavigationDots
