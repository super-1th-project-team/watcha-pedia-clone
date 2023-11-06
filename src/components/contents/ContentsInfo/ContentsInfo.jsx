import React from 'react';
import ContentsGallery from './ContentsGallery';
import ContentsCollections from './ContentsCollections';
import SimilarContents from './SimilarContents';
import ContentsInfoBox from './ContentsInfoBox/ContentsInfoBox';
import ContentsComments from './ContentsComments/ContentsComments';

const ContentsInfo = () => {
    return (
        <>
            <ContentsInfoBox/>
            <ContentsComments />
            <ContentsGallery />
            <ContentsCollections />
            <SimilarContents />
        </>
    );
};

export default ContentsInfo;
