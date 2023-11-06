import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { MovieContent, MovieTitle, MoviesBody } from './Movies.style';

const Movies = () => {
	const nowPlayingMovieData = useSelector((state) => state.movie);
	const tredingMovieData = useSelector((state) => state.movie);

	return (
		<MoviesBody>
			<MovieContent>
				<div>
					<Swiper
						loop={false}
						spaceBetween={0}
						slidesPerView={5}
						slidesPerGroup={5}
						grabCursor={true}
						allowTouchMove={false}
						cssMode={true}
						navigation={true}
						modules={[Navigation]}
						className="mySwiper">
						{nowPlayingMovieData.map((movie, index) => (
							<SwiperSlide key={index}>
								<MovieTitle>{index + 1}</MovieTitle>
								<img
									style={{
										width: '200px',
										height: '300px',
										borderRadius: '8px',
									}}
									src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
									alt=""
								/>
								<MovieTitle>{movie.title}</MovieTitle>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<Swiper
					loop={false}
					spaceBetween={0}
					slidesPerView={5}
					slidesPerGroup={5}
					grabCursor={true}
					allowTouchMove={false}
					cssMode={true}
					navigation={true}
					modules={[Navigation]}
					className="mySwiper">
					{tredingMovieData.map((movie, index) => (
						<SwiperSlide key={index}>
							<MovieTitle>{index + 1}</MovieTitle>
							<img
								style={{ width: '200px', height: '300px', borderRadius: '8px' }}
								src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
								alt=""
							/>
							<MovieTitle>{movie.title}</MovieTitle>
						</SwiperSlide>
					))}
				</Swiper>
			</MovieContent>
		</MoviesBody>
	);
};

export default Movies;
