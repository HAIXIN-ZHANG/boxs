import React from 'react'
import { Props } from './box2'
import styled from 'styled-components'

const StyledBox3 = styled.div`
	width: 150px;
	height: 150px;
	background-color: whit;
`

function Box3(props: Props) {
	// const [isHovering, setIsHovering] = React.useState<boolean>(false)

	return (
		<StyledBox3
			onMouseEnter={(e) => {
				props.setIsChildrenHoveringState(true)
			}}
			onMouseLeave={(e) => {
				props.setIsChildrenHoveringState(false)
			}}
		/>
	)
}

export default Box3
