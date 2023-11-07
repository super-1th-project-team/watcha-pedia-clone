import React from 'react';
import { ContentsSection, SectionTitleH3 } from '../ContentsInfo.style';
import { useSelector } from 'react-redux';

const SimilarContents = () => {
    const mockMovieData = useSelector(state => state.movie[0])
    return (
        <ContentsSection>
            <SectionTitleH3>비슷한 작품</SectionTitleH3>
            <img src={`https://api.themoviedb.org/3/movie/${mockMovieData.id}/similar`} alt="" />
        </ContentsSection>
    );
};

export default SimilarContents;