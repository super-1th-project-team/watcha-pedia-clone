import React, { useContext, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';
import ModalContext from '../../../../../context/ModalContext';
import { ContentsSwiperContainer } from './ContentsSwiper.style';


const ContentsSwiper = () => {
	const context = useContext(ModalContext);
	const galleryImages = useSelector((state) => state.movie.galleryImages);
	const imgModalHandler = (img) => {
		context.setIsImg(true)
		context.url(`https://image.tmdb.org/t/p/original/${img.file_path}`);
		context.openModal();
	};

	return (
		<ContentsSwiperContainer>
			<Swiper
				navigation={true}
				modules={[Navigation]}
				className="mySwiper"
				slidesPerView={3}
				slidesPerGroup={3}
				spaceBetween={10}>
				{galleryImages &&
					galleryImages.map((img, index) => (
						<SwiperSlide key={index} onClick={() => imgModalHandler(img)}>
							<img
								src={
									galleryImages === undefined
										? ''
										: `https://image.tmdb.org/t/p/original/${img.file_path}`
								}
								alt=""
							/>
						</SwiperSlide>
					))}
			</Swiper>
		</ContentsSwiperContainer>
	);
};

export default ContentsSwiper;
