import styled from 'styled-components';

export const SearchSection = styled.section`
	display: flex;
	flex-direction: column;

	margin-top: 62px;
	width: 100%;
	background: var(--color-bg-white);
`;

export const SearchText = styled.div`
	font-size: 16px;
	font-weight: 600;
	width: 100%;
	color: var(--color-light-gray);
	padding: 15px 50px;
	background: var(--color-bg-light-gray);
`;

export const Divider = styled.div`
	width: calc(100% - 100px);
	height: 1px;
	background-color: #e9e9e9;
	margin: 40px auto 0px auto;
`;

export const Title = styled.h2`
	font-size: 18px;
	font-weight: bold;
	margin-top: 20px;
	padding: 0 70px;
`;

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: calc(100% - 100px);
	margin: 0 auto;
	padding: 25px 0 150px 0;
	border-bottom: 1px solid #e9e9e9;
`;

export const Article = styled.article`
	display: flex;
	height: 120px;
	width: calc(100% / 3);
	cursor: pointer;
	align-items: center;
`;

export const ImgWrap = styled.div`
	height: 85%;
	width: 80px;
	border-radius: 3px;
	overflow: hidden;
	& img {
		height: 100%;
		text-align: center;
	}
`;

export const InfoWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	color: var(color-light-gray);
	font-size: 14px;
	width: 100%;
	height: 100%;
	padding: 10px;
	border-bottom: 1px solid #e9e9e9;
	margin: 0 10px;
	& h3 {
		font-size: 18px;
		font-weight: 500;
		color: var(--color-medium-black);
	}
`;
