import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	border-top: 1px solid var(--color-bg-light-gray);
`;

export const Button = styled.button`
	width: 33.3%;
	border: none;
	border-right: 1px solid var(--color-bg-light-gray);
	outline: none;
	background-color: transparent;
	padding: 10px;
	cursor: pointer;
`;

export const Count = styled.div`
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 5px;
`;

export const Text = styled.div`
	color: var(--color-light-gray);
`;
