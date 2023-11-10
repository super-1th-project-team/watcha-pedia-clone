import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	LOGIN_USER,
	LOGOUT_USER,
	SET_SEARCH_DATA,
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
	NavWhiteLogo,
} from './Nav.style';
import { BiSearch } from 'react-icons/bi';

const Nav = () => {
	const [searchValue, setSearchValue] = useState('');
	const searchInputRef = useRef('');

	const [transparent, setTransparent] = useState(true);
	const [scrollPosition, setScrollPosition] = useState(0);

	const { isLoggedIn, isLogInPopUp, isRegisterPopUp, photoURL, id } =
		useSelector((state) => state.user);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const domain = query.get('domain');
	let contentsUrl = location.pathname.includes('/contents');

	const loginHandler = () => {
		if (isRegisterPopUp) dispatch(TOGGLE_REGISTER_POPUP());
		dispatch(TOGGLE_LOGIN_POPUP());
		document.body.style.overflow = 'hidden';
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
		dispatch(SET_SEARCH_DATA(searchInputRef.current.value));
		searchInputRef.current.value = '';
	};

	const moveReviewPageHandler = () => {
		navigate('/review');
	};

	const moveUserPageHandler = () => {
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

	const updateScroll = () => {
		setScrollPosition(window.scrollY || document.documentElement.scrollTop);
	};
	useEffect(() => {
		window.addEventListener('scroll', updateScroll);
	}, []);

	useEffect(() => {
		contentsUrl && scrollPosition < 60
			? setTransparent(true)
			: setTransparent(false);
	}, [scrollPosition, contentsUrl]);

	return (
		<Header contents={transparent}>
			<NavNav>
				<NavContent>
					<div>
						<NavUl>
							<NavLi>
								<NavLogo onClick={onHomeClick} />
							</NavLi>
							<NavLi>
								<NavMovieButton
									contents={transparent}
									domain={domain}
									onClick={onMovieClick}>
									영화
								</NavMovieButton>
							</NavLi>
							<NavLi>
								<NavTVSeasonsButton
									contents={transparent}
									domain={domain}
									onClick={onTvClick}>
									TV
								</NavTVSeasonsButton>
							</NavLi>
							<NavLi>
								<NavBooksButton
									contents={transparent}
									domain={domain}
									onClick={onBookClick}>
									책
								</NavBooksButton>
							</NavLi>
						</NavUl>
					</div>
					<div>
						<NavUl>
							<NavLi>
								<form onSubmit={SearchValueSubmitHandler}>
									<BiSearch size={20} color="var(--color-light-gray)" />
									<NavSearchInput
										placeholder="콘텐츠,인물,컬렉션,유저를 검색해보세요."
										onChange={onSearchValueHandler}
										ref={searchInputRef}
										contents={transparent}
									/>
								</form>
							</NavLi>
							<NavLi>
								{!isLoggedIn && (
									<NavButton onClick={loginHandler} contents={transparent}>
										로그인
									</NavButton>
								)}
								{isLoggedIn && (
									<NavButton
										onClick={moveReviewPageHandler}
										contents={transparent}>
										평가하기
									</NavButton>
								)}
							</NavLi>
							<NavLi>
								{!isLoggedIn && (
									<RegisterButton
										onClick={signUpHandler}
										contents={transparent}>
										회원가입
									</RegisterButton>
								)}
								{isLoggedIn && (
									<UserButton onClick={moveUserPageHandler}>
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
