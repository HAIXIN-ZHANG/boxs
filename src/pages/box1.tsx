import React from 'react'
import styled from 'styled-components'

import Box2 from './box2'

const StyledBox1 = styled.div<{ isChildrenHovering: boolean }>`
	width: 500px;
	height: 500px;
	background: ${(props) => (props.isChildrenHovering ? '#00FF00' : '#ffffff')};
	display: flex;
	align-items: center;
	justify-content: center;
`

interface IState {
	isChildrenHovering: boolean
}

class Box1 extends React.Component<any, IState> {
	constructor(props: any) {
		super(props)
		this.state = {
			isChildrenHovering: false,
		}
	}

	private setIsChildrenHoveringState = (isChildrenHovering: boolean) => {
		this.setState({ isChildrenHovering })
	}

	render() {
		return (
			<StyledBox1 isChildrenHovering={this.state.isChildrenHovering}>
				<Box2 setIsChildrenHoveringState={this.setIsChildrenHoveringState} />
			</StyledBox1>
		)
	}
}

export default Box1
