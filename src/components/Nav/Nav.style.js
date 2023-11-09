import styled from 'styled-components';

export const Header = styled.header`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 62px;
	background-color: var(--color-bg-white);
	border-bottom: 1px solid var(--color-light-gray);
	left: 0;
	top: 0;
	z-index: 2;
`;

export const NavNav = styled.nav`
	width: 80%;
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
	& form {
		position: relative;
	}
	& svg {
		position: absolute;
		top: 50%;
		left: 12px;
		transform: translateY(-50%);
	}
`;

export const NavSearchInput = styled.input`
	border: none;
	background-color: var(--color-bg-light-gray);
	width: 300px;
	height: 38px;
	font-size: 15px;
	outline: none;
	padding-left: 40px;
`;

export const NavButton = styled.button`
	font-weight: 500;
	font-size: 1.2em;
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

export const NavTVSeasonsButton = styled(NavButton)`
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

export const UserButton = styled(NavButton)`
	& img {
		width: 25px;
		border-radius: 50%;
	}
`;
