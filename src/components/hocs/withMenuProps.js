import { useState } from 'react'

// eslint-disable-next-line react/display-name
const withMenuProps =
	Component =>
	({ ...props }) => {
		const [anchorEl, setAnchorEl] = useState(null)
		const isAcctMenuOpen = Boolean(anchorEl)
		const handleAcctMenuClick = e => setAnchorEl(e.currentTarget)
		const handleAcctMenuClose = () => setAnchorEl(null)

		return (
			<Component
				anchorEl={anchorEl}
				isAcctMenuOpen={isAcctMenuOpen}
				handleAcctMenuClick={handleAcctMenuClick}
				handleAcctMenuClose={handleAcctMenuClose}
				{...props}
			/>
		)
	}

export default withMenuProps
