import { useDispatch, useSelector } from 'react-redux';
import SearchSwiper from '../../components/swiper/SearchSwiper/SearchSwiper';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
	SearchSection,
	SearchText,
	Divider,
	Title,
	Article,
	ImgWrap,
	Container,
	InfoWrap,
} from './Search.style';
import { CHECK_TV_PAGE } from '../../slice/tvSeasonsSlice';

const Search = () => {
	const searchValue = useSelector((state) => state.user.searchData);
	const [searchMovieData, setSearchMovieData] = useState([]);
	const [searchTVData, setSearchTVData] = useState([]);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const moveToContentsPage = (id) => {
		dispatch(CHECK_TV_PAGE(false));
		navigate(`/contents/${id}`);
	};

	const moveToTVContentsPage = (id) => {
		dispatch(CHECK_TV_PAGE(true));
		navigate(`/contents/${id}`);
	};

	const fetchSearchMovieData = async () => {
		const response = await axios.get(
			`https://api.themoviedb.org/3/search/movie?api_key=916d2ebdabad974a800012d13e9985cd&language=ko-KR&page=1&query=${searchValue}`,
		);
		setSearchMovieData(response.data.results);
	};

	const fetchSearchTVData = async () => {
		const response = await axios.get(
			`https://api.themoviedb.org/3/search/tv?api_key=916d2ebdabad974a800012d13e9985cd&language=ko-KR&page=1&query=${searchValue}`,
		);

		setSearchTVData(response.data.results);
	};

	useEffect(() => {
		fetchSearchMovieData();
		fetchSearchTVData();
	}, [searchValue]);

	const allData = searchMovieData.concat(searchTVData);

	return (
		<SearchSection>
			<SearchText>{`"${searchValue}"의 검색결과`}</SearchText>
			<SearchSwiper fetchData={allData} movePageFunc={moveToContentsPage} />
			<Title>영화</Title>
			<Container>
				{searchMovieData.map((movie) => (
					<Article key={movie.id} onClick={() => moveToContentsPage(movie.id)}>
						<ImgWrap>
							<img
								src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
								alt={movie.title}
							/>
						</ImgWrap>
						<InfoWrap>
							<h3>{movie.title}</h3>
							<div>{movie.release_date}</div>
						</InfoWrap>
					</Article>
				))}
			</Container>
			<Title>TV 프로그램</Title>
			<Container>
				{searchTVData.map((tv) => (
					<Article key={tv.id} onClick={() => moveToTVContentsPage(tv.id)}>
						<ImgWrap>
							<img
								src={`https://image.tmdb.org/t/p/original/${tv.poster_path}`}
								alt={tv.name}
								onError={(e) => {
									e.target.src = '/assets/icon-empty.svg';
								}}
							/>
						</ImgWrap>
						<InfoWrap>
							<h3>{tv.name}</h3>
							<div>{tv.first_air_date}</div>
						</InfoWrap>
					</Article>
				))}
			</Container>
		</SearchSection>
	);
};

export default Search;
