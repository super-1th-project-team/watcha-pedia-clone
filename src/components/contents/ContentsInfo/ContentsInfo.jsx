import React from 'react';
import ContentsGallery from './ContentsGallery/ContentsGallery';
import ContentsCollections from './ContentsCollections/ContentsCollections';
import SimilarContents from './SimilarContents/SimilarContents';
import ContentsInfoBox from './ContentsInfoBox/ContentsInfoBox';
import ContentsComments from './ContentsComments/ContentsComments';
import ContentsVideo from './ContentsVideo/ContentsVideo';

const ContentsInfo = () => {
    return (
        <>
            <ContentsInfoBox/>
            <ContentsComments />
            <ContentsGallery />
            <ContentsVideo/>
            <ContentsCollections />
            <SimilarContents />
        </>
    );
};

export default ContentsInfo;
