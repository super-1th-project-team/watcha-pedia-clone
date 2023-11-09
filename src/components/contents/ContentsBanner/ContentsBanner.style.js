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
	position: absolute;
	left: 60px;
	bottom: 60px;
`;
export const contentsTitle = styled.h2`
	font-size: 36px;
	font-weight: 700;
	color: #fff;
`;
export const contentsInfo = styled.p`
	margin-top: ${props => props.mgtop};
	color: #fff;
	font-size: 14px;
	line-height: 18px;
`;

export const genreText = styled.span`
	margin-right: 3px;
`;
