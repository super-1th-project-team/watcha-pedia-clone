import { keyframes, styled } from 'styled-components';

export const watchWilling = keyframes`
	0% {
		transform: rotate(90deg);
	}
	100% {
		transform: rotate(0deg);
	}
`;
export const notWilling = keyframes`
    0%{
        transform: rotate(-90deg);
    }100%{
        transform: rotate(0deg);
    }
`;

export const BgGray = styled.div`
	padding: 30px 60px 60px;
	background-color: #f8f8f8;
`;

export const InfoBox = styled.div`
	max-width: 1320px;
	margin: 0 auto;
	display: flex;
`;

export const InfoLeftBox = styled.div`
	width: 280px;
`;
export const InfoImg = styled.img`
	width: 100%;
	height: 400px;
	border-radius: 3px;
`;
export const GraphSection = styled.section`
	margin-top: 27px;
`;
export const GrayText = styled.p`
	margin-bottom: ${(props) => props.marginbtm};
	margin-top: ${props => props.margintp};
	font-size: 12px;
	color: #8c8c8c;
`;
export const Average = styled.em`
	font-size: 18px;
	color: #333;
`;

export const InfoRightBox = styled.div`
	flex: 1 0 0;
	padding-left: 32px;
`;
export const GridSection = styled.section`
	width: 100%;
	display: grid;
	align-items: center;
	grid-template-columns: repeat(3, auto);
	padding-bottom: 10px;
	border-bottom: 1px solid rgb(217, 217, 217);
`;

export const ScoreDiv = styled.div`
	text-align: center;
	display: flex;
`;

export const ScoreText = styled.strong`
	font-size: 36px;
	line-height: 42px;
`;
export const BtnContainer = styled.div`
    display: flex;
    justify-content: end;
`
export const Btn = styled.button`
	width: 80px;
	height: 90px;
	background: none;
	border: none;
    cursor: pointer;
	.ico {
		width: 40px;
		height: 40px;
		color: rgb(140, 140, 140);
	}
	.ico:hover {
		color: rgb(51, 51, 51);
		transform: scale(1.2);
		transition: all 300ms ease 0s;
	}
	.active {
		color: rgb(255, 47, 110);
	}
	.rotate {
		animation: ${watchWilling} 0.4s ease;
	}
	.cancel-rotate {
		animation: ${notWilling} 0.4s ease;
	}
`;

export const DescSection = styled.section`
	width: 100%;
	margin-top: 25px;
	font-size: 14px;
	line-height: 22px;
	color: var(--color-light-gray);
`;
export const CommentDiv = styled.div`
	padding: 20px 0;
	border-bottom: 1px solid rgb(217, 217, 217);
`;
export const WriteDiv = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
	line-height: 40px;
	padding: 12px 20px;
	border: 1px solid rgb(227, 227, 227);
	border-radius: 6px;
	font-size: 15px;
	color: rgb(74, 74, 74);
`;
export const WriteBtn = styled.button`
	width: 254px;
	height: 40px;
	background: none;
	border: 1px solid rgb(210, 210, 210);
	border-radius: 6px;
	font-size: 17px;
	font-weight: 500;
	letter-spacing: -0.7px;
	cursor: pointer;
`;
export const moreDiv = styled.div`
	position: absolute;
	right: 0;
	top: calc(100% + 10px);
	width: 176px;
	background-color: #fff;
	padding: 5px;
	border-radius: 7px;
	box-shadow: 0 1px 6px rgba(0, 0, 0, 0.17);
`;
export const moreBtn = styled.button`
	width: 100%;
	height: 36px;
	line-height: 36px;
	font-size: 12px;
	color: #292a32;
	font-weight: 500;
	background: none;
	padding: 0;
	border: none;
	text-align: left;
	margin: ${(props) => props.margin};
	cursor: pointer;
	&:hover {
		background-color: #292a3214;
		border-radius: 7px;
	}
	.more-btns {
		margin: 0 12px;
		width: 24px;
		height: 24px;
		vertical-align: -8px;
	}
`;
