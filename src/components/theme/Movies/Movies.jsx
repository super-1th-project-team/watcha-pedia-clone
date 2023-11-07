import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const MoviesBody = styled.body`
	margin-top: 100px;
	margin-bottom: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const MovieContent = styled.div`
	width: 90%;
`;

const MovieTitle = styled.div`
	font-size: 20px;
	font-weight: 600;
	width: 200px;
	height: 40px;
`;

const Movies = () => {
	const nowPlayingMovieData = useSelector((state) => state.movie);

	return (
		<MoviesBody>
			<MovieContent>
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
