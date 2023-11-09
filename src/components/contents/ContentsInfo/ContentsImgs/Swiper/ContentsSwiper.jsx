import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { ContentsSwiperContainer } from './ContentsSwiper.style';


const ContentsSwiper = ({children}) => {
	return (
		<ContentsSwiperContainer>
			<Swiper
				navigation={true}
				modules={[Navigation]}
				className="mySwiper"
				slidesPerView={3}
				slidesPerGroup={3}
				spaceBetween={10}>
					{children}
			</Swiper>
		</ContentsSwiperContainer>
	);
};

export default ContentsSwiper;
