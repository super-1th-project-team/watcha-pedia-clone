import { useSelector } from 'react-redux';
import ReviewHeader from '../ReviewHeader';
import ReviewList from '../ReviewList';
import { styled } from 'styled-components';

const ReviewMovies = () => {
	const nowPlayingMovieData = useSelector((state) => state.movie.nowPlaying);
	const popularMovieData = useSelector((state) => state.movie.popular);
	const topRatedMovieData = useSelector((state) => state.movie.topRated);
	const upComingMovieData = useSelector((state) => state.movie.upComing);
	const trendingMovieData = useSelector((state) => state.movie.trending);
	const actionMovieData = useSelector((state) => state.movie.actionMovies);
	const romanticMovieData = useSelector((state) => state.movie.romanticMovies);

	const allMovieData = [
		...nowPlayingMovieData,
		...popularMovieData,
		...topRatedMovieData,
		...upComingMovieData,
		...trendingMovieData,
		...actionMovieData,
		...romanticMovieData,
	];

	console.log(allMovieData);

	return (
		<ReviewWrapper>
			<ReviewHeader />
			<ReviewList data={allMovieData} type="movie" />
		</ReviewWrapper>
	);
};

export default ReviewMovies;

const ReviewWrapper = styled.div`
	margin: 100px auto;
	width: 640px;
	border: 1px solid var(--color-light-gray);
	border-radius: 5px;
	box-sizing: border-box;
	overflow: hidden;
`;
