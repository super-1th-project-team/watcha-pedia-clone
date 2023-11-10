import React, { useContext } from 'react';
import { ContentsSection, SectionTitleH3 } from '../ContentsInfo.style';
import ContentsSwiper from './Swiper/ContentsSwiper';
import { SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import ModalContext from '../../../../context/ModalContext';
import * as style from './Swiper/ContentsSwiper.style';

const ContentsGallery = () => {
	const context = useContext(ModalContext);
	const galleryImages = useSelector((state) => state.movie.galleryImages);

	const imgModalHandler = (img) => {
		context.setIsImg(true);
		context.url(`https://image.tmdb.org/t/p/original/${img.file_path}`);
		context.openModal();
	};

	return (
		<ContentsSection>
			<SectionTitleH3>갤러리</SectionTitleH3>
			<ContentsSwiper>
				{galleryImages &&
					galleryImages.map((img, index) => (
						<SwiperSlide key={index} onClick={() => imgModalHandler(img)}>
							<style.SwiperImgDiv>
								<img
									src={
										galleryImages === undefined
											? ''
											: `https://image.tmdb.org/t/p/original/${img.file_path}`
									}
									alt=""
								/>
							</style.SwiperImgDiv>
						</SwiperSlide>
					))}
			</ContentsSwiper>
		</ContentsSection>
	);
};

export default ContentsGallery;
