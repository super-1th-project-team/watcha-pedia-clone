import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const UsersSettingPopupSection = styled.section`
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 400px;
	height: 500px;
	padding: 10px;
	z-index: 2;
	background-color: var(--color-bg-light-gray);
`;

export const Container = styled.div`
	position: relative;
`;

export const StyledAiOutlineClose = styled(AiOutlineClose)`
	color: var(--color-lignt-red);
	width: 22px;
	height: 22px;
	margin-bottom: 20px;
`;

export const Title = styled.h1`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 25px;
	padding-bottom: 10px;
	border-bottom: 0.5px solid #c6c3bd;
`;

export const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const SubTitle = styled.div`
	font-size: 16px;
	width: 100%;
	text-align: left;
	color: gray;
	margin-bottom: 20px;
`;

export const Button = styled.button`
	font-size: 16px;
	text-align: left;
	width: 97%;
	height: 40px;
	border: none;
	padding-bottom: 10px;
	margin-bottom: 15px;
	border-bottom: 0.5px solid #c6c3bd;
	outline: none;
	background-color: transparent;
	cursor: pointer;

	${(props) =>
		props.logout === 'logout' &&
		`
    margin-top: 50px;
  `}
`;
