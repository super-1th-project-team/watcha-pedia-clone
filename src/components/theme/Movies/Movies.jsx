import { useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/navigation';
import { MovieContent, MoviesBody } from './Movies.style';
import { useNavigate, useParams } from 'react-router-dom';
import MainSwiper from '../../swiper/MainSwiper/MainSwiper';

const Movies = () => {
	const nowPlayingMovieData = useSelector((state) => state.movie.nowPlaying);
	const popularMovieData = useSelector((state) => state.movie.popular);
	const topRatedMovieData = useSelector((state) => state.movie.topRated);
	const upComingMovieData = useSelector((state) => state.movie.upComing);
	const trendingMovieData = useSelector((state) => state.movie.trending);
	const actionMovieData = useSelector((state) => state.movie.actionMovies);
	const romanticMovieData = useSelector((state) => state.movie.romanticMovies);
	const navigate = useNavigate();

	const { id } = useParams();

	const moveToContentsPage = (id) => {
		navigate(`/contents/${id}`);
	};

	return (
		<MoviesBody>
			<MovieContent>
				<MainSwiper
					dataTitle="현재 상영 중인 영화"
					fetchData={nowPlayingMovieData}
					movePageFunc={moveToContentsPage}
				/>
				<MainSwiper
					dataTitle="박스오피스 순위"
					fetchData={topRatedMovieData}
					movePageFunc={moveToContentsPage}
				/>
				<MainSwiper
					dataTitle="인기 영화"
					fetchData={popularMovieData}
					movePageFunc={moveToContentsPage}
				/>
				<MainSwiper
					dataTitle="개봉될 영화"
					fetchData={upComingMovieData}
					movePageFunc={moveToContentsPage}
				/>
				<MainSwiper
					dataTitle="트렌드 영화"
					fetchData={trendingMovieData}
					movePageFunc={moveToContentsPage}
				/>
				<MainSwiper
					dataTitle="액션 영화"
					fetchData={actionMovieData}
					movePageFunc={moveToContentsPage}
				/>
				<MainSwiper
					dataTitle="로맨틱 영화"
					fetchData={romanticMovieData}
					movePageFunc={moveToContentsPage}
				/>
			</MovieContent>
		</MoviesBody>
	);
};

export default Movies;
