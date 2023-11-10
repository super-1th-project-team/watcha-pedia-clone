import { styled, css } from 'styled-components';

export const ReviewWrapper = styled.div`
	margin: 0 auto 100px auto;
	width: 640px;
	/* border: 1px solid var(--color-bg-light-gray); */
	border-radius: 5px;
	overflow: hidden;
	background: var(--color-bg-white);
	position: relative;
`;

export const HiddenBox = styled.div`
	width: 100%;
	height: 100px;
	z-index: 1;
	background: #fff;
	position: fixed;
	top: 0;
`;

export const RHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 15px 20px 0 20px;
	background: #fff;
	width: 640px;
	margin: 0 auto;
	position: fixed;
	top: 100px;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 5px;
	border: 1px solid #eee;
	z-index: 100;
`;

export const RItem = styled.div`
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #eee;
	padding: 20px 0;
	& > div {
		display: flex;
		gap: 20px;
	}
`;

export const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	color: var(--color-light-gray);
	padding-top: 5px;
	& span {
		font-weight: 700;
		font-size: 1.125rem;
		margin-bottom: 10px;
		display: block;
		color: var(--color-light-black);
	}
`;

export const IconMoreBTN = styled.div`
	cursor: pointer;
	height: fit-content;
`;

export const RItemList = styled.div`
	border: 1px solid #eee;
	padding: 20px;
	margin-top: 210px;
	z-index: -10;
`;

export const RNav = styled.div`
	width: 100%;
`;

export const NavUl = styled.ul`
	display: flex;
	width: 100%;
`;
export const NavLi = styled.li`
	cursor: pointer;
	font-size: 16px;
	font-weight: 500;
	color: var(--color-light-gray);
	flex: 1;
	padding: 15px 0;
	text-align: center;
	${(props) =>
		props.isSelected &&
		css`
			color: var(--color-lignt-red);
			border-bottom: 3px solid var(--color-lignt-red);
		`}
`;
