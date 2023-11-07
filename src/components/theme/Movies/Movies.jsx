import { useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/navigation';
import { MovieContent, MoviesBody } from './Movies.style';
import { useNavigate } from 'react-router-dom';
import MainSwiper from '../../swiper/MainSwiper/MainSwiper';

const Movies = () => {
	const nowPlayingMovieData = useSelector((state) => state.movie);
	const navigate = useNavigate();

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
					dataTitle="트렌드 영화"
					fetchData={nowPlayingMovieData}
					movePageFunc={moveToContentsPage}
				/>
				<MainSwiper
					dataTitle="인기 영화"
					fetchData={nowPlayingMovieData}
					movePageFunc={moveToContentsPage}
				/>
				<MainSwiper
					dataTitle="액션 영화"
					fetchData={nowPlayingMovieData}
					movePageFunc={moveToContentsPage}
				/>
				<MainSwiper
					dataTitle="호러 영화"
					fetchData={nowPlayingMovieData}
					movePageFunc={moveToContentsPage}
				/>
				<MainSwiper
					dataTitle="로맨틱 영화"
					fetchData={nowPlayingMovieData}
					movePageFunc={moveToContentsPage}
				/>
				<MainSwiper
					dataTitle="다큐멘터리 영화"
					fetchData={nowPlayingMovieData}
					movePageFunc={moveToContentsPage}
				/>
			</MovieContent>
		</MoviesBody>
	);
};

export default Movies;
