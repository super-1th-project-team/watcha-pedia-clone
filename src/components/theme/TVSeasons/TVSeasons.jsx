import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { TvBody, TvContent, TvTitle } from './TVSeasons.style';

const TVSeasons = () => {
	const actionTvData = useSelector((state) => state.tvSeasons);

	return (
		<TvBody>
			<TvContent>
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
						{actionTvData.map((tvSeason, index) => (
							<SwiperSlide key={index}>
								<TvTitle>{index + 1}</TvTitle>
								<img
									style={{
										width: '200px',
										height: '300px',
										borderRadius: '8px',
									}}
									src={`https://image.tmdb.org/t/p/original/${tvSeason.poster_path}`}
									alt=""
								/>
								<TvTitle>{tvSeason.title}</TvTitle>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</TvContent>
		</TvBody>
		// <ul>
		// 	{actionTvData.map((tvSeason, index) => (
		// 		<li key={index}>
		// 			<img
		// 				style={{ width: '300px', height: '500px' }}
		// 				src={`https://image.tmdb.org/t/p/original/${tvSeason.poster_path}`}
		// 				alt=""
		// 			/>
		// 			<div>{tvSeason.title}</div>
		// 		</li>
		// 	))}
		// </ul>
	);
};

export default TVSeasons;
