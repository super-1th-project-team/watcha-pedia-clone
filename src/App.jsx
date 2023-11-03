import { Outlet } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import tvAxios from './api/axios';
import booksAxios from './api/booksAxios';
import axios from 'axios';
import movieRequests from './api/movieRequests';
import { useDispatch } from 'react-redux';
import { FETCH_MOVIE_DATA } from './slice/movieSlice';
import tvSeasonsRequests from './api/tvSeasonsRequests';
import { FETCH_TV_SEASONS_DATA } from './slice/tvSeasonsSlice';
import booksRequests from './api/booksRequests';
import { FETCH_BOOKS_DATA } from './slice/booksSlice';

const App = () => {
	const dispatch = useDispatch();

	const fetchMovieData = async () => {
		const response = await axios.get('/data/movie.json');
		dispatch(FETCH_MOVIE_DATA(response.data));
	};

	const fetchTVSeasonsData = async () => {
		const response = await axios.get('/data/tvSeasons.json');
		dispatch(FETCH_TV_SEASONS_DATA(response.data));
	};

	const fetchBooksData = async () => {
		const response = await axios.get('/data/books.json');

		dispatch(FETCH_BOOKS_DATA(response.data));
	};

	useEffect(() => {
		fetchMovieData();
		fetchTVSeasonsData();
		fetchBooksData();
	}, []);

	return (
		<>
			<Nav />
			<Outlet />
			<Footer />
		</>
	);
};

export default App;
