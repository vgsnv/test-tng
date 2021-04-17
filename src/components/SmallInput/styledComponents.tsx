import styled from 'styled-components'

import { FontPTMonoRegular } from 'constants/fonts'

export const Wrapper = styled.div`
	height: 94px;
	width: 244px;
	border: 1px solid #afbacc;
	border-radius: 4px;
	display: flex;
	justify-content: space-around;
	flex-direction: row;
`

export const Divider = styled.div`
	height: 94px;
	width: 1px;
	background-color: #afbacc;
`

export const Line = styled.div`
	background-color: #afbacc;
	width: 14px;
	height: 1px;
	background-color: #afbacc;
	margin: 0 14px;
`

export const Input = styled.input<{ valid: boolean }>`
	font: 20px sans-serif;
	outline: none;
	width: 80px;
	border: none;
	border-radius: 4px;

	color: #293347;
	${FontPTMonoRegular};
	font-size: 46px;
	font-weight: bold;
	letter-spacing: 0;
	line-height: 63px;
	text-align: center;

	&:hover {
		outline: none;
		border-color: ${(props) => (props.valid ? '#0466c8' : '#f25252')}; // #0466c8;
	}

	&:focus {
		border: 1px solid;
		border-color: ${(props) => (props.valid ? '#0466c8' : '#f25252')}; // #0466c8;
	}
`
