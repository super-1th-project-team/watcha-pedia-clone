import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	CHECK_AUTH_POPUP,
	LOGIN_USER,
	LOGOUT_USER,
	TOGGLE_LOGIN_POPUP,
	TOGGLE_REGISTER_POPUP,
} from '../../slice/userSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import {
	Header,
	NavButton,
	NavMovieButton,
	NavTVSeasonsButton,
	NavBooksButton,
	RegisterButton,
	UserButton,
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

	const { isLoggedIn, isLogInPopUp, isRegisterPopUp, photoURL, id } =
		useSelector((state) => state.user);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const domain = query.get('domain');

	const loginHandler = () => {
		if (isRegisterPopUp) dispatch(TOGGLE_REGISTER_POPUP());
		dispatch(TOGGLE_LOGIN_POPUP());
	};

	const signUpHandler = () => {
		if (isLogInPopUp) dispatch(TOGGLE_LOGIN_POPUP());
		dispatch(TOGGLE_REGISTER_POPUP());
	};

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

	const moveReviewPageHandler = () => {
		navigate('/review');
	};

	const moveUserPageHadler = () => {
		navigate(`/users/${id}`);
	};

	useEffect(() => {
		const storedUser = localStorage.getItem('user');
		if (storedUser) {
			const user = JSON.parse(storedUser);
			if (user.isLoggedIn) {
				dispatch(LOGIN_USER(user));
			}
		} else {
			dispatch(LOGOUT_USER());
		}
	}, [dispatch]);

	return (
		<Header>
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
								<NavTVSeasonsButton domain={domain} onClick={onTvClick}>
									TV
								</NavTVSeasonsButton>
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
								{!isLoggedIn && (
									<NavButton onClick={loginHandler}>로그인</NavButton>
								)}
								{isLoggedIn && (
									<NavButton onClick={moveReviewPageHandler}>
										평가하기
									</NavButton>
								)}
							</NavLi>
							<NavLi>
								{!isLoggedIn && (
									<RegisterButton onClick={signUpHandler}>
										회원가입
									</RegisterButton>
								)}
								{isLoggedIn && (
									<UserButton onClick={moveUserPageHadler}>
										<img
											src={
												photoURL === null ? '/assets/icon-user.png' : photoURL
											}
											alt=""
										/>
									</UserButton>
								)}
							</NavLi>
						</NavUl>
					</div>
				</NavContent>
			</NavNav>
		</Header>
	);
};

export default Nav;
