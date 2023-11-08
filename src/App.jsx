import { Outlet, useParams } from 'react-router-dom';
import { createPortal } from 'react-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import movieAxios from './api/axios';
import tvAxios from './api/axios';
import booksAxios from './api/booksAxios';
import movieRequests from './api/movieRequests';
import { useDispatch, useSelector } from 'react-redux';
import {
	SET_ACTION_MOVIES,
	SET_MOVIE_DETAIL,
	SET_NOW_PLAYING,
	SET_POPULAR,
	SET_ROMANTIC_MOVIES,
	SET_TOP_RATED,
	SET_TRENDING,
	SET_UPCOMING,
} from './slice/movieSlice';
import tvSeasonsRequests from './api/tvSeasonsRequests';
import booksRequests from './api/booksRequests';
import AuthContainer from './components/auth/AuthContainer/AuthContainer';
import shuffleArray from './utils/shuffleArray';
import {
	SET_BEST_SELLER_BOOKS,
	SET_FOREIGN_BEST_SELLER_BOOKS,
	SET_NEW_BOOKS,
	SET_USED_BOOKS,
} from './slice/booksSlice';
import { SET_TV_DAY_TREND } from './slice/tvSeasonsSlice';

const App = () => {
	const isLogInPopUp = useSelector((state) => state.user.isLogInPopUp);
	const isRegisterPopUp = useSelector((state) => state.user.isRegisterPopUp);

	const dispatch = useDispatch();

	const fetchNowPlayingData = async () => {
		const response = await movieAxios.get(movieRequests.fetchNowPlaying);
		dispatch(SET_NOW_PLAYING(shuffleArray(response.data.results.reverse())));
	};

	const fetchPopularData = async () => {
		const response = await movieAxios.get(movieRequests.fetchPopular);
		dispatch(SET_POPULAR(response.data.results));
	};

	const fetchTopRatedData = async () => {
		const response = await movieAxios.get(movieRequests.fetchTopRated);
		dispatch(SET_TOP_RATED(shuffleArray(response.data.results)));
	};

	const fetchUpComingData = async () => {
		const response = await movieAxios.get(movieRequests.fetchUpComing);
		dispatch(SET_UPCOMING(shuffleArray(response.data.results)));
	};

	const fetchTrendingData = async () => {
		const response = await movieAxios.get(movieRequests.fetchTrending);
		dispatch(SET_TRENDING(shuffleArray(response.data.results)));
	};

	const fetchActionData = async () => {
		const response = await movieAxios.get(movieRequests.fetchActionMovies);
		dispatch(SET_ACTION_MOVIES(shuffleArray(response.data.results)));
	};

	const fetchRomanticData = async () => {
		const response = await movieAxios.get(movieRequests.fetchRomanceMovies);
		dispatch(SET_ROMANTIC_MOVIES(shuffleArray(response.data.results)));
	};

	const fetchTvDayTrendData = async () => {
		const response = await tvAxios.get(tvSeasonsRequests.fetchTVDayTrend);

		dispatch(SET_TV_DAY_TREND(shuffleArray(response.data.results)));
	};

	const fetchNewBooksData = async () => {
		const response = await booksAxios.get('ItemList.aspx', {
			params: booksRequests.fetchNewBooks,
		});

		dispatch(SET_NEW_BOOKS(shuffleArray(response.data.item)));
	};

	const fetchBestSellerData = async () => {
		const response = await booksAxios.get('ItemList.aspx', {
			params: booksRequests.fetchBestSeller,
		});

		dispatch(SET_BEST_SELLER_BOOKS(shuffleArray(response.data.item)));
	};

	const fetchForeignBestSellerData = async () => {
		const response = await booksAxios.get('ItemList.aspx', {
			params: booksRequests.fetchBlogBestSeller,
		});

		dispatch(SET_FOREIGN_BEST_SELLER_BOOKS(shuffleArray(response.data.item)));
	};

	const fetchUsedBooksData = async () => {
		const response = await booksAxios.get('ItemList.aspx', {
			params: booksRequests.fetchUsedBooks,
		});

		dispatch(SET_USED_BOOKS(shuffleArray(response.data.item)));
	};

	useEffect(() => {
		fetchNowPlayingData();
		fetchPopularData();
		fetchTopRatedData();
		fetchUpComingData();
		fetchTrendingData();
		fetchActionData();
		fetchRomanticData();

		fetchTvDayTrendData();

		fetchNewBooksData();
		fetchBestSellerData();
		fetchForeignBestSellerData();
		fetchUsedBooksData();
	}, []);

	return (
		<>
			<Nav />
			<Outlet />
			<Footer />
			{isLogInPopUp &&
				createPortal(
					<AuthContainer />,
					document.getElementById('register-login-root'),
				)}
			{isRegisterPopUp &&
				createPortal(
					<AuthContainer />,
					document.getElementById('register-login-root'),
				)}
		</>
	);
};

export default App;
