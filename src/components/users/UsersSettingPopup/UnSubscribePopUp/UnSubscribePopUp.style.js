import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	align-items: center;
	left: 50%;
	top: 80%;
	transform: translate(-50%, -70%);
	width: 80%;
	height: 150px;
	border-radius: 10px;
	border: 0.5px solid gray;
	background-color: var(--color-bg-white);
`;

export const Title = styled.div`
	font-size: 16px;
	font-weight: 400;
	margin: 20px 0;
`;

export const Paragraph = styled.p`
	margin-bottom: 25px;
`;

export const ButtonWrap = styled.div`
	display: flex;
	justify-content: space-between;
	width: 70%;
	padding: 10px 30px;
	border-top: 0.5px solid gray;

	& :nth-child(2) {
		border-left: 0.5px solid gray;
	}
`;

export const Button = styled.button`
	display: flex;
	justify-content: center;
	font-size: 18px;
	color: var(--color-lignt-red);
	border: none;
	outline: none;
	background-color: transparent;
	padding: 5px 10px;
	cursor: pointer;
	width: 100%;
`;
