import styled from '@mui/system/styled'
import Box from '@mui/material/Box'
import { Fragment } from 'react'

const TiangleSvg = ({ colorA, colorB, type }) => (
	<Fragment>
		<Svg
			xmlns="http://www.w3.org/2000/svg" viewBox="0 0 856.08 79.26"
			colorA={colorA}
			colorB={colorB}
            type={type}
		>
			<g data-name="Capa">
				<g>
					<g>
						{type === 'A' && (
							<Fragment>
								<polygon
									className="cls-2"
									points="0 0 856.08 0 856.08 79.26 0 79.26 0 0 0 0"
								/>
								<polygon
									className="cls-1"
									points="0 0 856.08 79.26 0 79.26 0 0 0 0 0 0"
								/>
							</Fragment>
						)}
						{type === 'B' && (
							<Fragment>
								<polygon
									className="cls-2"
									points="0 0 856.08 0 856.08 79.26 0 79.26 0 0 0 0"
								/>
								<polygon
									className="cls-1"
									points="0 79.26 856.08 0 856.08 79.26 0 79.26 0 79.26 0 79.26"
								/>
							</Fragment>
						)}
					</g>
				</g>
			</g>
		</Svg>
	</Fragment>
)

export default TiangleSvg

const Svg = styled(({ colorA, colorB, type, ...props }) => (
	<Box component="svg" {...props} />
))(({ colorA, colorB, type }) => ({
    width:"100%",
    '& .cls-1': {
        fill: colorA,
	},
	'& .cls-1,& .cls-2': {
        fillRule: 'evenodd',
	},
	'& .cls-2': {
		fill: colorB,
	},
}))
