import styled from 'styled-components';

export const DataTitle = styled.h1`
	font-size: 22px;
	font-weight: bold;
	margin: 50px 0 12px 0;
`;

export const RankNumber = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: var(--color-bg-black);
	color: var(--color-bg-white);
	font-size: 16px;
	font-weight: bold;
	border-radius: 3px;
	padding: 7px 3px 5px 3px;
	width: 30px;
	height: 30px;
	left: 8px;
	top: 8px;
`;

export const Title = styled.div`
	font-size: 1.1rem;
	font-weight: 600;
	width: 200px;
	margin-top: 5px;
`;

export const SwiperImg = styled.img`
	width: 90%;
	height: 100%;
	border-radius: 5px;
	margin-right: 10px;
	cursor: pointer;
`;

export const SwiperWrap = styled.div`
	width: 80%;
	height: 100%;
	margin: auto;
`;

export const StyledSwiperContainer = styled.div`
	.swiper-slide {
		font-size: 16px;
		overflow: hidden;
	}

	.swiper-button-prev {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		top: 50%;
		transform: translateY(-60%);
		left: -10px;
	}

	.swiper-button-next {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		top: 50%;
		transform: translateY(-60%);
	}
`;

export const InfoWrap = styled.div`
	display: flex;
	flex-direction: column;
`;

export const DateText = styled.div`
	font-size: 16px;
	margin-top: 7px;
`;

export const AverageText = styled.div`
	font-size: 14px;
	color: var(--color-light-gray);
	margin-top: 10px;
`;
