import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	background-color: var(--color-bg-light-gray);
	height: 100vh;
`;

export const UserSection = styled.section`
	width: 600px;
	height: 800px;
	background-color: var(--color-bg-white);
	margin: 100px auto 0;
	border: 1px solid var(--color-bg-gray);
	border-radius: 5px;
`;

export const Divider = styled.div`
	height: 10px;
	background-color: var(--color-bg-light-gray);
`;
