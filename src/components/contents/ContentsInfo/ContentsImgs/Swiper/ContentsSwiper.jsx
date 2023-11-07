import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './swiperStyles.css';
import { Navigation } from 'swiper/modules';
import * as style from './ContentsSwiper.style';

const ContentsSwiper = () => {
	const [clickedImg, setClickedImg] = useState(false);
	const [imgUrl, setImgUrl] = useState('');
	const mockMovieImgs = [
		{
			url: 'https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			url: 'https://images.unsplash.com/photo-1590179068383-b9c69aacebd3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			url: 'https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			url: 'https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
		{
			url: 'https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		},
	];

	const imgModalHandler = (img) => {
		setClickedImg(true);
		setImgUrl(img.url)
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
				{mockMovieImgs.map((img, index) => (
					<SwiperSlide key={index} onClick={() => imgModalHandler(img)}>
						<img src={img.url} alt="" />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default ContentsSwiper;
