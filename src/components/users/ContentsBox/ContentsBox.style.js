import styled from 'styled-components';
import { BsArrowLeftShort } from 'react-icons/bs';

export const ContentsBoxSection = styled.section`
	padding-top: 70px;
	height: 100vh;
	background-color: var(--color-bg-light-gray);
`;

export const Button = styled.button`
	border: none;
	outline: none;
	background: transparent;
	cursor: pointer;
`;

export const StyledBsArrowLeftShort = styled(BsArrowLeftShort)`
	width: 30px;
	height: 30px;
	color: var(--color-lignt-red);
`;

export const Title = styled.h1`
	font-size: 24px;
	font-weight: bold;
	padding: 20px 0 0 20px;
	padding-bottom: 10px;
	border-bottom: 0.5px solid #c6c3bd;
`;

export const Container = styled.div`
	padding: 20px;
	margin-top: 20px;
`;

export const SubTitle = styled.div`
	font-size: 20px;
	font-weight: 500;
	margin-right: 10px;
`;

export const Text = styled.div`
	font-size: 18px;
`;

export const Wrap = styled.div`
	display: flex;
	align-items: center;
	padding-bottom: 20px;
	margin-bottom: 30px;
	border-bottom: 1px solid #c6c3bd;
`;

export const RatingsWrap = styled(Wrap)`
	height: 300px;
	align-items: start;

	& :nth-child(2) {
		margin-top: 3px;
		color: #c6c3bd;
	}
`;

export const WishesWrap = styled(Wrap)`
	justify-content: space-between;

	& :nth-child(2) {
		color: #c6c3bd;
		margin-right: 10px;
	}

	cursor: pointer;
`;
