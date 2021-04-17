import styled from 'styled-components'

export const Input = styled.input<{ valid: boolean }>`
	padding: 10px;
	border-radius: 4px;
	font: 12px sans-serif;
	border: 1px solid;
	border-color: ${(props) => (props.valid ? '#afbacc' : '#f25252')};

	&:hover {
		outline: none;
		border-color: ${(props) => (props.valid ? '#0466c8' : '#f25252')}; // #0466c8;
	}

	&:focus {
		outline: none;
		border-color: ${(props) => (props.valid ? '#0466c8' : '#f25252')}; // #0466c8;
	}
`
