import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavNav = styled.nav`
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

const NavLogo = styled.img.attrs({
	src: '/assets/WATCHA_PEDIA_Logo_Main.png',
	alt: '로고 들어갈 자리',
})`
	width: 100px;
	height: 30px;
`;

const NavContent = styled.div`
	display: flex;
	width: 96%;
	height: 100%;
	margin: 0 auto;
	align-items: center;
	justify-content: space-between;
`;

const NavUl = styled.div`
	display: flex;
	list-style: none;
	align-items: center;
`;

const NavLi = styled.li`
	margin-left: 30px;
`;

const NavSearchInput = styled.input`
	border: none;
	background-color: white;
	width: 300px;
	height: 38px;
`;

const NavButton = styled.button`
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

const Nav = () => {
	const navigate = useNavigate();

	const onMovieClick = () => {
		navigate('/?domain=movies');
	};

	const onTvClick = () => {
		navigate('/?domain=tv_seasons');
	};

	const onBookClick = () => {
		navigate('/?domain=books');
	};

	return (
		<header>
			<NavNav>
				<NavContent>
					<div>
						<NavUl>
							<NavLi>
								<NavLogo></NavLogo>
							</NavLi>
							<NavLi>
								<NavButton onClick={onMovieClick}>영화</NavButton>
							</NavLi>
							<NavLi>
								<NavButton onClick={onTvClick}>TV</NavButton>
							</NavLi>
							<NavLi>
								<NavButton onClick={onBookClick}>책</NavButton>
							</NavLi>
						</NavUl>
					</div>
					<div>
						<NavUl>
							<NavLi>
								<NavSearchInput placeholder="콘텐츠,인물,컬렉션,유저를 검색해보세요." />
							</NavLi>
							<NavLi>
								<NavButton>로그인</NavButton>
							</NavLi>
							<NavLi>
								<NavButton>회원가입</NavButton>
							</NavLi>
						</NavUl>
					</div>
				</NavContent>
			</NavNav>
		</header>
	);
};

export default Nav;
