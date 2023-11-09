import React from 'react';
import { ContentsSection, SectionTitleH3 } from '../ContentsInfo.style';
import ContentsSwiper from './Swiper/ContentsSwiper';
import { SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import * as style from './Swiper/ContentsSwiper.style';
import {IoPlayCircleOutline} from 'react-icons/io5'

const ContentsVideo = () => {
	const videoDatas = useSelector((state) => state.movie.videos);
	const videoLinkHandler = (video) => {
		window.open(`https://www.youtube.com/watch?v=${video.key}`, '_blank');
	};
	return (
		<ContentsSection>
			<SectionTitleH3>동영상</SectionTitleH3>
			<ContentsSwiper>
				{videoDatas &&
					videoDatas.map((video, index) => (
						<SwiperSlide key={index} onClick={() => videoLinkHandler(video)}>
							<style.SwiperImgDiv>
                                <IoPlayCircleOutline className='play-icon'/>
								<img
									src={
										videoDatas === undefined
											? ''
											: `https://img.youtube.com/vi/${video.key}/0.jpg`
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

export default ContentsVideo;
