import styled from 'styled-components';

export const NavNav = styled.nav`
	z-index: 9999;
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 62px;
	background-color: rgba(255, 255, 255, 0.7);
	/* 가려진 부분 확인을 위해 배경색을 반투명하게 넣었습니다.*/
	border-bottom: 1px solid black;
`;

export const NavLogo = styled.img.attrs({
	src: '/assets/WATCHA_PEDIA_Logo_Main.png',
	alt: '로고 들어갈 자리',
})`
	width: 100px;
	height: 30px;
`;

export const NavContent = styled.div`
	display: flex;
	width: 96%;
	height: 100%;
	margin: 0 auto;
	align-items: center;
	justify-content: space-between;
`;

export const NavUl = styled.div`
	display: flex;
	list-style: none;
	align-items: center;
`;

export const NavLi = styled.li`
	margin-left: 30px;
`;

export const NavSearchInput = styled.input`
	border: none;
	background-color: white;
	width: 300px;
	height: 38px;
`;

export const NavButton = styled.button`
	font-weight: 500;
	font-size: 1em;
	border: none;
	outline: none;
	color: #828282;
	background-color: transparent;
	&:hover {
		cursor: pointer;
	}
`;
