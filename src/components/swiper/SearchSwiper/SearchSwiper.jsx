import {
	AverageText,
	DataTitle,
	DateText,
	InfoWrap,
	RankNumber,
	StyledSwiperContainer,
	SwiperImg,
	SwiperWrap,
	Title,
} from './SearchSwiper.style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import { useLocation } from 'react-router-dom';

const SearchSwiper = ({ dataTitle, fetchData, movePageFunc }) => {
	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const domain = query.get('domain');

	return (
		<SwiperWrap>
			<DataTitle>{dataTitle}</DataTitle>
			<StyledSwiperContainer>
				<Swiper
					loop={false}
					spaceBetween={15}
					slidesPerView={6}
					slidesPerGroup={5}
					grabCursor={true}
					allowTouchMove={true}
					cssMode={false}
					navigation={true}
					modules={[Navigation, Mousewheel]}
					mousewheel={{ forceToAxis: true }}
					className="swiper">
					{fetchData.map((data, index) => (
						<SwiperSlide
							className="swiper-slide"
							key={index}
							onClick={() => movePageFunc(data.id)}>
							<RankNumber>{index + 1}</RankNumber>
							<SwiperImg>
								<img
									src={
										domain === 'books'
											? data.cover
											: `https://image.tmdb.org/t/p/original/${data.poster_path}`
									}
									alt=""
								/>
							</SwiperImg>
							<InfoWrap>
								<Title>
									{domain === 'tv_seasons' ? data.name : data.title}
								</Title>
								<DateText>
									{domain === 'tv_seasons'
										? data.first_air_date
										: data.release_date}
								</DateText>
								<AverageText>
									평점 : {Math.round(data.vote_average * 10) / 10}
								</AverageText>
							</InfoWrap>
						</SwiperSlide>
					))}
				</Swiper>
			</StyledSwiperContainer>
		</SwiperWrap>
	);
};

export default SearchSwiper;
