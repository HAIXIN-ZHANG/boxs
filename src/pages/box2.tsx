import React from 'react'
import Box3 from './box3'

import styled from 'styled-components'

const StyledBox2 = styled.div`
	width: 300px;
	height: 300px;
	background-color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`

export interface Props {
	setIsChildrenHoveringState: (isChildrenHovering: boolean) => void
}

function Box2(props: Props) {
	return (
		<StyledBox2>
			<Box3 setIsChildrenHoveringState={props.setIsChildrenHoveringState} />
		</StyledBox2>
	)
}

export default Box2
