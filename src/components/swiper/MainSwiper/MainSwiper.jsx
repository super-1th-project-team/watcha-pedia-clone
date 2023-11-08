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
} from './MainSwiper.style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';

const MainSwiper = ({ dataTitle, fetchData, movePageFunc }) => {
	return (
		<SwiperWrap>
			<DataTitle>{dataTitle}</DataTitle>
			<StyledSwiperContainer>
				<Swiper
					loop={false}
					spaceBetween={0}
					slidesPerView={5}
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
									src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
									alt=""
								/>
							</SwiperImg>
							<InfoWrap>
								<Title>{data.title}</Title>
								<DateText>{data.release_date}</DateText>
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

export default MainSwiper;
