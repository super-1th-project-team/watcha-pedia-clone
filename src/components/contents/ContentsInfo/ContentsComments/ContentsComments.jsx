import React from 'react';
import Comment from './Comment';
import * as style from './ContentsComments.style'

const ContentsComments = () => {
    return (
        <style.CommentsDiv>
            <div>
                <h3>코멘트<span>개수</span></h3>
            </div>
            <Comment/>
            <button>더보기</button> 
        </style.CommentsDiv>
    );
};

export default ContentsComments;