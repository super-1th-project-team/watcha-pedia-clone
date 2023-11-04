import styled from 'styled-components';

export const NavNav = styled.nav`
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
	alt: 'Main Logo Image',
})`
	width: 100px;
	height: 30px;
	cursor: pointer;
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
	background-color: var(--color-bg-light-gray);
	width: 300px;
	height: 38px;
	text-align: center;
	font-size: 15px;
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

export const NavMovieButton = styled(NavButton)`
	${(props) =>
		(props.domain === 'movies' || props.domain === null) &&
		`
    color: var(--color-dark-black);
  `}
`;

export const NavTVSeansonsButton = styled(NavButton)`
	${(props) =>
		props.domain === 'tv_seasons' &&
		`
    color: var(--color-dark-black);
  `}
`;

export const NavBooksButton = styled(NavButton)`
	${(props) =>
		props.domain === 'books' &&
		`
    color: var(--color-dark-black);
  `}
`;

export const RegisterButton = styled(NavButton)`
	border: 1px solid var(--color-dark-gray);
	border-radius: 5px;
	padding: 7px 15px;
	color: var(--color-dark-black);
`;
