import styled from 'styled-components'

import { FontPTMonoRegular } from 'constants/fonts'

export const Header = styled.p`
	margin-left: 80px;
	margin-top: 345px;
	height: 27px;
	width: 350px;
	color: #ffffff;
	font-size: 20px;
	letter-spacing: 1px;
	line-height: 27px;
	text-transform: uppercase;
	${FontPTMonoRegular};
`

export const SubHeader = styled.p`
	margin-left: 80px;
	margin-top: 25px;
	width: 349px;
	color: #ffffff;
	font-size: 38px;
	font-weight: bold;
	letter-spacing: 0;
	line-height: 51px;
	${FontPTMonoRegular};
`

export const MainContent = styled.div`
	height: 638px;
	width: 464px;
`

export const MainContentHeader = styled.div`
	color: #293347;
	${FontPTMonoRegular}
	font-size: 24px;
	font-weight: bold;
	letter-spacing: 0;
	line-height: 32px;
`

export const MainContentSubHeader = styled.div`
	margin-top: 16px;
	font-family: 'Nunito Sans';
	${FontPTMonoRegular}
	font-size: 16px;
	letter-spacing: 0;
	line-height: 24px;
`

export const Button = styled.div`
	margin-top: 24px;
	height: 50px;
	width: 100%;
	background-color: #0466c8;

	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;

	&:hover {
		background-color: #0353a4;
	}
	&:active {
		background-color: #5e9ddc;
	}
`

export const ButtonText = styled.p`
	${FontPTMonoRegular};
	font-size: 15px;
	letter-spacing: 0;
	line-height: 20px;
	text-align: center;
	color: #fff;
`

export const FormItem = styled.div`
	margin: 6px 0;
`
