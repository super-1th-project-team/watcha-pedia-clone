import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	background-color: white;
	width: 75%;
	height: 100px;
	border: 1px solid black;
	padding: 20px;
`;

export const Message = styled.div`
	height: 40%;
	margin-top: 15px;
`;

export const Hr = styled.div`
	width: 90%;
	height: 0.5px;
	background-color: var(--color-light-gray);
`;

export const CloseButton = styled.button`
	font-size: 18px;
	font-weight: bold;
	background-color: transparent;
	border: none;
	outline: none;
	color: var(--color-lignt-red);
`;
