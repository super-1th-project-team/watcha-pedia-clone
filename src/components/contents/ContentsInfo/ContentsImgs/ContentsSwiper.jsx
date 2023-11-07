import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './swiperStyles.css';
import { Navigation } from 'swiper/modules';
import { SwiperUl, SwiperImgDiv } from '../ContentsInfo.style'

const ContentsSwiper = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <SwiperUl>
          <li>
            <SwiperImgDiv>
              <img src="https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperImgDiv>
          </li>
          <li>
            <SwiperImgDiv>
              <img src="https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperImgDiv>
          </li>
          <li>
            <SwiperImgDiv>
              <img src="https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperImgDiv>
          </li>
        </SwiperUl>
      </SwiperSlide>
      <SwiperSlide>
        <SwiperUl>
          <li>
            <SwiperImgDiv>
              <img src="https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperImgDiv>
          </li>
          <li>
            <SwiperImgDiv>
              <img src="https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperImgDiv>
          </li>
          <li>
            <SwiperImgDiv>
              <img src="https://images.unsplash.com/photo-1682687218608-5e2522b04673?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </SwiperImgDiv>
          </li>
        </SwiperUl>
      </SwiperSlide>
    </Swiper>
  );
};

export default ContentsSwiper;