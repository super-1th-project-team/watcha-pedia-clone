import React from 'react';
import ContentsGallery from './ContentsGallery';
import ContentsComments from './ContentsComments';
import ContentsCollections from './ContentsCollections';
import SimilarContents from './SimilarContents';
import ContentsInfoBox from './ContentsInfoBox/ContentsInfoBox';

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
