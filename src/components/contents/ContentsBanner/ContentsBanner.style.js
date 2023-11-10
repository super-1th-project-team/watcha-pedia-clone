import { styled } from 'styled-components';

export const Banner = styled.div`
	width: 100%;
	height: 550px;
	position: relative;
`;
export const BgImg = styled.img`
	object-position: center center;
	object-fit: cover;
	width: 100%;
	height: 100%;
`;
export const contentsInfoBox = styled.div`
	width: 1320px;
	left: 50%;
	transform: translateX(-50%);
	position: absolute;
	bottom: 60px;
`;
export const contentsTitle = styled.h2`
	font-size: 36px;
	font-weight: 700;
	color: #fff;
	text-shadow:
		-1px -1px 1px rgba(255, 255, 255, 0.1),
		1px 1px 1px rgba(0, 0, 0, 0.5),
		1px 1px 3px rgba(185, 185, 185, 0.3);
`;
export const contentsInfo = styled.p`
	margin-top: ${(props) => props.mgtop};
	color: #fff;
	text-shadow:
		-1px -1px 1px rgba(255, 255, 255, 0.1),
		1px 1px 1px rgba(0, 0, 0, 0.5),
		1px 1px 3px rgba(185, 185, 185, 0.3);
	font-size: 14px;
	line-height: 18px;
`;

export const genreText = styled.span`
	margin-right: 3px;
`;
