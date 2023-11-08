import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './swiperStyles.css';
import { Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';

const ContentsSwiper = () => {
	const [clickedImg, setClickedImg] = useState(false);
	const galleryImages = useSelector((state) => state.galleryImages);

	const imgModalHandler = (img) => {
		setClickedImg(true);
	};

	return (
		<>
			<Swiper
				navigation={true}
				modules={[Navigation]}
				className="mySwiper"
				slidesPerView={3}
				slidesPerGroup={3}
				spaceBetween={5}>
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
		</>
	);
};

export default ContentsSwiper;
