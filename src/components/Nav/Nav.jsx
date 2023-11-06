import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
	NavButton,
	NavContent,
	NavLi,
	NavLogo,
	NavNav,
	NavSearchInput,
	NavUl,
} from './Nav.style';

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
