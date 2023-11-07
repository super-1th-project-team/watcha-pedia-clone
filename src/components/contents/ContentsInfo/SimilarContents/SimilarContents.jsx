import React from 'react';
import { ContentsSection, SectionTitleH3 } from '../ContentsInfo.style';
import { useSelector } from 'react-redux';
import { IoStarSharp } from 'react-icons/io5';
import { SlArrowDown } from 'react-icons/sl'
import * as style from './SimilarContents.style'

const SimilarContents = () => {
    const mockMovieData = useSelector(state => state.movie);
    const mockMovie2 = mockMovieData[1];
    return (
        <ContentsSection>
            <SectionTitleH3>비슷한 작품</SectionTitleH3>
            <style.SimilarUl>
                <style.SimilarLi>
                    <div>
                        <style.SimilarImg src={`https://image.tmdb.org/t/p/original/${mockMovie2.poster_path}`} alt="포스터" />
                    </div>
                    <div>
                        <style.SimilarTitle>{mockMovie2.title}</style.SimilarTitle>
                        <style.SimilarRating>평균 <span><IoStarSharp />{mockMovie2.vote_average/2}</span></style.SimilarRating>
                        <style.SimilarGenre >영화(장르인듯)</style.SimilarGenre>
                    </div>
                </style.SimilarLi>
            </style.SimilarUl>
            <style.MoreSimilarBtn>더보기 <SlArrowDown style={{ width: '12px', marginLeft: '3px' }} /></style.MoreSimilarBtn>
        </ContentsSection>
    );
};

export default SimilarContents;