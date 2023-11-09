import styled from 'styled-components';

export const SearchSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 100px;
	width: 100%;
`;

export const SearchText = styled.div`
	width: 80%;
	text-align: start;
	font-size: 16px;
`;

export const Divider = styled.div`
	width: 80%;
	height: 0.5px;
	background-color: var(--color-light-gray);
`;

export const Title = styled.h2`
	font-size: 18px;
	font-weight: bold;
`;

export const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 80%;
`;

export const Article = styled.article`
	display: flex;
	justify-content: space-around;
	width: 33%;
	cursor: pointer;
`;

export const ImgWrap = styled.div`
	width: 30%;
	& img {
		width: 100%;
	}
`;

export const InfoWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
