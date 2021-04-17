import styled from 'styled-components'

import { FontPTMonoRegular } from 'constants/fonts'

export const Label = styled.p<{ valid: boolean }>`
	display: inline;
	position: relative;
	top: 6px;
	left: 8px;
	margin: 0;
	background: #fff;
	padding-left: 4px;
	padding-right: 4px;

	color: ${(props) => (props.valid ? '#656c7a' : '#f25252')};
	${FontPTMonoRegular}
	font-size: 12px;
	letter-spacing: 0;
	line-height: 16px;
`
export const Input = styled.input<{ valid: boolean }>`
	padding: 10px;
	width: 100%;
	border-radius: 4px;
	border: 1px solid;
	border-color: ${(props) => (props.valid ? '#9098A7' : '#f25252')};

	color: #293347;
	${FontPTMonoRegular};
	font-size: 14px;
	letter-spacing: 0;
	line-height: 20px;

	&:hover {
		outline: none;
		border-color: ${(props) => (props.valid ? '#0466c8' : '#f25252')}; // #0466c8;
	}

	&:focus {
		outline: none;
		border-color: ${(props) => (props.valid ? '#0466c8' : '#f25252')}; // #0466c8;
	}
`
