import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './swiperStyles.css';
import { Navigation } from 'swiper/modules';
import { SwiperUl, SwiperImgDiv, SwiperLi } from '../ContentsInfo.style'

const ContentsSwiper = () => {
  const mockMovieImgs = [
    {
      url: "https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      url: "https://images.unsplash.com/photo-1590179068383-b9c69aacebd3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      url: "https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      url: "https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      url: "https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]

  const oneSlide = [];
  for (let i = 0; i < mockMovieImgs.length; i += 3) {
    oneSlide.push(mockMovieImgs.slice(i, i + 3));
  }
  console.log(oneSlide)
  const openModalHandler = () => {
    console.log('it is working')
  }
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      {oneSlide.map((imgs, index) => (
        <SwiperSlide key={index}>
          <SwiperUl>
            {imgs.map((img, index) => (
              <SwiperLi key={index}>
                <SwiperImgDiv>
                  <img src={img.url} alt="" />
                </SwiperImgDiv>
              </SwiperLi>
            ))}
          </SwiperUl>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ContentsSwiper;