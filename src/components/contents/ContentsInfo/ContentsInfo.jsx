import React from 'react';
import ContentsGallery from './ContentsGallery';
import ContentsComments from './ContentsComments';
import ContentsCollections from './ContentsCollections';
import SimilarContents from './SimilarContents';

const ContentsInfo = () => {
    return (
        <div>
            <div>
                <img src="" alt="" />
                <em>평균 별점<span>2.7만명</span></em>
                <p>그래프</p>
            </div>
            <section>
                <div>별점</div>
                <div>예상별점</div>
                <div>평균별점</div>
                <button>보고싶어요</button>
                <button>코멘트</button>
                <button>보는중</button>
                <button>더보기</button>
            </section>
            <section>내가 쓴 코멘트</section>
            <section>비슷한 작품</section>
            <section>작품 설명</section>
            <ContentsComments/>
            <ContentsGallery/>
            <ContentsCollections/>
            <SimilarContents/>
        </div>
    );
};

export default ContentsInfo;
