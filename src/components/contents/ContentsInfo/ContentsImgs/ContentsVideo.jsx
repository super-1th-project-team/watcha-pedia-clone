import React from 'react';
import { ContentsSection, SectionTitleH3 } from '../ContentsInfo.style';
import ContentsSwiper from './ContentsSwiper';

const ContentsVideo = () => {
    return (
        <ContentsSection>
            <SectionTitleH3>동영상</SectionTitleH3>
            <ContentsSwiper />
        </ContentsSection>
    );
};

export default ContentsVideo;