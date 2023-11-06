import React from 'react';
import * as style from './ContentsComments.style'
import Comment from './Comment';

const ContentsComments = () => {
    return (
        <style.CommentsBoxDiv>
            <style.CommentsTitleDiv>
                <style.CommentsH3>코멘트</style.CommentsH3>
                <style.CommentsCountSpan>개수</style.CommentsCountSpan>
            </style.CommentsTitleDiv>
            <Comment/>
            <style.MoreBtn>더보기</style.MoreBtn> 
        </style.CommentsBoxDiv>
    );
};

export default ContentsComments;