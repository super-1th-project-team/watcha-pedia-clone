import React from 'react';
import { ContentsSection, SectionTitleH3 } from '../ContentsInfo.style';
import ContentsSwiper from './Swiper/ContentsSwiper';

const ContentsVideo = () => {
    return (
        <ContentsSection>
            <SectionTitleH3>동영상</SectionTitleH3>
            <ContentsSwiper />
        </ContentsSection>
    );
};

export default ContentsVideo;