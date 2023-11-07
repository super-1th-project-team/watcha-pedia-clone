import React from 'react';
import { ContentsSection, SectionTitleH3 } from '../ContentsInfo.style';
import { useSelector } from 'react-redux';
import { IoStarSharp } from 'react-icons/io5';
import { SlArrowDown } from 'react-icons/sl'
import * as style from './SimilarContents.style'

const SimilarContents = () => {
    const mockMovieData = useSelector(state => state.movie[0])
    return (
        <ContentsSection>
            <SectionTitleH3>비슷한 작품</SectionTitleH3>
            <style.SimilarUl>
                <style.SimilarLi>
                    <div>
                        <style.SimilarImg src='https://images.unsplash.com/photo-1635805737707-575885ab0820?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D' alt="포스터" />
                    </div>
                    <div>
                        <style.SimilarTitle>영화 제목</style.SimilarTitle>
                        <style.SimilarRating marginTop='2px'>평균 <span><IoStarSharp />몇점</span></style.SimilarRating>
                        <style.SimilarGenre fontSz='12px' lineHeight='16px' marginTop='1px'>영화(장르인듯)</style.SimilarGenre>
                    </div>
                </style.SimilarLi>
            </style.SimilarUl>
            <style.MoreSimilarBtn>더보기 <SlArrowDown style={{ width: '12px', marginLeft: '3px' }} /></style.MoreSimilarBtn>
        </ContentsSection>
    );
};

export default SimilarContents;