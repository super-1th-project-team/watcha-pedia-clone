import styled from 'styled-components';
import { BsArrowLeftShort } from 'react-icons/bs';

export const RatingsSection = styled.section`
	padding-top: 70px;
	height: 100vh;
	background-color: var(--color-bg-light-gray);
`;

export const Button = styled.button`
	display: flex;
	border: none;
	outline: none;
	background-color: transparent;
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
	display: flex;
	flex-direction: column;
	align-items: start;
	padding: 20px;
`;

export const SubTitle = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin-right: 10px;
`;

export const Text = styled.div`
	font-size: 18px;
`;

export const ButtonWrap = styled.div`
	display: flex;
	width: 100%;
	border-bottom: 1px solid #c6c3bd;
`;

export const TypeButton = styled(Button)`
	border-bottom: 0.5px solid #c6cbcd;
	width: 100%;
	background: transparent;
	padding: 10px 0;
	margin-top: 10px;

	& span {
		margin-top: 3px;
		color: #c6cbcd;
		font-size: 14px;
	}
`;
