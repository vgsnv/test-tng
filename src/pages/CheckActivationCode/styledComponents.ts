import styled from 'styled-components'
import { FontPTMonoRegular } from 'constants/fonts'

export const MainContent = styled.div`
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

export const MainContentHeader = styled.div`
	margin-top: 50px;
	color: #293347;
	${FontPTMonoRegular}
	font-size: 30px;
	font-weight: bold;
	letter-spacing: 0;
	line-height: 38px;
	text-align: center;
`

export const MainContentSubHeader = styled.div`
	margin-top: 12px;
	color: #293347;
	${FontPTMonoRegular}
	width: 512px;
	font-size: 16px;
	letter-spacing: 0;
	line-height: 24px;
	text-align: center;
`

export const Description = styled.div`
	margin-top: 50px;

	${FontPTMonoRegular}
	color: #293347;
	font-family: 'Nunito Sans';
	font-size: 14px;
	letter-spacing: 0;
	line-height: 21px;
	text-align: center;
`

export const InfoWrap = styled.div`
	display: flex;
	background-color: #fff;
	flex-direction: row;
	position: fixed;
	bottom: 0;
`
export const Info = styled.p`
	padding-bottom: 60px;
	margin: 10px;
	${FontPTMonoRegular}
	color: #5C677D;
	font-family: 'Nunito Sans';
	font-size: 14px;
	letter-spacing: 0;
	line-height: 21px;
	cursor: pointer;
`

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
