import React from 'react';
import * as style from './ContentsComments.style'
import Comment from './Comment';
import { ContentsSection, SectionTitleH3 } from '../ContentsInfo.style';
import { useNavigate, useParams } from 'react-router-dom';

const ContentsComments = () => {
    const navToComments = useNavigate();

    const moveToMoreComments = () => {
        navToComments(`/comments`)
    }

    return (
        <ContentsSection>
            <style.CommentsTitleDiv>
                <SectionTitleH3>코멘트</SectionTitleH3>
                <style.CommentsCountSpan>개수</style.CommentsCountSpan>
            </style.CommentsTitleDiv>
            <Comment/>
            <style.MoreBtn onClick={moveToMoreComments}>더보기</style.MoreBtn> 
        </ContentsSection>
    );
};

export default ContentsComments;