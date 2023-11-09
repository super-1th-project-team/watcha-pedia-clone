import styled from 'styled-components';

export const DataTitle = styled.h1`
	font-size: 22px;
	font-weight: bold;
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
	left: 18px;
	top: 8px;
`;

export const Title = styled.div`
	font-size: 1.025rem;
	font-weight: 600;
	margin-top: 5px;
`;

export const SwiperImg = styled.div`
	height: 90%;
	& img {
		width: 95%;
		height: 100%;
		border-radius: 5px;
		cursor: pointer;
	}
`;

export const SwiperWrap = styled.div`
	width: 100%;
	padding: 40px 50px;
	height: 30%;
	border-bottom: 1px solid #e9e9e9;
`;

export const StyledSwiperContainer = styled.div`
	.swiper {
		width: 100%;
		height: 100%;
	}

	.swiper-slide {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		font-size: 16px;
		overflow: hidden;
	}

	.swiper-slide > div:nth-child(2) {
		width: 95%;
		aspect-ratio: 3 / 4;
		overflow: hidden;
	}

	.swiper-slide > div:nth-child(2) img {
		width: 100%;
	}

	.swiper-button-prev {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		top: 50%;
		transform: translateY(-50%);
	}

	.swiper-button-next {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		top: 50%;
		transform: translateY(-50%);
	}
`;

export const InfoWrap = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	width: 100%;
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
