import styled from 'styled-components';
import { BsArrowLeftShort } from 'react-icons/bs';

export const ContentsRatingsSection = styled.section`
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

export const ButtonWrap = styled.div`
	display: flex;
	width: 100%;
	border-bottom: 1px solid #c6c3bd;
`;

export const TypeButton = styled(Button)`
	width: 170px;
	height: 50px;
	font-size: 15px;
	color: gray;

	&:hover {
		color: #c6c3bd;
	}

	${(props) =>
		props.type === true &&
		`
			color: var(--color-dark-black);
			border-bottom: 2px solid var(--color-dark-black);
	`}
`;
