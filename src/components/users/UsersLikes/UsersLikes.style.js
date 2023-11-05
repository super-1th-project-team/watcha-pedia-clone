import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';

export const StyledMdKeyboardArrowRight = styled(MdKeyboardArrowRight)`
	width: 25px;
	height: 25px;
	color: var(--color-light-gray);
`;

export const UsersLikesContainer = styled.div`
	padding: 20px 0 0 10px;
`;

export const Title = styled.h1`
	font-size: 22px;
	font-weight: bold;
	margin: 5px 0 5px 0;
`;

export const ButtonWrap = styled.div`
	display: flex;
	flex-direction: column;
	width: 97%;
	padding: 10px;
`;

export const Button = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	border: none;
	border-bottom: 0.5px solid var(--color-bg-light-gray);
	outline: none;
	background-color: transparent;
	cursor: pointer;
`;

export const Text = styled.span`
	font-size: 18px;
	font-weight: 500;
	margin-right: 10px;
`;

export const Count = styled.span`
	font-size: 16px;
	color: var(--color-light-gray);
`;
