import React from 'react';
import * as style from './ContentsComments.style'
import { SectionTitleH3 } from './ContentsComments.style'
import Comment from './Comment';
import { ContentsSection } from '../ContentsInfo.style';

const ContentsComments = () => {
    return (
        <ContentsSection>
            <style.CommentsTitleDiv>
                <SectionTitleH3>코멘트</SectionTitleH3>
                <style.CommentsCountSpan>개수</style.CommentsCountSpan>
            </style.CommentsTitleDiv>
            <Comment/>
            <style.MoreBtn>더보기</style.MoreBtn> 
        </ContentsSection>
    );
};

export default ContentsComments;