import styled, { css } from 'styled-components';

export const Container = styled.section`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	left: 50%;
	top: 50%;
	width: 375px;
	height: 585px;
	border-radius: 7px;
	transform: translate(-50%, -50%);
	background-color: var(--color-bg-white);

	${({ isLoginError }) =>
		isLoginError &&
		css`
			background-color: var(--color-bg-gray);
		`}
`;

export const Image = styled.img`
	width: 200px;
	height: 50px;
`;
