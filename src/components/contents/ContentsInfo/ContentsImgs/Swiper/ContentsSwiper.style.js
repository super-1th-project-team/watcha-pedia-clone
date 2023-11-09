import styled from 'styled-components';

export const ImgModalDiv = styled.div`
	position: absolute;
	z-index: 50;
	width: 100vw;
	height: 100vh;
	background-color: #fff;
`;

export const ContentsSwiperContainer = styled.div`
	.swiper {
		width: 100%;
		height: 300px;
		padding-top: 25px;
	}

	.swiper-slide {
		text-align: center;
		font-size: 18px;
		width: 30%;
	}

	.swiper-slide img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 3px;
	}

	.swiper-button-prev,
	.swiper-button-next {
		background-color: #fff;
		border: 1px solid rgb(249, 249, 249);
		border-radius: 50%;
		box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 4px 0px;
		width: 34px;
		height: 34px;
		margin-top: 0;
	}

	.swiper-button-prev {
		left: 15px;
	}

	.swiper-button-next {
		right: 15px;
	}

	.swiper-button-prev:after,
	.swiper-button-next:after {
		color: #000;
		font-size: 12px;
	}
`;

export const SwiperImgDiv = styled.div`
	overflow: hidden;
	background: rgb(248, 248, 248);
	box-sizing: border-box;
	border: 1px solid rgba(0, 0, 0, 0.08);
	border-radius: 3px;
	position: relative;
	padding-top: 66.4615%;
	cursor: pointer;
	.play-icon{
		position: absolute;
		z-index: 1000;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 30px;
		height: 30px;
		color: #fff;
	}
`;
