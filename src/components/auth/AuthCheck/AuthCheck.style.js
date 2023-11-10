import styled from 'styled-components';
import { IoMdThumbsUp } from 'react-icons/io';
import { BsBookmark } from 'react-icons/bs';
import { FaComment } from 'react-icons/fa';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 10px;
`;

export const IconWrap = styled.div`
	height: 10%;
`;

export const StyledIoMdThumbsUp = styled(IoMdThumbsUp)`
	width: 100px;
	height: 100px;
	color: var(--color-light-gray);
`;

export const StyledFaComment = styled(FaComment)`
	width: 100px;
	height: 100px;
	color: var(--color-light-gray);
`;

export const StyledBsBookmark = styled(BsBookmark)`
	width: 100px;
	height: 100px;
	color: var(--color-light-gray);
`;

export const ButtonWrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 100%;
`;

export const Button = styled.button`
	font-size: 14px;
	width: 95%;
	height: 50px;
	background-color: transparent;
	border: none;
	border-radius: 8px;
	font-size: 18px;
	margin-bottom: 10px;
	outline: none;
	cursor: pointer;
`;

export const Paragraph = styled.p`
	font-size: 20px;
	font-weight: bold;
	line-height: 1.5;
`;

export const RegisterButton = styled(Button)`
	color: var(--color-bg-white);
	background-color: var(--color-lignt-red);
`;

export const LoginButton = styled(Button)`
	color: var(--color-lignt-red);
	background-color: var(--color-bg-white);
`;
