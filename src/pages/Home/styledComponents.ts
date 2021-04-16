import styled from 'styled-components'

export const Button = styled.div`
	background-color: blue;
	height: 100px;
	width: 260px;
	&:hover {
		background-color: green;
	}
	&:active {
		background-color: gray;
	}
`

export const FormItem = styled.div`
	margin: 20px 0;
`
