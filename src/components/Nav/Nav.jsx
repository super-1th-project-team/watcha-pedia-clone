import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_LOGIN_USER, TOGGLE_REGISTER_USER } from '../../slice/userSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import {
	NavButton,
	NavMovieButton,
	NavTVSeansonsButton,
	NavBooksButton,
	RegisterButton,
	NavContent,
	NavLi,
	NavLogo,
	NavNav,
	NavSearchInput,
	NavUl,
} from './Nav.style';

const Nav = () => {
	const [searchValue, setSearchValue] = useState('');
	const searchInputRef = useRef('');

	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
	const isRegistered = useSelector((state) => state.user.isRegistered);
	const dispatch = useDispatch();

	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const domain = query.get('domain');

	const loginHandler = () => {
		if (isRegistered) dispatch(TOGGLE_REGISTER_USER());
		dispatch(TOGGLE_LOGIN_USER());
	};

	const signUpHandler = () => {
		dispatch(TOGGLE_REGISTER_USER());
		if (isLoggedIn) dispatch(TOGGLE_LOGIN_USER());
	};

	const navigate = useNavigate();

	const onHomeClick = () => {
		navigate('/');
	};

	const onMovieClick = () => {
		navigate('/?domain=movies');
	};

	const onTvClick = () => {
		navigate('/?domain=tv_seasons');
	};

	const onBookClick = () => {
		navigate('/?domain=books');
	};

	const onSearchValueHandler = (e) => {
		setSearchValue(e.target.value);
	};

	const SearchValueSubmitHandler = (e) => {
		e.preventDefault();
		navigate('/search');
		searchInputRef.current.value = '';
	};

	return (
		<header>
			<NavNav>
				<NavContent>
					<div>
						<NavUl>
							<NavLi>
								<NavLogo onClick={onHomeClick} />
							</NavLi>
							<NavLi>
								<NavMovieButton domain={domain} onClick={onMovieClick}>
									영화
								</NavMovieButton>
							</NavLi>
							<NavLi>
								<NavTVSeansonsButton domain={domain} onClick={onTvClick}>
									TV
								</NavTVSeansonsButton>
							</NavLi>
							<NavLi>
								<NavBooksButton domain={domain} onClick={onBookClick}>
									책
								</NavBooksButton>
							</NavLi>
						</NavUl>
					</div>
					<div>
						<NavUl>
							<NavLi>
								<form onSubmit={SearchValueSubmitHandler}>
									<NavSearchInput
										placeholder="콘텐츠,인물,컬렉션,유저를 검색해보세요."
										onChange={onSearchValueHandler}
										ref={searchInputRef}
									/>
								</form>
							</NavLi>
							<NavLi>
								<NavButton onClick={loginHandler}>로그인</NavButton>
							</NavLi>
							<NavLi>
								<RegisterButton onClick={signUpHandler}>
									회원가입
								</RegisterButton>
							</NavLi>
						</NavUl>
					</div>
				</NavContent>
			</NavNav>
		</header>
	);
};

export default Nav;