import styled from 'styled-components'

export const Wrapper = styled.div`
	height: 60px;
	width: 154px;
	border: 1px solid #afbacc;
	border-radius: 4px;
	display: flex;
	justify-content: space-around;
	flex-direction: row;
`

export const Divider = styled.div`
	height: 60px;
	width: 1px;
	background-color: #afbacc;
`

export const Input = styled.input<{ valid: boolean }>`
	font: 20px sans-serif;
	outline: none;
	width: 50px;
	border: none;
	text-align: center;
	border-radius: 4px;

	&:hover {
		outline: none;
		border-color: ${(props) => (props.valid ? '#0466c8' : '#f25252')}; // #0466c8;
	}

	&:focus {
		border: 1px solid;
		border-color: ${(props) => (props.valid ? '#0466c8' : '#f25252')}; // #0466c8;
	}
`
