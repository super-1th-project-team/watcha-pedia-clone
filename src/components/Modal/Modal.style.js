import { styled, css } from 'styled-components';

export const ModalContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	/* background-color: #434343; */
	opacity: 0.1;
	z-index: 10000;
	backdrop-filter: blur(1px);
`;

export const RModal = styled.div`
	padding: 25px;
	width: 370px;
	height: 370px;
	border: 1px solid var(--color-bg-light-gray);
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	opacity: 1;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: #fff;
	box-sizing: border-box;
	& > div:last-child {
		display: flex;
		align-items: center;
		justify-content: center;
		padding-top: 20px;
		color: var(--color-lignt-red);
		font-weight: 600;
		cursor: pointer;
	}
`;

export const RModalTitle = styled.div`
	border-bottom: 1px solid var(--color-bg-light-gray);
	display: flex;
	align-items: center;
	gap: 10px;
	padding-bottom: 20px;
	& h2 {
		font-weight: 700;
		font-size: 1.125rem;
		margin-bottom: 10px;
	}
`;

export const RModalIconBox = styled.div`
	border-bottom: 1px solid var(--color-bg-light-gray);
	height: 100px;
	display: flex;
	justify-content: space-evenly;
	cursor: pointer;
	& > div {
		width: 50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 10px;
		padding: 10px 0;
	}
	& > div:first-child {
		border-right: 1px solid var(--color-bg-light-gray);
	}
`;

export const RModalContentBox = styled.div`
	border-bottom: 1px solid var(--color-bg-light-gray);
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`;
