import styled from 'styled-components';

export const Header = styled.header`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 62px;
	background-color: #fff;
	border-bottom: 1px solid rgba(0, 0, 0, 0.08);
	left: 0;
	top: 0;
	z-index: 2;
	transition: background-color 200ms ease 0s;
	${props => props.contents && `
		background-color: transparent;
		border-bottom: transparent;
	`}
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
`;

export const NavSearchInput = styled.input`
	border: none;
	background-color: var(--color-bg-light-gray);
	width: 300px;
	height: 38px;
	text-align: center;
	font-size: 15px;
	border: 1px solid rgba(255, 255, 255, 0.25);
	border-radius: 2px;
	${props => props.contents && `
		background-color: rgba(0, 0, 0, 0.2);
		color: #fff;
	`}
`;


export const NavButton = styled.button`
	font-weight: 500;
	font-size: 1.2em;
	border: none;
	outline: none;
	color:  ${props => props.contents ? 'rgba(255, 255, 255, 0.7)' : '#828282'};
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
	${props => props.contents && `color: rgba(255, 255, 255, 0.7)`}
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
	color:var(--color-dark-black);
	${props => props.contents && `
		border: 1px solid rgba(255, 255, 255, 0.7);
		color: rgba(255, 255, 255, 0.7);
	`}
`;

export const UserButton = styled(NavButton)`
	& img {
		width: 25px;
		border-radius: 50%;
	}
`;
