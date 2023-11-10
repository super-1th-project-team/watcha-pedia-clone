import { useSelector } from 'react-redux';
import ReviewHeader from '../ReviewHeader';
import ReviewList from '../ReviewList';
import { HiddenBox, ReviewWrapper } from '../styles/ReviewPage.style';

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
			<HiddenBox />
			<ReviewHeader />
			<ReviewList data={allMovieData} type="movie" />
		</ReviewWrapper>
	);
};

export default ReviewMovies;
